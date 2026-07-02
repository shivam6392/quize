window.quizData = window.quizData || {};
window.quizData.os = [
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Process is?",
    "options": [
      "Program in execution",
      "Hardware component",
      "Stored file",
      "Static code"
    ],
    "answer": 0,
    "explanation": "Process = program + execution context."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
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
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
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
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
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
      "Highest priority",
      "Process with shortest burst time",
      "Random",
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
      "No preemption",
      "Priority only",
      "Time quantum for preemption"
    ],
    "answer": 3,
    "explanation": "Each process gets equal CPU time slice."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
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
      "Process ID",
      "File descriptor",
      "Integer variable for process synchronization",
      "Memory address"
    ],
    "answer": 2,
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
      "Only hold and wait",
      "Only mutual exclusion",
      "Only circular wait",
      "Mutual exclusion, Hold & wait, No preemption, Circular wait"
    ],
    "answer": 3,
    "explanation": "All four Coffman conditions must hold simultaneously."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Banker's algorithm is for?",
    "options": [
      "Deadlock prevention",
      "Deadlock detection",
      "Deadlock avoidance",
      "Deadlock recovery"
    ],
    "answer": 2,
    "explanation": "Checks safe state before granting resources."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
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
      "More RAM",
      "Faster CPU",
      "Better graphics",
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
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FIFO page replacement?",
    "options": [
      "Evicts the oldest page in memory",
      "Most used page",
      "Least used page",
      "Newest page"
    ],
    "answer": 0,
    "explanation": "Simple but can suffer Belady's anomaly."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
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
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
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
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
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
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
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
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
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
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
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
      "One-to-one",
      "One-to-many",
      "Many-to-many",
      "Many user threads map to one kernel thread"
    ],
    "answer": 3,
    "explanation": "Efficient but one block stops all."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
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
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Spooling is?",
    "options": [
      "Network protocol",
      "Simultaneous Peripheral Operation On-Line",
      "CPU scheduling",
      "Memory management"
    ],
    "answer": 1,
    "explanation": "Buffers data for slow devices like printers."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Deadlock conditions (all four)?",
    "options": [
      "Only hold and wait",
      "Only mutual exclusion",
      "Only circular wait",
      "Mutual exclusion, Hold & wait, No preemption, Circular wait"
    ],
    "answer": 3,
    "explanation": "All four Coffman conditions must hold simultaneously."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
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
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Deadlock conditions (all four)?",
    "options": [
      "Only hold and wait",
      "Only mutual exclusion",
      "Only circular wait",
      "Mutual exclusion, Hold & wait, No preemption, Circular wait"
    ],
    "answer": 3,
    "explanation": "All four Coffman conditions must hold simultaneously."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
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
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
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
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
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
    "difficulty": "Easy",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FIFO page replacement?",
    "options": [
      "Evicts the oldest page in memory",
      "Most used page",
      "Least used page",
      "Newest page"
    ],
    "answer": 0,
    "explanation": "Simple but can suffer Belady's anomaly."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
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
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Banker's algorithm is for?",
    "options": [
      "Deadlock prevention",
      "Deadlock detection",
      "Deadlock avoidance",
      "Deadlock recovery"
    ],
    "answer": 2,
    "explanation": "Checks safe state before granting resources."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
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
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Banker's algorithm is for?",
    "options": [
      "Deadlock prevention",
      "Deadlock detection",
      "Deadlock avoidance",
      "Deadlock recovery"
    ],
    "answer": 2,
    "explanation": "Checks safe state before granting resources."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
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
    "difficulty": "Easy",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
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
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
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
    "difficulty": "Easy",
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
    "difficulty": "Easy",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
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
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Semaphore is?",
    "options": [
      "Process ID",
      "File descriptor",
      "Integer variable for process synchronization",
      "Memory address"
    ],
    "answer": 2,
    "explanation": "wait() decrements; signal() increments."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Process is?",
    "options": [
      "Program in execution",
      "Hardware component",
      "Stored file",
      "Static code"
    ],
    "answer": 0,
    "explanation": "Process = program + execution context."
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
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
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
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
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
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Spooling is?",
    "options": [
      "Network protocol",
      "Simultaneous Peripheral Operation On-Line",
      "CPU scheduling",
      "Memory management"
    ],
    "answer": 1,
    "explanation": "Buffers data for slow devices like printers."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Process is?",
    "options": [
      "Program in execution",
      "Hardware component",
      "Stored file",
      "Static code"
    ],
    "answer": 0,
    "explanation": "Process = program + execution context."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
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
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
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
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
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
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: many-to-one?",
    "options": [
      "One-to-one",
      "One-to-many",
      "Many-to-many",
      "Many user threads map to one kernel thread"
    ],
    "answer": 3,
    "explanation": "Efficient but one block stops all."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
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
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
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
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
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
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Deadlock conditions (all four)?",
    "options": [
      "Only hold and wait",
      "Only mutual exclusion",
      "Only circular wait",
      "Mutual exclusion, Hold & wait, No preemption, Circular wait"
    ],
    "answer": 3,
    "explanation": "All four Coffman conditions must hold simultaneously."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
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
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
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
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
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
    "difficulty": "Medium",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
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
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Moves in one direction then reverses",
      "Random access",
      "Shortest seek first",
      "Always starts from 0"
    ],
    "answer": 0,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
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
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
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
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FIFO page replacement?",
    "options": [
      "Evicts the oldest page in memory",
      "Most used page",
      "Least used page",
      "Newest page"
    ],
    "answer": 0,
    "explanation": "Simple but can suffer Belady's anomaly."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
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
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Spooling is?",
    "options": [
      "Network protocol",
      "Simultaneous Peripheral Operation On-Line",
      "CPU scheduling",
      "Memory management"
    ],
    "answer": 1,
    "explanation": "Buffers data for slow devices like printers."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
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
    "difficulty": "Hard",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Spooling is?",
    "options": [
      "Network protocol",
      "Simultaneous Peripheral Operation On-Line",
      "CPU scheduling",
      "Memory management"
    ],
    "answer": 1,
    "explanation": "Buffers data for slow devices like printers."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-one",
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-many"
    ],
    "answer": 1,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
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
    "difficulty": "Medium",
    "question": "Round Robin uses?",
    "options": [
      "Burst time",
      "No preemption",
      "Priority only",
      "Time quantum for preemption"
    ],
    "answer": 3,
    "explanation": "Each process gets equal CPU time slice."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Semaphore is?",
    "options": [
      "Process ID",
      "File descriptor",
      "Integer variable for process synchronization",
      "Memory address"
    ],
    "answer": 2,
    "explanation": "wait() decrements; signal() increments."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FIFO page replacement?",
    "options": [
      "Evicts the oldest page in memory",
      "Most used page",
      "Least used page",
      "Newest page"
    ],
    "answer": 0,
    "explanation": "Simple but can suffer Belady's anomaly."
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
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "Sorting",
      "Semaphores or mutex with bounded buffer",
      "File I/O only",
      "CPU scheduling"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Deadlock conditions (all four)?",
    "options": [
      "Only hold and wait",
      "Only mutual exclusion",
      "Only circular wait",
      "Mutual exclusion, Hold & wait, No preemption, Circular wait"
    ],
    "answer": 3,
    "explanation": "All four Coffman conditions must hold simultaneously."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FIFO page replacement?",
    "options": [
      "Evicts the oldest page in memory",
      "Most used page",
      "Least used page",
      "Newest page"
    ],
    "answer": 0,
    "explanation": "Simple but can suffer Belady's anomaly."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Round Robin uses?",
    "options": [
      "Burst time",
      "No preemption",
      "Priority only",
      "Time quantum for preemption"
    ],
    "answer": 3,
    "explanation": "Each process gets equal CPU time slice."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Deadlock conditions (all four)?",
    "options": [
      "Only hold and wait",
      "Only mutual exclusion",
      "Only circular wait",
      "Mutual exclusion, Hold & wait, No preemption, Circular wait"
    ],
    "answer": 3,
    "explanation": "All four Coffman conditions must hold simultaneously."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
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
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
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
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Faster CPU",
      "Better graphics",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Banker's algorithm is for?",
    "options": [
      "Deadlock prevention",
      "Deadlock detection",
      "Deadlock avoidance",
      "Deadlock recovery"
    ],
    "answer": 2,
    "explanation": "Checks safe state before granting resources."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
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
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Deadlock conditions (all four)?",
    "options": [
      "Only hold and wait",
      "Only mutual exclusion",
      "Only circular wait",
      "Mutual exclusion, Hold & wait, No preemption, Circular wait"
    ],
    "answer": 3,
    "explanation": "All four Coffman conditions must hold simultaneously."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
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
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory",
      "Fixed-size allocation",
      "CPU registers",
      "Variable-size allocation (segmentation)"
    ],
    "answer": 3,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
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
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Contiguous, Linked, Indexed",
      "Only indexed",
      "Only linked"
    ],
    "answer": 1,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Network protocol",
      "Hardware interrupt",
      "Software bug"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "Concurrent access to shared data",
      "CPU scheduling",
      "Memory allocation",
      "File compression"
    ],
    "answer": 0,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only CPU info",
      "Only PID"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
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
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always",
      "Memory overflow",
      "Too fast execution",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only",
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)"
    ],
    "answer": 3,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "Randomly",
      "In sorted order",
      "All at program start",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
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
    "difficulty": "Medium",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Starvation is worse"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "Fewer frames always worse",
      "LRU anomaly",
      "Optimal anomaly"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "High-level synchronization construct with mutual exclusion",
      "Hardware device",
      "Disk management tool",
      "Network monitor"
    ],
    "answer": 0,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Random",
      "Preemptive"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Least Recently Used page",
      "Random page",
      "Most recently used",
      "First loaded page"
    ],
    "answer": 0,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register",
      "Disk cache",
      "Main memory",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Excessive page faults slow system drastically",
      "Memory is empty",
      "Disk is full",
      "CPU is idle"
    ],
    "answer": 0,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
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
    "difficulty": "Hard",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Random blocks",
      "Fixed-size pages",
      "Logical segments (code, data, stack)",
      "Equal partitions"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Thread vs Process?",
    "options": [
      "Process shares memory",
      "Thread shares process memory; process has own address space",
      "Thread is heavier",
      "Same thing"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "fork() system call creates?",
    "options": [
      "A new child process",
      "New thread",
      "New device",
      "New file"
    ],
    "answer": 0,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SSTF disk scheduling?",
    "options": [
      "Shortest Seek Time First",
      "Reverse order",
      "FIFO",
      "Random order"
    ],
    "answer": 0,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Paging divides?",
    "options": [
      "Physical memory into segments",
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores"
    ],
    "answer": 1,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Optimal page replacement?",
    "options": [
      "Random page",
      "Evicts page not used for longest future time",
      "Oldest page",
      "Most used page"
    ],
    "answer": 1,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "Disk blocks",
      "All system pages",
      "CPU instructions"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "Fixed-size allocation (paging)",
      "Stack memory",
      "No allocation",
      "Variable-size allocation"
    ],
    "answer": 0,
    "explanation": "Allocated block larger than needed; wasted space within."
  }
];
