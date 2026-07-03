window.quizData = window.quizData || {};
window.quizData.coa = [
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "What is the decimal value of binary 1010?",
    "options": [
      "8",
      "10",
      "12",
      "6"
    ],
    "answer": 1,
    "explanation": "1010 = 8 + 2 = 10."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Which component of CPU performs calculations like addition and logic checks?",
    "options": [
      "Control Unit as per specification",
      "ALU (Arithmetic Logic Unit)",
      "Registers (standard definition)",
      "Cache in typical implementations"
    ],
    "answer": 1,
    "explanation": "ALU handles math and logical operations."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "What does the Program Counter (PC) store?",
    "options": [
      "Result of last calculation in standard usage",
      "Address of the next instruction to be fetched",
      "Current instruction value (general case)",
      "Address of accumulator as per specification"
    ],
    "answer": 1,
    "explanation": "PC tracks execution flow."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Pipelining increases CPU performance by?",
    "options": [
      "Increasing CPU clock speed based on convention",
      "Executing instructions in an overlapping manner",
      "Making instructions run faster individually",
      "Reducing memory access time (default behavior)"
    ],
    "answer": 1,
    "explanation": "Pipelining parallelizes different stages of instruction processing."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "What is a pipeline hazard caused by branches called?",
    "options": [
      "Structural Hazard",
      "Control Hazard",
      "Data Hazard",
      "Memory Hazard"
    ],
    "answer": 1,
    "explanation": "Branching changes PC, requiring stalls or flush."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "Which cache mapping technique allows any block of memory to be placed anywhere in cache?",
    "options": [
      "Fully Associative Mapping",
      "Set-Associative Mapping",
      "Direct Mapping in most cases",
      "Index Mapping in practice"
    ],
    "answer": 0,
    "explanation": "Fully associative allows maximum flexibility but complex lookup."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "DMA stands for?",
    "options": [
      "Dual Memory Access",
      "Direct Method Address",
      "Direct Memory Access",
      "Dynamic Memory Allocation"
    ],
    "answer": 2,
    "explanation": "DMA bypasses CPU for bulk data transfers between I/O and RAM."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Addressing mode: operand value is specified directly in the instruction?",
    "options": [
      "Immediate Addressing",
      "Register Addressing",
      "Indirect Addressing",
      "Direct Addressing"
    ],
    "answer": 0,
    "explanation": "Example: ADD #5 adds value 5 directly."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "RISC stands for?",
    "options": [
      "Reduced Info System Chip (general case)",
      "Reduced Instruction Set Computer",
      "Rapid Instruction Segment Computer",
      "Random Instruction Set Core"
    ],
    "answer": 1,
    "explanation": "RISC uses simple, single-cycle instructions."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "CISC stands for?",
    "options": [
      "Complex Instruction Set Computer",
      "Central Instruction Storage Computer",
      "Core Integrated System Chip",
      "Compressed Instruction Segment Computer"
    ],
    "answer": 0,
    "explanation": "CISC uses complex, variable-length instructions."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "What is Flynn's classification for parallel computers with multiple data streams but one instruction stream?",
    "options": [
      "MIMD",
      "MISD",
      "SISD",
      "SIMD"
    ],
    "answer": 3,
    "explanation": "SIMD = Single Instruction Multiple Data."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Cache hit ratio is defined as?",
    "options": [
      "Misses / Hits in most cases",
      "Hits / (Hits + Misses)",
      "Misses / Total Memory",
      "Hits / Total Memory"
    ],
    "answer": 1,
    "explanation": "Hit ratio measures cache effectiveness."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "5 bits",
      "2 bits",
      "7 bits",
      "19 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 201 to its binary representation.",
    "options": [
      "11001001",
      "11000110",
      "11001110",
      "11011010"
    ],
    "answer": 0,
    "explanation": "201 in binary base-2 is format = 11001001."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "2 bits",
      "0 bits",
      "16 bits",
      "3 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "1 bits",
      "4 bits",
      "28 bits",
      "6 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 190 to its binary representation.",
    "options": [
      "10111110",
      "11001111",
      "10111011",
      "11000011"
    ],
    "answer": 0,
    "explanation": "190 in binary base-2 is format = 10111110."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "10 bits",
      "5 bits",
      "16 bits",
      "8 bits"
    ],
    "answer": 3,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 75.",
    "options": [
      "0x96",
      "0x3F",
      "0x6B",
      "0x4B"
    ],
    "answer": 3,
    "explanation": "Decimal 75 translates directly to Base-16 hexadecimal as 0x4B."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 82 to its binary representation.",
    "options": [
      "1010111",
      "1001111",
      "1010010",
      "1100011"
    ],
    "answer": 2,
    "explanation": "82 in binary base-2 is format = 1010010."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "3 bits",
      "10 bits",
      "8 bits",
      "6 bits"
    ],
    "answer": 3,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(128KB/64B) = 11 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 63 to its binary representation.",
    "options": [
      "111111",
      "111100",
      "1000100",
      "1010000"
    ],
    "answer": 0,
    "explanation": "63 in binary base-2 is format = 111111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 157 to its binary representation.",
    "options": [
      "10011101",
      "10101110",
      "10011010",
      "10100010"
    ],
    "answer": 0,
    "explanation": "157 in binary base-2 is format = 10011101."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 153 to its binary representation.",
    "options": [
      "10010110",
      "10011110",
      "10101010",
      "10011001"
    ],
    "answer": 3,
    "explanation": "153 in binary base-2 is format = 10011001."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "10 bits",
      "3 bits",
      "6 bits",
      "8 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 181 to its binary representation.",
    "options": [
      "10110101",
      "11000110",
      "10110010",
      "10111010"
    ],
    "answer": 0,
    "explanation": "181 in binary base-2 is format = 10110101."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "12 bits",
      "7 bits",
      "14 bits",
      "10 bits"
    ],
    "answer": 3,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 290.",
    "options": [
      "0x116",
      "0x122",
      "0x142",
      "0x244"
    ],
    "answer": 1,
    "explanation": "Decimal 290 translates directly to Base-16 hexadecimal as 0x122."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 22 to its binary representation.",
    "options": [
      "11011",
      "100111",
      "10011",
      "10110"
    ],
    "answer": 3,
    "explanation": "22 in binary base-2 is format = 10110."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "2 bits",
      "5 bits",
      "7 bits",
      "27 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "20 bits",
      "6 bits",
      "4 bits",
      "1 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "18 bits",
      "8 bits",
      "3 bits",
      "6 bits"
    ],
    "answer": 3,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 492.",
    "options": [
      "0x3D8",
      "0x20C",
      "0x1E0",
      "0x1EC"
    ],
    "answer": 3,
    "explanation": "Decimal 492 translates directly to Base-16 hexadecimal as 0x1EC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 459.",
    "options": [
      "0x396",
      "0x1BF",
      "0x1EB",
      "0x1CB"
    ],
    "answer": 3,
    "explanation": "Decimal 459 translates directly to Base-16 hexadecimal as 0x1CB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 480.",
    "options": [
      "0x1E0",
      "0x200",
      "0x1D4",
      "0x3C0"
    ],
    "answer": 0,
    "explanation": "Decimal 480 translates directly to Base-16 hexadecimal as 0x1E0."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "14 bits",
      "20 bits",
      "18 bits",
      "15 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 124 to its binary representation.",
    "options": [
      "1111001",
      "1111100",
      "10001101",
      "10000001"
    ],
    "answer": 1,
    "explanation": "124 in binary base-2 is format = 1111100."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "8 bits",
      "13 bits",
      "13 bits",
      "11 bits"
    ],
    "answer": 3,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(128KB/64B) = 11 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 148 to its binary representation.",
    "options": [
      "10010001",
      "10011001",
      "10100101",
      "10010100"
    ],
    "answer": 3,
    "explanation": "148 in binary base-2 is format = 10010100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 436.",
    "options": [
      "0x368",
      "0x1B4",
      "0x1A8",
      "0x1D4"
    ],
    "answer": 1,
    "explanation": "Decimal 436 translates directly to Base-16 hexadecimal as 0x1B4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 179.",
    "options": [
      "0xB3",
      "0x166",
      "0xA7",
      "0xD3"
    ],
    "answer": 0,
    "explanation": "Decimal 179 translates directly to Base-16 hexadecimal as 0xB3."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "3 bits",
      "10 bits",
      "6 bits",
      "8 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 296.",
    "options": [
      "0x250",
      "0x148",
      "0x11C",
      "0x128"
    ],
    "answer": 3,
    "explanation": "Decimal 296 translates directly to Base-16 hexadecimal as 0x128."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 219.",
    "options": [
      "0xDB",
      "0x1B6",
      "0xCF",
      "0xFB"
    ],
    "answer": 0,
    "explanation": "Decimal 219 translates directly to Base-16 hexadecimal as 0xDB."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "12 bits",
      "17 bits",
      "15 bits",
      "17 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "8 bits",
      "5 bits",
      "10 bits",
      "8 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 89 to its binary representation.",
    "options": [
      "1010110",
      "1011110",
      "1101010",
      "1011001"
    ],
    "answer": 3,
    "explanation": "89 in binary base-2 is format = 1011001."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "7 bits",
      "17 bits",
      "4 bits",
      "9 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(128KB/64B) = 11 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 93 to its binary representation.",
    "options": [
      "1101110",
      "1011010",
      "1100010",
      "1011101"
    ],
    "answer": 3,
    "explanation": "93 in binary base-2 is format = 1011101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 299.",
    "options": [
      "0x11F",
      "0x256",
      "0x12B",
      "0x14B"
    ],
    "answer": 2,
    "explanation": "Decimal 299 translates directly to Base-16 hexadecimal as 0x12B."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "7 bits",
      "10 bits",
      "22 bits",
      "12 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "19 bits",
      "14 bits",
      "17 bits",
      "15 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "2 bits",
      "11 bits",
      "5 bits",
      "7 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 249.",
    "options": [
      "0xF9",
      "0xED",
      "0x1F2",
      "0x119"
    ],
    "answer": 0,
    "explanation": "Decimal 249 translates directly to Base-16 hexadecimal as 0xF9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 496.",
    "options": [
      "0x210",
      "0x3E0",
      "0x1F0",
      "0x1E4"
    ],
    "answer": 2,
    "explanation": "Decimal 496 translates directly to Base-16 hexadecimal as 0x1F0."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "14 bits",
      "19 bits",
      "17 bits",
      "15 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 104.",
    "options": [
      "0x5C",
      "0x88",
      "0xD0",
      "0x68"
    ],
    "answer": 3,
    "explanation": "Decimal 104 translates directly to Base-16 hexadecimal as 0x68."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 167 to its binary representation.",
    "options": [
      "10100111",
      "10101100",
      "10111000",
      "10100100"
    ],
    "answer": 0,
    "explanation": "167 in binary base-2 is format = 10100111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 139 to its binary representation.",
    "options": [
      "10001000",
      "10011100",
      "10010000",
      "10001011"
    ],
    "answer": 3,
    "explanation": "139 in binary base-2 is format = 10001011."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "9 bits",
      "6 bits",
      "11 bits",
      "15 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 168 to its binary representation.",
    "options": [
      "10101000",
      "10111001",
      "10101101",
      "10100101"
    ],
    "answer": 0,
    "explanation": "168 in binary base-2 is format = 10101000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 37 to its binary representation.",
    "options": [
      "110110",
      "101010",
      "100010",
      "100101"
    ],
    "answer": 3,
    "explanation": "37 in binary base-2 is format = 100101."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 116 to its binary representation.",
    "options": [
      "1110100",
      "1110001",
      "1111001",
      "10000101"
    ],
    "answer": 0,
    "explanation": "116 in binary base-2 is format = 1110100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 107 to its binary representation.",
    "options": [
      "1111100",
      "1101000",
      "1101011",
      "1110000"
    ],
    "answer": 2,
    "explanation": "107 in binary base-2 is format = 1101011."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 186 to its binary representation.",
    "options": [
      "11001011",
      "10110111",
      "10111010",
      "10111111"
    ],
    "answer": 2,
    "explanation": "186 in binary base-2 is format = 10111010."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "10 bits",
      "22 bits",
      "12 bits",
      "7 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 141 to its binary representation.",
    "options": [
      "10011110",
      "10010010",
      "10001010",
      "10001101"
    ],
    "answer": 3,
    "explanation": "141 in binary base-2 is format = 10001101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 400.",
    "options": [
      "0x1B0",
      "0x190",
      "0x184",
      "0x320"
    ],
    "answer": 1,
    "explanation": "Decimal 400 translates directly to Base-16 hexadecimal as 0x190."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 45 to its binary representation.",
    "options": [
      "111110",
      "110010",
      "101101",
      "101010"
    ],
    "answer": 2,
    "explanation": "45 in binary base-2 is format = 101101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 442.",
    "options": [
      "0x1DA",
      "0x1AE",
      "0x1BA",
      "0x374"
    ],
    "answer": 2,
    "explanation": "Decimal 442 translates directly to Base-16 hexadecimal as 0x1BA."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "12 bits",
      "7 bits",
      "10 bits",
      "14 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 184 to its binary representation.",
    "options": [
      "11001001",
      "10111101",
      "10110101",
      "10111000"
    ],
    "answer": 3,
    "explanation": "184 in binary base-2 is format = 10111000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 322.",
    "options": [
      "0x142",
      "0x162",
      "0x136",
      "0x284"
    ],
    "answer": 0,
    "explanation": "Decimal 322 translates directly to Base-16 hexadecimal as 0x142."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 395.",
    "options": [
      "0x17F",
      "0x18B",
      "0x1AB",
      "0x316"
    ],
    "answer": 1,
    "explanation": "Decimal 395 translates directly to Base-16 hexadecimal as 0x18B."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 38 to its binary representation.",
    "options": [
      "101011",
      "100011",
      "110111",
      "100110"
    ],
    "answer": 3,
    "explanation": "38 in binary base-2 is format = 100110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 60 to its binary representation.",
    "options": [
      "1001101",
      "111100",
      "111001",
      "1000001"
    ],
    "answer": 1,
    "explanation": "60 in binary base-2 is format = 111100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 511.",
    "options": [
      "0x21F",
      "0x3FE",
      "0x1F3",
      "0x1FF"
    ],
    "answer": 3,
    "explanation": "Decimal 511 translates directly to Base-16 hexadecimal as 0x1FF."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "5 bits",
      "16 bits",
      "8 bits",
      "10 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 103 to its binary representation.",
    "options": [
      "1100111",
      "1100100",
      "1111000",
      "1101100"
    ],
    "answer": 0,
    "explanation": "103 in binary base-2 is format = 1100111."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "6 bits",
      "3 bits",
      "26 bits",
      "8 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 550.",
    "options": [
      "0x226",
      "0x246",
      "0x21A",
      "0x44C"
    ],
    "answer": 0,
    "explanation": "Decimal 550 translates directly to Base-16 hexadecimal as 0x226."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 109.",
    "options": [
      "0x8D",
      "0x6D",
      "0xDA",
      "0x61"
    ],
    "answer": 1,
    "explanation": "Decimal 109 translates directly to Base-16 hexadecimal as 0x6D."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "3 bits",
      "6 bits",
      "18 bits",
      "8 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 378.",
    "options": [
      "0x19A",
      "0x16E",
      "0x17A",
      "0x2F4"
    ],
    "answer": 2,
    "explanation": "Decimal 378 translates directly to Base-16 hexadecimal as 0x17A."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 152 to its binary representation.",
    "options": [
      "10010101",
      "10011101",
      "10101001",
      "10011000"
    ],
    "answer": 3,
    "explanation": "152 in binary base-2 is format = 10011000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 312.",
    "options": [
      "0x158",
      "0x12C",
      "0x138",
      "0x270"
    ],
    "answer": 2,
    "explanation": "Decimal 312 translates directly to Base-16 hexadecimal as 0x138."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 164 to its binary representation.",
    "options": [
      "10110101",
      "10100100",
      "10101001",
      "10100001"
    ],
    "answer": 1,
    "explanation": "164 in binary base-2 is format = 10100100."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "22 bits",
      "7 bits",
      "10 bits",
      "12 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "0 bits",
      "2 bits",
      "3 bits",
      "16 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "12 bits",
      "4 bits",
      "14 bits",
      "9 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 332.",
    "options": [
      "0x298",
      "0x14C",
      "0x16C",
      "0x140"
    ],
    "answer": 1,
    "explanation": "Decimal 332 translates directly to Base-16 hexadecimal as 0x14C."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "4 bits",
      "1 bits",
      "-1 bits",
      "17 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 430.",
    "options": [
      "0x35C",
      "0x1A2",
      "0x1CE",
      "0x1AE"
    ],
    "answer": 3,
    "explanation": "Decimal 430 translates directly to Base-16 hexadecimal as 0x1AE."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 348.",
    "options": [
      "0x17C",
      "0x15C",
      "0x150",
      "0x2B8"
    ],
    "answer": 1,
    "explanation": "Decimal 348 translates directly to Base-16 hexadecimal as 0x15C."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 91 to its binary representation.",
    "options": [
      "1011011",
      "1101100",
      "1100000",
      "1011000"
    ],
    "answer": 0,
    "explanation": "91 in binary base-2 is format = 1011011."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 58 to its binary representation.",
    "options": [
      "1001011",
      "111010",
      "110111",
      "111111"
    ],
    "answer": 1,
    "explanation": "58 in binary base-2 is format = 111010."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "4 bits",
      "28 bits",
      "6 bits",
      "1 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "18 bits",
      "16 bits",
      "13 bits",
      "16 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 412.",
    "options": [
      "0x338",
      "0x19C",
      "0x1BC",
      "0x190"
    ],
    "answer": 1,
    "explanation": "Decimal 412 translates directly to Base-16 hexadecimal as 0x19C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 85.",
    "options": [
      "0x75",
      "0x55",
      "0xAA",
      "0x49"
    ],
    "answer": 1,
    "explanation": "Decimal 85 translates directly to Base-16 hexadecimal as 0x55."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "1 bits",
      "14 bits",
      "2 bits",
      "4 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 46 to its binary representation.",
    "options": [
      "111111",
      "110011",
      "101110",
      "101011"
    ],
    "answer": 2,
    "explanation": "46 in binary base-2 is format = 101110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 146 to its binary representation.",
    "options": [
      "10100011",
      "10010111",
      "10010010",
      "10001111"
    ],
    "answer": 2,
    "explanation": "146 in binary base-2 is format = 10010010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 134.",
    "options": [
      "0x86",
      "0x10C",
      "0x7A",
      "0xA6"
    ],
    "answer": 0,
    "explanation": "Decimal 134 translates directly to Base-16 hexadecimal as 0x86."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 47 to its binary representation.",
    "options": [
      "101100",
      "101111",
      "1000000",
      "110100"
    ],
    "answer": 1,
    "explanation": "47 in binary base-2 is format = 101111."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "1 bits",
      "2 bits",
      "15 bits",
      "3 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "20 bits",
      "15 bits",
      "14 bits",
      "18 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "19 bits",
      "15 bits",
      "10 bits",
      "13 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 467.",
    "options": [
      "0x1C7",
      "0x1D3",
      "0x1F3",
      "0x3A6"
    ],
    "answer": 1,
    "explanation": "Decimal 467 translates directly to Base-16 hexadecimal as 0x1D3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 266.",
    "options": [
      "0x12A",
      "0xFE",
      "0x214",
      "0x10A"
    ],
    "answer": 3,
    "explanation": "Decimal 266 translates directly to Base-16 hexadecimal as 0x10A."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "17 bits",
      "12 bits",
      "17 bits",
      "15 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(128KB/64B) = 11 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 409.",
    "options": [
      "0x332",
      "0x18D",
      "0x199",
      "0x1B9"
    ],
    "answer": 2,
    "explanation": "Decimal 409 translates directly to Base-16 hexadecimal as 0x199."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 353.",
    "options": [
      "0x2C2",
      "0x161",
      "0x181",
      "0x155"
    ],
    "answer": 1,
    "explanation": "Decimal 353 translates directly to Base-16 hexadecimal as 0x161."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 193 to its binary representation.",
    "options": [
      "11000110",
      "11000001",
      "10111110",
      "11010010"
    ],
    "answer": 1,
    "explanation": "193 in binary base-2 is format = 11000001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 144 to its binary representation.",
    "options": [
      "10100001",
      "10001101",
      "10010101",
      "10010000"
    ],
    "answer": 3,
    "explanation": "144 in binary base-2 is format = 10010000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 25 to its binary representation.",
    "options": [
      "101010",
      "11110",
      "10110",
      "11001"
    ],
    "answer": 3,
    "explanation": "25 in binary base-2 is format = 11001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 214 to its binary representation.",
    "options": [
      "11010110",
      "11010011",
      "11011011",
      "11100111"
    ],
    "answer": 0,
    "explanation": "214 in binary base-2 is format = 11010110."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "16 bits",
      "16 bits",
      "18 bits",
      "13 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 98.",
    "options": [
      "0x82",
      "0x56",
      "0xC4",
      "0x62"
    ],
    "answer": 3,
    "explanation": "Decimal 98 translates directly to Base-16 hexadecimal as 0x62."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 359.",
    "options": [
      "0x187",
      "0x167",
      "0x15B",
      "0x2CE"
    ],
    "answer": 1,
    "explanation": "Decimal 359 translates directly to Base-16 hexadecimal as 0x167."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 471.",
    "options": [
      "0x3AE",
      "0x1D7",
      "0x1F7",
      "0x1CB"
    ],
    "answer": 1,
    "explanation": "Decimal 471 translates directly to Base-16 hexadecimal as 0x1D7."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "6 bits",
      "9 bits",
      "23 bits",
      "11 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 183 to its binary representation.",
    "options": [
      "10110100",
      "10110111",
      "10111100",
      "11001000"
    ],
    "answer": 1,
    "explanation": "183 in binary base-2 is format = 10110111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 355.",
    "options": [
      "0x2C6",
      "0x157",
      "0x163",
      "0x183"
    ],
    "answer": 2,
    "explanation": "Decimal 355 translates directly to Base-16 hexadecimal as 0x163."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "21 bits",
      "13 bits",
      "8 bits",
      "11 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "6 bits",
      "4 bits",
      "1 bits",
      "20 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 92.",
    "options": [
      "0x50",
      "0xB8",
      "0x7C",
      "0x5C"
    ],
    "answer": 3,
    "explanation": "Decimal 92 translates directly to Base-16 hexadecimal as 0x5C."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 36 to its binary representation.",
    "options": [
      "101001",
      "100001",
      "100100",
      "110101"
    ],
    "answer": 2,
    "explanation": "36 in binary base-2 is format = 100100."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "2 bits",
      "5 bits",
      "27 bits",
      "7 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "5 bits",
      "7 bits",
      "2 bits",
      "19 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 122 to its binary representation.",
    "options": [
      "10001011",
      "1111010",
      "1110111",
      "1111111"
    ],
    "answer": 1,
    "explanation": "122 in binary base-2 is format = 1111010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 251.",
    "options": [
      "0x1F6",
      "0x11B",
      "0xFB",
      "0xEF"
    ],
    "answer": 2,
    "explanation": "Decimal 251 translates directly to Base-16 hexadecimal as 0xFB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 421.",
    "options": [
      "0x34A",
      "0x1C5",
      "0x1A5",
      "0x199"
    ],
    "answer": 2,
    "explanation": "Decimal 421 translates directly to Base-16 hexadecimal as 0x1A5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 334.",
    "options": [
      "0x14E",
      "0x29C",
      "0x16E",
      "0x142"
    ],
    "answer": 0,
    "explanation": "Decimal 334 translates directly to Base-16 hexadecimal as 0x14E."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "13 bits",
      "10 bits",
      "11 bits",
      "15 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 113 to its binary representation.",
    "options": [
      "10000010",
      "1110001",
      "1101110",
      "1110110"
    ],
    "answer": 1,
    "explanation": "113 in binary base-2 is format = 1110001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 109 to its binary representation.",
    "options": [
      "1101101",
      "1111110",
      "1110010",
      "1101010"
    ],
    "answer": 0,
    "explanation": "109 in binary base-2 is format = 1101101."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 86 to its binary representation.",
    "options": [
      "1100111",
      "1010110",
      "1011011",
      "1010011"
    ],
    "answer": 1,
    "explanation": "86 in binary base-2 is format = 1010110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 112 to its binary representation.",
    "options": [
      "10000001",
      "1101101",
      "1110101",
      "1110000"
    ],
    "answer": 3,
    "explanation": "112 in binary base-2 is format = 1110000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 72 to its binary representation.",
    "options": [
      "1011001",
      "1001000",
      "1001101",
      "1000101"
    ],
    "answer": 1,
    "explanation": "72 in binary base-2 is format = 1001000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 394.",
    "options": [
      "0x314",
      "0x1AA",
      "0x18A",
      "0x17E"
    ],
    "answer": 2,
    "explanation": "Decimal 394 translates directly to Base-16 hexadecimal as 0x18A."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "13 bits",
      "18 bits",
      "16 bits",
      "16 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "10 bits",
      "7 bits",
      "12 bits",
      "6 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 21 to its binary representation.",
    "options": [
      "10101",
      "10010",
      "100110",
      "11010"
    ],
    "answer": 0,
    "explanation": "21 in binary base-2 is format = 10101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 244.",
    "options": [
      "0x114",
      "0xF4",
      "0x1E8",
      "0xE8"
    ],
    "answer": 1,
    "explanation": "Decimal 244 translates directly to Base-16 hexadecimal as 0xF4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 461.",
    "options": [
      "0x1ED",
      "0x1C1",
      "0x1CD",
      "0x39A"
    ],
    "answer": 2,
    "explanation": "Decimal 461 translates directly to Base-16 hexadecimal as 0x1CD."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "6 bits",
      "4 bits",
      "12 bits",
      "1 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 127 to its binary representation.",
    "options": [
      "10010000",
      "1111100",
      "10000100",
      "1111111"
    ],
    "answer": 3,
    "explanation": "127 in binary base-2 is format = 1111111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 143 to its binary representation.",
    "options": [
      "10100000",
      "10010100",
      "10001111",
      "10001100"
    ],
    "answer": 2,
    "explanation": "143 in binary base-2 is format = 10001111."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "3 bits",
      "16 bits",
      "2 bits",
      "0 bits"
    ],
    "answer": 3,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 19 to its binary representation.",
    "options": [
      "10011",
      "10000",
      "100100",
      "11000"
    ],
    "answer": 0,
    "explanation": "19 in binary base-2 is format = 10011."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "10 bits",
      "16 bits",
      "8 bits",
      "5 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 325.",
    "options": [
      "0x145",
      "0x165",
      "0x28A",
      "0x139"
    ],
    "answer": 0,
    "explanation": "Decimal 325 translates directly to Base-16 hexadecimal as 0x145."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 508.",
    "options": [
      "0x21C",
      "0x1F0",
      "0x1FC",
      "0x3F8"
    ],
    "answer": 2,
    "explanation": "Decimal 508 translates directly to Base-16 hexadecimal as 0x1FC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 523.",
    "options": [
      "0x22B",
      "0x416",
      "0x1FF",
      "0x20B"
    ],
    "answer": 3,
    "explanation": "Decimal 523 translates directly to Base-16 hexadecimal as 0x20B."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 84 to its binary representation.",
    "options": [
      "1100101",
      "1010100",
      "1010001",
      "1011001"
    ],
    "answer": 1,
    "explanation": "84 in binary base-2 is format = 1010100."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "18 bits",
      "14 bits",
      "20 bits",
      "15 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 243.",
    "options": [
      "0xF3",
      "0x113",
      "0x1E6",
      "0xE7"
    ],
    "answer": 0,
    "explanation": "Decimal 243 translates directly to Base-16 hexadecimal as 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 41 to its binary representation.",
    "options": [
      "101110",
      "101001",
      "111010",
      "100110"
    ],
    "answer": 1,
    "explanation": "41 in binary base-2 is format = 101001."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "15 bits",
      "12 bits",
      "17 bits",
      "17 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 435.",
    "options": [
      "0x1B3",
      "0x1D3",
      "0x1A7",
      "0x366"
    ],
    "answer": 0,
    "explanation": "Decimal 435 translates directly to Base-16 hexadecimal as 0x1B3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 152.",
    "options": [
      "0xB8",
      "0x8C",
      "0x98",
      "0x130"
    ],
    "answer": 2,
    "explanation": "Decimal 152 translates directly to Base-16 hexadecimal as 0x98."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 335.",
    "options": [
      "0x16F",
      "0x143",
      "0x29E",
      "0x14F"
    ],
    "answer": 3,
    "explanation": "Decimal 335 translates directly to Base-16 hexadecimal as 0x14F."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 140 to its binary representation.",
    "options": [
      "10001100",
      "10010001",
      "10001001",
      "10011101"
    ],
    "answer": 0,
    "explanation": "140 in binary base-2 is format = 10001100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 193.",
    "options": [
      "0xB5",
      "0x182",
      "0xE1",
      "0xC1"
    ],
    "answer": 3,
    "explanation": "Decimal 193 translates directly to Base-16 hexadecimal as 0xC1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 212.",
    "options": [
      "0xF4",
      "0x1A8",
      "0xD4",
      "0xC8"
    ],
    "answer": 2,
    "explanation": "Decimal 212 translates directly to Base-16 hexadecimal as 0xD4."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "2 bits",
      "5 bits",
      "7 bits",
      "11 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 82.",
    "options": [
      "0xA4",
      "0x72",
      "0x46",
      "0x52"
    ],
    "answer": 3,
    "explanation": "Decimal 82 translates directly to Base-16 hexadecimal as 0x52."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 505.",
    "options": [
      "0x1ED",
      "0x1F9",
      "0x219",
      "0x3F2"
    ],
    "answer": 1,
    "explanation": "Decimal 505 translates directly to Base-16 hexadecimal as 0x1F9."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 173 to its binary representation.",
    "options": [
      "10110010",
      "10101010",
      "10101101",
      "10111110"
    ],
    "answer": 2,
    "explanation": "173 in binary base-2 is format = 10101101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 129.",
    "options": [
      "0xA1",
      "0x75",
      "0x102",
      "0x81"
    ],
    "answer": 3,
    "explanation": "Decimal 129 translates directly to Base-16 hexadecimal as 0x81."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "3 bits",
      "10 bits",
      "13 bits",
      "15 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 198 to its binary representation.",
    "options": [
      "11000011",
      "11001011",
      "11010111",
      "11000110"
    ],
    "answer": 3,
    "explanation": "198 in binary base-2 is format = 11000110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 166 to its binary representation.",
    "options": [
      "10100110",
      "10110111",
      "10100011",
      "10101011"
    ],
    "answer": 0,
    "explanation": "166 in binary base-2 is format = 10100110."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "8 bits",
      "3 bits",
      "26 bits",
      "6 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 204 to its binary representation.",
    "options": [
      "11001100",
      "11011101",
      "11010001",
      "11001001"
    ],
    "answer": 0,
    "explanation": "204 in binary base-2 is format = 11001100."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "9 bits",
      "11 bits",
      "6 bits",
      "15 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 507.",
    "options": [
      "0x1FB",
      "0x3F6",
      "0x21B",
      "0x1EF"
    ],
    "answer": 0,
    "explanation": "Decimal 507 translates directly to Base-16 hexadecimal as 0x1FB."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 194 to its binary representation.",
    "options": [
      "11010011",
      "11000111",
      "11000010",
      "10111111"
    ],
    "answer": 2,
    "explanation": "194 in binary base-2 is format = 11000010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 423.",
    "options": [
      "0x34E",
      "0x19B",
      "0x1C7",
      "0x1A7"
    ],
    "answer": 3,
    "explanation": "Decimal 423 translates directly to Base-16 hexadecimal as 0x1A7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 73.",
    "options": [
      "0x3D",
      "0x69",
      "0x92",
      "0x49"
    ],
    "answer": 3,
    "explanation": "Decimal 73 translates directly to Base-16 hexadecimal as 0x49."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 78.",
    "options": [
      "0x6E",
      "0x9C",
      "0x42",
      "0x4E"
    ],
    "answer": 3,
    "explanation": "Decimal 78 translates directly to Base-16 hexadecimal as 0x4E."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "7 bits",
      "2 bits",
      "5 bits",
      "11 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 274.",
    "options": [
      "0x112",
      "0x132",
      "0x106",
      "0x224"
    ],
    "answer": 0,
    "explanation": "Decimal 274 translates directly to Base-16 hexadecimal as 0x112."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "8 bits",
      "6 bits",
      "3 bits",
      "26 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(128KB/64B) = 11 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 98 to its binary representation.",
    "options": [
      "1100010",
      "1100111",
      "1011111",
      "1110011"
    ],
    "answer": 0,
    "explanation": "98 in binary base-2 is format = 1100010."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 165 to its binary representation.",
    "options": [
      "10100010",
      "10100101",
      "10101010",
      "10110110"
    ],
    "answer": 1,
    "explanation": "165 in binary base-2 is format = 10100101."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 211 to its binary representation.",
    "options": [
      "11010000",
      "11010011",
      "11100100",
      "11011000"
    ],
    "answer": 1,
    "explanation": "211 in binary base-2 is format = 11010011."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 137 to its binary representation.",
    "options": [
      "10000110",
      "10001001",
      "10001110",
      "10011010"
    ],
    "answer": 1,
    "explanation": "137 in binary base-2 is format = 10001001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 437.",
    "options": [
      "0x1D5",
      "0x1A9",
      "0x36A",
      "0x1B5"
    ],
    "answer": 3,
    "explanation": "Decimal 437 translates directly to Base-16 hexadecimal as 0x1B5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 246.",
    "options": [
      "0xF6",
      "0x116",
      "0xEA",
      "0x1EC"
    ],
    "answer": 0,
    "explanation": "Decimal 246 translates directly to Base-16 hexadecimal as 0xF6."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "9 bits",
      "11 bits",
      "7 bits",
      "6 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 529.",
    "options": [
      "0x231",
      "0x205",
      "0x211",
      "0x422"
    ],
    "answer": 2,
    "explanation": "Decimal 529 translates directly to Base-16 hexadecimal as 0x211."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 228.",
    "options": [
      "0x1C8",
      "0xD8",
      "0x104",
      "0xE4"
    ],
    "answer": 3,
    "explanation": "Decimal 228 translates directly to Base-16 hexadecimal as 0xE4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 240.",
    "options": [
      "0x110",
      "0x1E0",
      "0xF0",
      "0xE4"
    ],
    "answer": 2,
    "explanation": "Decimal 240 translates directly to Base-16 hexadecimal as 0xF0."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 71 to its binary representation.",
    "options": [
      "1000111",
      "1000100",
      "1001100",
      "1011000"
    ],
    "answer": 0,
    "explanation": "71 in binary base-2 is format = 1000111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 159 to its binary representation.",
    "options": [
      "10110000",
      "10011100",
      "10100100",
      "10011111"
    ],
    "answer": 3,
    "explanation": "159 in binary base-2 is format = 10011111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 145.",
    "options": [
      "0x91",
      "0x122",
      "0xB1",
      "0x85"
    ],
    "answer": 0,
    "explanation": "Decimal 145 translates directly to Base-16 hexadecimal as 0x91."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "14 bits",
      "9 bits",
      "20 bits",
      "12 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "17 bits",
      "7 bits",
      "9 bits",
      "4 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 362.",
    "options": [
      "0x15E",
      "0x18A",
      "0x16A",
      "0x2D4"
    ],
    "answer": 2,
    "explanation": "Decimal 362 translates directly to Base-16 hexadecimal as 0x16A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 161.",
    "options": [
      "0x95",
      "0x142",
      "0xC1",
      "0xA1"
    ],
    "answer": 3,
    "explanation": "Decimal 161 translates directly to Base-16 hexadecimal as 0xA1."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "1 bits",
      "6 bits",
      "28 bits",
      "4 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 149 to its binary representation.",
    "options": [
      "10010101",
      "10010010",
      "10100110",
      "10011010"
    ],
    "answer": 0,
    "explanation": "149 in binary base-2 is format = 10010101."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "10 bits",
      "7 bits",
      "14 bits",
      "12 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 464.",
    "options": [
      "0x1C4",
      "0x3A0",
      "0x1D0",
      "0x1F0"
    ],
    "answer": 2,
    "explanation": "Decimal 464 translates directly to Base-16 hexadecimal as 0x1D0."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 67 to its binary representation.",
    "options": [
      "1010100",
      "1000000",
      "1000011",
      "1001000"
    ],
    "answer": 2,
    "explanation": "67 in binary base-2 is format = 1000011."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 130 to its binary representation.",
    "options": [
      "10000010",
      "10000111",
      "1111111",
      "10010011"
    ],
    "answer": 0,
    "explanation": "130 in binary base-2 is format = 10000010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 402.",
    "options": [
      "0x186",
      "0x1B2",
      "0x324",
      "0x192"
    ],
    "answer": 3,
    "explanation": "Decimal 402 translates directly to Base-16 hexadecimal as 0x192."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 347.",
    "options": [
      "0x15B",
      "0x17B",
      "0x14F",
      "0x2B6"
    ],
    "answer": 0,
    "explanation": "Decimal 347 translates directly to Base-16 hexadecimal as 0x15B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 321.",
    "options": [
      "0x141",
      "0x135",
      "0x161",
      "0x282"
    ],
    "answer": 0,
    "explanation": "Decimal 321 translates directly to Base-16 hexadecimal as 0x141."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 165.",
    "options": [
      "0xA5",
      "0xC5",
      "0x99",
      "0x14A"
    ],
    "answer": 0,
    "explanation": "Decimal 165 translates directly to Base-16 hexadecimal as 0xA5."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 81 to its binary representation.",
    "options": [
      "1001110",
      "1010110",
      "1100010",
      "1010001"
    ],
    "answer": 3,
    "explanation": "81 in binary base-2 is format = 1010001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 336.",
    "options": [
      "0x150",
      "0x2A0",
      "0x144",
      "0x170"
    ],
    "answer": 0,
    "explanation": "Decimal 336 translates directly to Base-16 hexadecimal as 0x150."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "11 bits",
      "8 bits",
      "13 bits",
      "5 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(128KB/64B) = 11 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 280.",
    "options": [
      "0x10C",
      "0x118",
      "0x138",
      "0x230"
    ],
    "answer": 1,
    "explanation": "Decimal 280 translates directly to Base-16 hexadecimal as 0x118."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 295.",
    "options": [
      "0x127",
      "0x11B",
      "0x147",
      "0x24E"
    ],
    "answer": 0,
    "explanation": "Decimal 295 translates directly to Base-16 hexadecimal as 0x127."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "11 bits",
      "6 bits",
      "15 bits",
      "9 bits"
    ],
    "answer": 3,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 367.",
    "options": [
      "0x163",
      "0x16F",
      "0x18F",
      "0x2DE"
    ],
    "answer": 1,
    "explanation": "Decimal 367 translates directly to Base-16 hexadecimal as 0x16F."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "15 bits",
      "19 bits",
      "17 bits",
      "14 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 160 to its binary representation.",
    "options": [
      "10011101",
      "10100101",
      "10110001",
      "10100000"
    ],
    "answer": 3,
    "explanation": "160 in binary base-2 is format = 10100000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 18 to its binary representation.",
    "options": [
      "10111",
      "100011",
      "1111",
      "10010"
    ],
    "answer": 3,
    "explanation": "18 in binary base-2 is format = 10010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 486.",
    "options": [
      "0x1E6",
      "0x3CC",
      "0x1DA",
      "0x206"
    ],
    "answer": 0,
    "explanation": "Decimal 486 translates directly to Base-16 hexadecimal as 0x1E6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 178.",
    "options": [
      "0xA6",
      "0xD2",
      "0x164",
      "0xB2"
    ],
    "answer": 3,
    "explanation": "Decimal 178 translates directly to Base-16 hexadecimal as 0xB2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 398.",
    "options": [
      "0x31C",
      "0x1AE",
      "0x182",
      "0x18E"
    ],
    "answer": 3,
    "explanation": "Decimal 398 translates directly to Base-16 hexadecimal as 0x18E."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the TAG bitfield?",
    "options": [
      "7 bits",
      "10 bits",
      "12 bits",
      "14 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 533.",
    "options": [
      "0x235",
      "0x215",
      "0x209",
      "0x42A"
    ],
    "answer": 1,
    "explanation": "Decimal 533 translates directly to Base-16 hexadecimal as 0x215."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "1 bits",
      "4 bits",
      "17 bits",
      "-1 bits"
    ],
    "answer": 3,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(128KB/64B) = 11 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 40 to its binary representation.",
    "options": [
      "111001",
      "101101",
      "100101",
      "101000"
    ],
    "answer": 3,
    "explanation": "40 in binary base-2 is format = 101000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 351.",
    "options": [
      "0x2BE",
      "0x15F",
      "0x153",
      "0x17F"
    ],
    "answer": 1,
    "explanation": "Decimal 351 translates directly to Base-16 hexadecimal as 0x15F."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "8 bits",
      "13 bits",
      "11 bits",
      "5 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 80.",
    "options": [
      "0xA0",
      "0x70",
      "0x50",
      "0x44"
    ],
    "answer": 2,
    "explanation": "Decimal 80 translates directly to Base-16 hexadecimal as 0x50."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 401.",
    "options": [
      "0x191",
      "0x322",
      "0x185",
      "0x1B1"
    ],
    "answer": 0,
    "explanation": "Decimal 401 translates directly to Base-16 hexadecimal as 0x191."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "3 bits",
      "15 bits",
      "2 bits",
      "1 bits"
    ],
    "answer": 3,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "7 bits",
      "9 bits",
      "6 bits",
      "11 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 168.",
    "options": [
      "0xC8",
      "0x150",
      "0xA8",
      "0x9C"
    ],
    "answer": 2,
    "explanation": "Decimal 168 translates directly to Base-16 hexadecimal as 0xA8."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 39 to its binary representation.",
    "options": [
      "100111",
      "111000",
      "100100",
      "101100"
    ],
    "answer": 0,
    "explanation": "39 in binary base-2 is format = 100111."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "1 bits",
      "4 bits",
      "28 bits",
      "6 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 292.",
    "options": [
      "0x124",
      "0x118",
      "0x248",
      "0x144"
    ],
    "answer": 0,
    "explanation": "Decimal 292 translates directly to Base-16 hexadecimal as 0x124."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 352.",
    "options": [
      "0x180",
      "0x154",
      "0x160",
      "0x2C0"
    ],
    "answer": 2,
    "explanation": "Decimal 352 translates directly to Base-16 hexadecimal as 0x160."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 205.",
    "options": [
      "0x19A",
      "0xED",
      "0xC1",
      "0xCD"
    ],
    "answer": 3,
    "explanation": "Decimal 205 translates directly to Base-16 hexadecimal as 0xCD."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 78 to its binary representation.",
    "options": [
      "1010011",
      "1001110",
      "1011111",
      "1001011"
    ],
    "answer": 1,
    "explanation": "78 in binary base-2 is format = 1001110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 487.",
    "options": [
      "0x1DB",
      "0x207",
      "0x3CE",
      "0x1E7"
    ],
    "answer": 3,
    "explanation": "Decimal 487 translates directly to Base-16 hexadecimal as 0x1E7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 451.",
    "options": [
      "0x1C3",
      "0x386",
      "0x1E3",
      "0x1B7"
    ],
    "answer": 0,
    "explanation": "Decimal 451 translates directly to Base-16 hexadecimal as 0x1C3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 272.",
    "options": [
      "0x220",
      "0x104",
      "0x130",
      "0x110"
    ],
    "answer": 3,
    "explanation": "Decimal 272 translates directly to Base-16 hexadecimal as 0x110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 416.",
    "options": [
      "0x194",
      "0x1A0",
      "0x340",
      "0x1C0"
    ],
    "answer": 1,
    "explanation": "Decimal 416 translates directly to Base-16 hexadecimal as 0x1A0."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 167.",
    "options": [
      "0xA7",
      "0x14E",
      "0x9B",
      "0xC7"
    ],
    "answer": 0,
    "explanation": "Decimal 167 translates directly to Base-16 hexadecimal as 0xA7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 185.",
    "options": [
      "0xD9",
      "0x172",
      "0xB9",
      "0xAD"
    ],
    "answer": 2,
    "explanation": "Decimal 185 translates directly to Base-16 hexadecimal as 0xB9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 450.",
    "options": [
      "0x1B6",
      "0x1E2",
      "0x1C2",
      "0x384"
    ],
    "answer": 2,
    "explanation": "Decimal 450 translates directly to Base-16 hexadecimal as 0x1C2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 91.",
    "options": [
      "0x4F",
      "0x7B",
      "0x5B",
      "0xB6"
    ],
    "answer": 2,
    "explanation": "Decimal 91 translates directly to Base-16 hexadecimal as 0x5B."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 57 to its binary representation.",
    "options": [
      "110110",
      "111001",
      "111110",
      "1001010"
    ],
    "answer": 1,
    "explanation": "57 in binary base-2 is format = 111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 16 to its binary representation.",
    "options": [
      "100001",
      "1101",
      "10000",
      "10101"
    ],
    "answer": 2,
    "explanation": "16 in binary base-2 is format = 10000."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "10 bits",
      "6 bits",
      "12 bits",
      "7 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 92 to its binary representation.",
    "options": [
      "1011001",
      "1100001",
      "1101101",
      "1011100"
    ],
    "answer": 3,
    "explanation": "92 in binary base-2 is format = 1011100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 513.",
    "options": [
      "0x1F5",
      "0x402",
      "0x201",
      "0x221"
    ],
    "answer": 2,
    "explanation": "Decimal 513 translates directly to Base-16 hexadecimal as 0x201."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 111 to its binary representation.",
    "options": [
      "10000000",
      "1110100",
      "1101111",
      "1101100"
    ],
    "answer": 2,
    "explanation": "111 in binary base-2 is format = 1101111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 32 to its binary representation.",
    "options": [
      "110001",
      "11101",
      "100000",
      "100101"
    ],
    "answer": 2,
    "explanation": "32 in binary base-2 is format = 100000."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "10 bits",
      "3 bits",
      "8 bits",
      "6 bits"
    ],
    "answer": 3,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "11 bits",
      "2 bits",
      "7 bits",
      "5 bits"
    ],
    "answer": 3,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 182 to its binary representation.",
    "options": [
      "11000111",
      "10110110",
      "10111011",
      "10110011"
    ],
    "answer": 1,
    "explanation": "182 in binary base-2 is format = 10110110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 15 to its binary representation.",
    "options": [
      "1100",
      "100000",
      "10100",
      "1111"
    ],
    "answer": 3,
    "explanation": "15 in binary base-2 is format = 1111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 399.",
    "options": [
      "0x183",
      "0x1AF",
      "0x31E",
      "0x18F"
    ],
    "answer": 3,
    "explanation": "Decimal 399 translates directly to Base-16 hexadecimal as 0x18F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 257.",
    "options": [
      "0x101",
      "0x202",
      "0xF5",
      "0x121"
    ],
    "answer": 0,
    "explanation": "Decimal 257 translates directly to Base-16 hexadecimal as 0x101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 397.",
    "options": [
      "0x1AD",
      "0x181",
      "0x18D",
      "0x31A"
    ],
    "answer": 2,
    "explanation": "Decimal 397 translates directly to Base-16 hexadecimal as 0x18D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 361.",
    "options": [
      "0x169",
      "0x189",
      "0x2D2",
      "0x15D"
    ],
    "answer": 0,
    "explanation": "Decimal 361 translates directly to Base-16 hexadecimal as 0x169."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "9 bits",
      "12 bits",
      "14 bits",
      "12 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 66.",
    "options": [
      "0x62",
      "0x42",
      "0x84",
      "0x36"
    ],
    "answer": 1,
    "explanation": "Decimal 66 translates directly to Base-16 hexadecimal as 0x42."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 174.",
    "options": [
      "0x15C",
      "0xAE",
      "0xA2",
      "0xCE"
    ],
    "answer": 1,
    "explanation": "Decimal 174 translates directly to Base-16 hexadecimal as 0xAE."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 30 to its binary representation.",
    "options": [
      "11110",
      "11011",
      "101111",
      "100011"
    ],
    "answer": 0,
    "explanation": "30 in binary base-2 is format = 11110."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "6 bits",
      "1 bits",
      "4 bits",
      "20 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "1 bits",
      "12 bits",
      "6 bits",
      "4 bits"
    ],
    "answer": 3,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 270.",
    "options": [
      "0x102",
      "0x12E",
      "0x21C",
      "0x10E"
    ],
    "answer": 3,
    "explanation": "Decimal 270 translates directly to Base-16 hexadecimal as 0x10E."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 150 to its binary representation.",
    "options": [
      "10100111",
      "10011011",
      "10010110",
      "10010011"
    ],
    "answer": 2,
    "explanation": "150 in binary base-2 is format = 10010110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 65 to its binary representation.",
    "options": [
      "1010010",
      "1000001",
      "1000110",
      "111110"
    ],
    "answer": 1,
    "explanation": "65 in binary base-2 is format = 1000001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 327.",
    "options": [
      "0x13B",
      "0x28E",
      "0x167",
      "0x147"
    ],
    "answer": 3,
    "explanation": "Decimal 327 translates directly to Base-16 hexadecimal as 0x147."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 86.",
    "options": [
      "0x76",
      "0x56",
      "0xAC",
      "0x4A"
    ],
    "answer": 1,
    "explanation": "Decimal 86 translates directly to Base-16 hexadecimal as 0x56."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 206 to its binary representation.",
    "options": [
      "11010011",
      "11001011",
      "11011111",
      "11001110"
    ],
    "answer": 3,
    "explanation": "206 in binary base-2 is format = 11001110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 31 to its binary representation.",
    "options": [
      "110000",
      "11111",
      "100100",
      "11100"
    ],
    "answer": 1,
    "explanation": "31 in binary base-2 is format = 11111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 121 to its binary representation.",
    "options": [
      "1111110",
      "1110110",
      "1111001",
      "10001010"
    ],
    "answer": 2,
    "explanation": "121 in binary base-2 is format = 1111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 77 to its binary representation.",
    "options": [
      "1010010",
      "1001010",
      "1011110",
      "1001101"
    ],
    "answer": 3,
    "explanation": "77 in binary base-2 is format = 1001101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 501.",
    "options": [
      "0x3EA",
      "0x215",
      "0x1F5",
      "0x1E9"
    ],
    "answer": 2,
    "explanation": "Decimal 501 translates directly to Base-16 hexadecimal as 0x1F5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 320.",
    "options": [
      "0x140",
      "0x160",
      "0x280",
      "0x134"
    ],
    "answer": 0,
    "explanation": "Decimal 320 translates directly to Base-16 hexadecimal as 0x140."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 202 to its binary representation.",
    "options": [
      "11000111",
      "11001010",
      "11011011",
      "11001111"
    ],
    "answer": 1,
    "explanation": "202 in binary base-2 is format = 11001010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 482.",
    "options": [
      "0x202",
      "0x1E2",
      "0x3C4",
      "0x1D6"
    ],
    "answer": 1,
    "explanation": "Decimal 482 translates directly to Base-16 hexadecimal as 0x1E2."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "2 bits",
      "5 bits",
      "7 bits",
      "27 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 126.",
    "options": [
      "0x9E",
      "0x72",
      "0x7E",
      "0xFC"
    ],
    "answer": 2,
    "explanation": "Decimal 126 translates directly to Base-16 hexadecimal as 0x7E."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 87 to its binary representation.",
    "options": [
      "1011100",
      "1010100",
      "1101000",
      "1010111"
    ],
    "answer": 3,
    "explanation": "87 in binary base-2 is format = 1010111."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "9 bits",
      "17 bits",
      "7 bits",
      "4 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 117 to its binary representation.",
    "options": [
      "1110101",
      "1110010",
      "10000110",
      "1111010"
    ],
    "answer": 0,
    "explanation": "117 in binary base-2 is format = 1110101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 143.",
    "options": [
      "0x83",
      "0x8F",
      "0xAF",
      "0x11E"
    ],
    "answer": 1,
    "explanation": "Decimal 143 translates directly to Base-16 hexadecimal as 0x8F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 119.",
    "options": [
      "0x6B",
      "0xEE",
      "0x97",
      "0x77"
    ],
    "answer": 3,
    "explanation": "Decimal 119 translates directly to Base-16 hexadecimal as 0x77."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 97.",
    "options": [
      "0x55",
      "0xC2",
      "0x81",
      "0x61"
    ],
    "answer": 3,
    "explanation": "Decimal 97 translates directly to Base-16 hexadecimal as 0x61."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 374.",
    "options": [
      "0x2EC",
      "0x176",
      "0x196",
      "0x16A"
    ],
    "answer": 1,
    "explanation": "Decimal 374 translates directly to Base-16 hexadecimal as 0x176."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 64.",
    "options": [
      "0x60",
      "0x80",
      "0x40",
      "0x34"
    ],
    "answer": 2,
    "explanation": "Decimal 64 translates directly to Base-16 hexadecimal as 0x40."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 128 to its binary representation.",
    "options": [
      "10000101",
      "10000000",
      "1111101",
      "10010001"
    ],
    "answer": 1,
    "explanation": "128 in binary base-2 is format = 10000000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 268.",
    "options": [
      "0x100",
      "0x218",
      "0x12C",
      "0x10C"
    ],
    "answer": 3,
    "explanation": "Decimal 268 translates directly to Base-16 hexadecimal as 0x10C."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 138 to its binary representation.",
    "options": [
      "10001010",
      "10011011",
      "10000111",
      "10001111"
    ],
    "answer": 0,
    "explanation": "138 in binary base-2 is format = 10001010."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 174 to its binary representation.",
    "options": [
      "10101110",
      "10101011",
      "10111111",
      "10110011"
    ],
    "answer": 0,
    "explanation": "174 in binary base-2 is format = 10101110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 101 to its binary representation.",
    "options": [
      "1100010",
      "1110110",
      "1101010",
      "1100101"
    ],
    "answer": 3,
    "explanation": "101 in binary base-2 is format = 1100101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 381.",
    "options": [
      "0x171",
      "0x2FA",
      "0x19D",
      "0x17D"
    ],
    "answer": 3,
    "explanation": "Decimal 381 translates directly to Base-16 hexadecimal as 0x17D."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 132 to its binary representation.",
    "options": [
      "10000100",
      "10001001",
      "10010101",
      "10000001"
    ],
    "answer": 0,
    "explanation": "132 in binary base-2 is format = 10000100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 172 to its binary representation.",
    "options": [
      "10101001",
      "10101100",
      "10110001",
      "10111101"
    ],
    "answer": 1,
    "explanation": "172 in binary base-2 is format = 10101100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 62 to its binary representation.",
    "options": [
      "1000011",
      "111110",
      "111011",
      "1001111"
    ],
    "answer": 1,
    "explanation": "62 in binary base-2 is format = 111110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 63.",
    "options": [
      "0x5F",
      "0x3F",
      "0x33",
      "0x7E"
    ],
    "answer": 1,
    "explanation": "Decimal 63 translates directly to Base-16 hexadecimal as 0x3F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 494.",
    "options": [
      "0x1E2",
      "0x3DC",
      "0x1EE",
      "0x20E"
    ],
    "answer": 2,
    "explanation": "Decimal 494 translates directly to Base-16 hexadecimal as 0x1EE."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 135 to its binary representation.",
    "options": [
      "10000100",
      "10001100",
      "10011000",
      "10000111"
    ],
    "answer": 3,
    "explanation": "135 in binary base-2 is format = 10000111."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "5 bits",
      "11 bits",
      "8 bits",
      "13 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 120 to its binary representation.",
    "options": [
      "1110101",
      "1111000",
      "1111101",
      "10001001"
    ],
    "answer": 1,
    "explanation": "120 in binary base-2 is format = 1111000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 27 to its binary representation.",
    "options": [
      "11011",
      "101100",
      "100000",
      "11000"
    ],
    "answer": 0,
    "explanation": "27 in binary base-2 is format = 11011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 396.",
    "options": [
      "0x318",
      "0x1AC",
      "0x180",
      "0x18C"
    ],
    "answer": 3,
    "explanation": "Decimal 396 translates directly to Base-16 hexadecimal as 0x18C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 94.",
    "options": [
      "0x7E",
      "0x52",
      "0xBC",
      "0x5E"
    ],
    "answer": 3,
    "explanation": "Decimal 94 translates directly to Base-16 hexadecimal as 0x5E."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "15 bits",
      "2 bits",
      "3 bits",
      "1 bits"
    ],
    "answer": 3,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "12 bits",
      "10 bits",
      "7 bits",
      "14 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 131.",
    "options": [
      "0x77",
      "0xA3",
      "0x106",
      "0x83"
    ],
    "answer": 3,
    "explanation": "Decimal 131 translates directly to Base-16 hexadecimal as 0x83."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 23 to its binary representation.",
    "options": [
      "101000",
      "10100",
      "10111",
      "11100"
    ],
    "answer": 2,
    "explanation": "23 in binary base-2 is format = 10111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 425.",
    "options": [
      "0x1C9",
      "0x1A9",
      "0x352",
      "0x19D"
    ],
    "answer": 1,
    "explanation": "Decimal 425 translates directly to Base-16 hexadecimal as 0x1A9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 446.",
    "options": [
      "0x1B2",
      "0x1BE",
      "0x1DE",
      "0x37C"
    ],
    "answer": 1,
    "explanation": "Decimal 446 translates directly to Base-16 hexadecimal as 0x1BE."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 161 to its binary representation.",
    "options": [
      "10110010",
      "10011110",
      "10100110",
      "10100001"
    ],
    "answer": 3,
    "explanation": "161 in binary base-2 is format = 10100001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 208.",
    "options": [
      "0xF0",
      "0xD0",
      "0x1A0",
      "0xC4"
    ],
    "answer": 1,
    "explanation": "Decimal 208 translates directly to Base-16 hexadecimal as 0xD0."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 59 to its binary representation.",
    "options": [
      "111011",
      "1000000",
      "1001100",
      "111000"
    ],
    "answer": 0,
    "explanation": "59 in binary base-2 is format = 111011."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 44 to its binary representation.",
    "options": [
      "110001",
      "101001",
      "111101",
      "101100"
    ],
    "answer": 3,
    "explanation": "44 in binary base-2 is format = 101100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 102 to its binary representation.",
    "options": [
      "1100011",
      "1110111",
      "1101011",
      "1100110"
    ],
    "answer": 3,
    "explanation": "102 in binary base-2 is format = 1100110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 54 to its binary representation.",
    "options": [
      "1000111",
      "111011",
      "110110",
      "110011"
    ],
    "answer": 2,
    "explanation": "54 in binary base-2 is format = 110110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 76 to its binary representation.",
    "options": [
      "1001001",
      "1011101",
      "1010001",
      "1001100"
    ],
    "answer": 3,
    "explanation": "76 in binary base-2 is format = 1001100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 106 to its binary representation.",
    "options": [
      "1101111",
      "1100111",
      "1111011",
      "1101010"
    ],
    "answer": 3,
    "explanation": "106 in binary base-2 is format = 1101010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 271.",
    "options": [
      "0x21E",
      "0x10F",
      "0x12F",
      "0x103"
    ],
    "answer": 1,
    "explanation": "Decimal 271 translates directly to Base-16 hexadecimal as 0x10F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 264.",
    "options": [
      "0xFC",
      "0x108",
      "0x128",
      "0x210"
    ],
    "answer": 1,
    "explanation": "Decimal 264 translates directly to Base-16 hexadecimal as 0x108."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "8 bits",
      "11 bits",
      "21 bits",
      "13 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(128KB/64B) = 11 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 224.",
    "options": [
      "0xE0",
      "0x1C0",
      "0xD4",
      "0x100"
    ],
    "answer": 0,
    "explanation": "Decimal 224 translates directly to Base-16 hexadecimal as 0xE0."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "4 bits",
      "1 bits",
      "6 bits",
      "12 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 42 to its binary representation.",
    "options": [
      "101010",
      "111011",
      "101111",
      "100111"
    ],
    "answer": 0,
    "explanation": "42 in binary base-2 is format = 101010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 514.",
    "options": [
      "0x202",
      "0x222",
      "0x1F6",
      "0x404"
    ],
    "answer": 0,
    "explanation": "Decimal 514 translates directly to Base-16 hexadecimal as 0x202."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 512.",
    "options": [
      "0x1F4",
      "0x220",
      "0x400",
      "0x200"
    ],
    "answer": 3,
    "explanation": "Decimal 512 translates directly to Base-16 hexadecimal as 0x200."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "2 bits",
      "19 bits",
      "5 bits",
      "7 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 90 to its binary representation.",
    "options": [
      "1101011",
      "1011010",
      "1011111",
      "1010111"
    ],
    "answer": 1,
    "explanation": "90 in binary base-2 is format = 1011010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 385.",
    "options": [
      "0x181",
      "0x302",
      "0x1A1",
      "0x175"
    ],
    "answer": 0,
    "explanation": "Decimal 385 translates directly to Base-16 hexadecimal as 0x181."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 183.",
    "options": [
      "0xB7",
      "0xD7",
      "0x16E",
      "0xAB"
    ],
    "answer": 0,
    "explanation": "Decimal 183 translates directly to Base-16 hexadecimal as 0xB7."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 68 to its binary representation.",
    "options": [
      "1001001",
      "1000001",
      "1010101",
      "1000100"
    ],
    "answer": 3,
    "explanation": "68 in binary base-2 is format = 1000100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 108.",
    "options": [
      "0x60",
      "0x8C",
      "0xD8",
      "0x6C"
    ],
    "answer": 3,
    "explanation": "Decimal 108 translates directly to Base-16 hexadecimal as 0x6C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 358.",
    "options": [
      "0x15A",
      "0x186",
      "0x166",
      "0x2CC"
    ],
    "answer": 2,
    "explanation": "Decimal 358 translates directly to Base-16 hexadecimal as 0x166."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "6 bits",
      "3 bits",
      "18 bits",
      "8 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(128KB/64B) = 11 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "8 bits",
      "11 bits",
      "13 bits",
      "13 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 404.",
    "options": [
      "0x188",
      "0x1B4",
      "0x328",
      "0x194"
    ],
    "answer": 3,
    "explanation": "Decimal 404 translates directly to Base-16 hexadecimal as 0x194."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 184.",
    "options": [
      "0x170",
      "0xD8",
      "0xB8",
      "0xAC"
    ],
    "answer": 2,
    "explanation": "Decimal 184 translates directly to Base-16 hexadecimal as 0xB8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 74.",
    "options": [
      "0x94",
      "0x6A",
      "0x3E",
      "0x4A"
    ],
    "answer": 3,
    "explanation": "Decimal 74 translates directly to Base-16 hexadecimal as 0x4A."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 163 to its binary representation.",
    "options": [
      "10100000",
      "10110100",
      "10101000",
      "10100011"
    ],
    "answer": 3,
    "explanation": "163 in binary base-2 is format = 10100011."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 64 to its binary representation.",
    "options": [
      "1000101",
      "1000000",
      "1010001",
      "111101"
    ],
    "answer": 1,
    "explanation": "64 in binary base-2 is format = 1000000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 209.",
    "options": [
      "0xD1",
      "0xC5",
      "0xF1",
      "0x1A2"
    ],
    "answer": 0,
    "explanation": "Decimal 209 translates directly to Base-16 hexadecimal as 0xD1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 282.",
    "options": [
      "0x11A",
      "0x13A",
      "0x10E",
      "0x234"
    ],
    "answer": 0,
    "explanation": "Decimal 282 translates directly to Base-16 hexadecimal as 0x11A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 70.",
    "options": [
      "0x8C",
      "0x46",
      "0x3A",
      "0x66"
    ],
    "answer": 1,
    "explanation": "Decimal 70 translates directly to Base-16 hexadecimal as 0x46."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "18 bits",
      "3 bits",
      "6 bits",
      "8 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 126 to its binary representation.",
    "options": [
      "1111110",
      "10001111",
      "1111011",
      "10000011"
    ],
    "answer": 0,
    "explanation": "126 in binary base-2 is format = 1111110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 386.",
    "options": [
      "0x1A2",
      "0x176",
      "0x304",
      "0x182"
    ],
    "answer": 3,
    "explanation": "Decimal 386 translates directly to Base-16 hexadecimal as 0x182."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 69 to its binary representation.",
    "options": [
      "1010110",
      "1000010",
      "1000101",
      "1001010"
    ],
    "answer": 2,
    "explanation": "69 in binary base-2 is format = 1000101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 526.",
    "options": [
      "0x20E",
      "0x202",
      "0x41C",
      "0x22E"
    ],
    "answer": 0,
    "explanation": "Decimal 526 translates directly to Base-16 hexadecimal as 0x20E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 124.",
    "options": [
      "0x7C",
      "0x9C",
      "0xF8",
      "0x70"
    ],
    "answer": 0,
    "explanation": "Decimal 124 translates directly to Base-16 hexadecimal as 0x7C."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 20 to its binary representation.",
    "options": [
      "10001",
      "10100",
      "11001",
      "100101"
    ],
    "answer": 1,
    "explanation": "20 in binary base-2 is format = 10100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 80 to its binary representation.",
    "options": [
      "1010101",
      "1001101",
      "1010000",
      "1100001"
    ],
    "answer": 2,
    "explanation": "80 in binary base-2 is format = 1010000."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "6 bits",
      "20 bits",
      "1 bits",
      "4 bits"
    ],
    "answer": 3,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 277.",
    "options": [
      "0x22A",
      "0x135",
      "0x115",
      "0x109"
    ],
    "answer": 2,
    "explanation": "Decimal 277 translates directly to Base-16 hexadecimal as 0x115."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 200 to its binary representation.",
    "options": [
      "11001000",
      "11011001",
      "11000101",
      "11001101"
    ],
    "answer": 0,
    "explanation": "200 in binary base-2 is format = 11001000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 179 to its binary representation.",
    "options": [
      "10110011",
      "11000100",
      "10111000",
      "10110000"
    ],
    "answer": 0,
    "explanation": "179 in binary base-2 is format = 10110011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 144.",
    "options": [
      "0x90",
      "0xB0",
      "0x120",
      "0x84"
    ],
    "answer": 0,
    "explanation": "Decimal 144 translates directly to Base-16 hexadecimal as 0x90."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 225.",
    "options": [
      "0xD5",
      "0xE1",
      "0x101",
      "0x1C2"
    ],
    "answer": 1,
    "explanation": "Decimal 225 translates directly to Base-16 hexadecimal as 0xE1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 483.",
    "options": [
      "0x1D7",
      "0x3C6",
      "0x203",
      "0x1E3"
    ],
    "answer": 3,
    "explanation": "Decimal 483 translates directly to Base-16 hexadecimal as 0x1E3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 102.",
    "options": [
      "0x86",
      "0x5A",
      "0x66",
      "0xCC"
    ],
    "answer": 2,
    "explanation": "Decimal 102 translates directly to Base-16 hexadecimal as 0x66."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 137.",
    "options": [
      "0xA9",
      "0x112",
      "0x89",
      "0x7D"
    ],
    "answer": 2,
    "explanation": "Decimal 137 translates directly to Base-16 hexadecimal as 0x89."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 114 to its binary representation.",
    "options": [
      "1110010",
      "10000011",
      "1101111",
      "1110111"
    ],
    "answer": 0,
    "explanation": "114 in binary base-2 is format = 1110010."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 29 to its binary representation.",
    "options": [
      "100010",
      "11101",
      "11010",
      "101110"
    ],
    "answer": 1,
    "explanation": "29 in binary base-2 is format = 11101."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "5 bits",
      "24 bits",
      "10 bits",
      "8 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 470.",
    "options": [
      "0x1CA",
      "0x1F6",
      "0x1D6",
      "0x3AC"
    ],
    "answer": 2,
    "explanation": "Decimal 470 translates directly to Base-16 hexadecimal as 0x1D6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 127.",
    "options": [
      "0xFE",
      "0x9F",
      "0x7F",
      "0x73"
    ],
    "answer": 2,
    "explanation": "Decimal 127 translates directly to Base-16 hexadecimal as 0x7F."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "2 bits",
      "7 bits",
      "19 bits",
      "5 bits"
    ],
    "answer": 3,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 255.",
    "options": [
      "0x1FE",
      "0xF3",
      "0xFF",
      "0x11F"
    ],
    "answer": 2,
    "explanation": "Decimal 255 translates directly to Base-16 hexadecimal as 0xFF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 61.",
    "options": [
      "0x31",
      "0x3D",
      "0x7A",
      "0x5D"
    ],
    "answer": 1,
    "explanation": "Decimal 61 translates directly to Base-16 hexadecimal as 0x3D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 169.",
    "options": [
      "0xA9",
      "0xC9",
      "0x9D",
      "0x152"
    ],
    "answer": 0,
    "explanation": "Decimal 169 translates directly to Base-16 hexadecimal as 0xA9."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 94 to its binary representation.",
    "options": [
      "1100011",
      "1011110",
      "1101111",
      "1011011"
    ],
    "answer": 1,
    "explanation": "94 in binary base-2 is format = 1011110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 75 to its binary representation.",
    "options": [
      "1001011",
      "1001000",
      "1010000",
      "1011100"
    ],
    "answer": 0,
    "explanation": "75 in binary base-2 is format = 1001011."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 96 to its binary representation.",
    "options": [
      "1110001",
      "1100101",
      "1100000",
      "1011101"
    ],
    "answer": 2,
    "explanation": "96 in binary base-2 is format = 1100000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 199.",
    "options": [
      "0xE7",
      "0xC7",
      "0xBB",
      "0x18E"
    ],
    "answer": 1,
    "explanation": "Decimal 199 translates directly to Base-16 hexadecimal as 0xC7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 525.",
    "options": [
      "0x201",
      "0x41A",
      "0x20D",
      "0x22D"
    ],
    "answer": 2,
    "explanation": "Decimal 525 translates directly to Base-16 hexadecimal as 0x20D."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 185 to its binary representation.",
    "options": [
      "11001010",
      "10111110",
      "10110110",
      "10111001"
    ],
    "answer": 3,
    "explanation": "185 in binary base-2 is format = 10111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 145 to its binary representation.",
    "options": [
      "10010110",
      "10001110",
      "10010001",
      "10100010"
    ],
    "answer": 2,
    "explanation": "145 in binary base-2 is format = 10010001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 155.",
    "options": [
      "0xBB",
      "0x136",
      "0x8F",
      "0x9B"
    ],
    "answer": 3,
    "explanation": "Decimal 155 translates directly to Base-16 hexadecimal as 0x9B."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 136 to its binary representation.",
    "options": [
      "10001000",
      "10011001",
      "10001101",
      "10000101"
    ],
    "answer": 0,
    "explanation": "136 in binary base-2 is format = 10001000."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "12 bits",
      "14 bits",
      "12 bits",
      "9 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 527.",
    "options": [
      "0x41E",
      "0x22F",
      "0x20F",
      "0x203"
    ],
    "answer": 2,
    "explanation": "Decimal 527 translates directly to Base-16 hexadecimal as 0x20F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 555.",
    "options": [
      "0x21F",
      "0x456",
      "0x22B",
      "0x24B"
    ],
    "answer": 2,
    "explanation": "Decimal 555 translates directly to Base-16 hexadecimal as 0x22B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 261.",
    "options": [
      "0x105",
      "0x20A",
      "0xF9",
      "0x125"
    ],
    "answer": 0,
    "explanation": "Decimal 261 translates directly to Base-16 hexadecimal as 0x105."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 524.",
    "options": [
      "0x22C",
      "0x200",
      "0x418",
      "0x20C"
    ],
    "answer": 3,
    "explanation": "Decimal 524 translates directly to Base-16 hexadecimal as 0x20C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 357.",
    "options": [
      "0x2CA",
      "0x185",
      "0x159",
      "0x165"
    ],
    "answer": 3,
    "explanation": "Decimal 357 translates directly to Base-16 hexadecimal as 0x165."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 368.",
    "options": [
      "0x170",
      "0x164",
      "0x190",
      "0x2E0"
    ],
    "answer": 0,
    "explanation": "Decimal 368 translates directly to Base-16 hexadecimal as 0x170."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 310.",
    "options": [
      "0x26C",
      "0x12A",
      "0x136",
      "0x156"
    ],
    "answer": 2,
    "explanation": "Decimal 310 translates directly to Base-16 hexadecimal as 0x136."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 73 to its binary representation.",
    "options": [
      "1011010",
      "1001001",
      "1000110",
      "1001110"
    ],
    "answer": 1,
    "explanation": "73 in binary base-2 is format = 1001001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 370.",
    "options": [
      "0x2E4",
      "0x192",
      "0x172",
      "0x166"
    ],
    "answer": 2,
    "explanation": "Decimal 370 translates directly to Base-16 hexadecimal as 0x172."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 226.",
    "options": [
      "0xE2",
      "0xD6",
      "0x1C4",
      "0x102"
    ],
    "answer": 0,
    "explanation": "Decimal 226 translates directly to Base-16 hexadecimal as 0xE2."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 105 to its binary representation.",
    "options": [
      "1101110",
      "1100110",
      "1101001",
      "1111010"
    ],
    "answer": 2,
    "explanation": "105 in binary base-2 is format = 1101001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 259.",
    "options": [
      "0x103",
      "0xF7",
      "0x206",
      "0x123"
    ],
    "answer": 0,
    "explanation": "Decimal 259 translates directly to Base-16 hexadecimal as 0x103."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 518.",
    "options": [
      "0x40C",
      "0x1FA",
      "0x206",
      "0x226"
    ],
    "answer": 2,
    "explanation": "Decimal 518 translates directly to Base-16 hexadecimal as 0x206."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 83.",
    "options": [
      "0x53",
      "0x73",
      "0x47",
      "0xA6"
    ],
    "answer": 0,
    "explanation": "Decimal 83 translates directly to Base-16 hexadecimal as 0x53."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 131 to its binary representation.",
    "options": [
      "10010100",
      "10000000",
      "10001000",
      "10000011"
    ],
    "answer": 3,
    "explanation": "131 in binary base-2 is format = 10000011."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 191 to its binary representation.",
    "options": [
      "11010000",
      "11000100",
      "10111100",
      "10111111"
    ],
    "answer": 3,
    "explanation": "191 in binary base-2 is format = 10111111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 115 to its binary representation.",
    "options": [
      "1110000",
      "1110011",
      "1111000",
      "10000100"
    ],
    "answer": 1,
    "explanation": "115 in binary base-2 is format = 1110011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 84.",
    "options": [
      "0xA8",
      "0x48",
      "0x54",
      "0x74"
    ],
    "answer": 2,
    "explanation": "Decimal 84 translates directly to Base-16 hexadecimal as 0x54."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 170 to its binary representation.",
    "options": [
      "10111011",
      "10101111",
      "10101010",
      "10100111"
    ],
    "answer": 2,
    "explanation": "170 in binary base-2 is format = 10101010."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 118 to its binary representation.",
    "options": [
      "1111011",
      "1110110",
      "1110011",
      "10000111"
    ],
    "answer": 1,
    "explanation": "118 in binary base-2 is format = 1110110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 172.",
    "options": [
      "0xA0",
      "0x158",
      "0xAC",
      "0xCC"
    ],
    "answer": 2,
    "explanation": "Decimal 172 translates directly to Base-16 hexadecimal as 0xAC."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 108 to its binary representation.",
    "options": [
      "1110001",
      "1101100",
      "1101001",
      "1111101"
    ],
    "answer": 1,
    "explanation": "108 in binary base-2 is format = 1101100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 180.",
    "options": [
      "0xB4",
      "0xD4",
      "0xA8",
      "0x168"
    ],
    "answer": 0,
    "explanation": "Decimal 180 translates directly to Base-16 hexadecimal as 0xB4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 517.",
    "options": [
      "0x40A",
      "0x1F9",
      "0x225",
      "0x205"
    ],
    "answer": 3,
    "explanation": "Decimal 517 translates directly to Base-16 hexadecimal as 0x205."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 125.",
    "options": [
      "0xFA",
      "0x7D",
      "0x71",
      "0x9D"
    ],
    "answer": 1,
    "explanation": "Decimal 125 translates directly to Base-16 hexadecimal as 0x7D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 158.",
    "options": [
      "0xBE",
      "0x9E",
      "0x13C",
      "0x92"
    ],
    "answer": 1,
    "explanation": "Decimal 158 translates directly to Base-16 hexadecimal as 0x9E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 215.",
    "options": [
      "0xCB",
      "0xF7",
      "0x1AE",
      "0xD7"
    ],
    "answer": 3,
    "explanation": "Decimal 215 translates directly to Base-16 hexadecimal as 0xD7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 111.",
    "options": [
      "0xDE",
      "0x8F",
      "0x63",
      "0x6F"
    ],
    "answer": 3,
    "explanation": "Decimal 111 translates directly to Base-16 hexadecimal as 0x6F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 308.",
    "options": [
      "0x128",
      "0x134",
      "0x268",
      "0x154"
    ],
    "answer": 1,
    "explanation": "Decimal 308 translates directly to Base-16 hexadecimal as 0x134."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 536.",
    "options": [
      "0x238",
      "0x218",
      "0x430",
      "0x20C"
    ],
    "answer": 1,
    "explanation": "Decimal 536 translates directly to Base-16 hexadecimal as 0x218."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 85 to its binary representation.",
    "options": [
      "1011010",
      "1010010",
      "1010101",
      "1100110"
    ],
    "answer": 2,
    "explanation": "85 in binary base-2 is format = 1010101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 485.",
    "options": [
      "0x3CA",
      "0x1E5",
      "0x205",
      "0x1D9"
    ],
    "answer": 1,
    "explanation": "Decimal 485 translates directly to Base-16 hexadecimal as 0x1E5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 350.",
    "options": [
      "0x152",
      "0x2BC",
      "0x15E",
      "0x17E"
    ],
    "answer": 2,
    "explanation": "Decimal 350 translates directly to Base-16 hexadecimal as 0x15E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 344.",
    "options": [
      "0x158",
      "0x14C",
      "0x2B0",
      "0x178"
    ],
    "answer": 0,
    "explanation": "Decimal 344 translates directly to Base-16 hexadecimal as 0x158."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 81.",
    "options": [
      "0x71",
      "0xA2",
      "0x51",
      "0x45"
    ],
    "answer": 2,
    "explanation": "Decimal 81 translates directly to Base-16 hexadecimal as 0x51."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "6 bits",
      "10 bits",
      "12 bits",
      "7 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 346.",
    "options": [
      "0x15A",
      "0x14E",
      "0x17A",
      "0x2B4"
    ],
    "answer": 0,
    "explanation": "Decimal 346 translates directly to Base-16 hexadecimal as 0x15A."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "12 bits",
      "10 bits",
      "14 bits",
      "7 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 454.",
    "options": [
      "0x1C6",
      "0x1E6",
      "0x38C",
      "0x1BA"
    ],
    "answer": 0,
    "explanation": "Decimal 454 translates directly to Base-16 hexadecimal as 0x1C6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 521.",
    "options": [
      "0x209",
      "0x412",
      "0x229",
      "0x1FD"
    ],
    "answer": 0,
    "explanation": "Decimal 521 translates directly to Base-16 hexadecimal as 0x209."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 532.",
    "options": [
      "0x214",
      "0x234",
      "0x208",
      "0x428"
    ],
    "answer": 0,
    "explanation": "Decimal 532 translates directly to Base-16 hexadecimal as 0x214."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 97 to its binary representation.",
    "options": [
      "1110010",
      "1011110",
      "1100110",
      "1100001"
    ],
    "answer": 3,
    "explanation": "97 in binary base-2 is format = 1100001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 101.",
    "options": [
      "0xCA",
      "0x85",
      "0x59",
      "0x65"
    ],
    "answer": 3,
    "explanation": "Decimal 101 translates directly to Base-16 hexadecimal as 0x65."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "13 bits",
      "8 bits",
      "11 bits",
      "13 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 503.",
    "options": [
      "0x3EE",
      "0x217",
      "0x1F7",
      "0x1EB"
    ],
    "answer": 2,
    "explanation": "Decimal 503 translates directly to Base-16 hexadecimal as 0x1F7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 393.",
    "options": [
      "0x17D",
      "0x1A9",
      "0x312",
      "0x189"
    ],
    "answer": 3,
    "explanation": "Decimal 393 translates directly to Base-16 hexadecimal as 0x189."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 547.",
    "options": [
      "0x223",
      "0x217",
      "0x446",
      "0x243"
    ],
    "answer": 0,
    "explanation": "Decimal 547 translates directly to Base-16 hexadecimal as 0x223."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 285.",
    "options": [
      "0x23A",
      "0x11D",
      "0x111",
      "0x13D"
    ],
    "answer": 1,
    "explanation": "Decimal 285 translates directly to Base-16 hexadecimal as 0x11D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 170.",
    "options": [
      "0xCA",
      "0x9E",
      "0x154",
      "0xAA"
    ],
    "answer": 3,
    "explanation": "Decimal 170 translates directly to Base-16 hexadecimal as 0xAA."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 189 to its binary representation.",
    "options": [
      "11000010",
      "11001110",
      "10111101",
      "10111010"
    ],
    "answer": 2,
    "explanation": "189 in binary base-2 is format = 10111101."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 26 to its binary representation.",
    "options": [
      "10111",
      "101011",
      "11111",
      "11010"
    ],
    "answer": 3,
    "explanation": "26 in binary base-2 is format = 11010."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 79 to its binary representation.",
    "options": [
      "1001100",
      "1010100",
      "1001111",
      "1100000"
    ],
    "answer": 2,
    "explanation": "79 in binary base-2 is format = 1001111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 458.",
    "options": [
      "0x1BE",
      "0x394",
      "0x1CA",
      "0x1EA"
    ],
    "answer": 2,
    "explanation": "Decimal 458 translates directly to Base-16 hexadecimal as 0x1CA."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 214.",
    "options": [
      "0xD6",
      "0xF6",
      "0xCA",
      "0x1AC"
    ],
    "answer": 0,
    "explanation": "Decimal 214 translates directly to Base-16 hexadecimal as 0xD6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 410.",
    "options": [
      "0x19A",
      "0x334",
      "0x18E",
      "0x1BA"
    ],
    "answer": 0,
    "explanation": "Decimal 410 translates directly to Base-16 hexadecimal as 0x19A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 481.",
    "options": [
      "0x201",
      "0x3C2",
      "0x1E1",
      "0x1D5"
    ],
    "answer": 2,
    "explanation": "Decimal 481 translates directly to Base-16 hexadecimal as 0x1E1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 273.",
    "options": [
      "0x222",
      "0x105",
      "0x131",
      "0x111"
    ],
    "answer": 3,
    "explanation": "Decimal 273 translates directly to Base-16 hexadecimal as 0x111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 207 to its binary representation.",
    "options": [
      "11100000",
      "11001100",
      "11001111",
      "11010100"
    ],
    "answer": 2,
    "explanation": "207 in binary base-2 is format = 11001111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 192 to its binary representation.",
    "options": [
      "11000000",
      "11010001",
      "11000101",
      "10111101"
    ],
    "answer": 0,
    "explanation": "192 in binary base-2 is format = 11000000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 256.",
    "options": [
      "0x100",
      "0xF4",
      "0x200",
      "0x120"
    ],
    "answer": 0,
    "explanation": "Decimal 256 translates directly to Base-16 hexadecimal as 0x100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 187 to its binary representation.",
    "options": [
      "11000000",
      "10111000",
      "10111011",
      "11001100"
    ],
    "answer": 2,
    "explanation": "187 in binary base-2 is format = 10111011."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "1 bits",
      "-1 bits",
      "17 bits",
      "4 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 315.",
    "options": [
      "0x13B",
      "0x12F",
      "0x276",
      "0x15B"
    ],
    "answer": 0,
    "explanation": "Decimal 315 translates directly to Base-16 hexadecimal as 0x13B."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 210 to its binary representation.",
    "options": [
      "11010010",
      "11100011",
      "11001111",
      "11010111"
    ],
    "answer": 0,
    "explanation": "210 in binary base-2 is format = 11010010."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "6 bits",
      "3 bits",
      "26 bits",
      "8 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 56 to its binary representation.",
    "options": [
      "111101",
      "110101",
      "111000",
      "1001001"
    ],
    "answer": 2,
    "explanation": "56 in binary base-2 is format = 111000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 95 to its binary representation.",
    "options": [
      "1100100",
      "1110000",
      "1011111",
      "1011100"
    ],
    "answer": 2,
    "explanation": "95 in binary base-2 is format = 1011111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 314.",
    "options": [
      "0x12E",
      "0x274",
      "0x15A",
      "0x13A"
    ],
    "answer": 3,
    "explanation": "Decimal 314 translates directly to Base-16 hexadecimal as 0x13A."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 162 to its binary representation.",
    "options": [
      "10011111",
      "10110011",
      "10100111",
      "10100010"
    ],
    "answer": 3,
    "explanation": "162 in binary base-2 is format = 10100010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 475.",
    "options": [
      "0x1FB",
      "0x1CF",
      "0x3B6",
      "0x1DB"
    ],
    "answer": 3,
    "explanation": "Decimal 475 translates directly to Base-16 hexadecimal as 0x1DB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 479.",
    "options": [
      "0x1FF",
      "0x3BE",
      "0x1DF",
      "0x1D3"
    ],
    "answer": 2,
    "explanation": "Decimal 479 translates directly to Base-16 hexadecimal as 0x1DF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 429.",
    "options": [
      "0x1AD",
      "0x35A",
      "0x1A1",
      "0x1CD"
    ],
    "answer": 0,
    "explanation": "Decimal 429 translates directly to Base-16 hexadecimal as 0x1AD."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 331.",
    "options": [
      "0x14B",
      "0x13F",
      "0x296",
      "0x16B"
    ],
    "answer": 0,
    "explanation": "Decimal 331 translates directly to Base-16 hexadecimal as 0x14B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 269.",
    "options": [
      "0x101",
      "0x10D",
      "0x12D",
      "0x21A"
    ],
    "answer": 1,
    "explanation": "Decimal 269 translates directly to Base-16 hexadecimal as 0x10D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 128.",
    "options": [
      "0x100",
      "0x74",
      "0x80",
      "0xA0"
    ],
    "answer": 2,
    "explanation": "Decimal 128 translates directly to Base-16 hexadecimal as 0x80."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 203 to its binary representation.",
    "options": [
      "11010000",
      "11011100",
      "11001000",
      "11001011"
    ],
    "answer": 3,
    "explanation": "203 in binary base-2 is format = 11001011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 188.",
    "options": [
      "0xB0",
      "0xDC",
      "0x178",
      "0xBC"
    ],
    "answer": 3,
    "explanation": "Decimal 188 translates directly to Base-16 hexadecimal as 0xBC."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 158 to its binary representation.",
    "options": [
      "10011011",
      "10011110",
      "10100011",
      "10101111"
    ],
    "answer": 1,
    "explanation": "158 in binary base-2 is format = 10011110."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "2 bits",
      "7 bits",
      "5 bits",
      "27 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 153.",
    "options": [
      "0x132",
      "0x99",
      "0xB9",
      "0x8D"
    ],
    "answer": 1,
    "explanation": "Decimal 153 translates directly to Base-16 hexadecimal as 0x99."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 51 to its binary representation.",
    "options": [
      "110011",
      "1000100",
      "110000",
      "111000"
    ],
    "answer": 0,
    "explanation": "51 in binary base-2 is format = 110011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 207.",
    "options": [
      "0xC3",
      "0x19E",
      "0xCF",
      "0xEF"
    ],
    "answer": 2,
    "explanation": "Decimal 207 translates directly to Base-16 hexadecimal as 0xCF."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 180 to its binary representation.",
    "options": [
      "10111001",
      "10110100",
      "11000101",
      "10110001"
    ],
    "answer": 1,
    "explanation": "180 in binary base-2 is format = 10110100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 196 to its binary representation.",
    "options": [
      "11000100",
      "11000001",
      "11010101",
      "11001001"
    ],
    "answer": 0,
    "explanation": "196 in binary base-2 is format = 11000100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 24 to its binary representation.",
    "options": [
      "11101",
      "10101",
      "101001",
      "11000"
    ],
    "answer": 3,
    "explanation": "24 in binary base-2 is format = 11000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 304.",
    "options": [
      "0x124",
      "0x260",
      "0x150",
      "0x130"
    ],
    "answer": 3,
    "explanation": "Decimal 304 translates directly to Base-16 hexadecimal as 0x130."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 489.",
    "options": [
      "0x1E9",
      "0x209",
      "0x3D2",
      "0x1DD"
    ],
    "answer": 0,
    "explanation": "Decimal 489 translates directly to Base-16 hexadecimal as 0x1E9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 326.",
    "options": [
      "0x146",
      "0x13A",
      "0x166",
      "0x28C"
    ],
    "answer": 0,
    "explanation": "Decimal 326 translates directly to Base-16 hexadecimal as 0x146."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 28 to its binary representation.",
    "options": [
      "101101",
      "11100",
      "11001",
      "100001"
    ],
    "answer": 1,
    "explanation": "28 in binary base-2 is format = 11100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 544.",
    "options": [
      "0x220",
      "0x240",
      "0x440",
      "0x214"
    ],
    "answer": 0,
    "explanation": "Decimal 544 translates directly to Base-16 hexadecimal as 0x220."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 169 to its binary representation.",
    "options": [
      "10101110",
      "10100110",
      "10111010",
      "10101001"
    ],
    "answer": 3,
    "explanation": "169 in binary base-2 is format = 10101001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 66 to its binary representation.",
    "options": [
      "1000010",
      "111111",
      "1000111",
      "1010011"
    ],
    "answer": 0,
    "explanation": "66 in binary base-2 is format = 1000010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 428.",
    "options": [
      "0x1CC",
      "0x358",
      "0x1A0",
      "0x1AC"
    ],
    "answer": 3,
    "explanation": "Decimal 428 translates directly to Base-16 hexadecimal as 0x1AC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 330.",
    "options": [
      "0x16A",
      "0x14A",
      "0x13E",
      "0x294"
    ],
    "answer": 1,
    "explanation": "Decimal 330 translates directly to Base-16 hexadecimal as 0x14A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 365.",
    "options": [
      "0x161",
      "0x2DA",
      "0x16D",
      "0x18D"
    ],
    "answer": 2,
    "explanation": "Decimal 365 translates directly to Base-16 hexadecimal as 0x16D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 301.",
    "options": [
      "0x25A",
      "0x14D",
      "0x12D",
      "0x121"
    ],
    "answer": 2,
    "explanation": "Decimal 301 translates directly to Base-16 hexadecimal as 0x12D."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the OFFSET bitfield?",
    "options": [
      "4 bits",
      "6 bits",
      "12 bits",
      "1 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 205 to its binary representation.",
    "options": [
      "11010010",
      "11001101",
      "11001010",
      "11011110"
    ],
    "answer": 1,
    "explanation": "205 in binary base-2 is format = 11001101."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 177 to its binary representation.",
    "options": [
      "10110110",
      "11000010",
      "10110001",
      "10101110"
    ],
    "answer": 2,
    "explanation": "177 in binary base-2 is format = 10110001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 104 to its binary representation.",
    "options": [
      "1101101",
      "1101000",
      "1111001",
      "1100101"
    ],
    "answer": 1,
    "explanation": "104 in binary base-2 is format = 1101000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 79.",
    "options": [
      "0x43",
      "0x9E",
      "0x4F",
      "0x6F"
    ],
    "answer": 2,
    "explanation": "Decimal 79 translates directly to Base-16 hexadecimal as 0x4F."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 83 to its binary representation.",
    "options": [
      "1011000",
      "1010011",
      "1010000",
      "1100100"
    ],
    "answer": 1,
    "explanation": "83 in binary base-2 is format = 1010011."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "9 bits",
      "11 bits",
      "6 bits",
      "15 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 55 to its binary representation.",
    "options": [
      "110100",
      "110111",
      "1001000",
      "111100"
    ],
    "answer": 1,
    "explanation": "55 in binary base-2 is format = 110111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 70 to its binary representation.",
    "options": [
      "1000110",
      "1000011",
      "1010111",
      "1001011"
    ],
    "answer": 0,
    "explanation": "70 in binary base-2 is format = 1000110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 380.",
    "options": [
      "0x19C",
      "0x17C",
      "0x2F8",
      "0x170"
    ],
    "answer": 1,
    "explanation": "Decimal 380 translates directly to Base-16 hexadecimal as 0x17C."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the TAG bitfield?",
    "options": [
      "2 bits",
      "1 bits",
      "4 bits",
      "14 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 139.",
    "options": [
      "0x8B",
      "0x7F",
      "0xAB",
      "0x116"
    ],
    "answer": 0,
    "explanation": "Decimal 139 translates directly to Base-16 hexadecimal as 0x8B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 474.",
    "options": [
      "0x1FA",
      "0x1DA",
      "0x3B4",
      "0x1CE"
    ],
    "answer": 1,
    "explanation": "Decimal 474 translates directly to Base-16 hexadecimal as 0x1DA."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 52 to its binary representation.",
    "options": [
      "110001",
      "110100",
      "111001",
      "1000101"
    ],
    "answer": 1,
    "explanation": "52 in binary base-2 is format = 110100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 133 to its binary representation.",
    "options": [
      "10000101",
      "10000010",
      "10001010",
      "10010110"
    ],
    "answer": 0,
    "explanation": "133 in binary base-2 is format = 10000101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 406.",
    "options": [
      "0x1B6",
      "0x196",
      "0x18A",
      "0x32C"
    ],
    "answer": 1,
    "explanation": "Decimal 406 translates directly to Base-16 hexadecimal as 0x196."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 150.",
    "options": [
      "0x8A",
      "0x12C",
      "0xB6",
      "0x96"
    ],
    "answer": 3,
    "explanation": "Decimal 150 translates directly to Base-16 hexadecimal as 0x96."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 383.",
    "options": [
      "0x17F",
      "0x19F",
      "0x2FE",
      "0x173"
    ],
    "answer": 0,
    "explanation": "Decimal 383 translates directly to Base-16 hexadecimal as 0x17F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 502.",
    "options": [
      "0x1F6",
      "0x1EA",
      "0x3EC",
      "0x216"
    ],
    "answer": 0,
    "explanation": "Decimal 502 translates directly to Base-16 hexadecimal as 0x1F6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 477.",
    "options": [
      "0x1FD",
      "0x3BA",
      "0x1DD",
      "0x1D1"
    ],
    "answer": 2,
    "explanation": "Decimal 477 translates directly to Base-16 hexadecimal as 0x1DD."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 48 to its binary representation.",
    "options": [
      "110000",
      "1000001",
      "110101",
      "101101"
    ],
    "answer": 0,
    "explanation": "48 in binary base-2 is format = 110000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 188 to its binary representation.",
    "options": [
      "11000001",
      "10111001",
      "11001101",
      "10111100"
    ],
    "answer": 3,
    "explanation": "188 in binary base-2 is format = 10111100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 289.",
    "options": [
      "0x141",
      "0x115",
      "0x121",
      "0x242"
    ],
    "answer": 2,
    "explanation": "Decimal 289 translates directly to Base-16 hexadecimal as 0x121."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "11 bits",
      "21 bits",
      "13 bits",
      "8 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 120.",
    "options": [
      "0xF0",
      "0x78",
      "0x6C",
      "0x98"
    ],
    "answer": 1,
    "explanation": "Decimal 120 translates directly to Base-16 hexadecimal as 0x78."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 342.",
    "options": [
      "0x2AC",
      "0x156",
      "0x14A",
      "0x176"
    ],
    "answer": 1,
    "explanation": "Decimal 342 translates directly to Base-16 hexadecimal as 0x156."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 43 to its binary representation.",
    "options": [
      "101000",
      "101011",
      "110000",
      "111100"
    ],
    "answer": 1,
    "explanation": "43 in binary base-2 is format = 101011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 286.",
    "options": [
      "0x11E",
      "0x112",
      "0x13E",
      "0x23C"
    ],
    "answer": 0,
    "explanation": "Decimal 286 translates directly to Base-16 hexadecimal as 0x11E."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "6 bits",
      "11 bits",
      "9 bits",
      "23 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 156 to its binary representation.",
    "options": [
      "10100001",
      "10011100",
      "10101101",
      "10011001"
    ],
    "answer": 1,
    "explanation": "156 in binary base-2 is format = 10011100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 106.",
    "options": [
      "0x6A",
      "0x8A",
      "0x5E",
      "0xD4"
    ],
    "answer": 0,
    "explanation": "Decimal 106 translates directly to Base-16 hexadecimal as 0x6A."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 33 to its binary representation.",
    "options": [
      "100001",
      "100110",
      "11110",
      "110010"
    ],
    "answer": 0,
    "explanation": "33 in binary base-2 is format = 100001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 504.",
    "options": [
      "0x3F0",
      "0x218",
      "0x1EC",
      "0x1F8"
    ],
    "answer": 3,
    "explanation": "Decimal 504 translates directly to Base-16 hexadecimal as 0x1F8."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 49 to its binary representation.",
    "options": [
      "1000010",
      "101110",
      "110001",
      "110110"
    ],
    "answer": 2,
    "explanation": "49 in binary base-2 is format = 110001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 235.",
    "options": [
      "0xDF",
      "0x10B",
      "0x1D6",
      "0xEB"
    ],
    "answer": 3,
    "explanation": "Decimal 235 translates directly to Base-16 hexadecimal as 0xEB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 232.",
    "options": [
      "0xE8",
      "0x108",
      "0x1D0",
      "0xDC"
    ],
    "answer": 0,
    "explanation": "Decimal 232 translates directly to Base-16 hexadecimal as 0xE8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 438.",
    "options": [
      "0x1D6",
      "0x1B6",
      "0x36C",
      "0x1AA"
    ],
    "answer": 1,
    "explanation": "Decimal 438 translates directly to Base-16 hexadecimal as 0x1B6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 441.",
    "options": [
      "0x1B9",
      "0x1D9",
      "0x1AD",
      "0x372"
    ],
    "answer": 0,
    "explanation": "Decimal 441 translates directly to Base-16 hexadecimal as 0x1B9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 316.",
    "options": [
      "0x278",
      "0x15C",
      "0x130",
      "0x13C"
    ],
    "answer": 3,
    "explanation": "Decimal 316 translates directly to Base-16 hexadecimal as 0x13C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 133.",
    "options": [
      "0x85",
      "0x79",
      "0xA5",
      "0x10A"
    ],
    "answer": 0,
    "explanation": "Decimal 133 translates directly to Base-16 hexadecimal as 0x85."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 468.",
    "options": [
      "0x3A8",
      "0x1C8",
      "0x1D4",
      "0x1F4"
    ],
    "answer": 2,
    "explanation": "Decimal 468 translates directly to Base-16 hexadecimal as 0x1D4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 364.",
    "options": [
      "0x18C",
      "0x160",
      "0x16C",
      "0x2D8"
    ],
    "answer": 2,
    "explanation": "Decimal 364 translates directly to Base-16 hexadecimal as 0x16C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 456.",
    "options": [
      "0x390",
      "0x1E8",
      "0x1C8",
      "0x1BC"
    ],
    "answer": 2,
    "explanation": "Decimal 456 translates directly to Base-16 hexadecimal as 0x1C8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 114.",
    "options": [
      "0x92",
      "0xE4",
      "0x72",
      "0x66"
    ],
    "answer": 2,
    "explanation": "Decimal 114 translates directly to Base-16 hexadecimal as 0x72."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 473.",
    "options": [
      "0x1D9",
      "0x1CD",
      "0x1F9",
      "0x3B2"
    ],
    "answer": 0,
    "explanation": "Decimal 473 translates directly to Base-16 hexadecimal as 0x1D9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 253.",
    "options": [
      "0xFD",
      "0x11D",
      "0xF1",
      "0x1FA"
    ],
    "answer": 0,
    "explanation": "Decimal 253 translates directly to Base-16 hexadecimal as 0xFD."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 300.",
    "options": [
      "0x258",
      "0x120",
      "0x14C",
      "0x12C"
    ],
    "answer": 3,
    "explanation": "Decimal 300 translates directly to Base-16 hexadecimal as 0x12C."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 178 to its binary representation.",
    "options": [
      "11000011",
      "10101111",
      "10110111",
      "10110010"
    ],
    "answer": 3,
    "explanation": "178 in binary base-2 is format = 10110010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 88.",
    "options": [
      "0xB0",
      "0x58",
      "0x4C",
      "0x78"
    ],
    "answer": 1,
    "explanation": "Decimal 88 translates directly to Base-16 hexadecimal as 0x58."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the TAG bitfield?",
    "options": [
      "4 bits",
      "1 bits",
      "2 bits",
      "14 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 88 to its binary representation.",
    "options": [
      "1010101",
      "1101001",
      "1011000",
      "1011101"
    ],
    "answer": 2,
    "explanation": "88 in binary base-2 is format = 1011000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 209 to its binary representation.",
    "options": [
      "11001110",
      "11100010",
      "11010110",
      "11010001"
    ],
    "answer": 3,
    "explanation": "209 in binary base-2 is format = 11010001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 229.",
    "options": [
      "0xD9",
      "0xE5",
      "0x1CA",
      "0x105"
    ],
    "answer": 1,
    "explanation": "Decimal 229 translates directly to Base-16 hexadecimal as 0xE5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 297.",
    "options": [
      "0x11D",
      "0x252",
      "0x149",
      "0x129"
    ],
    "answer": 3,
    "explanation": "Decimal 297 translates directly to Base-16 hexadecimal as 0x129."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "5 bits",
      "10 bits",
      "16 bits",
      "8 bits"
    ],
    "answer": 3,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 211.",
    "options": [
      "0xD3",
      "0xC7",
      "0x1A6",
      "0xF3"
    ],
    "answer": 0,
    "explanation": "Decimal 211 translates directly to Base-16 hexadecimal as 0xD3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 65.",
    "options": [
      "0x82",
      "0x61",
      "0x41",
      "0x35"
    ],
    "answer": 2,
    "explanation": "Decimal 65 translates directly to Base-16 hexadecimal as 0x41."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 212 to its binary representation.",
    "options": [
      "11010001",
      "11100101",
      "11010100",
      "11011001"
    ],
    "answer": 2,
    "explanation": "212 in binary base-2 is format = 11010100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 281.",
    "options": [
      "0x232",
      "0x139",
      "0x119",
      "0x10D"
    ],
    "answer": 2,
    "explanation": "Decimal 281 translates directly to Base-16 hexadecimal as 0x119."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 313.",
    "options": [
      "0x159",
      "0x139",
      "0x272",
      "0x12D"
    ],
    "answer": 1,
    "explanation": "Decimal 313 translates directly to Base-16 hexadecimal as 0x139."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 431.",
    "options": [
      "0x1A3",
      "0x35E",
      "0x1CF",
      "0x1AF"
    ],
    "answer": 3,
    "explanation": "Decimal 431 translates directly to Base-16 hexadecimal as 0x1AF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 166.",
    "options": [
      "0x9A",
      "0xA6",
      "0x14C",
      "0xC6"
    ],
    "answer": 1,
    "explanation": "Decimal 166 translates directly to Base-16 hexadecimal as 0xA6."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 17 to its binary representation.",
    "options": [
      "10110",
      "10001",
      "1110",
      "100010"
    ],
    "answer": 1,
    "explanation": "17 in binary base-2 is format = 10001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 142 to its binary representation.",
    "options": [
      "10010011",
      "10001011",
      "10011111",
      "10001110"
    ],
    "answer": 3,
    "explanation": "142 in binary base-2 is format = 10001110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 382.",
    "options": [
      "0x19E",
      "0x172",
      "0x2FC",
      "0x17E"
    ],
    "answer": 3,
    "explanation": "Decimal 382 translates directly to Base-16 hexadecimal as 0x17E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 540.",
    "options": [
      "0x21C",
      "0x210",
      "0x438",
      "0x23C"
    ],
    "answer": 0,
    "explanation": "Decimal 540 translates directly to Base-16 hexadecimal as 0x21C."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 134 to its binary representation.",
    "options": [
      "10010111",
      "10001011",
      "10000011",
      "10000110"
    ],
    "answer": 3,
    "explanation": "134 in binary base-2 is format = 10000110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 324.",
    "options": [
      "0x164",
      "0x288",
      "0x138",
      "0x144"
    ],
    "answer": 3,
    "explanation": "Decimal 324 translates directly to Base-16 hexadecimal as 0x144."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "9 bits",
      "12 bits",
      "14 bits",
      "4 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 462.",
    "options": [
      "0x1EE",
      "0x39C",
      "0x1CE",
      "0x1C2"
    ],
    "answer": 2,
    "explanation": "Decimal 462 translates directly to Base-16 hexadecimal as 0x1CE."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 190.",
    "options": [
      "0x17C",
      "0xB2",
      "0xDE",
      "0xBE"
    ],
    "answer": 3,
    "explanation": "Decimal 190 translates directly to Base-16 hexadecimal as 0xBE."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 417.",
    "options": [
      "0x195",
      "0x1C1",
      "0x1A1",
      "0x342"
    ],
    "answer": 2,
    "explanation": "Decimal 417 translates directly to Base-16 hexadecimal as 0x1A1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 317.",
    "options": [
      "0x13D",
      "0x131",
      "0x27A",
      "0x15D"
    ],
    "answer": 0,
    "explanation": "Decimal 317 translates directly to Base-16 hexadecimal as 0x13D."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "12 bits",
      "14 bits",
      "20 bits",
      "9 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 337.",
    "options": [
      "0x145",
      "0x151",
      "0x171",
      "0x2A2"
    ],
    "answer": 1,
    "explanation": "Decimal 337 translates directly to Base-16 hexadecimal as 0x151."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 222.",
    "options": [
      "0xDE",
      "0xFE",
      "0xD2",
      "0x1BC"
    ],
    "answer": 0,
    "explanation": "Decimal 222 translates directly to Base-16 hexadecimal as 0xDE."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 306.",
    "options": [
      "0x264",
      "0x132",
      "0x152",
      "0x126"
    ],
    "answer": 1,
    "explanation": "Decimal 306 translates directly to Base-16 hexadecimal as 0x132."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 445.",
    "options": [
      "0x37A",
      "0x1BD",
      "0x1B1",
      "0x1DD"
    ],
    "answer": 1,
    "explanation": "Decimal 445 translates directly to Base-16 hexadecimal as 0x1BD."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 484.",
    "options": [
      "0x3C8",
      "0x204",
      "0x1E4",
      "0x1D8"
    ],
    "answer": 2,
    "explanation": "Decimal 484 translates directly to Base-16 hexadecimal as 0x1E4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 293.",
    "options": [
      "0x119",
      "0x125",
      "0x145",
      "0x24A"
    ],
    "answer": 1,
    "explanation": "Decimal 293 translates directly to Base-16 hexadecimal as 0x125."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 129 to its binary representation.",
    "options": [
      "10010010",
      "10000110",
      "10000001",
      "1111110"
    ],
    "answer": 2,
    "explanation": "129 in binary base-2 is format = 10000001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 558.",
    "options": [
      "0x22E",
      "0x222",
      "0x24E",
      "0x45C"
    ],
    "answer": 0,
    "explanation": "Decimal 558 translates directly to Base-16 hexadecimal as 0x22E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 433.",
    "options": [
      "0x1B1",
      "0x362",
      "0x1D1",
      "0x1A5"
    ],
    "answer": 0,
    "explanation": "Decimal 433 translates directly to Base-16 hexadecimal as 0x1B1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 263.",
    "options": [
      "0x127",
      "0x20E",
      "0xFB",
      "0x107"
    ],
    "answer": 3,
    "explanation": "Decimal 263 translates directly to Base-16 hexadecimal as 0x107."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 388.",
    "options": [
      "0x184",
      "0x1A4",
      "0x308",
      "0x178"
    ],
    "answer": 0,
    "explanation": "Decimal 388 translates directly to Base-16 hexadecimal as 0x184."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 103.",
    "options": [
      "0x5B",
      "0x67",
      "0x87",
      "0xCE"
    ],
    "answer": 1,
    "explanation": "Decimal 103 translates directly to Base-16 hexadecimal as 0x67."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 553.",
    "options": [
      "0x452",
      "0x249",
      "0x229",
      "0x21D"
    ],
    "answer": 2,
    "explanation": "Decimal 553 translates directly to Base-16 hexadecimal as 0x229."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 349.",
    "options": [
      "0x17D",
      "0x2BA",
      "0x15D",
      "0x151"
    ],
    "answer": 2,
    "explanation": "Decimal 349 translates directly to Base-16 hexadecimal as 0x15D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 363.",
    "options": [
      "0x16B",
      "0x2D6",
      "0x18B",
      "0x15F"
    ],
    "answer": 0,
    "explanation": "Decimal 363 translates directly to Base-16 hexadecimal as 0x16B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 354.",
    "options": [
      "0x182",
      "0x162",
      "0x2C4",
      "0x156"
    ],
    "answer": 1,
    "explanation": "Decimal 354 translates directly to Base-16 hexadecimal as 0x162."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 159.",
    "options": [
      "0x13E",
      "0xBF",
      "0x9F",
      "0x93"
    ],
    "answer": 2,
    "explanation": "Decimal 159 translates directly to Base-16 hexadecimal as 0x9F."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 151 to its binary representation.",
    "options": [
      "10101000",
      "10010111",
      "10010100",
      "10011100"
    ],
    "answer": 1,
    "explanation": "151 in binary base-2 is format = 10010111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 478.",
    "options": [
      "0x1DE",
      "0x1D2",
      "0x3BC",
      "0x1FE"
    ],
    "answer": 0,
    "explanation": "Decimal 478 translates directly to Base-16 hexadecimal as 0x1DE."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 50 to its binary representation.",
    "options": [
      "110010",
      "1000011",
      "101111",
      "110111"
    ],
    "answer": 0,
    "explanation": "50 in binary base-2 is format = 110010."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 100 to its binary representation.",
    "options": [
      "1101001",
      "1100001",
      "1100100",
      "1110101"
    ],
    "answer": 2,
    "explanation": "100 in binary base-2 is format = 1100100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 206.",
    "options": [
      "0xEE",
      "0xCE",
      "0xC2",
      "0x19C"
    ],
    "answer": 1,
    "explanation": "Decimal 206 translates directly to Base-16 hexadecimal as 0xCE."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 99 to its binary representation.",
    "options": [
      "1101000",
      "1110100",
      "1100011",
      "1100000"
    ],
    "answer": 2,
    "explanation": "99 in binary base-2 is format = 1100011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 298.",
    "options": [
      "0x11E",
      "0x12A",
      "0x254",
      "0x14A"
    ],
    "answer": 1,
    "explanation": "Decimal 298 translates directly to Base-16 hexadecimal as 0x12A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 176.",
    "options": [
      "0x160",
      "0xB0",
      "0xA4",
      "0xD0"
    ],
    "answer": 1,
    "explanation": "Decimal 176 translates directly to Base-16 hexadecimal as 0xB0."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 415.",
    "options": [
      "0x33E",
      "0x193",
      "0x1BF",
      "0x19F"
    ],
    "answer": 3,
    "explanation": "Decimal 415 translates directly to Base-16 hexadecimal as 0x19F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 220.",
    "options": [
      "0xD0",
      "0xFC",
      "0x1B8",
      "0xDC"
    ],
    "answer": 3,
    "explanation": "Decimal 220 translates directly to Base-16 hexadecimal as 0xDC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 419.",
    "options": [
      "0x1C3",
      "0x1A3",
      "0x346",
      "0x197"
    ],
    "answer": 1,
    "explanation": "Decimal 419 translates directly to Base-16 hexadecimal as 0x1A3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 420.",
    "options": [
      "0x198",
      "0x1C4",
      "0x1A4",
      "0x348"
    ],
    "answer": 2,
    "explanation": "Decimal 420 translates directly to Base-16 hexadecimal as 0x1A4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 233.",
    "options": [
      "0xDD",
      "0x1D2",
      "0x109",
      "0xE9"
    ],
    "answer": 3,
    "explanation": "Decimal 233 translates directly to Base-16 hexadecimal as 0xE9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 426.",
    "options": [
      "0x354",
      "0x1AA",
      "0x1CA",
      "0x19E"
    ],
    "answer": 1,
    "explanation": "Decimal 426 translates directly to Base-16 hexadecimal as 0x1AA."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 148.",
    "options": [
      "0xB4",
      "0x88",
      "0x128",
      "0x94"
    ],
    "answer": 3,
    "explanation": "Decimal 148 translates directly to Base-16 hexadecimal as 0x94."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 528.",
    "options": [
      "0x204",
      "0x420",
      "0x230",
      "0x210"
    ],
    "answer": 3,
    "explanation": "Decimal 528 translates directly to Base-16 hexadecimal as 0x210."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 329.",
    "options": [
      "0x292",
      "0x169",
      "0x149",
      "0x13D"
    ],
    "answer": 2,
    "explanation": "Decimal 329 translates directly to Base-16 hexadecimal as 0x149."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 448.",
    "options": [
      "0x1C0",
      "0x380",
      "0x1E0",
      "0x1B4"
    ],
    "answer": 0,
    "explanation": "Decimal 448 translates directly to Base-16 hexadecimal as 0x1C0."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 182.",
    "options": [
      "0x16C",
      "0xAA",
      "0xB6",
      "0xD6"
    ],
    "answer": 2,
    "explanation": "Decimal 182 translates directly to Base-16 hexadecimal as 0xB6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 186.",
    "options": [
      "0xBA",
      "0xDA",
      "0xAE",
      "0x174"
    ],
    "answer": 0,
    "explanation": "Decimal 186 translates directly to Base-16 hexadecimal as 0xBA."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 366.",
    "options": [
      "0x162",
      "0x18E",
      "0x16E",
      "0x2DC"
    ],
    "answer": 2,
    "explanation": "Decimal 366 translates directly to Base-16 hexadecimal as 0x16E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 495.",
    "options": [
      "0x3DE",
      "0x1EF",
      "0x20F",
      "0x1E3"
    ],
    "answer": 1,
    "explanation": "Decimal 495 translates directly to Base-16 hexadecimal as 0x1EF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 522.",
    "options": [
      "0x1FE",
      "0x20A",
      "0x22A",
      "0x414"
    ],
    "answer": 1,
    "explanation": "Decimal 522 translates directly to Base-16 hexadecimal as 0x20A."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield?",
    "options": [
      "9 bits",
      "15 bits",
      "6 bits",
      "11 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 345.",
    "options": [
      "0x179",
      "0x2B2",
      "0x14D",
      "0x159"
    ],
    "answer": 3,
    "explanation": "Decimal 345 translates directly to Base-16 hexadecimal as 0x159."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 542.",
    "options": [
      "0x21E",
      "0x43C",
      "0x212",
      "0x23E"
    ],
    "answer": 0,
    "explanation": "Decimal 542 translates directly to Base-16 hexadecimal as 0x21E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 238.",
    "options": [
      "0xE2",
      "0x1DC",
      "0xEE",
      "0x10E"
    ],
    "answer": 2,
    "explanation": "Decimal 238 translates directly to Base-16 hexadecimal as 0xEE."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 444.",
    "options": [
      "0x378",
      "0x1BC",
      "0x1DC",
      "0x1B0"
    ],
    "answer": 1,
    "explanation": "Decimal 444 translates directly to Base-16 hexadecimal as 0x1BC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 506.",
    "options": [
      "0x1FA",
      "0x1EE",
      "0x3F4",
      "0x21A"
    ],
    "answer": 0,
    "explanation": "Decimal 506 translates directly to Base-16 hexadecimal as 0x1FA."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 499.",
    "options": [
      "0x213",
      "0x1F3",
      "0x3E6",
      "0x1E7"
    ],
    "answer": 1,
    "explanation": "Decimal 499 translates directly to Base-16 hexadecimal as 0x1F3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 305.",
    "options": [
      "0x125",
      "0x151",
      "0x131",
      "0x262"
    ],
    "answer": 2,
    "explanation": "Decimal 305 translates directly to Base-16 hexadecimal as 0x131."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 204.",
    "options": [
      "0xEC",
      "0xC0",
      "0xCC",
      "0x198"
    ],
    "answer": 2,
    "explanation": "Decimal 204 translates directly to Base-16 hexadecimal as 0xCC."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 176 to its binary representation.",
    "options": [
      "10101101",
      "11000001",
      "10110101",
      "10110000"
    ],
    "answer": 3,
    "explanation": "176 in binary base-2 is format = 10110000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 60.",
    "options": [
      "0x5C",
      "0x78",
      "0x3C",
      "0x30"
    ],
    "answer": 2,
    "explanation": "Decimal 60 translates directly to Base-16 hexadecimal as 0x3C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 548.",
    "options": [
      "0x244",
      "0x218",
      "0x448",
      "0x224"
    ],
    "answer": 3,
    "explanation": "Decimal 548 translates directly to Base-16 hexadecimal as 0x224."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 556.",
    "options": [
      "0x220",
      "0x22C",
      "0x458",
      "0x24C"
    ],
    "answer": 1,
    "explanation": "Decimal 556 translates directly to Base-16 hexadecimal as 0x22C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 411.",
    "options": [
      "0x19B",
      "0x1BB",
      "0x18F",
      "0x336"
    ],
    "answer": 0,
    "explanation": "Decimal 411 translates directly to Base-16 hexadecimal as 0x19B."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 110 to its binary representation.",
    "options": [
      "1101011",
      "1101110",
      "1110011",
      "1111111"
    ],
    "answer": 1,
    "explanation": "110 in binary base-2 is format = 1101110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 535.",
    "options": [
      "0x237",
      "0x217",
      "0x42E",
      "0x20B"
    ],
    "answer": 1,
    "explanation": "Decimal 535 translates directly to Base-16 hexadecimal as 0x217."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 284.",
    "options": [
      "0x13C",
      "0x11C",
      "0x110",
      "0x238"
    ],
    "answer": 1,
    "explanation": "Decimal 284 translates directly to Base-16 hexadecimal as 0x11C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 147.",
    "options": [
      "0x93",
      "0xB3",
      "0x87",
      "0x126"
    ],
    "answer": 0,
    "explanation": "Decimal 147 translates directly to Base-16 hexadecimal as 0x93."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 107.",
    "options": [
      "0x6B",
      "0x5F",
      "0x8B",
      "0xD6"
    ],
    "answer": 0,
    "explanation": "Decimal 107 translates directly to Base-16 hexadecimal as 0x6B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 309.",
    "options": [
      "0x155",
      "0x135",
      "0x129",
      "0x26A"
    ],
    "answer": 1,
    "explanation": "Decimal 309 translates directly to Base-16 hexadecimal as 0x135."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 490.",
    "options": [
      "0x1EA",
      "0x3D4",
      "0x20A",
      "0x1DE"
    ],
    "answer": 0,
    "explanation": "Decimal 490 translates directly to Base-16 hexadecimal as 0x1EA."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 175.",
    "options": [
      "0xA3",
      "0xAF",
      "0x15E",
      "0xCF"
    ],
    "answer": 1,
    "explanation": "Decimal 175 translates directly to Base-16 hexadecimal as 0xAF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 160.",
    "options": [
      "0xC0",
      "0x94",
      "0xA0",
      "0x140"
    ],
    "answer": 2,
    "explanation": "Decimal 160 translates directly to Base-16 hexadecimal as 0xA0."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 151.",
    "options": [
      "0x97",
      "0xB7",
      "0x8B",
      "0x12E"
    ],
    "answer": 0,
    "explanation": "Decimal 151 translates directly to Base-16 hexadecimal as 0x97."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 95.",
    "options": [
      "0x7F",
      "0xBE",
      "0x5F",
      "0x53"
    ],
    "answer": 2,
    "explanation": "Decimal 95 translates directly to Base-16 hexadecimal as 0x5F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 221.",
    "options": [
      "0xDD",
      "0xD1",
      "0xFD",
      "0x1BA"
    ],
    "answer": 0,
    "explanation": "Decimal 221 translates directly to Base-16 hexadecimal as 0xDD."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 117.",
    "options": [
      "0x95",
      "0x75",
      "0x69",
      "0xEA"
    ],
    "answer": 1,
    "explanation": "Decimal 117 translates directly to Base-16 hexadecimal as 0x75."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 213 to its binary representation.",
    "options": [
      "11011010",
      "11010010",
      "11010101",
      "11100110"
    ],
    "answer": 2,
    "explanation": "213 in binary base-2 is format = 11010101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 93.",
    "options": [
      "0x7D",
      "0x51",
      "0xBA",
      "0x5D"
    ],
    "answer": 3,
    "explanation": "Decimal 93 translates directly to Base-16 hexadecimal as 0x5D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 557.",
    "options": [
      "0x22D",
      "0x221",
      "0x24D",
      "0x45A"
    ],
    "answer": 0,
    "explanation": "Decimal 557 translates directly to Base-16 hexadecimal as 0x22D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 414.",
    "options": [
      "0x33C",
      "0x192",
      "0x1BE",
      "0x19E"
    ],
    "answer": 3,
    "explanation": "Decimal 414 translates directly to Base-16 hexadecimal as 0x19E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 200.",
    "options": [
      "0x190",
      "0xBC",
      "0xC8",
      "0xE8"
    ],
    "answer": 2,
    "explanation": "Decimal 200 translates directly to Base-16 hexadecimal as 0xC8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 488.",
    "options": [
      "0x208",
      "0x1E8",
      "0x1DC",
      "0x3D0"
    ],
    "answer": 1,
    "explanation": "Decimal 488 translates directly to Base-16 hexadecimal as 0x1E8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 236.",
    "options": [
      "0x1D8",
      "0xEC",
      "0x10C",
      "0xE0"
    ],
    "answer": 1,
    "explanation": "Decimal 236 translates directly to Base-16 hexadecimal as 0xEC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 195.",
    "options": [
      "0xB7",
      "0xC3",
      "0x186",
      "0xE3"
    ],
    "answer": 1,
    "explanation": "Decimal 195 translates directly to Base-16 hexadecimal as 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 443.",
    "options": [
      "0x1DB",
      "0x1AF",
      "0x376",
      "0x1BB"
    ],
    "answer": 3,
    "explanation": "Decimal 443 translates directly to Base-16 hexadecimal as 0x1BB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 140.",
    "options": [
      "0xAC",
      "0x118",
      "0x80",
      "0x8C"
    ],
    "answer": 3,
    "explanation": "Decimal 140 translates directly to Base-16 hexadecimal as 0x8C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 422.",
    "options": [
      "0x1C6",
      "0x34C",
      "0x19A",
      "0x1A6"
    ],
    "answer": 3,
    "explanation": "Decimal 422 translates directly to Base-16 hexadecimal as 0x1A6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 248.",
    "options": [
      "0xEC",
      "0x1F0",
      "0x118",
      "0xF8"
    ],
    "answer": 3,
    "explanation": "Decimal 248 translates directly to Base-16 hexadecimal as 0xF8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 455.",
    "options": [
      "0x1C7",
      "0x1E7",
      "0x38E",
      "0x1BB"
    ],
    "answer": 0,
    "explanation": "Decimal 455 translates directly to Base-16 hexadecimal as 0x1C7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 68.",
    "options": [
      "0x38",
      "0x44",
      "0x64",
      "0x88"
    ],
    "answer": 1,
    "explanation": "Decimal 68 translates directly to Base-16 hexadecimal as 0x44."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 154 to its binary representation.",
    "options": [
      "10011010",
      "10010111",
      "10011111",
      "10101011"
    ],
    "answer": 0,
    "explanation": "154 in binary base-2 is format = 10011010."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 53 to its binary representation.",
    "options": [
      "110010",
      "111010",
      "1000110",
      "110101"
    ],
    "answer": 3,
    "explanation": "53 in binary base-2 is format = 110101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 372.",
    "options": [
      "0x194",
      "0x168",
      "0x2E8",
      "0x174"
    ],
    "answer": 3,
    "explanation": "Decimal 372 translates directly to Base-16 hexadecimal as 0x174."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 61 to its binary representation.",
    "options": [
      "111101",
      "1000010",
      "1001110",
      "111010"
    ],
    "answer": 0,
    "explanation": "61 in binary base-2 is format = 111101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 198.",
    "options": [
      "0xBA",
      "0xE6",
      "0xC6",
      "0x18C"
    ],
    "answer": 2,
    "explanation": "Decimal 198 translates directly to Base-16 hexadecimal as 0xC6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 245.",
    "options": [
      "0xF5",
      "0x1EA",
      "0xE9",
      "0x115"
    ],
    "answer": 0,
    "explanation": "Decimal 245 translates directly to Base-16 hexadecimal as 0xF5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 278.",
    "options": [
      "0x116",
      "0x10A",
      "0x22C",
      "0x136"
    ],
    "answer": 0,
    "explanation": "Decimal 278 translates directly to Base-16 hexadecimal as 0x116."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 171.",
    "options": [
      "0x156",
      "0x9F",
      "0xCB",
      "0xAB"
    ],
    "answer": 3,
    "explanation": "Decimal 171 translates directly to Base-16 hexadecimal as 0xAB."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 155 to its binary representation.",
    "options": [
      "10011000",
      "10011011",
      "10100000",
      "10101100"
    ],
    "answer": 1,
    "explanation": "155 in binary base-2 is format = 10011011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 549.",
    "options": [
      "0x245",
      "0x44A",
      "0x225",
      "0x219"
    ],
    "answer": 2,
    "explanation": "Decimal 549 translates directly to Base-16 hexadecimal as 0x225."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 231.",
    "options": [
      "0xDB",
      "0xE7",
      "0x1CE",
      "0x107"
    ],
    "answer": 1,
    "explanation": "Decimal 231 translates directly to Base-16 hexadecimal as 0xE7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 457.",
    "options": [
      "0x1BD",
      "0x392",
      "0x1C9",
      "0x1E9"
    ],
    "answer": 2,
    "explanation": "Decimal 457 translates directly to Base-16 hexadecimal as 0x1C9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 434.",
    "options": [
      "0x1D2",
      "0x1A6",
      "0x1B2",
      "0x364"
    ],
    "answer": 2,
    "explanation": "Decimal 434 translates directly to Base-16 hexadecimal as 0x1B2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 538.",
    "options": [
      "0x20E",
      "0x23A",
      "0x21A",
      "0x434"
    ],
    "answer": 2,
    "explanation": "Decimal 538 translates directly to Base-16 hexadecimal as 0x21A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 291.",
    "options": [
      "0x117",
      "0x123",
      "0x143",
      "0x246"
    ],
    "answer": 1,
    "explanation": "Decimal 291 translates directly to Base-16 hexadecimal as 0x123."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 545.",
    "options": [
      "0x221",
      "0x241",
      "0x215",
      "0x442"
    ],
    "answer": 0,
    "explanation": "Decimal 545 translates directly to Base-16 hexadecimal as 0x221."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 72.",
    "options": [
      "0x90",
      "0x48",
      "0x68",
      "0x3C"
    ],
    "answer": 1,
    "explanation": "Decimal 72 translates directly to Base-16 hexadecimal as 0x48."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 175 to its binary representation.",
    "options": [
      "10101100",
      "11000000",
      "10110100",
      "10101111"
    ],
    "answer": 3,
    "explanation": "175 in binary base-2 is format = 10101111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 125 to its binary representation.",
    "options": [
      "10001110",
      "1111010",
      "1111101",
      "10000010"
    ],
    "answer": 2,
    "explanation": "125 in binary base-2 is format = 1111101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 491.",
    "options": [
      "0x3D6",
      "0x1EB",
      "0x20B",
      "0x1DF"
    ],
    "answer": 1,
    "explanation": "Decimal 491 translates directly to Base-16 hexadecimal as 0x1EB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 453.",
    "options": [
      "0x1B9",
      "0x1C5",
      "0x1E5",
      "0x38A"
    ],
    "answer": 1,
    "explanation": "Decimal 453 translates directly to Base-16 hexadecimal as 0x1C5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 318.",
    "options": [
      "0x13E",
      "0x15E",
      "0x132",
      "0x27C"
    ],
    "answer": 0,
    "explanation": "Decimal 318 translates directly to Base-16 hexadecimal as 0x13E."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 35 to its binary representation.",
    "options": [
      "100000",
      "100011",
      "101000",
      "110100"
    ],
    "answer": 1,
    "explanation": "35 in binary base-2 is format = 100011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 360.",
    "options": [
      "0x15C",
      "0x168",
      "0x2D0",
      "0x188"
    ],
    "answer": 1,
    "explanation": "Decimal 360 translates directly to Base-16 hexadecimal as 0x168."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 303.",
    "options": [
      "0x25E",
      "0x123",
      "0x14F",
      "0x12F"
    ],
    "answer": 3,
    "explanation": "Decimal 303 translates directly to Base-16 hexadecimal as 0x12F."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 34 to its binary representation.",
    "options": [
      "11111",
      "100010",
      "110011",
      "100111"
    ],
    "answer": 1,
    "explanation": "34 in binary base-2 is format = 100010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 227.",
    "options": [
      "0xD7",
      "0x1C6",
      "0x103",
      "0xE3"
    ],
    "answer": 3,
    "explanation": "Decimal 227 translates directly to Base-16 hexadecimal as 0xE3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 373.",
    "options": [
      "0x175",
      "0x2EA",
      "0x169",
      "0x195"
    ],
    "answer": 0,
    "explanation": "Decimal 373 translates directly to Base-16 hexadecimal as 0x175."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 74 to its binary representation.",
    "options": [
      "1011011",
      "1000111",
      "1001010",
      "1001111"
    ],
    "answer": 2,
    "explanation": "74 in binary base-2 is format = 1001010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 164.",
    "options": [
      "0x98",
      "0x148",
      "0xA4",
      "0xC4"
    ],
    "answer": 2,
    "explanation": "Decimal 164 translates directly to Base-16 hexadecimal as 0xA4."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 197 to its binary representation.",
    "options": [
      "11000101",
      "11000010",
      "11010110",
      "11001010"
    ],
    "answer": 0,
    "explanation": "197 in binary base-2 is format = 11000101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 136.",
    "options": [
      "0x110",
      "0xA8",
      "0x7C",
      "0x88"
    ],
    "answer": 3,
    "explanation": "Decimal 136 translates directly to Base-16 hexadecimal as 0x88."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 447.",
    "options": [
      "0x1B3",
      "0x1DF",
      "0x37E",
      "0x1BF"
    ],
    "answer": 3,
    "explanation": "Decimal 447 translates directly to Base-16 hexadecimal as 0x1BF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 469.",
    "options": [
      "0x1C9",
      "0x1D5",
      "0x1F5",
      "0x3AA"
    ],
    "answer": 1,
    "explanation": "Decimal 469 translates directly to Base-16 hexadecimal as 0x1D5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 376.",
    "options": [
      "0x2F0",
      "0x16C",
      "0x198",
      "0x178"
    ],
    "answer": 3,
    "explanation": "Decimal 376 translates directly to Base-16 hexadecimal as 0x178."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 510.",
    "options": [
      "0x21E",
      "0x1F2",
      "0x3FC",
      "0x1FE"
    ],
    "answer": 3,
    "explanation": "Decimal 510 translates directly to Base-16 hexadecimal as 0x1FE."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 203.",
    "options": [
      "0xBF",
      "0x196",
      "0xEB",
      "0xCB"
    ],
    "answer": 3,
    "explanation": "Decimal 203 translates directly to Base-16 hexadecimal as 0xCB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 356.",
    "options": [
      "0x2C8",
      "0x164",
      "0x184",
      "0x158"
    ],
    "answer": 1,
    "explanation": "Decimal 356 translates directly to Base-16 hexadecimal as 0x164."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 343.",
    "options": [
      "0x157",
      "0x14B",
      "0x2AE",
      "0x177"
    ],
    "answer": 0,
    "explanation": "Decimal 343 translates directly to Base-16 hexadecimal as 0x157."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 387.",
    "options": [
      "0x1A3",
      "0x183",
      "0x306",
      "0x177"
    ],
    "answer": 1,
    "explanation": "Decimal 387 translates directly to Base-16 hexadecimal as 0x183."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 122.",
    "options": [
      "0x6E",
      "0xF4",
      "0x7A",
      "0x9A"
    ],
    "answer": 2,
    "explanation": "Decimal 122 translates directly to Base-16 hexadecimal as 0x7A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 100.",
    "options": [
      "0xC8",
      "0x58",
      "0x64",
      "0x84"
    ],
    "answer": 2,
    "explanation": "Decimal 100 translates directly to Base-16 hexadecimal as 0x64."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 294.",
    "options": [
      "0x126",
      "0x146",
      "0x24C",
      "0x11A"
    ],
    "answer": 0,
    "explanation": "Decimal 294 translates directly to Base-16 hexadecimal as 0x126."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 123 to its binary representation.",
    "options": [
      "1111000",
      "1111011",
      "10000000",
      "10001100"
    ],
    "answer": 1,
    "explanation": "123 in binary base-2 is format = 1111011."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 171 to its binary representation.",
    "options": [
      "10101000",
      "10110000",
      "10111100",
      "10101011"
    ],
    "answer": 3,
    "explanation": "171 in binary base-2 is format = 10101011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 163.",
    "options": [
      "0xC3",
      "0x146",
      "0xA3",
      "0x97"
    ],
    "answer": 2,
    "explanation": "Decimal 163 translates directly to Base-16 hexadecimal as 0xA3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 213.",
    "options": [
      "0xF5",
      "0x1AA",
      "0xC9",
      "0xD5"
    ],
    "answer": 3,
    "explanation": "Decimal 213 translates directly to Base-16 hexadecimal as 0xD5."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 199 to its binary representation.",
    "options": [
      "11001100",
      "11000111",
      "11011000",
      "11000100"
    ],
    "answer": 1,
    "explanation": "199 in binary base-2 is format = 11000111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 87.",
    "options": [
      "0x77",
      "0x57",
      "0x4B",
      "0xAE"
    ],
    "answer": 1,
    "explanation": "Decimal 87 translates directly to Base-16 hexadecimal as 0x57."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 377.",
    "options": [
      "0x179",
      "0x199",
      "0x16D",
      "0x2F2"
    ],
    "answer": 0,
    "explanation": "Decimal 377 translates directly to Base-16 hexadecimal as 0x179."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 197.",
    "options": [
      "0xE5",
      "0xC5",
      "0xB9",
      "0x18A"
    ],
    "answer": 1,
    "explanation": "Decimal 197 translates directly to Base-16 hexadecimal as 0xC5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 424.",
    "options": [
      "0x1A8",
      "0x19C",
      "0x1C8",
      "0x350"
    ],
    "answer": 0,
    "explanation": "Decimal 424 translates directly to Base-16 hexadecimal as 0x1A8."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 208 to its binary representation.",
    "options": [
      "11001101",
      "11010101",
      "11010000",
      "11100001"
    ],
    "answer": 2,
    "explanation": "208 in binary base-2 is format = 11010000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 177.",
    "options": [
      "0xA5",
      "0xB1",
      "0x162",
      "0xD1"
    ],
    "answer": 1,
    "explanation": "Decimal 177 translates directly to Base-16 hexadecimal as 0xB1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 89.",
    "options": [
      "0x59",
      "0x79",
      "0xB2",
      "0x4D"
    ],
    "answer": 0,
    "explanation": "Decimal 89 translates directly to Base-16 hexadecimal as 0x59."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 154.",
    "options": [
      "0x134",
      "0x8E",
      "0xBA",
      "0x9A"
    ],
    "answer": 3,
    "explanation": "Decimal 154 translates directly to Base-16 hexadecimal as 0x9A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 440.",
    "options": [
      "0x1AC",
      "0x1B8",
      "0x370",
      "0x1D8"
    ],
    "answer": 1,
    "explanation": "Decimal 440 translates directly to Base-16 hexadecimal as 0x1B8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 341.",
    "options": [
      "0x2AA",
      "0x149",
      "0x175",
      "0x155"
    ],
    "answer": 3,
    "explanation": "Decimal 341 translates directly to Base-16 hexadecimal as 0x155."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 432.",
    "options": [
      "0x1A4",
      "0x1D0",
      "0x1B0",
      "0x360"
    ],
    "answer": 2,
    "explanation": "Decimal 432 translates directly to Base-16 hexadecimal as 0x1B0."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 449.",
    "options": [
      "0x1C1",
      "0x1B5",
      "0x382",
      "0x1E1"
    ],
    "answer": 0,
    "explanation": "Decimal 449 translates directly to Base-16 hexadecimal as 0x1C1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 121.",
    "options": [
      "0x99",
      "0x6D",
      "0x79",
      "0xF2"
    ],
    "answer": 2,
    "explanation": "Decimal 121 translates directly to Base-16 hexadecimal as 0x79."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 519.",
    "options": [
      "0x207",
      "0x227",
      "0x1FB",
      "0x40E"
    ],
    "answer": 0,
    "explanation": "Decimal 519 translates directly to Base-16 hexadecimal as 0x207."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 239.",
    "options": [
      "0x1DE",
      "0xEF",
      "0x10F",
      "0xE3"
    ],
    "answer": 1,
    "explanation": "Decimal 239 translates directly to Base-16 hexadecimal as 0xEF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 146.",
    "options": [
      "0x124",
      "0x86",
      "0xB2",
      "0x92"
    ],
    "answer": 3,
    "explanation": "Decimal 146 translates directly to Base-16 hexadecimal as 0x92."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 472.",
    "options": [
      "0x3B0",
      "0x1CC",
      "0x1F8",
      "0x1D8"
    ],
    "answer": 3,
    "explanation": "Decimal 472 translates directly to Base-16 hexadecimal as 0x1D8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 241.",
    "options": [
      "0x1E2",
      "0xF1",
      "0xE5",
      "0x111"
    ],
    "answer": 1,
    "explanation": "Decimal 241 translates directly to Base-16 hexadecimal as 0xF1."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 147 to its binary representation.",
    "options": [
      "10011000",
      "10010011",
      "10010000",
      "10100100"
    ],
    "answer": 1,
    "explanation": "147 in binary base-2 is format = 10010011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 323.",
    "options": [
      "0x286",
      "0x163",
      "0x137",
      "0x143"
    ],
    "answer": 3,
    "explanation": "Decimal 323 translates directly to Base-16 hexadecimal as 0x143."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 162.",
    "options": [
      "0x144",
      "0xC2",
      "0x96",
      "0xA2"
    ],
    "answer": 3,
    "explanation": "Decimal 162 translates directly to Base-16 hexadecimal as 0xA2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 202.",
    "options": [
      "0xCA",
      "0xEA",
      "0x194",
      "0xBE"
    ],
    "answer": 0,
    "explanation": "Decimal 202 translates directly to Base-16 hexadecimal as 0xCA."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 223.",
    "options": [
      "0xD3",
      "0x1BE",
      "0xFF",
      "0xDF"
    ],
    "answer": 3,
    "explanation": "Decimal 223 translates directly to Base-16 hexadecimal as 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 530.",
    "options": [
      "0x232",
      "0x424",
      "0x212",
      "0x206"
    ],
    "answer": 2,
    "explanation": "Decimal 530 translates directly to Base-16 hexadecimal as 0x212."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 333.",
    "options": [
      "0x141",
      "0x14D",
      "0x29A",
      "0x16D"
    ],
    "answer": 1,
    "explanation": "Decimal 333 translates directly to Base-16 hexadecimal as 0x14D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 465.",
    "options": [
      "0x1D1",
      "0x1F1",
      "0x3A2",
      "0x1C5"
    ],
    "answer": 0,
    "explanation": "Decimal 465 translates directly to Base-16 hexadecimal as 0x1D1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 110.",
    "options": [
      "0x8E",
      "0x62",
      "0x6E",
      "0xDC"
    ],
    "answer": 2,
    "explanation": "Decimal 110 translates directly to Base-16 hexadecimal as 0x6E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 500.",
    "options": [
      "0x214",
      "0x1F4",
      "0x3E8",
      "0x1E8"
    ],
    "answer": 1,
    "explanation": "Decimal 500 translates directly to Base-16 hexadecimal as 0x1F4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 541.",
    "options": [
      "0x43A",
      "0x23D",
      "0x211",
      "0x21D"
    ],
    "answer": 3,
    "explanation": "Decimal 541 translates directly to Base-16 hexadecimal as 0x21D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 534.",
    "options": [
      "0x42C",
      "0x216",
      "0x236",
      "0x20A"
    ],
    "answer": 1,
    "explanation": "Decimal 534 translates directly to Base-16 hexadecimal as 0x216."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 476.",
    "options": [
      "0x3B8",
      "0x1DC",
      "0x1FC",
      "0x1D0"
    ],
    "answer": 1,
    "explanation": "Decimal 476 translates directly to Base-16 hexadecimal as 0x1DC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 265.",
    "options": [
      "0x129",
      "0x212",
      "0xFD",
      "0x109"
    ],
    "answer": 3,
    "explanation": "Decimal 265 translates directly to Base-16 hexadecimal as 0x109."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 217.",
    "options": [
      "0xCD",
      "0xD9",
      "0x1B2",
      "0xF9"
    ],
    "answer": 1,
    "explanation": "Decimal 217 translates directly to Base-16 hexadecimal as 0xD9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 552.",
    "options": [
      "0x21C",
      "0x228",
      "0x248",
      "0x450"
    ],
    "answer": 1,
    "explanation": "Decimal 552 translates directly to Base-16 hexadecimal as 0x228."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 389.",
    "options": [
      "0x1A5",
      "0x179",
      "0x30A",
      "0x185"
    ],
    "answer": 3,
    "explanation": "Decimal 389 translates directly to Base-16 hexadecimal as 0x185."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 210.",
    "options": [
      "0xC6",
      "0x1A4",
      "0xF2",
      "0xD2"
    ],
    "answer": 3,
    "explanation": "Decimal 210 translates directly to Base-16 hexadecimal as 0xD2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 369.",
    "options": [
      "0x2E2",
      "0x191",
      "0x165",
      "0x171"
    ],
    "answer": 3,
    "explanation": "Decimal 369 translates directly to Base-16 hexadecimal as 0x171."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 466.",
    "options": [
      "0x3A4",
      "0x1F2",
      "0x1C6",
      "0x1D2"
    ],
    "answer": 3,
    "explanation": "Decimal 466 translates directly to Base-16 hexadecimal as 0x1D2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 537.",
    "options": [
      "0x239",
      "0x20D",
      "0x219",
      "0x432"
    ],
    "answer": 2,
    "explanation": "Decimal 537 translates directly to Base-16 hexadecimal as 0x219."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 258.",
    "options": [
      "0x204",
      "0x122",
      "0xF6",
      "0x102"
    ],
    "answer": 3,
    "explanation": "Decimal 258 translates directly to Base-16 hexadecimal as 0x102."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 62.",
    "options": [
      "0x5E",
      "0x3E",
      "0x32",
      "0x7C"
    ],
    "answer": 1,
    "explanation": "Decimal 62 translates directly to Base-16 hexadecimal as 0x3E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 559.",
    "options": [
      "0x24F",
      "0x45E",
      "0x22F",
      "0x223"
    ],
    "answer": 2,
    "explanation": "Decimal 559 translates directly to Base-16 hexadecimal as 0x22F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 319.",
    "options": [
      "0x15F",
      "0x13F",
      "0x133",
      "0x27E"
    ],
    "answer": 1,
    "explanation": "Decimal 319 translates directly to Base-16 hexadecimal as 0x13F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 498.",
    "options": [
      "0x212",
      "0x3E4",
      "0x1F2",
      "0x1E6"
    ],
    "answer": 2,
    "explanation": "Decimal 498 translates directly to Base-16 hexadecimal as 0x1F2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 173.",
    "options": [
      "0xCD",
      "0xA1",
      "0xAD",
      "0x15A"
    ],
    "answer": 2,
    "explanation": "Decimal 173 translates directly to Base-16 hexadecimal as 0xAD."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 123.",
    "options": [
      "0x6F",
      "0xF6",
      "0x7B",
      "0x9B"
    ],
    "answer": 2,
    "explanation": "Decimal 123 translates directly to Base-16 hexadecimal as 0x7B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 413.",
    "options": [
      "0x19D",
      "0x33A",
      "0x191",
      "0x1BD"
    ],
    "answer": 0,
    "explanation": "Decimal 413 translates directly to Base-16 hexadecimal as 0x19D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 283.",
    "options": [
      "0x236",
      "0x11B",
      "0x10F",
      "0x13B"
    ],
    "answer": 1,
    "explanation": "Decimal 283 translates directly to Base-16 hexadecimal as 0x11B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 546.",
    "options": [
      "0x222",
      "0x242",
      "0x216",
      "0x444"
    ],
    "answer": 0,
    "explanation": "Decimal 546 translates directly to Base-16 hexadecimal as 0x222."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 371.",
    "options": [
      "0x167",
      "0x2E6",
      "0x173",
      "0x193"
    ],
    "answer": 2,
    "explanation": "Decimal 371 translates directly to Base-16 hexadecimal as 0x173."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 407.",
    "options": [
      "0x1B7",
      "0x18B",
      "0x32E",
      "0x197"
    ],
    "answer": 3,
    "explanation": "Decimal 407 translates directly to Base-16 hexadecimal as 0x197."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 328.",
    "options": [
      "0x168",
      "0x13C",
      "0x148",
      "0x290"
    ],
    "answer": 2,
    "explanation": "Decimal 328 translates directly to Base-16 hexadecimal as 0x148."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 275.",
    "options": [
      "0x113",
      "0x226",
      "0x133",
      "0x107"
    ],
    "answer": 0,
    "explanation": "Decimal 275 translates directly to Base-16 hexadecimal as 0x113."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 189.",
    "options": [
      "0xBD",
      "0x17A",
      "0xDD",
      "0xB1"
    ],
    "answer": 0,
    "explanation": "Decimal 189 translates directly to Base-16 hexadecimal as 0xBD."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 218.",
    "options": [
      "0xCE",
      "0xDA",
      "0x1B4",
      "0xFA"
    ],
    "answer": 1,
    "explanation": "Decimal 218 translates directly to Base-16 hexadecimal as 0xDA."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 112.",
    "options": [
      "0x70",
      "0x64",
      "0x90",
      "0xE0"
    ],
    "answer": 0,
    "explanation": "Decimal 112 translates directly to Base-16 hexadecimal as 0x70."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 418.",
    "options": [
      "0x196",
      "0x344",
      "0x1C2",
      "0x1A2"
    ],
    "answer": 3,
    "explanation": "Decimal 418 translates directly to Base-16 hexadecimal as 0x1A2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 311.",
    "options": [
      "0x157",
      "0x12B",
      "0x26E",
      "0x137"
    ],
    "answer": 3,
    "explanation": "Decimal 311 translates directly to Base-16 hexadecimal as 0x137."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 195 to its binary representation.",
    "options": [
      "11001000",
      "11000000",
      "11000011",
      "11010100"
    ],
    "answer": 2,
    "explanation": "195 in binary base-2 is format = 11000011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 230.",
    "options": [
      "0x106",
      "0xDA",
      "0xE6",
      "0x1CC"
    ],
    "answer": 2,
    "explanation": "Decimal 230 translates directly to Base-16 hexadecimal as 0xE6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 105.",
    "options": [
      "0x69",
      "0x89",
      "0x5D",
      "0xD2"
    ],
    "answer": 0,
    "explanation": "Decimal 105 translates directly to Base-16 hexadecimal as 0x69."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 181.",
    "options": [
      "0xB5",
      "0x16A",
      "0xA9",
      "0xD5"
    ],
    "answer": 0,
    "explanation": "Decimal 181 translates directly to Base-16 hexadecimal as 0xB5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 338.",
    "options": [
      "0x146",
      "0x152",
      "0x2A4",
      "0x172"
    ],
    "answer": 1,
    "explanation": "Decimal 338 translates directly to Base-16 hexadecimal as 0x152."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 157.",
    "options": [
      "0x9D",
      "0x13A",
      "0x91",
      "0xBD"
    ],
    "answer": 0,
    "explanation": "Decimal 157 translates directly to Base-16 hexadecimal as 0x9D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 302.",
    "options": [
      "0x12E",
      "0x25C",
      "0x122",
      "0x14E"
    ],
    "answer": 0,
    "explanation": "Decimal 302 translates directly to Base-16 hexadecimal as 0x12E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 427.",
    "options": [
      "0x19F",
      "0x1AB",
      "0x1CB",
      "0x356"
    ],
    "answer": 1,
    "explanation": "Decimal 427 translates directly to Base-16 hexadecimal as 0x1AB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 234.",
    "options": [
      "0xDE",
      "0x1D4",
      "0xEA",
      "0x10A"
    ],
    "answer": 2,
    "explanation": "Decimal 234 translates directly to Base-16 hexadecimal as 0xEA."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 99.",
    "options": [
      "0xC6",
      "0x83",
      "0x63",
      "0x57"
    ],
    "answer": 2,
    "explanation": "Decimal 99 translates directly to Base-16 hexadecimal as 0x63."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 76.",
    "options": [
      "0x40",
      "0x6C",
      "0x98",
      "0x4C"
    ],
    "answer": 3,
    "explanation": "Decimal 76 translates directly to Base-16 hexadecimal as 0x4C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 340.",
    "options": [
      "0x148",
      "0x174",
      "0x2A8",
      "0x154"
    ],
    "answer": 3,
    "explanation": "Decimal 340 translates directly to Base-16 hexadecimal as 0x154."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 379.",
    "options": [
      "0x2F6",
      "0x19B",
      "0x16F",
      "0x17B"
    ],
    "answer": 3,
    "explanation": "Decimal 379 translates directly to Base-16 hexadecimal as 0x17B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 384.",
    "options": [
      "0x180",
      "0x174",
      "0x300",
      "0x1A0"
    ],
    "answer": 0,
    "explanation": "Decimal 384 translates directly to Base-16 hexadecimal as 0x180."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 391.",
    "options": [
      "0x30E",
      "0x1A7",
      "0x17B",
      "0x187"
    ],
    "answer": 3,
    "explanation": "Decimal 391 translates directly to Base-16 hexadecimal as 0x187."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 531.",
    "options": [
      "0x426",
      "0x207",
      "0x213",
      "0x233"
    ],
    "answer": 2,
    "explanation": "Decimal 531 translates directly to Base-16 hexadecimal as 0x213."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 279.",
    "options": [
      "0x22E",
      "0x117",
      "0x137",
      "0x10B"
    ],
    "answer": 1,
    "explanation": "Decimal 279 translates directly to Base-16 hexadecimal as 0x117."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 216.",
    "options": [
      "0xD8",
      "0x1B0",
      "0xCC",
      "0xF8"
    ],
    "answer": 0,
    "explanation": "Decimal 216 translates directly to Base-16 hexadecimal as 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 69.",
    "options": [
      "0x45",
      "0x8A",
      "0x39",
      "0x65"
    ],
    "answer": 0,
    "explanation": "Decimal 69 translates directly to Base-16 hexadecimal as 0x45."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 77.",
    "options": [
      "0x9A",
      "0x41",
      "0x6D",
      "0x4D"
    ],
    "answer": 3,
    "explanation": "Decimal 77 translates directly to Base-16 hexadecimal as 0x4D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 515.",
    "options": [
      "0x223",
      "0x203",
      "0x406",
      "0x1F7"
    ],
    "answer": 1,
    "explanation": "Decimal 515 translates directly to Base-16 hexadecimal as 0x203."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 90.",
    "options": [
      "0x7A",
      "0x5A",
      "0x4E",
      "0xB4"
    ],
    "answer": 1,
    "explanation": "Decimal 90 translates directly to Base-16 hexadecimal as 0x5A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 254.",
    "options": [
      "0xF2",
      "0x11E",
      "0xFE",
      "0x1FC"
    ],
    "answer": 2,
    "explanation": "Decimal 254 translates directly to Base-16 hexadecimal as 0xFE."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 497.",
    "options": [
      "0x3E2",
      "0x211",
      "0x1E5",
      "0x1F1"
    ],
    "answer": 3,
    "explanation": "Decimal 497 translates directly to Base-16 hexadecimal as 0x1F1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 138.",
    "options": [
      "0x8A",
      "0xAA",
      "0x114",
      "0x7E"
    ],
    "answer": 0,
    "explanation": "Decimal 138 translates directly to Base-16 hexadecimal as 0x8A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 460.",
    "options": [
      "0x1CC",
      "0x398",
      "0x1EC",
      "0x1C0"
    ],
    "answer": 0,
    "explanation": "Decimal 460 translates directly to Base-16 hexadecimal as 0x1CC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 463.",
    "options": [
      "0x39E",
      "0x1CF",
      "0x1EF",
      "0x1C3"
    ],
    "answer": 1,
    "explanation": "Decimal 463 translates directly to Base-16 hexadecimal as 0x1CF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 287.",
    "options": [
      "0x13F",
      "0x23E",
      "0x11F",
      "0x113"
    ],
    "answer": 2,
    "explanation": "Decimal 287 translates directly to Base-16 hexadecimal as 0x11F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 156.",
    "options": [
      "0x138",
      "0x9C",
      "0x90",
      "0xBC"
    ],
    "answer": 1,
    "explanation": "Decimal 156 translates directly to Base-16 hexadecimal as 0x9C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 493.",
    "options": [
      "0x1E1",
      "0x3DA",
      "0x1ED",
      "0x20D"
    ],
    "answer": 2,
    "explanation": "Decimal 493 translates directly to Base-16 hexadecimal as 0x1ED."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 520.",
    "options": [
      "0x1FC",
      "0x410",
      "0x208",
      "0x228"
    ],
    "answer": 2,
    "explanation": "Decimal 520 translates directly to Base-16 hexadecimal as 0x208."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 191.",
    "options": [
      "0xB3",
      "0xBF",
      "0xDF",
      "0x17E"
    ],
    "answer": 1,
    "explanation": "Decimal 191 translates directly to Base-16 hexadecimal as 0xBF."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 113.",
    "options": [
      "0x71",
      "0x91",
      "0x65",
      "0xE2"
    ],
    "answer": 0,
    "explanation": "Decimal 113 translates directly to Base-16 hexadecimal as 0x71."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 262.",
    "options": [
      "0xFA",
      "0x126",
      "0x106",
      "0x20C"
    ],
    "answer": 2,
    "explanation": "Decimal 262 translates directly to Base-16 hexadecimal as 0x106."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 192.",
    "options": [
      "0xC0",
      "0x180",
      "0xB4",
      "0xE0"
    ],
    "answer": 0,
    "explanation": "Decimal 192 translates directly to Base-16 hexadecimal as 0xC0."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 403.",
    "options": [
      "0x1B3",
      "0x326",
      "0x193",
      "0x187"
    ],
    "answer": 2,
    "explanation": "Decimal 403 translates directly to Base-16 hexadecimal as 0x193."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 242.",
    "options": [
      "0x112",
      "0xE6",
      "0x1E4",
      "0xF2"
    ],
    "answer": 3,
    "explanation": "Decimal 242 translates directly to Base-16 hexadecimal as 0xF2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 132.",
    "options": [
      "0x84",
      "0xA4",
      "0x108",
      "0x78"
    ],
    "answer": 0,
    "explanation": "Decimal 132 translates directly to Base-16 hexadecimal as 0x84."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 339.",
    "options": [
      "0x2A6",
      "0x147",
      "0x153",
      "0x173"
    ],
    "answer": 2,
    "explanation": "Decimal 339 translates directly to Base-16 hexadecimal as 0x153."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 551.",
    "options": [
      "0x227",
      "0x247",
      "0x44E",
      "0x21B"
    ],
    "answer": 0,
    "explanation": "Decimal 551 translates directly to Base-16 hexadecimal as 0x227."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 260.",
    "options": [
      "0x104",
      "0x124",
      "0xF8",
      "0x208"
    ],
    "answer": 0,
    "explanation": "Decimal 260 translates directly to Base-16 hexadecimal as 0x104."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 130.",
    "options": [
      "0x82",
      "0xA2",
      "0x76",
      "0x104"
    ],
    "answer": 0,
    "explanation": "Decimal 130 translates directly to Base-16 hexadecimal as 0x82."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 119 to its binary representation.",
    "options": [
      "1110111",
      "1111100",
      "10001000",
      "1110100"
    ],
    "answer": 0,
    "explanation": "119 in binary base-2 is format = 1110111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 196.",
    "options": [
      "0xB8",
      "0x188",
      "0xE4",
      "0xC4"
    ],
    "answer": 3,
    "explanation": "Decimal 196 translates directly to Base-16 hexadecimal as 0xC4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 267.",
    "options": [
      "0x12B",
      "0xFF",
      "0x10B",
      "0x216"
    ],
    "answer": 2,
    "explanation": "Decimal 267 translates directly to Base-16 hexadecimal as 0x10B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 149.",
    "options": [
      "0x95",
      "0xB5",
      "0x89",
      "0x12A"
    ],
    "answer": 0,
    "explanation": "Decimal 149 translates directly to Base-16 hexadecimal as 0x95."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 276.",
    "options": [
      "0x108",
      "0x134",
      "0x114",
      "0x228"
    ],
    "answer": 2,
    "explanation": "Decimal 276 translates directly to Base-16 hexadecimal as 0x114."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 201.",
    "options": [
      "0xE9",
      "0xBD",
      "0x192",
      "0xC9"
    ],
    "answer": 3,
    "explanation": "Decimal 201 translates directly to Base-16 hexadecimal as 0xC9."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 307.",
    "options": [
      "0x133",
      "0x153",
      "0x266",
      "0x127"
    ],
    "answer": 0,
    "explanation": "Decimal 307 translates directly to Base-16 hexadecimal as 0x133."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 439.",
    "options": [
      "0x36E",
      "0x1B7",
      "0x1D7",
      "0x1AB"
    ],
    "answer": 1,
    "explanation": "Decimal 439 translates directly to Base-16 hexadecimal as 0x1B7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 67.",
    "options": [
      "0x43",
      "0x37",
      "0x63",
      "0x86"
    ],
    "answer": 0,
    "explanation": "Decimal 67 translates directly to Base-16 hexadecimal as 0x43."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 96.",
    "options": [
      "0xC0",
      "0x60",
      "0x54",
      "0x80"
    ],
    "answer": 1,
    "explanation": "Decimal 96 translates directly to Base-16 hexadecimal as 0x60."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 194.",
    "options": [
      "0xC2",
      "0xE2",
      "0xB6",
      "0x184"
    ],
    "answer": 0,
    "explanation": "Decimal 194 translates directly to Base-16 hexadecimal as 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 142.",
    "options": [
      "0x11C",
      "0xAE",
      "0x8E",
      "0x82"
    ],
    "answer": 2,
    "explanation": "Decimal 142 translates directly to Base-16 hexadecimal as 0x8E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 390.",
    "options": [
      "0x1A6",
      "0x186",
      "0x30C",
      "0x17A"
    ],
    "answer": 1,
    "explanation": "Decimal 390 translates directly to Base-16 hexadecimal as 0x186."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 509.",
    "options": [
      "0x3FA",
      "0x1FD",
      "0x1F1",
      "0x21D"
    ],
    "answer": 1,
    "explanation": "Decimal 509 translates directly to Base-16 hexadecimal as 0x1FD."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 118.",
    "options": [
      "0xEC",
      "0x96",
      "0x6A",
      "0x76"
    ],
    "answer": 3,
    "explanation": "Decimal 118 translates directly to Base-16 hexadecimal as 0x76."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 237.",
    "options": [
      "0x10D",
      "0xED",
      "0xE1",
      "0x1DA"
    ],
    "answer": 1,
    "explanation": "Decimal 237 translates directly to Base-16 hexadecimal as 0xED."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 252.",
    "options": [
      "0x1F8",
      "0xF0",
      "0x11C",
      "0xFC"
    ],
    "answer": 3,
    "explanation": "Decimal 252 translates directly to Base-16 hexadecimal as 0xFC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 115.",
    "options": [
      "0x73",
      "0x67",
      "0xE6",
      "0x93"
    ],
    "answer": 0,
    "explanation": "Decimal 115 translates directly to Base-16 hexadecimal as 0x73."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 408.",
    "options": [
      "0x1B8",
      "0x18C",
      "0x330",
      "0x198"
    ],
    "answer": 3,
    "explanation": "Decimal 408 translates directly to Base-16 hexadecimal as 0x198."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 543.",
    "options": [
      "0x213",
      "0x43E",
      "0x21F",
      "0x23F"
    ],
    "answer": 2,
    "explanation": "Decimal 543 translates directly to Base-16 hexadecimal as 0x21F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 250.",
    "options": [
      "0x1F4",
      "0x11A",
      "0xFA",
      "0xEE"
    ],
    "answer": 2,
    "explanation": "Decimal 250 translates directly to Base-16 hexadecimal as 0xFA."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 516.",
    "options": [
      "0x224",
      "0x1F8",
      "0x204",
      "0x408"
    ],
    "answer": 2,
    "explanation": "Decimal 516 translates directly to Base-16 hexadecimal as 0x204."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 288.",
    "options": [
      "0x114",
      "0x120",
      "0x140",
      "0x240"
    ],
    "answer": 1,
    "explanation": "Decimal 288 translates directly to Base-16 hexadecimal as 0x120."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 405.",
    "options": [
      "0x32A",
      "0x1B5",
      "0x195",
      "0x189"
    ],
    "answer": 2,
    "explanation": "Decimal 405 translates directly to Base-16 hexadecimal as 0x195."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 539.",
    "options": [
      "0x436",
      "0x23B",
      "0x21B",
      "0x20F"
    ],
    "answer": 2,
    "explanation": "Decimal 539 translates directly to Base-16 hexadecimal as 0x21B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 554.",
    "options": [
      "0x22A",
      "0x21E",
      "0x24A",
      "0x454"
    ],
    "answer": 0,
    "explanation": "Decimal 554 translates directly to Base-16 hexadecimal as 0x22A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 141.",
    "options": [
      "0xAD",
      "0x81",
      "0x8D",
      "0x11A"
    ],
    "answer": 2,
    "explanation": "Decimal 141 translates directly to Base-16 hexadecimal as 0x8D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 452.",
    "options": [
      "0x1C4",
      "0x388",
      "0x1B8",
      "0x1E4"
    ],
    "answer": 0,
    "explanation": "Decimal 452 translates directly to Base-16 hexadecimal as 0x1C4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 375.",
    "options": [
      "0x2EE",
      "0x16B",
      "0x197",
      "0x177"
    ],
    "answer": 3,
    "explanation": "Decimal 375 translates directly to Base-16 hexadecimal as 0x177."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 392.",
    "options": [
      "0x1A8",
      "0x188",
      "0x17C",
      "0x310"
    ],
    "answer": 1,
    "explanation": "Decimal 392 translates directly to Base-16 hexadecimal as 0x188."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 116.",
    "options": [
      "0xE8",
      "0x94",
      "0x74",
      "0x68"
    ],
    "answer": 2,
    "explanation": "Decimal 116 translates directly to Base-16 hexadecimal as 0x74."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 135.",
    "options": [
      "0x7B",
      "0x10E",
      "0xA7",
      "0x87"
    ],
    "answer": 3,
    "explanation": "Decimal 135 translates directly to Base-16 hexadecimal as 0x87."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 247.",
    "options": [
      "0xEB",
      "0xF7",
      "0x117",
      "0x1EE"
    ],
    "answer": 1,
    "explanation": "Decimal 247 translates directly to Base-16 hexadecimal as 0xF7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 187.",
    "options": [
      "0xAF",
      "0xBB",
      "0x176",
      "0xDB"
    ],
    "answer": 1,
    "explanation": "Decimal 187 translates directly to Base-16 hexadecimal as 0xBB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 71.",
    "options": [
      "0x67",
      "0x8E",
      "0x47",
      "0x3B"
    ],
    "answer": 2,
    "explanation": "Decimal 71 translates directly to Base-16 hexadecimal as 0x47."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the TAG bitfield? (Set 1)",
    "options": [
      "3 bits",
      "0 bits",
      "2 bits",
      "16 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 99. (Set 2)",
    "options": [
      "0x57",
      "0xC6",
      "0x83",
      "0x63"
    ],
    "answer": 3,
    "explanation": "Decimal 99 translates directly to Base-16 hexadecimal as 0x63."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 177 to its binary representation. (Set 3)",
    "options": [
      "11000010",
      "10110001",
      "10110110",
      "10101110"
    ],
    "answer": 1,
    "explanation": "177 in binary base-2 is format = 10110001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 206 to its binary representation. (Set 4)",
    "options": [
      "11010011",
      "11001110",
      "11001011",
      "11011111"
    ],
    "answer": 1,
    "explanation": "206 in binary base-2 is format = 11001110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 36 to its binary representation. (Set 5)",
    "options": [
      "100100",
      "110101",
      "100001",
      "101001"
    ],
    "answer": 0,
    "explanation": "36 in binary base-2 is format = 100100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 482. (Set 6)",
    "options": [
      "0x1E2",
      "0x1D6",
      "0x3C4",
      "0x202"
    ],
    "answer": 0,
    "explanation": "Decimal 482 translates directly to Base-16 hexadecimal as 0x1E2."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 78 to its binary representation. (Set 7)",
    "options": [
      "1010011",
      "1001011",
      "1001110",
      "1011111"
    ],
    "answer": 2,
    "explanation": "78 in binary base-2 is format = 1001110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 350. (Set 8)",
    "options": [
      "0x15E",
      "0x152",
      "0x2BC",
      "0x17E"
    ],
    "answer": 0,
    "explanation": "Decimal 350 translates directly to Base-16 hexadecimal as 0x15E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 366. (Set 9)",
    "options": [
      "0x162",
      "0x18E",
      "0x2DC",
      "0x16E"
    ],
    "answer": 3,
    "explanation": "Decimal 366 translates directly to Base-16 hexadecimal as 0x16E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 311. (Set 10)",
    "options": [
      "0x26E",
      "0x137",
      "0x157",
      "0x12B"
    ],
    "answer": 1,
    "explanation": "Decimal 311 translates directly to Base-16 hexadecimal as 0x137."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 134 to its binary representation. (Set 11)",
    "options": [
      "10001011",
      "10000011",
      "10010111",
      "10000110"
    ],
    "answer": 3,
    "explanation": "134 in binary base-2 is format = 10000110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 141. (Set 12)",
    "options": [
      "0x8D",
      "0x81",
      "0xAD",
      "0x11A"
    ],
    "answer": 0,
    "explanation": "Decimal 141 translates directly to Base-16 hexadecimal as 0x8D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 552. (Set 13)",
    "options": [
      "0x21C",
      "0x228",
      "0x450",
      "0x248"
    ],
    "answer": 1,
    "explanation": "Decimal 552 translates directly to Base-16 hexadecimal as 0x228."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 201. (Set 14)",
    "options": [
      "0x192",
      "0xC9",
      "0xBD",
      "0xE9"
    ],
    "answer": 1,
    "explanation": "Decimal 201 translates directly to Base-16 hexadecimal as 0xC9."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 85 to its binary representation. (Set 15)",
    "options": [
      "1011010",
      "1100110",
      "1010010",
      "1010101"
    ],
    "answer": 3,
    "explanation": "85 in binary base-2 is format = 1010101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 365. (Set 16)",
    "options": [
      "0x18D",
      "0x2DA",
      "0x16D",
      "0x161"
    ],
    "answer": 2,
    "explanation": "Decimal 365 translates directly to Base-16 hexadecimal as 0x16D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 119. (Set 17)",
    "options": [
      "0x77",
      "0x6B",
      "0xEE",
      "0x97"
    ],
    "answer": 0,
    "explanation": "Decimal 119 translates directly to Base-16 hexadecimal as 0x77."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 201. (Set 14) (Set 18)",
    "options": [
      "0xC9",
      "0xE9",
      "0x192",
      "0xBD"
    ],
    "answer": 0,
    "explanation": "Decimal 201 translates directly to Base-16 hexadecimal as 0xC9."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield? (Set 19)",
    "options": [
      "5 bits",
      "2 bits",
      "7 bits",
      "19 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 176. (Set 20)",
    "options": [
      "0x160",
      "0xA4",
      "0xD0",
      "0xB0"
    ],
    "answer": 3,
    "explanation": "Decimal 176 translates directly to Base-16 hexadecimal as 0xB0."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield? (Set 21)",
    "options": [
      "11 bits",
      "9 bits",
      "15 bits",
      "6 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 24 to its binary representation. (Set 22)",
    "options": [
      "11101",
      "11000",
      "101001",
      "10101"
    ],
    "answer": 1,
    "explanation": "24 in binary base-2 is format = 11000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 274. (Set 23)",
    "options": [
      "0x106",
      "0x112",
      "0x132",
      "0x224"
    ],
    "answer": 1,
    "explanation": "Decimal 274 translates directly to Base-16 hexadecimal as 0x112."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 51 to its binary representation. (Set 24)",
    "options": [
      "110000",
      "111000",
      "110011",
      "1000100"
    ],
    "answer": 2,
    "explanation": "51 in binary base-2 is format = 110011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 216. (Set 25)",
    "options": [
      "0xF8",
      "0xD8",
      "0x1B0",
      "0xCC"
    ],
    "answer": 1,
    "explanation": "Decimal 216 translates directly to Base-16 hexadecimal as 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 141. (Set 12) (Set 26)",
    "options": [
      "0x8D",
      "0x81",
      "0xAD",
      "0x11A"
    ],
    "answer": 0,
    "explanation": "Decimal 141 translates directly to Base-16 hexadecimal as 0x8D."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 102 to its binary representation. (Set 27)",
    "options": [
      "1100011",
      "1101011",
      "1100110",
      "1110111"
    ],
    "answer": 2,
    "explanation": "102 in binary base-2 is format = 1100110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 185 to its binary representation. (Set 28)",
    "options": [
      "10110110",
      "10111110",
      "10111001",
      "11001010"
    ],
    "answer": 2,
    "explanation": "185 in binary base-2 is format = 10111001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 348. (Set 29)",
    "options": [
      "0x17C",
      "0x15C",
      "0x2B8",
      "0x150"
    ],
    "answer": 1,
    "explanation": "Decimal 348 translates directly to Base-16 hexadecimal as 0x15C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 329. (Set 30)",
    "options": [
      "0x292",
      "0x169",
      "0x149",
      "0x13D"
    ],
    "answer": 2,
    "explanation": "Decimal 329 translates directly to Base-16 hexadecimal as 0x149."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 314. (Set 31)",
    "options": [
      "0x13A",
      "0x274",
      "0x15A",
      "0x12E"
    ],
    "answer": 0,
    "explanation": "Decimal 314 translates directly to Base-16 hexadecimal as 0x13A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 489. (Set 32)",
    "options": [
      "0x1DD",
      "0x1E9",
      "0x3D2",
      "0x209"
    ],
    "answer": 1,
    "explanation": "Decimal 489 translates directly to Base-16 hexadecimal as 0x1E9."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield? (Set 33)",
    "options": [
      "7 bits",
      "12 bits",
      "10 bits",
      "14 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 61 to its binary representation. (Set 34)",
    "options": [
      "1001110",
      "1000010",
      "111010",
      "111101"
    ],
    "answer": 3,
    "explanation": "61 in binary base-2 is format = 111101."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 53 to its binary representation. (Set 35)",
    "options": [
      "110101",
      "110010",
      "1000110",
      "111010"
    ],
    "answer": 0,
    "explanation": "53 in binary base-2 is format = 110101."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 159 to its binary representation. (Set 36)",
    "options": [
      "10100100",
      "10011111",
      "10110000",
      "10011100"
    ],
    "answer": 1,
    "explanation": "159 in binary base-2 is format = 10011111."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the TAG bitfield? (Set 37)",
    "options": [
      "19 bits",
      "15 bits",
      "14 bits",
      "17 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 254. (Set 38)",
    "options": [
      "0x1FC",
      "0x11E",
      "0xFE",
      "0xF2"
    ],
    "answer": 2,
    "explanation": "Decimal 254 translates directly to Base-16 hexadecimal as 0xFE."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 505. (Set 39)",
    "options": [
      "0x219",
      "0x1ED",
      "0x3F2",
      "0x1F9"
    ],
    "answer": 3,
    "explanation": "Decimal 505 translates directly to Base-16 hexadecimal as 0x1F9."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 198 to its binary representation. (Set 40)",
    "options": [
      "11000110",
      "11010111",
      "11001011",
      "11000011"
    ],
    "answer": 0,
    "explanation": "198 in binary base-2 is format = 11000110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 529. (Set 41)",
    "options": [
      "0x231",
      "0x205",
      "0x211",
      "0x422"
    ],
    "answer": 2,
    "explanation": "Decimal 529 translates directly to Base-16 hexadecimal as 0x211."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield? (Set 42)",
    "options": [
      "10 bits",
      "7 bits",
      "12 bits",
      "14 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 24 - Index - Offset = 10 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 91. (Set 43)",
    "options": [
      "0xB6",
      "0x4F",
      "0x5B",
      "0x7B"
    ],
    "answer": 2,
    "explanation": "Decimal 91 translates directly to Base-16 hexadecimal as 0x5B."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 120. (Set 44)",
    "options": [
      "0x78",
      "0x6C",
      "0x98",
      "0xF0"
    ],
    "answer": 0,
    "explanation": "Decimal 120 translates directly to Base-16 hexadecimal as 0x78."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 207. (Set 45)",
    "options": [
      "0xEF",
      "0xCF",
      "0xC3",
      "0x19E"
    ],
    "answer": 1,
    "explanation": "Decimal 207 translates directly to Base-16 hexadecimal as 0xCF."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 195 to its binary representation. (Set 46)",
    "options": [
      "11000011",
      "11001000",
      "11000000",
      "11010100"
    ],
    "answer": 0,
    "explanation": "195 in binary base-2 is format = 11000011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 74. (Set 47)",
    "options": [
      "0x6A",
      "0x3E",
      "0x94",
      "0x4A"
    ],
    "answer": 3,
    "explanation": "Decimal 74 translates directly to Base-16 hexadecimal as 0x4A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 98. (Set 48)",
    "options": [
      "0x56",
      "0xC4",
      "0x82",
      "0x62"
    ],
    "answer": 3,
    "explanation": "Decimal 98 translates directly to Base-16 hexadecimal as 0x62."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 157 to its binary representation. (Set 49)",
    "options": [
      "10011101",
      "10011010",
      "10101110",
      "10100010"
    ],
    "answer": 0,
    "explanation": "157 in binary base-2 is format = 10011101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 192. (Set 50)",
    "options": [
      "0xE0",
      "0x180",
      "0xC0",
      "0xB4"
    ],
    "answer": 2,
    "explanation": "Decimal 192 translates directly to Base-16 hexadecimal as 0xC0."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 286. (Set 51)",
    "options": [
      "0x23C",
      "0x13E",
      "0x112",
      "0x11E"
    ],
    "answer": 3,
    "explanation": "Decimal 286 translates directly to Base-16 hexadecimal as 0x11E."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 32 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield? (Set 52)",
    "options": [
      "8 bits",
      "11 bits",
      "21 bits",
      "13 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(32KB/16B) = 11 bits. Tag = 32 - Index - Offset = 17 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 204. (Set 53)",
    "options": [
      "0x198",
      "0xEC",
      "0xC0",
      "0xCC"
    ],
    "answer": 3,
    "explanation": "Decimal 204 translates directly to Base-16 hexadecimal as 0xCC."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 102. (Set 54)",
    "options": [
      "0xCC",
      "0x66",
      "0x5A",
      "0x86"
    ],
    "answer": 1,
    "explanation": "Decimal 102 translates directly to Base-16 hexadecimal as 0x66."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 176. (Set 20) (Set 55)",
    "options": [
      "0x160",
      "0xB0",
      "0xA4",
      "0xD0"
    ],
    "answer": 1,
    "explanation": "Decimal 176 translates directly to Base-16 hexadecimal as 0xB0."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 140. (Set 56)",
    "options": [
      "0xAC",
      "0x8C",
      "0x80",
      "0x118"
    ],
    "answer": 1,
    "explanation": "Decimal 140 translates directly to Base-16 hexadecimal as 0x8C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 124. (Set 57)",
    "options": [
      "0x9C",
      "0x70",
      "0x7C",
      "0xF8"
    ],
    "answer": 2,
    "explanation": "Decimal 124 translates directly to Base-16 hexadecimal as 0x7C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 228. (Set 58)",
    "options": [
      "0xE4",
      "0x104",
      "0x1C8",
      "0xD8"
    ],
    "answer": 0,
    "explanation": "Decimal 228 translates directly to Base-16 hexadecimal as 0xE4."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 51 to its binary representation. (Set 59)",
    "options": [
      "1000100",
      "110000",
      "111000",
      "110011"
    ],
    "answer": 3,
    "explanation": "51 in binary base-2 is format = 110011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 263. (Set 60)",
    "options": [
      "0xFB",
      "0x127",
      "0x107",
      "0x20E"
    ],
    "answer": 2,
    "explanation": "Decimal 263 translates directly to Base-16 hexadecimal as 0x107."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 418. (Set 61)",
    "options": [
      "0x1A2",
      "0x1C2",
      "0x196",
      "0x344"
    ],
    "answer": 0,
    "explanation": "Decimal 418 translates directly to Base-16 hexadecimal as 0x1A2."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 144 to its binary representation. (Set 62)",
    "options": [
      "10100001",
      "10010101",
      "10001101",
      "10010000"
    ],
    "answer": 3,
    "explanation": "144 in binary base-2 is format = 10010000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 199 to its binary representation. (Set 63)",
    "options": [
      "11011000",
      "11001100",
      "11000111",
      "11000100"
    ],
    "answer": 2,
    "explanation": "199 in binary base-2 is format = 11000111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 170 to its binary representation. (Set 64)",
    "options": [
      "10101010",
      "10101111",
      "10100111",
      "10111011"
    ],
    "answer": 0,
    "explanation": "170 in binary base-2 is format = 10101010."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 36 to its binary representation. (Set 5) (Set 65)",
    "options": [
      "100001",
      "100100",
      "101001",
      "110101"
    ],
    "answer": 1,
    "explanation": "36 in binary base-2 is format = 100100."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 154 to its binary representation. (Set 66)",
    "options": [
      "10010111",
      "10101011",
      "10011111",
      "10011010"
    ],
    "answer": 3,
    "explanation": "154 in binary base-2 is format = 10011010."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 16 bytes. What is the length of the TAG bitfield? (Set 67)",
    "options": [
      "4 bits",
      "-1 bits",
      "1 bits",
      "17 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(128KB/16B) = 13 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 127. (Set 68)",
    "options": [
      "0x73",
      "0x9F",
      "0xFE",
      "0x7F"
    ],
    "answer": 3,
    "explanation": "Decimal 127 translates directly to Base-16 hexadecimal as 0x7F."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield? (Set 69)",
    "options": [
      "12 bits",
      "6 bits",
      "10 bits",
      "7 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 64 to its binary representation. (Set 70)",
    "options": [
      "1010001",
      "1000101",
      "1000000",
      "111101"
    ],
    "answer": 2,
    "explanation": "64 in binary base-2 is format = 1000000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 105 to its binary representation. (Set 71)",
    "options": [
      "1100110",
      "1111010",
      "1101110",
      "1101001"
    ],
    "answer": 3,
    "explanation": "105 in binary base-2 is format = 1101001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 66 to its binary representation. (Set 72)",
    "options": [
      "111111",
      "1000010",
      "1000111",
      "1010011"
    ],
    "answer": 1,
    "explanation": "66 in binary base-2 is format = 1000010."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 165 to its binary representation. (Set 73)",
    "options": [
      "10101010",
      "10100101",
      "10110110",
      "10100010"
    ],
    "answer": 1,
    "explanation": "165 in binary base-2 is format = 10100101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 389. (Set 74)",
    "options": [
      "0x179",
      "0x30A",
      "0x1A5",
      "0x185"
    ],
    "answer": 3,
    "explanation": "Decimal 389 translates directly to Base-16 hexadecimal as 0x185."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 94 to its binary representation. (Set 75)",
    "options": [
      "1011011",
      "1101111",
      "1100011",
      "1011110"
    ],
    "answer": 3,
    "explanation": "94 in binary base-2 is format = 1011110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 185 to its binary representation. (Set 76)",
    "options": [
      "10111110",
      "10110110",
      "11001010",
      "10111001"
    ],
    "answer": 3,
    "explanation": "185 in binary base-2 is format = 10111001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 449. (Set 77)",
    "options": [
      "0x1E1",
      "0x1C1",
      "0x382",
      "0x1B5"
    ],
    "answer": 1,
    "explanation": "Decimal 449 translates directly to Base-16 hexadecimal as 0x1C1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 537. (Set 78)",
    "options": [
      "0x432",
      "0x219",
      "0x20D",
      "0x239"
    ],
    "answer": 1,
    "explanation": "Decimal 537 translates directly to Base-16 hexadecimal as 0x219."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 51 to its binary representation. (Set 24) (Set 79)",
    "options": [
      "110000",
      "110011",
      "111000",
      "1000100"
    ],
    "answer": 1,
    "explanation": "51 in binary base-2 is format = 110011."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 410. (Set 80)",
    "options": [
      "0x1BA",
      "0x19A",
      "0x18E",
      "0x334"
    ],
    "answer": 1,
    "explanation": "Decimal 410 translates directly to Base-16 hexadecimal as 0x19A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 326. (Set 81)",
    "options": [
      "0x166",
      "0x28C",
      "0x13A",
      "0x146"
    ],
    "answer": 3,
    "explanation": "Decimal 326 translates directly to Base-16 hexadecimal as 0x146."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 228. (Set 58) (Set 82)",
    "options": [
      "0xD8",
      "0xE4",
      "0x1C8",
      "0x104"
    ],
    "answer": 1,
    "explanation": "Decimal 228 translates directly to Base-16 hexadecimal as 0xE4."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 98 to its binary representation. (Set 83)",
    "options": [
      "1100010",
      "1011111",
      "1100111",
      "1110011"
    ],
    "answer": 0,
    "explanation": "98 in binary base-2 is format = 1100010."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the TAG bitfield? (Set 84)",
    "options": [
      "15 bits",
      "9 bits",
      "11 bits",
      "6 bits"
    ],
    "answer": 1,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 64 bytes. What is the length of the TAG bitfield? (Set 85)",
    "options": [
      "15 bits",
      "18 bits",
      "20 bits",
      "14 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(64) = 6 bits. Index = log2(16KB/64B) = 8 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 121. (Set 86)",
    "options": [
      "0x79",
      "0x99",
      "0xF2",
      "0x6D"
    ],
    "answer": 0,
    "explanation": "Decimal 121 translates directly to Base-16 hexadecimal as 0x79."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the TAG bitfield? (Set 87)",
    "options": [
      "17 bits",
      "12 bits",
      "17 bits",
      "15 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 345. (Set 88)",
    "options": [
      "0x179",
      "0x14D",
      "0x2B2",
      "0x159"
    ],
    "answer": 3,
    "explanation": "Decimal 345 translates directly to Base-16 hexadecimal as 0x159."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 61 to its binary representation. (Set 34) (Set 89)",
    "options": [
      "1000010",
      "111101",
      "111010",
      "1001110"
    ],
    "answer": 1,
    "explanation": "61 in binary base-2 is format = 111101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 319. (Set 90)",
    "options": [
      "0x27E",
      "0x15F",
      "0x13F",
      "0x133"
    ],
    "answer": 2,
    "explanation": "Decimal 319 translates directly to Base-16 hexadecimal as 0x13F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 500. (Set 91)",
    "options": [
      "0x3E8",
      "0x1E8",
      "0x1F4",
      "0x214"
    ],
    "answer": 2,
    "explanation": "Decimal 500 translates directly to Base-16 hexadecimal as 0x1F4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 475. (Set 92)",
    "options": [
      "0x1CF",
      "0x1FB",
      "0x3B6",
      "0x1DB"
    ],
    "answer": 3,
    "explanation": "Decimal 475 translates directly to Base-16 hexadecimal as 0x1DB."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "What does the Program Counter (PC) store? (Set 93)",
    "options": [
      "Address of accumulator in typical implementations",
      "Result of last calculation (typical scenario)",
      "Address of the next instruction to be fetched",
      "Current instruction value (widely accepted)"
    ],
    "answer": 2,
    "explanation": "PC tracks execution flow."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 150. (Set 94)",
    "options": [
      "0x8A",
      "0x96",
      "0x12C",
      "0xB6"
    ],
    "answer": 1,
    "explanation": "Decimal 150 translates directly to Base-16 hexadecimal as 0x96."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 420. (Set 95)",
    "options": [
      "0x1C4",
      "0x198",
      "0x348",
      "0x1A4"
    ],
    "answer": 3,
    "explanation": "Decimal 420 translates directly to Base-16 hexadecimal as 0x1A4."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 498. (Set 96)",
    "options": [
      "0x1F2",
      "0x1E6",
      "0x212",
      "0x3E4"
    ],
    "answer": 0,
    "explanation": "Decimal 498 translates directly to Base-16 hexadecimal as 0x1F2."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 103 to its binary representation. (Set 97)",
    "options": [
      "1111000",
      "1100100",
      "1101100",
      "1100111"
    ],
    "answer": 3,
    "explanation": "103 in binary base-2 is format = 1100111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 266. (Set 98)",
    "options": [
      "0x214",
      "0x10A",
      "0xFE",
      "0x12A"
    ],
    "answer": 1,
    "explanation": "Decimal 266 translates directly to Base-16 hexadecimal as 0x10A."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 225. (Set 99)",
    "options": [
      "0x1C2",
      "0xD5",
      "0x101",
      "0xE1"
    ],
    "answer": 3,
    "explanation": "Decimal 225 translates directly to Base-16 hexadecimal as 0xE1."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 181 to its binary representation. (Set 100)",
    "options": [
      "10110101",
      "10110010",
      "11000110",
      "10111010"
    ],
    "answer": 0,
    "explanation": "181 in binary base-2 is format = 10110101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 126. (Set 101)",
    "options": [
      "0x7E",
      "0xFC",
      "0x72",
      "0x9E"
    ],
    "answer": 0,
    "explanation": "Decimal 126 translates directly to Base-16 hexadecimal as 0x7E."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 72. (Set 102)",
    "options": [
      "0x68",
      "0x90",
      "0x3C",
      "0x48"
    ],
    "answer": 3,
    "explanation": "Decimal 72 translates directly to Base-16 hexadecimal as 0x48."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 61. (Set 103)",
    "options": [
      "0x31",
      "0x3D",
      "0x5D",
      "0x7A"
    ],
    "answer": 1,
    "explanation": "Decimal 61 translates directly to Base-16 hexadecimal as 0x3D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 475. (Set 104)",
    "options": [
      "0x1CF",
      "0x1DB",
      "0x3B6",
      "0x1FB"
    ],
    "answer": 1,
    "explanation": "Decimal 475 translates directly to Base-16 hexadecimal as 0x1DB."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield? (Set 19) (Set 105)",
    "options": [
      "5 bits",
      "7 bits",
      "19 bits",
      "2 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 24 - Index - Offset = 7 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 161. (Set 106)",
    "options": [
      "0xC1",
      "0x95",
      "0xA1",
      "0x142"
    ],
    "answer": 2,
    "explanation": "Decimal 161 translates directly to Base-16 hexadecimal as 0xA1."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 64 KB, and line block size is 32 bytes. What is the length of the TAG bitfield? (Set 107)",
    "options": [
      "16 bits",
      "18 bits",
      "16 bits",
      "13 bits"
    ],
    "answer": 0,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(64KB/32B) = 11 bits. Tag = 32 - Index - Offset = 16 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 124. (Set 57) (Set 108)",
    "options": [
      "0x7C",
      "0xF8",
      "0x9C",
      "0x70"
    ],
    "answer": 0,
    "explanation": "Decimal 124 translates directly to Base-16 hexadecimal as 0x7C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 232. (Set 109)",
    "options": [
      "0x108",
      "0xE8",
      "0x1D0",
      "0xDC"
    ],
    "answer": 1,
    "explanation": "Decimal 232 translates directly to Base-16 hexadecimal as 0xE8."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the OFFSET bitfield? (Set 110)",
    "options": [
      "8 bits",
      "3 bits",
      "10 bits",
      "6 bits"
    ],
    "answer": 3,
    "explanation": "For 16-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 16 - Index - Offset = 0 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 38 to its binary representation. (Set 111)",
    "options": [
      "101011",
      "100110",
      "110111",
      "100011"
    ],
    "answer": 1,
    "explanation": "38 in binary base-2 is format = 100110."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 46 to its binary representation. (Set 112)",
    "options": [
      "110011",
      "101011",
      "101110",
      "111111"
    ],
    "answer": 2,
    "explanation": "46 in binary base-2 is format = 101110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 291. (Set 113)",
    "options": [
      "0x123",
      "0x117",
      "0x143",
      "0x246"
    ],
    "answer": 0,
    "explanation": "Decimal 291 translates directly to Base-16 hexadecimal as 0x123."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 453. (Set 114)",
    "options": [
      "0x38A",
      "0x1B9",
      "0x1C5",
      "0x1E5"
    ],
    "answer": 2,
    "explanation": "Decimal 453 translates directly to Base-16 hexadecimal as 0x1C5."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 120. (Set 115)",
    "options": [
      "0x6C",
      "0x78",
      "0xF0",
      "0x98"
    ],
    "answer": 1,
    "explanation": "Decimal 120 translates directly to Base-16 hexadecimal as 0x78."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 440. (Set 116)",
    "options": [
      "0x370",
      "0x1AC",
      "0x1D8",
      "0x1B8"
    ],
    "answer": 3,
    "explanation": "Decimal 440 translates directly to Base-16 hexadecimal as 0x1B8."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 180 to its binary representation. (Set 117)",
    "options": [
      "10110100",
      "10111001",
      "10110001",
      "11000101"
    ],
    "answer": 0,
    "explanation": "180 in binary base-2 is format = 10110100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 495. (Set 118)",
    "options": [
      "0x1E3",
      "0x1EF",
      "0x3DE",
      "0x20F"
    ],
    "answer": 1,
    "explanation": "Decimal 495 translates directly to Base-16 hexadecimal as 0x1EF."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 159 to its binary representation. (Set 119)",
    "options": [
      "10100100",
      "10011100",
      "10011111",
      "10110000"
    ],
    "answer": 2,
    "explanation": "159 in binary base-2 is format = 10011111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 89. (Set 120)",
    "options": [
      "0x4D",
      "0x79",
      "0xB2",
      "0x59"
    ],
    "answer": 3,
    "explanation": "Decimal 89 translates directly to Base-16 hexadecimal as 0x59."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 96 to its binary representation. (Set 121)",
    "options": [
      "1011101",
      "1100101",
      "1110001",
      "1100000"
    ],
    "answer": 3,
    "explanation": "96 in binary base-2 is format = 1100000."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 52 to its binary representation. (Set 122)",
    "options": [
      "1000101",
      "111001",
      "110001",
      "110100"
    ],
    "answer": 3,
    "explanation": "52 in binary base-2 is format = 110100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 445. (Set 123)",
    "options": [
      "0x1DD",
      "0x37A",
      "0x1BD",
      "0x1B1"
    ],
    "answer": 2,
    "explanation": "Decimal 445 translates directly to Base-16 hexadecimal as 0x1BD."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 61 to its binary representation. (Set 34) (Set 124)",
    "options": [
      "111101",
      "1000010",
      "111010",
      "1001110"
    ],
    "answer": 0,
    "explanation": "61 in binary base-2 is format = 111101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 335. (Set 125)",
    "options": [
      "0x16F",
      "0x29E",
      "0x143",
      "0x14F"
    ],
    "answer": 3,
    "explanation": "Decimal 335 translates directly to Base-16 hexadecimal as 0x14F."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 164 to its binary representation. (Set 126)",
    "options": [
      "10101001",
      "10100100",
      "10110101",
      "10100001"
    ],
    "answer": 1,
    "explanation": "164 in binary base-2 is format = 10100100."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 516. (Set 127)",
    "options": [
      "0x408",
      "0x224",
      "0x204",
      "0x1F8"
    ],
    "answer": 2,
    "explanation": "Decimal 516 translates directly to Base-16 hexadecimal as 0x204."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 171. (Set 128)",
    "options": [
      "0x156",
      "0xCB",
      "0xAB",
      "0x9F"
    ],
    "answer": 2,
    "explanation": "Decimal 171 translates directly to Base-16 hexadecimal as 0xAB."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 440. (Set 129)",
    "options": [
      "0x370",
      "0x1D8",
      "0x1AC",
      "0x1B8"
    ],
    "answer": 3,
    "explanation": "Decimal 440 translates directly to Base-16 hexadecimal as 0x1B8."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 159. (Set 130)",
    "options": [
      "0x13E",
      "0xBF",
      "0x9F",
      "0x93"
    ],
    "answer": 2,
    "explanation": "Decimal 159 translates directly to Base-16 hexadecimal as 0x9F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 95. (Set 131)",
    "options": [
      "0x7F",
      "0x53",
      "0xBE",
      "0x5F"
    ],
    "answer": 3,
    "explanation": "Decimal 95 translates directly to Base-16 hexadecimal as 0x5F."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 126 to its binary representation. (Set 132)",
    "options": [
      "1111011",
      "1111110",
      "10001111",
      "10000011"
    ],
    "answer": 1,
    "explanation": "126 in binary base-2 is format = 1111110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 353. (Set 133)",
    "options": [
      "0x155",
      "0x181",
      "0x2C2",
      "0x161"
    ],
    "answer": 3,
    "explanation": "Decimal 353 translates directly to Base-16 hexadecimal as 0x161."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield? (Set 134)",
    "options": [
      "12 bits",
      "14 bits",
      "12 bits",
      "9 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(16) = 4 bits. Index = log2(64KB/16B) = 12 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 322. (Set 135)",
    "options": [
      "0x162",
      "0x284",
      "0x142",
      "0x136"
    ],
    "answer": 2,
    "explanation": "Decimal 322 translates directly to Base-16 hexadecimal as 0x142."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 89. (Set 120) (Set 136)",
    "options": [
      "0x59",
      "0xB2",
      "0x79",
      "0x4D"
    ],
    "answer": 0,
    "explanation": "Decimal 89 translates directly to Base-16 hexadecimal as 0x59."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 237. (Set 137)",
    "options": [
      "0x1DA",
      "0xED",
      "0xE1",
      "0x10D"
    ],
    "answer": 1,
    "explanation": "Decimal 237 translates directly to Base-16 hexadecimal as 0xED."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 93. (Set 138)",
    "options": [
      "0x51",
      "0x7D",
      "0xBA",
      "0x5D"
    ],
    "answer": 3,
    "explanation": "Decimal 93 translates directly to Base-16 hexadecimal as 0x5D."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the TAG bitfield? (Set 139)",
    "options": [
      "14 bits",
      "4 bits",
      "2 bits",
      "1 bits"
    ],
    "answer": 2,
    "explanation": "For 16-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 16 - Index - Offset = 2 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 470. (Set 140)",
    "options": [
      "0x3AC",
      "0x1D6",
      "0x1F6",
      "0x1CA"
    ],
    "answer": 1,
    "explanation": "Decimal 470 translates directly to Base-16 hexadecimal as 0x1D6."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 128. (Set 141)",
    "options": [
      "0x100",
      "0x74",
      "0xA0",
      "0x80"
    ],
    "answer": 3,
    "explanation": "Decimal 128 translates directly to Base-16 hexadecimal as 0x80."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield? (Set 69) (Set 142)",
    "options": [
      "10 bits",
      "6 bits",
      "7 bits",
      "12 bits"
    ],
    "answer": 0,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 16 - Index - Offset = 1 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 293. (Set 143)",
    "options": [
      "0x119",
      "0x145",
      "0x24A",
      "0x125"
    ],
    "answer": 3,
    "explanation": "Decimal 293 translates directly to Base-16 hexadecimal as 0x125."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 185 to its binary representation. (Set 28) (Set 144)",
    "options": [
      "10111110",
      "10111001",
      "10110110",
      "11001010"
    ],
    "answer": 1,
    "explanation": "185 in binary base-2 is format = 10111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 152 to its binary representation. (Set 145)",
    "options": [
      "10011101",
      "10010101",
      "10011000",
      "10101001"
    ],
    "answer": 2,
    "explanation": "152 in binary base-2 is format = 10011000."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 450. (Set 146)",
    "options": [
      "0x384",
      "0x1B6",
      "0x1E2",
      "0x1C2"
    ],
    "answer": 3,
    "explanation": "Decimal 450 translates directly to Base-16 hexadecimal as 0x1C2."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 85. (Set 147)",
    "options": [
      "0x75",
      "0x49",
      "0xAA",
      "0x55"
    ],
    "answer": 3,
    "explanation": "Decimal 85 translates directly to Base-16 hexadecimal as 0x55."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 53 to its binary representation. (Set 148)",
    "options": [
      "1000110",
      "111010",
      "110101",
      "110010"
    ],
    "answer": 2,
    "explanation": "53 in binary base-2 is format = 110101."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 550. (Set 149)",
    "options": [
      "0x246",
      "0x44C",
      "0x226",
      "0x21A"
    ],
    "answer": 2,
    "explanation": "Decimal 550 translates directly to Base-16 hexadecimal as 0x226."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 302. (Set 150)",
    "options": [
      "0x14E",
      "0x122",
      "0x25C",
      "0x12E"
    ],
    "answer": 3,
    "explanation": "Decimal 302 translates directly to Base-16 hexadecimal as 0x12E."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 190 to its binary representation. (Set 151)",
    "options": [
      "11000011",
      "11001111",
      "10111011",
      "10111110"
    ],
    "answer": 3,
    "explanation": "190 in binary base-2 is format = 10111110."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 487. (Set 152)",
    "options": [
      "0x3CE",
      "0x207",
      "0x1DB",
      "0x1E7"
    ],
    "answer": 3,
    "explanation": "Decimal 487 translates directly to Base-16 hexadecimal as 0x1E7."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 77. (Set 153)",
    "options": [
      "0x9A",
      "0x6D",
      "0x4D",
      "0x41"
    ],
    "answer": 2,
    "explanation": "Decimal 77 translates directly to Base-16 hexadecimal as 0x4D."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 156. (Set 154)",
    "options": [
      "0x9C",
      "0x90",
      "0x138",
      "0xBC"
    ],
    "answer": 0,
    "explanation": "Decimal 156 translates directly to Base-16 hexadecimal as 0x9C."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 408. (Set 155)",
    "options": [
      "0x18C",
      "0x198",
      "0x1B8",
      "0x330"
    ],
    "answer": 1,
    "explanation": "Decimal 408 translates directly to Base-16 hexadecimal as 0x198."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 23 to its binary representation. (Set 156)",
    "options": [
      "10111",
      "10100",
      "101000",
      "11100"
    ],
    "answer": 0,
    "explanation": "23 in binary base-2 is format = 10111."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 181 to its binary representation. (Set 157)",
    "options": [
      "10110010",
      "10110101",
      "11000110",
      "10111010"
    ],
    "answer": 1,
    "explanation": "181 in binary base-2 is format = 10110101."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 16 bytes. What is the length of the INDEX bitfield? (Set 158)",
    "options": [
      "22 bits",
      "10 bits",
      "12 bits",
      "7 bits"
    ],
    "answer": 1,
    "explanation": "For 32-bit addresses: Offset = log2(16) = 4 bits. Index = log2(16KB/16B) = 10 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 481. (Set 159)",
    "options": [
      "0x201",
      "0x3C2",
      "0x1E1",
      "0x1D5"
    ],
    "answer": 2,
    "explanation": "Decimal 481 translates directly to Base-16 hexadecimal as 0x1E1."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 193. (Set 160)",
    "options": [
      "0x182",
      "0xB5",
      "0xE1",
      "0xC1"
    ],
    "answer": 3,
    "explanation": "Decimal 193 translates directly to Base-16 hexadecimal as 0xC1."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield? (Set 161)",
    "options": [
      "5 bits",
      "19 bits",
      "7 bits",
      "2 bits"
    ],
    "answer": 0,
    "explanation": "For 24-bit addresses: Offset = log2(32) = 5 bits. Index = log2(32KB/32B) = 10 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 166. (Set 162)",
    "options": [
      "0x14C",
      "0xC6",
      "0xA6",
      "0x9A"
    ],
    "answer": 2,
    "explanation": "Decimal 166 translates directly to Base-16 hexadecimal as 0xA6."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield? (Set 163)",
    "options": [
      "7 bits",
      "2 bits",
      "5 bits",
      "27 bits"
    ],
    "answer": 2,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 32 - Index - Offset = 15 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 16-bit memory addresses, cache size is 128 KB, and line block size is 32 bytes. What is the length of the OFFSET bitfield? (Set 164)",
    "options": [
      "2 bits",
      "5 bits",
      "7 bits",
      "11 bits"
    ],
    "answer": 1,
    "explanation": "For 16-bit addresses: Offset = log2(32) = 5 bits. Index = log2(128KB/32B) = 12 bits. Tag = 16 - Index - Offset = -1 bits."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 64 KB, and line block size is 64 bytes. What is the length of the TAG bitfield? (Set 165)",
    "options": [
      "10 bits",
      "5 bits",
      "8 bits",
      "16 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(64KB/64B) = 10 bits. Tag = 24 - Index - Offset = 8 bits."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 483. (Set 166)",
    "options": [
      "0x3C6",
      "0x1E3",
      "0x1D7",
      "0x203"
    ],
    "answer": 1,
    "explanation": "Decimal 483 translates directly to Base-16 hexadecimal as 0x1E3."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 351. (Set 167)",
    "options": [
      "0x17F",
      "0x2BE",
      "0x153",
      "0x15F"
    ],
    "answer": 3,
    "explanation": "Decimal 351 translates directly to Base-16 hexadecimal as 0x15F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 159. (Set 168)",
    "options": [
      "0x9F",
      "0xBF",
      "0x93",
      "0x13E"
    ],
    "answer": 0,
    "explanation": "Decimal 159 translates directly to Base-16 hexadecimal as 0x9F."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 140. (Set 169)",
    "options": [
      "0xAC",
      "0x80",
      "0x8C",
      "0x118"
    ],
    "answer": 2,
    "explanation": "Decimal 140 translates directly to Base-16 hexadecimal as 0x8C."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 183 to its binary representation. (Set 170)",
    "options": [
      "10111100",
      "10110100",
      "11001000",
      "10110111"
    ],
    "answer": 3,
    "explanation": "183 in binary base-2 is format = 10110111."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 88. (Set 171)",
    "options": [
      "0x4C",
      "0x78",
      "0x58",
      "0xB0"
    ],
    "answer": 2,
    "explanation": "Decimal 88 translates directly to Base-16 hexadecimal as 0x58."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 344. (Set 172)",
    "options": [
      "0x158",
      "0x2B0",
      "0x14C",
      "0x178"
    ],
    "answer": 0,
    "explanation": "Decimal 344 translates directly to Base-16 hexadecimal as 0x158."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 32-bit memory addresses, cache size is 16 KB, and line block size is 32 bytes. What is the length of the INDEX bitfield? (Set 173)",
    "options": [
      "11 bits",
      "6 bits",
      "23 bits",
      "9 bits"
    ],
    "answer": 3,
    "explanation": "For 32-bit addresses: Offset = log2(32) = 5 bits. Index = log2(16KB/32B) = 9 bits. Tag = 32 - Index - Offset = 18 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 66 to its binary representation. (Set 174)",
    "options": [
      "1000111",
      "111111",
      "1010011",
      "1000010"
    ],
    "answer": 3,
    "explanation": "66 in binary base-2 is format = 1000010."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 216. (Set 25) (Set 175)",
    "options": [
      "0xF8",
      "0x1B0",
      "0xD8",
      "0xCC"
    ],
    "answer": 2,
    "explanation": "Decimal 216 translates directly to Base-16 hexadecimal as 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Cache Architecture",
    "difficulty": "Hard",
    "question": "In a direct-mapped cache architecture using 24-bit memory addresses, cache size is 32 KB, and line block size is 64 bytes. What is the length of the INDEX bitfield? (Set 176)",
    "options": [
      "6 bits",
      "15 bits",
      "9 bits",
      "11 bits"
    ],
    "answer": 2,
    "explanation": "For 24-bit addresses: Offset = log2(64) = 6 bits. Index = log2(32KB/64B) = 9 bits. Tag = 24 - Index - Offset = 9 bits."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 185 to its binary representation. (Set 28) (Set 144) (Set 177)",
    "options": [
      "11001010",
      "10110110",
      "10111110",
      "10111001"
    ],
    "answer": 3,
    "explanation": "185 in binary base-2 is format = 10111001."
  },
  {
    "subject": "COA",
    "topic": "Hexadecimal Conversions",
    "difficulty": "Medium",
    "question": "Determine the correct hexadecimal representation of the decimal value 403. (Set 178)",
    "options": [
      "0x1B3",
      "0x193",
      "0x187",
      "0x326"
    ],
    "answer": 1,
    "explanation": "Decimal 403 translates directly to Base-16 hexadecimal as 0x193."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 181 to its binary representation. (Set 100) (Set 179)",
    "options": [
      "10110010",
      "11000110",
      "10111010",
      "10110101"
    ],
    "answer": 3,
    "explanation": "181 in binary base-2 is format = 10110101."
  },
  {
    "subject": "COA",
    "topic": "Binary Conversions",
    "difficulty": "Easy",
    "question": "Convert the decimal integer base-10 number 40 to its binary representation. (Set 180)",
    "options": [
      "101000",
      "111001",
      "101101",
      "100101"
    ],
    "answer": 0,
    "explanation": "40 in binary base-2 is format = 101000."
  }
];
