window.quizData = window.quizData || {};
window.quizData.cn = [
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order?",
    "options": [
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link"
    ],
    "answer": 0,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long?",
    "options": [
      "MAC Address",
      "Subnet Mask",
      "IPv4",
      "IPv6"
    ],
    "answer": 3,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port?",
    "options": [
      "443",
      "22",
      "80",
      "21"
    ],
    "answer": 2,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port?",
    "options": [
      "80",
      "8080",
      "25",
      "443"
    ],
    "answer": 3,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses?",
    "options": [
      "DHCP under normal conditions",
      "NAT under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DNS under normal conditions"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for?",
    "options": [
      "Distributed Host Control Protocol",
      "Dynamic Host Configuration Protocol",
      "Dynamic Host Connection Protocol",
      "Direct Host Configuration Port"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model?",
    "options": [
      "Hub",
      "Router",
      "Repeater",
      "Switch"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer?",
    "options": [
      "Data Link Layer (Layer 2)",
      "Network Layer (commonly used)",
      "Transport Layer (general case)",
      "Physical Layer in standard usage"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "TCP is characterized as?",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented and reliable",
      "Lightweight with no handshake",
      "Best-effort delivery (primary approach)"
    ],
    "answer": 1,
    "explanation": "TCP uses a 3-way handshake and guarantees packet ordering."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as?",
    "options": [
      "Heavyweight in standard usage",
      "Connection-oriented in practice",
      "Connectionless and unreliable",
      "Guaranteed delivery (commonly used)"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses?",
    "options": [
      "FTP as per specification",
      "DNS (Domain Name System)",
      "DHCP (typical scenario)",
      "ARP (typical scenario)"
    ],
    "answer": 1,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting?",
    "options": [
      "Increasing network bandwidth (standard definition)",
      "Connecting different protocols (typical scenario)",
      "Encrypting network packets based on convention",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask?",
    "options": [
      "255.255.255.255",
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet?",
    "options": [
      "HTTP (typical scenario)",
      "SNMP in standard usage",
      "SMTP as per specification",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to?",
    "options": [
      "Send emails",
      "Retrieve emails",
      "Retrieve IP addresses",
      "Transfer files"
    ],
    "answer": 0,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do?",
    "options": [
      "Encrypts network traffic (default behavior)",
      "Filters spam emails (standard definition)",
      "Translates MAC to IP under normal conditions",
      "Translates private IP addresses to a public IP"
    ],
    "answer": 3,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through?",
    "options": [
      "Timeout retransmission only",
      "Sliding window mechanism",
      "Congestion window sizing",
      "Three-way handshake"
    ],
    "answer": 1,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through?",
    "options": [
      "Sliding window in typical implementations",
      "MAC addresses in typical implementations",
      "Checksums in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start"
    ],
    "answer": 3,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP?",
    "options": [
      "Checksum",
      "Parity bit",
      "CRC only",
      "Hamming code"
    ],
    "answer": 0,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI?",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer in practice",
      "Transport Layer (default behavior)",
      "Session Layer (default behavior)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1460 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "239.206 ms",
      "59.802 ms",
      "358.810 ms",
      "251.706 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1460 * 1024 * 8) / (50 * 10^6) = 239.206 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2250 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "112.50 ms",
      "1125.00 ms",
      "56.25 ms",
      "117.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2250 bits / (20 * 1000 bps) = 112.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1250 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "62.50 ms",
      "31.25 ms",
      "67.00 ms",
      "625.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1250 bits / (20 * 1000 bps) = 62.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "425.00 ms",
      "21.25 ms",
      "47.00 ms",
      "42.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4250 bits / (100 * 1000 bps) = 42.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1590 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "227.185 ms",
      "37.864 ms",
      "163.957 ms",
      "151.457 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1590 * 1024 * 8) / (86 * 10^6) = 151.457 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.215.254.85 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.215.254.0",
      "10.215.255.0",
      "10.215.254.127",
      "10.215.254.128"
    ],
    "answer": 2,
    "explanation": "For host 10.215.254.85/25, the subnet mask bits reveal the network ID is 10.215.254.0 and broadcast address is 10.215.254.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1220 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "112.295 ms",
      "28.074 ms",
      "124.795 ms",
      "168.442 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1220 * 1024 * 8) / (89 * 10^6) = 112.295 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1650 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "750.933 ms",
      "500.622 ms",
      "513.122 ms",
      "125.156 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1650 * 1024 * 8) / (27 * 10^6) = 500.622 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.234.198 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.235.0",
      "255.255.255.255",
      "255.255.255.255",
      "192.168.234.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.234.198/24, the subnet mask bits reveal the network ID is 192.168.234.0 and broadcast address is 192.168.234.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5550 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "13.88 ms",
      "277.50 ms",
      "32.25 ms",
      "27.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5550 bits / (200 * 1000 bps) = 27.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.194.80 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.26.195.0",
      "255.255.255.255",
      "172.26.194.0"
    ],
    "answer": 3,
    "explanation": "For host 172.26.194.80/23, the subnet mask bits reveal the network ID is 172.26.194.0 and broadcast address is 172.26.195.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1550 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "31.00 ms",
      "35.50 ms",
      "310.00 ms",
      "15.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1550 bits / (50 * 1000 bps) = 31.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "24.25 ms",
      "48.50 ms",
      "53.00 ms",
      "485.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4850 bits / (100 * 1000 bps) = 48.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4520 KB over a point-to-point network link with transmission bandwidth rate of 62 Mbps. What is the theoretical transmission delay?",
    "options": [
      "609.723 ms",
      "597.223 ms",
      "149.306 ms",
      "895.835 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4520 * 1024 * 8) / (62 * 10^6) = 597.223 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "28.25 ms",
      "61.00 ms",
      "56.50 ms",
      "565.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5650 bits / (100 * 1000 bps) = 56.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.25 ms",
      "8.50 ms",
      "85.00 ms",
      "13.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4250 bits / (500 * 1000 bps) = 8.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.10.56.81 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.10.56.0",
      "10.10.57.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 10.10.56.81/24, the subnet mask bits reveal the network ID is 10.10.56.0 and broadcast address is 10.10.56.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.225.234 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.17.225.0",
      "172.17.225.224",
      "172.17.226.224",
      "172.17.225.192"
    ],
    "answer": 1,
    "explanation": "For host 172.17.225.234/27, the subnet mask bits reveal the network ID is 172.17.225.224 and broadcast address is 172.17.225.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2500 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1137.778 ms",
      "771.019 ms",
      "189.630 ms",
      "758.519 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2500 * 1024 * 8) / (27 * 10^6) = 758.519 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.83.157 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.83.159",
      "192.168.83.160",
      "192.168.83.144",
      "192.168.84.152"
    ],
    "answer": 0,
    "explanation": "For host 192.168.83.157/29, the subnet mask bits reveal the network ID is 192.168.83.152 and broadcast address is 192.168.83.159."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2450 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "127.00 ms",
      "122.50 ms",
      "1225.00 ms",
      "61.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2450 bits / (20 * 1000 bps) = 122.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4800 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "240.00 ms",
      "120.00 ms",
      "244.50 ms",
      "2400.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4800 bits / (20 * 1000 bps) = 240.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3420 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4014.877 ms",
      "6003.566 ms",
      "1000.594 ms",
      "4002.377 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3420 * 1024 * 8) / (7 * 10^6) = 4002.377 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1730 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "708.608 ms",
      "484.905 ms",
      "472.405 ms",
      "118.101 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1730 * 1024 * 8) / (30 * 10^6) = 472.405 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.224.73 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.224.68",
      "192.168.224.72",
      "192.168.225.72",
      "192.168.224.76"
    ],
    "answer": 1,
    "explanation": "For host 192.168.224.73/30, the subnet mask bits reveal the network ID is 192.168.224.72 and broadcast address is 192.168.224.75."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5400 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "540.00 ms",
      "27.00 ms",
      "58.50 ms",
      "54.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5400 bits / (100 * 1000 bps) = 54.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 350 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "118.693 ms",
      "106.193 ms",
      "26.548 ms",
      "159.289 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (350 * 1024 * 8) / (27 * 10^6) = 106.193 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3200 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "264.792 ms",
      "66.198 ms",
      "397.188 ms",
      "277.292 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3200 * 1024 * 8) / (99 * 10^6) = 264.792 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4200 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "25.50 ms",
      "10.50 ms",
      "210.00 ms",
      "21.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4200 bits / (200 * 1000 bps) = 21.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.170.207 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.171.0",
      "172.31.170.0",
      "172.31.171.255",
      "172.31.170.0"
    ],
    "answer": 2,
    "explanation": "For host 172.31.170.207/23, the subnet mask bits reveal the network ID is 172.31.170.0 and broadcast address is 172.31.171.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 190 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "155.648 ms",
      "25.941 ms",
      "103.765 ms",
      "116.265 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (190 * 1024 * 8) / (15 * 10^6) = 103.765 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5050 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "50.50 ms",
      "55.00 ms",
      "505.00 ms",
      "25.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5050 bits / (100 * 1000 bps) = 50.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4850 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "970.00 ms",
      "48.50 ms",
      "97.00 ms",
      "101.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4850 bits / (50 * 1000 bps) = 97.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.126.128 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.126.135",
      "172.16.126.120",
      "172.16.126.136",
      "172.16.127.128"
    ],
    "answer": 0,
    "explanation": "For host 172.16.126.128/29, the subnet mask bits reveal the network ID is 172.16.126.128 and broadcast address is 172.16.126.135."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1100 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "1.10 ms",
      "6.70 ms",
      "2.20 ms",
      "22.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1100 bits / (500 * 1000 bps) = 2.20 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.34.202 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.34.0",
      "192.168.35.128",
      "192.168.34.0",
      "192.168.34.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.34.202/25, the subnet mask bits reveal the network ID is 192.168.34.128 and broadcast address is 192.168.34.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1300 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "178.900 ms",
      "41.600 ms",
      "166.400 ms",
      "249.600 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1300 * 1024 * 8) / (64 * 10^6) = 166.400 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "18.50 ms",
      "370.00 ms",
      "41.50 ms",
      "37.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3700 bits / (100 * 1000 bps) = 37.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5750 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "14.38 ms",
      "28.75 ms",
      "33.25 ms",
      "287.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5750 bits / (200 * 1000 bps) = 28.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.5.88.161 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.5.88.144",
      "10.5.88.176",
      "10.5.89.160",
      "10.5.88.160"
    ],
    "answer": 3,
    "explanation": "For host 10.5.88.161/28, the subnet mask bits reveal the network ID is 10.5.88.160 and broadcast address is 10.5.88.175."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.117.24 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "172.20.118.0",
      "172.20.117.0"
    ],
    "answer": 3,
    "explanation": "For host 172.20.117.24/24, the subnet mask bits reveal the network ID is 172.20.117.0 and broadcast address is 172.20.117.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 650 KB over a point-to-point network link with transmission bandwidth rate of 22 Mbps. What is the theoretical transmission delay?",
    "options": [
      "60.509 ms",
      "254.536 ms",
      "242.036 ms",
      "363.055 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (650 * 1024 * 8) / (22 * 10^6) = 242.036 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2950 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "147.50 ms",
      "1475.00 ms",
      "73.75 ms",
      "152.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2950 bits / (20 * 1000 bps) = 147.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.129.227 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.31.129.0",
      "172.31.129.128",
      "172.31.130.192",
      "172.31.129.192"
    ],
    "answer": 3,
    "explanation": "For host 172.31.129.227/26, the subnet mask bits reveal the network ID is 172.31.129.192 and broadcast address is 172.31.129.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.41.223.49 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.41.223.0",
      "10.41.223.255",
      "10.41.223.0",
      "10.41.224.0"
    ],
    "answer": 1,
    "explanation": "For host 10.41.223.49/24, the subnet mask bits reveal the network ID is 10.41.223.0 and broadcast address is 10.41.223.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3790 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "204.261 ms",
      "829.544 ms",
      "1225.566 ms",
      "817.044 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3790 * 1024 * 8) / (38 * 10^6) = 817.044 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5050 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "12.63 ms",
      "25.25 ms",
      "29.75 ms",
      "252.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5050 bits / (200 * 1000 bps) = 25.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.103.174 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.104.0",
      "172.26.103.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.26.103.174/24, the subnet mask bits reveal the network ID is 172.26.103.0 and broadcast address is 172.26.103.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 930 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "126.210 ms",
      "28.427 ms",
      "113.710 ms",
      "170.565 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (930 * 1024 * 8) / (67 * 10^6) = 113.710 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1550 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "7.75 ms",
      "3.88 ms",
      "12.25 ms",
      "77.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1550 bits / (200 * 1000 bps) = 7.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1250 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "129.50 ms",
      "1250.00 ms",
      "125.00 ms",
      "62.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1250 bits / (10 * 1000 bps) = 125.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3900 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1141.029 ms",
      "4576.614 ms",
      "6846.171 ms",
      "4564.114 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3900 * 1024 * 8) / (7 * 10^6) = 4564.114 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4900 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "633.802 ms",
      "435.035 ms",
      "422.535 ms",
      "105.634 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4900 * 1024 * 8) / (95 * 10^6) = 422.535 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "2.50 ms",
      "9.50 ms",
      "5.00 ms",
      "50.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1000 bits / (200 * 1000 bps) = 5.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "590.00 ms",
      "59.00 ms",
      "29.50 ms",
      "63.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5900 bits / (100 * 1000 bps) = 59.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1890 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "247.089 ms",
      "234.589 ms",
      "351.884 ms",
      "58.647 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1890 * 1024 * 8) / (66 * 10^6) = 234.589 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1200 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "179.824 ms",
      "119.883 ms",
      "132.383 ms",
      "29.971 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1200 * 1024 * 8) / (82 * 10^6) = 119.883 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.208.195 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.208.0",
      "192.168.209.128",
      "192.168.208.255",
      "192.168.208.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.208.195/25, the subnet mask bits reveal the network ID is 192.168.208.128 and broadcast address is 192.168.208.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2850 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "71.25 ms",
      "147.00 ms",
      "142.50 ms",
      "1425.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2850 bits / (20 * 1000 bps) = 142.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "113.00 ms",
      "5.65 ms",
      "15.80 ms",
      "11.30 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5650 bits / (500 * 1000 bps) = 11.30 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.90 ms",
      "118.00 ms",
      "16.30 ms",
      "11.80 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5900 bits / (500 * 1000 bps) = 11.80 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.190.249 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.190.0",
      "192.168.191.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 192.168.190.249/23, the subnet mask bits reveal the network ID is 192.168.190.0 and broadcast address is 192.168.191.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3450 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "39.00 ms",
      "345.00 ms",
      "17.25 ms",
      "34.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3450 bits / (100 * 1000 bps) = 34.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.76.99.113 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.76.99.116",
      "10.76.99.115",
      "10.76.100.112",
      "10.76.99.108"
    ],
    "answer": 1,
    "explanation": "For host 10.76.99.113/30, the subnet mask bits reveal the network ID is 10.76.99.112 and broadcast address is 10.76.99.115."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3200 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "64.00 ms",
      "6.40 ms",
      "3.20 ms",
      "10.90 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3200 bits / (500 * 1000 bps) = 6.40 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.3.32 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.3.0",
      "192.168.3.128",
      "192.168.3.127",
      "192.168.4.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.3.32/25, the subnet mask bits reveal the network ID is 192.168.3.0 and broadcast address is 192.168.3.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.177.172 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.25.177.0",
      "172.25.178.0",
      "172.25.177.0",
      "172.25.179.255"
    ],
    "answer": 3,
    "explanation": "For host 172.25.177.172/22, the subnet mask bits reveal the network ID is 172.25.176.0 and broadcast address is 172.25.179.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4080 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "563.315 ms",
      "93.886 ms",
      "388.043 ms",
      "375.543 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4080 * 1024 * 8) / (89 * 10^6) = 375.543 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.149.189 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.149.128",
      "172.20.150.128",
      "172.20.149.0",
      "172.20.149.0"
    ],
    "answer": 0,
    "explanation": "For host 172.20.149.189/25, the subnet mask bits reveal the network ID is 172.20.149.128 and broadcast address is 172.20.149.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1460 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1721.117 ms",
      "427.154 ms",
      "1708.617 ms",
      "2562.926 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1460 * 1024 * 8) / (7 * 10^6) = 1708.617 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.63.40 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.17.64.0",
      "172.17.63.0",
      "172.17.63.64"
    ],
    "answer": 2,
    "explanation": "For host 172.17.63.40/26, the subnet mask bits reveal the network ID is 172.17.63.0 and broadcast address is 172.17.63.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2150 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "107.50 ms",
      "219.50 ms",
      "2150.00 ms",
      "215.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2150 bits / (10 * 1000 bps) = 215.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3020 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1558.740 ms",
      "1546.240 ms",
      "2319.360 ms",
      "386.560 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3020 * 1024 * 8) / (16 * 10^6) = 1546.240 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2100 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "42.00 ms",
      "4.20 ms",
      "2.10 ms",
      "8.70 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2100 bits / (500 * 1000 bps) = 4.20 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.250.86 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.30.250.96",
      "172.30.250.64",
      "172.30.251.80",
      "172.30.250.95"
    ],
    "answer": 3,
    "explanation": "For host 172.30.250.86/28, the subnet mask bits reveal the network ID is 172.30.250.80 and broadcast address is 172.30.250.95."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1300 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "6.50 ms",
      "65.00 ms",
      "11.00 ms",
      "3.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1300 bits / (200 * 1000 bps) = 6.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.139.19.186 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.139.19.0",
      "10.139.19.0",
      "10.139.19.255",
      "10.139.20.0"
    ],
    "answer": 2,
    "explanation": "For host 10.139.19.186/22, the subnet mask bits reveal the network ID is 10.139.16.0 and broadcast address is 10.139.19.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "26.50 ms",
      "265.00 ms",
      "13.25 ms",
      "31.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5300 bits / (200 * 1000 bps) = 26.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.243.251 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.242.0",
      "192.168.243.0",
      "192.168.243.0",
      "192.168.244.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.243.251/23, the subnet mask bits reveal the network ID is 192.168.242.0 and broadcast address is 192.168.243.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.250.49 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.28.251.0",
      "255.255.255.255",
      "172.28.250.0"
    ],
    "answer": 3,
    "explanation": "For host 172.28.250.49/24, the subnet mask bits reveal the network ID is 172.28.250.0 and broadcast address is 172.28.250.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3230 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "140.746 ms",
      "562.982 ms",
      "575.482 ms",
      "844.473 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3230 * 1024 * 8) / (47 * 10^6) = 562.982 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "34.00 ms",
      "29.50 ms",
      "295.00 ms",
      "14.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5900 bits / (200 * 1000 bps) = 29.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5350 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "26.75 ms",
      "535.00 ms",
      "58.00 ms",
      "53.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5350 bits / (100 * 1000 bps) = 53.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2200 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "8.90 ms",
      "2.20 ms",
      "4.40 ms",
      "44.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2200 bits / (500 * 1000 bps) = 4.40 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1950 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "48.75 ms",
      "975.00 ms",
      "102.00 ms",
      "97.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1950 bits / (20 * 1000 bps) = 97.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "120.00 ms",
      "6.00 ms",
      "12.00 ms",
      "16.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2400 bits / (200 * 1000 bps) = 12.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3470 KB over a point-to-point network link with transmission bandwidth rate of 43 Mbps. What is the theoretical transmission delay?",
    "options": [
      "661.075 ms",
      "991.613 ms",
      "165.269 ms",
      "673.575 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3470 * 1024 * 8) / (43 * 10^6) = 661.075 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2430 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "328.130 ms",
      "218.753 ms",
      "54.688 ms",
      "231.253 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2430 * 1024 * 8) / (91 * 10^6) = 218.753 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.39.173.93 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.39.173.96",
      "10.39.174.88",
      "10.39.173.95",
      "10.39.173.80"
    ],
    "answer": 2,
    "explanation": "For host 10.39.173.93/29, the subnet mask bits reveal the network ID is 10.39.173.88 and broadcast address is 10.39.173.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3420 KB over a point-to-point network link with transmission bandwidth rate of 81 Mbps. What is the theoretical transmission delay?",
    "options": [
      "345.884 ms",
      "518.827 ms",
      "358.384 ms",
      "86.471 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3420 * 1024 * 8) / (81 * 10^6) = 345.884 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.87.138 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.21.88.128",
      "172.21.87.96",
      "172.21.87.160",
      "172.21.87.128"
    ],
    "answer": 3,
    "explanation": "For host 172.21.87.138/27, the subnet mask bits reveal the network ID is 172.21.87.128 and broadcast address is 172.21.87.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2070 KB over a point-to-point network link with transmission bandwidth rate of 68 Mbps. What is the theoretical transmission delay?",
    "options": [
      "261.874 ms",
      "249.374 ms",
      "62.344 ms",
      "374.061 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2070 * 1024 * 8) / (68 * 10^6) = 249.374 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1780 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "220.811 ms",
      "312.466 ms",
      "52.078 ms",
      "208.311 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1780 * 1024 * 8) / (70 * 10^6) = 208.311 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4710 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "235.270 ms",
      "941.081 ms",
      "953.581 ms",
      "1411.621 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4710 * 1024 * 8) / (41 * 10^6) = 941.081 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1130 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "59.339 ms",
      "249.858 ms",
      "356.037 ms",
      "237.358 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1130 * 1024 * 8) / (39 * 10^6) = 237.358 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2000 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "100.00 ms",
      "1000.00 ms",
      "50.00 ms",
      "104.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2000 bits / (20 * 1000 bps) = 100.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.76.241 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.76.236",
      "172.19.76.243",
      "172.19.76.244",
      "172.19.77.240"
    ],
    "answer": 1,
    "explanation": "For host 172.19.76.241/30, the subnet mask bits reveal the network ID is 172.19.76.240 and broadcast address is 172.19.76.243."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4150 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "8.30 ms",
      "83.00 ms",
      "12.80 ms",
      "4.15 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4150 bits / (500 * 1000 bps) = 8.30 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4870 KB over a point-to-point network link with transmission bandwidth rate of 10 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3989.504 ms",
      "5984.256 ms",
      "997.376 ms",
      "4002.004 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4870 * 1024 * 8) / (10 * 10^6) = 3989.504 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4410 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "934.312 ms",
      "635.374 ms",
      "155.719 ms",
      "622.874 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4410 * 1024 * 8) / (58 * 10^6) = 622.874 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.239.232.11 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.239.232.32",
      "10.239.232.0",
      "10.239.233.0"
    ],
    "answer": 2,
    "explanation": "For host 10.239.232.11/27, the subnet mask bits reveal the network ID is 10.239.232.0 and broadcast address is 10.239.232.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4600 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "11.50 ms",
      "27.50 ms",
      "230.00 ms",
      "23.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4600 bits / (200 * 1000 bps) = 23.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3990 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "505.455 ms",
      "349.470 ms",
      "84.242 ms",
      "336.970 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3990 * 1024 * 8) / (97 * 10^6) = 336.970 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1220 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "256.263 ms",
      "384.394 ms",
      "268.763 ms",
      "64.066 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1220 * 1024 * 8) / (39 * 10^6) = 256.263 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3450 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "172.50 ms",
      "86.25 ms",
      "177.00 ms",
      "1725.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3450 bits / (20 * 1000 bps) = 172.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.131.90 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.131.95",
      "192.168.131.32",
      "192.168.131.96",
      "192.168.132.64"
    ],
    "answer": 0,
    "explanation": "For host 192.168.131.90/27, the subnet mask bits reveal the network ID is 192.168.131.64 and broadcast address is 192.168.131.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.132.117.61 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.132.117.0",
      "10.132.118.0",
      "10.132.117.0",
      "10.132.119.255"
    ],
    "answer": 3,
    "explanation": "For host 10.132.117.61/22, the subnet mask bits reveal the network ID is 10.132.116.0 and broadcast address is 10.132.119.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3990 KB over a point-to-point network link with transmission bandwidth rate of 54 Mbps. What is the theoretical transmission delay?",
    "options": [
      "151.324 ms",
      "605.298 ms",
      "617.798 ms",
      "907.947 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3990 * 1024 * 8) / (54 * 10^6) = 605.298 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1380 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1059.840 ms",
      "706.560 ms",
      "176.640 ms",
      "719.060 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1380 * 1024 * 8) / (16 * 10^6) = 706.560 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2630 KB over a point-to-point network link with transmission bandwidth rate of 28 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1154.194 ms",
      "192.366 ms",
      "769.463 ms",
      "781.963 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2630 * 1024 * 8) / (28 * 10^6) = 769.463 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4150 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "207.50 ms",
      "10.38 ms",
      "20.75 ms",
      "25.25 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4150 bits / (200 * 1000 bps) = 20.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.124.10 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.124.16",
      "172.22.125.8",
      "172.22.124.0",
      "172.22.124.15"
    ],
    "answer": 3,
    "explanation": "For host 172.22.124.10/29, the subnet mask bits reveal the network ID is 172.22.124.8 and broadcast address is 172.22.124.15."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.148.209 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.148.0",
      "255.255.255.255",
      "192.168.149.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.148.209/23, the subnet mask bits reveal the network ID is 192.168.148.0 and broadcast address is 192.168.149.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3530 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "14471.380 ms",
      "21688.320 ms",
      "14458.880 ms",
      "3614.720 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3530 * 1024 * 8) / (2 * 10^6) = 14458.880 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.144.107 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.144.96",
      "172.19.144.112",
      "172.19.145.104",
      "172.19.144.111"
    ],
    "answer": 3,
    "explanation": "For host 172.19.144.107/29, the subnet mask bits reveal the network ID is 172.19.144.104 and broadcast address is 172.19.144.111."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3100 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "155.00 ms",
      "314.50 ms",
      "3100.00 ms",
      "310.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3100 bits / (10 * 1000 bps) = 310.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "4.13 ms",
      "12.75 ms",
      "82.50 ms",
      "8.25 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1650 bits / (200 * 1000 bps) = 8.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 980 KB over a point-to-point network link with transmission bandwidth rate of 14 Mbps. What is the theoretical transmission delay?",
    "options": [
      "573.440 ms",
      "143.360 ms",
      "860.160 ms",
      "585.940 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (980 * 1024 * 8) / (14 * 10^6) = 573.440 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.244.79 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.244.80",
      "172.24.244.72",
      "172.24.245.76",
      "172.24.244.79"
    ],
    "answer": 3,
    "explanation": "For host 172.24.244.79/30, the subnet mask bits reveal the network ID is 172.24.244.76 and broadcast address is 172.24.244.79."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2750 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "55.00 ms",
      "5.50 ms",
      "2.75 ms",
      "10.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2750 bits / (500 * 1000 bps) = 5.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.150.123 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.150.128",
      "192.168.150.112",
      "192.168.150.96",
      "192.168.151.112"
    ],
    "answer": 1,
    "explanation": "For host 192.168.150.123/28, the subnet mask bits reveal the network ID is 192.168.150.112 and broadcast address is 192.168.150.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2030 KB over a point-to-point network link with transmission bandwidth rate of 73 Mbps. What is the theoretical transmission delay?",
    "options": [
      "56.951 ms",
      "240.305 ms",
      "227.805 ms",
      "341.707 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2030 * 1024 * 8) / (73 * 10^6) = 227.805 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.76.113 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.79.255",
      "192.168.76.0",
      "192.168.77.0",
      "192.168.76.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.76.113/22, the subnet mask bits reveal the network ID is 192.168.76.0 and broadcast address is 192.168.79.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.118.109.93 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.118.109.255",
      "10.118.110.0",
      "10.118.109.0",
      "10.118.109.0"
    ],
    "answer": 0,
    "explanation": "For host 10.118.109.93/23, the subnet mask bits reveal the network ID is 10.118.108.0 and broadcast address is 10.118.109.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2800 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "56.00 ms",
      "10.10 ms",
      "2.80 ms",
      "5.60 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2800 bits / (500 * 1000 bps) = 5.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3310 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "524.114 ms",
      "767.420 ms",
      "127.903 ms",
      "511.614 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3310 * 1024 * 8) / (53 * 10^6) = 511.614 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2250 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "45.00 ms",
      "450.00 ms",
      "49.50 ms",
      "22.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2250 bits / (50 * 1000 bps) = 45.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.146.201 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.147.255",
      "192.168.147.0",
      "192.168.146.0",
      "192.168.146.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.146.201/22, the subnet mask bits reveal the network ID is 192.168.144.0 and broadcast address is 192.168.147.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.157.118 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.158.116",
      "172.28.157.112",
      "172.28.157.119",
      "172.28.157.120"
    ],
    "answer": 2,
    "explanation": "For host 172.28.157.118/30, the subnet mask bits reveal the network ID is 172.28.157.116 and broadcast address is 172.28.157.119."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2550 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.10 ms",
      "51.00 ms",
      "9.60 ms",
      "2.55 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2550 bits / (500 * 1000 bps) = 5.10 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2610 KB over a point-to-point network link with transmission bandwidth rate of 88 Mbps. What is the theoretical transmission delay?",
    "options": [
      "255.467 ms",
      "242.967 ms",
      "364.451 ms",
      "60.742 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2610 * 1024 * 8) / (88 * 10^6) = 242.967 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.62.199 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.63.192",
      "172.20.62.184",
      "172.20.62.199",
      "172.20.62.200"
    ],
    "answer": 2,
    "explanation": "For host 172.20.62.199/29, the subnet mask bits reveal the network ID is 172.20.62.192 and broadcast address is 172.20.62.199."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2780 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "123.770 ms",
      "507.582 ms",
      "495.082 ms",
      "742.623 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2780 * 1024 * 8) / (46 * 10^6) = 495.082 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.194.254.58 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.194.255.56",
      "10.194.254.48",
      "10.194.254.64",
      "10.194.254.63"
    ],
    "answer": 3,
    "explanation": "For host 10.194.254.58/29, the subnet mask bits reveal the network ID is 10.194.254.56 and broadcast address is 10.194.254.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3020 KB over a point-to-point network link with transmission bandwidth rate of 24 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1043.327 ms",
      "257.707 ms",
      "1030.827 ms",
      "1546.240 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3020 * 1024 * 8) / (24 * 10^6) = 1030.827 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4950 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "495.00 ms",
      "54.00 ms",
      "24.75 ms",
      "49.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4950 bits / (100 * 1000 bps) = 49.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.74.15 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.74.8",
      "192.168.75.12",
      "192.168.74.16",
      "192.168.74.15"
    ],
    "answer": 3,
    "explanation": "For host 192.168.74.15/30, the subnet mask bits reveal the network ID is 192.168.74.12 and broadcast address is 192.168.74.15."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3250 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "16.25 ms",
      "37.00 ms",
      "325.00 ms",
      "32.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3250 bits / (100 * 1000 bps) = 32.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.205.25.92 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.205.24.0",
      "10.205.25.0",
      "10.205.26.0",
      "10.205.25.0"
    ],
    "answer": 0,
    "explanation": "For host 10.205.25.92/23, the subnet mask bits reveal the network ID is 10.205.24.0 and broadcast address is 10.205.25.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.36.136 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.36.0",
      "192.168.37.128",
      "192.168.36.0",
      "192.168.36.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.36.136/25, the subnet mask bits reveal the network ID is 192.168.36.128 and broadcast address is 192.168.36.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1970 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2017.280 ms",
      "504.320 ms",
      "2029.780 ms",
      "3025.920 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1970 * 1024 * 8) / (8 * 10^6) = 2017.280 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 620 KB over a point-to-point network link with transmission bandwidth rate of 54 Mbps. What is the theoretical transmission delay?",
    "options": [
      "106.556 ms",
      "94.056 ms",
      "23.514 ms",
      "141.084 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (620 * 1024 * 8) / (54 * 10^6) = 94.056 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "525.00 ms",
      "529.50 ms",
      "262.50 ms",
      "5250.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5250 bits / (10 * 1000 bps) = 525.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.212.123.63 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.212.123.63",
      "10.212.123.32",
      "10.212.124.48",
      "10.212.123.64"
    ],
    "answer": 0,
    "explanation": "For host 10.212.123.63/28, the subnet mask bits reveal the network ID is 10.212.123.48 and broadcast address is 10.212.123.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "5700.00 ms",
      "570.00 ms",
      "574.50 ms",
      "285.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5700 bits / (10 * 1000 bps) = 570.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.37.160 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.37.192",
      "192.168.37.128",
      "192.168.37.64",
      "192.168.38.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.37.160/26, the subnet mask bits reveal the network ID is 192.168.37.128 and broadcast address is 192.168.37.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4600 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "46.00 ms",
      "920.00 ms",
      "92.00 ms",
      "96.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4600 bits / (50 * 1000 bps) = 92.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.35.253 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.30.36.128",
      "172.30.35.0",
      "172.30.35.0",
      "172.30.35.255"
    ],
    "answer": 3,
    "explanation": "For host 172.30.35.253/25, the subnet mask bits reveal the network ID is 172.30.35.128 and broadcast address is 172.30.35.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.26.83.137 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.26.83.0",
      "10.26.84.0",
      "10.26.83.0",
      "10.26.82.0"
    ],
    "answer": 3,
    "explanation": "For host 10.26.83.137/23, the subnet mask bits reveal the network ID is 10.26.82.0 and broadcast address is 10.26.83.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.89.226.170 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.89.227.0",
      "255.255.255.255",
      "10.89.226.0"
    ],
    "answer": 3,
    "explanation": "For host 10.89.226.170/24, the subnet mask bits reveal the network ID is 10.89.226.0 and broadcast address is 10.89.226.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "130.00 ms",
      "260.00 ms",
      "264.50 ms",
      "2600.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5200 bits / (20 * 1000 bps) = 260.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3400 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "6.80 ms",
      "68.00 ms",
      "11.30 ms",
      "3.40 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3400 bits / (500 * 1000 bps) = 6.80 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "16.50 ms",
      "165.00 ms",
      "21.00 ms",
      "8.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1650 bits / (100 * 1000 bps) = 16.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2030 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "501.611 ms",
      "733.666 ms",
      "489.111 ms",
      "122.278 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2030 * 1024 * 8) / (34 * 10^6) = 489.111 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2020 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "285.308 ms",
      "202.705 ms",
      "47.551 ms",
      "190.205 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2020 * 1024 * 8) / (87 * 10^6) = 190.205 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1130 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "210.385 ms",
      "140.257 ms",
      "35.064 ms",
      "152.757 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1130 * 1024 * 8) / (66 * 10^6) = 140.257 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1900 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "19.00 ms",
      "38.00 ms",
      "42.50 ms",
      "380.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1900 bits / (50 * 1000 bps) = 38.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4030 KB over a point-to-point network link with transmission bandwidth rate of 93 Mbps. What is the theoretical transmission delay?",
    "options": [
      "88.747 ms",
      "354.987 ms",
      "367.487 ms",
      "532.480 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4030 * 1024 * 8) / (93 * 10^6) = 354.987 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 260 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "76.069 ms",
      "304.274 ms",
      "456.411 ms",
      "316.774 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (260 * 1024 * 8) / (7 * 10^6) = 304.274 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.78.182 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.78.192",
      "192.168.78.160",
      "192.168.78.128",
      "192.168.79.160"
    ],
    "answer": 1,
    "explanation": "For host 192.168.78.182/27, the subnet mask bits reveal the network ID is 192.168.78.160 and broadcast address is 192.168.78.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1950 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "39.00 ms",
      "390.00 ms",
      "19.50 ms",
      "43.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1950 bits / (50 * 1000 bps) = 39.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1780 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "347.185 ms",
      "86.796 ms",
      "520.777 ms",
      "359.685 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1780 * 1024 * 8) / (42 * 10^6) = 347.185 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4600 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "230.00 ms",
      "460.00 ms",
      "4600.00 ms",
      "464.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4600 bits / (10 * 1000 bps) = 460.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.208.143.198 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.208.144.196",
      "10.208.143.192",
      "10.208.143.199",
      "10.208.143.200"
    ],
    "answer": 2,
    "explanation": "For host 10.208.143.198/30, the subnet mask bits reveal the network ID is 10.208.143.196 and broadcast address is 10.208.143.199."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 320 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "97.063 ms",
      "21.141 ms",
      "126.844 ms",
      "84.563 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (320 * 1024 * 8) / (31 * 10^6) = 84.563 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2850 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "14.25 ms",
      "18.75 ms",
      "7.13 ms",
      "142.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2850 bits / (200 * 1000 bps) = 14.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4150 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "415.00 ms",
      "4150.00 ms",
      "207.50 ms",
      "419.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4150 bits / (10 * 1000 bps) = 415.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1050 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "57.00 ms",
      "26.25 ms",
      "525.00 ms",
      "52.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1050 bits / (20 * 1000 bps) = 52.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.158.8 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.159.0",
      "255.255.255.255",
      "192.168.158.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 192.168.158.8/24, the subnet mask bits reveal the network ID is 192.168.158.0 and broadcast address is 192.168.158.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3350 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "16.75 ms",
      "8.38 ms",
      "167.50 ms",
      "21.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3350 bits / (200 * 1000 bps) = 16.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.248.29 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.249.28",
      "192.168.248.28",
      "192.168.248.32",
      "192.168.248.24"
    ],
    "answer": 1,
    "explanation": "For host 192.168.248.29/30, the subnet mask bits reveal the network ID is 192.168.248.28 and broadcast address is 192.168.248.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.202.160.221 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.202.160.0",
      "10.202.160.0",
      "10.202.160.128",
      "10.202.161.128"
    ],
    "answer": 2,
    "explanation": "For host 10.202.160.221/25, the subnet mask bits reveal the network ID is 10.202.160.128 and broadcast address is 10.202.160.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.180.168 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.181.160",
      "192.168.180.192",
      "192.168.180.128",
      "192.168.180.160"
    ],
    "answer": 3,
    "explanation": "For host 192.168.180.168/27, the subnet mask bits reveal the network ID is 192.168.180.160 and broadcast address is 192.168.180.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.172.140.67 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.172.140.0",
      "255.255.255.255",
      "10.172.141.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 10.172.140.67/24, the subnet mask bits reveal the network ID is 10.172.140.0 and broadcast address is 10.172.140.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3650 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "18.25 ms",
      "22.75 ms",
      "182.50 ms",
      "9.13 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3650 bits / (200 * 1000 bps) = 18.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.18.140.125 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.18.140.128",
      "10.18.140.124",
      "10.18.141.124",
      "10.18.140.120"
    ],
    "answer": 1,
    "explanation": "For host 10.18.140.125/30, the subnet mask bits reveal the network ID is 10.18.140.124 and broadcast address is 10.18.140.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.93.38 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.93.0",
      "172.24.93.0",
      "172.24.94.0",
      "172.24.92.0"
    ],
    "answer": 3,
    "explanation": "For host 172.24.93.38/23, the subnet mask bits reveal the network ID is 172.24.92.0 and broadcast address is 172.24.93.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.15.172.107 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.15.172.128",
      "10.15.173.64",
      "10.15.172.64",
      "10.15.172.0"
    ],
    "answer": 2,
    "explanation": "For host 10.15.172.107/26, the subnet mask bits reveal the network ID is 10.15.172.64 and broadcast address is 10.15.172.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2340 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "324.903 ms",
      "487.355 ms",
      "337.403 ms",
      "81.226 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2340 * 1024 * 8) / (59 * 10^6) = 324.903 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2530 KB over a point-to-point network link with transmission bandwidth rate of 81 Mbps. What is the theoretical transmission delay?",
    "options": [
      "255.874 ms",
      "63.968 ms",
      "268.374 ms",
      "383.810 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2530 * 1024 * 8) / (81 * 10^6) = 255.874 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4500 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "225.00 ms",
      "2250.00 ms",
      "229.50 ms",
      "112.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4500 bits / (20 * 1000 bps) = 225.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4400 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "99.024 ms",
      "396.097 ms",
      "408.597 ms",
      "594.145 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4400 * 1024 * 8) / (91 * 10^6) = 396.097 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.84.222 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.84.160",
      "192.168.85.192",
      "192.168.84.223",
      "192.168.84.224"
    ],
    "answer": 2,
    "explanation": "For host 192.168.84.222/27, the subnet mask bits reveal the network ID is 192.168.84.192 and broadcast address is 192.168.84.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1590 KB over a point-to-point network link with transmission bandwidth rate of 29 Mbps. What is the theoretical transmission delay?",
    "options": [
      "112.287 ms",
      "673.721 ms",
      "449.148 ms",
      "461.648 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1590 * 1024 * 8) / (29 * 10^6) = 449.148 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1150 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "62.00 ms",
      "28.75 ms",
      "575.00 ms",
      "57.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1150 bits / (20 * 1000 bps) = 57.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "117.50 ms",
      "1130.00 ms",
      "56.50 ms",
      "113.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5650 bits / (50 * 1000 bps) = 113.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.41.199 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.41.160",
      "192.168.41.223",
      "192.168.41.224",
      "192.168.42.192"
    ],
    "answer": 1,
    "explanation": "For host 192.168.41.199/27, the subnet mask bits reveal the network ID is 192.168.41.192 and broadcast address is 192.168.41.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 640 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "886.313 ms",
      "218.453 ms",
      "1310.720 ms",
      "873.813 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (640 * 1024 * 8) / (6 * 10^6) = 873.813 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2010 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "70.974 ms",
      "283.895 ms",
      "296.395 ms",
      "425.843 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2010 * 1024 * 8) / (58 * 10^6) = 283.895 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4630 KB over a point-to-point network link with transmission bandwidth rate of 81 Mbps. What is the theoretical transmission delay?",
    "options": [
      "702.388 ms",
      "468.259 ms",
      "117.065 ms",
      "480.759 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4630 * 1024 * 8) / (81 * 10^6) = 468.259 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.183.170 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.183.0",
      "192.168.183.128",
      "192.168.183.0",
      "192.168.184.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.183.170/25, the subnet mask bits reveal the network ID is 192.168.183.128 and broadcast address is 192.168.183.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4970 KB over a point-to-point network link with transmission bandwidth rate of 11 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5551.942 ms",
      "3701.295 ms",
      "3713.795 ms",
      "925.324 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4970 * 1024 * 8) / (11 * 10^6) = 3701.295 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.87.174.251 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.87.175.0",
      "10.87.174.0",
      "10.87.174.0",
      "10.87.174.255"
    ],
    "answer": 3,
    "explanation": "For host 10.87.174.251/24, the subnet mask bits reveal the network ID is 10.87.174.0 and broadcast address is 10.87.174.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 220 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "31.273 ms",
      "18.773 ms",
      "28.160 ms",
      "4.693 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (220 * 1024 * 8) / (96 * 10^6) = 18.773 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.146.235.248 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.146.235.0",
      "10.146.235.255",
      "10.146.235.0",
      "10.146.236.128"
    ],
    "answer": 1,
    "explanation": "For host 10.146.235.248/25, the subnet mask bits reveal the network ID is 10.146.235.128 and broadcast address is 10.146.235.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4200 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "404.781 ms",
      "417.281 ms",
      "607.172 ms",
      "101.195 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4200 * 1024 * 8) / (85 * 10^6) = 404.781 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4210 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2249.238 ms",
      "374.873 ms",
      "1511.992 ms",
      "1499.492 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4210 * 1024 * 8) / (23 * 10^6) = 1499.492 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5750 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "143.75 ms",
      "292.00 ms",
      "287.50 ms",
      "2875.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5750 bits / (20 * 1000 bps) = 287.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.246.222 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.246.128",
      "172.30.247.192",
      "172.30.246.192",
      "172.30.246.0"
    ],
    "answer": 2,
    "explanation": "For host 172.30.246.222/26, the subnet mask bits reveal the network ID is 172.30.246.192 and broadcast address is 172.30.246.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.24.76 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.24.80",
      "192.168.25.76",
      "192.168.24.72",
      "192.168.24.76"
    ],
    "answer": 3,
    "explanation": "For host 192.168.24.76/30, the subnet mask bits reveal the network ID is 192.168.24.76 and broadcast address is 192.168.24.79."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3060 KB over a point-to-point network link with transmission bandwidth rate of 11 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2291.365 ms",
      "569.716 ms",
      "3418.298 ms",
      "2278.865 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3060 * 1024 * 8) / (11 * 10^6) = 2278.865 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "5000.00 ms",
      "250.00 ms",
      "504.50 ms",
      "500.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5000 bits / (10 * 1000 bps) = 500.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3830 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3620.234 ms",
      "603.372 ms",
      "2425.989 ms",
      "2413.489 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3830 * 1024 * 8) / (13 * 10^6) = 2413.489 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3640 KB over a point-to-point network link with transmission bandwidth rate of 76 Mbps. What is the theoretical transmission delay?",
    "options": [
      "588.531 ms",
      "404.854 ms",
      "98.088 ms",
      "392.354 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3640 * 1024 * 8) / (76 * 10^6) = 392.354 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.175.123 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.175.255",
      "172.16.175.0",
      "172.16.175.0",
      "172.16.176.0"
    ],
    "answer": 0,
    "explanation": "For host 172.16.175.123/24, the subnet mask bits reveal the network ID is 172.16.175.0 and broadcast address is 172.16.175.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.85.103.87 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.85.103.0",
      "10.85.104.0",
      "10.85.103.255",
      "10.85.103.0"
    ],
    "answer": 2,
    "explanation": "For host 10.85.103.87/23, the subnet mask bits reveal the network ID is 10.85.102.0 and broadcast address is 10.85.103.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.138.152 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.138.0",
      "192.168.139.128",
      "192.168.138.0",
      "192.168.138.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.138.152/25, the subnet mask bits reveal the network ID is 192.168.138.128 and broadcast address is 192.168.138.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5600 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "284.50 ms",
      "280.00 ms",
      "2800.00 ms",
      "140.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5600 bits / (20 * 1000 bps) = 280.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.245.212.204 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.245.213.0",
      "255.255.255.255",
      "10.245.212.0"
    ],
    "answer": 3,
    "explanation": "For host 10.245.212.204/23, the subnet mask bits reveal the network ID is 10.245.212.0 and broadcast address is 10.245.213.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.224.209 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "192.168.225.0",
      "192.168.224.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.224.209/24, the subnet mask bits reveal the network ID is 192.168.224.0 and broadcast address is 192.168.224.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.138.21 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.139.0",
      "255.255.255.255",
      "192.168.138.32",
      "192.168.138.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.138.21/27, the subnet mask bits reveal the network ID is 192.168.138.0 and broadcast address is 192.168.138.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2170 KB over a point-to-point network link with transmission bandwidth rate of 28 Mbps. What is the theoretical transmission delay?",
    "options": [
      "647.380 ms",
      "952.320 ms",
      "634.880 ms",
      "158.720 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2170 * 1024 * 8) / (28 * 10^6) = 634.880 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4050 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "24.75 ms",
      "10.13 ms",
      "20.25 ms",
      "202.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4050 bits / (200 * 1000 bps) = 20.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.201.193 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.201.192",
      "192.168.201.200",
      "192.168.201.184",
      "192.168.202.192"
    ],
    "answer": 0,
    "explanation": "For host 192.168.201.193/29, the subnet mask bits reveal the network ID is 192.168.201.192 and broadcast address is 192.168.201.199."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "22.50 ms",
      "180.00 ms",
      "18.00 ms",
      "9.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3600 bits / (200 * 1000 bps) = 18.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3230 KB over a point-to-point network link with transmission bandwidth rate of 24 Mbps. What is the theoretical transmission delay?",
    "options": [
      "275.627 ms",
      "1653.760 ms",
      "1115.007 ms",
      "1102.507 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3230 * 1024 * 8) / (24 * 10^6) = 1102.507 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5350 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "107.00 ms",
      "1070.00 ms",
      "111.50 ms",
      "53.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5350 bits / (50 * 1000 bps) = 107.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.42.14.167 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.42.14.164",
      "10.42.15.164",
      "10.42.14.160",
      "10.42.14.168"
    ],
    "answer": 0,
    "explanation": "For host 10.42.14.167/30, the subnet mask bits reveal the network ID is 10.42.14.164 and broadcast address is 10.42.14.167."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "124.50 ms",
      "60.00 ms",
      "120.00 ms",
      "1200.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1200 bits / (10 * 1000 bps) = 120.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3250 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "329.50 ms",
      "3250.00 ms",
      "162.50 ms",
      "325.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3250 bits / (10 * 1000 bps) = 325.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3500 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "22.00 ms",
      "175.00 ms",
      "17.50 ms",
      "8.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3500 bits / (200 * 1000 bps) = 17.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "42.50 ms",
      "850.00 ms",
      "85.00 ms",
      "89.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1700 bits / (20 * 1000 bps) = 85.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1900 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "95.00 ms",
      "9.50 ms",
      "14.00 ms",
      "4.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1900 bits / (200 * 1000 bps) = 9.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "78.50 ms",
      "740.00 ms",
      "37.00 ms",
      "74.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3700 bits / (50 * 1000 bps) = 74.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1900 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "95.00 ms",
      "950.00 ms",
      "99.50 ms",
      "47.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1900 bits / (20 * 1000 bps) = 95.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2900 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1450.00 ms",
      "149.50 ms",
      "145.00 ms",
      "72.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2900 bits / (20 * 1000 bps) = 145.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.196.30 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.196.0",
      "172.28.196.127",
      "172.28.197.0",
      "172.28.196.128"
    ],
    "answer": 1,
    "explanation": "For host 172.28.196.30/25, the subnet mask bits reveal the network ID is 172.28.196.0 and broadcast address is 172.28.196.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "17.00 ms",
      "170.00 ms",
      "21.50 ms",
      "8.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1700 bits / (100 * 1000 bps) = 17.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4750 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "28.25 ms",
      "237.50 ms",
      "11.88 ms",
      "23.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4750 bits / (200 * 1000 bps) = 23.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "152.50 ms",
      "1525.00 ms",
      "157.00 ms",
      "76.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3050 bits / (20 * 1000 bps) = 152.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4740 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "685.237 ms",
      "456.824 ms",
      "469.324 ms",
      "114.206 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4740 * 1024 * 8) / (85 * 10^6) = 456.824 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1320 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "112.640 ms",
      "125.140 ms",
      "168.960 ms",
      "28.160 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1320 * 1024 * 8) / (96 * 10^6) = 112.640 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.176.223 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.176.0",
      "172.26.176.255",
      "172.26.177.0",
      "172.26.176.0"
    ],
    "answer": 1,
    "explanation": "For host 172.26.176.223/24, the subnet mask bits reveal the network ID is 172.26.176.0 and broadcast address is 172.26.176.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.229.185 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.229.176",
      "192.168.229.160",
      "192.168.230.176",
      "192.168.229.192"
    ],
    "answer": 0,
    "explanation": "For host 192.168.229.185/28, the subnet mask bits reveal the network ID is 192.168.229.176 and broadcast address is 192.168.229.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4750 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "100.289 ms",
      "601.732 ms",
      "413.655 ms",
      "401.155 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4750 * 1024 * 8) / (97 * 10^6) = 401.155 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2220 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "383.648 ms",
      "371.148 ms",
      "92.787 ms",
      "556.722 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2220 * 1024 * 8) / (49 * 10^6) = 371.148 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1700 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "4.25 ms",
      "85.00 ms",
      "8.50 ms",
      "13.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1700 bits / (200 * 1000 bps) = 8.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3150 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "630.00 ms",
      "63.00 ms",
      "67.50 ms",
      "31.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3150 bits / (50 * 1000 bps) = 63.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2950 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "299.50 ms",
      "295.00 ms",
      "147.50 ms",
      "2950.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2950 bits / (10 * 1000 bps) = 295.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 300 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "25.869 ms",
      "38.369 ms",
      "6.467 ms",
      "38.804 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (300 * 1024 * 8) / (95 * 10^6) = 25.869 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.113.60.23 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.113.60.32",
      "10.113.60.0",
      "10.113.60.16",
      "10.113.61.16"
    ],
    "answer": 2,
    "explanation": "For host 10.113.60.23/28, the subnet mask bits reveal the network ID is 10.113.60.16 and broadcast address is 10.113.60.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.142.19 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.22.142.32",
      "255.255.255.255",
      "172.22.142.0",
      "172.22.143.0"
    ],
    "answer": 2,
    "explanation": "For host 172.22.142.19/27, the subnet mask bits reveal the network ID is 172.22.142.0 and broadcast address is 172.22.142.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4500 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "454.50 ms",
      "225.00 ms",
      "450.00 ms",
      "4500.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4500 bits / (10 * 1000 bps) = 450.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.71.219 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.71.0",
      "172.30.71.192",
      "172.30.71.128",
      "172.30.72.192"
    ],
    "answer": 1,
    "explanation": "For host 172.30.71.219/26, the subnet mask bits reveal the network ID is 172.30.71.192 and broadcast address is 172.30.71.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.222.71.107 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.222.71.96",
      "10.222.71.64",
      "10.222.71.128",
      "10.222.72.96"
    ],
    "answer": 0,
    "explanation": "For host 10.222.71.107/27, the subnet mask bits reveal the network ID is 10.222.71.96 and broadcast address is 10.222.71.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 440 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "90.858 ms",
      "117.537 ms",
      "78.358 ms",
      "19.590 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (440 * 1024 * 8) / (46 * 10^6) = 78.358 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2130 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "568.988 ms",
      "391.825 ms",
      "94.831 ms",
      "379.325 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2130 * 1024 * 8) / (46 * 10^6) = 379.325 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4750 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "475.00 ms",
      "52.00 ms",
      "23.75 ms",
      "47.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4750 bits / (100 * 1000 bps) = 47.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1050 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "52.50 ms",
      "9.75 ms",
      "5.25 ms",
      "2.63 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1050 bits / (200 * 1000 bps) = 5.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "12.50 ms",
      "29.50 ms",
      "25.00 ms",
      "250.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5000 bits / (200 * 1000 bps) = 25.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "17.75 ms",
      "6.63 ms",
      "13.25 ms",
      "132.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2650 bits / (200 * 1000 bps) = 13.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.123.2 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.123.32",
      "192.168.123.0",
      "192.168.123.31",
      "192.168.124.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.123.2/27, the subnet mask bits reveal the network ID is 192.168.123.0 and broadcast address is 192.168.123.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4550 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "22.75 ms",
      "45.50 ms",
      "50.00 ms",
      "455.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4550 bits / (100 * 1000 bps) = 45.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.234.49 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.234.0",
      "192.168.234.64",
      "192.168.234.32",
      "192.168.235.32"
    ],
    "answer": 2,
    "explanation": "For host 192.168.234.49/27, the subnet mask bits reveal the network ID is 192.168.234.32 and broadcast address is 192.168.234.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 890 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "45.568 ms",
      "182.272 ms",
      "194.772 ms",
      "273.408 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (890 * 1024 * 8) / (40 * 10^6) = 182.272 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2450 KB over a point-to-point network link with transmission bandwidth rate of 35 Mbps. What is the theoretical transmission delay?",
    "options": [
      "573.440 ms",
      "143.360 ms",
      "860.160 ms",
      "585.940 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2450 * 1024 * 8) / (35 * 10^6) = 573.440 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.173.244.235 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.173.244.239",
      "10.173.244.208",
      "10.173.245.224",
      "10.173.244.240"
    ],
    "answer": 0,
    "explanation": "For host 10.173.244.235/28, the subnet mask bits reveal the network ID is 10.173.244.224 and broadcast address is 10.173.244.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.50.114 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.29.50.0",
      "172.29.51.255",
      "172.29.51.0",
      "172.29.50.0"
    ],
    "answer": 1,
    "explanation": "For host 172.29.50.114/23, the subnet mask bits reveal the network ID is 172.29.50.0 and broadcast address is 172.29.51.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.40.97 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.40.128",
      "192.168.40.127",
      "192.168.41.0",
      "192.168.40.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.40.97/25, the subnet mask bits reveal the network ID is 192.168.40.0 and broadcast address is 192.168.40.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3360 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "305.320 ms",
      "292.820 ms",
      "73.205 ms",
      "439.231 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3360 * 1024 * 8) / (94 * 10^6) = 292.820 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1640 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "76.335 ms",
      "458.007 ms",
      "305.338 ms",
      "317.838 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1640 * 1024 * 8) / (44 * 10^6) = 305.338 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1950 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "3.90 ms",
      "39.00 ms",
      "1.95 ms",
      "8.40 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1950 bits / (500 * 1000 bps) = 3.90 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.208.130 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.209.0",
      "255.255.255.255",
      "172.26.208.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 172.26.208.130/23, the subnet mask bits reveal the network ID is 172.26.208.0 and broadcast address is 172.26.209.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.201.11 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.201.0",
      "172.19.201.32",
      "172.19.201.31",
      "172.19.202.0"
    ],
    "answer": 2,
    "explanation": "For host 172.19.201.11/27, the subnet mask bits reveal the network ID is 172.19.201.0 and broadcast address is 172.19.201.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.153.5.123 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.153.5.128",
      "10.153.5.127",
      "10.153.6.112",
      "10.153.5.96"
    ],
    "answer": 1,
    "explanation": "For host 10.153.5.123/28, the subnet mask bits reveal the network ID is 10.153.5.112 and broadcast address is 10.153.5.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5750 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "115.00 ms",
      "1150.00 ms",
      "119.50 ms",
      "57.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5750 bits / (50 * 1000 bps) = 115.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.3.212 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.3.216",
      "192.168.4.212",
      "192.168.3.212",
      "192.168.3.208"
    ],
    "answer": 2,
    "explanation": "For host 192.168.3.212/30, the subnet mask bits reveal the network ID is 192.168.3.212 and broadcast address is 192.168.3.215."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.238.56 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.239.0",
      "255.255.255.255",
      "192.168.238.0",
      "192.168.238.128"
    ],
    "answer": 2,
    "explanation": "For host 192.168.238.56/25, the subnet mask bits reveal the network ID is 192.168.238.0 and broadcast address is 192.168.238.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 670 KB over a point-to-point network link with transmission bandwidth rate of 60 Mbps. What is the theoretical transmission delay?",
    "options": [
      "22.869 ms",
      "103.977 ms",
      "137.216 ms",
      "91.477 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (670 * 1024 * 8) / (60 * 10^6) = 91.477 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1260 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "218.069 ms",
      "157.879 ms",
      "36.345 ms",
      "145.379 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1260 * 1024 * 8) / (71 * 10^6) = 145.379 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.32.31 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.32.16",
      "192.168.32.32",
      "192.168.33.24",
      "192.168.32.31"
    ],
    "answer": 3,
    "explanation": "For host 192.168.32.31/29, the subnet mask bits reveal the network ID is 192.168.32.24 and broadcast address is 192.168.32.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2390 KB over a point-to-point network link with transmission bandwidth rate of 43 Mbps. What is the theoretical transmission delay?",
    "options": [
      "455.323 ms",
      "113.831 ms",
      "467.823 ms",
      "682.984 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2390 * 1024 * 8) / (43 * 10^6) = 455.323 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4300 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2935.467 ms",
      "2947.967 ms",
      "733.867 ms",
      "4403.200 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4300 * 1024 * 8) / (12 * 10^6) = 2935.467 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 200 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "26.006 ms",
      "38.506 ms",
      "39.010 ms",
      "6.502 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (200 * 1024 * 8) / (63 * 10^6) = 26.006 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4180 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "733.769 ms",
      "122.295 ms",
      "489.179 ms",
      "501.679 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4180 * 1024 * 8) / (70 * 10^6) = 489.179 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2050 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "14.75 ms",
      "5.13 ms",
      "10.25 ms",
      "102.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2050 bits / (200 * 1000 bps) = 10.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.191.109.66 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.191.109.0",
      "10.191.109.0",
      "10.191.108.0",
      "10.191.110.0"
    ],
    "answer": 2,
    "explanation": "For host 10.191.109.66/22, the subnet mask bits reveal the network ID is 10.191.108.0 and broadcast address is 10.191.111.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.132.29 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.132.63",
      "192.168.132.0",
      "192.168.132.64",
      "192.168.133.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.132.29/26, the subnet mask bits reveal the network ID is 192.168.132.0 and broadcast address is 192.168.132.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.246.110.152 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.246.111.128",
      "10.246.110.64",
      "10.246.110.192",
      "10.246.110.128"
    ],
    "answer": 3,
    "explanation": "For host 10.246.110.152/26, the subnet mask bits reveal the network ID is 10.246.110.128 and broadcast address is 10.246.110.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3900 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1774.933 ms",
      "295.822 ms",
      "1195.789 ms",
      "1183.289 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3900 * 1024 * 8) / (27 * 10^6) = 1183.289 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.47.54 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.44.0",
      "172.25.47.0",
      "172.25.48.0",
      "172.25.47.0"
    ],
    "answer": 0,
    "explanation": "For host 172.25.47.54/22, the subnet mask bits reveal the network ID is 172.25.44.0 and broadcast address is 172.25.47.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2300 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "16.00 ms",
      "115.00 ms",
      "11.50 ms",
      "5.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2300 bits / (200 * 1000 bps) = 11.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2610 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "712.704 ms",
      "1069.056 ms",
      "725.204 ms",
      "178.176 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2610 * 1024 * 8) / (30 * 10^6) = 712.704 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "11.70 ms",
      "16.20 ms",
      "117.00 ms",
      "5.85 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5850 bits / (500 * 1000 bps) = 11.70 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1300 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "7.10 ms",
      "1.30 ms",
      "26.00 ms",
      "2.60 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1300 bits / (500 * 1000 bps) = 2.60 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.1.202 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.2.0",
      "192.168.0.0",
      "192.168.1.0",
      "192.168.1.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.1.202/22, the subnet mask bits reveal the network ID is 192.168.0.0 and broadcast address is 192.168.3.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4850 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "242.50 ms",
      "2425.00 ms",
      "121.25 ms",
      "247.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4850 bits / (20 * 1000 bps) = 242.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5100 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "510.00 ms",
      "51.00 ms",
      "25.50 ms",
      "55.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5100 bits / (100 * 1000 bps) = 51.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3600 KB over a point-to-point network link with transmission bandwidth rate of 62 Mbps. What is the theoretical transmission delay?",
    "options": [
      "475.665 ms",
      "713.497 ms",
      "118.916 ms",
      "488.165 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3600 * 1024 * 8) / (62 * 10^6) = 475.665 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4600 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "115.00 ms",
      "2300.00 ms",
      "230.00 ms",
      "234.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4600 bits / (20 * 1000 bps) = 230.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3550 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "177.50 ms",
      "359.50 ms",
      "355.00 ms",
      "3550.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3550 bits / (10 * 1000 bps) = 355.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.31.7 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.32.0",
      "192.168.31.0",
      "192.168.31.15",
      "192.168.31.16"
    ],
    "answer": 2,
    "explanation": "For host 192.168.31.7/28, the subnet mask bits reveal the network ID is 192.168.31.0 and broadcast address is 192.168.31.15."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1350 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "6.75 ms",
      "67.50 ms",
      "3.38 ms",
      "11.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1350 bits / (200 * 1000 bps) = 6.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2000 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "910.222 ms",
      "619.315 ms",
      "151.704 ms",
      "606.815 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2000 * 1024 * 8) / (27 * 10^6) = 606.815 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "33.00 ms",
      "28.50 ms",
      "14.25 ms",
      "285.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2850 bits / (100 * 1000 bps) = 28.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2470 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "541.989 ms",
      "361.326 ms",
      "373.826 ms",
      "90.331 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2470 * 1024 * 8) / (56 * 10^6) = 361.326 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5800 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "58.00 ms",
      "62.50 ms",
      "580.00 ms",
      "29.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5800 bits / (100 * 1000 bps) = 58.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.165.203.35 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.165.204.0",
      "10.165.203.63",
      "10.165.203.0",
      "10.165.203.64"
    ],
    "answer": 1,
    "explanation": "For host 10.165.203.35/26, the subnet mask bits reveal the network ID is 10.165.203.0 and broadcast address is 10.165.203.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.163.254 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.163.0",
      "192.168.163.0",
      "192.168.163.255",
      "192.168.164.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.163.254/22, the subnet mask bits reveal the network ID is 192.168.160.0 and broadcast address is 192.168.163.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5500 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "55.00 ms",
      "1100.00 ms",
      "110.00 ms",
      "114.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5500 bits / (50 * 1000 bps) = 110.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 850 KB over a point-to-point network link with transmission bandwidth rate of 88 Mbps. What is the theoretical transmission delay?",
    "options": [
      "79.127 ms",
      "118.691 ms",
      "91.627 ms",
      "19.782 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (850 * 1024 * 8) / (88 * 10^6) = 79.127 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.123.27 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.123.0",
      "172.17.123.32",
      "172.17.123.31",
      "172.17.124.16"
    ],
    "answer": 2,
    "explanation": "For host 172.17.123.27/28, the subnet mask bits reveal the network ID is 172.17.123.16 and broadcast address is 172.17.123.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3350 KB over a point-to-point network link with transmission bandwidth rate of 73 Mbps. What is the theoretical transmission delay?",
    "options": [
      "388.434 ms",
      "375.934 ms",
      "563.901 ms",
      "93.984 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3350 * 1024 * 8) / (73 * 10^6) = 375.934 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.168.240 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.168.0",
      "192.168.169.0",
      "192.168.171.255",
      "192.168.168.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.168.240/22, the subnet mask bits reveal the network ID is 192.168.168.0 and broadcast address is 192.168.171.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1600 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "1600.00 ms",
      "164.50 ms",
      "80.00 ms",
      "160.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1600 bits / (10 * 1000 bps) = 160.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2050 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "102.50 ms",
      "1025.00 ms",
      "107.00 ms",
      "51.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2050 bits / (20 * 1000 bps) = 102.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1900.00 ms",
      "190.00 ms",
      "194.50 ms",
      "95.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3800 bits / (20 * 1000 bps) = 190.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.142.221 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.142.224",
      "192.168.142.223",
      "192.168.142.208",
      "192.168.143.216"
    ],
    "answer": 1,
    "explanation": "For host 192.168.142.221/29, the subnet mask bits reveal the network ID is 192.168.142.216 and broadcast address is 192.168.142.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3240 KB over a point-to-point network link with transmission bandwidth rate of 78 Mbps. What is the theoretical transmission delay?",
    "options": [
      "352.783 ms",
      "510.425 ms",
      "85.071 ms",
      "340.283 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3240 * 1024 * 8) / (78 * 10^6) = 340.283 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.224.129 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.224.0",
      "192.168.224.128",
      "192.168.224.0",
      "192.168.225.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.224.129/25, the subnet mask bits reveal the network ID is 192.168.224.128 and broadcast address is 192.168.224.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2250 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "5.63 ms",
      "112.50 ms",
      "11.25 ms",
      "15.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2250 bits / (200 * 1000 bps) = 11.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4430 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1327.703 ms",
      "221.284 ms",
      "897.636 ms",
      "885.136 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4430 * 1024 * 8) / (41 * 10^6) = 885.136 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2700 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "275.814 ms",
      "263.314 ms",
      "65.829 ms",
      "394.971 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2700 * 1024 * 8) / (84 * 10^6) = 263.314 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.254.110 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.255.255",
      "192.168.254.0",
      "192.168.255.0",
      "192.168.254.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.254.110/22, the subnet mask bits reveal the network ID is 192.168.252.0 and broadcast address is 192.168.255.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "36.00 ms",
      "360.00 ms",
      "18.00 ms",
      "40.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1800 bits / (50 * 1000 bps) = 36.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4500 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "94.50 ms",
      "90.00 ms",
      "900.00 ms",
      "45.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4500 bits / (50 * 1000 bps) = 90.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5050 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.05 ms",
      "10.10 ms",
      "101.00 ms",
      "14.60 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5050 bits / (500 * 1000 bps) = 10.10 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2180 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "315.187 ms",
      "75.672 ms",
      "454.031 ms",
      "302.687 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2180 * 1024 * 8) / (59 * 10^6) = 302.687 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 920 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "100.135 ms",
      "21.909 ms",
      "87.635 ms",
      "131.453 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (920 * 1024 * 8) / (86 * 10^6) = 87.635 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.164.64.16 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.164.65.0",
      "10.164.64.0",
      "10.164.64.32",
      "10.164.64.31"
    ],
    "answer": 3,
    "explanation": "For host 10.164.64.16/27, the subnet mask bits reveal the network ID is 10.164.64.0 and broadcast address is 10.164.64.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3350 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "534.608 ms",
      "356.405 ms",
      "89.101 ms",
      "368.905 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3350 * 1024 * 8) / (77 * 10^6) = 356.405 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.151.222.83 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.151.223.0",
      "10.151.222.0",
      "10.151.223.255",
      "10.151.222.0"
    ],
    "answer": 2,
    "explanation": "For host 10.151.222.83/23, the subnet mask bits reveal the network ID is 10.151.222.0 and broadcast address is 10.151.223.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4170 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "397.217 ms",
      "409.717 ms",
      "99.304 ms",
      "595.825 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4170 * 1024 * 8) / (86 * 10^6) = 397.217 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "530.00 ms",
      "57.50 ms",
      "26.50 ms",
      "53.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5300 bits / (100 * 1000 bps) = 53.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1050 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "146.900 ms",
      "201.600 ms",
      "134.400 ms",
      "33.600 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1050 * 1024 * 8) / (64 * 10^6) = 134.400 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.94.104 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.29.95.255",
      "172.29.94.0",
      "172.29.95.0",
      "172.29.94.0"
    ],
    "answer": 0,
    "explanation": "For host 172.29.94.104/23, the subnet mask bits reveal the network ID is 172.29.94.0 and broadcast address is 172.29.95.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.134.152.208 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.134.152.212",
      "10.134.153.208",
      "10.134.152.211",
      "10.134.152.204"
    ],
    "answer": 2,
    "explanation": "For host 10.134.152.208/30, the subnet mask bits reveal the network ID is 10.134.152.208 and broadcast address is 10.134.152.211."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4700 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1560.908 ms",
      "1040.605 ms",
      "260.151 ms",
      "1053.105 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4700 * 1024 * 8) / (37 * 10^6) = 1040.605 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4150 KB over a point-to-point network link with transmission bandwidth rate of 54 Mbps. What is the theoretical transmission delay?",
    "options": [
      "629.570 ms",
      "157.393 ms",
      "944.356 ms",
      "642.070 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4150 * 1024 * 8) / (54 * 10^6) = 629.570 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1150 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "6.80 ms",
      "1.15 ms",
      "2.30 ms",
      "23.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1150 bits / (500 * 1000 bps) = 2.30 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.131.74.242 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.131.74.0",
      "10.131.75.255",
      "10.131.75.0",
      "10.131.74.0"
    ],
    "answer": 1,
    "explanation": "For host 10.131.74.242/23, the subnet mask bits reveal the network ID is 10.131.74.0 and broadcast address is 10.131.75.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.129.195 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.129.192",
      "192.168.129.128",
      "192.168.129.0",
      "192.168.130.192"
    ],
    "answer": 0,
    "explanation": "For host 192.168.129.195/26, the subnet mask bits reveal the network ID is 192.168.129.192 and broadcast address is 192.168.129.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 820 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "775.089 ms",
      "516.726 ms",
      "129.182 ms",
      "529.226 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (820 * 1024 * 8) / (13 * 10^6) = 516.726 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4040 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "83.575 ms",
      "334.300 ms",
      "346.800 ms",
      "501.450 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4040 * 1024 * 8) / (99 * 10^6) = 334.300 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2020 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "299.057 ms",
      "211.872 ms",
      "199.372 ms",
      "49.843 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2020 * 1024 * 8) / (83 * 10^6) = 199.372 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1400 KB over a point-to-point network link with transmission bandwidth rate of 24 Mbps. What is the theoretical transmission delay?",
    "options": [
      "477.867 ms",
      "716.800 ms",
      "119.467 ms",
      "490.367 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1400 * 1024 * 8) / (24 * 10^6) = 477.867 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3950 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "395.00 ms",
      "44.00 ms",
      "19.75 ms",
      "39.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3950 bits / (100 * 1000 bps) = 39.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3300 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "66.00 ms",
      "70.50 ms",
      "33.00 ms",
      "660.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3300 bits / (50 * 1000 bps) = 66.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2510 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1297.620 ms",
      "1285.120 ms",
      "321.280 ms",
      "1927.680 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2510 * 1024 * 8) / (16 * 10^6) = 1285.120 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "5200.00 ms",
      "524.50 ms",
      "520.00 ms",
      "260.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5200 bits / (10 * 1000 bps) = 520.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1600 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "36.50 ms",
      "16.00 ms",
      "320.00 ms",
      "32.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1600 bits / (50 * 1000 bps) = 32.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "500.00 ms",
      "25.00 ms",
      "50.00 ms",
      "54.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5000 bits / (100 * 1000 bps) = 50.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3140 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "8574.293 ms",
      "12861.440 ms",
      "2143.573 ms",
      "8586.793 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3140 * 1024 * 8) / (3 * 10^6) = 8574.293 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.167.232.140 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.167.235.255",
      "10.167.233.0",
      "10.167.232.0",
      "10.167.232.0"
    ],
    "answer": 0,
    "explanation": "For host 10.167.232.140/22, the subnet mask bits reveal the network ID is 10.167.232.0 and broadcast address is 10.167.235.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2800 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "354.705 ms",
      "248.970 ms",
      "59.118 ms",
      "236.470 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2800 * 1024 * 8) / (97 * 10^6) = 236.470 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.185.111 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.185.112",
      "172.26.185.80",
      "172.26.186.96",
      "172.26.185.111"
    ],
    "answer": 3,
    "explanation": "For host 172.26.185.111/28, the subnet mask bits reveal the network ID is 172.26.185.96 and broadcast address is 172.26.185.111."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3320 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "498.169 ms",
      "485.669 ms",
      "121.417 ms",
      "728.503 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3320 * 1024 * 8) / (56 * 10^6) = 485.669 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.85.221 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.86.220",
      "192.168.85.224",
      "192.168.85.220",
      "192.168.85.216"
    ],
    "answer": 2,
    "explanation": "For host 192.168.85.221/30, the subnet mask bits reveal the network ID is 192.168.85.220 and broadcast address is 192.168.85.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "109.50 ms",
      "52.50 ms",
      "1050.00 ms",
      "105.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5250 bits / (50 * 1000 bps) = 105.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4750 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "949.073 ms",
      "961.573 ms",
      "237.268 ms",
      "1423.610 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4750 * 1024 * 8) / (41 * 10^6) = 949.073 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.193.165.208 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.193.165.192",
      "10.193.165.224",
      "10.193.165.208",
      "10.193.166.208"
    ],
    "answer": 2,
    "explanation": "For host 10.193.165.208/28, the subnet mask bits reveal the network ID is 10.193.165.208 and broadcast address is 10.193.165.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4900 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "24.50 ms",
      "49.00 ms",
      "490.00 ms",
      "53.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4900 bits / (100 * 1000 bps) = 49.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 820 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "28.954 ms",
      "115.818 ms",
      "128.318 ms",
      "173.727 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (820 * 1024 * 8) / (58 * 10^6) = 115.818 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.8.178 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.30.9.0",
      "172.30.8.255",
      "172.30.8.0",
      "172.30.8.0"
    ],
    "answer": 1,
    "explanation": "For host 172.30.8.178/24, the subnet mask bits reveal the network ID is 172.30.8.0 and broadcast address is 172.30.8.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.167.83.138 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.167.83.136",
      "10.167.84.136",
      "10.167.83.132",
      "10.167.83.140"
    ],
    "answer": 0,
    "explanation": "For host 10.167.83.138/30, the subnet mask bits reveal the network ID is 10.167.83.136 and broadcast address is 10.167.83.139."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4750 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "950.00 ms",
      "95.00 ms",
      "99.50 ms",
      "47.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4750 bits / (50 * 1000 bps) = 95.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.193.138 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.193.255",
      "192.168.193.0",
      "192.168.194.0",
      "192.168.193.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.193.138/24, the subnet mask bits reveal the network ID is 192.168.193.0 and broadcast address is 192.168.193.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.63.234 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.63.240",
      "192.168.63.224",
      "192.168.63.232",
      "192.168.64.232"
    ],
    "answer": 2,
    "explanation": "For host 192.168.63.234/29, the subnet mask bits reveal the network ID is 192.168.63.232 and broadcast address is 192.168.63.239."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2350 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "117.50 ms",
      "16.25 ms",
      "11.75 ms",
      "5.88 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2350 bits / (200 * 1000 bps) = 11.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "1.80 ms",
      "3.60 ms",
      "36.00 ms",
      "8.10 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1800 bits / (500 * 1000 bps) = 3.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "10.50 ms",
      "15.00 ms",
      "105.00 ms",
      "5.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5250 bits / (500 * 1000 bps) = 10.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 280 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "191.147 ms",
      "47.787 ms",
      "286.720 ms",
      "203.647 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (280 * 1024 * 8) / (12 * 10^6) = 191.147 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3450 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "172.50 ms",
      "17.25 ms",
      "8.63 ms",
      "21.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3450 bits / (200 * 1000 bps) = 17.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.104.30 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.29.104.0",
      "255.255.255.255",
      "255.255.255.255",
      "172.29.105.0"
    ],
    "answer": 0,
    "explanation": "For host 172.29.104.30/23, the subnet mask bits reveal the network ID is 172.29.104.0 and broadcast address is 172.29.105.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2800 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "70.00 ms",
      "144.50 ms",
      "1400.00 ms",
      "140.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2800 bits / (20 * 1000 bps) = 140.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1100 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "22.00 ms",
      "26.50 ms",
      "11.00 ms",
      "220.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1100 bits / (50 * 1000 bps) = 22.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1750 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "17.50 ms",
      "175.00 ms",
      "22.00 ms",
      "8.75 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1750 bits / (100 * 1000 bps) = 17.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1250 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "30.843 ms",
      "123.373 ms",
      "135.873 ms",
      "185.060 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1250 * 1024 * 8) / (83 * 10^6) = 123.373 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4640 KB over a point-to-point network link with transmission bandwidth rate of 45 Mbps. What is the theoretical transmission delay?",
    "options": [
      "211.172 ms",
      "1267.029 ms",
      "844.686 ms",
      "857.186 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4640 * 1024 * 8) / (45 * 10^6) = 844.686 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1400 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "14.00 ms",
      "280.00 ms",
      "32.50 ms",
      "28.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1400 bits / (50 * 1000 bps) = 28.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3480 KB over a point-to-point network link with transmission bandwidth rate of 76 Mbps. What is the theoretical transmission delay?",
    "options": [
      "93.777 ms",
      "387.607 ms",
      "562.661 ms",
      "375.107 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3480 * 1024 * 8) / (76 * 10^6) = 375.107 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1350 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "13.50 ms",
      "270.00 ms",
      "27.00 ms",
      "31.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1350 bits / (50 * 1000 bps) = 27.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4200 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "84.00 ms",
      "88.50 ms",
      "42.00 ms",
      "840.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4200 bits / (50 * 1000 bps) = 84.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1480 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "416.639 ms",
      "101.035 ms",
      "606.208 ms",
      "404.139 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1480 * 1024 * 8) / (30 * 10^6) = 404.139 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4050 KB over a point-to-point network link with transmission bandwidth rate of 48 Mbps. What is the theoretical transmission delay?",
    "options": [
      "691.200 ms",
      "172.800 ms",
      "1036.800 ms",
      "703.700 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4050 * 1024 * 8) / (48 * 10^6) = 691.200 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4680 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "727.947 ms",
      "497.798 ms",
      "485.298 ms",
      "121.325 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4680 * 1024 * 8) / (79 * 10^6) = 485.298 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4270 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "505.174 ms",
      "492.674 ms",
      "123.168 ms",
      "739.011 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4270 * 1024 * 8) / (71 * 10^6) = 492.674 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.22.74.94 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.22.75.0",
      "10.22.74.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 10.22.74.94/23, the subnet mask bits reveal the network ID is 10.22.74.0 and broadcast address is 10.22.75.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3550 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "35.50 ms",
      "40.00 ms",
      "17.75 ms",
      "355.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3550 bits / (100 * 1000 bps) = 35.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.253.86 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.16.253.64",
      "172.16.253.96",
      "172.16.254.64",
      "172.16.253.32"
    ],
    "answer": 0,
    "explanation": "For host 172.16.253.86/27, the subnet mask bits reveal the network ID is 172.16.253.64 and broadcast address is 172.16.253.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4520 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5289.691 ms",
      "1322.423 ms",
      "5302.191 ms",
      "7934.537 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4520 * 1024 * 8) / (7 * 10^6) = 5289.691 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.177.152 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.177.64",
      "192.168.177.128",
      "192.168.178.128",
      "192.168.177.192"
    ],
    "answer": 1,
    "explanation": "For host 192.168.177.152/26, the subnet mask bits reveal the network ID is 192.168.177.128 and broadcast address is 192.168.177.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.39.60 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.39.0",
      "192.168.39.255",
      "192.168.39.0",
      "192.168.40.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.39.60/23, the subnet mask bits reveal the network ID is 192.168.38.0 and broadcast address is 192.168.39.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 830 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "87.218 ms",
      "112.077 ms",
      "18.680 ms",
      "74.718 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (830 * 1024 * 8) / (91 * 10^6) = 74.718 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3550 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "3.55 ms",
      "11.60 ms",
      "7.10 ms",
      "71.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3550 bits / (500 * 1000 bps) = 7.10 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.139.4.27 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "10.139.4.0",
      "10.139.5.0"
    ],
    "answer": 2,
    "explanation": "For host 10.139.4.27/22, the subnet mask bits reveal the network ID is 10.139.4.0 and broadcast address is 10.139.7.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4940 KB over a point-to-point network link with transmission bandwidth rate of 88 Mbps. What is the theoretical transmission delay?",
    "options": [
      "689.804 ms",
      "472.369 ms",
      "459.869 ms",
      "114.967 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4940 * 1024 * 8) / (88 * 10^6) = 459.869 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4170 KB over a point-to-point network link with transmission bandwidth rate of 25 Mbps. What is the theoretical transmission delay?",
    "options": [
      "341.606 ms",
      "2049.638 ms",
      "1366.426 ms",
      "1378.926 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4170 * 1024 * 8) / (25 * 10^6) = 1366.426 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1910 KB over a point-to-point network link with transmission bandwidth rate of 45 Mbps. What is the theoretical transmission delay?",
    "options": [
      "360.205 ms",
      "521.557 ms",
      "86.926 ms",
      "347.705 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1910 * 1024 * 8) / (45 * 10^6) = 347.705 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.65.145.8 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.65.145.8",
      "10.65.146.8",
      "10.65.145.4",
      "10.65.145.12"
    ],
    "answer": 0,
    "explanation": "For host 10.65.145.8/30, the subnet mask bits reveal the network ID is 10.65.145.8 and broadcast address is 10.65.145.11."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.219.10.184 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.219.11.0",
      "10.219.10.0",
      "10.219.10.0",
      "10.219.11.255"
    ],
    "answer": 3,
    "explanation": "For host 10.219.10.184/22, the subnet mask bits reveal the network ID is 10.219.8.0 and broadcast address is 10.219.11.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.99.117 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.99.120",
      "192.168.100.116",
      "192.168.99.112",
      "192.168.99.116"
    ],
    "answer": 3,
    "explanation": "For host 192.168.99.117/30, the subnet mask bits reveal the network ID is 192.168.99.116 and broadcast address is 192.168.99.119."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.102.237 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.102.255",
      "192.168.102.0",
      "192.168.102.0",
      "192.168.103.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.102.237/25, the subnet mask bits reveal the network ID is 192.168.102.128 and broadcast address is 192.168.102.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.53.63.191 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.53.63.0",
      "10.53.63.255",
      "10.53.64.128",
      "10.53.63.0"
    ],
    "answer": 1,
    "explanation": "For host 10.53.63.191/25, the subnet mask bits reveal the network ID is 10.53.63.128 and broadcast address is 10.53.63.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3450 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "6.90 ms",
      "11.40 ms",
      "69.00 ms",
      "3.45 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3450 bits / (500 * 1000 bps) = 6.90 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4230 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "666.388 ms",
      "2665.551 ms",
      "2678.051 ms",
      "3998.326 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4230 * 1024 * 8) / (13 * 10^6) = 2665.551 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3400 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "174.50 ms",
      "1700.00 ms",
      "85.00 ms",
      "170.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3400 bits / (20 * 1000 bps) = 170.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.87.166.191 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.87.167.0",
      "255.255.255.255",
      "10.87.166.0"
    ],
    "answer": 3,
    "explanation": "For host 10.87.166.191/24, the subnet mask bits reveal the network ID is 10.87.166.0 and broadcast address is 10.87.166.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.34.177.210 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.34.177.0",
      "10.34.178.0",
      "10.34.179.255",
      "10.34.177.0"
    ],
    "answer": 2,
    "explanation": "For host 10.34.177.210/22, the subnet mask bits reveal the network ID is 10.34.176.0 and broadcast address is 10.34.179.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2150 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1075.00 ms",
      "53.75 ms",
      "112.00 ms",
      "107.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2150 bits / (20 * 1000 bps) = 107.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.93.31.191 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.93.32.128",
      "10.93.31.0",
      "10.93.31.0",
      "10.93.31.255"
    ],
    "answer": 3,
    "explanation": "For host 10.93.31.191/25, the subnet mask bits reveal the network ID is 10.93.31.128 and broadcast address is 10.93.31.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3000 KB over a point-to-point network link with transmission bandwidth rate of 10 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2470.100 ms",
      "3686.400 ms",
      "614.400 ms",
      "2457.600 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3000 * 1024 * 8) / (10 * 10^6) = 2457.600 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.79.47.105 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.79.48.0",
      "10.79.47.0",
      "255.255.255.255",
      "10.79.47.128"
    ],
    "answer": 1,
    "explanation": "For host 10.79.47.105/25, the subnet mask bits reveal the network ID is 10.79.47.0 and broadcast address is 10.79.47.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1150 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "57.50 ms",
      "5.75 ms",
      "10.25 ms",
      "2.88 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1150 bits / (200 * 1000 bps) = 5.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3390 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "13885.440 ms",
      "20828.160 ms",
      "13897.940 ms",
      "3471.360 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3390 * 1024 * 8) / (2 * 10^6) = 13885.440 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3150 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "15.75 ms",
      "36.00 ms",
      "31.50 ms",
      "315.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3150 bits / (100 * 1000 bps) = 31.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4680 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "672.606 ms",
      "685.106 ms",
      "1008.909 ms",
      "168.152 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4680 * 1024 * 8) / (57 * 10^6) = 672.606 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1600 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "8.00 ms",
      "12.50 ms",
      "80.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1600 bits / (200 * 1000 bps) = 8.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 900 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "187.444 ms",
      "124.963 ms",
      "137.463 ms",
      "31.241 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (900 * 1024 * 8) / (59 * 10^6) = 124.963 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.61.143.252 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.61.144.0",
      "10.61.143.0",
      "10.61.143.255",
      "10.61.143.0"
    ],
    "answer": 2,
    "explanation": "For host 10.61.143.252/24, the subnet mask bits reveal the network ID is 10.61.143.0 and broadcast address is 10.61.143.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.189.233 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.189.0",
      "192.168.189.255",
      "192.168.190.0",
      "192.168.189.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.189.233/23, the subnet mask bits reveal the network ID is 192.168.188.0 and broadcast address is 192.168.189.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.56.100.241 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.56.100.240",
      "10.56.100.236",
      "10.56.101.240",
      "10.56.100.244"
    ],
    "answer": 0,
    "explanation": "For host 10.56.100.241/30, the subnet mask bits reveal the network ID is 10.56.100.240 and broadcast address is 10.56.100.243."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4870 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1049.869 ms",
      "262.467 ms",
      "1574.804 ms",
      "1062.369 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4870 * 1024 * 8) / (38 * 10^6) = 1049.869 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2100 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "210.00 ms",
      "10.50 ms",
      "21.00 ms",
      "25.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2100 bits / (100 * 1000 bps) = 21.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4390 KB over a point-to-point network link with transmission bandwidth rate of 93 Mbps. What is the theoretical transmission delay?",
    "options": [
      "96.674 ms",
      "399.198 ms",
      "386.698 ms",
      "580.046 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4390 * 1024 * 8) / (93 * 10^6) = 386.698 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2730 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "657.769 ms",
      "670.269 ms",
      "986.654 ms",
      "164.442 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2730 * 1024 * 8) / (34 * 10^6) = 657.769 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.182.79 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.182.128",
      "192.168.183.0",
      "255.255.255.255",
      "192.168.182.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.182.79/25, the subnet mask bits reveal the network ID is 192.168.182.0 and broadcast address is 192.168.182.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2350 KB over a point-to-point network link with transmission bandwidth rate of 80 Mbps. What is the theoretical transmission delay?",
    "options": [
      "360.960 ms",
      "60.160 ms",
      "240.640 ms",
      "253.140 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2350 * 1024 * 8) / (80 * 10^6) = 240.640 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.119.249 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.119.255",
      "192.168.119.0",
      "192.168.120.0",
      "192.168.119.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.119.249/23, the subnet mask bits reveal the network ID is 192.168.118.0 and broadcast address is 192.168.119.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.27.40 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.27.127",
      "172.24.27.128",
      "172.24.27.0",
      "172.24.28.0"
    ],
    "answer": 0,
    "explanation": "For host 172.24.27.40/25, the subnet mask bits reveal the network ID is 172.24.27.0 and broadcast address is 172.24.27.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.248.187.185 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.248.187.0",
      "10.248.188.0",
      "10.248.187.0",
      "10.248.184.0"
    ],
    "answer": 3,
    "explanation": "For host 10.248.187.185/22, the subnet mask bits reveal the network ID is 10.248.184.0 and broadcast address is 10.248.187.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.246.140 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.247.255",
      "192.168.247.0",
      "192.168.246.0",
      "192.168.246.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.246.140/22, the subnet mask bits reveal the network ID is 192.168.244.0 and broadcast address is 192.168.247.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4330 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "971.185 ms",
      "1438.028 ms",
      "239.671 ms",
      "958.685 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4330 * 1024 * 8) / (37 * 10^6) = 958.685 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2050 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "209.50 ms",
      "205.00 ms",
      "102.50 ms",
      "2050.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2050 bits / (10 * 1000 bps) = 205.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.194.123.158 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.194.123.0",
      "10.194.123.0",
      "10.194.124.128",
      "10.194.123.255"
    ],
    "answer": 3,
    "explanation": "For host 10.194.123.158/25, the subnet mask bits reveal the network ID is 10.194.123.128 and broadcast address is 10.194.123.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 550 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "11.857 ms",
      "59.927 ms",
      "71.141 ms",
      "47.427 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (550 * 1024 * 8) / (95 * 10^6) = 47.427 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "82.50 ms",
      "1650.00 ms",
      "169.50 ms",
      "165.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1650 bits / (10 * 1000 bps) = 165.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1700 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "17.00 ms",
      "34.00 ms",
      "38.50 ms",
      "340.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1700 bits / (50 * 1000 bps) = 34.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.196.22 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.197.16",
      "192.168.196.8",
      "192.168.196.24",
      "192.168.196.16"
    ],
    "answer": 3,
    "explanation": "For host 192.168.196.22/29, the subnet mask bits reveal the network ID is 192.168.196.16 and broadcast address is 192.168.196.23."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1900 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "190.00 ms",
      "23.50 ms",
      "9.50 ms",
      "19.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1900 bits / (100 * 1000 bps) = 19.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.87.175 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.88.0",
      "255.255.255.255",
      "255.255.255.255",
      "192.168.87.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.87.175/24, the subnet mask bits reveal the network ID is 192.168.87.0 and broadcast address is 192.168.87.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3740 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3063.808 ms",
      "510.635 ms",
      "2042.539 ms",
      "2055.039 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3740 * 1024 * 8) / (15 * 10^6) = 2042.539 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3950 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5393.067 ms",
      "8089.600 ms",
      "1348.267 ms",
      "5405.567 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3950 * 1024 * 8) / (6 * 10^6) = 5393.067 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "360.00 ms",
      "180.00 ms",
      "3600.00 ms",
      "364.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3600 bits / (10 * 1000 bps) = 360.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4100 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "45.50 ms",
      "410.00 ms",
      "20.50 ms",
      "41.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4100 bits / (100 * 1000 bps) = 41.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "12.00 ms",
      "3.75 ms",
      "75.00 ms",
      "7.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3750 bits / (500 * 1000 bps) = 7.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.181.170 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.181.191",
      "192.168.181.64",
      "192.168.182.128",
      "192.168.181.192"
    ],
    "answer": 0,
    "explanation": "For host 192.168.181.170/26, the subnet mask bits reveal the network ID is 192.168.181.128 and broadcast address is 192.168.181.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2070 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "471.040 ms",
      "1896.660 ms",
      "2826.240 ms",
      "1884.160 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2070 * 1024 * 8) / (9 * 10^6) = 1884.160 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.211.247 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.212.240",
      "172.30.211.248",
      "172.30.211.240",
      "172.30.211.232"
    ],
    "answer": 2,
    "explanation": "For host 172.30.211.247/29, the subnet mask bits reveal the network ID is 172.30.211.240 and broadcast address is 172.30.211.247."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3200 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "32.00 ms",
      "16.00 ms",
      "36.50 ms",
      "320.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3200 bits / (100 * 1000 bps) = 32.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4630 KB over a point-to-point network link with transmission bandwidth rate of 73 Mbps. What is the theoretical transmission delay?",
    "options": [
      "532.075 ms",
      "519.575 ms",
      "779.362 ms",
      "129.894 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4630 * 1024 * 8) / (73 * 10^6) = 519.575 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1270 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "39.408 ms",
      "157.634 ms",
      "236.451 ms",
      "170.134 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1270 * 1024 * 8) / (66 * 10^6) = 157.634 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.192.85.70 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.192.85.72",
      "10.192.86.64",
      "10.192.85.56",
      "10.192.85.71"
    ],
    "answer": 3,
    "explanation": "For host 10.192.85.70/29, the subnet mask bits reveal the network ID is 10.192.85.64 and broadcast address is 10.192.85.71."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.105.119 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.105.64",
      "172.23.105.128",
      "172.23.105.127",
      "172.23.106.96"
    ],
    "answer": 2,
    "explanation": "For host 172.23.105.119/27, the subnet mask bits reveal the network ID is 172.23.105.96 and broadcast address is 172.23.105.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.41.87 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.42.0",
      "172.25.40.0",
      "172.25.41.0",
      "172.25.41.0"
    ],
    "answer": 1,
    "explanation": "For host 172.25.41.87/22, the subnet mask bits reveal the network ID is 172.25.40.0 and broadcast address is 172.25.43.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1500 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "150.00 ms",
      "154.50 ms",
      "75.00 ms",
      "1500.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1500 bits / (10 * 1000 bps) = 150.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3200 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "160.00 ms",
      "80.00 ms",
      "1600.00 ms",
      "164.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3200 bits / (20 * 1000 bps) = 160.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1850 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "185.00 ms",
      "92.50 ms",
      "189.50 ms",
      "1850.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1850 bits / (10 * 1000 bps) = 185.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3450 KB over a point-to-point network link with transmission bandwidth rate of 74 Mbps. What is the theoretical transmission delay?",
    "options": [
      "394.424 ms",
      "95.481 ms",
      "572.886 ms",
      "381.924 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3450 * 1024 * 8) / (74 * 10^6) = 381.924 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1200 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "16.50 ms",
      "6.00 ms",
      "12.00 ms",
      "120.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1200 bits / (100 * 1000 bps) = 12.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 750 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "112.390 ms",
      "87.427 ms",
      "74.927 ms",
      "18.732 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (750 * 1024 * 8) / (82 * 10^6) = 74.927 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1860 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1269.760 ms",
      "5079.040 ms",
      "7618.560 ms",
      "5091.540 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1860 * 1024 * 8) / (3 * 10^6) = 5079.040 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5400 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.40 ms",
      "108.00 ms",
      "10.80 ms",
      "15.30 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5400 bits / (500 * 1000 bps) = 10.80 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.63.250 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.63.255",
      "172.22.64.128",
      "172.22.63.0",
      "172.22.63.0"
    ],
    "answer": 0,
    "explanation": "For host 172.22.63.250/25, the subnet mask bits reveal the network ID is 172.22.63.128 and broadcast address is 172.22.63.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2550 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "255.00 ms",
      "30.00 ms",
      "12.75 ms",
      "25.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2550 bits / (100 * 1000 bps) = 25.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4700 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "185.108 ms",
      "740.431 ms",
      "752.931 ms",
      "1110.646 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4700 * 1024 * 8) / (52 * 10^6) = 740.431 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "565.00 ms",
      "5650.00 ms",
      "569.50 ms",
      "282.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5650 bits / (10 * 1000 bps) = 565.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.99.230 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.99.231",
      "172.21.100.228",
      "172.21.99.232",
      "172.21.99.224"
    ],
    "answer": 0,
    "explanation": "For host 172.21.99.230/30, the subnet mask bits reveal the network ID is 172.21.99.228 and broadcast address is 172.21.99.231."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.201.8 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.201.0",
      "192.168.202.0",
      "192.168.201.128",
      "192.168.201.127"
    ],
    "answer": 3,
    "explanation": "For host 192.168.201.8/25, the subnet mask bits reveal the network ID is 192.168.201.0 and broadcast address is 192.168.201.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4680 KB over a point-to-point network link with transmission bandwidth rate of 29 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1322.019 ms",
      "1983.029 ms",
      "1334.519 ms",
      "330.505 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4680 * 1024 * 8) / (29 * 10^6) = 1322.019 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 490 KB over a point-to-point network link with transmission bandwidth rate of 22 Mbps. What is the theoretical transmission delay?",
    "options": [
      "194.958 ms",
      "182.458 ms",
      "273.687 ms",
      "45.615 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (490 * 1024 * 8) / (22 * 10^6) = 182.458 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2370 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "350.874 ms",
      "58.479 ms",
      "246.416 ms",
      "233.916 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2370 * 1024 * 8) / (83 * 10^6) = 233.916 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.65.87 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.31.65.32",
      "172.31.65.96",
      "172.31.66.64",
      "172.31.65.64"
    ],
    "answer": 3,
    "explanation": "For host 172.31.65.87/27, the subnet mask bits reveal the network ID is 172.31.65.64 and broadcast address is 172.31.65.95."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2950 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "295.00 ms",
      "34.00 ms",
      "14.75 ms",
      "29.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2950 bits / (100 * 1000 bps) = 29.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1500 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "19.50 ms",
      "15.00 ms",
      "150.00 ms",
      "7.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1500 bits / (100 * 1000 bps) = 15.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2540 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1200.443 ms",
      "200.074 ms",
      "812.795 ms",
      "800.295 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2540 * 1024 * 8) / (26 * 10^6) = 800.295 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.61.3 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.61.0",
      "255.255.255.255",
      "172.24.61.128",
      "172.24.62.0"
    ],
    "answer": 0,
    "explanation": "For host 172.24.61.3/25, the subnet mask bits reveal the network ID is 172.24.61.0 and broadcast address is 172.24.61.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 430 KB over a point-to-point network link with transmission bandwidth rate of 65 Mbps. What is the theoretical transmission delay?",
    "options": [
      "54.193 ms",
      "66.693 ms",
      "13.548 ms",
      "81.290 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (430 * 1024 * 8) / (65 * 10^6) = 54.193 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.199.119.91 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.199.119.96",
      "10.199.119.95",
      "10.199.120.64",
      "10.199.119.32"
    ],
    "answer": 1,
    "explanation": "For host 10.199.119.91/27, the subnet mask bits reveal the network ID is 10.199.119.64 and broadcast address is 10.199.119.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.20.55.207 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.20.54.0",
      "10.20.55.0",
      "10.20.55.0",
      "10.20.56.0"
    ],
    "answer": 0,
    "explanation": "For host 10.20.55.207/23, the subnet mask bits reveal the network ID is 10.20.54.0 and broadcast address is 10.20.55.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "18.75 ms",
      "37.50 ms",
      "375.00 ms",
      "42.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3750 bits / (100 * 1000 bps) = 37.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4740 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4853.760 ms",
      "3248.340 ms",
      "3235.840 ms",
      "808.960 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4740 * 1024 * 8) / (12 * 10^6) = 3235.840 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.239.133.45 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.239.133.32",
      "10.239.133.0",
      "10.239.134.32",
      "10.239.133.64"
    ],
    "answer": 0,
    "explanation": "For host 10.239.133.45/27, the subnet mask bits reveal the network ID is 10.239.133.32 and broadcast address is 10.239.133.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "24.50 ms",
      "200.00 ms",
      "10.00 ms",
      "20.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4000 bits / (200 * 1000 bps) = 20.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.166.69 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.166.0",
      "172.23.167.0",
      "172.23.166.0",
      "172.23.167.255"
    ],
    "answer": 3,
    "explanation": "For host 172.23.166.69/23, the subnet mask bits reveal the network ID is 172.23.166.0 and broadcast address is 172.23.167.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1500 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "3.75 ms",
      "12.00 ms",
      "7.50 ms",
      "75.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1500 bits / (200 * 1000 bps) = 7.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "324.50 ms",
      "3200.00 ms",
      "160.00 ms",
      "320.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3200 bits / (10 * 1000 bps) = 320.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.58.252 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "172.20.58.0",
      "172.20.59.0"
    ],
    "answer": 2,
    "explanation": "For host 172.20.58.252/23, the subnet mask bits reveal the network ID is 172.20.58.0 and broadcast address is 172.20.59.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.115.187.97 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.115.188.96",
      "10.115.187.99",
      "10.115.187.92",
      "10.115.187.100"
    ],
    "answer": 1,
    "explanation": "For host 10.115.187.97/30, the subnet mask bits reveal the network ID is 10.115.187.96 and broadcast address is 10.115.187.99."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.146.252.236 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.146.252.236",
      "10.146.252.240",
      "10.146.252.232",
      "10.146.253.236"
    ],
    "answer": 0,
    "explanation": "For host 10.146.252.236/30, the subnet mask bits reveal the network ID is 10.146.252.236 and broadcast address is 10.146.252.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.120.159 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.120.0",
      "172.26.120.0",
      "172.26.120.255",
      "172.26.121.0"
    ],
    "answer": 2,
    "explanation": "For host 172.26.120.159/24, the subnet mask bits reveal the network ID is 172.26.120.0 and broadcast address is 172.26.120.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.131.238 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.132.236",
      "192.168.131.232",
      "192.168.131.239",
      "192.168.131.240"
    ],
    "answer": 2,
    "explanation": "For host 192.168.131.238/30, the subnet mask bits reveal the network ID is 192.168.131.236 and broadcast address is 192.168.131.239."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4550 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "227.50 ms",
      "22.75 ms",
      "11.38 ms",
      "27.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4550 bits / (200 * 1000 bps) = 22.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1600 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "84.50 ms",
      "80.00 ms",
      "800.00 ms",
      "40.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1600 bits / (20 * 1000 bps) = 80.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "200.00 ms",
      "20.00 ms",
      "10.00 ms",
      "24.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1000 bits / (50 * 1000 bps) = 20.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.251.47 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.25.251.255",
      "172.25.252.0",
      "172.25.251.0",
      "172.25.251.0"
    ],
    "answer": 0,
    "explanation": "For host 172.25.251.47/22, the subnet mask bits reveal the network ID is 172.25.248.0 and broadcast address is 172.25.251.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.224.132.239 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.224.132.255",
      "10.224.133.224",
      "10.224.132.0",
      "10.224.132.192"
    ],
    "answer": 0,
    "explanation": "For host 10.224.132.239/27, the subnet mask bits reveal the network ID is 10.224.132.224 and broadcast address is 10.224.132.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.204.215 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.204.215",
      "192.168.204.208",
      "192.168.204.216",
      "192.168.205.212"
    ],
    "answer": 0,
    "explanation": "For host 192.168.204.215/30, the subnet mask bits reveal the network ID is 192.168.204.212 and broadcast address is 192.168.204.215."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3000 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "150.00 ms",
      "7.50 ms",
      "19.50 ms",
      "15.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3000 bits / (200 * 1000 bps) = 15.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1200 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "60.00 ms",
      "10.50 ms",
      "3.00 ms",
      "6.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1200 bits / (200 * 1000 bps) = 6.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4810 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1407.269 ms",
      "234.545 ms",
      "938.179 ms",
      "950.679 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4810 * 1024 * 8) / (42 * 10^6) = 938.179 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4510 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "672.249 ms",
      "659.749 ms",
      "164.937 ms",
      "989.623 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4510 * 1024 * 8) / (56 * 10^6) = 659.749 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4150 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "212.00 ms",
      "2075.00 ms",
      "103.75 ms",
      "207.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4150 bits / (20 * 1000 bps) = 207.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.87.93 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.29.88.0",
      "172.29.87.0",
      "172.29.87.0",
      "172.29.87.255"
    ],
    "answer": 3,
    "explanation": "For host 172.29.87.93/24, the subnet mask bits reveal the network ID is 172.29.87.0 and broadcast address is 172.29.87.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2500 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "250.00 ms",
      "25.00 ms",
      "29.50 ms",
      "12.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2500 bits / (100 * 1000 bps) = 25.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4110 KB over a point-to-point network link with transmission bandwidth rate of 18 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2805.760 ms",
      "1883.007 ms",
      "1870.507 ms",
      "467.627 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4110 * 1024 * 8) / (18 * 10^6) = 1870.507 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.91.231.228 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.91.231.208",
      "10.91.232.224",
      "10.91.231.239",
      "10.91.231.240"
    ],
    "answer": 2,
    "explanation": "For host 10.91.231.228/28, the subnet mask bits reveal the network ID is 10.91.231.224 and broadcast address is 10.91.231.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.21.109 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.21.0",
      "172.25.22.0",
      "172.25.20.0",
      "172.25.21.0"
    ],
    "answer": 2,
    "explanation": "For host 172.25.21.109/23, the subnet mask bits reveal the network ID is 172.25.20.0 and broadcast address is 172.25.21.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.237.83 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.237.88",
      "192.168.237.72",
      "192.168.237.80",
      "192.168.238.80"
    ],
    "answer": 2,
    "explanation": "For host 192.168.237.83/29, the subnet mask bits reveal the network ID is 192.168.237.80 and broadcast address is 192.168.237.87."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3150 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "157.50 ms",
      "162.00 ms",
      "78.75 ms",
      "1575.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3150 bits / (20 * 1000 bps) = 157.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.98.220 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "192.168.98.0",
      "192.168.99.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.98.220/23, the subnet mask bits reveal the network ID is 192.168.98.0 and broadcast address is 192.168.99.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4300 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "215.00 ms",
      "4300.00 ms",
      "430.00 ms",
      "434.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4300 bits / (10 * 1000 bps) = 430.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2290 KB over a point-to-point network link with transmission bandwidth rate of 54 Mbps. What is the theoretical transmission delay?",
    "options": [
      "347.401 ms",
      "86.850 ms",
      "521.102 ms",
      "359.901 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2290 * 1024 * 8) / (54 * 10^6) = 347.401 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1300 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "650.00 ms",
      "32.50 ms",
      "69.50 ms",
      "65.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1300 bits / (20 * 1000 bps) = 65.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.122.201 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.122.160",
      "192.168.122.192",
      "192.168.122.224",
      "192.168.123.192"
    ],
    "answer": 1,
    "explanation": "For host 192.168.122.201/27, the subnet mask bits reveal the network ID is 192.168.122.192 and broadcast address is 192.168.122.223."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.173.69.33 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.173.69.36",
      "10.173.70.32",
      "10.173.69.35",
      "10.173.69.28"
    ],
    "answer": 2,
    "explanation": "For host 10.173.69.33/30, the subnet mask bits reveal the network ID is 10.173.69.32 and broadcast address is 10.173.69.35."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.230.31.231 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.230.31.232",
      "10.230.32.228",
      "10.230.31.224",
      "10.230.31.228"
    ],
    "answer": 3,
    "explanation": "For host 10.230.31.231/30, the subnet mask bits reveal the network ID is 10.230.31.228 and broadcast address is 10.230.31.231."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.219.239 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.219.0",
      "172.24.219.255",
      "172.24.220.0",
      "172.24.219.0"
    ],
    "answer": 1,
    "explanation": "For host 172.24.219.239/24, the subnet mask bits reveal the network ID is 172.24.219.0 and broadcast address is 172.24.219.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1140 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "161.015 ms",
      "241.523 ms",
      "40.254 ms",
      "173.515 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1140 * 1024 * 8) / (58 * 10^6) = 161.015 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.252.226 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.21.252.224",
      "172.21.253.224",
      "172.21.252.0",
      "172.21.252.192"
    ],
    "answer": 0,
    "explanation": "For host 172.21.252.226/27, the subnet mask bits reveal the network ID is 172.21.252.224 and broadcast address is 172.21.252.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.115.171.16 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.115.171.12",
      "10.115.171.19",
      "10.115.172.16",
      "10.115.171.20"
    ],
    "answer": 1,
    "explanation": "For host 10.115.171.16/30, the subnet mask bits reveal the network ID is 10.115.171.16 and broadcast address is 10.115.171.19."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4900 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "127.028 ms",
      "520.611 ms",
      "508.111 ms",
      "762.167 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4900 * 1024 * 8) / (79 * 10^6) = 508.111 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.90.225 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.25.90.0",
      "255.255.255.255",
      "172.25.91.0"
    ],
    "answer": 1,
    "explanation": "For host 172.25.90.225/23, the subnet mask bits reveal the network ID is 172.25.90.0 and broadcast address is 172.25.91.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.164.95 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.165.0",
      "255.255.255.255",
      "192.168.164.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.164.95/24, the subnet mask bits reveal the network ID is 192.168.164.0 and broadcast address is 192.168.164.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2550 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1275.00 ms",
      "127.50 ms",
      "63.75 ms",
      "132.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2550 bits / (20 * 1000 bps) = 127.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "44.50 ms",
      "400.00 ms",
      "40.00 ms",
      "20.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4000 bits / (100 * 1000 bps) = 40.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.188.200 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.188.0",
      "172.20.189.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 172.20.188.200/22, the subnet mask bits reveal the network ID is 172.20.188.0 and broadcast address is 172.20.191.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2770 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "241.711 ms",
      "57.303 ms",
      "343.816 ms",
      "229.211 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2770 * 1024 * 8) / (99 * 10^6) = 229.211 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1320 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "195.779 ms",
      "183.279 ms",
      "45.820 ms",
      "274.918 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1320 * 1024 * 8) / (59 * 10^6) = 183.279 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.228.89 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.228.0",
      "192.168.229.0",
      "192.168.228.0",
      "192.168.228.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.228.89/24, the subnet mask bits reveal the network ID is 192.168.228.0 and broadcast address is 192.168.228.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2500 KB over a point-to-point network link with transmission bandwidth rate of 28 Mbps. What is the theoretical transmission delay?",
    "options": [
      "731.429 ms",
      "1097.143 ms",
      "743.929 ms",
      "182.857 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2500 * 1024 * 8) / (28 * 10^6) = 731.429 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.155.123 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.29.156.96",
      "172.29.155.64",
      "172.29.155.96",
      "172.29.155.128"
    ],
    "answer": 2,
    "explanation": "For host 172.29.155.123/27, the subnet mask bits reveal the network ID is 172.29.155.96 and broadcast address is 172.29.155.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4100 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "102.50 ms",
      "2050.00 ms",
      "205.00 ms",
      "209.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4100 bits / (20 * 1000 bps) = 205.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4400 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "11.00 ms",
      "22.00 ms",
      "26.50 ms",
      "220.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4400 bits / (200 * 1000 bps) = 22.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.129.127 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.19.129.0",
      "172.19.130.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 172.19.129.127/24, the subnet mask bits reveal the network ID is 172.19.129.0 and broadcast address is 172.19.129.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.217.5 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.218.0",
      "255.255.255.255",
      "172.24.217.0",
      "172.24.217.8"
    ],
    "answer": 2,
    "explanation": "For host 172.24.217.5/29, the subnet mask bits reveal the network ID is 172.24.217.0 and broadcast address is 172.24.217.7."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5450 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "54.50 ms",
      "1090.00 ms",
      "113.50 ms",
      "109.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5450 bits / (50 * 1000 bps) = 109.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4900 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "29.00 ms",
      "245.00 ms",
      "24.50 ms",
      "12.25 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4900 bits / (200 * 1000 bps) = 24.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1710 KB over a point-to-point network link with transmission bandwidth rate of 14 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1013.094 ms",
      "250.149 ms",
      "1000.594 ms",
      "1500.891 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1710 * 1024 * 8) / (14 * 10^6) = 1000.594 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.47.203 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.47.200",
      "192.168.47.196",
      "192.168.47.204",
      "192.168.48.200"
    ],
    "answer": 0,
    "explanation": "For host 192.168.47.203/30, the subnet mask bits reveal the network ID is 192.168.47.200 and broadcast address is 192.168.47.203."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "33.00 ms",
      "16.50 ms",
      "330.00 ms",
      "37.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1650 bits / (50 * 1000 bps) = 33.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1350.00 ms",
      "139.50 ms",
      "67.50 ms",
      "135.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2700 bits / (20 * 1000 bps) = 135.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.72.187.46 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.72.187.48",
      "10.72.187.40",
      "10.72.188.44",
      "10.72.187.44"
    ],
    "answer": 3,
    "explanation": "For host 10.72.187.46/30, the subnet mask bits reveal the network ID is 10.72.187.44 and broadcast address is 10.72.187.47."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5600 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "28.00 ms",
      "14.00 ms",
      "280.00 ms",
      "32.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5600 bits / (200 * 1000 bps) = 28.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2990 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2161.242 ms",
      "360.207 ms",
      "1453.328 ms",
      "1440.828 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2990 * 1024 * 8) / (17 * 10^6) = 1440.828 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.235.246 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.235.0",
      "192.168.235.0",
      "192.168.236.0",
      "192.168.235.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.235.246/22, the subnet mask bits reveal the network ID is 192.168.232.0 and broadcast address is 192.168.235.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "132.50 ms",
      "137.00 ms",
      "66.25 ms",
      "1325.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2650 bits / (20 * 1000 bps) = 132.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "370.00 ms",
      "185.00 ms",
      "3700.00 ms",
      "374.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3700 bits / (10 * 1000 bps) = 370.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.210.90 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.27.211.0",
      "255.255.255.255",
      "172.27.210.0"
    ],
    "answer": 3,
    "explanation": "For host 172.27.210.90/23, the subnet mask bits reveal the network ID is 172.27.210.0 and broadcast address is 172.27.211.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2770 KB over a point-to-point network link with transmission bandwidth rate of 10 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2281.684 ms",
      "3403.776 ms",
      "567.296 ms",
      "2269.184 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2770 * 1024 * 8) / (10 * 10^6) = 2269.184 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2960 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "284.953 ms",
      "272.453 ms",
      "408.680 ms",
      "68.113 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2960 * 1024 * 8) / (89 * 10^6) = 272.453 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3510 KB over a point-to-point network link with transmission bandwidth rate of 32 Mbps. What is the theoretical transmission delay?",
    "options": [
      "224.640 ms",
      "911.060 ms",
      "898.560 ms",
      "1347.840 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3510 * 1024 * 8) / (32 * 10^6) = 898.560 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.14.42 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.27.14.127",
      "172.27.14.128",
      "172.27.14.0",
      "172.27.15.0"
    ],
    "answer": 0,
    "explanation": "For host 172.27.14.42/25, the subnet mask bits reveal the network ID is 172.27.14.0 and broadcast address is 172.27.14.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.60.155.180 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.60.156.180",
      "10.60.155.184",
      "10.60.155.176",
      "10.60.155.180"
    ],
    "answer": 3,
    "explanation": "For host 10.60.155.180/30, the subnet mask bits reveal the network ID is 10.60.155.180 and broadcast address is 10.60.155.183."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3650 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "369.50 ms",
      "3650.00 ms",
      "182.50 ms",
      "365.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3650 bits / (10 * 1000 bps) = 365.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.163.102 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.164.100",
      "192.168.163.104",
      "192.168.163.96",
      "192.168.163.103"
    ],
    "answer": 3,
    "explanation": "For host 192.168.163.102/30, the subnet mask bits reveal the network ID is 192.168.163.100 and broadcast address is 192.168.163.103."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.72.207 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.72.160",
      "172.26.72.224",
      "172.26.73.192",
      "172.26.72.192"
    ],
    "answer": 3,
    "explanation": "For host 172.26.72.207/27, the subnet mask bits reveal the network ID is 172.26.72.192 and broadcast address is 172.26.72.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4450 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "4450.00 ms",
      "449.50 ms",
      "445.00 ms",
      "222.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4450 bits / (10 * 1000 bps) = 445.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1740 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "254.095 ms",
      "362.392 ms",
      "241.595 ms",
      "60.399 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1740 * 1024 * 8) / (59 * 10^6) = 241.595 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 680 KB over a point-to-point network link with transmission bandwidth rate of 78 Mbps. What is the theoretical transmission delay?",
    "options": [
      "83.917 ms",
      "107.126 ms",
      "17.854 ms",
      "71.417 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (680 * 1024 * 8) / (78 * 10^6) = 71.417 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.206.189 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.206.192",
      "192.168.207.128",
      "192.168.206.191",
      "192.168.206.64"
    ],
    "answer": 2,
    "explanation": "For host 192.168.206.189/26, the subnet mask bits reveal the network ID is 192.168.206.128 and broadcast address is 192.168.206.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2050 KB over a point-to-point network link with transmission bandwidth rate of 25 Mbps. What is the theoretical transmission delay?",
    "options": [
      "671.744 ms",
      "167.936 ms",
      "1007.616 ms",
      "684.244 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2050 * 1024 * 8) / (25 * 10^6) = 671.744 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "5.00 ms",
      "100.00 ms",
      "10.00 ms",
      "14.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1000 bits / (100 * 1000 bps) = 10.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3070 KB over a point-to-point network link with transmission bandwidth rate of 74 Mbps. What is the theoretical transmission delay?",
    "options": [
      "509.786 ms",
      "352.357 ms",
      "84.964 ms",
      "339.857 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3070 * 1024 * 8) / (74 * 10^6) = 339.857 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 920 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "205.747 ms",
      "48.312 ms",
      "193.247 ms",
      "289.871 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (920 * 1024 * 8) / (39 * 10^6) = 193.247 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2290 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "243.632 ms",
      "365.448 ms",
      "60.908 ms",
      "256.132 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2290 * 1024 * 8) / (77 * 10^6) = 243.632 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.246.199 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.246.199",
      "172.26.246.184",
      "172.26.247.192",
      "172.26.246.200"
    ],
    "answer": 0,
    "explanation": "For host 172.26.246.199/29, the subnet mask bits reveal the network ID is 172.26.246.192 and broadcast address is 172.26.246.199."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.63.215 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.63.208",
      "192.168.63.215",
      "192.168.64.212",
      "192.168.63.216"
    ],
    "answer": 1,
    "explanation": "For host 192.168.63.215/30, the subnet mask bits reveal the network ID is 192.168.63.212 and broadcast address is 192.168.63.215."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3540 KB over a point-to-point network link with transmission bandwidth rate of 69 Mbps. What is the theoretical transmission delay?",
    "options": [
      "420.285 ms",
      "105.071 ms",
      "630.428 ms",
      "432.785 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3540 * 1024 * 8) / (69 * 10^6) = 420.285 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3410 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "13967.360 ms",
      "2327.893 ms",
      "9311.573 ms",
      "9324.073 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3410 * 1024 * 8) / (3 * 10^6) = 9311.573 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.34.70 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.34.48",
      "172.31.34.79",
      "172.31.34.80",
      "172.31.35.64"
    ],
    "answer": 1,
    "explanation": "For host 172.31.34.70/28, the subnet mask bits reveal the network ID is 172.31.34.64 and broadcast address is 172.31.34.79."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.42.105 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.42.127",
      "192.168.42.128",
      "192.168.42.64",
      "192.168.43.96"
    ],
    "answer": 0,
    "explanation": "For host 192.168.42.105/27, the subnet mask bits reveal the network ID is 192.168.42.96 and broadcast address is 192.168.42.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.68.3.117 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.68.3.64",
      "10.68.3.96",
      "10.68.4.96",
      "10.68.3.128"
    ],
    "answer": 1,
    "explanation": "For host 10.68.3.117/27, the subnet mask bits reveal the network ID is 10.68.3.96 and broadcast address is 10.68.3.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4240 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "439.672 ms",
      "659.508 ms",
      "452.172 ms",
      "109.918 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4240 * 1024 * 8) / (79 * 10^6) = 439.672 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.175.80 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.176.64",
      "192.168.175.96",
      "192.168.175.32",
      "192.168.175.64"
    ],
    "answer": 3,
    "explanation": "For host 192.168.175.80/27, the subnet mask bits reveal the network ID is 192.168.175.64 and broadcast address is 192.168.175.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 550 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "173.292 ms",
      "28.882 ms",
      "128.028 ms",
      "115.528 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (550 * 1024 * 8) / (39 * 10^6) = 115.528 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 980 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "104.778 ms",
      "138.417 ms",
      "23.069 ms",
      "92.278 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (980 * 1024 * 8) / (87 * 10^6) = 92.278 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.221.154.158 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.221.154.128",
      "10.221.155.144",
      "10.221.154.160",
      "10.221.154.144"
    ],
    "answer": 3,
    "explanation": "For host 10.221.154.158/28, the subnet mask bits reveal the network ID is 10.221.154.144 and broadcast address is 10.221.154.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2510 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "489.570 ms",
      "326.380 ms",
      "338.880 ms",
      "81.595 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2510 * 1024 * 8) / (63 * 10^6) = 326.380 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.19.127 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.20.0",
      "192.168.19.128",
      "192.168.19.0",
      "192.168.19.127"
    ],
    "answer": 3,
    "explanation": "For host 192.168.19.127/25, the subnet mask bits reveal the network ID is 192.168.19.0 and broadcast address is 192.168.19.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.64.96.100 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.64.96.128",
      "10.64.96.64",
      "10.64.96.0",
      "10.64.97.64"
    ],
    "answer": 1,
    "explanation": "For host 10.64.96.100/26, the subnet mask bits reveal the network ID is 10.64.96.64 and broadcast address is 10.64.96.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4890 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1133.742 ms",
      "755.828 ms",
      "768.328 ms",
      "188.957 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4890 * 1024 * 8) / (53 * 10^6) = 755.828 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2610 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "157.214 ms",
      "628.856 ms",
      "943.285 ms",
      "641.356 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2610 * 1024 * 8) / (34 * 10^6) = 628.856 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1230 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "559.787 ms",
      "385.691 ms",
      "93.298 ms",
      "373.191 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1230 * 1024 * 8) / (27 * 10^6) = 373.191 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3890 KB over a point-to-point network link with transmission bandwidth rate of 36 Mbps. What is the theoretical transmission delay?",
    "options": [
      "897.691 ms",
      "885.191 ms",
      "1327.787 ms",
      "221.298 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3890 * 1024 * 8) / (36 * 10^6) = 885.191 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3790 KB over a point-to-point network link with transmission bandwidth rate of 73 Mbps. What is the theoretical transmission delay?",
    "options": [
      "425.311 ms",
      "437.811 ms",
      "637.966 ms",
      "106.328 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3790 * 1024 * 8) / (73 * 10^6) = 425.311 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1680 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "264.665 ms",
      "66.166 ms",
      "396.997 ms",
      "277.165 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1680 * 1024 * 8) / (52 * 10^6) = 264.665 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.164.89 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.164.0",
      "172.28.165.255",
      "172.28.164.0",
      "172.28.165.0"
    ],
    "answer": 1,
    "explanation": "For host 172.28.164.89/23, the subnet mask bits reveal the network ID is 172.28.164.0 and broadcast address is 172.28.165.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 630 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "122.880 ms",
      "20.480 ms",
      "94.420 ms",
      "81.920 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (630 * 1024 * 8) / (63 * 10^6) = 81.920 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1950 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "9.75 ms",
      "24.00 ms",
      "195.00 ms",
      "19.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1950 bits / (100 * 1000 bps) = 19.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 910 KB over a point-to-point network link with transmission bandwidth rate of 98 Mbps. What is the theoretical transmission delay?",
    "options": [
      "76.069 ms",
      "114.103 ms",
      "19.017 ms",
      "88.569 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (910 * 1024 * 8) / (98 * 10^6) = 76.069 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2600 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "65.00 ms",
      "134.50 ms",
      "130.00 ms",
      "1300.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2600 bits / (20 * 1000 bps) = 130.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1800 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "185.978 ms",
      "173.478 ms",
      "43.369 ms",
      "260.216 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1800 * 1024 * 8) / (85 * 10^6) = 173.478 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "269.50 ms",
      "132.50 ms",
      "2650.00 ms",
      "265.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5300 bits / (20 * 1000 bps) = 265.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "265.00 ms",
      "530.00 ms",
      "534.50 ms",
      "5300.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5300 bits / (10 * 1000 bps) = 530.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3500 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "35.00 ms",
      "700.00 ms",
      "74.50 ms",
      "70.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3500 bits / (50 * 1000 bps) = 70.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.147.28 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.147.32",
      "192.168.148.0",
      "192.168.147.31",
      "192.168.147.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.147.28/27, the subnet mask bits reveal the network ID is 192.168.147.0 and broadcast address is 192.168.147.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2850 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.70 ms",
      "10.20 ms",
      "57.00 ms",
      "2.85 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2850 bits / (500 * 1000 bps) = 5.70 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.128.145 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.128.0",
      "192.168.129.128",
      "192.168.128.128",
      "192.168.128.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.128.145/25, the subnet mask bits reveal the network ID is 192.168.128.128 and broadcast address is 192.168.128.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.69.113 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.31.69.112",
      "172.31.70.112",
      "172.31.69.96",
      "172.31.69.128"
    ],
    "answer": 0,
    "explanation": "For host 172.31.69.113/28, the subnet mask bits reveal the network ID is 172.31.69.112 and broadcast address is 172.31.69.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4210 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "559.934 ms",
      "136.858 ms",
      "547.434 ms",
      "821.150 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4210 * 1024 * 8) / (63 * 10^6) = 547.434 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.127.182.249 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.127.182.0",
      "10.127.183.248",
      "10.127.182.255",
      "10.127.182.240"
    ],
    "answer": 2,
    "explanation": "For host 10.127.182.249/29, the subnet mask bits reveal the network ID is 10.127.182.248 and broadcast address is 10.127.182.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2060 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "602.697 ms",
      "401.798 ms",
      "100.450 ms",
      "414.298 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2060 * 1024 * 8) / (42 * 10^6) = 401.798 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "25.00 ms",
      "50.00 ms",
      "500.00 ms",
      "54.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1000 bits / (20 * 1000 bps) = 50.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4600 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "23.00 ms",
      "50.50 ms",
      "46.00 ms",
      "460.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4600 bits / (100 * 1000 bps) = 46.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5150 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "257.50 ms",
      "25.75 ms",
      "12.88 ms",
      "30.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5150 bits / (200 * 1000 bps) = 25.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3320 KB over a point-to-point network link with transmission bandwidth rate of 62 Mbps. What is the theoretical transmission delay?",
    "options": [
      "451.168 ms",
      "658.003 ms",
      "438.668 ms",
      "109.667 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3320 * 1024 * 8) / (62 * 10^6) = 438.668 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2450 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "122.50 ms",
      "6.13 ms",
      "12.25 ms",
      "16.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2450 bits / (200 * 1000 bps) = 12.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.129.85 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.129.80",
      "192.168.129.64",
      "192.168.130.80",
      "192.168.129.96"
    ],
    "answer": 0,
    "explanation": "For host 192.168.129.85/28, the subnet mask bits reveal the network ID is 192.168.129.80 and broadcast address is 192.168.129.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.189.187 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.16.189.0",
      "172.16.189.0",
      "172.16.190.0",
      "172.16.188.0"
    ],
    "answer": 3,
    "explanation": "For host 172.16.189.187/22, the subnet mask bits reveal the network ID is 172.16.188.0 and broadcast address is 172.16.191.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.60.182 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.60.192",
      "192.168.60.160",
      "192.168.61.160",
      "192.168.60.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.60.182/27, the subnet mask bits reveal the network ID is 192.168.60.160 and broadcast address is 192.168.60.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.249.89.222 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.249.88.0",
      "10.249.90.0",
      "10.249.89.0",
      "10.249.89.0"
    ],
    "answer": 0,
    "explanation": "For host 10.249.89.222/22, the subnet mask bits reveal the network ID is 10.249.88.0 and broadcast address is 10.249.91.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.139.250 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.18.139.252",
      "172.18.139.244",
      "172.18.140.248",
      "172.18.139.248"
    ],
    "answer": 3,
    "explanation": "For host 172.18.139.250/30, the subnet mask bits reveal the network ID is 172.18.139.248 and broadcast address is 172.18.139.251."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 480 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "436.907 ms",
      "449.407 ms",
      "655.360 ms",
      "109.227 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (480 * 1024 * 8) / (9 * 10^6) = 436.907 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 200 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "60.681 ms",
      "15.170 ms",
      "91.022 ms",
      "73.181 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (200 * 1024 * 8) / (27 * 10^6) = 60.681 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3300 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "71.898 ms",
      "287.591 ms",
      "431.387 ms",
      "300.091 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3300 * 1024 * 8) / (94 * 10^6) = 287.591 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "110.50 ms",
      "106.00 ms",
      "53.00 ms",
      "1060.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5300 bits / (50 * 1000 bps) = 106.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5400 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "13.50 ms",
      "270.00 ms",
      "27.00 ms",
      "31.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5400 bits / (200 * 1000 bps) = 27.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.163.113 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.163.112",
      "192.168.163.128",
      "192.168.163.96",
      "192.168.164.112"
    ],
    "answer": 0,
    "explanation": "For host 192.168.163.113/28, the subnet mask bits reveal the network ID is 192.168.163.112 and broadcast address is 192.168.163.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.230.219 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.230.160",
      "192.168.231.192",
      "192.168.230.192",
      "192.168.230.224"
    ],
    "answer": 2,
    "explanation": "For host 192.168.230.219/27, the subnet mask bits reveal the network ID is 192.168.230.192 and broadcast address is 192.168.230.223."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.87.140 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.88.128",
      "192.168.87.144",
      "192.168.87.128",
      "192.168.87.112"
    ],
    "answer": 2,
    "explanation": "For host 192.168.87.140/28, the subnet mask bits reveal the network ID is 192.168.87.128 and broadcast address is 192.168.87.143."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.175.64 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.16.175.32",
      "172.16.175.64",
      "172.16.175.96",
      "172.16.176.64"
    ],
    "answer": 1,
    "explanation": "For host 172.16.175.64/27, the subnet mask bits reveal the network ID is 172.16.175.64 and broadcast address is 172.16.175.95."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "120.00 ms",
      "60.00 ms",
      "1200.00 ms",
      "124.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2400 bits / (20 * 1000 bps) = 120.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4440 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2285.780 ms",
      "3409.920 ms",
      "568.320 ms",
      "2273.280 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4440 * 1024 * 8) / (16 * 10^6) = 2273.280 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.242.28 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.243.0",
      "192.168.242.0",
      "192.168.242.128"
    ],
    "answer": 2,
    "explanation": "For host 192.168.242.28/25, the subnet mask bits reveal the network ID is 192.168.242.0 and broadcast address is 192.168.242.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3650 KB over a point-to-point network link with transmission bandwidth rate of 35 Mbps. What is the theoretical transmission delay?",
    "options": [
      "213.577 ms",
      "854.309 ms",
      "1281.463 ms",
      "866.809 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3650 * 1024 * 8) / (35 * 10^6) = 854.309 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1220 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "140.764 ms",
      "153.264 ms",
      "35.191 ms",
      "211.146 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1220 * 1024 * 8) / (71 * 10^6) = 140.764 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.60.141.50 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.60.141.0",
      "10.60.141.0",
      "10.60.142.0",
      "10.60.140.0"
    ],
    "answer": 3,
    "explanation": "For host 10.60.141.50/23, the subnet mask bits reveal the network ID is 10.60.140.0 and broadcast address is 10.60.141.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.110.128 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.20.111.0",
      "255.255.255.255",
      "172.20.110.0"
    ],
    "answer": 3,
    "explanation": "For host 172.20.110.128/23, the subnet mask bits reveal the network ID is 172.20.110.0 and broadcast address is 172.20.111.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "2.40 ms",
      "48.00 ms",
      "9.30 ms",
      "4.80 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2400 bits / (500 * 1000 bps) = 4.80 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2080 KB over a point-to-point network link with transmission bandwidth rate of 78 Mbps. What is the theoretical transmission delay?",
    "options": [
      "218.453 ms",
      "230.953 ms",
      "327.680 ms",
      "54.613 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2080 * 1024 * 8) / (78 * 10^6) = 218.453 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1600 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "159.844 ms",
      "39.961 ms",
      "172.344 ms",
      "239.766 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1600 * 1024 * 8) / (82 * 10^6) = 159.844 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.41.76.95 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.41.76.0",
      "10.41.77.0",
      "10.41.76.0",
      "10.41.77.255"
    ],
    "answer": 3,
    "explanation": "For host 10.41.76.95/23, the subnet mask bits reveal the network ID is 10.41.76.0 and broadcast address is 10.41.77.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2750 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "137.50 ms",
      "18.25 ms",
      "6.88 ms",
      "13.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2750 bits / (200 * 1000 bps) = 13.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.228.178 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.228.255",
      "172.26.228.0",
      "172.26.229.128",
      "172.26.228.0"
    ],
    "answer": 0,
    "explanation": "For host 172.26.228.178/25, the subnet mask bits reveal the network ID is 172.26.228.128 and broadcast address is 172.26.228.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1460 KB over a point-to-point network link with transmission bandwidth rate of 4 Mbps. What is the theoretical transmission delay?",
    "options": [
      "747.520 ms",
      "4485.120 ms",
      "2990.080 ms",
      "3002.580 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1460 * 1024 * 8) / (4 * 10^6) = 2990.080 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.133.229 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.133.0",
      "192.168.134.224",
      "192.168.133.224",
      "192.168.133.192"
    ],
    "answer": 2,
    "explanation": "For host 192.168.133.229/27, the subnet mask bits reveal the network ID is 192.168.133.224 and broadcast address is 192.168.133.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.184.188 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.184.0",
      "255.255.255.255",
      "255.255.255.255",
      "192.168.185.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.184.188/24, the subnet mask bits reveal the network ID is 192.168.184.0 and broadcast address is 192.168.184.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3840 KB over a point-to-point network link with transmission bandwidth rate of 93 Mbps. What is the theoretical transmission delay?",
    "options": [
      "84.563 ms",
      "350.750 ms",
      "338.250 ms",
      "507.375 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3840 * 1024 * 8) / (93 * 10^6) = 338.250 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.34.47 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.34.40",
      "172.21.35.44",
      "172.21.34.47",
      "172.21.34.48"
    ],
    "answer": 2,
    "explanation": "For host 172.21.34.47/30, the subnet mask bits reveal the network ID is 172.21.34.44 and broadcast address is 172.21.34.47."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2720 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2488.304 ms",
      "3713.707 ms",
      "2475.804 ms",
      "618.951 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2720 * 1024 * 8) / (9 * 10^6) = 2475.804 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "1800.00 ms",
      "184.50 ms",
      "180.00 ms",
      "90.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1800 bits / (10 * 1000 bps) = 180.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3760 KB over a point-to-point network link with transmission bandwidth rate of 29 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1062.135 ms",
      "1593.203 ms",
      "265.534 ms",
      "1074.635 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3760 * 1024 * 8) / (29 * 10^6) = 1062.135 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.228.56 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.228.64",
      "192.168.229.32",
      "192.168.228.63",
      "192.168.228.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.228.56/27, the subnet mask bits reveal the network ID is 192.168.228.32 and broadcast address is 192.168.228.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2100 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "105.00 ms",
      "214.50 ms",
      "210.00 ms",
      "2100.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2100 bits / (10 * 1000 bps) = 210.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.181.209 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.182.128",
      "172.19.181.0",
      "172.19.181.0",
      "172.19.181.255"
    ],
    "answer": 3,
    "explanation": "For host 172.19.181.209/25, the subnet mask bits reveal the network ID is 172.19.181.128 and broadcast address is 172.19.181.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.121.90.246 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.121.90.255",
      "10.121.90.0",
      "10.121.91.224",
      "10.121.90.192"
    ],
    "answer": 0,
    "explanation": "For host 10.121.90.246/27, the subnet mask bits reveal the network ID is 10.121.90.224 and broadcast address is 10.121.90.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1290 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2126.036 ms",
      "3170.304 ms",
      "528.384 ms",
      "2113.536 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1290 * 1024 * 8) / (5 * 10^6) = 2113.536 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 690 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "27.708 ms",
      "123.333 ms",
      "166.249 ms",
      "110.833 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (690 * 1024 * 8) / (51 * 10^6) = 110.833 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 280 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "40.478 ms",
      "39.485 ms",
      "6.746 ms",
      "26.985 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (280 * 1024 * 8) / (85 * 10^6) = 26.985 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2340 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "391.210 ms",
      "403.710 ms",
      "97.802 ms",
      "586.815 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2340 * 1024 * 8) / (49 * 10^6) = 391.210 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.64.70 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.17.64.128",
      "172.17.64.0",
      "172.17.64.64",
      "172.17.65.64"
    ],
    "answer": 2,
    "explanation": "For host 172.17.64.70/26, the subnet mask bits reveal the network ID is 172.17.64.64 and broadcast address is 172.17.64.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.81.74 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.82.0",
      "192.168.80.0",
      "192.168.81.0",
      "192.168.81.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.81.74/23, the subnet mask bits reveal the network ID is 192.168.80.0 and broadcast address is 192.168.81.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1880 KB over a point-to-point network link with transmission bandwidth rate of 80 Mbps. What is the theoretical transmission delay?",
    "options": [
      "205.012 ms",
      "48.128 ms",
      "192.512 ms",
      "288.768 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1880 * 1024 * 8) / (80 * 10^6) = 192.512 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.54.198 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.55.255",
      "192.168.55.0",
      "192.168.54.0",
      "192.168.54.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.54.198/23, the subnet mask bits reveal the network ID is 192.168.54.0 and broadcast address is 192.168.55.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.3.32.186 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.3.32.0",
      "10.3.32.128",
      "10.3.33.128",
      "10.3.32.0"
    ],
    "answer": 1,
    "explanation": "For host 10.3.32.186/25, the subnet mask bits reveal the network ID is 10.3.32.128 and broadcast address is 10.3.32.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 960 KB over a point-to-point network link with transmission bandwidth rate of 74 Mbps. What is the theoretical transmission delay?",
    "options": [
      "159.412 ms",
      "118.775 ms",
      "106.275 ms",
      "26.569 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (960 * 1024 * 8) / (74 * 10^6) = 106.275 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.160.140 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.161.136",
      "192.168.160.136",
      "192.168.160.144",
      "192.168.160.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.160.140/29, the subnet mask bits reveal the network ID is 192.168.160.136 and broadcast address is 192.168.160.143."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.114.167 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.114.192",
      "192.168.114.160",
      "192.168.115.160",
      "192.168.114.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.114.167/27, the subnet mask bits reveal the network ID is 192.168.114.160 and broadcast address is 192.168.114.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4070 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "529.229 ms",
      "793.844 ms",
      "541.729 ms",
      "132.307 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4070 * 1024 * 8) / (63 * 10^6) = 529.229 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.97.228.89 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.97.229.0",
      "10.97.229.255",
      "10.97.228.0",
      "10.97.228.0"
    ],
    "answer": 1,
    "explanation": "For host 10.97.228.89/23, the subnet mask bits reveal the network ID is 10.97.228.0 and broadcast address is 10.97.229.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "26.25 ms",
      "30.75 ms",
      "262.50 ms",
      "13.13 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5250 bits / (200 * 1000 bps) = 26.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 290 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "38.323 ms",
      "6.456 ms",
      "25.823 ms",
      "38.734 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (290 * 1024 * 8) / (92 * 10^6) = 25.823 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.71.7.104 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.71.8.96",
      "10.71.7.112",
      "10.71.7.96",
      "10.71.7.80"
    ],
    "answer": 2,
    "explanation": "For host 10.71.7.104/28, the subnet mask bits reveal the network ID is 10.71.7.96 and broadcast address is 10.71.7.111."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2870 KB over a point-to-point network link with transmission bandwidth rate of 88 Mbps. What is the theoretical transmission delay?",
    "options": [
      "279.671 ms",
      "267.171 ms",
      "66.793 ms",
      "400.756 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2870 * 1024 * 8) / (88 * 10^6) = 267.171 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4240 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "914.055 ms",
      "609.370 ms",
      "621.870 ms",
      "152.342 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4240 * 1024 * 8) / (57 * 10^6) = 609.370 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.134.196 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.132.0",
      "192.168.134.0",
      "192.168.134.0",
      "192.168.135.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.134.196/22, the subnet mask bits reveal the network ID is 192.168.132.0 and broadcast address is 192.168.135.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 680 KB over a point-to-point network link with transmission bandwidth rate of 4 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1392.640 ms",
      "1405.140 ms",
      "2088.960 ms",
      "348.160 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (680 * 1024 * 8) / (4 * 10^6) = 1392.640 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4700 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "94.00 ms",
      "4.70 ms",
      "9.40 ms",
      "13.90 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4700 bits / (500 * 1000 bps) = 9.40 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.219.84 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.22.220.64",
      "172.22.219.64",
      "172.22.219.0",
      "172.22.219.128"
    ],
    "answer": 1,
    "explanation": "For host 172.22.219.84/26, the subnet mask bits reveal the network ID is 172.22.219.64 and broadcast address is 172.22.219.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3550 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "88.75 ms",
      "182.00 ms",
      "1775.00 ms",
      "177.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3550 bits / (20 * 1000 bps) = 177.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.71.77.36 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.71.77.255",
      "10.71.77.0",
      "10.71.77.0",
      "10.71.78.0"
    ],
    "answer": 0,
    "explanation": "For host 10.71.77.36/24, the subnet mask bits reveal the network ID is 10.71.77.0 and broadcast address is 10.71.77.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3040 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "685.572 ms",
      "1009.609 ms",
      "168.268 ms",
      "673.072 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3040 * 1024 * 8) / (37 * 10^6) = 673.072 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2450 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.90 ms",
      "2.45 ms",
      "49.00 ms",
      "9.40 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2450 bits / (500 * 1000 bps) = 4.90 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.91.214 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.91.216",
      "192.168.91.212",
      "192.168.92.212",
      "192.168.91.208"
    ],
    "answer": 1,
    "explanation": "For host 192.168.91.214/30, the subnet mask bits reveal the network ID is 192.168.91.212 and broadcast address is 192.168.91.215."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.30.48.45 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.30.49.0",
      "10.30.48.0",
      "10.30.51.255",
      "10.30.48.0"
    ],
    "answer": 2,
    "explanation": "For host 10.30.48.45/22, the subnet mask bits reveal the network ID is 10.30.48.0 and broadcast address is 10.30.51.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2050 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "41.00 ms",
      "45.50 ms",
      "20.50 ms",
      "410.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2050 bits / (50 * 1000 bps) = 41.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4030 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "142.301 ms",
      "853.804 ms",
      "569.203 ms",
      "581.703 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4030 * 1024 * 8) / (58 * 10^6) = 569.203 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4350 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "217.50 ms",
      "4350.00 ms",
      "435.00 ms",
      "439.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4350 bits / (10 * 1000 bps) = 435.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "118.50 ms",
      "114.00 ms",
      "57.00 ms",
      "1140.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5700 bits / (50 * 1000 bps) = 114.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "224.50 ms",
      "110.00 ms",
      "2200.00 ms",
      "220.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2200 bits / (10 * 1000 bps) = 220.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "18.50 ms",
      "185.00 ms",
      "9.25 ms",
      "23.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1850 bits / (100 * 1000 bps) = 18.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "5900.00 ms",
      "594.50 ms",
      "295.00 ms",
      "590.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5900 bits / (10 * 1000 bps) = 590.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4310 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "396.277 ms",
      "575.666 ms",
      "383.777 ms",
      "95.944 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4310 * 1024 * 8) / (92 * 10^6) = 383.777 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 230 KB over a point-to-point network link with transmission bandwidth rate of 76 Mbps. What is the theoretical transmission delay?",
    "options": [
      "24.792 ms",
      "37.187 ms",
      "37.292 ms",
      "6.198 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (230 * 1024 * 8) / (76 * 10^6) = 24.792 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.229.28.148 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.229.29.0",
      "255.255.255.255",
      "10.229.28.0"
    ],
    "answer": 3,
    "explanation": "For host 10.229.28.148/22, the subnet mask bits reveal the network ID is 10.229.28.0 and broadcast address is 10.229.31.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 890 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "396.231 ms",
      "575.596 ms",
      "95.933 ms",
      "383.731 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (890 * 1024 * 8) / (19 * 10^6) = 383.731 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "23.00 ms",
      "18.50 ms",
      "185.00 ms",
      "9.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3700 bits / (200 * 1000 bps) = 18.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1350 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "13.50 ms",
      "18.00 ms",
      "135.00 ms",
      "6.75 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1350 bits / (100 * 1000 bps) = 13.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "267.00 ms",
      "2625.00 ms",
      "262.50 ms",
      "131.25 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5250 bits / (20 * 1000 bps) = 262.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2710 KB over a point-to-point network link with transmission bandwidth rate of 28 Mbps. What is the theoretical transmission delay?",
    "options": [
      "805.369 ms",
      "1189.303 ms",
      "198.217 ms",
      "792.869 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2710 * 1024 * 8) / (28 * 10^6) = 792.869 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1940 KB over a point-to-point network link with transmission bandwidth rate of 100 Mbps. What is the theoretical transmission delay?",
    "options": [
      "39.731 ms",
      "238.387 ms",
      "171.425 ms",
      "158.925 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1940 * 1024 * 8) / (100 * 10^6) = 158.925 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3480 KB over a point-to-point network link with transmission bandwidth rate of 21 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1370.031 ms",
      "1357.531 ms",
      "339.383 ms",
      "2036.297 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3480 * 1024 * 8) / (21 * 10^6) = 1357.531 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3990 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "272.384 ms",
      "1089.536 ms",
      "1634.304 ms",
      "1102.036 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3990 * 1024 * 8) / (30 * 10^6) = 1089.536 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3050 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "734.871 ms",
      "183.718 ms",
      "1102.306 ms",
      "747.371 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3050 * 1024 * 8) / (34 * 10^6) = 734.871 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.36.144 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.36.0",
      "172.26.37.0",
      "172.26.36.255",
      "172.26.36.0"
    ],
    "answer": 2,
    "explanation": "For host 172.26.36.144/24, the subnet mask bits reveal the network ID is 172.26.36.0 and broadcast address is 172.26.36.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1500 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "750.00 ms",
      "37.50 ms",
      "79.50 ms",
      "75.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1500 bits / (20 * 1000 bps) = 75.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.236.201 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.236.0",
      "192.168.237.0",
      "192.168.236.0",
      "192.168.236.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.236.201/24, the subnet mask bits reveal the network ID is 192.168.236.0 and broadcast address is 192.168.236.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.78.85 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.30.78.0",
      "172.30.79.0",
      "172.30.78.0",
      "172.30.79.255"
    ],
    "answer": 3,
    "explanation": "For host 172.30.78.85/22, the subnet mask bits reveal the network ID is 172.30.76.0 and broadcast address is 172.30.79.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.37.61 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.20.38.0",
      "172.20.37.64",
      "172.20.37.0"
    ],
    "answer": 3,
    "explanation": "For host 172.20.37.61/26, the subnet mask bits reveal the network ID is 172.20.37.0 and broadcast address is 172.20.37.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.139.164 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.139.160",
      "192.168.139.168",
      "192.168.139.167",
      "192.168.140.164"
    ],
    "answer": 2,
    "explanation": "For host 192.168.139.164/30, the subnet mask bits reveal the network ID is 192.168.139.164 and broadcast address is 192.168.139.167."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 820 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "17.493 ms",
      "82.473 ms",
      "69.973 ms",
      "104.960 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (820 * 1024 * 8) / (96 * 10^6) = 69.973 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 910 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "248.491 ms",
      "372.736 ms",
      "62.123 ms",
      "260.991 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (910 * 1024 * 8) / (30 * 10^6) = 248.491 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.210.136 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.210.140",
      "192.168.210.136",
      "192.168.210.132",
      "192.168.211.136"
    ],
    "answer": 1,
    "explanation": "For host 192.168.210.136/30, the subnet mask bits reveal the network ID is 192.168.210.136 and broadcast address is 192.168.210.139."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.229.81 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.229.32",
      "192.168.229.96",
      "192.168.230.64",
      "192.168.229.64"
    ],
    "answer": 3,
    "explanation": "For host 192.168.229.81/27, the subnet mask bits reveal the network ID is 192.168.229.64 and broadcast address is 192.168.229.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.46.129.223 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.46.129.255",
      "10.46.129.0",
      "10.46.129.0",
      "10.46.130.0"
    ],
    "answer": 0,
    "explanation": "For host 10.46.129.223/24, the subnet mask bits reveal the network ID is 10.46.129.0 and broadcast address is 10.46.129.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.162.221.10 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.162.221.0",
      "10.162.221.32",
      "10.162.222.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 10.162.221.10/27, the subnet mask bits reveal the network ID is 10.162.221.0 and broadcast address is 10.162.221.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.93.29.118 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.93.30.0",
      "10.93.29.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 10.93.29.118/24, the subnet mask bits reveal the network ID is 10.93.29.0 and broadcast address is 10.93.29.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2080 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "63.580 ms",
      "254.319 ms",
      "266.819 ms",
      "381.478 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2080 * 1024 * 8) / (67 * 10^6) = 254.319 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.39.149 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.39.0",
      "192.168.40.0",
      "192.168.39.255",
      "192.168.39.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.39.149/23, the subnet mask bits reveal the network ID is 192.168.38.0 and broadcast address is 192.168.39.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2750 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "550.00 ms",
      "27.50 ms",
      "55.00 ms",
      "59.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2750 bits / (50 * 1000 bps) = 55.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2300 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.60 ms",
      "9.10 ms",
      "46.00 ms",
      "2.30 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2300 bits / (500 * 1000 bps) = 4.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4590 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "593.704 ms",
      "98.951 ms",
      "395.803 ms",
      "408.303 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4590 * 1024 * 8) / (95 * 10^6) = 395.803 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4120 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "117.191 ms",
      "468.764 ms",
      "703.147 ms",
      "481.264 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4120 * 1024 * 8) / (72 * 10^6) = 468.764 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2350 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "235.00 ms",
      "239.50 ms",
      "117.50 ms",
      "2350.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2350 bits / (10 * 1000 bps) = 235.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.173.58.79 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.173.59.72",
      "10.173.58.80",
      "10.173.58.64",
      "10.173.58.79"
    ],
    "answer": 3,
    "explanation": "For host 10.173.58.79/29, the subnet mask bits reveal the network ID is 10.173.58.72 and broadcast address is 10.173.58.79."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.57.194 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.57.184",
      "192.168.57.200",
      "192.168.57.199",
      "192.168.58.192"
    ],
    "answer": 2,
    "explanation": "For host 192.168.57.194/29, the subnet mask bits reveal the network ID is 192.168.57.192 and broadcast address is 192.168.57.199."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "1180.00 ms",
      "122.50 ms",
      "118.00 ms",
      "59.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5900 bits / (50 * 1000 bps) = 118.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.184.247 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.184.255",
      "192.168.184.224",
      "192.168.185.240",
      "192.168.184.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.184.247/28, the subnet mask bits reveal the network ID is 192.168.184.240 and broadcast address is 192.168.184.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3550 KB over a point-to-point network link with transmission bandwidth rate of 62 Mbps. What is the theoretical transmission delay?",
    "options": [
      "117.265 ms",
      "703.587 ms",
      "481.558 ms",
      "469.058 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3550 * 1024 * 8) / (62 * 10^6) = 469.058 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2980 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "730.505 ms",
      "718.005 ms",
      "1077.007 ms",
      "179.501 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2980 * 1024 * 8) / (34 * 10^6) = 718.005 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3890 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "624.841 ms",
      "937.261 ms",
      "156.210 ms",
      "637.341 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3890 * 1024 * 8) / (51 * 10^6) = 624.841 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.215.127 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.216.0",
      "172.28.215.255",
      "172.28.215.0",
      "172.28.215.0"
    ],
    "answer": 1,
    "explanation": "For host 172.28.215.127/22, the subnet mask bits reveal the network ID is 172.28.212.0 and broadcast address is 172.28.215.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.35.175 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.35.0",
      "172.20.35.0",
      "172.20.36.128",
      "172.20.35.128"
    ],
    "answer": 3,
    "explanation": "For host 172.20.35.175/25, the subnet mask bits reveal the network ID is 172.20.35.128 and broadcast address is 172.20.35.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.79.184.172 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.79.185.0",
      "10.79.184.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 10.79.184.172/24, the subnet mask bits reveal the network ID is 10.79.184.0 and broadcast address is 10.79.184.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1150 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "138.541 ms",
      "831.247 ms",
      "566.665 ms",
      "554.165 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1150 * 1024 * 8) / (17 * 10^6) = 554.165 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3500 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "3500.00 ms",
      "354.50 ms",
      "175.00 ms",
      "350.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3500 bits / (10 * 1000 bps) = 350.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.242.219.85 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.242.220.0",
      "10.242.219.127",
      "10.242.219.0",
      "10.242.219.128"
    ],
    "answer": 1,
    "explanation": "For host 10.242.219.85/25, the subnet mask bits reveal the network ID is 10.242.219.0 and broadcast address is 10.242.219.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1710 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "500.297 ms",
      "346.031 ms",
      "83.383 ms",
      "333.531 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1710 * 1024 * 8) / (42 * 10^6) = 333.531 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.122.156 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.29.123.144",
      "172.29.122.160",
      "172.29.122.128",
      "172.29.122.144"
    ],
    "answer": 3,
    "explanation": "For host 172.29.122.156/28, the subnet mask bits reveal the network ID is 172.29.122.144 and broadcast address is 172.29.122.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.230.213 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.230.208",
      "192.168.230.224",
      "192.168.231.208",
      "192.168.230.192"
    ],
    "answer": 0,
    "explanation": "For host 192.168.230.213/28, the subnet mask bits reveal the network ID is 192.168.230.208 and broadcast address is 192.168.230.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1450 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "404.945 ms",
      "269.964 ms",
      "67.491 ms",
      "282.464 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1450 * 1024 * 8) / (44 * 10^6) = 269.964 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.248.9 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.27.248.16",
      "172.27.248.0",
      "172.27.249.0",
      "172.27.248.15"
    ],
    "answer": 3,
    "explanation": "For host 172.27.248.9/28, the subnet mask bits reveal the network ID is 172.27.248.0 and broadcast address is 172.27.248.15."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.115.115 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.115.128",
      "192.168.115.0",
      "192.168.115.64",
      "192.168.116.64"
    ],
    "answer": 2,
    "explanation": "For host 192.168.115.115/26, the subnet mask bits reveal the network ID is 192.168.115.64 and broadcast address is 192.168.115.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.103.194 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.104.0",
      "192.168.103.0",
      "192.168.103.255",
      "192.168.103.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.103.194/23, the subnet mask bits reveal the network ID is 192.168.102.0 and broadcast address is 192.168.103.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.175.175.206 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.175.175.176",
      "10.175.176.192",
      "10.175.175.207",
      "10.175.175.208"
    ],
    "answer": 2,
    "explanation": "For host 10.175.175.206/28, the subnet mask bits reveal the network ID is 10.175.175.192 and broadcast address is 10.175.175.207."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.139.245 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.140.0",
      "192.168.139.255",
      "192.168.139.0",
      "192.168.139.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.139.245/23, the subnet mask bits reveal the network ID is 192.168.138.0 and broadcast address is 192.168.139.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2600 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "56.50 ms",
      "26.00 ms",
      "52.00 ms",
      "520.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2600 bits / (50 * 1000 bps) = 52.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 400 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "46.633 ms",
      "8.533 ms",
      "51.200 ms",
      "34.133 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (400 * 1024 * 8) / (96 * 10^6) = 34.133 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2470 KB over a point-to-point network link with transmission bandwidth rate of 35 Mbps. What is the theoretical transmission delay?",
    "options": [
      "578.121 ms",
      "144.530 ms",
      "590.621 ms",
      "867.182 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2470 * 1024 * 8) / (35 * 10^6) = 578.121 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.184.170 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.184.160",
      "192.168.184.168",
      "192.168.185.168",
      "192.168.184.176"
    ],
    "answer": 1,
    "explanation": "For host 192.168.184.170/29, the subnet mask bits reveal the network ID is 192.168.184.168 and broadcast address is 192.168.184.175."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "305.00 ms",
      "30.50 ms",
      "15.25 ms",
      "35.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3050 bits / (100 * 1000 bps) = 30.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2670 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "111.595 ms",
      "458.880 ms",
      "669.571 ms",
      "446.380 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2670 * 1024 * 8) / (49 * 10^6) = 446.380 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1960 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "250.880 ms",
      "167.253 ms",
      "41.813 ms",
      "179.753 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1960 * 1024 * 8) / (96 * 10^6) = 167.253 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.121.208.43 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.121.209.40",
      "10.121.208.40",
      "10.121.208.32",
      "10.121.208.48"
    ],
    "answer": 1,
    "explanation": "For host 10.121.208.43/29, the subnet mask bits reveal the network ID is 10.121.208.40 and broadcast address is 10.121.208.47."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2680 KB over a point-to-point network link with transmission bandwidth rate of 100 Mbps. What is the theoretical transmission delay?",
    "options": [
      "329.318 ms",
      "219.546 ms",
      "54.886 ms",
      "232.046 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2680 * 1024 * 8) / (100 * 10^6) = 219.546 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.120.220.180 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.120.220.176",
      "10.120.220.160",
      "10.120.221.176",
      "10.120.220.192"
    ],
    "answer": 0,
    "explanation": "For host 10.120.220.180/28, the subnet mask bits reveal the network ID is 10.120.220.176 and broadcast address is 10.120.220.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1170 KB over a point-to-point network link with transmission bandwidth rate of 45 Mbps. What is the theoretical transmission delay?",
    "options": [
      "212.992 ms",
      "319.488 ms",
      "53.248 ms",
      "225.492 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1170 * 1024 * 8) / (45 * 10^6) = 212.992 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3670 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "362.089 ms",
      "349.589 ms",
      "87.397 ms",
      "524.383 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3670 * 1024 * 8) / (86 * 10^6) = 349.589 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "82.50 ms",
      "825.00 ms",
      "41.25 ms",
      "87.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1650 bits / (20 * 1000 bps) = 82.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3200 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "32.00 ms",
      "64.00 ms",
      "640.00 ms",
      "68.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3200 bits / (50 * 1000 bps) = 64.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.157.7.186 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.157.7.0",
      "10.157.8.0",
      "10.157.7.255",
      "10.157.7.0"
    ],
    "answer": 2,
    "explanation": "For host 10.157.7.186/23, the subnet mask bits reveal the network ID is 10.157.6.0 and broadcast address is 10.157.7.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3850 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "192.50 ms",
      "197.00 ms",
      "96.25 ms",
      "1925.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3850 bits / (20 * 1000 bps) = 192.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2370 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "54.537 ms",
      "230.647 ms",
      "218.147 ms",
      "327.220 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2370 * 1024 * 8) / (89 * 10^6) = 218.147 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4400 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "220.00 ms",
      "2200.00 ms",
      "224.50 ms",
      "110.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4400 bits / (20 * 1000 bps) = 220.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3420 KB over a point-to-point network link with transmission bandwidth rate of 36 Mbps. What is the theoretical transmission delay?",
    "options": [
      "790.740 ms",
      "194.560 ms",
      "778.240 ms",
      "1167.360 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3420 * 1024 * 8) / (36 * 10^6) = 778.240 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1750 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "4.38 ms",
      "13.25 ms",
      "87.50 ms",
      "8.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1750 bits / (200 * 1000 bps) = 8.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.71.168 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.72.0",
      "172.20.71.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.20.71.168/24, the subnet mask bits reveal the network ID is 172.20.71.0 and broadcast address is 172.20.71.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4900 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "980.00 ms",
      "102.50 ms",
      "98.00 ms",
      "49.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4900 bits / (50 * 1000 bps) = 98.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5950 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "16.40 ms",
      "11.90 ms",
      "119.00 ms",
      "5.95 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5950 bits / (500 * 1000 bps) = 11.90 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4800 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "12.00 ms",
      "28.50 ms",
      "240.00 ms",
      "24.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4800 bits / (200 * 1000 bps) = 24.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.158.146.55 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.158.146.0",
      "10.158.147.0",
      "10.158.146.0",
      "10.158.144.0"
    ],
    "answer": 3,
    "explanation": "For host 10.158.146.55/22, the subnet mask bits reveal the network ID is 10.158.144.0 and broadcast address is 10.158.147.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.96.112 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.96.128",
      "172.21.96.127",
      "172.21.97.112",
      "172.21.96.96"
    ],
    "answer": 1,
    "explanation": "For host 172.21.96.112/28, the subnet mask bits reveal the network ID is 172.21.96.112 and broadcast address is 172.21.96.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.113.237 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.114.0",
      "192.168.113.255",
      "192.168.113.0",
      "192.168.113.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.113.237/24, the subnet mask bits reveal the network ID is 192.168.113.0 and broadcast address is 192.168.113.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 510 KB over a point-to-point network link with transmission bandwidth rate of 81 Mbps. What is the theoretical transmission delay?",
    "options": [
      "12.895 ms",
      "77.369 ms",
      "64.079 ms",
      "51.579 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (510 * 1024 * 8) / (81 * 10^6) = 51.579 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.185.21 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.187.255",
      "172.31.186.0",
      "172.31.185.0",
      "172.31.185.0"
    ],
    "answer": 0,
    "explanation": "For host 172.31.185.21/22, the subnet mask bits reveal the network ID is 172.31.184.0 and broadcast address is 172.31.187.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.236.29 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.236.31",
      "192.168.237.28",
      "192.168.236.32",
      "192.168.236.24"
    ],
    "answer": 0,
    "explanation": "For host 192.168.236.29/30, the subnet mask bits reveal the network ID is 192.168.236.28 and broadcast address is 192.168.236.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1825.00 ms",
      "91.25 ms",
      "182.50 ms",
      "187.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3650 bits / (20 * 1000 bps) = 182.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.52.127 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.23.52.112",
      "172.23.52.128",
      "172.23.53.120",
      "172.23.52.120"
    ],
    "answer": 3,
    "explanation": "For host 172.23.52.127/29, the subnet mask bits reveal the network ID is 172.23.52.120 and broadcast address is 172.23.52.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3000 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "75.00 ms",
      "1500.00 ms",
      "154.50 ms",
      "150.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3000 bits / (20 * 1000 bps) = 150.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5100 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "510.00 ms",
      "5100.00 ms",
      "255.00 ms",
      "514.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5100 bits / (10 * 1000 bps) = 510.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.58.136 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.56.0",
      "192.168.59.0",
      "192.168.58.0",
      "192.168.58.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.58.136/22, the subnet mask bits reveal the network ID is 192.168.56.0 and broadcast address is 192.168.59.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.122.25 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.122.0",
      "192.168.123.0",
      "192.168.122.32",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 192.168.122.25/27, the subnet mask bits reveal the network ID is 192.168.122.0 and broadcast address is 192.168.122.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3350 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1675.00 ms",
      "167.50 ms",
      "83.75 ms",
      "172.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3350 bits / (20 * 1000 bps) = 167.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "108.50 ms",
      "104.00 ms",
      "1040.00 ms",
      "52.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5200 bits / (50 * 1000 bps) = 104.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3100 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "31.00 ms",
      "15.50 ms",
      "310.00 ms",
      "35.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3100 bits / (100 * 1000 bps) = 31.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5500 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "59.50 ms",
      "55.00 ms",
      "27.50 ms",
      "550.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5500 bits / (100 * 1000 bps) = 55.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.97.130.141 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.97.131.0",
      "10.97.130.0",
      "10.97.130.255",
      "10.97.130.0"
    ],
    "answer": 2,
    "explanation": "For host 10.97.130.141/24, the subnet mask bits reveal the network ID is 10.97.130.0 and broadcast address is 10.97.130.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.254.228 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.18.255.192",
      "172.18.254.128",
      "172.18.254.0",
      "172.18.254.255"
    ],
    "answer": 3,
    "explanation": "For host 172.18.254.228/26, the subnet mask bits reveal the network ID is 172.18.254.192 and broadcast address is 172.18.254.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1400 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "1400.00 ms",
      "140.00 ms",
      "70.00 ms",
      "144.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1400 bits / (10 * 1000 bps) = 140.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "100.00 ms",
      "50.00 ms",
      "104.50 ms",
      "1000.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1000 bits / (10 * 1000 bps) = 100.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2580 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1761.280 ms",
      "7057.620 ms",
      "7045.120 ms",
      "10567.680 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2580 * 1024 * 8) / (3 * 10^6) = 7045.120 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 610 KB over a point-to-point network link with transmission bandwidth rate of 28 Mbps. What is the theoretical transmission delay?",
    "options": [
      "44.617 ms",
      "178.469 ms",
      "267.703 ms",
      "190.969 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (610 * 1024 * 8) / (28 * 10^6) = 178.469 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2220 KB over a point-to-point network link with transmission bandwidth rate of 32 Mbps. What is the theoretical transmission delay?",
    "options": [
      "852.480 ms",
      "580.820 ms",
      "142.080 ms",
      "568.320 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2220 * 1024 * 8) / (32 * 10^6) = 568.320 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4620 KB over a point-to-point network link with transmission bandwidth rate of 14 Mbps. What is the theoretical transmission delay?",
    "options": [
      "675.840 ms",
      "2703.360 ms",
      "2715.860 ms",
      "4055.040 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4620 * 1024 * 8) / (14 * 10^6) = 2703.360 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4300 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "86.00 ms",
      "90.50 ms",
      "43.00 ms",
      "860.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4300 bits / (50 * 1000 bps) = 86.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.244.177.3 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.244.177.0",
      "10.244.177.7",
      "10.244.178.0",
      "10.244.177.8"
    ],
    "answer": 1,
    "explanation": "For host 10.244.177.3/29, the subnet mask bits reveal the network ID is 10.244.177.0 and broadcast address is 10.244.177.7."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3100 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "113.371 ms",
      "680.229 ms",
      "465.986 ms",
      "453.486 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3100 * 1024 * 8) / (56 * 10^6) = 453.486 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.213.148.90 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.213.148.0",
      "10.213.148.0",
      "10.213.148.255",
      "10.213.149.0"
    ],
    "answer": 2,
    "explanation": "For host 10.213.148.90/24, the subnet mask bits reveal the network ID is 10.213.148.0 and broadcast address is 10.213.148.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2390 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1317.759 ms",
      "1305.259 ms",
      "1957.888 ms",
      "326.315 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2390 * 1024 * 8) / (15 * 10^6) = 1305.259 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.181.1 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.182.0",
      "172.23.181.0",
      "172.23.181.3",
      "172.23.181.4"
    ],
    "answer": 2,
    "explanation": "For host 172.23.181.1/30, the subnet mask bits reveal the network ID is 172.23.181.0 and broadcast address is 172.23.181.3."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.88.245.21 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.88.245.16",
      "10.88.246.20",
      "10.88.245.24",
      "10.88.245.20"
    ],
    "answer": 3,
    "explanation": "For host 10.88.245.21/30, the subnet mask bits reveal the network ID is 10.88.245.20 and broadcast address is 10.88.245.23."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1710 KB over a point-to-point network link with transmission bandwidth rate of 20 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1050.624 ms",
      "700.416 ms",
      "712.916 ms",
      "175.104 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1710 * 1024 * 8) / (20 * 10^6) = 700.416 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.152.146 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.18.152.0",
      "255.255.255.255",
      "255.255.255.255",
      "172.18.153.0"
    ],
    "answer": 0,
    "explanation": "For host 172.18.152.146/22, the subnet mask bits reveal the network ID is 172.18.152.0 and broadcast address is 172.18.155.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.223.250 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.223.255",
      "172.17.223.240",
      "172.17.223.0",
      "172.17.224.248"
    ],
    "answer": 0,
    "explanation": "For host 172.17.223.250/29, the subnet mask bits reveal the network ID is 172.17.223.248 and broadcast address is 172.17.223.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3350 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "71.50 ms",
      "67.00 ms",
      "670.00 ms",
      "33.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3350 bits / (50 * 1000 bps) = 67.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.113.99 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.113.0",
      "192.168.114.0",
      "192.168.113.127",
      "192.168.113.128"
    ],
    "answer": 2,
    "explanation": "For host 192.168.113.99/25, the subnet mask bits reveal the network ID is 192.168.113.0 and broadcast address is 192.168.113.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3250 KB over a point-to-point network link with transmission bandwidth rate of 68 Mbps. What is the theoretical transmission delay?",
    "options": [
      "404.029 ms",
      "587.294 ms",
      "391.529 ms",
      "97.882 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3250 * 1024 * 8) / (68 * 10^6) = 391.529 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.230.82.150 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.230.82.136",
      "10.230.82.152",
      "10.230.82.151",
      "10.230.83.144"
    ],
    "answer": 2,
    "explanation": "For host 10.230.82.150/29, the subnet mask bits reveal the network ID is 10.230.82.144 and broadcast address is 10.230.82.151."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2630 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "377.669 ms",
      "91.292 ms",
      "365.169 ms",
      "547.753 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2630 * 1024 * 8) / (59 * 10^6) = 365.169 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 150 KB over a point-to-point network link with transmission bandwidth rate of 32 Mbps. What is the theoretical transmission delay?",
    "options": [
      "38.400 ms",
      "9.600 ms",
      "50.900 ms",
      "57.600 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (150 * 1024 * 8) / (32 * 10^6) = 38.400 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4170 KB over a point-to-point network link with transmission bandwidth rate of 33 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1035.171 ms",
      "258.793 ms",
      "1552.756 ms",
      "1047.671 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4170 * 1024 * 8) / (33 * 10^6) = 1035.171 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 990 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "312.873 ms",
      "75.093 ms",
      "300.373 ms",
      "450.560 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (990 * 1024 * 8) / (27 * 10^6) = 300.373 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3310 KB over a point-to-point network link with transmission bandwidth rate of 65 Mbps. What is the theoretical transmission delay?",
    "options": [
      "104.290 ms",
      "429.662 ms",
      "417.162 ms",
      "625.743 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3310 * 1024 * 8) / (65 * 10^6) = 417.162 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "18.00 ms",
      "40.50 ms",
      "360.00 ms",
      "36.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3600 bits / (100 * 1000 bps) = 36.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.177.63.29 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.177.63.128",
      "10.177.64.0",
      "10.177.63.127",
      "10.177.63.0"
    ],
    "answer": 2,
    "explanation": "For host 10.177.63.29/25, the subnet mask bits reveal the network ID is 10.177.63.0 and broadcast address is 10.177.63.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.245.77.84 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.245.77.88",
      "10.245.78.80",
      "10.245.77.80",
      "10.245.77.72"
    ],
    "answer": 2,
    "explanation": "For host 10.245.77.84/29, the subnet mask bits reveal the network ID is 10.245.77.80 and broadcast address is 10.245.77.87."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.225.145.192 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.225.145.184",
      "10.225.145.192",
      "10.225.146.192",
      "10.225.145.200"
    ],
    "answer": 1,
    "explanation": "For host 10.225.145.192/29, the subnet mask bits reveal the network ID is 10.225.145.192 and broadcast address is 10.225.145.199."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5450 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "27.25 ms",
      "13.63 ms",
      "31.75 ms",
      "272.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5450 bits / (200 * 1000 bps) = 27.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4730 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4843.520 ms",
      "19386.580 ms",
      "29061.120 ms",
      "19374.080 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4730 * 1024 * 8) / (2 * 10^6) = 19374.080 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.116.199 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.29.116.200",
      "172.29.117.196",
      "172.29.116.192",
      "172.29.116.196"
    ],
    "answer": 3,
    "explanation": "For host 172.29.116.199/30, the subnet mask bits reveal the network ID is 172.29.116.196 and broadcast address is 172.29.116.199."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1700 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "170.00 ms",
      "174.50 ms",
      "1700.00 ms",
      "85.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1700 bits / (10 * 1000 bps) = 170.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4300 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "430.00 ms",
      "21.50 ms",
      "47.50 ms",
      "43.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4300 bits / (100 * 1000 bps) = 43.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4580 KB over a point-to-point network link with transmission bandwidth rate of 33 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1136.950 ms",
      "284.238 ms",
      "1705.425 ms",
      "1149.450 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4580 * 1024 * 8) / (33 * 10^6) = 1136.950 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.149.103.158 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.149.103.152",
      "10.149.104.156",
      "10.149.103.159",
      "10.149.103.160"
    ],
    "answer": 2,
    "explanation": "For host 10.149.103.158/30, the subnet mask bits reveal the network ID is 10.149.103.156 and broadcast address is 10.149.103.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 340 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "12.434 ms",
      "49.737 ms",
      "62.237 ms",
      "74.606 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (340 * 1024 * 8) / (56 * 10^6) = 49.737 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2860 KB over a point-to-point network link with transmission bandwidth rate of 24 Mbps. What is the theoretical transmission delay?",
    "options": [
      "976.213 ms",
      "988.713 ms",
      "244.053 ms",
      "1464.320 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2860 * 1024 * 8) / (24 * 10^6) = 976.213 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4650 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.65 ms",
      "13.80 ms",
      "9.30 ms",
      "93.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4650 bits / (500 * 1000 bps) = 9.30 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4050 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "207.00 ms",
      "101.25 ms",
      "202.50 ms",
      "2025.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4050 bits / (20 * 1000 bps) = 202.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.148.52 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.149.48",
      "192.168.148.56",
      "192.168.148.40",
      "192.168.148.55"
    ],
    "answer": 3,
    "explanation": "For host 192.168.148.52/29, the subnet mask bits reveal the network ID is 192.168.148.48 and broadcast address is 192.168.148.55."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.62.4 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.62.16",
      "192.168.62.0",
      "192.168.63.0",
      "192.168.62.15"
    ],
    "answer": 3,
    "explanation": "For host 192.168.62.4/28, the subnet mask bits reveal the network ID is 192.168.62.0 and broadcast address is 192.168.62.15."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.88.55.211 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.88.55.128",
      "10.88.55.255",
      "10.88.55.0",
      "10.88.56.192"
    ],
    "answer": 1,
    "explanation": "For host 10.88.55.211/26, the subnet mask bits reveal the network ID is 10.88.55.192 and broadcast address is 10.88.55.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 140 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "37.432 ms",
      "37.398 ms",
      "24.932 ms",
      "6.233 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (140 * 1024 * 8) / (46 * 10^6) = 24.932 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.3.146 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.16.3.0",
      "172.16.3.0",
      "172.16.0.0",
      "172.16.4.0"
    ],
    "answer": 2,
    "explanation": "For host 172.16.3.146/22, the subnet mask bits reveal the network ID is 172.16.0.0 and broadcast address is 172.16.3.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.77.195 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.78.192",
      "172.20.77.128",
      "172.20.77.0",
      "172.20.77.192"
    ],
    "answer": 3,
    "explanation": "For host 172.20.77.195/26, the subnet mask bits reveal the network ID is 172.20.77.192 and broadcast address is 172.20.77.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4900 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "490.00 ms",
      "245.00 ms",
      "4900.00 ms",
      "494.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4900 bits / (10 * 1000 bps) = 490.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1250 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "29.50 ms",
      "25.00 ms",
      "12.50 ms",
      "250.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1250 bits / (50 * 1000 bps) = 25.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4090 KB over a point-to-point network link with transmission bandwidth rate of 88 Mbps. What is the theoretical transmission delay?",
    "options": [
      "571.113 ms",
      "95.185 ms",
      "380.742 ms",
      "393.242 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4090 * 1024 * 8) / (88 * 10^6) = 380.742 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3300 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "334.50 ms",
      "330.00 ms",
      "3300.00 ms",
      "165.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3300 bits / (10 * 1000 bps) = 330.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.199.139.219 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.199.139.128",
      "10.199.139.0",
      "10.199.139.0",
      "10.199.140.128"
    ],
    "answer": 0,
    "explanation": "For host 10.199.139.219/25, the subnet mask bits reveal the network ID is 10.199.139.128 and broadcast address is 10.199.139.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4700 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "94.00 ms",
      "940.00 ms",
      "98.50 ms",
      "47.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4700 bits / (50 * 1000 bps) = 94.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5150 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "128.75 ms",
      "257.50 ms",
      "262.00 ms",
      "2575.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5150 bits / (20 * 1000 bps) = 257.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4320 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2949.120 ms",
      "11796.480 ms",
      "17694.720 ms",
      "11808.980 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4320 * 1024 * 8) / (3 * 10^6) = 11796.480 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2220 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "201.940 ms",
      "47.360 ms",
      "284.160 ms",
      "189.440 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2220 * 1024 * 8) / (96 * 10^6) = 189.440 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3410 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4668.287 ms",
      "1163.947 ms",
      "6983.680 ms",
      "4655.787 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3410 * 1024 * 8) / (6 * 10^6) = 4655.787 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2600 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "2.60 ms",
      "9.70 ms",
      "52.00 ms",
      "5.20 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2600 bits / (500 * 1000 bps) = 5.20 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.134.213 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.135.0",
      "255.255.255.255",
      "192.168.134.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.134.213/23, the subnet mask bits reveal the network ID is 192.168.134.0 and broadcast address is 192.168.135.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1410 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "43.753 ms",
      "187.511 ms",
      "175.011 ms",
      "262.516 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1410 * 1024 * 8) / (66 * 10^6) = 175.011 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.184.122 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.25.187.255",
      "172.25.184.0",
      "172.25.185.0",
      "172.25.184.0"
    ],
    "answer": 0,
    "explanation": "For host 172.25.184.122/22, the subnet mask bits reveal the network ID is 172.25.184.0 and broadcast address is 172.25.187.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2500 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "129.50 ms",
      "125.00 ms",
      "62.50 ms",
      "1250.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2500 bits / (20 * 1000 bps) = 125.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "212.50 ms",
      "21.25 ms",
      "10.63 ms",
      "25.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4250 bits / (200 * 1000 bps) = 21.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.236.180 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.16.236.0",
      "172.16.236.128",
      "172.16.237.128",
      "172.16.236.0"
    ],
    "answer": 1,
    "explanation": "For host 172.16.236.180/25, the subnet mask bits reveal the network ID is 172.16.236.128 and broadcast address is 172.16.236.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2960 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "178.296 ms",
      "725.686 ms",
      "713.186 ms",
      "1069.779 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2960 * 1024 * 8) / (34 * 10^6) = 713.186 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2920 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "369.524 ms",
      "535.537 ms",
      "357.024 ms",
      "89.256 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2920 * 1024 * 8) / (67 * 10^6) = 357.024 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3530 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2224.443 ms",
      "2236.943 ms",
      "556.111 ms",
      "3336.665 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3530 * 1024 * 8) / (13 * 10^6) = 2224.443 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.201.231.189 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.201.231.128",
      "10.201.231.64",
      "10.201.232.128",
      "10.201.231.192"
    ],
    "answer": 0,
    "explanation": "For host 10.201.231.189/26, the subnet mask bits reveal the network ID is 10.201.231.128 and broadcast address is 10.201.231.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.220.128 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.221.128",
      "172.20.220.128",
      "172.20.220.124",
      "172.20.220.132"
    ],
    "answer": 1,
    "explanation": "For host 172.20.220.128/30, the subnet mask bits reveal the network ID is 172.20.220.128 and broadcast address is 172.20.220.131."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1730 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1250.485 ms",
      "846.156 ms",
      "833.656 ms",
      "208.414 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1730 * 1024 * 8) / (17 * 10^6) = 833.656 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1870 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "43.031 ms",
      "184.624 ms",
      "172.124 ms",
      "258.186 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1870 * 1024 * 8) / (89 * 10^6) = 172.124 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "149.50 ms",
      "145.00 ms",
      "72.50 ms",
      "1450.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1450 bits / (10 * 1000 bps) = 145.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1960 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "197.055 ms",
      "46.139 ms",
      "276.833 ms",
      "184.555 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1960 * 1024 * 8) / (87 * 10^6) = 184.555 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1950 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "195.00 ms",
      "97.50 ms",
      "1950.00 ms",
      "199.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1950 bits / (10 * 1000 bps) = 195.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.237.104 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.237.112",
      "192.168.237.96",
      "192.168.237.104",
      "192.168.238.104"
    ],
    "answer": 2,
    "explanation": "For host 192.168.237.104/29, the subnet mask bits reveal the network ID is 192.168.237.104 and broadcast address is 192.168.237.111."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1060 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "41.748 ms",
      "166.991 ms",
      "179.491 ms",
      "250.486 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1060 * 1024 * 8) / (52 * 10^6) = 166.991 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5450 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "545.00 ms",
      "27.25 ms",
      "59.00 ms",
      "54.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5450 bits / (100 * 1000 bps) = 54.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.154.54 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.154.0",
      "192.168.155.0",
      "255.255.255.255",
      "192.168.154.64"
    ],
    "answer": 0,
    "explanation": "For host 192.168.154.54/26, the subnet mask bits reveal the network ID is 192.168.154.0 and broadcast address is 192.168.154.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4350 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "412.896 ms",
      "100.099 ms",
      "600.593 ms",
      "400.396 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4350 * 1024 * 8) / (89 * 10^6) = 400.396 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.3.137.54 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.3.138.32",
      "10.3.137.64",
      "10.3.137.32",
      "10.3.137.0"
    ],
    "answer": 2,
    "explanation": "For host 10.3.137.54/27, the subnet mask bits reveal the network ID is 10.3.137.32 and broadcast address is 10.3.137.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3150 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "339.143 ms",
      "81.661 ms",
      "489.965 ms",
      "326.643 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3150 * 1024 * 8) / (79 * 10^6) = 326.643 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1950 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "242.036 ms",
      "161.358 ms",
      "173.858 ms",
      "40.339 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1950 * 1024 * 8) / (99 * 10^6) = 161.358 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3550 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "139.815 ms",
      "571.762 ms",
      "838.892 ms",
      "559.262 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3550 * 1024 * 8) / (52 * 10^6) = 559.262 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "63.00 ms",
      "58.50 ms",
      "585.00 ms",
      "29.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5850 bits / (100 * 1000 bps) = 58.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3350 KB over a point-to-point network link with transmission bandwidth rate of 11 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3742.255 ms",
      "623.709 ms",
      "2494.836 ms",
      "2507.336 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3350 * 1024 * 8) / (11 * 10^6) = 2494.836 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.166.164 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.166.255",
      "172.24.167.128",
      "172.24.166.0",
      "172.24.166.0"
    ],
    "answer": 0,
    "explanation": "For host 172.24.166.164/25, the subnet mask bits reveal the network ID is 172.24.166.128 and broadcast address is 172.24.166.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 900 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "134.868 ms",
      "89.912 ms",
      "102.412 ms",
      "22.478 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (900 * 1024 * 8) / (82 * 10^6) = 89.912 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.160.201 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "192.168.160.0",
      "192.168.161.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.160.201/23, the subnet mask bits reveal the network ID is 192.168.160.0 and broadcast address is 192.168.161.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1710 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4202.496 ms",
      "2801.664 ms",
      "2814.164 ms",
      "700.416 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1710 * 1024 * 8) / (5 * 10^6) = 2801.664 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.181.244 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.18.182.240",
      "172.18.181.232",
      "172.18.181.247",
      "172.18.181.248"
    ],
    "answer": 2,
    "explanation": "For host 172.18.181.244/29, the subnet mask bits reveal the network ID is 172.18.181.240 and broadcast address is 172.18.181.247."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4450 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "89.00 ms",
      "44.50 ms",
      "93.50 ms",
      "890.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4450 bits / (50 * 1000 bps) = 89.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "187.50 ms",
      "23.25 ms",
      "9.38 ms",
      "18.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3750 bits / (200 * 1000 bps) = 18.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.86.49 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.86.56",
      "192.168.87.48",
      "192.168.86.48",
      "192.168.86.40"
    ],
    "answer": 2,
    "explanation": "For host 192.168.86.49/29, the subnet mask bits reveal the network ID is 192.168.86.48 and broadcast address is 192.168.86.55."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.163.50 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.29.163.55",
      "172.29.164.48",
      "172.29.163.56",
      "172.29.163.40"
    ],
    "answer": 0,
    "explanation": "For host 172.29.163.50/29, the subnet mask bits reveal the network ID is 172.29.163.48 and broadcast address is 172.29.163.55."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4400 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "440.00 ms",
      "4400.00 ms",
      "444.50 ms",
      "220.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4400 bits / (10 * 1000 bps) = 440.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "53.00 ms",
      "9.80 ms",
      "2.65 ms",
      "5.30 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2650 bits / (500 * 1000 bps) = 5.30 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.253.148 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.253.152",
      "192.168.253.151",
      "192.168.253.136",
      "192.168.254.144"
    ],
    "answer": 1,
    "explanation": "For host 192.168.253.148/29, the subnet mask bits reveal the network ID is 192.168.253.144 and broadcast address is 192.168.253.151."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.29.212.59 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.29.213.0",
      "10.29.215.255",
      "10.29.212.0",
      "10.29.212.0"
    ],
    "answer": 1,
    "explanation": "For host 10.29.212.59/22, the subnet mask bits reveal the network ID is 10.29.212.0 and broadcast address is 10.29.215.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4930 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1091.529 ms",
      "1637.293 ms",
      "1104.029 ms",
      "272.882 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4930 * 1024 * 8) / (37 * 10^6) = 1091.529 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3000 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "431.158 ms",
      "646.737 ms",
      "107.789 ms",
      "443.658 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3000 * 1024 * 8) / (57 * 10^6) = 431.158 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3950 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4057.300 ms",
      "1011.200 ms",
      "4044.800 ms",
      "6067.200 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3950 * 1024 * 8) / (8 * 10^6) = 4044.800 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.138.82 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.138.127",
      "172.21.139.64",
      "172.21.138.0",
      "172.21.138.128"
    ],
    "answer": 0,
    "explanation": "For host 172.21.138.82/26, the subnet mask bits reveal the network ID is 172.21.138.64 and broadcast address is 172.21.138.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.163.139.129 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.163.139.159",
      "10.163.139.160",
      "10.163.139.96",
      "10.163.140.128"
    ],
    "answer": 0,
    "explanation": "For host 10.163.139.129/27, the subnet mask bits reveal the network ID is 10.163.139.128 and broadcast address is 10.163.139.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.160.57 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.160.0",
      "192.168.160.255",
      "192.168.160.0",
      "192.168.161.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.160.57/24, the subnet mask bits reveal the network ID is 192.168.160.0 and broadcast address is 192.168.160.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.5.129.38 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.5.129.128",
      "10.5.129.127",
      "10.5.130.0",
      "10.5.129.0"
    ],
    "answer": 1,
    "explanation": "For host 10.5.129.38/25, the subnet mask bits reveal the network ID is 10.5.129.0 and broadcast address is 10.5.129.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.167.120 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.167.64",
      "172.24.167.128",
      "172.24.167.96",
      "172.24.168.96"
    ],
    "answer": 2,
    "explanation": "For host 172.24.167.120/27, the subnet mask bits reveal the network ID is 172.24.167.96 and broadcast address is 172.24.167.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3460 KB over a point-to-point network link with transmission bandwidth rate of 25 Mbps. What is the theoretical transmission delay?",
    "options": [
      "283.443 ms",
      "1146.273 ms",
      "1133.773 ms",
      "1700.659 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3460 * 1024 * 8) / (25 * 10^6) = 1133.773 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.51.238 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.52.128",
      "172.16.51.0",
      "172.16.51.255",
      "172.16.51.0"
    ],
    "answer": 2,
    "explanation": "For host 172.16.51.238/25, the subnet mask bits reveal the network ID is 172.16.51.128 and broadcast address is 172.16.51.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.152.183 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.152.0",
      "192.168.152.0",
      "192.168.153.128",
      "192.168.152.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.152.183/25, the subnet mask bits reveal the network ID is 192.168.152.128 and broadcast address is 192.168.152.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1800 KB over a point-to-point network link with transmission bandwidth rate of 93 Mbps. What is the theoretical transmission delay?",
    "options": [
      "158.555 ms",
      "171.055 ms",
      "237.832 ms",
      "39.639 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1800 * 1024 * 8) / (93 * 10^6) = 158.555 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.32.233.100 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.32.233.128",
      "10.32.233.96",
      "10.32.234.96",
      "10.32.233.64"
    ],
    "answer": 1,
    "explanation": "For host 10.32.233.100/27, the subnet mask bits reveal the network ID is 10.32.233.96 and broadcast address is 10.32.233.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3270 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "115.465 ms",
      "692.789 ms",
      "474.359 ms",
      "461.859 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3270 * 1024 * 8) / (58 * 10^6) = 461.859 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1300 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "130.00 ms",
      "13.00 ms",
      "6.50 ms",
      "17.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1300 bits / (100 * 1000 bps) = 13.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2100 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "343.331 ms",
      "496.246 ms",
      "82.708 ms",
      "330.831 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2100 * 1024 * 8) / (52 * 10^6) = 330.831 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.164.214.116 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.164.214.96",
      "10.164.215.96",
      "10.164.214.128",
      "10.164.214.64"
    ],
    "answer": 0,
    "explanation": "For host 10.164.214.116/27, the subnet mask bits reveal the network ID is 10.164.214.96 and broadcast address is 10.164.214.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 390 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "76.069 ms",
      "12.678 ms",
      "63.212 ms",
      "50.712 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (390 * 1024 * 8) / (63 * 10^6) = 50.712 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2200 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "22.00 ms",
      "48.50 ms",
      "440.00 ms",
      "44.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2200 bits / (50 * 1000 bps) = 44.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1230 KB over a point-to-point network link with transmission bandwidth rate of 29 Mbps. What is the theoretical transmission delay?",
    "options": [
      "86.863 ms",
      "359.954 ms",
      "521.181 ms",
      "347.454 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1230 * 1024 * 8) / (29 * 10^6) = 347.454 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.52.29.189 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.52.29.176",
      "10.52.30.176",
      "10.52.29.192",
      "10.52.29.160"
    ],
    "answer": 0,
    "explanation": "For host 10.52.29.189/28, the subnet mask bits reveal the network ID is 10.52.29.176 and broadcast address is 10.52.29.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2450 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "542.443 ms",
      "554.943 ms",
      "135.611 ms",
      "813.665 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2450 * 1024 * 8) / (37 * 10^6) = 542.443 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.132.189 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.132.192",
      "172.28.133.128",
      "172.28.132.64",
      "172.28.132.191"
    ],
    "answer": 3,
    "explanation": "For host 172.28.132.189/26, the subnet mask bits reveal the network ID is 172.28.132.128 and broadcast address is 172.28.132.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3010 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "632.254 ms",
      "158.064 ms",
      "644.754 ms",
      "948.382 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3010 * 1024 * 8) / (39 * 10^6) = 632.254 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3330 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "376.225 ms",
      "545.587 ms",
      "363.725 ms",
      "90.931 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3330 * 1024 * 8) / (75 * 10^6) = 363.725 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2600 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "546.133 ms",
      "136.533 ms",
      "558.633 ms",
      "819.200 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2600 * 1024 * 8) / (39 * 10^6) = 546.133 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3750 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "10240.000 ms",
      "15360.000 ms",
      "10252.500 ms",
      "2560.000 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3750 * 1024 * 8) / (3 * 10^6) = 10240.000 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1260 KB over a point-to-point network link with transmission bandwidth rate of 22 Mbps. What is the theoretical transmission delay?",
    "options": [
      "117.295 ms",
      "469.178 ms",
      "703.767 ms",
      "481.678 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1260 * 1024 * 8) / (22 * 10^6) = 469.178 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1290 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "932.442 ms",
      "634.128 ms",
      "155.407 ms",
      "621.628 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1290 * 1024 * 8) / (17 * 10^6) = 621.628 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.39.216 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.39.224",
      "192.168.40.208",
      "192.168.39.192",
      "192.168.39.208"
    ],
    "answer": 3,
    "explanation": "For host 192.168.39.216/28, the subnet mask bits reveal the network ID is 192.168.39.208 and broadcast address is 192.168.39.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4900 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "924.791 ms",
      "1368.436 ms",
      "228.073 ms",
      "912.291 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4900 * 1024 * 8) / (44 * 10^6) = 912.291 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3900 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "780.00 ms",
      "39.00 ms",
      "82.50 ms",
      "78.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3900 bits / (50 * 1000 bps) = 78.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3890 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "388.620 ms",
      "97.155 ms",
      "401.120 ms",
      "582.931 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3890 * 1024 * 8) / (82 * 10^6) = 388.620 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.199.121 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.199.0",
      "192.168.200.0",
      "192.168.198.0",
      "192.168.199.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.199.121/23, the subnet mask bits reveal the network ID is 192.168.198.0 and broadcast address is 192.168.199.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "9.50 ms",
      "190.00 ms",
      "19.00 ms",
      "23.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3800 bits / (200 * 1000 bps) = 19.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2490 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "91.063 ms",
      "546.377 ms",
      "364.251 ms",
      "376.751 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2490 * 1024 * 8) / (56 * 10^6) = 364.251 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3900 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1950.00 ms",
      "195.00 ms",
      "199.50 ms",
      "97.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3900 bits / (20 * 1000 bps) = 195.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.243.31.77 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.243.31.64",
      "10.243.31.96",
      "10.243.32.64",
      "10.243.31.32"
    ],
    "answer": 0,
    "explanation": "For host 10.243.31.77/27, the subnet mask bits reveal the network ID is 10.243.31.64 and broadcast address is 10.243.31.95."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5600 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "560.00 ms",
      "60.50 ms",
      "56.00 ms",
      "28.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5600 bits / (100 * 1000 bps) = 56.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3150 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "3.15 ms",
      "6.30 ms",
      "10.80 ms",
      "63.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3150 bits / (500 * 1000 bps) = 6.30 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "94.50 ms",
      "90.00 ms",
      "900.00 ms",
      "45.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1800 bits / (20 * 1000 bps) = 90.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4050 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "556.395 ms",
      "135.974 ms",
      "815.843 ms",
      "543.895 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4050 * 1024 * 8) / (61 * 10^6) = 543.895 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.10.69.24 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.10.69.16",
      "10.10.70.24",
      "10.10.69.31",
      "10.10.69.32"
    ],
    "answer": 2,
    "explanation": "For host 10.10.69.24/29, the subnet mask bits reveal the network ID is 10.10.69.24 and broadcast address is 10.10.69.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2150 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "2.15 ms",
      "43.00 ms",
      "8.80 ms",
      "4.30 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2150 bits / (500 * 1000 bps) = 4.30 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2310 KB over a point-to-point network link with transmission bandwidth rate of 55 Mbps. What is the theoretical transmission delay?",
    "options": [
      "344.064 ms",
      "86.016 ms",
      "516.096 ms",
      "356.564 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2310 * 1024 * 8) / (55 * 10^6) = 344.064 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.86.164.194 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.86.164.192",
      "10.86.164.184",
      "10.86.164.200",
      "10.86.165.192"
    ],
    "answer": 0,
    "explanation": "For host 10.86.164.194/29, the subnet mask bits reveal the network ID is 10.86.164.192 and broadcast address is 10.86.164.199."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 790 KB over a point-to-point network link with transmission bandwidth rate of 62 Mbps. What is the theoretical transmission delay?",
    "options": [
      "104.382 ms",
      "26.095 ms",
      "116.882 ms",
      "156.573 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (790 * 1024 * 8) / (62 * 10^6) = 104.382 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.242.119 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.243.0",
      "192.168.243.255",
      "192.168.242.0",
      "192.168.242.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.242.119/23, the subnet mask bits reveal the network ID is 192.168.242.0 and broadcast address is 192.168.243.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2470 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "979.076 ms",
      "665.217 ms",
      "163.179 ms",
      "652.717 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2470 * 1024 * 8) / (31 * 10^6) = 652.717 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2070 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "737.280 ms",
      "184.320 ms",
      "1105.920 ms",
      "749.780 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2070 * 1024 * 8) / (23 * 10^6) = 737.280 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.23.111.55 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.23.108.0",
      "10.23.111.0",
      "10.23.112.0",
      "10.23.111.0"
    ],
    "answer": 0,
    "explanation": "For host 10.23.111.55/22, the subnet mask bits reveal the network ID is 10.23.108.0 and broadcast address is 10.23.111.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4100 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.10 ms",
      "82.00 ms",
      "8.20 ms",
      "12.70 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4100 bits / (500 * 1000 bps) = 8.20 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2150 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "21.50 ms",
      "26.00 ms",
      "215.00 ms",
      "10.75 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2150 bits / (100 * 1000 bps) = 21.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4970 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "718.487 ms",
      "478.991 ms",
      "119.748 ms",
      "491.491 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4970 * 1024 * 8) / (85 * 10^6) = 478.991 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4010 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "84.665 ms",
      "338.659 ms",
      "351.159 ms",
      "507.988 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4010 * 1024 * 8) / (97 * 10^6) = 338.659 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1470 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "145.087 ms",
      "36.272 ms",
      "217.631 ms",
      "157.587 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1470 * 1024 * 8) / (83 * 10^6) = 145.087 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.84.20.168 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.84.21.168",
      "10.84.20.168",
      "10.84.20.164",
      "10.84.20.172"
    ],
    "answer": 1,
    "explanation": "For host 10.84.20.168/30, the subnet mask bits reveal the network ID is 10.84.20.168 and broadcast address is 10.84.20.171."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3330 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1105.920 ms",
      "749.780 ms",
      "184.320 ms",
      "737.280 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3330 * 1024 * 8) / (37 * 10^6) = 737.280 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.4.43.34 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.4.43.0",
      "10.4.43.128",
      "10.4.44.0"
    ],
    "answer": 1,
    "explanation": "For host 10.4.43.34/25, the subnet mask bits reveal the network ID is 10.4.43.0 and broadcast address is 10.4.43.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.161.27 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.161.128",
      "192.168.162.0",
      "192.168.161.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 192.168.161.27/25, the subnet mask bits reveal the network ID is 192.168.161.0 and broadcast address is 192.168.161.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2990 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "120.069 ms",
      "720.414 ms",
      "480.276 ms",
      "492.776 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2990 * 1024 * 8) / (51 * 10^6) = 480.276 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3850 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "38.50 ms",
      "770.00 ms",
      "81.50 ms",
      "77.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3850 bits / (50 * 1000 bps) = 77.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 270 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "174.619 ms",
      "116.413 ms",
      "29.103 ms",
      "128.913 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (270 * 1024 * 8) / (19 * 10^6) = 116.413 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.45.65 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.29.45.128",
      "172.29.46.64",
      "172.29.45.0",
      "172.29.45.127"
    ],
    "answer": 3,
    "explanation": "For host 172.29.45.65/26, the subnet mask bits reveal the network ID is 172.29.45.64 and broadcast address is 172.29.45.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3550 KB over a point-to-point network link with transmission bandwidth rate of 21 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1397.338 ms",
      "2077.257 ms",
      "1384.838 ms",
      "346.210 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3550 * 1024 * 8) / (21 * 10^6) = 1384.838 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.45.242 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.19.45.0",
      "172.19.45.128",
      "172.19.46.192",
      "172.19.45.192"
    ],
    "answer": 3,
    "explanation": "For host 172.19.45.242/26, the subnet mask bits reveal the network ID is 172.19.45.192 and broadcast address is 172.19.45.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4660 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1506.897 ms",
      "1017.098 ms",
      "1004.598 ms",
      "251.149 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4660 * 1024 * 8) / (38 * 10^6) = 1004.598 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1870 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "818.765 ms",
      "806.265 ms",
      "1209.398 ms",
      "201.566 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1870 * 1024 * 8) / (19 * 10^6) = 806.265 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2790 KB over a point-to-point network link with transmission bandwidth rate of 43 Mbps. What is the theoretical transmission delay?",
    "options": [
      "797.291 ms",
      "132.882 ms",
      "531.527 ms",
      "544.027 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2790 * 1024 * 8) / (43 * 10^6) = 531.527 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2830 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "152.522 ms",
      "622.588 ms",
      "610.088 ms",
      "915.133 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2830 * 1024 * 8) / (38 * 10^6) = 610.088 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.155.96 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "172.20.156.0",
      "172.20.155.0"
    ],
    "answer": 3,
    "explanation": "For host 172.20.155.96/24, the subnet mask bits reveal the network ID is 172.20.155.0 and broadcast address is 172.20.155.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1200 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "24.00 ms",
      "12.00 ms",
      "240.00 ms",
      "28.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1200 bits / (50 * 1000 bps) = 24.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 600 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1228.800 ms",
      "831.700 ms",
      "819.200 ms",
      "204.800 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (600 * 1024 * 8) / (6 * 10^6) = 819.200 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5050 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "252.50 ms",
      "509.50 ms",
      "5050.00 ms",
      "505.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5050 bits / (10 * 1000 bps) = 505.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.155.166.67 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.155.166.0",
      "10.155.166.127",
      "10.155.166.128",
      "10.155.167.64"
    ],
    "answer": 1,
    "explanation": "For host 10.155.166.67/26, the subnet mask bits reveal the network ID is 10.155.166.64 and broadcast address is 10.155.166.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 300 KB over a point-to-point network link with transmission bandwidth rate of 68 Mbps. What is the theoretical transmission delay?",
    "options": [
      "9.035 ms",
      "48.641 ms",
      "36.141 ms",
      "54.212 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (300 * 1024 * 8) / (68 * 10^6) = 36.141 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.44.212 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.45.0",
      "255.255.255.255",
      "255.255.255.255",
      "192.168.44.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.44.212/24, the subnet mask bits reveal the network ID is 192.168.44.0 and broadcast address is 192.168.44.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.207.60.140 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.207.61.0",
      "10.207.60.255",
      "10.207.60.0",
      "10.207.60.0"
    ],
    "answer": 1,
    "explanation": "For host 10.207.60.140/24, the subnet mask bits reveal the network ID is 10.207.60.0 and broadcast address is 10.207.60.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2890 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "500.174 ms",
      "83.362 ms",
      "345.949 ms",
      "333.449 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2890 * 1024 * 8) / (71 * 10^6) = 333.449 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 430 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "71.889 ms",
      "84.389 ms",
      "17.972 ms",
      "107.833 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (430 * 1024 * 8) / (49 * 10^6) = 71.889 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 400 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "138.531 ms",
      "31.508 ms",
      "189.046 ms",
      "126.031 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (400 * 1024 * 8) / (26 * 10^6) = 126.031 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.184.219.171 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.184.220.168",
      "10.184.219.160",
      "10.184.219.176",
      "10.184.219.175"
    ],
    "answer": 3,
    "explanation": "For host 10.184.219.171/29, the subnet mask bits reveal the network ID is 10.184.219.168 and broadcast address is 10.184.219.175."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2300 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "234.50 ms",
      "2300.00 ms",
      "115.00 ms",
      "230.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2300 bits / (10 * 1000 bps) = 230.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3900 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "43.50 ms",
      "390.00 ms",
      "19.50 ms",
      "39.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3900 bits / (100 * 1000 bps) = 39.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1220 KB over a point-to-point network link with transmission bandwidth rate of 32 Mbps. What is the theoretical transmission delay?",
    "options": [
      "78.080 ms",
      "312.320 ms",
      "468.480 ms",
      "324.820 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1220 * 1024 * 8) / (32 * 10^6) = 312.320 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.232.195 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.233.0",
      "192.168.232.0",
      "192.168.232.0",
      "192.168.232.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.232.195/24, the subnet mask bits reveal the network ID is 192.168.232.0 and broadcast address is 192.168.232.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1350 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "1.35 ms",
      "27.00 ms",
      "2.70 ms",
      "7.20 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1350 bits / (500 * 1000 bps) = 2.70 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2120 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "271.360 ms",
      "1628.160 ms",
      "1085.440 ms",
      "1097.940 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2120 * 1024 * 8) / (16 * 10^6) = 1085.440 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2200 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3604.480 ms",
      "5406.720 ms",
      "3616.980 ms",
      "901.120 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2200 * 1024 * 8) / (5 * 10^6) = 3604.480 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 990 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "238.532 ms",
      "357.798 ms",
      "251.032 ms",
      "59.633 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (990 * 1024 * 8) / (34 * 10^6) = 238.532 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.45.230.165 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.45.230.160",
      "10.45.230.164",
      "10.45.231.164",
      "10.45.230.168"
    ],
    "answer": 1,
    "explanation": "For host 10.45.230.165/30, the subnet mask bits reveal the network ID is 10.45.230.164 and broadcast address is 10.45.230.167."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1370 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "147.717 ms",
      "202.826 ms",
      "135.217 ms",
      "33.804 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1370 * 1024 * 8) / (83 * 10^6) = 135.217 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.175.227 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.176.224",
      "172.24.175.240",
      "172.24.175.208",
      "172.24.175.224"
    ],
    "answer": 3,
    "explanation": "For host 172.24.175.227/28, the subnet mask bits reveal the network ID is 172.24.175.224 and broadcast address is 172.24.175.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.106.135 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.106.96",
      "192.168.106.160",
      "192.168.106.128",
      "192.168.107.128"
    ],
    "answer": 2,
    "explanation": "For host 192.168.106.135/27, the subnet mask bits reveal the network ID is 192.168.106.128 and broadcast address is 192.168.106.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.219.155.99 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.219.155.128",
      "10.219.155.127",
      "10.219.155.0",
      "10.219.156.64"
    ],
    "answer": 1,
    "explanation": "For host 10.219.155.99/26, the subnet mask bits reveal the network ID is 10.219.155.64 and broadcast address is 10.219.155.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.112.135.20 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.112.136.0",
      "10.112.135.0",
      "10.112.135.255",
      "10.112.135.0"
    ],
    "answer": 2,
    "explanation": "For host 10.112.135.20/24, the subnet mask bits reveal the network ID is 10.112.135.0 and broadcast address is 10.112.135.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.148.43 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.31.149.0",
      "255.255.255.255",
      "255.255.255.255",
      "172.31.148.0"
    ],
    "answer": 3,
    "explanation": "For host 172.31.148.43/24, the subnet mask bits reveal the network ID is 172.31.148.0 and broadcast address is 172.31.148.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.71.23 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.71.24",
      "192.168.71.23",
      "192.168.72.20",
      "192.168.71.16"
    ],
    "answer": 1,
    "explanation": "For host 192.168.71.23/30, the subnet mask bits reveal the network ID is 192.168.71.20 and broadcast address is 192.168.71.23."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3900 KB over a point-to-point network link with transmission bandwidth rate of 20 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2396.160 ms",
      "1597.440 ms",
      "399.360 ms",
      "1609.940 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3900 * 1024 * 8) / (20 * 10^6) = 1597.440 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.211.98.1 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.211.98.0",
      "10.211.98.16",
      "10.211.99.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 10.211.98.1/28, the subnet mask bits reveal the network ID is 10.211.98.0 and broadcast address is 10.211.98.15."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.107.212 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.108.0",
      "172.24.107.255",
      "172.24.107.0",
      "172.24.107.0"
    ],
    "answer": 1,
    "explanation": "For host 172.24.107.212/24, the subnet mask bits reveal the network ID is 172.24.107.0 and broadcast address is 172.24.107.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.27.128.48 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.27.129.0",
      "10.27.128.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 10.27.128.48/24, the subnet mask bits reveal the network ID is 10.27.128.0 and broadcast address is 10.27.128.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.13.132.63 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.13.132.64",
      "10.13.133.32",
      "10.13.132.0",
      "10.13.132.32"
    ],
    "answer": 3,
    "explanation": "For host 10.13.132.63/27, the subnet mask bits reveal the network ID is 10.13.132.32 and broadcast address is 10.13.132.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 310 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "47.771 ms",
      "52.907 ms",
      "8.818 ms",
      "35.271 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (310 * 1024 * 8) / (72 * 10^6) = 35.271 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4760 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1707.888 ms",
      "2543.082 ms",
      "1695.388 ms",
      "423.847 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4760 * 1024 * 8) / (23 * 10^6) = 1695.388 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4300 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "8.60 ms",
      "4.30 ms",
      "86.00 ms",
      "13.10 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4300 bits / (500 * 1000 bps) = 8.60 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.191.35 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.191.0",
      "192.168.191.0",
      "192.168.188.0",
      "192.168.192.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.191.35/22, the subnet mask bits reveal the network ID is 192.168.188.0 and broadcast address is 192.168.191.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.126.95 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.124.0",
      "192.168.126.0",
      "192.168.127.0",
      "192.168.126.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.126.95/22, the subnet mask bits reveal the network ID is 192.168.124.0 and broadcast address is 192.168.127.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.21.215 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.21.223",
      "172.21.21.224",
      "172.21.22.208",
      "172.21.21.192"
    ],
    "answer": 0,
    "explanation": "For host 172.21.21.215/28, the subnet mask bits reveal the network ID is 172.21.21.208 and broadcast address is 172.21.21.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3570 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "555.293 ms",
      "370.195 ms",
      "382.695 ms",
      "92.549 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3570 * 1024 * 8) / (79 * 10^6) = 370.195 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.43.188.245 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.43.188.0",
      "255.255.255.255",
      "255.255.255.255",
      "10.43.189.0"
    ],
    "answer": 0,
    "explanation": "For host 10.43.188.245/23, the subnet mask bits reveal the network ID is 10.43.188.0 and broadcast address is 10.43.189.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3650 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "73.00 ms",
      "730.00 ms",
      "36.50 ms",
      "77.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3650 bits / (50 * 1000 bps) = 73.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "760.00 ms",
      "38.00 ms",
      "76.00 ms",
      "80.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3800 bits / (50 * 1000 bps) = 76.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3000 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "384.000 ms",
      "268.500 ms",
      "256.000 ms",
      "64.000 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3000 * 1024 * 8) / (96 * 10^6) = 256.000 ms."
  }
];
