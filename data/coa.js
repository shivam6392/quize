window.quizData = window.quizData || {};
window.quizData.coa = [
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "What is the decimal value of binary 1010?",
    "options": [
      "6",
      "8",
      "12",
      "10"
    ],
    "answer": 3,
    "explanation": "1010 = 8 + 2 = 10."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Which component of CPU performs calculations like addition and logic checks?",
    "options": [
      "ALU (Arithmetic Logic Unit)",
      "Registers (general case)",
      "Cache (general case)",
      "Control Unit by design"
    ],
    "answer": 0,
    "explanation": "ALU handles math and logical operations."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "What does the Program Counter (PC) store?",
    "options": [
      "Result of last calculation (commonly used)",
      "Address of accumulator (widely accepted)",
      "Address of the next instruction to be fetched",
      "Current instruction value (widely accepted)"
    ],
    "answer": 2,
    "explanation": "PC tracks execution flow."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Pipelining increases CPU performance by?",
    "options": [
      "Reducing memory access time (commonly used)",
      "Increasing CPU clock speed (widely accepted)",
      "Making instructions run faster individually",
      "Executing instructions in an overlapping manner"
    ],
    "answer": 3,
    "explanation": "Pipelining parallelizes different stages of instruction processing."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "What is a pipeline hazard caused by branches called?",
    "options": [
      "Control Hazard",
      "Data Hazard",
      "Memory Hazard",
      "Structural Hazard"
    ],
    "answer": 0,
    "explanation": "Branching changes PC, requiring stalls or flush."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "Which cache mapping technique allows any block of memory to be placed anywhere in cache?",
    "options": [
      "Index Mapping by design",
      "Set-Associative Mapping",
      "Fully Associative Mapping",
      "Direct Mapping in most cases"
    ],
    "answer": 2,
    "explanation": "Fully associative allows maximum flexibility but complex lookup."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "DMA stands for?",
    "options": [
      "Direct Memory Access",
      "Dynamic Memory Allocation",
      "Direct Method Address",
      "Dual Memory Access"
    ],
    "answer": 0,
    "explanation": "DMA bypasses CPU for bulk data transfers between I/O and RAM."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Addressing mode: operand value is specified directly in the instruction?",
    "options": [
      "Indirect Addressing",
      "Immediate Addressing",
      "Register Addressing",
      "Direct Addressing"
    ],
    "answer": 1,
    "explanation": "Example: ADD #5 adds value 5 directly."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "RISC stands for?",
    "options": [
      "Random Instruction Set Core",
      "Reduced Instruction Set Computer",
      "Rapid Instruction Segment Computer",
      "Reduced Info System Chip (general case)"
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
      "Core Integrated System Chip",
      "Central Instruction Storage Computer",
      "Complex Instruction Set Computer",
      "Compressed Instruction Segment Computer"
    ],
    "answer": 2,
    "explanation": "CISC uses complex, variable-length instructions."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "What is Flynn's classification for parallel computers with multiple data streams but one instruction stream?",
    "options": [
      "MISD",
      "SIMD",
      "SISD",
      "MIMD"
    ],
    "answer": 1,
    "explanation": "SIMD = Single Instruction Multiple Data."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Cache hit ratio is defined as?",
    "options": [
      "Hits / (Hits + Misses)",
      "Misses / Total Memory",
      "Misses / Hits by design",
      "Hits / Total Memory"
    ],
    "answer": 0,
    "explanation": "Hit ratio measures cache effectiveness."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 107?",
    "options": [
      "1101010",
      "1110111",
      "1101011",
      "1101110"
    ],
    "answer": 2,
    "explanation": "107 divided successively by 2 yields binary 1101011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 103?",
    "options": [
      "1100111",
      "1101010",
      "1100110",
      "1110011"
    ],
    "answer": 0,
    "explanation": "103 divided successively by 2 yields binary 1100111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 153?",
    "options": [
      "0xA9",
      "0x132",
      "0x94",
      "0x99"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x99."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 47?",
    "options": [
      "110010",
      "101111",
      "111011",
      "101110"
    ],
    "answer": 1,
    "explanation": "47 divided successively by 2 yields binary 101111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 70?",
    "options": [
      "0x41",
      "0x8C",
      "0x46",
      "0x56"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x46."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 181?",
    "options": [
      "0xB5",
      "0x16A",
      "0xB0",
      "0xC5"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB5."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 72?",
    "options": [
      "1001000",
      "1000111",
      "1001011",
      "1010100"
    ],
    "answer": 0,
    "explanation": "72 divided successively by 2 yields binary 1001000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 23?",
    "options": [
      "100011",
      "10111",
      "10110",
      "11010"
    ],
    "answer": 1,
    "explanation": "23 divided successively by 2 yields binary 10111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 202?",
    "options": [
      "0xDA",
      "0xC5",
      "0xCA",
      "0x194"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCA."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 124?",
    "options": [
      "1111011",
      "1111111",
      "1111100",
      "10001000"
    ],
    "answer": 2,
    "explanation": "124 divided successively by 2 yields binary 1111100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 54?",
    "options": [
      "0x36",
      "0x46",
      "0x6C",
      "0x31"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x36."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 246?",
    "options": [
      "0xF1",
      "0x1EC",
      "0x106",
      "0xF6"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF6."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 125?",
    "options": [
      "1111101",
      "1111100",
      "10000000",
      "10001001"
    ],
    "answer": 0,
    "explanation": "125 divided successively by 2 yields binary 1111101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 28?",
    "options": [
      "11100",
      "11011",
      "101000",
      "11111"
    ],
    "answer": 0,
    "explanation": "28 divided successively by 2 yields binary 11100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 27?",
    "options": [
      "11010",
      "11110",
      "11011",
      "100111"
    ],
    "answer": 2,
    "explanation": "27 divided successively by 2 yields binary 11011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 20?",
    "options": [
      "10111",
      "100000",
      "10100",
      "10011"
    ],
    "answer": 2,
    "explanation": "20 divided successively by 2 yields binary 10100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 91?",
    "options": [
      "1011010",
      "1011110",
      "1011011",
      "1100111"
    ],
    "answer": 2,
    "explanation": "91 divided successively by 2 yields binary 1011011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 61?",
    "options": [
      "0x4D",
      "0x3D",
      "0x7A",
      "0x38"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3D."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 52?",
    "options": [
      "110011",
      "1000000",
      "110100",
      "110111"
    ],
    "answer": 2,
    "explanation": "52 divided successively by 2 yields binary 110100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 220?",
    "options": [
      "0xEC",
      "0xDC",
      "0x1B8",
      "0xD7"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 198?",
    "options": [
      "0xC1",
      "0x18C",
      "0xD6",
      "0xC6"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC6."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 111?",
    "options": [
      "0x6A",
      "0x6F",
      "0x7F",
      "0xDE"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 86?",
    "options": [
      "0x56",
      "0x66",
      "0xAC",
      "0x51"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x56."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 232?",
    "options": [
      "0xE8",
      "0x1D0",
      "0xF8",
      "0xE3"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 10?",
    "options": [
      "1101",
      "1001",
      "1010",
      "10110"
    ],
    "answer": 2,
    "explanation": "10 divided successively by 2 yields binary 1010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 69?",
    "options": [
      "1001000",
      "1010001",
      "1000101",
      "1000100"
    ],
    "answer": 2,
    "explanation": "69 divided successively by 2 yields binary 1000101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 183?",
    "options": [
      "0xB7",
      "0x16E",
      "0xB2",
      "0xC7"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB7."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 24?",
    "options": [
      "11000",
      "100100",
      "11011",
      "10111"
    ],
    "answer": 0,
    "explanation": "24 divided successively by 2 yields binary 11000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 21?",
    "options": [
      "100001",
      "11000",
      "10100",
      "10101"
    ],
    "answer": 3,
    "explanation": "21 divided successively by 2 yields binary 10101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 50?",
    "options": [
      "110001",
      "111110",
      "110010",
      "110101"
    ],
    "answer": 2,
    "explanation": "50 divided successively by 2 yields binary 110010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 51?",
    "options": [
      "110010",
      "110110",
      "111111",
      "110011"
    ],
    "answer": 3,
    "explanation": "51 divided successively by 2 yields binary 110011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 171?",
    "options": [
      "0xA6",
      "0xAB",
      "0xBB",
      "0x156"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAB."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 57?",
    "options": [
      "111100",
      "1000101",
      "111001",
      "111000"
    ],
    "answer": 2,
    "explanation": "57 divided successively by 2 yields binary 111001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 172?",
    "options": [
      "0x158",
      "0xA7",
      "0xAC",
      "0xBC"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 53?",
    "options": [
      "0x30",
      "0x6A",
      "0x35",
      "0x45"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x35."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 77?",
    "options": [
      "1001101",
      "1011001",
      "1001100",
      "1010000"
    ],
    "answer": 0,
    "explanation": "77 divided successively by 2 yields binary 1001101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 71?",
    "options": [
      "0x42",
      "0x47",
      "0x8E",
      "0x57"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x47."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 92?",
    "options": [
      "1101000",
      "1011011",
      "1011111",
      "1011100"
    ],
    "answer": 3,
    "explanation": "92 divided successively by 2 yields binary 1011100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 100?",
    "options": [
      "1100111",
      "1110000",
      "1100100",
      "1100011"
    ],
    "answer": 2,
    "explanation": "100 divided successively by 2 yields binary 1100100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 22?",
    "options": [
      "100010",
      "11001",
      "10110",
      "10101"
    ],
    "answer": 2,
    "explanation": "22 divided successively by 2 yields binary 10110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 60?",
    "options": [
      "0x4C",
      "0x3C",
      "0x78",
      "0x37"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 193?",
    "options": [
      "0x182",
      "0xC1",
      "0xBC",
      "0xD1"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 106?",
    "options": [
      "0x6A",
      "0x7A",
      "0x65",
      "0xD4"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6A."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 115?",
    "options": [
      "1111111",
      "1110011",
      "1110110",
      "1110010"
    ],
    "answer": 1,
    "explanation": "115 divided successively by 2 yields binary 1110011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 109?",
    "options": [
      "1111001",
      "1101100",
      "1110000",
      "1101101"
    ],
    "answer": 3,
    "explanation": "109 divided successively by 2 yields binary 1101101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 133?",
    "options": [
      "0x10A",
      "0x95",
      "0x85",
      "0x80"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x85."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 132?",
    "options": [
      "0x108",
      "0x94",
      "0x7F",
      "0x84"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x84."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223?",
    "options": [
      "0xDA",
      "0xDF",
      "0x1BE",
      "0xEF"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 116?",
    "options": [
      "1110111",
      "10000000",
      "1110011",
      "1110100"
    ],
    "answer": 3,
    "explanation": "116 divided successively by 2 yields binary 1110100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 16?",
    "options": [
      "10000",
      "11100",
      "10011",
      "1111"
    ],
    "answer": 0,
    "explanation": "16 divided successively by 2 yields binary 10000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 135?",
    "options": [
      "0x87",
      "0x97",
      "0x82",
      "0x10E"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x87."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 55?",
    "options": [
      "1000011",
      "111010",
      "110111",
      "110110"
    ],
    "answer": 2,
    "explanation": "55 divided successively by 2 yields binary 110111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 66?",
    "options": [
      "1001110",
      "1000001",
      "1000010",
      "1000101"
    ],
    "answer": 2,
    "explanation": "66 divided successively by 2 yields binary 1000010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 179?",
    "options": [
      "0x166",
      "0xAE",
      "0xB3",
      "0xC3"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 242?",
    "options": [
      "0xED",
      "0x102",
      "0xF2",
      "0x1E4"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 127?",
    "options": [
      "1111110",
      "1111111",
      "10000010",
      "10001011"
    ],
    "answer": 1,
    "explanation": "127 divided successively by 2 yields binary 1111111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 122?",
    "options": [
      "1111001",
      "1111101",
      "1111010",
      "10000110"
    ],
    "answer": 2,
    "explanation": "122 divided successively by 2 yields binary 1111010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 144?",
    "options": [
      "0x90",
      "0x8B",
      "0x120",
      "0xA0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x90."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 31?",
    "options": [
      "11111",
      "100010",
      "101011",
      "11110"
    ],
    "answer": 0,
    "explanation": "31 divided successively by 2 yields binary 11111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 169?",
    "options": [
      "0x152",
      "0xA9",
      "0xB9",
      "0xA4"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA9."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 105?",
    "options": [
      "1110101",
      "1101000",
      "1101100",
      "1101001"
    ],
    "answer": 3,
    "explanation": "105 divided successively by 2 yields binary 1101001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 42?",
    "options": [
      "101010",
      "101101",
      "101001",
      "110110"
    ],
    "answer": 0,
    "explanation": "42 divided successively by 2 yields binary 101010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 83?",
    "options": [
      "0x4E",
      "0xA6",
      "0x53",
      "0x63"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x53."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 71?",
    "options": [
      "1000110",
      "1001010",
      "1000111",
      "1010011"
    ],
    "answer": 2,
    "explanation": "71 divided successively by 2 yields binary 1000111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 131?",
    "options": [
      "0x93",
      "0x7E",
      "0x106",
      "0x83"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x83."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 81?",
    "options": [
      "0x61",
      "0xA2",
      "0x4C",
      "0x51"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x51."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 78?",
    "options": [
      "1001101",
      "1011010",
      "1001110",
      "1010001"
    ],
    "answer": 2,
    "explanation": "78 divided successively by 2 yields binary 1001110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 146?",
    "options": [
      "0x8D",
      "0x92",
      "0x124",
      "0xA2"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x92."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 120?",
    "options": [
      "10000100",
      "1111011",
      "1111000",
      "1110111"
    ],
    "answer": 2,
    "explanation": "120 divided successively by 2 yields binary 1111000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 58?",
    "options": [
      "111001",
      "1000110",
      "111010",
      "111101"
    ],
    "answer": 2,
    "explanation": "58 divided successively by 2 yields binary 111010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 46?",
    "options": [
      "101110",
      "110001",
      "111010",
      "101101"
    ],
    "answer": 0,
    "explanation": "46 divided successively by 2 yields binary 101110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 63?",
    "options": [
      "111111",
      "111110",
      "1001011",
      "1000010"
    ],
    "answer": 0,
    "explanation": "63 divided successively by 2 yields binary 111111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 128?",
    "options": [
      "0x100",
      "0x90",
      "0x80",
      "0x7B"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x80."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 241?",
    "options": [
      "0xEC",
      "0x1E2",
      "0xF1",
      "0x101"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 152?",
    "options": [
      "0x98",
      "0x93",
      "0x130",
      "0xA8"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x98."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 120?",
    "options": [
      "0x73",
      "0x78",
      "0x88",
      "0xF0"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x78."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 82?",
    "options": [
      "1010010",
      "1011110",
      "1010001",
      "1010101"
    ],
    "answer": 0,
    "explanation": "82 divided successively by 2 yields binary 1010010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 127?",
    "options": [
      "0x8F",
      "0xFE",
      "0x7F",
      "0x7A"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7F."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 84?",
    "options": [
      "1010100",
      "1010011",
      "1010111",
      "1100000"
    ],
    "answer": 0,
    "explanation": "84 divided successively by 2 yields binary 1010100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 11?",
    "options": [
      "1110",
      "10111",
      "1010",
      "1011"
    ],
    "answer": 3,
    "explanation": "11 divided successively by 2 yields binary 1011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 166?",
    "options": [
      "0xA6",
      "0x14C",
      "0xB6",
      "0xA1"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA6."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 186?",
    "options": [
      "0xBA",
      "0x174",
      "0xB5",
      "0xCA"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBA."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 128?",
    "options": [
      "10000000",
      "10000011",
      "10001100",
      "1111111"
    ],
    "answer": 0,
    "explanation": "128 divided successively by 2 yields binary 10000000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 126?",
    "options": [
      "0xFC",
      "0x7E",
      "0x8E",
      "0x79"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7E."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 30?",
    "options": [
      "11110",
      "11101",
      "100001",
      "101010"
    ],
    "answer": 0,
    "explanation": "30 divided successively by 2 yields binary 11110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 75?",
    "options": [
      "0x96",
      "0x5B",
      "0x4B",
      "0x46"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4B."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 97?",
    "options": [
      "1100000",
      "1100001",
      "1101101",
      "1100100"
    ],
    "answer": 1,
    "explanation": "97 divided successively by 2 yields binary 1100001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 147?",
    "options": [
      "0xA3",
      "0x126",
      "0x93",
      "0x8E"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x93."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 59?",
    "options": [
      "111010",
      "111110",
      "111011",
      "1000111"
    ],
    "answer": 2,
    "explanation": "59 divided successively by 2 yields binary 111011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 74?",
    "options": [
      "0x4A",
      "0x94",
      "0x45",
      "0x5A"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4A."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 188?",
    "options": [
      "0xB7",
      "0x178",
      "0xBC",
      "0xCC"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 248?",
    "options": [
      "0x1F0",
      "0xF3",
      "0x108",
      "0xF8"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 136?",
    "options": [
      "0x88",
      "0x83",
      "0x110",
      "0x98"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x88."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 85?",
    "options": [
      "1010100",
      "1010101",
      "1100001",
      "1011000"
    ],
    "answer": 1,
    "explanation": "85 divided successively by 2 yields binary 1010101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 96?",
    "options": [
      "1100011",
      "1100000",
      "1011111",
      "1101100"
    ],
    "answer": 1,
    "explanation": "96 divided successively by 2 yields binary 1100000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 102?",
    "options": [
      "1110010",
      "1100101",
      "1100110",
      "1101001"
    ],
    "answer": 2,
    "explanation": "102 divided successively by 2 yields binary 1100110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 38?",
    "options": [
      "101001",
      "100101",
      "110010",
      "100110"
    ],
    "answer": 3,
    "explanation": "38 divided successively by 2 yields binary 100110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 178?",
    "options": [
      "0xB2",
      "0x164",
      "0xC2",
      "0xAD"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 57?",
    "options": [
      "0x39",
      "0x49",
      "0x34",
      "0x72"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x39."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 113?",
    "options": [
      "1111101",
      "1110000",
      "1110100",
      "1110001"
    ],
    "answer": 3,
    "explanation": "113 divided successively by 2 yields binary 1110001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 13?",
    "options": [
      "1101",
      "10000",
      "11001",
      "1100"
    ],
    "answer": 0,
    "explanation": "13 divided successively by 2 yields binary 1101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 162?",
    "options": [
      "0x144",
      "0xB2",
      "0x9D",
      "0xA2"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 43?",
    "options": [
      "101110",
      "101010",
      "110111",
      "101011"
    ],
    "answer": 3,
    "explanation": "43 divided successively by 2 yields binary 101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 208?",
    "options": [
      "0xD0",
      "0xE0",
      "0xCB",
      "0x1A0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD0."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 40?",
    "options": [
      "100111",
      "101011",
      "101000",
      "110100"
    ],
    "answer": 2,
    "explanation": "40 divided successively by 2 yields binary 101000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 50?",
    "options": [
      "0x42",
      "0x64",
      "0x2D",
      "0x32"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x32."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 65?",
    "options": [
      "0x3C",
      "0x51",
      "0x41",
      "0x82"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x41."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 240?",
    "options": [
      "0x100",
      "0xF0",
      "0xEB",
      "0x1E0"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF0."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 18?",
    "options": [
      "10001",
      "10101",
      "10010",
      "11110"
    ],
    "answer": 2,
    "explanation": "18 divided successively by 2 yields binary 10010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 163?",
    "options": [
      "0xB3",
      "0xA3",
      "0x146",
      "0x9E"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 68?",
    "options": [
      "1000100",
      "1000011",
      "1010000",
      "1000111"
    ],
    "answer": 0,
    "explanation": "68 divided successively by 2 yields binary 1000100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 134?",
    "options": [
      "0x96",
      "0x86",
      "0x10C",
      "0x81"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x86."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 62?",
    "options": [
      "111101",
      "1000001",
      "111110",
      "1001010"
    ],
    "answer": 2,
    "explanation": "62 divided successively by 2 yields binary 111110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 88?",
    "options": [
      "0xB0",
      "0x53",
      "0x68",
      "0x58"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x58."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 123?",
    "options": [
      "0x7B",
      "0xF6",
      "0x8B",
      "0x76"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7B."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 95?",
    "options": [
      "1011111",
      "1101011",
      "1100010",
      "1011110"
    ],
    "answer": 0,
    "explanation": "95 divided successively by 2 yields binary 1011111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 58?",
    "options": [
      "0x35",
      "0x4A",
      "0x3A",
      "0x74"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3A."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216?",
    "options": [
      "0xE8",
      "0x1B0",
      "0xD8",
      "0xD3"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 101?",
    "options": [
      "0x60",
      "0x65",
      "0xCA",
      "0x75"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x65."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 83?",
    "options": [
      "1010110",
      "1010010",
      "1011111",
      "1010011"
    ],
    "answer": 3,
    "explanation": "83 divided successively by 2 yields binary 1010011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 210?",
    "options": [
      "0x1A4",
      "0xCD",
      "0xE2",
      "0xD2"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 79?",
    "options": [
      "1011011",
      "1001111",
      "1010010",
      "1001110"
    ],
    "answer": 1,
    "explanation": "79 divided successively by 2 yields binary 1001111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 116?",
    "options": [
      "0x74",
      "0x6F",
      "0x84",
      "0xE8"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x74."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 15?",
    "options": [
      "1111",
      "11011",
      "10010",
      "1110"
    ],
    "answer": 0,
    "explanation": "15 divided successively by 2 yields binary 1111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 203?",
    "options": [
      "0xC6",
      "0x196",
      "0xCB",
      "0xDB"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCB."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 137?",
    "options": [
      "0x89",
      "0x112",
      "0x99",
      "0x84"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x89."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 81?",
    "options": [
      "1011101",
      "1010001",
      "1010100",
      "1010000"
    ],
    "answer": 1,
    "explanation": "81 divided successively by 2 yields binary 1010001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 199?",
    "options": [
      "0x18E",
      "0xD7",
      "0xC2",
      "0xC7"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC7."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 99?",
    "options": [
      "1100011",
      "1100110",
      "1101111",
      "1100010"
    ],
    "answer": 0,
    "explanation": "99 divided successively by 2 yields binary 1100011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 35?",
    "options": [
      "100010",
      "101111",
      "100011",
      "100110"
    ],
    "answer": 2,
    "explanation": "35 divided successively by 2 yields binary 100011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 239?",
    "options": [
      "0xEF",
      "0xEA",
      "0x1DE",
      "0xFF"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 204?",
    "options": [
      "0xDC",
      "0xC7",
      "0x198",
      "0xCC"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 212?",
    "options": [
      "0xCF",
      "0xD4",
      "0xE4",
      "0x1A8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 230?",
    "options": [
      "0xE1",
      "0xF6",
      "0xE6",
      "0x1CC"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE6."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 236?",
    "options": [
      "0xFC",
      "0xE7",
      "0xEC",
      "0x1D8"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEC."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 104?",
    "options": [
      "1101011",
      "1100111",
      "1101000",
      "1110100"
    ],
    "answer": 2,
    "explanation": "104 divided successively by 2 yields binary 1101000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 113?",
    "options": [
      "0xE2",
      "0x6C",
      "0x81",
      "0x71"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x71."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 118?",
    "options": [
      "0xEC",
      "0x71",
      "0x76",
      "0x86"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x76."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 115?",
    "options": [
      "0x83",
      "0x6E",
      "0xE6",
      "0x73"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x73."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 78?",
    "options": [
      "0x49",
      "0x5E",
      "0x9C",
      "0x4E"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 151?",
    "options": [
      "0xA7",
      "0x97",
      "0x12E",
      "0x92"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x97."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 88?",
    "options": [
      "1100100",
      "1010111",
      "1011000",
      "1011011"
    ],
    "answer": 2,
    "explanation": "88 divided successively by 2 yields binary 1011000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 110?",
    "options": [
      "1101101",
      "1110001",
      "1101110",
      "1111010"
    ],
    "answer": 2,
    "explanation": "110 divided successively by 2 yields binary 1101110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 100?",
    "options": [
      "0x5F",
      "0xC8",
      "0x74",
      "0x64"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x64."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 142?",
    "options": [
      "0x9E",
      "0x89",
      "0x11C",
      "0x8E"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8E."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 36?",
    "options": [
      "100100",
      "100111",
      "100011",
      "110000"
    ],
    "answer": 0,
    "explanation": "36 divided successively by 2 yields binary 100100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 207?",
    "options": [
      "0x19E",
      "0xDF",
      "0xCF",
      "0xCA"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 121?",
    "options": [
      "1111100",
      "10000101",
      "1111001",
      "1111000"
    ],
    "answer": 2,
    "explanation": "121 divided successively by 2 yields binary 1111001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 192?",
    "options": [
      "0xD0",
      "0x180",
      "0xC0",
      "0xBB"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 224?",
    "options": [
      "0xE0",
      "0x1C0",
      "0xDB",
      "0xF0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 94?",
    "options": [
      "0xBC",
      "0x5E",
      "0x6E",
      "0x59"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5E."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 94?",
    "options": [
      "1011110",
      "1101010",
      "1100001",
      "1011101"
    ],
    "answer": 0,
    "explanation": "94 divided successively by 2 yields binary 1011110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 19?",
    "options": [
      "10110",
      "10010",
      "11111",
      "10011"
    ],
    "answer": 3,
    "explanation": "19 divided successively by 2 yields binary 10011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 104?",
    "options": [
      "0x68",
      "0x63",
      "0xD0",
      "0x78"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x68."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 109?",
    "options": [
      "0x68",
      "0x6D",
      "0xDA",
      "0x7D"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 103?",
    "options": [
      "0x67",
      "0xCE",
      "0x62",
      "0x77"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x67."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 211?",
    "options": [
      "0xCE",
      "0xD3",
      "0x1A6",
      "0xE3"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 167?",
    "options": [
      "0xB7",
      "0x14E",
      "0xA7",
      "0xA2"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 84?",
    "options": [
      "0xA8",
      "0x64",
      "0x4F",
      "0x54"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x54."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 101?",
    "options": [
      "1101000",
      "1100100",
      "1100101",
      "1110001"
    ],
    "answer": 2,
    "explanation": "101 divided successively by 2 yields binary 1100101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 145?",
    "options": [
      "0xA1",
      "0x91",
      "0x122",
      "0x8C"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x91."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 60?",
    "options": [
      "111011",
      "111100",
      "1001000",
      "111111"
    ],
    "answer": 1,
    "explanation": "60 divided successively by 2 yields binary 111100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243?",
    "options": [
      "0xEE",
      "0x103",
      "0xF3",
      "0x1E6"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 107?",
    "options": [
      "0xD6",
      "0x66",
      "0x7B",
      "0x6B"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6B."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 90?",
    "options": [
      "0xB4",
      "0x55",
      "0x5A",
      "0x6A"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5A."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 126?",
    "options": [
      "1111101",
      "10001010",
      "1111110",
      "10000001"
    ],
    "answer": 2,
    "explanation": "126 divided successively by 2 yields binary 1111110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 177?",
    "options": [
      "0x162",
      "0xC1",
      "0xB1",
      "0xAC"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 77?",
    "options": [
      "0x4D",
      "0x48",
      "0x9A",
      "0x5D"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4D."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 56?",
    "options": [
      "111011",
      "110111",
      "111000",
      "1000100"
    ],
    "answer": 2,
    "explanation": "56 divided successively by 2 yields binary 111000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 141?",
    "options": [
      "0x9D",
      "0x11A",
      "0x8D",
      "0x88"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 209?",
    "options": [
      "0xCC",
      "0xD1",
      "0xE1",
      "0x1A2"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD1."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 106?",
    "options": [
      "1101001",
      "1101010",
      "1101101",
      "1110110"
    ],
    "answer": 1,
    "explanation": "106 divided successively by 2 yields binary 1101010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 51?",
    "options": [
      "0x2E",
      "0x66",
      "0x33",
      "0x43"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x33."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 89?",
    "options": [
      "0xB2",
      "0x54",
      "0x59",
      "0x69"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x59."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 111?",
    "options": [
      "1101111",
      "1101110",
      "1111011",
      "1110010"
    ],
    "answer": 0,
    "explanation": "111 divided successively by 2 yields binary 1101111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 32?",
    "options": [
      "100000",
      "100011",
      "101100",
      "11111"
    ],
    "answer": 0,
    "explanation": "32 divided successively by 2 yields binary 100000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 49?",
    "options": [
      "110001",
      "111101",
      "110100",
      "110000"
    ],
    "answer": 0,
    "explanation": "49 divided successively by 2 yields binary 110001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 87?",
    "options": [
      "1011010",
      "1010110",
      "1100011",
      "1010111"
    ],
    "answer": 3,
    "explanation": "87 divided successively by 2 yields binary 1010111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 67?",
    "options": [
      "1000011",
      "1000110",
      "1000010",
      "1001111"
    ],
    "answer": 0,
    "explanation": "67 divided successively by 2 yields binary 1000011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 73?",
    "options": [
      "1010101",
      "1001000",
      "1001001",
      "1001100"
    ],
    "answer": 2,
    "explanation": "73 divided successively by 2 yields binary 1001001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 247?",
    "options": [
      "0xF7",
      "0x107",
      "0x1EE",
      "0xF2"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF7."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 75?",
    "options": [
      "1001010",
      "1001110",
      "1010111",
      "1001011"
    ],
    "answer": 3,
    "explanation": "75 divided successively by 2 yields binary 1001011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 92?",
    "options": [
      "0xB8",
      "0x57",
      "0x5C",
      "0x6C"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 54?",
    "options": [
      "111001",
      "1000010",
      "110101",
      "110110"
    ],
    "answer": 3,
    "explanation": "54 divided successively by 2 yields binary 110110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 176?",
    "options": [
      "0xB0",
      "0x160",
      "0xAB",
      "0xC0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 82?",
    "options": [
      "0x62",
      "0x52",
      "0x4D",
      "0xA4"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x52."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 237?",
    "options": [
      "0xFD",
      "0x1DA",
      "0xED",
      "0xE8"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xED."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 108?",
    "options": [
      "1101011",
      "1101111",
      "1111000",
      "1101100"
    ],
    "answer": 3,
    "explanation": "108 divided successively by 2 yields binary 1101100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 197?",
    "options": [
      "0xC0",
      "0x18A",
      "0xD5",
      "0xC5"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC5."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 228?",
    "options": [
      "0x1C8",
      "0xF4",
      "0xE4",
      "0xDF"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 245?",
    "options": [
      "0x105",
      "0xF5",
      "0xF0",
      "0x1EA"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF5."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25?",
    "options": [
      "11001",
      "100101",
      "11000",
      "11100"
    ],
    "answer": 0,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 130?",
    "options": [
      "0x92",
      "0x7D",
      "0x82",
      "0x104"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x82."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 61?",
    "options": [
      "1001001",
      "111101",
      "1000000",
      "111100"
    ],
    "answer": 1,
    "explanation": "61 divided successively by 2 yields binary 111101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 86?",
    "options": [
      "1010110",
      "1011001",
      "1100010",
      "1010101"
    ],
    "answer": 0,
    "explanation": "86 divided successively by 2 yields binary 1010110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 65?",
    "options": [
      "1000100",
      "1000001",
      "1000000",
      "1001101"
    ],
    "answer": 1,
    "explanation": "65 divided successively by 2 yields binary 1000001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 41?",
    "options": [
      "110101",
      "101000",
      "101001",
      "101100"
    ],
    "answer": 2,
    "explanation": "41 divided successively by 2 yields binary 101001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 85?",
    "options": [
      "0x65",
      "0x55",
      "0xAA",
      "0x50"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x55."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 72?",
    "options": [
      "0x43",
      "0x90",
      "0x58",
      "0x48"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x48."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 233?",
    "options": [
      "0x1D2",
      "0xE9",
      "0xE4",
      "0xF9"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 154?",
    "options": [
      "0x134",
      "0x95",
      "0xAA",
      "0x9A"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9A."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 121?",
    "options": [
      "0x74",
      "0xF2",
      "0x79",
      "0x89"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x79."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 150?",
    "options": [
      "0x91",
      "0x12C",
      "0x96",
      "0xA6"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x96."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 79?",
    "options": [
      "0x5F",
      "0x4F",
      "0x4A",
      "0x9E"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4F."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 39?",
    "options": [
      "100111",
      "110011",
      "100110",
      "101010"
    ],
    "answer": 0,
    "explanation": "39 divided successively by 2 yields binary 100111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 118?",
    "options": [
      "1110101",
      "1110110",
      "10000010",
      "1111001"
    ],
    "answer": 1,
    "explanation": "118 divided successively by 2 yields binary 1110110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 53?",
    "options": [
      "1000001",
      "110100",
      "110101",
      "111000"
    ],
    "answer": 2,
    "explanation": "53 divided successively by 2 yields binary 110101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 165?",
    "options": [
      "0xB5",
      "0xA5",
      "0xA0",
      "0x14A"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA5."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 67?",
    "options": [
      "0x86",
      "0x43",
      "0x3E",
      "0x53"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x43."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 76?",
    "options": [
      "1011000",
      "1001111",
      "1001011",
      "1001100"
    ],
    "answer": 3,
    "explanation": "76 divided successively by 2 yields binary 1001100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 66?",
    "options": [
      "0x84",
      "0x52",
      "0x3D",
      "0x42"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x42."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 90?",
    "options": [
      "1011001",
      "1011010",
      "1011101",
      "1100110"
    ],
    "answer": 1,
    "explanation": "90 divided successively by 2 yields binary 1011010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 139?",
    "options": [
      "0x9B",
      "0x116",
      "0x8B",
      "0x86"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8B."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 33?",
    "options": [
      "100100",
      "101101",
      "100000",
      "100001"
    ],
    "answer": 3,
    "explanation": "33 divided successively by 2 yields binary 100001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 114?",
    "options": [
      "1111110",
      "1110001",
      "1110101",
      "1110010"
    ],
    "answer": 3,
    "explanation": "114 divided successively by 2 yields binary 1110010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 117?",
    "options": [
      "10000001",
      "1110101",
      "1110100",
      "1111000"
    ],
    "answer": 1,
    "explanation": "117 divided successively by 2 yields binary 1110101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 238?",
    "options": [
      "0xEE",
      "0x1DC",
      "0xFE",
      "0xE9"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEE."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 119?",
    "options": [
      "0xEE",
      "0x87",
      "0x72",
      "0x77"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x77."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 73?",
    "options": [
      "0x92",
      "0x59",
      "0x49",
      "0x44"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x49."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 170?",
    "options": [
      "0xA5",
      "0xBA",
      "0xAA",
      "0x154"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAA."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 222?",
    "options": [
      "0x1BC",
      "0xEE",
      "0xD9",
      "0xDE"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDE."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 189?",
    "options": [
      "0xBD",
      "0xB8",
      "0x17A",
      "0xCD"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBD."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 64?",
    "options": [
      "0x3B",
      "0x50",
      "0x80",
      "0x40"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x40."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 168?",
    "options": [
      "0xA3",
      "0xB8",
      "0xA8",
      "0x150"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 213?",
    "options": [
      "0xD5",
      "0xE5",
      "0xD0",
      "0x1AA"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD5."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 182?",
    "options": [
      "0xB6",
      "0xB1",
      "0x16C",
      "0xC6"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB6."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 234?",
    "options": [
      "0xE5",
      "0xFA",
      "0xEA",
      "0x1D4"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEA."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 95?",
    "options": [
      "0x5F",
      "0x6F",
      "0xBE",
      "0x5A"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 201?",
    "options": [
      "0x192",
      "0xC9",
      "0xD9",
      "0xC4"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC9."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 74?",
    "options": [
      "1010110",
      "1001001",
      "1001101",
      "1001010"
    ],
    "answer": 3,
    "explanation": "74 divided successively by 2 yields binary 1001010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 69?",
    "options": [
      "0x55",
      "0x40",
      "0x45",
      "0x8A"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x45."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 63?",
    "options": [
      "0x3F",
      "0x3A",
      "0x4F",
      "0x7E"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 218?",
    "options": [
      "0x1B4",
      "0xEA",
      "0xDA",
      "0xD5"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDA."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 124?",
    "options": [
      "0x77",
      "0xF8",
      "0x7C",
      "0x8C"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 205?",
    "options": [
      "0xCD",
      "0xDD",
      "0x19A",
      "0xC8"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCD."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 26?",
    "options": [
      "11001",
      "11101",
      "100110",
      "11010"
    ],
    "answer": 3,
    "explanation": "26 divided successively by 2 yields binary 11010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 235?",
    "options": [
      "0xE6",
      "0x1D6",
      "0xFB",
      "0xEB"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEB."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 12?",
    "options": [
      "1100",
      "11000",
      "1111",
      "1011"
    ],
    "answer": 0,
    "explanation": "12 divided successively by 2 yields binary 1100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 87?",
    "options": [
      "0x57",
      "0x67",
      "0x52",
      "0xAE"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x57."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 37?",
    "options": [
      "110001",
      "100101",
      "100100",
      "101000"
    ],
    "answer": 1,
    "explanation": "37 divided successively by 2 yields binary 100101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 80?",
    "options": [
      "1011100",
      "1001111",
      "1010000",
      "1010011"
    ],
    "answer": 2,
    "explanation": "80 divided successively by 2 yields binary 1010000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 129?",
    "options": [
      "10000001",
      "10001101",
      "10000000",
      "10000100"
    ],
    "answer": 0,
    "explanation": "129 divided successively by 2 yields binary 10000001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 91?",
    "options": [
      "0xB6",
      "0x56",
      "0x5B",
      "0x6B"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5B."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 129?",
    "options": [
      "0x102",
      "0x7C",
      "0x91",
      "0x81"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x81."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 174?",
    "options": [
      "0xBE",
      "0xA9",
      "0x15C",
      "0xAE"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAE."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 56?",
    "options": [
      "0x48",
      "0x38",
      "0x33",
      "0x70"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x38."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 62?",
    "options": [
      "0x39",
      "0x4E",
      "0x3E",
      "0x7C"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 206?",
    "options": [
      "0xDE",
      "0x19C",
      "0xCE",
      "0xC9"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCE."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 175?",
    "options": [
      "0x15E",
      "0xBF",
      "0xAF",
      "0xAA"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 156?",
    "options": [
      "0x97",
      "0x9C",
      "0xAC",
      "0x138"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 244?",
    "options": [
      "0x104",
      "0xEF",
      "0x1E8",
      "0xF4"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 194?",
    "options": [
      "0x184",
      "0xC2",
      "0xD2",
      "0xBD"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 123?",
    "options": [
      "1111011",
      "1111010",
      "1111110",
      "10000111"
    ],
    "answer": 0,
    "explanation": "123 divided successively by 2 yields binary 1111011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 45?",
    "options": [
      "111001",
      "101100",
      "101101",
      "110000"
    ],
    "answer": 2,
    "explanation": "45 divided successively by 2 yields binary 101101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 225?",
    "options": [
      "0xE1",
      "0xF1",
      "0x1C2",
      "0xDC"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 122?",
    "options": [
      "0x7A",
      "0x75",
      "0x8A",
      "0xF4"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7A."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195?",
    "options": [
      "0xD3",
      "0xBE",
      "0x186",
      "0xC3"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 119?",
    "options": [
      "10000011",
      "1110111",
      "1110110",
      "1111010"
    ],
    "answer": 1,
    "explanation": "119 divided successively by 2 yields binary 1110111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 64?",
    "options": [
      "1001100",
      "1000011",
      "1000000",
      "111111"
    ],
    "answer": 2,
    "explanation": "64 divided successively by 2 yields binary 1000000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 117?",
    "options": [
      "0xEA",
      "0x75",
      "0x70",
      "0x85"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x75."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 17?",
    "options": [
      "10001",
      "10100",
      "11101",
      "10000"
    ],
    "answer": 0,
    "explanation": "17 divided successively by 2 yields binary 10001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 112?",
    "options": [
      "0x80",
      "0x70",
      "0xE0",
      "0x6B"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x70."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 29?",
    "options": [
      "11101",
      "11100",
      "101001",
      "100000"
    ],
    "answer": 0,
    "explanation": "29 divided successively by 2 yields binary 11101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 219?",
    "options": [
      "0xDB",
      "0x1B6",
      "0xEB",
      "0xD6"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDB."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 34?",
    "options": [
      "100010",
      "101110",
      "100001",
      "100101"
    ],
    "answer": 0,
    "explanation": "34 divided successively by 2 yields binary 100010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 93?",
    "options": [
      "0x58",
      "0xBA",
      "0x5D",
      "0x6D"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 190?",
    "options": [
      "0xCE",
      "0xBE",
      "0x17C",
      "0xB9"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBE."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 14?",
    "options": [
      "1101",
      "11010",
      "10001",
      "1110"
    ],
    "answer": 3,
    "explanation": "14 divided successively by 2 yields binary 1110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 114?",
    "options": [
      "0x82",
      "0xE4",
      "0x72",
      "0x6D"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x72."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 89?",
    "options": [
      "1100101",
      "1011000",
      "1011100",
      "1011001"
    ],
    "answer": 3,
    "explanation": "89 divided successively by 2 yields binary 1011001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 99?",
    "options": [
      "0x73",
      "0x5E",
      "0xC6",
      "0x63"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x63."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 173?",
    "options": [
      "0xA8",
      "0x15A",
      "0xBD",
      "0xAD"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAD."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 200?",
    "options": [
      "0xC3",
      "0x190",
      "0xD8",
      "0xC8"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 96?",
    "options": [
      "0xC0",
      "0x5B",
      "0x60",
      "0x70"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x60."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 221?",
    "options": [
      "0xDD",
      "0x1BA",
      "0xD8",
      "0xED"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDD."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 227?",
    "options": [
      "0xE3",
      "0xF3",
      "0x1C6",
      "0xDE"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 138?",
    "options": [
      "0x9A",
      "0x8A",
      "0x114",
      "0x85"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8A."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 214?",
    "options": [
      "0xD6",
      "0x1AC",
      "0xE6",
      "0xD1"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD6."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 70?",
    "options": [
      "1001001",
      "1000101",
      "1000110",
      "1010010"
    ],
    "answer": 2,
    "explanation": "70 divided successively by 2 yields binary 1000110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 55?",
    "options": [
      "0x6E",
      "0x37",
      "0x47",
      "0x32"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x37."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 158?",
    "options": [
      "0x13C",
      "0xAE",
      "0x99",
      "0x9E"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9E."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 44?",
    "options": [
      "101011",
      "111000",
      "101111",
      "101100"
    ],
    "answer": 3,
    "explanation": "44 divided successively by 2 yields binary 101100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 140?",
    "options": [
      "0x87",
      "0x8C",
      "0x118",
      "0x9C"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 102?",
    "options": [
      "0x66",
      "0x61",
      "0x76",
      "0xCC"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x66."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 52?",
    "options": [
      "0x68",
      "0x34",
      "0x2F",
      "0x44"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x34."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 226?",
    "options": [
      "0xF2",
      "0xDD",
      "0xE2",
      "0x1C4"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 231?",
    "options": [
      "0xE7",
      "0xF7",
      "0xE2",
      "0x1CE"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE7."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 48?",
    "options": [
      "101111",
      "110011",
      "111100",
      "110000"
    ],
    "answer": 3,
    "explanation": "48 divided successively by 2 yields binary 110000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 80?",
    "options": [
      "0x4B",
      "0xA0",
      "0x50",
      "0x60"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x50."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 157?",
    "options": [
      "0x13A",
      "0xAD",
      "0x9D",
      "0x98"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 105?",
    "options": [
      "0x79",
      "0xD2",
      "0x69",
      "0x64"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x69."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 164?",
    "options": [
      "0xB4",
      "0xA4",
      "0x148",
      "0x9F"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 110?",
    "options": [
      "0x69",
      "0x7E",
      "0x6E",
      "0xDC"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 215?",
    "options": [
      "0xE7",
      "0xD7",
      "0x1AE",
      "0xD2"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 184?",
    "options": [
      "0xB3",
      "0xC8",
      "0x170",
      "0xB8"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 98?",
    "options": [
      "1100010",
      "1101110",
      "1100001",
      "1100101"
    ],
    "answer": 0,
    "explanation": "98 divided successively by 2 yields binary 1100010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 76?",
    "options": [
      "0x47",
      "0x5C",
      "0x98",
      "0x4C"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 93?",
    "options": [
      "1011100",
      "1100000",
      "1011101",
      "1101001"
    ],
    "answer": 2,
    "explanation": "93 divided successively by 2 yields binary 1011101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 155?",
    "options": [
      "0x9B",
      "0xAB",
      "0x96",
      "0x136"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9B."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 97?",
    "options": [
      "0x5C",
      "0x61",
      "0x71",
      "0xC2"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x61."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 196?",
    "options": [
      "0x188",
      "0xD4",
      "0xBF",
      "0xC4"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC4."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 112?",
    "options": [
      "1111100",
      "1110000",
      "1110011",
      "1101111"
    ],
    "answer": 1,
    "explanation": "112 divided successively by 2 yields binary 1110000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 108?",
    "options": [
      "0x7C",
      "0xD8",
      "0x67",
      "0x6C"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 161?",
    "options": [
      "0xA1",
      "0x9C",
      "0x142",
      "0xB1"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 185?",
    "options": [
      "0xC9",
      "0xB9",
      "0x172",
      "0xB4"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 217?",
    "options": [
      "0xE9",
      "0xD9",
      "0x1B2",
      "0xD4"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 125?",
    "options": [
      "0x7D",
      "0xFA",
      "0x8D",
      "0x78"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 59?",
    "options": [
      "0x3B",
      "0x76",
      "0x36",
      "0x4B"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3B."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 148?",
    "options": [
      "0x8F",
      "0x94",
      "0x128",
      "0xA4"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x94."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 143?",
    "options": [
      "0x8A",
      "0x11E",
      "0x9F",
      "0x8F"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 98?",
    "options": [
      "0x72",
      "0x5D",
      "0x62",
      "0xC4"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x62."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 159?",
    "options": [
      "0x13E",
      "0x9A",
      "0xAF",
      "0x9F"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 187?",
    "options": [
      "0xCB",
      "0x176",
      "0xBB",
      "0xB6"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBB."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 68?",
    "options": [
      "0x54",
      "0x88",
      "0x3F",
      "0x44"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x44."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 180?",
    "options": [
      "0xC4",
      "0xAF",
      "0x168",
      "0xB4"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 149?",
    "options": [
      "0x90",
      "0x12A",
      "0x95",
      "0xA5"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x95."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 249?",
    "options": [
      "0xF4",
      "0x109",
      "0xF9",
      "0x1F2"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 229?",
    "options": [
      "0x1CA",
      "0xE5",
      "0xE0",
      "0xF5"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE5."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 191?",
    "options": [
      "0xCF",
      "0xBF",
      "0xBA",
      "0x17E"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 160?",
    "options": [
      "0xA0",
      "0xB0",
      "0x9B",
      "0x140"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 120? (Set 1)",
    "options": [
      "0x78",
      "0xF0",
      "0x88",
      "0x73"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x78."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 50? (Set 2)",
    "options": [
      "110010",
      "110001",
      "111110",
      "110101"
    ],
    "answer": 0,
    "explanation": "50 divided successively by 2 yields binary 110010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 43? (Set 3)",
    "options": [
      "101110",
      "101011",
      "101010",
      "110111"
    ],
    "answer": 1,
    "explanation": "43 divided successively by 2 yields binary 101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 203? (Set 4)",
    "options": [
      "0xCB",
      "0xDB",
      "0xC6",
      "0x196"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCB."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 165? (Set 5)",
    "options": [
      "0x14A",
      "0xA5",
      "0xB5",
      "0xA0"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA5."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 234? (Set 6)",
    "options": [
      "0xE5",
      "0xFA",
      "0xEA",
      "0x1D4"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEA."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195? (Set 7)",
    "options": [
      "0xD3",
      "0xBE",
      "0xC3",
      "0x186"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 99? (Set 8)",
    "options": [
      "1100011",
      "1100110",
      "1101111",
      "1100010"
    ],
    "answer": 0,
    "explanation": "99 divided successively by 2 yields binary 1100011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 207? (Set 9)",
    "options": [
      "0x19E",
      "0xCF",
      "0xCA",
      "0xDF"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 77? (Set 10)",
    "options": [
      "1001101",
      "1001100",
      "1011001",
      "1010000"
    ],
    "answer": 0,
    "explanation": "77 divided successively by 2 yields binary 1001101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 121? (Set 11)",
    "options": [
      "1111000",
      "10000101",
      "1111100",
      "1111001"
    ],
    "answer": 3,
    "explanation": "121 divided successively by 2 yields binary 1111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 19? (Set 12)",
    "options": [
      "10110",
      "10010",
      "10011",
      "11111"
    ],
    "answer": 2,
    "explanation": "19 divided successively by 2 yields binary 10011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 165? (Set 13)",
    "options": [
      "0xA5",
      "0xB5",
      "0xA0",
      "0x14A"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA5."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 97? (Set 14)",
    "options": [
      "1100000",
      "1100100",
      "1101101",
      "1100001"
    ],
    "answer": 3,
    "explanation": "97 divided successively by 2 yields binary 1100001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 207? (Set 9) (Set 15)",
    "options": [
      "0xCF",
      "0x19E",
      "0xDF",
      "0xCA"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 57? (Set 16)",
    "options": [
      "111001",
      "111000",
      "111100",
      "1000101"
    ],
    "answer": 0,
    "explanation": "57 divided successively by 2 yields binary 111001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 132? (Set 17)",
    "options": [
      "0x84",
      "0x7F",
      "0x108",
      "0x94"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x84."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 172? (Set 18)",
    "options": [
      "0xAC",
      "0xA7",
      "0xBC",
      "0x158"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAC."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "Which cache mapping technique allows any block of memory to be placed anywhere in cache? (Set 19)",
    "options": [
      "Fully Associative Mapping",
      "Set-Associative Mapping",
      "Direct Mapping in practice",
      "Index Mapping in standard usage"
    ],
    "answer": 0,
    "explanation": "Fully associative allows maximum flexibility but complex lookup."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 94? (Set 20)",
    "options": [
      "1101010",
      "1011110",
      "1011101",
      "1100001"
    ],
    "answer": 1,
    "explanation": "94 divided successively by 2 yields binary 1011110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 217? (Set 21)",
    "options": [
      "0x1B2",
      "0xE9",
      "0xD4",
      "0xD9"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 73? (Set 22)",
    "options": [
      "0x44",
      "0x49",
      "0x92",
      "0x59"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x49."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 86? (Set 23)",
    "options": [
      "0x66",
      "0xAC",
      "0x56",
      "0x51"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x56."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 31? (Set 24)",
    "options": [
      "11110",
      "100010",
      "101011",
      "11111"
    ],
    "answer": 3,
    "explanation": "31 divided successively by 2 yields binary 11111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 119? (Set 25)",
    "options": [
      "10000011",
      "1110111",
      "1111010",
      "1110110"
    ],
    "answer": 1,
    "explanation": "119 divided successively by 2 yields binary 1110111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 96? (Set 26)",
    "options": [
      "0x5B",
      "0xC0",
      "0x70",
      "0x60"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x60."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 27)",
    "options": [
      "100101",
      "11001",
      "11000",
      "11100"
    ],
    "answer": 1,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 80? (Set 28)",
    "options": [
      "1010011",
      "1011100",
      "1010000",
      "1001111"
    ],
    "answer": 2,
    "explanation": "80 divided successively by 2 yields binary 1010000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 198? (Set 29)",
    "options": [
      "0xC6",
      "0xC1",
      "0xD6",
      "0x18C"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC6."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "What does the Program Counter (PC) store? (Set 30)",
    "options": [
      "Result of last calculation in most cases",
      "Current instruction value in standard usage",
      "Address of the next instruction to be fetched",
      "Address of accumulator based on convention"
    ],
    "answer": 2,
    "explanation": "PC tracks execution flow."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 62? (Set 31)",
    "options": [
      "0x39",
      "0x7C",
      "0x3E",
      "0x4E"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3E."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 67? (Set 32)",
    "options": [
      "1000010",
      "1000011",
      "1001111",
      "1000110"
    ],
    "answer": 1,
    "explanation": "67 divided successively by 2 yields binary 1000011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 122? (Set 33)",
    "options": [
      "1111101",
      "1111010",
      "1111001",
      "10000110"
    ],
    "answer": 1,
    "explanation": "122 divided successively by 2 yields binary 1111010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 117? (Set 34)",
    "options": [
      "0x75",
      "0x70",
      "0xEA",
      "0x85"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x75."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 194? (Set 35)",
    "options": [
      "0xD2",
      "0xBD",
      "0xC2",
      "0x184"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 36)",
    "options": [
      "0x1B0",
      "0xD3",
      "0xE8",
      "0xD8"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 91? (Set 37)",
    "options": [
      "0x6B",
      "0xB6",
      "0x5B",
      "0x56"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5B."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 92? (Set 38)",
    "options": [
      "1101000",
      "1011011",
      "1011111",
      "1011100"
    ],
    "answer": 3,
    "explanation": "92 divided successively by 2 yields binary 1011100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 242? (Set 39)",
    "options": [
      "0xED",
      "0x102",
      "0x1E4",
      "0xF2"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 40)",
    "options": [
      "0x1B0",
      "0xE8",
      "0xD8",
      "0xD3"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195? (Set 41)",
    "options": [
      "0xC3",
      "0xD3",
      "0x186",
      "0xBE"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 122? (Set 42)",
    "options": [
      "0x7A",
      "0xF4",
      "0x75",
      "0x8A"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7A."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 194? (Set 43)",
    "options": [
      "0x184",
      "0xD2",
      "0xBD",
      "0xC2"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 27? (Set 44)",
    "options": [
      "11011",
      "11010",
      "11110",
      "100111"
    ],
    "answer": 0,
    "explanation": "27 divided successively by 2 yields binary 11011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 199? (Set 45)",
    "options": [
      "0x18E",
      "0xC2",
      "0xC7",
      "0xD7"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC7."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 57? (Set 46)",
    "options": [
      "111001",
      "111000",
      "111100",
      "1000101"
    ],
    "answer": 0,
    "explanation": "57 divided successively by 2 yields binary 111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 70? (Set 47)",
    "options": [
      "1001001",
      "1010010",
      "1000110",
      "1000101"
    ],
    "answer": 2,
    "explanation": "70 divided successively by 2 yields binary 1000110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 67? (Set 48)",
    "options": [
      "0x86",
      "0x3E",
      "0x53",
      "0x43"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x43."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 24? (Set 49)",
    "options": [
      "11000",
      "11011",
      "10111",
      "100100"
    ],
    "answer": 0,
    "explanation": "24 divided successively by 2 yields binary 11000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 90? (Set 50)",
    "options": [
      "0x5A",
      "0x6A",
      "0xB4",
      "0x55"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5A."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 51? (Set 51)",
    "options": [
      "0x33",
      "0x66",
      "0x43",
      "0x2E"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x33."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 71? (Set 52)",
    "options": [
      "1000111",
      "1001010",
      "1000110",
      "1010011"
    ],
    "answer": 0,
    "explanation": "71 divided successively by 2 yields binary 1000111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 156? (Set 53)",
    "options": [
      "0x138",
      "0x97",
      "0xAC",
      "0x9C"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 148? (Set 54)",
    "options": [
      "0x94",
      "0x8F",
      "0x128",
      "0xA4"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x94."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 80? (Set 55)",
    "options": [
      "1010011",
      "1010000",
      "1001111",
      "1011100"
    ],
    "answer": 1,
    "explanation": "80 divided successively by 2 yields binary 1010000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 236? (Set 56)",
    "options": [
      "0xEC",
      "0x1D8",
      "0xE7",
      "0xFC"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEC."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 118? (Set 57)",
    "options": [
      "1110110",
      "1110101",
      "10000010",
      "1111001"
    ],
    "answer": 0,
    "explanation": "118 divided successively by 2 yields binary 1110110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 94? (Set 58)",
    "options": [
      "1011110",
      "1101010",
      "1100001",
      "1011101"
    ],
    "answer": 0,
    "explanation": "94 divided successively by 2 yields binary 1011110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 89? (Set 59)",
    "options": [
      "0xB2",
      "0x54",
      "0x69",
      "0x59"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x59."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 55? (Set 60)",
    "options": [
      "1000011",
      "111010",
      "110110",
      "110111"
    ],
    "answer": 3,
    "explanation": "55 divided successively by 2 yields binary 110111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 234? (Set 61)",
    "options": [
      "0xEA",
      "0xE5",
      "0x1D4",
      "0xFA"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEA."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 50? (Set 62)",
    "options": [
      "110001",
      "111110",
      "110010",
      "110101"
    ],
    "answer": 2,
    "explanation": "50 divided successively by 2 yields binary 110010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 64? (Set 63)",
    "options": [
      "1000011",
      "1001100",
      "1000000",
      "111111"
    ],
    "answer": 2,
    "explanation": "64 divided successively by 2 yields binary 1000000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 162? (Set 64)",
    "options": [
      "0xA2",
      "0xB2",
      "0x144",
      "0x9D"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 176? (Set 65)",
    "options": [
      "0x160",
      "0xC0",
      "0xB0",
      "0xAB"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 112? (Set 66)",
    "options": [
      "0xE0",
      "0x80",
      "0x6B",
      "0x70"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x70."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 26? (Set 67)",
    "options": [
      "11001",
      "11101",
      "11010",
      "100110"
    ],
    "answer": 2,
    "explanation": "26 divided successively by 2 yields binary 11010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 172? (Set 18) (Set 68)",
    "options": [
      "0xBC",
      "0xA7",
      "0xAC",
      "0x158"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 228? (Set 69)",
    "options": [
      "0xE4",
      "0xF4",
      "0xDF",
      "0x1C8"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 76? (Set 70)",
    "options": [
      "0x47",
      "0x98",
      "0x4C",
      "0x5C"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 79? (Set 71)",
    "options": [
      "0x9E",
      "0x4A",
      "0x5F",
      "0x4F"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4F."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 99? (Set 72)",
    "options": [
      "1101111",
      "1100010",
      "1100110",
      "1100011"
    ],
    "answer": 3,
    "explanation": "99 divided successively by 2 yields binary 1100011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 118? (Set 73)",
    "options": [
      "0x86",
      "0x76",
      "0xEC",
      "0x71"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x76."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 54? (Set 74)",
    "options": [
      "111001",
      "110110",
      "110101",
      "1000010"
    ],
    "answer": 1,
    "explanation": "54 divided successively by 2 yields binary 110110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 57? (Set 75)",
    "options": [
      "1000101",
      "111100",
      "111001",
      "111000"
    ],
    "answer": 2,
    "explanation": "57 divided successively by 2 yields binary 111001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 135? (Set 76)",
    "options": [
      "0x87",
      "0x82",
      "0x10E",
      "0x97"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x87."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223? (Set 77)",
    "options": [
      "0x1BE",
      "0xDF",
      "0xDA",
      "0xEF"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 94? (Set 78)",
    "options": [
      "0x59",
      "0xBC",
      "0x6E",
      "0x5E"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 246? (Set 79)",
    "options": [
      "0xF6",
      "0x1EC",
      "0x106",
      "0xF1"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF6."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 194? (Set 80)",
    "options": [
      "0xD2",
      "0xC2",
      "0x184",
      "0xBD"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 81)",
    "options": [
      "0x1B0",
      "0xE8",
      "0xD3",
      "0xD8"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 76? (Set 82)",
    "options": [
      "0x47",
      "0x5C",
      "0x98",
      "0x4C"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 85? (Set 83)",
    "options": [
      "0x50",
      "0x55",
      "0xAA",
      "0x65"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x55."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 221? (Set 84)",
    "options": [
      "0xED",
      "0xDD",
      "0x1BA",
      "0xD8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDD."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 24? (Set 85)",
    "options": [
      "11011",
      "100100",
      "11000",
      "10111"
    ],
    "answer": 2,
    "explanation": "24 divided successively by 2 yields binary 11000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 65? (Set 86)",
    "options": [
      "0x41",
      "0x3C",
      "0x82",
      "0x51"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x41."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 87)",
    "options": [
      "11100",
      "100101",
      "11001",
      "11000"
    ],
    "answer": 2,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 121? (Set 88)",
    "options": [
      "10000101",
      "1111100",
      "1111000",
      "1111001"
    ],
    "answer": 3,
    "explanation": "121 divided successively by 2 yields binary 1111001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 124? (Set 89)",
    "options": [
      "0xF8",
      "0x77",
      "0x7C",
      "0x8C"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 244? (Set 90)",
    "options": [
      "0x104",
      "0xF4",
      "0x1E8",
      "0xEF"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF4."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 101? (Set 91)",
    "options": [
      "1100100",
      "1100101",
      "1110001",
      "1101000"
    ],
    "answer": 1,
    "explanation": "101 divided successively by 2 yields binary 1100101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 197? (Set 92)",
    "options": [
      "0x18A",
      "0xC5",
      "0xC0",
      "0xD5"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC5."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 54? (Set 74) (Set 93)",
    "options": [
      "111001",
      "110110",
      "110101",
      "1000010"
    ],
    "answer": 1,
    "explanation": "54 divided successively by 2 yields binary 110110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 199? (Set 45) (Set 94)",
    "options": [
      "0xC2",
      "0x18E",
      "0xC7",
      "0xD7"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 146? (Set 95)",
    "options": [
      "0x8D",
      "0x92",
      "0xA2",
      "0x124"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x92."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 13? (Set 96)",
    "options": [
      "1100",
      "11001",
      "1101",
      "10000"
    ],
    "answer": 2,
    "explanation": "13 divided successively by 2 yields binary 1101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 201? (Set 97)",
    "options": [
      "0x192",
      "0xC4",
      "0xC9",
      "0xD9"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 171? (Set 98)",
    "options": [
      "0x156",
      "0xA6",
      "0xBB",
      "0xAB"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAB."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 14? (Set 99)",
    "options": [
      "10001",
      "1110",
      "1101",
      "11010"
    ],
    "answer": 1,
    "explanation": "14 divided successively by 2 yields binary 1110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 20? (Set 100)",
    "options": [
      "10111",
      "10011",
      "100000",
      "10100"
    ],
    "answer": 3,
    "explanation": "20 divided successively by 2 yields binary 10100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 87) (Set 101)",
    "options": [
      "11100",
      "11000",
      "100101",
      "11001"
    ],
    "answer": 3,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 57? (Set 102)",
    "options": [
      "111100",
      "111000",
      "111001",
      "1000101"
    ],
    "answer": 2,
    "explanation": "57 divided successively by 2 yields binary 111001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 116? (Set 103)",
    "options": [
      "0xE8",
      "0x84",
      "0x6F",
      "0x74"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x74."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223? (Set 77) (Set 104)",
    "options": [
      "0xDA",
      "0x1BE",
      "0xEF",
      "0xDF"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 93? (Set 105)",
    "options": [
      "1101001",
      "1011101",
      "1011100",
      "1100000"
    ],
    "answer": 1,
    "explanation": "93 divided successively by 2 yields binary 1011101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 66? (Set 106)",
    "options": [
      "1000101",
      "1000010",
      "1000001",
      "1001110"
    ],
    "answer": 1,
    "explanation": "66 divided successively by 2 yields binary 1000010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 113? (Set 107)",
    "options": [
      "0x71",
      "0xE2",
      "0x81",
      "0x6C"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x71."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 172? (Set 108)",
    "options": [
      "0xBC",
      "0xAC",
      "0xA7",
      "0x158"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 95? (Set 109)",
    "options": [
      "0x6F",
      "0xBE",
      "0x5F",
      "0x5A"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5F."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 80? (Set 110)",
    "options": [
      "1011100",
      "1001111",
      "1010000",
      "1010011"
    ],
    "answer": 2,
    "explanation": "80 divided successively by 2 yields binary 1010000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 148? (Set 54) (Set 111)",
    "options": [
      "0x8F",
      "0x128",
      "0xA4",
      "0x94"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x94."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 43? (Set 3) (Set 112)",
    "options": [
      "101010",
      "101110",
      "101011",
      "110111"
    ],
    "answer": 2,
    "explanation": "43 divided successively by 2 yields binary 101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 234? (Set 6) (Set 113)",
    "options": [
      "0x1D4",
      "0xFA",
      "0xE5",
      "0xEA"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEA."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 77? (Set 10) (Set 114)",
    "options": [
      "1001101",
      "1011001",
      "1010000",
      "1001100"
    ],
    "answer": 0,
    "explanation": "77 divided successively by 2 yields binary 1001101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 111? (Set 115)",
    "options": [
      "0x7F",
      "0x6F",
      "0x6A",
      "0xDE"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 235? (Set 116)",
    "options": [
      "0x1D6",
      "0xEB",
      "0xFB",
      "0xE6"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEB."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 76? (Set 70) (Set 117)",
    "options": [
      "0x98",
      "0x5C",
      "0x4C",
      "0x47"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 96? (Set 26) (Set 118)",
    "options": [
      "0xC0",
      "0x70",
      "0x5B",
      "0x60"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x60."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 110? (Set 119)",
    "options": [
      "0xDC",
      "0x6E",
      "0x69",
      "0x7E"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 125? (Set 120)",
    "options": [
      "0x8D",
      "0x7D",
      "0x78",
      "0xFA"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 180? (Set 121)",
    "options": [
      "0x168",
      "0xC4",
      "0xAF",
      "0xB4"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 159? (Set 122)",
    "options": [
      "0x13E",
      "0x9F",
      "0xAF",
      "0x9A"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 36) (Set 123)",
    "options": [
      "0xE8",
      "0xD3",
      "0xD8",
      "0x1B0"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223? (Set 77) (Set 124)",
    "options": [
      "0xDF",
      "0x1BE",
      "0xEF",
      "0xDA"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 93? (Set 105) (Set 125)",
    "options": [
      "1011101",
      "1011100",
      "1101001",
      "1100000"
    ],
    "answer": 0,
    "explanation": "93 divided successively by 2 yields binary 1011101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 153? (Set 126)",
    "options": [
      "0x132",
      "0x99",
      "0x94",
      "0xA9"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x99."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 183? (Set 127)",
    "options": [
      "0xB2",
      "0xB7",
      "0x16E",
      "0xC7"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 128)",
    "options": [
      "0xF3",
      "0x103",
      "0x1E6",
      "0xEE"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 188? (Set 129)",
    "options": [
      "0xCC",
      "0x178",
      "0xBC",
      "0xB7"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBC."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 120? (Set 130)",
    "options": [
      "1110111",
      "1111011",
      "1111000",
      "10000100"
    ],
    "answer": 2,
    "explanation": "120 divided successively by 2 yields binary 1111000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 228? (Set 69) (Set 131)",
    "options": [
      "0xDF",
      "0xE4",
      "0xF4",
      "0x1C8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 210? (Set 132)",
    "options": [
      "0x1A4",
      "0xE2",
      "0xD2",
      "0xCD"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 64? (Set 133)",
    "options": [
      "0x3B",
      "0x40",
      "0x80",
      "0x50"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x40."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 208? (Set 134)",
    "options": [
      "0x1A0",
      "0xCB",
      "0xD0",
      "0xE0"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD0."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 98? (Set 135)",
    "options": [
      "1100010",
      "1101110",
      "1100101",
      "1100001"
    ],
    "answer": 0,
    "explanation": "98 divided successively by 2 yields binary 1100010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 80? (Set 110) (Set 136)",
    "options": [
      "1011100",
      "1010011",
      "1001111",
      "1010000"
    ],
    "answer": 3,
    "explanation": "80 divided successively by 2 yields binary 1010000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 137)",
    "options": [
      "100101",
      "11000",
      "11100",
      "11001"
    ],
    "answer": 3,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 242? (Set 39) (Set 138)",
    "options": [
      "0xF2",
      "0xED",
      "0x102",
      "0x1E4"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 218? (Set 139)",
    "options": [
      "0xDA",
      "0x1B4",
      "0xEA",
      "0xD5"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDA."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 104? (Set 140)",
    "options": [
      "1101011",
      "1101000",
      "1100111",
      "1110100"
    ],
    "answer": 1,
    "explanation": "104 divided successively by 2 yields binary 1101000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 191? (Set 141)",
    "options": [
      "0xBA",
      "0xCF",
      "0x17E",
      "0xBF"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 26? (Set 67) (Set 142)",
    "options": [
      "11101",
      "11010",
      "11001",
      "100110"
    ],
    "answer": 1,
    "explanation": "26 divided successively by 2 yields binary 11010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 53? (Set 143)",
    "options": [
      "1000001",
      "110101",
      "110100",
      "111000"
    ],
    "answer": 1,
    "explanation": "53 divided successively by 2 yields binary 110101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 164? (Set 144)",
    "options": [
      "0xA4",
      "0x148",
      "0xB4",
      "0x9F"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 213? (Set 145)",
    "options": [
      "0xD5",
      "0xE5",
      "0x1AA",
      "0xD0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD5."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 124? (Set 146)",
    "options": [
      "10001000",
      "1111011",
      "1111111",
      "1111100"
    ],
    "answer": 3,
    "explanation": "124 divided successively by 2 yields binary 1111100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 63? (Set 147)",
    "options": [
      "0x4F",
      "0x3F",
      "0x7E",
      "0x3A"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 92? (Set 148)",
    "options": [
      "0x5C",
      "0x6C",
      "0xB8",
      "0x57"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 22? (Set 149)",
    "options": [
      "10101",
      "10110",
      "100010",
      "11001"
    ],
    "answer": 1,
    "explanation": "22 divided successively by 2 yields binary 10110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 78? (Set 150)",
    "options": [
      "1001110",
      "1011010",
      "1010001",
      "1001101"
    ],
    "answer": 0,
    "explanation": "78 divided successively by 2 yields binary 1001110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 125? (Set 151)",
    "options": [
      "1111101",
      "1111100",
      "10001001",
      "10000000"
    ],
    "answer": 0,
    "explanation": "125 divided successively by 2 yields binary 1111101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 131? (Set 152)",
    "options": [
      "0x106",
      "0x93",
      "0x7E",
      "0x83"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x83."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 58? (Set 153)",
    "options": [
      "111010",
      "1000110",
      "111101",
      "111001"
    ],
    "answer": 0,
    "explanation": "58 divided successively by 2 yields binary 111010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 143? (Set 154)",
    "options": [
      "0x8A",
      "0x8F",
      "0x11E",
      "0x9F"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 128) (Set 155)",
    "options": [
      "0xEE",
      "0x1E6",
      "0xF3",
      "0x103"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 242? (Set 39) (Set 138) (Set 156)",
    "options": [
      "0x102",
      "0x1E4",
      "0xF2",
      "0xED"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 17? (Set 157)",
    "options": [
      "10001",
      "10100",
      "10000",
      "11101"
    ],
    "answer": 0,
    "explanation": "17 divided successively by 2 yields binary 10001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 116? (Set 158)",
    "options": [
      "0x84",
      "0x74",
      "0x6F",
      "0xE8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x74."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 22? (Set 149) (Set 159)",
    "options": [
      "10101",
      "100010",
      "11001",
      "10110"
    ],
    "answer": 3,
    "explanation": "22 divided successively by 2 yields binary 10110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 204? (Set 160)",
    "options": [
      "0xCC",
      "0x198",
      "0xC7",
      "0xDC"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 187? (Set 161)",
    "options": [
      "0xB6",
      "0xCB",
      "0x176",
      "0xBB"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBB."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 115? (Set 162)",
    "options": [
      "0x6E",
      "0xE6",
      "0x83",
      "0x73"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x73."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 13? (Set 163)",
    "options": [
      "11001",
      "1100",
      "1101",
      "10000"
    ],
    "answer": 2,
    "explanation": "13 divided successively by 2 yields binary 1101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 40) (Set 164)",
    "options": [
      "0xD8",
      "0x1B0",
      "0xE8",
      "0xD3"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 120? (Set 165)",
    "options": [
      "0x73",
      "0x78",
      "0xF0",
      "0x88"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x78."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 104? (Set 166)",
    "options": [
      "0x68",
      "0x63",
      "0x78",
      "0xD0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x68."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 128) (Set 167)",
    "options": [
      "0x1E6",
      "0xEE",
      "0x103",
      "0xF3"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 85? (Set 168)",
    "options": [
      "0xAA",
      "0x55",
      "0x50",
      "0x65"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x55."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 110? (Set 169)",
    "options": [
      "1101110",
      "1111010",
      "1110001",
      "1101101"
    ],
    "answer": 0,
    "explanation": "110 divided successively by 2 yields binary 1101110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 156? (Set 53) (Set 170)",
    "options": [
      "0xAC",
      "0x138",
      "0x9C",
      "0x97"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 130? (Set 171)",
    "options": [
      "0x104",
      "0x82",
      "0x7D",
      "0x92"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x82."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 65? (Set 172)",
    "options": [
      "1000100",
      "1001101",
      "1000000",
      "1000001"
    ],
    "answer": 3,
    "explanation": "65 divided successively by 2 yields binary 1000001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 124? (Set 173)",
    "options": [
      "10001000",
      "1111011",
      "1111111",
      "1111100"
    ],
    "answer": 3,
    "explanation": "124 divided successively by 2 yields binary 1111100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 228? (Set 69) (Set 131) (Set 174)",
    "options": [
      "0xE4",
      "0xF4",
      "0x1C8",
      "0xDF"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 129? (Set 175)",
    "options": [
      "0x102",
      "0x91",
      "0x7C",
      "0x81"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x81."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 116? (Set 176)",
    "options": [
      "1110111",
      "10000000",
      "1110100",
      "1110011"
    ],
    "answer": 2,
    "explanation": "116 divided successively by 2 yields binary 1110100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 71? (Set 52) (Set 177)",
    "options": [
      "1000111",
      "1010011",
      "1001010",
      "1000110"
    ],
    "answer": 0,
    "explanation": "71 divided successively by 2 yields binary 1000111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 65? (Set 178)",
    "options": [
      "1001101",
      "1000001",
      "1000100",
      "1000000"
    ],
    "answer": 1,
    "explanation": "65 divided successively by 2 yields binary 1000001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 162? (Set 64) (Set 179)",
    "options": [
      "0x9D",
      "0xB2",
      "0xA2",
      "0x144"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA2."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Which component of CPU performs calculations like addition and logic checks? (Set 180)",
    "options": [
      "Registers (commonly used)",
      "ALU (Arithmetic Logic Unit)",
      "Cache (standard definition)",
      "Control Unit (primary approach)"
    ],
    "answer": 1,
    "explanation": "ALU handles math and logical operations."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 244? (Set 181)",
    "options": [
      "0xEF",
      "0x104",
      "0x1E8",
      "0xF4"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223? (Set 77) (Set 124) (Set 182)",
    "options": [
      "0xDA",
      "0xDF",
      "0xEF",
      "0x1BE"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 10? (Set 183)",
    "options": [
      "10110",
      "1010",
      "1001",
      "1101"
    ],
    "answer": 1,
    "explanation": "10 divided successively by 2 yields binary 1010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 214? (Set 184)",
    "options": [
      "0x1AC",
      "0xD6",
      "0xE6",
      "0xD1"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD6."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 103? (Set 185)",
    "options": [
      "1110011",
      "1101010",
      "1100110",
      "1100111"
    ],
    "answer": 3,
    "explanation": "103 divided successively by 2 yields binary 1100111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 247? (Set 186)",
    "options": [
      "0xF7",
      "0xF2",
      "0x107",
      "0x1EE"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 36) (Set 187)",
    "options": [
      "0x1B0",
      "0xD3",
      "0xD8",
      "0xE8"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 244? (Set 181) (Set 188)",
    "options": [
      "0x104",
      "0x1E8",
      "0xF4",
      "0xEF"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF4."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 75? (Set 189)",
    "options": [
      "1010111",
      "1001010",
      "1001011",
      "1001110"
    ],
    "answer": 2,
    "explanation": "75 divided successively by 2 yields binary 1001011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 43? (Set 190)",
    "options": [
      "101011",
      "101110",
      "110111",
      "101010"
    ],
    "answer": 0,
    "explanation": "43 divided successively by 2 yields binary 101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 156? (Set 53) (Set 191)",
    "options": [
      "0x97",
      "0x9C",
      "0xAC",
      "0x138"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 147? (Set 192)",
    "options": [
      "0x126",
      "0x8E",
      "0x93",
      "0xA3"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x93."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 123? (Set 193)",
    "options": [
      "1111010",
      "1111011",
      "10000111",
      "1111110"
    ],
    "answer": 1,
    "explanation": "123 divided successively by 2 yields binary 1111011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 36) (Set 123) (Set 194)",
    "options": [
      "0xD8",
      "0xE8",
      "0x1B0",
      "0xD3"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 65? (Set 172) (Set 195)",
    "options": [
      "1000100",
      "1000000",
      "1001101",
      "1000001"
    ],
    "answer": 3,
    "explanation": "65 divided successively by 2 yields binary 1000001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 89? (Set 196)",
    "options": [
      "0xB2",
      "0x54",
      "0x59",
      "0x69"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x59."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "What does the Program Counter (PC) store? (Set 30) (Set 197)",
    "options": [
      "Result of last calculation as per specification",
      "Address of the next instruction to be fetched",
      "Current instruction value based on convention",
      "Address of accumulator (typical scenario)"
    ],
    "answer": 1,
    "explanation": "PC tracks execution flow."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 76? (Set 70) (Set 198)",
    "options": [
      "0x5C",
      "0x4C",
      "0x47",
      "0x98"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 115? (Set 162) (Set 199)",
    "options": [
      "0x73",
      "0x83",
      "0xE6",
      "0x6E"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x73."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 210? (Set 200)",
    "options": [
      "0xD2",
      "0xE2",
      "0x1A4",
      "0xCD"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 22? (Set 201)",
    "options": [
      "10101",
      "11001",
      "10110",
      "100010"
    ],
    "answer": 2,
    "explanation": "22 divided successively by 2 yields binary 10110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 20? (Set 202)",
    "options": [
      "100000",
      "10111",
      "10011",
      "10100"
    ],
    "answer": 3,
    "explanation": "20 divided successively by 2 yields binary 10100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 150? (Set 203)",
    "options": [
      "0x96",
      "0xA6",
      "0x12C",
      "0x91"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x96."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 242? (Set 39) (Set 204)",
    "options": [
      "0xF2",
      "0x1E4",
      "0xED",
      "0x102"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 183? (Set 127) (Set 205)",
    "options": [
      "0xB7",
      "0x16E",
      "0xC7",
      "0xB2"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 168? (Set 206)",
    "options": [
      "0xA8",
      "0x150",
      "0xB8",
      "0xA3"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 107? (Set 207)",
    "options": [
      "1101110",
      "1110111",
      "1101010",
      "1101011"
    ],
    "answer": 3,
    "explanation": "107 divided successively by 2 yields binary 1101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 221? (Set 208)",
    "options": [
      "0xD8",
      "0xED",
      "0xDD",
      "0x1BA"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDD."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 99? (Set 209)",
    "options": [
      "1100011",
      "1100010",
      "1100110",
      "1101111"
    ],
    "answer": 0,
    "explanation": "99 divided successively by 2 yields binary 1100011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 95? (Set 109) (Set 210)",
    "options": [
      "0x5A",
      "0xBE",
      "0x5F",
      "0x6F"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 235? (Set 116) (Set 211)",
    "options": [
      "0x1D6",
      "0xEB",
      "0xE6",
      "0xFB"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEB."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 57? (Set 46) (Set 212)",
    "options": [
      "111100",
      "111000",
      "1000101",
      "111001"
    ],
    "answer": 3,
    "explanation": "57 divided successively by 2 yields binary 111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 121? (Set 11) (Set 213)",
    "options": [
      "10000101",
      "1111100",
      "1111001",
      "1111000"
    ],
    "answer": 2,
    "explanation": "121 divided successively by 2 yields binary 1111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 48? (Set 214)",
    "options": [
      "110000",
      "110011",
      "101111",
      "111100"
    ],
    "answer": 0,
    "explanation": "48 divided successively by 2 yields binary 110000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 97? (Set 215)",
    "options": [
      "0xC2",
      "0x61",
      "0x5C",
      "0x71"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x61."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 65? (Set 216)",
    "options": [
      "0x51",
      "0x41",
      "0x82",
      "0x3C"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x41."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 31? (Set 217)",
    "options": [
      "100010",
      "11111",
      "101011",
      "11110"
    ],
    "answer": 1,
    "explanation": "31 divided successively by 2 yields binary 11111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 157? (Set 218)",
    "options": [
      "0x98",
      "0x13A",
      "0x9D",
      "0xAD"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 177? (Set 219)",
    "options": [
      "0x162",
      "0xB1",
      "0xAC",
      "0xC1"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 176? (Set 220)",
    "options": [
      "0xC0",
      "0xAB",
      "0xB0",
      "0x160"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB0."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 97? (Set 221)",
    "options": [
      "1101101",
      "1100000",
      "1100001",
      "1100100"
    ],
    "answer": 2,
    "explanation": "97 divided successively by 2 yields binary 1100001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 67? (Set 32) (Set 222)",
    "options": [
      "1000110",
      "1001111",
      "1000010",
      "1000011"
    ],
    "answer": 3,
    "explanation": "67 divided successively by 2 yields binary 1000011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 163? (Set 223)",
    "options": [
      "0x9E",
      "0xA3",
      "0x146",
      "0xB3"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 154? (Set 224)",
    "options": [
      "0x9A",
      "0xAA",
      "0x95",
      "0x134"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9A."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 26? (Set 225)",
    "options": [
      "11101",
      "11001",
      "100110",
      "11010"
    ],
    "answer": 3,
    "explanation": "26 divided successively by 2 yields binary 11010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 213? (Set 226)",
    "options": [
      "0x1AA",
      "0xE5",
      "0xD0",
      "0xD5"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD5."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 224? (Set 227)",
    "options": [
      "0xF0",
      "0xE0",
      "0xDB",
      "0x1C0"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE0."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 109? (Set 228)",
    "options": [
      "1111001",
      "1110000",
      "1101100",
      "1101101"
    ],
    "answer": 3,
    "explanation": "109 divided successively by 2 yields binary 1101101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 123? (Set 229)",
    "options": [
      "10000111",
      "1111110",
      "1111010",
      "1111011"
    ],
    "answer": 3,
    "explanation": "123 divided successively by 2 yields binary 1111011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 212? (Set 230)",
    "options": [
      "0xE4",
      "0x1A8",
      "0xD4",
      "0xCF"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 248? (Set 231)",
    "options": [
      "0xF3",
      "0x108",
      "0xF8",
      "0x1F0"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 121? (Set 11) (Set 232)",
    "options": [
      "1111001",
      "1111000",
      "10000101",
      "1111100"
    ],
    "answer": 0,
    "explanation": "121 divided successively by 2 yields binary 1111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 44? (Set 233)",
    "options": [
      "101011",
      "101111",
      "101100",
      "111000"
    ],
    "answer": 2,
    "explanation": "44 divided successively by 2 yields binary 101100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 51? (Set 51) (Set 234)",
    "options": [
      "0x2E",
      "0x66",
      "0x43",
      "0x33"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x33."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 152? (Set 235)",
    "options": [
      "0x98",
      "0x130",
      "0xA8",
      "0x93"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x98."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 142? (Set 236)",
    "options": [
      "0x11C",
      "0x9E",
      "0x8E",
      "0x89"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8E."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 128? (Set 237)",
    "options": [
      "10000000",
      "1111111",
      "10001100",
      "10000011"
    ],
    "answer": 0,
    "explanation": "128 divided successively by 2 yields binary 10000000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 64? (Set 63) (Set 238)",
    "options": [
      "1001100",
      "1000011",
      "111111",
      "1000000"
    ],
    "answer": 3,
    "explanation": "64 divided successively by 2 yields binary 1000000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 166? (Set 239)",
    "options": [
      "0x14C",
      "0xB6",
      "0xA6",
      "0xA1"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA6."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 19? (Set 240)",
    "options": [
      "10110",
      "10011",
      "10010",
      "11111"
    ],
    "answer": 1,
    "explanation": "19 divided successively by 2 yields binary 10011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 162? (Set 64) (Set 241)",
    "options": [
      "0x144",
      "0x9D",
      "0xA2",
      "0xB2"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 242)",
    "options": [
      "0x1E6",
      "0xEE",
      "0xF3",
      "0x103"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 103? (Set 185) (Set 243)",
    "options": [
      "1100110",
      "1101010",
      "1110011",
      "1100111"
    ],
    "answer": 3,
    "explanation": "103 divided successively by 2 yields binary 1100111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 40) (Set 164) (Set 244)",
    "options": [
      "0xD8",
      "0xE8",
      "0xD3",
      "0x1B0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 68? (Set 245)",
    "options": [
      "0x3F",
      "0x44",
      "0x54",
      "0x88"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x44."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 73? (Set 246)",
    "options": [
      "0x59",
      "0x49",
      "0x44",
      "0x92"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x49."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 110? (Set 247)",
    "options": [
      "1101110",
      "1111010",
      "1101101",
      "1110001"
    ],
    "answer": 0,
    "explanation": "110 divided successively by 2 yields binary 1101110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 197? (Set 248)",
    "options": [
      "0xD5",
      "0x18A",
      "0xC5",
      "0xC0"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC5."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 27) (Set 249)",
    "options": [
      "11001",
      "100101",
      "11100",
      "11000"
    ],
    "answer": 0,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 193? (Set 250)",
    "options": [
      "0xC1",
      "0xD1",
      "0xBC",
      "0x182"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 120? (Set 165) (Set 251)",
    "options": [
      "0xF0",
      "0x78",
      "0x73",
      "0x88"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x78."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 89? (Set 252)",
    "options": [
      "1011100",
      "1011000",
      "1011001",
      "1100101"
    ],
    "answer": 2,
    "explanation": "89 divided successively by 2 yields binary 1011001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 108? (Set 253)",
    "options": [
      "0x6C",
      "0x7C",
      "0x67",
      "0xD8"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 158? (Set 254)",
    "options": [
      "0xAE",
      "0x13C",
      "0x99",
      "0x9E"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9E."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 96? (Set 255)",
    "options": [
      "1101100",
      "1100000",
      "1100011",
      "1011111"
    ],
    "answer": 1,
    "explanation": "96 divided successively by 2 yields binary 1100000."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Cache hit ratio is defined as? (Set 256)",
    "options": [
      "Misses / Total Memory",
      "Hits / (Hits + Misses)",
      "Misses / Hits (general case)",
      "Hits / Total Memory"
    ],
    "answer": 1,
    "explanation": "Hit ratio measures cache effectiveness."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 79? (Set 71) (Set 257)",
    "options": [
      "0x5F",
      "0x4F",
      "0x9E",
      "0x4A"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 150? (Set 258)",
    "options": [
      "0x96",
      "0x91",
      "0x12C",
      "0xA6"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x96."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 228? (Set 69) (Set 259)",
    "options": [
      "0xF4",
      "0xDF",
      "0x1C8",
      "0xE4"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 148? (Set 260)",
    "options": [
      "0x128",
      "0xA4",
      "0x94",
      "0x8F"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x94."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "DMA stands for? (Set 261)",
    "options": [
      "Dual Memory Access",
      "Direct Memory Access",
      "Direct Method Address",
      "Dynamic Memory Allocation"
    ],
    "answer": 1,
    "explanation": "DMA bypasses CPU for bulk data transfers between I/O and RAM."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 121? (Set 88) (Set 262)",
    "options": [
      "1111001",
      "1111000",
      "1111100",
      "10000101"
    ],
    "answer": 0,
    "explanation": "121 divided successively by 2 yields binary 1111001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 199? (Set 263)",
    "options": [
      "0xC2",
      "0xD7",
      "0x18E",
      "0xC7"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 62? (Set 31) (Set 264)",
    "options": [
      "0x7C",
      "0x4E",
      "0x3E",
      "0x39"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 125? (Set 120) (Set 265)",
    "options": [
      "0x7D",
      "0x78",
      "0x8D",
      "0xFA"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7D."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 55? (Set 60) (Set 266)",
    "options": [
      "111010",
      "1000011",
      "110110",
      "110111"
    ],
    "answer": 3,
    "explanation": "55 divided successively by 2 yields binary 110111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 51? (Set 267)",
    "options": [
      "0x66",
      "0x2E",
      "0x43",
      "0x33"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x33."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 85? (Set 168) (Set 268)",
    "options": [
      "0x55",
      "0x50",
      "0xAA",
      "0x65"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x55."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 269)",
    "options": [
      "0xF3",
      "0xEE",
      "0x1E6",
      "0x103"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 242? (Set 270)",
    "options": [
      "0xED",
      "0x102",
      "0xF2",
      "0x1E4"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 203? (Set 4) (Set 271)",
    "options": [
      "0xC6",
      "0xCB",
      "0xDB",
      "0x196"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCB."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 107? (Set 272)",
    "options": [
      "0xD6",
      "0x6B",
      "0x7B",
      "0x66"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6B."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 134? (Set 273)",
    "options": [
      "0x96",
      "0x81",
      "0x86",
      "0x10C"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x86."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 57? (Set 102) (Set 274)",
    "options": [
      "111000",
      "111001",
      "1000101",
      "111100"
    ],
    "answer": 1,
    "explanation": "57 divided successively by 2 yields binary 111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 10? (Set 275)",
    "options": [
      "1001",
      "1101",
      "10110",
      "1010"
    ],
    "answer": 3,
    "explanation": "10 divided successively by 2 yields binary 1010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 50? (Set 276)",
    "options": [
      "110101",
      "110010",
      "111110",
      "110001"
    ],
    "answer": 1,
    "explanation": "50 divided successively by 2 yields binary 110010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 152? (Set 277)",
    "options": [
      "0x93",
      "0xA8",
      "0x98",
      "0x130"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x98."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 278)",
    "options": [
      "0x103",
      "0xEE",
      "0x1E6",
      "0xF3"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 191? (Set 141) (Set 279)",
    "options": [
      "0xBA",
      "0xCF",
      "0xBF",
      "0x17E"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 116? (Set 176) (Set 280)",
    "options": [
      "1110100",
      "10000000",
      "1110011",
      "1110111"
    ],
    "answer": 0,
    "explanation": "116 divided successively by 2 yields binary 1110100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 101? (Set 281)",
    "options": [
      "0x65",
      "0x75",
      "0xCA",
      "0x60"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x65."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 54? (Set 74) (Set 282)",
    "options": [
      "110101",
      "110110",
      "1000010",
      "111001"
    ],
    "answer": 1,
    "explanation": "54 divided successively by 2 yields binary 110110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 204? (Set 283)",
    "options": [
      "0xDC",
      "0x198",
      "0xCC",
      "0xC7"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xCC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 118? (Set 73) (Set 284)",
    "options": [
      "0x71",
      "0x76",
      "0xEC",
      "0x86"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x76."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 98? (Set 285)",
    "options": [
      "1101110",
      "1100010",
      "1100001",
      "1100101"
    ],
    "answer": 1,
    "explanation": "98 divided successively by 2 yields binary 1100010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 124? (Set 89) (Set 286)",
    "options": [
      "0x8C",
      "0x77",
      "0xF8",
      "0x7C"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 109? (Set 287)",
    "options": [
      "1111001",
      "1110000",
      "1101101",
      "1101100"
    ],
    "answer": 2,
    "explanation": "109 divided successively by 2 yields binary 1101101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 102? (Set 288)",
    "options": [
      "0xCC",
      "0x76",
      "0x66",
      "0x61"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x66."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 17? (Set 289)",
    "options": [
      "11101",
      "10001",
      "10100",
      "10000"
    ],
    "answer": 1,
    "explanation": "17 divided successively by 2 yields binary 10001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 132? (Set 17) (Set 290)",
    "options": [
      "0x94",
      "0x84",
      "0x108",
      "0x7F"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x84."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 240? (Set 291)",
    "options": [
      "0x100",
      "0xF0",
      "0xEB",
      "0x1E0"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF0."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Which component of CPU performs calculations like addition and logic checks? (Set 180) (Set 292)",
    "options": [
      "Registers in most cases",
      "Control Unit (general case)",
      "ALU (Arithmetic Logic Unit)",
      "Cache (commonly used)"
    ],
    "answer": 2,
    "explanation": "ALU handles math and logical operations."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 148? (Set 293)",
    "options": [
      "0xA4",
      "0x8F",
      "0x94",
      "0x128"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x94."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 161? (Set 294)",
    "options": [
      "0xB1",
      "0x9C",
      "0xA1",
      "0x142"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 162? (Set 64) (Set 295)",
    "options": [
      "0xA2",
      "0x144",
      "0x9D",
      "0xB2"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 170? (Set 296)",
    "options": [
      "0x154",
      "0xBA",
      "0xA5",
      "0xAA"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAA."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 113? (Set 297)",
    "options": [
      "1110100",
      "1110000",
      "1110001",
      "1111101"
    ],
    "answer": 2,
    "explanation": "113 divided successively by 2 yields binary 1110001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 194? (Set 298)",
    "options": [
      "0xBD",
      "0xC2",
      "0x184",
      "0xD2"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 74? (Set 299)",
    "options": [
      "1001001",
      "1001010",
      "1001101",
      "1010110"
    ],
    "answer": 1,
    "explanation": "74 divided successively by 2 yields binary 1001010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 131? (Set 300)",
    "options": [
      "0x106",
      "0x7E",
      "0x93",
      "0x83"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x83."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 107? (Set 207) (Set 301)",
    "options": [
      "1101110",
      "1110111",
      "1101011",
      "1101010"
    ],
    "answer": 2,
    "explanation": "107 divided successively by 2 yields binary 1101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 191? (Set 302)",
    "options": [
      "0xBF",
      "0x17E",
      "0xBA",
      "0xCF"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBF."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "What is a pipeline hazard caused by branches called? (Set 303)",
    "options": [
      "Data Hazard",
      "Memory Hazard",
      "Control Hazard",
      "Structural Hazard"
    ],
    "answer": 2,
    "explanation": "Branching changes PC, requiring stalls or flush."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 77? (Set 10) (Set 304)",
    "options": [
      "1001100",
      "1010000",
      "1011001",
      "1001101"
    ],
    "answer": 3,
    "explanation": "77 divided successively by 2 yields binary 1001101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 101? (Set 305)",
    "options": [
      "0x65",
      "0x75",
      "0xCA",
      "0x60"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x65."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 75? (Set 306)",
    "options": [
      "0x5B",
      "0x46",
      "0x4B",
      "0x96"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4B."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 124? (Set 307)",
    "options": [
      "0x7C",
      "0xF8",
      "0x8C",
      "0x77"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 269) (Set 308)",
    "options": [
      "0x103",
      "0xEE",
      "0xF3",
      "0x1E6"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 269) (Set 308) (Set 309)",
    "options": [
      "0xEE",
      "0x1E6",
      "0x103",
      "0xF3"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 54? (Set 74) (Set 282) (Set 310)",
    "options": [
      "1000010",
      "110101",
      "111001",
      "110110"
    ],
    "answer": 3,
    "explanation": "54 divided successively by 2 yields binary 110110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 55? (Set 60) (Set 311)",
    "options": [
      "1000011",
      "111010",
      "110110",
      "110111"
    ],
    "answer": 3,
    "explanation": "55 divided successively by 2 yields binary 110111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 79? (Set 312)",
    "options": [
      "1001111",
      "1010010",
      "1011011",
      "1001110"
    ],
    "answer": 0,
    "explanation": "79 divided successively by 2 yields binary 1001111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 148? (Set 54) (Set 313)",
    "options": [
      "0x94",
      "0x8F",
      "0x128",
      "0xA4"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x94."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 87) (Set 101) (Set 314)",
    "options": [
      "11001",
      "100101",
      "11100",
      "11000"
    ],
    "answer": 0,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 221? (Set 84) (Set 315)",
    "options": [
      "0xDD",
      "0xED",
      "0x1BA",
      "0xD8"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDD."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 82? (Set 316)",
    "options": [
      "0x52",
      "0xA4",
      "0x4D",
      "0x62"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x52."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 143? (Set 154) (Set 317)",
    "options": [
      "0x8F",
      "0x8A",
      "0x9F",
      "0x11E"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 67? (Set 318)",
    "options": [
      "0x3E",
      "0x86",
      "0x43",
      "0x53"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x43."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 113? (Set 319)",
    "options": [
      "1110001",
      "1110000",
      "1111101",
      "1110100"
    ],
    "answer": 0,
    "explanation": "113 divided successively by 2 yields binary 1110001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 43? (Set 3) (Set 320)",
    "options": [
      "101011",
      "101010",
      "101110",
      "110111"
    ],
    "answer": 0,
    "explanation": "43 divided successively by 2 yields binary 101011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 34? (Set 321)",
    "options": [
      "100010",
      "100001",
      "100101",
      "101110"
    ],
    "answer": 0,
    "explanation": "34 divided successively by 2 yields binary 100010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 237? (Set 322)",
    "options": [
      "0xFD",
      "0xE8",
      "0x1DA",
      "0xED"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xED."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 40? (Set 323)",
    "options": [
      "100111",
      "101011",
      "101000",
      "110100"
    ],
    "answer": 2,
    "explanation": "40 divided successively by 2 yields binary 101000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 234? (Set 324)",
    "options": [
      "0x1D4",
      "0xE5",
      "0xFA",
      "0xEA"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEA."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 87) (Set 101) (Set 314) (Set 325)",
    "options": [
      "11001",
      "11000",
      "100101",
      "11100"
    ],
    "answer": 0,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 103? (Set 326)",
    "options": [
      "0x62",
      "0x67",
      "0xCE",
      "0x77"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x67."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 23? (Set 327)",
    "options": [
      "11010",
      "10110",
      "100011",
      "10111"
    ],
    "answer": 3,
    "explanation": "23 divided successively by 2 yields binary 10111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 154? (Set 328)",
    "options": [
      "0x134",
      "0xAA",
      "0x95",
      "0x9A"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9A."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 102? (Set 288) (Set 329)",
    "options": [
      "0x76",
      "0x66",
      "0x61",
      "0xCC"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x66."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 10? (Set 275) (Set 330)",
    "options": [
      "1010",
      "1001",
      "10110",
      "1101"
    ],
    "answer": 0,
    "explanation": "10 divided successively by 2 yields binary 1010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 118? (Set 57) (Set 331)",
    "options": [
      "1110110",
      "1110101",
      "10000010",
      "1111001"
    ],
    "answer": 0,
    "explanation": "118 divided successively by 2 yields binary 1110110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 107? (Set 332)",
    "options": [
      "0x66",
      "0xD6",
      "0x7B",
      "0x6B"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6B."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 102? (Set 333)",
    "options": [
      "1100101",
      "1100110",
      "1101001",
      "1110010"
    ],
    "answer": 1,
    "explanation": "102 divided successively by 2 yields binary 1100110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 118? (Set 73) (Set 284) (Set 334)",
    "options": [
      "0x86",
      "0x71",
      "0x76",
      "0xEC"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x76."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 187? (Set 161) (Set 335)",
    "options": [
      "0xB6",
      "0x176",
      "0xCB",
      "0xBB"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBB."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 130? (Set 171) (Set 336)",
    "options": [
      "0x104",
      "0x92",
      "0x82",
      "0x7D"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x82."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 66? (Set 337)",
    "options": [
      "1001110",
      "1000101",
      "1000010",
      "1000001"
    ],
    "answer": 2,
    "explanation": "66 divided successively by 2 yields binary 1000010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 97? (Set 14) (Set 338)",
    "options": [
      "1100100",
      "1100001",
      "1101101",
      "1100000"
    ],
    "answer": 1,
    "explanation": "97 divided successively by 2 yields binary 1100001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 126? (Set 339)",
    "options": [
      "10000001",
      "1111101",
      "10001010",
      "1111110"
    ],
    "answer": 3,
    "explanation": "126 divided successively by 2 yields binary 1111110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 340)",
    "options": [
      "0xD3",
      "0x1B0",
      "0xD8",
      "0xE8"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 36) (Set 341)",
    "options": [
      "0xD3",
      "0xD8",
      "0x1B0",
      "0xE8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 51? (Set 51) (Set 342)",
    "options": [
      "0x33",
      "0x66",
      "0x2E",
      "0x43"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x33."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 103? (Set 343)",
    "options": [
      "1100110",
      "1101010",
      "1110011",
      "1100111"
    ],
    "answer": 3,
    "explanation": "103 divided successively by 2 yields binary 1100111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 244? (Set 90) (Set 344)",
    "options": [
      "0x104",
      "0xF4",
      "0xEF",
      "0x1E8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF4."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "What does the Program Counter (PC) store? (Set 345)",
    "options": [
      "Address of the next instruction to be fetched",
      "Current instruction value as per specification",
      "Address of accumulator (standard definition)",
      "Result of last calculation (commonly used)"
    ],
    "answer": 0,
    "explanation": "PC tracks execution flow."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 55? (Set 346)",
    "options": [
      "110111",
      "110110",
      "111010",
      "1000011"
    ],
    "answer": 0,
    "explanation": "55 divided successively by 2 yields binary 110111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 32? (Set 347)",
    "options": [
      "11111",
      "101100",
      "100000",
      "100011"
    ],
    "answer": 2,
    "explanation": "32 divided successively by 2 yields binary 100000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 269) (Set 348)",
    "options": [
      "0xEE",
      "0x1E6",
      "0xF3",
      "0x103"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 81) (Set 349)",
    "options": [
      "0xD3",
      "0xE8",
      "0xD8",
      "0x1B0"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195? (Set 41) (Set 350)",
    "options": [
      "0xD3",
      "0xC3",
      "0x186",
      "0xBE"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 218? (Set 139) (Set 351)",
    "options": [
      "0xD5",
      "0xEA",
      "0xDA",
      "0x1B4"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDA."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 124? (Set 352)",
    "options": [
      "0xF8",
      "0x7C",
      "0x77",
      "0x8C"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 74? (Set 353)",
    "options": [
      "1001101",
      "1010110",
      "1001010",
      "1001001"
    ],
    "answer": 2,
    "explanation": "74 divided successively by 2 yields binary 1001010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 24? (Set 85) (Set 354)",
    "options": [
      "11011",
      "10111",
      "11000",
      "100100"
    ],
    "answer": 2,
    "explanation": "24 divided successively by 2 yields binary 11000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 12? (Set 355)",
    "options": [
      "11000",
      "1111",
      "1011",
      "1100"
    ],
    "answer": 3,
    "explanation": "12 divided successively by 2 yields binary 1100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 110? (Set 356)",
    "options": [
      "0x69",
      "0x7E",
      "0xDC",
      "0x6E"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 143? (Set 154) (Set 357)",
    "options": [
      "0x8F",
      "0x9F",
      "0x11E",
      "0x8A"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 158? (Set 254) (Set 358)",
    "options": [
      "0x13C",
      "0xAE",
      "0x99",
      "0x9E"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 194? (Set 35) (Set 359)",
    "options": [
      "0xD2",
      "0x184",
      "0xC2",
      "0xBD"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 241? (Set 360)",
    "options": [
      "0xF1",
      "0x1E2",
      "0xEC",
      "0x101"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 154? (Set 224) (Set 361)",
    "options": [
      "0xAA",
      "0x95",
      "0x134",
      "0x9A"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9A."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 10? (Set 275) (Set 330) (Set 362)",
    "options": [
      "10110",
      "1010",
      "1101",
      "1001"
    ],
    "answer": 1,
    "explanation": "10 divided successively by 2 yields binary 1010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 75? (Set 189) (Set 363)",
    "options": [
      "1001110",
      "1001011",
      "1001010",
      "1010111"
    ],
    "answer": 1,
    "explanation": "75 divided successively by 2 yields binary 1001011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 48? (Set 364)",
    "options": [
      "111100",
      "110011",
      "101111",
      "110000"
    ],
    "answer": 3,
    "explanation": "48 divided successively by 2 yields binary 110000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 52? (Set 365)",
    "options": [
      "1000000",
      "110100",
      "110111",
      "110011"
    ],
    "answer": 1,
    "explanation": "52 divided successively by 2 yields binary 110100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 48? (Set 214) (Set 366)",
    "options": [
      "111100",
      "101111",
      "110000",
      "110011"
    ],
    "answer": 2,
    "explanation": "48 divided successively by 2 yields binary 110000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 85? (Set 168) (Set 367)",
    "options": [
      "0xAA",
      "0x50",
      "0x55",
      "0x65"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x55."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 194? (Set 43) (Set 368)",
    "options": [
      "0xBD",
      "0xD2",
      "0xC2",
      "0x184"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 190? (Set 369)",
    "options": [
      "0x17C",
      "0xBE",
      "0xB9",
      "0xCE"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBE."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 54? (Set 74) (Set 282) (Set 370)",
    "options": [
      "111001",
      "110101",
      "1000010",
      "110110"
    ],
    "answer": 3,
    "explanation": "54 divided successively by 2 yields binary 110110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 180? (Set 371)",
    "options": [
      "0xC4",
      "0x168",
      "0xB4",
      "0xAF"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB4."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 71? (Set 372)",
    "options": [
      "1001010",
      "1010011",
      "1000110",
      "1000111"
    ],
    "answer": 3,
    "explanation": "71 divided successively by 2 yields binary 1000111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 62? (Set 31) (Set 373)",
    "options": [
      "0x7C",
      "0x39",
      "0x3E",
      "0x4E"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 67? (Set 374)",
    "options": [
      "0x86",
      "0x43",
      "0x3E",
      "0x53"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x43."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 66? (Set 375)",
    "options": [
      "1000001",
      "1000010",
      "1001110",
      "1000101"
    ],
    "answer": 1,
    "explanation": "66 divided successively by 2 yields binary 1000010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 84? (Set 376)",
    "options": [
      "0xA8",
      "0x64",
      "0x54",
      "0x4F"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x54."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 172? (Set 377)",
    "options": [
      "0xA7",
      "0xBC",
      "0x158",
      "0xAC"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xAC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 188? (Set 378)",
    "options": [
      "0x178",
      "0xB7",
      "0xCC",
      "0xBC"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 249? (Set 379)",
    "options": [
      "0x109",
      "0xF9",
      "0x1F2",
      "0xF4"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 136? (Set 380)",
    "options": [
      "0x88",
      "0x83",
      "0x110",
      "0x98"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x88."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 22? (Set 149) (Set 381)",
    "options": [
      "11001",
      "10101",
      "10110",
      "100010"
    ],
    "answer": 2,
    "explanation": "22 divided successively by 2 yields binary 10110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 201? (Set 382)",
    "options": [
      "0xC4",
      "0xC9",
      "0xD9",
      "0x192"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 117? (Set 383)",
    "options": [
      "0x85",
      "0x75",
      "0x70",
      "0xEA"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x75."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 24? (Set 85) (Set 384)",
    "options": [
      "100100",
      "11011",
      "11000",
      "10111"
    ],
    "answer": 2,
    "explanation": "24 divided successively by 2 yields binary 11000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 231? (Set 385)",
    "options": [
      "0xF7",
      "0xE7",
      "0x1CE",
      "0xE2"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE7."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "Which cache mapping technique allows any block of memory to be placed anywhere in cache? (Set 19) (Set 386)",
    "options": [
      "Index Mapping (typical scenario)",
      "Fully Associative Mapping",
      "Set-Associative Mapping",
      "Direct Mapping (commonly used)"
    ],
    "answer": 1,
    "explanation": "Fully associative allows maximum flexibility but complex lookup."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 10? (Set 387)",
    "options": [
      "1001",
      "1010",
      "10110",
      "1101"
    ],
    "answer": 1,
    "explanation": "10 divided successively by 2 yields binary 1010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 214? (Set 388)",
    "options": [
      "0xE6",
      "0xD1",
      "0x1AC",
      "0xD6"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD6."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 94? (Set 58) (Set 389)",
    "options": [
      "1011101",
      "1100001",
      "1011110",
      "1101010"
    ],
    "answer": 2,
    "explanation": "94 divided successively by 2 yields binary 1011110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 103? (Set 185) (Set 243) (Set 390)",
    "options": [
      "1110011",
      "1100110",
      "1100111",
      "1101010"
    ],
    "answer": 2,
    "explanation": "103 divided successively by 2 yields binary 1100111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 100? (Set 391)",
    "options": [
      "0x74",
      "0x64",
      "0xC8",
      "0x5F"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x64."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 160? (Set 392)",
    "options": [
      "0xB0",
      "0xA0",
      "0x9B",
      "0x140"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA0."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 43? (Set 3) (Set 112) (Set 393)",
    "options": [
      "101110",
      "101011",
      "110111",
      "101010"
    ],
    "answer": 1,
    "explanation": "43 divided successively by 2 yields binary 101011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 128? (Set 394)",
    "options": [
      "1111111",
      "10001100",
      "10000000",
      "10000011"
    ],
    "answer": 2,
    "explanation": "128 divided successively by 2 yields binary 10000000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 168? (Set 395)",
    "options": [
      "0x150",
      "0xB8",
      "0xA3",
      "0xA8"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 235? (Set 396)",
    "options": [
      "0xEB",
      "0xE6",
      "0x1D6",
      "0xFB"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEB."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 126? (Set 397)",
    "options": [
      "0x8E",
      "0xFC",
      "0x79",
      "0x7E"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 247? (Set 398)",
    "options": [
      "0x107",
      "0x1EE",
      "0xF7",
      "0xF2"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 65? (Set 216) (Set 399)",
    "options": [
      "0x41",
      "0x3C",
      "0x51",
      "0x82"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x41."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 109? (Set 287) (Set 400)",
    "options": [
      "1111001",
      "1110000",
      "1101100",
      "1101101"
    ],
    "answer": 3,
    "explanation": "109 divided successively by 2 yields binary 1101101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 48? (Set 214) (Set 366) (Set 401)",
    "options": [
      "111100",
      "110000",
      "110011",
      "101111"
    ],
    "answer": 1,
    "explanation": "48 divided successively by 2 yields binary 110000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 128? (Set 394) (Set 402)",
    "options": [
      "10000000",
      "10001100",
      "1111111",
      "10000011"
    ],
    "answer": 0,
    "explanation": "128 divided successively by 2 yields binary 10000000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 191? (Set 403)",
    "options": [
      "0xBF",
      "0x17E",
      "0xBA",
      "0xCF"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 176? (Set 65) (Set 404)",
    "options": [
      "0x160",
      "0xC0",
      "0xAB",
      "0xB0"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223? (Set 405)",
    "options": [
      "0x1BE",
      "0xDA",
      "0xDF",
      "0xEF"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 215? (Set 406)",
    "options": [
      "0x1AE",
      "0xD7",
      "0xD2",
      "0xE7"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 51? (Set 51) (Set 407)",
    "options": [
      "0x2E",
      "0x43",
      "0x33",
      "0x66"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x33."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 242? (Set 39) (Set 138) (Set 408)",
    "options": [
      "0xF2",
      "0x102",
      "0x1E4",
      "0xED"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 104? (Set 140) (Set 409)",
    "options": [
      "1101000",
      "1100111",
      "1110100",
      "1101011"
    ],
    "answer": 0,
    "explanation": "104 divided successively by 2 yields binary 1101000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 107? (Set 410)",
    "options": [
      "0x6B",
      "0xD6",
      "0x7B",
      "0x66"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6B."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 89? (Set 411)",
    "options": [
      "1011001",
      "1011100",
      "1011000",
      "1100101"
    ],
    "answer": 0,
    "explanation": "89 divided successively by 2 yields binary 1011001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 228? (Set 69) (Set 131) (Set 412)",
    "options": [
      "0xE4",
      "0xF4",
      "0xDF",
      "0x1C8"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 40) (Set 164) (Set 244) (Set 413)",
    "options": [
      "0xE8",
      "0x1B0",
      "0xD8",
      "0xD3"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 77? (Set 10) (Set 304) (Set 414)",
    "options": [
      "1001101",
      "1011001",
      "1010000",
      "1001100"
    ],
    "answer": 0,
    "explanation": "77 divided successively by 2 yields binary 1001101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 26? (Set 225) (Set 415)",
    "options": [
      "100110",
      "11101",
      "11001",
      "11010"
    ],
    "answer": 3,
    "explanation": "26 divided successively by 2 yields binary 11010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 124? (Set 352) (Set 416)",
    "options": [
      "0x7C",
      "0x8C",
      "0xF8",
      "0x77"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 162? (Set 64) (Set 179) (Set 417)",
    "options": [
      "0x144",
      "0xB2",
      "0xA2",
      "0x9D"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 180? (Set 418)",
    "options": [
      "0xAF",
      "0xB4",
      "0xC4",
      "0x168"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB4."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 236? (Set 419)",
    "options": [
      "0xE7",
      "0xEC",
      "0xFC",
      "0x1D8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 237? (Set 322) (Set 420)",
    "options": [
      "0xE8",
      "0xFD",
      "0xED",
      "0x1DA"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xED."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 162? (Set 64) (Set 421)",
    "options": [
      "0xB2",
      "0x144",
      "0xA2",
      "0x9D"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 221? (Set 84) (Set 422)",
    "options": [
      "0xDD",
      "0x1BA",
      "0xD8",
      "0xED"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDD."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 208? (Set 423)",
    "options": [
      "0xD0",
      "0xCB",
      "0x1A0",
      "0xE0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 57? (Set 424)",
    "options": [
      "0x72",
      "0x39",
      "0x49",
      "0x34"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x39."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 144? (Set 425)",
    "options": [
      "0xA0",
      "0x90",
      "0x8B",
      "0x120"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x90."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 78? (Set 426)",
    "options": [
      "1010001",
      "1001110",
      "1011010",
      "1001101"
    ],
    "answer": 1,
    "explanation": "78 divided successively by 2 yields binary 1001110."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "CISC stands for? (Set 427)",
    "options": [
      "Compressed Instruction Segment Computer",
      "Core Integrated System Chip",
      "Complex Instruction Set Computer",
      "Central Instruction Storage Computer"
    ],
    "answer": 2,
    "explanation": "CISC uses complex, variable-length instructions."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 89? (Set 428)",
    "options": [
      "0x69",
      "0x54",
      "0x59",
      "0xB2"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x59."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 156? (Set 53) (Set 191) (Set 429)",
    "options": [
      "0x97",
      "0x9C",
      "0xAC",
      "0x138"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 96? (Set 430)",
    "options": [
      "1100011",
      "1011111",
      "1101100",
      "1100000"
    ],
    "answer": 3,
    "explanation": "96 divided successively by 2 yields binary 1100000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 208? (Set 134) (Set 431)",
    "options": [
      "0xCB",
      "0xE0",
      "0xD0",
      "0x1A0"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD0."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 109? (Set 287) (Set 400) (Set 432)",
    "options": [
      "1110000",
      "1101100",
      "1101101",
      "1111001"
    ],
    "answer": 2,
    "explanation": "109 divided successively by 2 yields binary 1101101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 36) (Set 187) (Set 433)",
    "options": [
      "0xE8",
      "0x1B0",
      "0xD8",
      "0xD3"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 156? (Set 434)",
    "options": [
      "0x9C",
      "0x97",
      "0x138",
      "0xAC"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 242? (Set 39) (Set 138) (Set 156) (Set 435)",
    "options": [
      "0xED",
      "0xF2",
      "0x102",
      "0x1E4"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF2."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Which component of CPU performs calculations like addition and logic checks? (Set 436)",
    "options": [
      "Registers (widely accepted)",
      "ALU (Arithmetic Logic Unit)",
      "Cache in standard usage",
      "Control Unit (primary approach)"
    ],
    "answer": 1,
    "explanation": "ALU handles math and logical operations."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 46? (Set 437)",
    "options": [
      "110001",
      "101110",
      "111010",
      "101101"
    ],
    "answer": 1,
    "explanation": "46 divided successively by 2 yields binary 101110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 201? (Set 97) (Set 438)",
    "options": [
      "0xC9",
      "0xC4",
      "0xD9",
      "0x192"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 221? (Set 439)",
    "options": [
      "0x1BA",
      "0xDD",
      "0xED",
      "0xD8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDD."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 81? (Set 440)",
    "options": [
      "0x61",
      "0x4C",
      "0xA2",
      "0x51"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x51."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "Which cache mapping technique allows any block of memory to be placed anywhere in cache? (Set 441)",
    "options": [
      "Direct Mapping (widely accepted)",
      "Index Mapping in practice",
      "Fully Associative Mapping",
      "Set-Associative Mapping"
    ],
    "answer": 2,
    "explanation": "Fully associative allows maximum flexibility but complex lookup."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 65? (Set 178) (Set 442)",
    "options": [
      "1000100",
      "1001101",
      "1000001",
      "1000000"
    ],
    "answer": 2,
    "explanation": "65 divided successively by 2 yields binary 1000001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 54? (Set 74) (Set 443)",
    "options": [
      "111001",
      "1000010",
      "110110",
      "110101"
    ],
    "answer": 2,
    "explanation": "54 divided successively by 2 yields binary 110110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 131? (Set 152) (Set 444)",
    "options": [
      "0x106",
      "0x93",
      "0x7E",
      "0x83"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x83."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 210? (Set 445)",
    "options": [
      "0x1A4",
      "0xCD",
      "0xE2",
      "0xD2"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 163? (Set 223) (Set 446)",
    "options": [
      "0x9E",
      "0x146",
      "0xB3",
      "0xA3"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 143? (Set 447)",
    "options": [
      "0x9F",
      "0x11E",
      "0x8A",
      "0x8F"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 67? (Set 374) (Set 448)",
    "options": [
      "0x86",
      "0x43",
      "0x3E",
      "0x53"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x43."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 118? (Set 449)",
    "options": [
      "0xEC",
      "0x71",
      "0x86",
      "0x76"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x76."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 99? (Set 209) (Set 450)",
    "options": [
      "1101111",
      "1100011",
      "1100010",
      "1100110"
    ],
    "answer": 1,
    "explanation": "99 divided successively by 2 yields binary 1100011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 20? (Set 202) (Set 451)",
    "options": [
      "10011",
      "100000",
      "10111",
      "10100"
    ],
    "answer": 3,
    "explanation": "20 divided successively by 2 yields binary 10100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 161? (Set 452)",
    "options": [
      "0x142",
      "0xA1",
      "0x9C",
      "0xB1"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA1."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 59? (Set 453)",
    "options": [
      "111110",
      "111011",
      "1000111",
      "111010"
    ],
    "answer": 1,
    "explanation": "59 divided successively by 2 yields binary 111011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 71? (Set 52) (Set 177) (Set 454)",
    "options": [
      "1000111",
      "1000110",
      "1010011",
      "1001010"
    ],
    "answer": 0,
    "explanation": "71 divided successively by 2 yields binary 1000111."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 46? (Set 455)",
    "options": [
      "110001",
      "111010",
      "101101",
      "101110"
    ],
    "answer": 3,
    "explanation": "46 divided successively by 2 yields binary 101110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 82? (Set 456)",
    "options": [
      "0xA4",
      "0x4D",
      "0x62",
      "0x52"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x52."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 102? (Set 288) (Set 457)",
    "options": [
      "0xCC",
      "0x66",
      "0x76",
      "0x61"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x66."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 121? (Set 88) (Set 262) (Set 458)",
    "options": [
      "1111100",
      "10000101",
      "1111000",
      "1111001"
    ],
    "answer": 3,
    "explanation": "121 divided successively by 2 yields binary 1111001."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "Pipelining increases CPU performance by? (Set 459)",
    "options": [
      "Reducing memory access time (widely accepted)",
      "Making instructions run faster individually",
      "Executing instructions in an overlapping manner",
      "Increasing CPU clock speed in typical implementations"
    ],
    "answer": 2,
    "explanation": "Pipelining parallelizes different stages of instruction processing."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 213? (Set 145) (Set 460)",
    "options": [
      "0x1AA",
      "0xD5",
      "0xD0",
      "0xE5"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD5."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 212? (Set 230) (Set 461)",
    "options": [
      "0x1A8",
      "0xCF",
      "0xD4",
      "0xE4"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD4."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 19? (Set 240) (Set 462)",
    "options": [
      "11111",
      "10010",
      "10011",
      "10110"
    ],
    "answer": 2,
    "explanation": "19 divided successively by 2 yields binary 10011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 79? (Set 71) (Set 257) (Set 463)",
    "options": [
      "0x4F",
      "0x5F",
      "0x4A",
      "0x9E"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 269) (Set 308) (Set 464)",
    "options": [
      "0xEE",
      "0xF3",
      "0x1E6",
      "0x103"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 109? (Set 465)",
    "options": [
      "0x6D",
      "0xDA",
      "0x68",
      "0x7D"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 144? (Set 466)",
    "options": [
      "0x90",
      "0x120",
      "0xA0",
      "0x8B"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x90."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 64? (Set 63) (Set 467)",
    "options": [
      "111111",
      "1000011",
      "1001100",
      "1000000"
    ],
    "answer": 3,
    "explanation": "64 divided successively by 2 yields binary 1000000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 52? (Set 468)",
    "options": [
      "0x2F",
      "0x34",
      "0x44",
      "0x68"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x34."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 81) (Set 349) (Set 469)",
    "options": [
      "0xD3",
      "0x1B0",
      "0xD8",
      "0xE8"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 87) (Set 470)",
    "options": [
      "11000",
      "11001",
      "11100",
      "100101"
    ],
    "answer": 1,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 102? (Set 288) (Set 471)",
    "options": [
      "0xCC",
      "0x76",
      "0x61",
      "0x66"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x66."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 31? (Set 217) (Set 472)",
    "options": [
      "11110",
      "100010",
      "101011",
      "11111"
    ],
    "answer": 3,
    "explanation": "31 divided successively by 2 yields binary 11111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 191? (Set 141) (Set 279) (Set 473)",
    "options": [
      "0x17E",
      "0xBA",
      "0xCF",
      "0xBF"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 62? (Set 31) (Set 474)",
    "options": [
      "0x39",
      "0x3E",
      "0x4E",
      "0x7C"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3E."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 87? (Set 475)",
    "options": [
      "1010110",
      "1100011",
      "1010111",
      "1011010"
    ],
    "answer": 2,
    "explanation": "87 divided successively by 2 yields binary 1010111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223? (Set 77) (Set 104) (Set 476)",
    "options": [
      "0x1BE",
      "0xDA",
      "0xDF",
      "0xEF"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 191? (Set 141) (Set 279) (Set 477)",
    "options": [
      "0x17E",
      "0xBA",
      "0xBF",
      "0xCF"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 224? (Set 227) (Set 478)",
    "options": [
      "0xDB",
      "0x1C0",
      "0xE0",
      "0xF0"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE0."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 98? (Set 135) (Set 479)",
    "options": [
      "1101110",
      "1100010",
      "1100001",
      "1100101"
    ],
    "answer": 1,
    "explanation": "98 divided successively by 2 yields binary 1100010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 125? (Set 120) (Set 480)",
    "options": [
      "0x8D",
      "0xFA",
      "0x7D",
      "0x78"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7D."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 92? (Set 481)",
    "options": [
      "1011011",
      "1011100",
      "1101000",
      "1011111"
    ],
    "answer": 1,
    "explanation": "92 divided successively by 2 yields binary 1011100."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 102? (Set 333) (Set 482)",
    "options": [
      "1101001",
      "1100110",
      "1110010",
      "1100101"
    ],
    "answer": 1,
    "explanation": "102 divided successively by 2 yields binary 1100110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 72? (Set 483)",
    "options": [
      "1000111",
      "1010100",
      "1001000",
      "1001011"
    ],
    "answer": 2,
    "explanation": "72 divided successively by 2 yields binary 1001000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 116? (Set 158) (Set 484)",
    "options": [
      "0xE8",
      "0x74",
      "0x6F",
      "0x84"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x74."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 236? (Set 419) (Set 485)",
    "options": [
      "0xFC",
      "0xE7",
      "0xEC",
      "0x1D8"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEC."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195? (Set 486)",
    "options": [
      "0xBE",
      "0x186",
      "0xD3",
      "0xC3"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 98? (Set 487)",
    "options": [
      "1101110",
      "1100101",
      "1100010",
      "1100001"
    ],
    "answer": 2,
    "explanation": "98 divided successively by 2 yields binary 1100010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 248? (Set 231) (Set 488)",
    "options": [
      "0x1F0",
      "0xF8",
      "0xF3",
      "0x108"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 78? (Set 426) (Set 489)",
    "options": [
      "1001101",
      "1011010",
      "1001110",
      "1010001"
    ],
    "answer": 2,
    "explanation": "78 divided successively by 2 yields binary 1001110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 32? (Set 490)",
    "options": [
      "100011",
      "101100",
      "100000",
      "11111"
    ],
    "answer": 2,
    "explanation": "32 divided successively by 2 yields binary 100000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 43? (Set 3) (Set 112) (Set 393) (Set 491)",
    "options": [
      "110111",
      "101110",
      "101010",
      "101011"
    ],
    "answer": 3,
    "explanation": "43 divided successively by 2 yields binary 101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 137? (Set 492)",
    "options": [
      "0x112",
      "0x84",
      "0x89",
      "0x99"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x89."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 224? (Set 227) (Set 478) (Set 493)",
    "options": [
      "0xF0",
      "0xDB",
      "0x1C0",
      "0xE0"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 159? (Set 122) (Set 494)",
    "options": [
      "0x13E",
      "0x9A",
      "0x9F",
      "0xAF"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 108? (Set 253) (Set 495)",
    "options": [
      "0x7C",
      "0x67",
      "0x6C",
      "0xD8"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 109? (Set 287) (Set 400) (Set 496)",
    "options": [
      "1101100",
      "1111001",
      "1101101",
      "1110000"
    ],
    "answer": 2,
    "explanation": "109 divided successively by 2 yields binary 1101101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 194? (Set 35) (Set 359) (Set 497)",
    "options": [
      "0xBD",
      "0xC2",
      "0xD2",
      "0x184"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 99? (Set 498)",
    "options": [
      "0x5E",
      "0x73",
      "0x63",
      "0xC6"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x63."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 180? (Set 371) (Set 499)",
    "options": [
      "0xAF",
      "0x168",
      "0xC4",
      "0xB4"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB4."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 19? (Set 12) (Set 500)",
    "options": [
      "10011",
      "11111",
      "10110",
      "10010"
    ],
    "answer": 0,
    "explanation": "19 divided successively by 2 yields binary 10011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 88? (Set 501)",
    "options": [
      "1010111",
      "1100100",
      "1011011",
      "1011000"
    ],
    "answer": 3,
    "explanation": "88 divided successively by 2 yields binary 1011000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 76? (Set 502)",
    "options": [
      "0x5C",
      "0x47",
      "0x98",
      "0x4C"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 132? (Set 17) (Set 290) (Set 503)",
    "options": [
      "0x7F",
      "0x108",
      "0x94",
      "0x84"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x84."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 108? (Set 253) (Set 495) (Set 504)",
    "options": [
      "0x6C",
      "0x67",
      "0xD8",
      "0x7C"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 66? (Set 375) (Set 505)",
    "options": [
      "1000010",
      "1001110",
      "1000001",
      "1000101"
    ],
    "answer": 0,
    "explanation": "66 divided successively by 2 yields binary 1000010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 240? (Set 291) (Set 506)",
    "options": [
      "0x100",
      "0xEB",
      "0xF0",
      "0x1E0"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF0."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 22? (Set 149) (Set 507)",
    "options": [
      "11001",
      "100010",
      "10101",
      "10110"
    ],
    "answer": 3,
    "explanation": "22 divided successively by 2 yields binary 10110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 22? (Set 201) (Set 508)",
    "options": [
      "10110",
      "10101",
      "11001",
      "100010"
    ],
    "answer": 0,
    "explanation": "22 divided successively by 2 yields binary 10110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 79? (Set 509)",
    "options": [
      "0x5F",
      "0x9E",
      "0x4A",
      "0x4F"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 234? (Set 324) (Set 510)",
    "options": [
      "0xEA",
      "0xE5",
      "0x1D4",
      "0xFA"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEA."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 117? (Set 511)",
    "options": [
      "0x75",
      "0x85",
      "0xEA",
      "0x70"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x75."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 10? (Set 387) (Set 512)",
    "options": [
      "1101",
      "1001",
      "10110",
      "1010"
    ],
    "answer": 3,
    "explanation": "10 divided successively by 2 yields binary 1010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 244? (Set 90) (Set 513)",
    "options": [
      "0x104",
      "0xEF",
      "0xF4",
      "0x1E8"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF4."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 40? (Set 514)",
    "options": [
      "100111",
      "101011",
      "101000",
      "110100"
    ],
    "answer": 2,
    "explanation": "40 divided successively by 2 yields binary 101000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 43? (Set 190) (Set 515)",
    "options": [
      "101110",
      "101011",
      "101010",
      "110111"
    ],
    "answer": 1,
    "explanation": "43 divided successively by 2 yields binary 101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223? (Set 405) (Set 516)",
    "options": [
      "0xEF",
      "0xDA",
      "0xDF",
      "0x1BE"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 78? (Set 150) (Set 517)",
    "options": [
      "1001110",
      "1001101",
      "1010001",
      "1011010"
    ],
    "answer": 0,
    "explanation": "78 divided successively by 2 yields binary 1001110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 194? (Set 35) (Set 359) (Set 497) (Set 518)",
    "options": [
      "0xC2",
      "0xD2",
      "0x184",
      "0xBD"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC2."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 19? (Set 519)",
    "options": [
      "11111",
      "10010",
      "10110",
      "10011"
    ],
    "answer": 3,
    "explanation": "19 divided successively by 2 yields binary 10011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 143? (Set 520)",
    "options": [
      "0x11E",
      "0x8A",
      "0x9F",
      "0x8F"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8F."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 126? (Set 521)",
    "options": [
      "10000001",
      "1111110",
      "10001010",
      "1111101"
    ],
    "answer": 1,
    "explanation": "126 divided successively by 2 yields binary 1111110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 116? (Set 158) (Set 522)",
    "options": [
      "0x74",
      "0xE8",
      "0x6F",
      "0x84"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x74."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 119? (Set 25) (Set 523)",
    "options": [
      "10000011",
      "1110110",
      "1111010",
      "1110111"
    ],
    "answer": 3,
    "explanation": "119 divided successively by 2 yields binary 1110111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 144? (Set 524)",
    "options": [
      "0x90",
      "0x8B",
      "0xA0",
      "0x120"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x90."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 224? (Set 227) (Set 478) (Set 525)",
    "options": [
      "0xDB",
      "0xE0",
      "0xF0",
      "0x1C0"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xE0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 79? (Set 526)",
    "options": [
      "0x5F",
      "0x4A",
      "0x4F",
      "0x9E"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4F."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 107? (Set 207) (Set 301) (Set 527)",
    "options": [
      "1101011",
      "1101110",
      "1101010",
      "1110111"
    ],
    "answer": 0,
    "explanation": "107 divided successively by 2 yields binary 1101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 76? (Set 70) (Set 528)",
    "options": [
      "0x4C",
      "0x98",
      "0x5C",
      "0x47"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 24? (Set 85) (Set 354) (Set 529)",
    "options": [
      "10111",
      "11000",
      "11011",
      "100100"
    ],
    "answer": 1,
    "explanation": "24 divided successively by 2 yields binary 11000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 63? (Set 147) (Set 530)",
    "options": [
      "0x3F",
      "0x4F",
      "0x3A",
      "0x7E"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 126? (Set 531)",
    "options": [
      "0x8E",
      "0xFC",
      "0x7E",
      "0x79"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195? (Set 486) (Set 532)",
    "options": [
      "0xC3",
      "0x186",
      "0xBE",
      "0xD3"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 13? (Set 96) (Set 533)",
    "options": [
      "11001",
      "10000",
      "1100",
      "1101"
    ],
    "answer": 3,
    "explanation": "13 divided successively by 2 yields binary 1101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195? (Set 7) (Set 534)",
    "options": [
      "0xC3",
      "0xBE",
      "0xD3",
      "0x186"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 68? (Set 535)",
    "options": [
      "1010000",
      "1000100",
      "1000111",
      "1000011"
    ],
    "answer": 1,
    "explanation": "68 divided successively by 2 yields binary 1000100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 146? (Set 536)",
    "options": [
      "0x92",
      "0x8D",
      "0x124",
      "0xA2"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x92."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223? (Set 77) (Set 124) (Set 537)",
    "options": [
      "0xEF",
      "0xDF",
      "0xDA",
      "0x1BE"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 13? (Set 163) (Set 538)",
    "options": [
      "1100",
      "11001",
      "1101",
      "10000"
    ],
    "answer": 2,
    "explanation": "13 divided successively by 2 yields binary 1101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 43? (Set 190) (Set 539)",
    "options": [
      "110111",
      "101010",
      "101110",
      "101011"
    ],
    "answer": 3,
    "explanation": "43 divided successively by 2 yields binary 101011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 247? (Set 398) (Set 540)",
    "options": [
      "0x107",
      "0xF7",
      "0xF2",
      "0x1EE"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF7."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 111? (Set 115) (Set 541)",
    "options": [
      "0x6F",
      "0xDE",
      "0x6A",
      "0x7F"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 244? (Set 90) (Set 542)",
    "options": [
      "0x104",
      "0xF4",
      "0x1E8",
      "0xEF"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF4."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 123? (Set 193) (Set 543)",
    "options": [
      "10000111",
      "1111010",
      "1111011",
      "1111110"
    ],
    "answer": 2,
    "explanation": "123 divided successively by 2 yields binary 1111011."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "What is a pipeline hazard caused by branches called? (Set 544)",
    "options": [
      "Control Hazard",
      "Memory Hazard",
      "Structural Hazard",
      "Data Hazard"
    ],
    "answer": 0,
    "explanation": "Branching changes PC, requiring stalls or flush."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 166? (Set 545)",
    "options": [
      "0xA1",
      "0x14C",
      "0xA6",
      "0xB6"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA6."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 82? (Set 546)",
    "options": [
      "1010001",
      "1010010",
      "1010101",
      "1011110"
    ],
    "answer": 1,
    "explanation": "82 divided successively by 2 yields binary 1010010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 81? (Set 440) (Set 547)",
    "options": [
      "0x4C",
      "0xA2",
      "0x51",
      "0x61"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x51."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 123? (Set 193) (Set 548)",
    "options": [
      "1111011",
      "10000111",
      "1111010",
      "1111110"
    ],
    "answer": 0,
    "explanation": "123 divided successively by 2 yields binary 1111011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 36) (Set 341) (Set 549)",
    "options": [
      "0xD8",
      "0xD3",
      "0xE8",
      "0x1B0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 40? (Set 514) (Set 550)",
    "options": [
      "100111",
      "110100",
      "101011",
      "101000"
    ],
    "answer": 3,
    "explanation": "40 divided successively by 2 yields binary 101000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 77? (Set 10) (Set 551)",
    "options": [
      "1011001",
      "1001100",
      "1001101",
      "1010000"
    ],
    "answer": 2,
    "explanation": "77 divided successively by 2 yields binary 1001101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 218? (Set 139) (Set 351) (Set 552)",
    "options": [
      "0x1B4",
      "0xEA",
      "0xD5",
      "0xDA"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDA."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 74? (Set 299) (Set 553)",
    "options": [
      "1001001",
      "1001010",
      "1001101",
      "1010110"
    ],
    "answer": 1,
    "explanation": "74 divided successively by 2 yields binary 1001010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 36) (Set 187) (Set 433) (Set 554)",
    "options": [
      "0x1B0",
      "0xD3",
      "0xE8",
      "0xD8"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 76? (Set 70) (Set 555)",
    "options": [
      "0x98",
      "0x5C",
      "0x47",
      "0x4C"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 186? (Set 556)",
    "options": [
      "0x174",
      "0xB5",
      "0xCA",
      "0xBA"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBA."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 218? (Set 557)",
    "options": [
      "0xD5",
      "0xDA",
      "0x1B4",
      "0xEA"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDA."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 165? (Set 5) (Set 558)",
    "options": [
      "0xB5",
      "0x14A",
      "0xA0",
      "0xA5"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA5."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 26? (Set 559)",
    "options": [
      "11010",
      "11001",
      "100110",
      "11101"
    ],
    "answer": 0,
    "explanation": "26 divided successively by 2 yields binary 11010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 116? (Set 158) (Set 560)",
    "options": [
      "0x6F",
      "0x74",
      "0x84",
      "0xE8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x74."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 107? (Set 410) (Set 561)",
    "options": [
      "0x6B",
      "0x66",
      "0x7B",
      "0xD6"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6B."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 120? (Set 1) (Set 562)",
    "options": [
      "0x88",
      "0x73",
      "0xF0",
      "0x78"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x78."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 35? (Set 563)",
    "options": [
      "100010",
      "100110",
      "100011",
      "101111"
    ],
    "answer": 2,
    "explanation": "35 divided successively by 2 yields binary 100011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 221? (Set 84) (Set 564)",
    "options": [
      "0xD8",
      "0xDD",
      "0x1BA",
      "0xED"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDD."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 130? (Set 565)",
    "options": [
      "0x92",
      "0x104",
      "0x7D",
      "0x82"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x82."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 340) (Set 566)",
    "options": [
      "0x1B0",
      "0xE8",
      "0xD3",
      "0xD8"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 74? (Set 299) (Set 553) (Set 567)",
    "options": [
      "1010110",
      "1001001",
      "1001010",
      "1001101"
    ],
    "answer": 2,
    "explanation": "74 divided successively by 2 yields binary 1001010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 128? (Set 394) (Set 402) (Set 568)",
    "options": [
      "1111111",
      "10000011",
      "10001100",
      "10000000"
    ],
    "answer": 3,
    "explanation": "128 divided successively by 2 yields binary 10000000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 19? (Set 12) (Set 500) (Set 569)",
    "options": [
      "10010",
      "11111",
      "10110",
      "10011"
    ],
    "answer": 3,
    "explanation": "19 divided successively by 2 yields binary 10011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 144? (Set 570)",
    "options": [
      "0xA0",
      "0x8B",
      "0x120",
      "0x90"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x90."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 54? (Set 571)",
    "options": [
      "110110",
      "111001",
      "110101",
      "1000010"
    ],
    "answer": 0,
    "explanation": "54 divided successively by 2 yields binary 110110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 186? (Set 556) (Set 572)",
    "options": [
      "0xBA",
      "0xB5",
      "0x174",
      "0xCA"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBA."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 222? (Set 573)",
    "options": [
      "0xDE",
      "0x1BC",
      "0xEE",
      "0xD9"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDE."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 77? (Set 574)",
    "options": [
      "0x4D",
      "0x48",
      "0x5D",
      "0x9A"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x4D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 144? (Set 575)",
    "options": [
      "0x8B",
      "0xA0",
      "0x90",
      "0x120"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x90."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 66? (Set 375) (Set 505) (Set 576)",
    "options": [
      "1000010",
      "1000001",
      "1001110",
      "1000101"
    ],
    "answer": 0,
    "explanation": "66 divided successively by 2 yields binary 1000010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 45? (Set 577)",
    "options": [
      "101100",
      "110000",
      "111001",
      "101101"
    ],
    "answer": 3,
    "explanation": "45 divided successively by 2 yields binary 101101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195? (Set 486) (Set 578)",
    "options": [
      "0x186",
      "0xD3",
      "0xC3",
      "0xBE"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 54? (Set 74) (Set 282) (Set 370) (Set 579)",
    "options": [
      "1000010",
      "110101",
      "110110",
      "111001"
    ],
    "answer": 2,
    "explanation": "54 divided successively by 2 yields binary 110110."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 30? (Set 580)",
    "options": [
      "101010",
      "11110",
      "100001",
      "11101"
    ],
    "answer": 1,
    "explanation": "30 divided successively by 2 yields binary 11110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195? (Set 7) (Set 581)",
    "options": [
      "0xC3",
      "0xD3",
      "0x186",
      "0xBE"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 91? (Set 582)",
    "options": [
      "1100111",
      "1011110",
      "1011010",
      "1011011"
    ],
    "answer": 3,
    "explanation": "91 divided successively by 2 yields binary 1011011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 156? (Set 53) (Set 191) (Set 583)",
    "options": [
      "0xAC",
      "0x9C",
      "0x97",
      "0x138"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x9C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 128) (Set 155) (Set 584)",
    "options": [
      "0xEE",
      "0x103",
      "0x1E6",
      "0xF3"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 77? (Set 10) (Set 585)",
    "options": [
      "1010000",
      "1001101",
      "1001100",
      "1011001"
    ],
    "answer": 1,
    "explanation": "77 divided successively by 2 yields binary 1001101."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 81) (Set 349) (Set 469) (Set 586)",
    "options": [
      "0x1B0",
      "0xD8",
      "0xD3",
      "0xE8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 242) (Set 587)",
    "options": [
      "0x1E6",
      "0xEE",
      "0xF3",
      "0x103"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 269) (Set 308) (Set 309) (Set 588)",
    "options": [
      "0x1E6",
      "0xF3",
      "0xEE",
      "0x103"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 108? (Set 253) (Set 495) (Set 504) (Set 589)",
    "options": [
      "0xD8",
      "0x67",
      "0x7C",
      "0x6C"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 113? (Set 107) (Set 590)",
    "options": [
      "0x71",
      "0xE2",
      "0x6C",
      "0x81"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x71."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 22? (Set 201) (Set 508) (Set 591)",
    "options": [
      "10101",
      "11001",
      "10110",
      "100010"
    ],
    "answer": 2,
    "explanation": "22 divided successively by 2 yields binary 10110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 140? (Set 592)",
    "options": [
      "0x8C",
      "0x118",
      "0x9C",
      "0x87"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8C."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 124? (Set 173) (Set 593)",
    "options": [
      "10001000",
      "1111111",
      "1111100",
      "1111011"
    ],
    "answer": 2,
    "explanation": "124 divided successively by 2 yields binary 1111100."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 137? (Set 594)",
    "options": [
      "0x112",
      "0x99",
      "0x89",
      "0x84"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x89."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 27? (Set 595)",
    "options": [
      "100111",
      "11110",
      "11011",
      "11010"
    ],
    "answer": 2,
    "explanation": "27 divided successively by 2 yields binary 11011."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "RISC stands for? (Set 596)",
    "options": [
      "Reduced Info System Chip by design",
      "Reduced Instruction Set Computer",
      "Rapid Instruction Segment Computer",
      "Random Instruction Set Core"
    ],
    "answer": 1,
    "explanation": "RISC uses simple, single-cycle instructions."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 195? (Set 486) (Set 597)",
    "options": [
      "0xC3",
      "0x186",
      "0xBE",
      "0xD3"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC3."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "What is Flynn's classification for parallel computers with multiple data streams but one instruction stream? (Set 598)",
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
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 74? (Set 299) (Set 599)",
    "options": [
      "1010110",
      "1001001",
      "1001010",
      "1001101"
    ],
    "answer": 2,
    "explanation": "74 divided successively by 2 yields binary 1001010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 84? (Set 600)",
    "options": [
      "0xA8",
      "0x4F",
      "0x54",
      "0x64"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x54."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 66? (Set 106) (Set 601)",
    "options": [
      "1000001",
      "1000101",
      "1001110",
      "1000010"
    ],
    "answer": 3,
    "explanation": "66 divided successively by 2 yields binary 1000010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 59? (Set 453) (Set 602)",
    "options": [
      "111010",
      "1000111",
      "111011",
      "111110"
    ],
    "answer": 2,
    "explanation": "59 divided successively by 2 yields binary 111011."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 65? (Set 603)",
    "options": [
      "1001101",
      "1000000",
      "1000001",
      "1000100"
    ],
    "answer": 2,
    "explanation": "65 divided successively by 2 yields binary 1000001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 140? (Set 604)",
    "options": [
      "0x87",
      "0x9C",
      "0x118",
      "0x8C"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8C."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 95? (Set 109) (Set 605)",
    "options": [
      "0x5A",
      "0xBE",
      "0x6F",
      "0x5F"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x5F."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 141? (Set 606)",
    "options": [
      "0x8D",
      "0x11A",
      "0x9D",
      "0x88"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 214? (Set 607)",
    "options": [
      "0xD6",
      "0xE6",
      "0xD1",
      "0x1AC"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD6."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 148? (Set 54) (Set 111) (Set 608)",
    "options": [
      "0x128",
      "0xA4",
      "0x94",
      "0x8F"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x94."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 130? (Set 565) (Set 609)",
    "options": [
      "0x7D",
      "0x82",
      "0x92",
      "0x104"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x82."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 223? (Set 77) (Set 104) (Set 610)",
    "options": [
      "0xEF",
      "0x1BE",
      "0xDA",
      "0xDF"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDF."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 278) (Set 611)",
    "options": [
      "0x1E6",
      "0xEE",
      "0xF3",
      "0x103"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 57? (Set 102) (Set 612)",
    "options": [
      "111001",
      "111100",
      "111000",
      "1000101"
    ],
    "answer": 0,
    "explanation": "57 divided successively by 2 yields binary 111001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 78? (Set 150) (Set 613)",
    "options": [
      "1001101",
      "1001110",
      "1010001",
      "1011010"
    ],
    "answer": 1,
    "explanation": "78 divided successively by 2 yields binary 1001110."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 216? (Set 81) (Set 614)",
    "options": [
      "0x1B0",
      "0xD8",
      "0xD3",
      "0xE8"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD8."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 190? (Set 369) (Set 615)",
    "options": [
      "0x17C",
      "0xBE",
      "0xCE",
      "0xB9"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBE."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 115? (Set 162) (Set 199) (Set 616)",
    "options": [
      "0xE6",
      "0x83",
      "0x6E",
      "0x73"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x73."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 131? (Set 152) (Set 444) (Set 617)",
    "options": [
      "0x83",
      "0x106",
      "0x7E",
      "0x93"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x83."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 190? (Set 618)",
    "options": [
      "0xCE",
      "0x17C",
      "0xBE",
      "0xB9"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBE."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "DMA stands for? (Set 619)",
    "options": [
      "Dual Memory Access",
      "Direct Memory Access",
      "Dynamic Memory Allocation",
      "Direct Method Address"
    ],
    "answer": 1,
    "explanation": "DMA bypasses CPU for bulk data transfers between I/O and RAM."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 26? (Set 225) (Set 620)",
    "options": [
      "100110",
      "11001",
      "11101",
      "11010"
    ],
    "answer": 3,
    "explanation": "26 divided successively by 2 yields binary 11010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 243? (Set 269) (Set 308) (Set 621)",
    "options": [
      "0x103",
      "0xF3",
      "0xEE",
      "0x1E6"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF3."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 110? (Set 119) (Set 622)",
    "options": [
      "0x69",
      "0x7E",
      "0x6E",
      "0xDC"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 185? (Set 623)",
    "options": [
      "0xC9",
      "0xB9",
      "0x172",
      "0xB4"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0xB9."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 103? (Set 185) (Set 243) (Set 624)",
    "options": [
      "1101010",
      "1100110",
      "1110011",
      "1100111"
    ],
    "answer": 3,
    "explanation": "103 divided successively by 2 yields binary 1100111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 219? (Set 625)",
    "options": [
      "0x1B6",
      "0xEB",
      "0xDB",
      "0xD6"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xDB."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 72? (Set 483) (Set 626)",
    "options": [
      "1010100",
      "1001000",
      "1001011",
      "1000111"
    ],
    "answer": 1,
    "explanation": "72 divided successively by 2 yields binary 1001000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 110? (Set 356) (Set 627)",
    "options": [
      "0x69",
      "0xDC",
      "0x6E",
      "0x7E"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 112? (Set 66) (Set 628)",
    "options": [
      "0x6B",
      "0x70",
      "0xE0",
      "0x80"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x70."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 99? (Set 72) (Set 629)",
    "options": [
      "1101111",
      "1100010",
      "1100110",
      "1100011"
    ],
    "answer": 3,
    "explanation": "99 divided successively by 2 yields binary 1100011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 141? (Set 606) (Set 630)",
    "options": [
      "0x8D",
      "0x11A",
      "0x9D",
      "0x88"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x8D."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 248? (Set 231) (Set 631)",
    "options": [
      "0xF8",
      "0xF3",
      "0x108",
      "0x1F0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF8."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 66? (Set 632)",
    "options": [
      "1001110",
      "1000101",
      "1000010",
      "1000001"
    ],
    "answer": 2,
    "explanation": "66 divided successively by 2 yields binary 1000010."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 62? (Set 31) (Set 264) (Set 633)",
    "options": [
      "0x3E",
      "0x4E",
      "0x39",
      "0x7C"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x3E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 53? (Set 634)",
    "options": [
      "0x6A",
      "0x45",
      "0x35",
      "0x30"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x35."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "What does the Program Counter (PC) store? (Set 30) (Set 635)",
    "options": [
      "Address of accumulator (primary approach)",
      "Current instruction value (primary approach)",
      "Result of last calculation in practice",
      "Address of the next instruction to be fetched"
    ],
    "answer": 3,
    "explanation": "PC tracks execution flow."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 240? (Set 291) (Set 636)",
    "options": [
      "0xEB",
      "0x100",
      "0xF0",
      "0x1E0"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xF0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 144? (Set 637)",
    "options": [
      "0x90",
      "0x8B",
      "0x120",
      "0xA0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0x90."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 130? (Set 171) (Set 638)",
    "options": [
      "0x104",
      "0x82",
      "0x7D",
      "0x92"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x82."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 35? (Set 563) (Set 639)",
    "options": [
      "100011",
      "101111",
      "100110",
      "100010"
    ],
    "answer": 0,
    "explanation": "35 divided successively by 2 yields binary 100011."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 110? (Set 356) (Set 627) (Set 640)",
    "options": [
      "0x7E",
      "0x6E",
      "0xDC",
      "0x69"
    ],
    "answer": 1,
    "explanation": "Converting decimal base 10 to base 16 gives 0x6E."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 78? (Set 426) (Set 641)",
    "options": [
      "1011010",
      "1001110",
      "1010001",
      "1001101"
    ],
    "answer": 1,
    "explanation": "78 divided successively by 2 yields binary 1001110."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "What is a pipeline hazard caused by branches called? (Set 544) (Set 642)",
    "options": [
      "Structural Hazard",
      "Data Hazard",
      "Control Hazard",
      "Memory Hazard"
    ],
    "answer": 2,
    "explanation": "Branching changes PC, requiring stalls or flush."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 82? (Set 643)",
    "options": [
      "1010101",
      "1010010",
      "1011110",
      "1010001"
    ],
    "answer": 1,
    "explanation": "82 divided successively by 2 yields binary 1010010."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 87) (Set 101) (Set 314) (Set 644)",
    "options": [
      "11001",
      "11100",
      "11000",
      "100101"
    ],
    "answer": 0,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 24? (Set 85) (Set 354) (Set 529) (Set 645)",
    "options": [
      "100100",
      "11000",
      "10111",
      "11011"
    ],
    "answer": 1,
    "explanation": "24 divided successively by 2 yields binary 11000."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Medium",
    "question": "Which cache mapping technique allows any block of memory to be placed anywhere in cache? (Set 19) (Set 646)",
    "options": [
      "Set-Associative Mapping",
      "Fully Associative Mapping",
      "Index Mapping (widely accepted)",
      "Direct Mapping by design"
    ],
    "answer": 1,
    "explanation": "Fully associative allows maximum flexibility but complex lookup."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 77? (Set 10) (Set 585) (Set 647)",
    "options": [
      "1001101",
      "1010000",
      "1001100",
      "1011001"
    ],
    "answer": 0,
    "explanation": "77 divided successively by 2 yields binary 1001101."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 64? (Set 648)",
    "options": [
      "1001100",
      "1000011",
      "1000000",
      "111111"
    ],
    "answer": 2,
    "explanation": "64 divided successively by 2 yields binary 1000000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 24? (Set 49) (Set 649)",
    "options": [
      "11011",
      "10111",
      "11000",
      "100100"
    ],
    "answer": 2,
    "explanation": "24 divided successively by 2 yields binary 11000."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 193? (Set 650)",
    "options": [
      "0xBC",
      "0xD1",
      "0xC1",
      "0x182"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xC1."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 126? (Set 651)",
    "options": [
      "0xFC",
      "0x8E",
      "0x7E",
      "0x79"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x7E."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 101? (Set 281) (Set 652)",
    "options": [
      "0x60",
      "0xCA",
      "0x65",
      "0x75"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x65."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 217? (Set 21) (Set 653)",
    "options": [
      "0x1B2",
      "0xE9",
      "0xD9",
      "0xD4"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 162? (Set 654)",
    "options": [
      "0xB2",
      "0x9D",
      "0x144",
      "0xA2"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA2."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 212? (Set 230) (Set 655)",
    "options": [
      "0xD4",
      "0x1A8",
      "0xCF",
      "0xE4"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD4."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 120? (Set 130) (Set 656)",
    "options": [
      "1111011",
      "1111000",
      "1110111",
      "10000100"
    ],
    "answer": 1,
    "explanation": "120 divided successively by 2 yields binary 1111000."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 89? (Set 252) (Set 657)",
    "options": [
      "1011000",
      "1100101",
      "1011001",
      "1011100"
    ],
    "answer": 2,
    "explanation": "89 divided successively by 2 yields binary 1011001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 191? (Set 141) (Set 658)",
    "options": [
      "0xBF",
      "0xCF",
      "0x17E",
      "0xBA"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xBF."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 25? (Set 87) (Set 470) (Set 659)",
    "options": [
      "11100",
      "100101",
      "11001",
      "11000"
    ],
    "answer": 2,
    "explanation": "25 divided successively by 2 yields binary 11001."
  },
  {
    "subject": "COA",
    "topic": "COA",
    "difficulty": "Easy",
    "question": "DMA stands for? (Set 619) (Set 660)",
    "options": [
      "Direct Method Address",
      "Direct Memory Access",
      "Dynamic Memory Allocation",
      "Dual Memory Access"
    ],
    "answer": 1,
    "explanation": "DMA bypasses CPU for bulk data transfers between I/O and RAM."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 95? (Set 661)",
    "options": [
      "1101011",
      "1011110",
      "1011111",
      "1100010"
    ],
    "answer": 2,
    "explanation": "95 divided successively by 2 yields binary 1011111."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 84? (Set 662)",
    "options": [
      "0xA8",
      "0x4F",
      "0x54",
      "0x64"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0x54."
  },
  {
    "subject": "COA",
    "topic": "Binary Representation",
    "difficulty": "Easy",
    "question": "What is the binary representation of the decimal integer value 65? (Set 178) (Set 442) (Set 663)",
    "options": [
      "1000000",
      "1000100",
      "1001101",
      "1000001"
    ],
    "answer": 3,
    "explanation": "65 divided successively by 2 yields binary 1000001."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 208? (Set 423) (Set 664)",
    "options": [
      "0xD0",
      "0xE0",
      "0xCB",
      "0x1A0"
    ],
    "answer": 0,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD0."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 165? (Set 665)",
    "options": [
      "0x14A",
      "0xB5",
      "0xA0",
      "0xA5"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0xA5."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 146? (Set 666)",
    "options": [
      "0x124",
      "0xA2",
      "0x8D",
      "0x92"
    ],
    "answer": 3,
    "explanation": "Converting decimal base 10 to base 16 gives 0x92."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 217? (Set 667)",
    "options": [
      "0x1B2",
      "0xD4",
      "0xD9",
      "0xE9"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xD9."
  },
  {
    "subject": "COA",
    "topic": "Hex Conversions",
    "difficulty": "Medium",
    "question": "What is the hexadecimal representation of the decimal integer value 239? (Set 668)",
    "options": [
      "0x1DE",
      "0xEA",
      "0xEF",
      "0xFF"
    ],
    "answer": 2,
    "explanation": "Converting decimal base 10 to base 16 gives 0xEF."
  }
];
