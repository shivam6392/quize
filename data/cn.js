window.quizData = window.quizData || {};
window.quizData.cn = [
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order?",
    "options": [
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link"
    ],
    "answer": 1,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long?",
    "options": [
      "IPv6",
      "MAC Address",
      "IPv4",
      "Subnet Mask"
    ],
    "answer": 0,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port?",
    "options": [
      "22",
      "443",
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
      "8080",
      "80",
      "443",
      "25"
    ],
    "answer": 2,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses?",
    "options": [
      "DNS under normal conditions",
      "DHCP (standard definition)",
      "ARP (Address Resolution Protocol)",
      "NAT in typical implementations"
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
      "Switch",
      "Repeater",
      "Router",
      "Hub"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer?",
    "options": [
      "Physical Layer in most cases",
      "Transport Layer in practice",
      "Network Layer by design",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "TCP is characterized as?",
    "options": [
      "Connection-oriented and reliable",
      "Lightweight with no handshake",
      "Connectionless and unreliable",
      "Best-effort delivery in practice"
    ],
    "answer": 0,
    "explanation": "TCP uses a 3-way handshake and guarantees packet ordering."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as?",
    "options": [
      "Guaranteed delivery in most cases",
      "Heavyweight based on convention",
      "Connectionless and unreliable",
      "Connection-oriented in practice"
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
      "ARP under normal conditions",
      "FTP under normal conditions",
      "DNS (Domain Name System)",
      "DHCP (general case)"
    ],
    "answer": 2,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting?",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols as per specification",
      "Encrypting network packets in standard usage",
      "Increasing network bandwidth in standard usage"
    ],
    "answer": 0,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask?",
    "options": [
      "255.0.0.0",
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet?",
    "options": [
      "FTP (File Transfer Protocol)",
      "HTTP under normal conditions",
      "SMTP under normal conditions",
      "SNMP in standard usage"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to?",
    "options": [
      "Transfer files",
      "Retrieve emails",
      "Send emails",
      "Retrieve IP addresses"
    ],
    "answer": 2,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do?",
    "options": [
      "Encrypts network traffic (typical scenario)",
      "Translates private IP addresses to a public IP",
      "Filters spam emails under normal conditions",
      "Translates MAC to IP (primary approach)"
    ],
    "answer": 1,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through?",
    "options": [
      "Three-way handshake",
      "Sliding window mechanism",
      "Timeout retransmission only",
      "Congestion window sizing"
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
      "MAC addresses in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start",
      "Sliding window in typical implementations",
      "Checksums in typical implementations"
    ],
    "answer": 1,
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
      "Hamming code",
      "CRC only"
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
      "Transport Layer based on convention",
      "Presentation Layer (Layer 6)",
      "Session Layer (typical scenario)",
      "Application Layer (commonly used)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.138.84 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.136.0",
      "192.168.138.0",
      "192.168.138.0",
      "192.168.139.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.138.84/22, the subnet mask bits reveal the network ID is 192.168.136.0 and broadcast address is 192.168.139.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.131.219 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.23.128.0",
      "172.23.131.0",
      "172.23.131.0",
      "172.23.132.0"
    ],
    "answer": 0,
    "explanation": "For host 172.23.131.219/22, the subnet mask bits reveal the network ID is 172.23.128.0 and broadcast address is 172.23.131.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1300 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "154.495 ms",
      "35.499 ms",
      "141.995 ms",
      "212.992 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1300 * 1024 * 8) / (75 * 10^6) = 141.995 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1020 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "655.257 ms",
      "964.135 ms",
      "160.689 ms",
      "642.757 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1020 * 1024 * 8) / (13 * 10^6) = 642.757 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1600 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "36.50 ms",
      "320.00 ms",
      "32.00 ms",
      "16.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1600 bits / (50 * 1000 bps) = 32.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.95.55 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.95.0",
      "192.168.96.0",
      "255.255.255.255",
      "192.168.95.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.95.55/25, the subnet mask bits reveal the network ID is 192.168.95.0 and broadcast address is 192.168.95.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2260 KB over a point-to-point network link with transmission bandwidth rate of 22 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1262.313 ms",
      "210.385 ms",
      "841.542 ms",
      "854.042 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2260 * 1024 * 8) / (22 * 10^6) = 841.542 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "529.50 ms",
      "5250.00 ms",
      "262.50 ms",
      "525.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5250 bits / (10 * 1000 bps) = 525.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.87.111 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.88.0",
      "192.168.87.255",
      "192.168.87.0",
      "192.168.87.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.87.111/22, the subnet mask bits reveal the network ID is 192.168.84.0 and broadcast address is 192.168.87.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2950.00 ms",
      "147.50 ms",
      "299.50 ms",
      "295.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5900 bits / (20 * 1000 bps) = 295.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1550 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "7.60 ms",
      "3.10 ms",
      "31.00 ms",
      "1.55 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1550 bits / (500 * 1000 bps) = 3.10 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4720 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "514.659 ms",
      "753.238 ms",
      "125.540 ms",
      "502.159 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4720 * 1024 * 8) / (77 * 10^6) = 502.159 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1200 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "30.00 ms",
      "64.50 ms",
      "600.00 ms",
      "60.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1200 bits / (20 * 1000 bps) = 60.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "85.00 ms",
      "89.50 ms",
      "42.50 ms",
      "850.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4250 bits / (50 * 1000 bps) = 85.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 500 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "18.286 ms",
      "109.714 ms",
      "73.143 ms",
      "85.643 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (500 * 1024 * 8) / (56 * 10^6) = 73.143 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.195.162 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.195.0",
      "192.168.195.255",
      "192.168.195.0",
      "192.168.196.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.195.162/23, the subnet mask bits reveal the network ID is 192.168.194.0 and broadcast address is 192.168.195.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2450 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "755.848 ms",
      "1115.022 ms",
      "185.837 ms",
      "743.348 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2450 * 1024 * 8) / (27 * 10^6) = 743.348 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.105.98 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.105.0",
      "192.168.105.0",
      "192.168.105.255",
      "192.168.106.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.105.98/23, the subnet mask bits reveal the network ID is 192.168.104.0 and broadcast address is 192.168.105.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2580 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "720.524 ms",
      "120.087 ms",
      "492.849 ms",
      "480.349 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2580 * 1024 * 8) / (44 * 10^6) = 480.349 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.248.78 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.248.0",
      "172.17.249.0",
      "172.17.248.128",
      "172.17.248.127"
    ],
    "answer": 3,
    "explanation": "For host 172.17.248.78/25, the subnet mask bits reveal the network ID is 172.17.248.0 and broadcast address is 172.17.248.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "22.50 ms",
      "9.00 ms",
      "18.00 ms",
      "180.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1800 bits / (100 * 1000 bps) = 18.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2900 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "29.00 ms",
      "33.50 ms",
      "14.50 ms",
      "290.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2900 bits / (100 * 1000 bps) = 29.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3140 KB over a point-to-point network link with transmission bandwidth rate of 98 Mbps. What is the theoretical transmission delay?",
    "options": [
      "262.478 ms",
      "65.620 ms",
      "274.978 ms",
      "393.718 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3140 * 1024 * 8) / (98 * 10^6) = 262.478 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1850.00 ms",
      "92.50 ms",
      "189.50 ms",
      "185.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3700 bits / (20 * 1000 bps) = 185.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.195.129 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.27.195.120",
      "172.27.195.128",
      "172.27.196.128",
      "172.27.195.136"
    ],
    "answer": 1,
    "explanation": "For host 172.27.195.129/29, the subnet mask bits reveal the network ID is 172.27.195.128 and broadcast address is 172.27.195.135."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4670 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1195.520 ms",
      "4782.080 ms",
      "4794.580 ms",
      "7173.120 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4670 * 1024 * 8) / (8 * 10^6) = 4782.080 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.125.73.63 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.125.74.56",
      "10.125.73.48",
      "10.125.73.63",
      "10.125.73.64"
    ],
    "answer": 2,
    "explanation": "For host 10.125.73.63/29, the subnet mask bits reveal the network ID is 10.125.73.56 and broadcast address is 10.125.73.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4900 KB over a point-to-point network link with transmission bandwidth rate of 93 Mbps. What is the theoretical transmission delay?",
    "options": [
      "431.622 ms",
      "647.432 ms",
      "444.122 ms",
      "107.905 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4900 * 1024 * 8) / (93 * 10^6) = 431.622 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.245.148.26 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.245.148.0",
      "10.245.148.32",
      "10.245.149.16",
      "10.245.148.16"
    ],
    "answer": 3,
    "explanation": "For host 10.245.148.26/28, the subnet mask bits reveal the network ID is 10.245.148.16 and broadcast address is 10.245.148.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.32.61 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.33.32",
      "192.168.32.64",
      "192.168.32.63",
      "192.168.32.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.32.61/27, the subnet mask bits reveal the network ID is 192.168.32.32 and broadcast address is 192.168.32.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2800 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "446.836 ms",
      "74.473 ms",
      "297.891 ms",
      "310.391 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2800 * 1024 * 8) / (77 * 10^6) = 297.891 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5100 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "255.00 ms",
      "12.75 ms",
      "25.50 ms",
      "30.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5100 bits / (200 * 1000 bps) = 25.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.41.185.138 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.41.184.0",
      "10.41.185.0",
      "10.41.185.0",
      "10.41.186.0"
    ],
    "answer": 0,
    "explanation": "For host 10.41.185.138/23, the subnet mask bits reveal the network ID is 10.41.184.0 and broadcast address is 10.41.185.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3580 KB over a point-to-point network link with transmission bandwidth rate of 36 Mbps. What is the theoretical transmission delay?",
    "options": [
      "814.649 ms",
      "1221.973 ms",
      "827.149 ms",
      "203.662 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3580 * 1024 * 8) / (36 * 10^6) = 814.649 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1900 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "191.406 ms",
      "178.906 ms",
      "44.726 ms",
      "268.359 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1900 * 1024 * 8) / (87 * 10^6) = 178.906 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4510 KB over a point-to-point network link with transmission bandwidth rate of 69 Mbps. What is the theoretical transmission delay?",
    "options": [
      "535.448 ms",
      "133.862 ms",
      "547.948 ms",
      "803.172 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4510 * 1024 * 8) / (69 * 10^6) = 535.448 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "141.25 ms",
      "287.00 ms",
      "282.50 ms",
      "2825.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5650 bits / (20 * 1000 bps) = 282.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4170 KB over a point-to-point network link with transmission bandwidth rate of 69 Mbps. What is the theoretical transmission delay?",
    "options": [
      "495.082 ms",
      "123.770 ms",
      "507.582 ms",
      "742.623 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4170 * 1024 * 8) / (69 * 10^6) = 495.082 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2460 KB over a point-to-point network link with transmission bandwidth rate of 88 Mbps. What is the theoretical transmission delay?",
    "options": [
      "241.504 ms",
      "229.004 ms",
      "343.505 ms",
      "57.251 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2460 * 1024 * 8) / (88 * 10^6) = 229.004 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3990 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1065.850 ms",
      "723.067 ms",
      "710.567 ms",
      "177.642 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3990 * 1024 * 8) / (46 * 10^6) = 710.567 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 160 KB over a point-to-point network link with transmission bandwidth rate of 4 Mbps. What is the theoretical transmission delay?",
    "options": [
      "327.680 ms",
      "491.520 ms",
      "340.180 ms",
      "81.920 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (160 * 1024 * 8) / (4 * 10^6) = 327.680 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.219.218 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.219.223",
      "192.168.219.224",
      "192.168.220.192",
      "192.168.219.160"
    ],
    "answer": 0,
    "explanation": "For host 192.168.219.218/27, the subnet mask bits reveal the network ID is 192.168.219.192 and broadcast address is 192.168.219.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "1800.00 ms",
      "90.00 ms",
      "180.00 ms",
      "184.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1800 bits / (10 * 1000 bps) = 180.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "187.50 ms",
      "1875.00 ms",
      "192.00 ms",
      "93.75 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3750 bits / (20 * 1000 bps) = 187.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "265.00 ms",
      "31.00 ms",
      "26.50 ms",
      "13.25 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5300 bits / (200 * 1000 bps) = 26.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.121.162 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.121.192",
      "172.24.122.128",
      "172.24.121.191",
      "172.24.121.64"
    ],
    "answer": 2,
    "explanation": "For host 172.24.121.162/26, the subnet mask bits reveal the network ID is 172.24.121.128 and broadcast address is 172.24.121.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.127.12.84 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.127.12.0",
      "10.127.13.0",
      "10.127.12.0",
      "10.127.12.255"
    ],
    "answer": 3,
    "explanation": "For host 10.127.12.84/24, the subnet mask bits reveal the network ID is 10.127.12.0 and broadcast address is 10.127.12.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2930 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "90.919 ms",
      "376.175 ms",
      "363.675 ms",
      "545.513 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2930 * 1024 * 8) / (66 * 10^6) = 363.675 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1630 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "328.351 ms",
      "231.401 ms",
      "218.901 ms",
      "54.725 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1630 * 1024 * 8) / (61 * 10^6) = 218.901 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "305.00 ms",
      "30.50 ms",
      "35.00 ms",
      "15.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3050 bits / (100 * 1000 bps) = 30.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2690 KB over a point-to-point network link with transmission bandwidth rate of 20 Mbps. What is the theoretical transmission delay?",
    "options": [
      "275.456 ms",
      "1114.324 ms",
      "1652.736 ms",
      "1101.824 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2690 * 1024 * 8) / (20 * 10^6) = 1101.824 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.176.1.55 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.176.1.0",
      "10.176.1.63",
      "10.176.2.32",
      "10.176.1.64"
    ],
    "answer": 1,
    "explanation": "For host 10.176.1.55/27, the subnet mask bits reveal the network ID is 10.176.1.32 and broadcast address is 10.176.1.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.153.89.203 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.153.89.255",
      "10.153.89.0",
      "10.153.90.0",
      "10.153.89.0"
    ],
    "answer": 0,
    "explanation": "For host 10.153.89.203/24, the subnet mask bits reveal the network ID is 10.153.89.0 and broadcast address is 10.153.89.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "24.25 ms",
      "485.00 ms",
      "48.50 ms",
      "53.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4850 bits / (100 * 1000 bps) = 48.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "237.00 ms",
      "232.50 ms",
      "2325.00 ms",
      "116.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4650 bits / (20 * 1000 bps) = 232.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2840 KB over a point-to-point network link with transmission bandwidth rate of 35 Mbps. What is the theoretical transmission delay?",
    "options": [
      "664.722 ms",
      "166.181 ms",
      "997.083 ms",
      "677.222 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2840 * 1024 * 8) / (35 * 10^6) = 664.722 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2500 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "129.50 ms",
      "125.00 ms",
      "1250.00 ms",
      "62.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2500 bits / (20 * 1000 bps) = 125.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.25 ms",
      "15.00 ms",
      "10.50 ms",
      "105.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5250 bits / (500 * 1000 bps) = 10.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 630 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "81.313 ms",
      "103.219 ms",
      "68.813 ms",
      "17.203 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (630 * 1024 * 8) / (75 * 10^6) = 68.813 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2220 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "74.534 ms",
      "298.135 ms",
      "310.635 ms",
      "447.203 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2220 * 1024 * 8) / (61 * 10^6) = 298.135 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.186.19 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.186.64",
      "192.168.186.0",
      "192.168.186.63",
      "192.168.187.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.186.19/26, the subnet mask bits reveal the network ID is 192.168.186.0 and broadcast address is 192.168.186.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4480 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2459.177 ms",
      "2446.677 ms",
      "611.669 ms",
      "3670.016 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4480 * 1024 * 8) / (15 * 10^6) = 2446.677 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3090 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "87.893 ms",
      "527.360 ms",
      "351.573 ms",
      "364.073 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3090 * 1024 * 8) / (72 * 10^6) = 351.573 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.97.29 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.98.0",
      "172.26.97.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.26.97.29/24, the subnet mask bits reveal the network ID is 172.26.97.0 and broadcast address is 172.26.97.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.162.116 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.163.255",
      "192.168.162.0",
      "192.168.163.0",
      "192.168.162.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.162.116/22, the subnet mask bits reveal the network ID is 192.168.160.0 and broadcast address is 192.168.163.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3070 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "69.092 ms",
      "288.867 ms",
      "414.551 ms",
      "276.367 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3070 * 1024 * 8) / (91 * 10^6) = 276.367 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4050 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2025.00 ms",
      "207.00 ms",
      "101.25 ms",
      "202.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4050 bits / (20 * 1000 bps) = 202.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.198.157 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "192.168.199.0",
      "192.168.198.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.198.157/23, the subnet mask bits reveal the network ID is 192.168.198.0 and broadcast address is 192.168.199.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.237.101 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.238.96",
      "192.168.237.96",
      "192.168.237.64",
      "192.168.237.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.237.101/27, the subnet mask bits reveal the network ID is 192.168.237.96 and broadcast address is 192.168.237.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.199.96 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.199.92",
      "172.26.199.100",
      "172.26.200.96",
      "172.26.199.96"
    ],
    "answer": 3,
    "explanation": "For host 172.26.199.96/30, the subnet mask bits reveal the network ID is 172.26.199.96 and broadcast address is 172.26.199.99."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2450 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "122.50 ms",
      "16.75 ms",
      "6.13 ms",
      "12.25 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2450 bits / (200 * 1000 bps) = 12.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "12.00 ms",
      "16.50 ms",
      "6.00 ms",
      "120.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2400 bits / (200 * 1000 bps) = 12.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5400 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "274.50 ms",
      "270.00 ms",
      "2700.00 ms",
      "135.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5400 bits / (20 * 1000 bps) = 270.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.180.112.131 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.180.112.128",
      "10.180.112.64",
      "10.180.113.128",
      "10.180.112.192"
    ],
    "answer": 0,
    "explanation": "For host 10.180.112.131/26, the subnet mask bits reveal the network ID is 10.180.112.128 and broadcast address is 10.180.112.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3400 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "8.50 ms",
      "170.00 ms",
      "17.00 ms",
      "21.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3400 bits / (200 * 1000 bps) = 17.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 560 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "299.220 ms",
      "430.080 ms",
      "286.720 ms",
      "71.680 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (560 * 1024 * 8) / (16 * 10^6) = 286.720 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "11.30 ms",
      "113.00 ms",
      "5.65 ms",
      "15.80 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5650 bits / (500 * 1000 bps) = 11.30 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "6.10 ms",
      "3.05 ms",
      "10.60 ms",
      "61.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3050 bits / (500 * 1000 bps) = 6.10 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.234.132.124 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.234.132.96",
      "10.234.132.128",
      "10.234.133.112",
      "10.234.132.127"
    ],
    "answer": 3,
    "explanation": "For host 10.234.132.124/28, the subnet mask bits reveal the network ID is 10.234.132.112 and broadcast address is 10.234.132.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3280 KB over a point-to-point network link with transmission bandwidth rate of 35 Mbps. What is the theoretical transmission delay?",
    "options": [
      "780.207 ms",
      "191.927 ms",
      "1151.561 ms",
      "767.707 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3280 * 1024 * 8) / (35 * 10^6) = 767.707 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3150 KB over a point-to-point network link with transmission bandwidth rate of 33 Mbps. What is the theoretical transmission delay?",
    "options": [
      "794.464 ms",
      "1172.945 ms",
      "195.491 ms",
      "781.964 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3150 * 1024 * 8) / (33 * 10^6) = 781.964 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 340 KB over a point-to-point network link with transmission bandwidth rate of 78 Mbps. What is the theoretical transmission delay?",
    "options": [
      "53.563 ms",
      "48.209 ms",
      "35.709 ms",
      "8.927 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (340 * 1024 * 8) / (78 * 10^6) = 35.709 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.146.184 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.147.176",
      "172.19.146.160",
      "172.19.146.191",
      "172.19.146.192"
    ],
    "answer": 2,
    "explanation": "For host 172.19.146.184/28, the subnet mask bits reveal the network ID is 172.19.146.176 and broadcast address is 172.19.146.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5350 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "1070.00 ms",
      "111.50 ms",
      "53.50 ms",
      "107.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5350 bits / (50 * 1000 bps) = 107.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.122.2 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.122.7",
      "192.168.123.0",
      "192.168.122.0",
      "192.168.122.8"
    ],
    "answer": 0,
    "explanation": "For host 192.168.122.2/29, the subnet mask bits reveal the network ID is 192.168.122.0 and broadcast address is 192.168.122.7."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.100.248 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.100.0",
      "192.168.100.255",
      "192.168.101.224",
      "192.168.100.192"
    ],
    "answer": 1,
    "explanation": "For host 192.168.100.248/27, the subnet mask bits reveal the network ID is 192.168.100.224 and broadcast address is 192.168.100.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 750 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "166.100 ms",
      "230.400 ms",
      "153.600 ms",
      "38.400 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (750 * 1024 * 8) / (40 * 10^6) = 153.600 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "380.00 ms",
      "38.00 ms",
      "19.00 ms",
      "42.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3800 bits / (100 * 1000 bps) = 38.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2360 KB over a point-to-point network link with transmission bandwidth rate of 14 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1380.937 ms",
      "2071.406 ms",
      "345.234 ms",
      "1393.437 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2360 * 1024 * 8) / (14 * 10^6) = 1380.937 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1690 KB over a point-to-point network link with transmission bandwidth rate of 100 Mbps. What is the theoretical transmission delay?",
    "options": [
      "150.945 ms",
      "207.667 ms",
      "138.445 ms",
      "34.611 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1690 * 1024 * 8) / (100 * 10^6) = 138.445 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3270 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1085.994 ms",
      "736.496 ms",
      "723.996 ms",
      "180.999 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3270 * 1024 * 8) / (37 * 10^6) = 723.996 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2820 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "412.526 ms",
      "618.789 ms",
      "425.026 ms",
      "103.131 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2820 * 1024 * 8) / (56 * 10^6) = 412.526 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.217.162 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.217.255",
      "192.168.217.0",
      "192.168.217.0",
      "192.168.218.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.217.162/25, the subnet mask bits reveal the network ID is 192.168.217.128 and broadcast address is 192.168.217.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "33.75 ms",
      "292.50 ms",
      "14.63 ms",
      "29.25 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5850 bits / (200 * 1000 bps) = 29.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 990 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1737.874 ms",
      "1171.083 ms",
      "1158.583 ms",
      "289.646 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (990 * 1024 * 8) / (7 * 10^6) = 1158.583 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.175.15.66 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.175.15.71",
      "10.175.16.64",
      "10.175.15.72",
      "10.175.15.56"
    ],
    "answer": 0,
    "explanation": "For host 10.175.15.66/29, the subnet mask bits reveal the network ID is 10.175.15.64 and broadcast address is 10.175.15.71."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.85.183.92 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.85.184.0",
      "10.85.183.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 10.85.183.92/24, the subnet mask bits reveal the network ID is 10.85.183.0 and broadcast address is 10.85.183.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.35.23.36 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.35.24.0",
      "10.35.23.0",
      "10.35.23.0",
      "10.35.23.255"
    ],
    "answer": 3,
    "explanation": "For host 10.35.23.36/23, the subnet mask bits reveal the network ID is 10.35.22.0 and broadcast address is 10.35.23.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.150.210.11 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.150.210.0",
      "10.150.211.255",
      "10.150.210.0",
      "10.150.211.0"
    ],
    "answer": 1,
    "explanation": "For host 10.150.210.11/22, the subnet mask bits reveal the network ID is 10.150.208.0 and broadcast address is 10.150.211.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.251.201 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.251.223",
      "172.28.251.224",
      "172.28.251.160",
      "172.28.252.192"
    ],
    "answer": 0,
    "explanation": "For host 172.28.251.201/27, the subnet mask bits reveal the network ID is 172.28.251.192 and broadcast address is 172.28.251.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3100 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "155.00 ms",
      "3100.00 ms",
      "310.00 ms",
      "314.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3100 bits / (10 * 1000 bps) = 310.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.85.138.233 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.85.138.0",
      "10.85.138.0",
      "10.85.139.0",
      "10.85.136.0"
    ],
    "answer": 3,
    "explanation": "For host 10.85.138.233/22, the subnet mask bits reveal the network ID is 10.85.136.0 and broadcast address is 10.85.139.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1290 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "417.145 ms",
      "69.524 ms",
      "290.597 ms",
      "278.097 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1290 * 1024 * 8) / (38 * 10^6) = 278.097 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1150 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "23.00 ms",
      "230.00 ms",
      "11.50 ms",
      "27.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1150 bits / (50 * 1000 bps) = 23.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "23.50 ms",
      "47.00 ms",
      "470.00 ms",
      "51.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4700 bits / (100 * 1000 bps) = 47.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.173.232 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.174.192",
      "192.168.173.0",
      "192.168.173.128",
      "192.168.173.192"
    ],
    "answer": 3,
    "explanation": "For host 192.168.173.232/26, the subnet mask bits reveal the network ID is 192.168.173.192 and broadcast address is 192.168.173.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.219.98 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.219.92",
      "172.23.220.96",
      "172.23.219.99",
      "172.23.219.100"
    ],
    "answer": 2,
    "explanation": "For host 172.23.219.98/30, the subnet mask bits reveal the network ID is 172.23.219.96 and broadcast address is 172.23.219.99."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.62.187 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.62.192",
      "172.28.63.160",
      "172.28.62.191",
      "172.28.62.128"
    ],
    "answer": 2,
    "explanation": "For host 172.28.62.187/27, the subnet mask bits reveal the network ID is 172.28.62.160 and broadcast address is 172.28.62.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3450 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "8.63 ms",
      "17.25 ms",
      "172.50 ms",
      "21.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3450 bits / (200 * 1000 bps) = 17.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.173.188 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.173.0",
      "172.17.173.255",
      "172.17.173.0",
      "172.17.174.0"
    ],
    "answer": 1,
    "explanation": "For host 172.17.173.188/24, the subnet mask bits reveal the network ID is 172.17.173.0 and broadcast address is 172.17.173.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 270 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "130.108 ms",
      "195.162 ms",
      "32.527 ms",
      "142.608 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (270 * 1024 * 8) / (17 * 10^6) = 130.108 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "3750.00 ms",
      "375.00 ms",
      "187.50 ms",
      "379.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3750 bits / (10 * 1000 bps) = 375.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "13.00 ms",
      "8.50 ms",
      "85.00 ms",
      "4.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4250 bits / (500 * 1000 bps) = 8.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2730 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "338.851 ms",
      "225.901 ms",
      "56.475 ms",
      "238.401 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2730 * 1024 * 8) / (99 * 10^6) = 225.901 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3180 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "93.038 ms",
      "372.151 ms",
      "384.651 ms",
      "558.226 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3180 * 1024 * 8) / (70 * 10^6) = 372.151 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3830 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "122.560 ms",
      "490.240 ms",
      "502.740 ms",
      "735.360 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3830 * 1024 * 8) / (64 * 10^6) = 490.240 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3250 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "329.50 ms",
      "325.00 ms",
      "3250.00 ms",
      "162.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3250 bits / (10 * 1000 bps) = 325.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.19.116 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.20.0",
      "172.25.19.0",
      "172.25.18.0",
      "172.25.19.0"
    ],
    "answer": 2,
    "explanation": "For host 172.25.19.116/23, the subnet mask bits reveal the network ID is 172.25.18.0 and broadcast address is 172.25.19.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "30.50 ms",
      "610.00 ms",
      "65.50 ms",
      "61.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3050 bits / (50 * 1000 bps) = 61.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.130.70.184 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.130.70.192",
      "10.130.70.176",
      "10.130.71.184",
      "10.130.70.191"
    ],
    "answer": 3,
    "explanation": "For host 10.130.70.184/29, the subnet mask bits reveal the network ID is 10.130.70.184 and broadcast address is 10.130.70.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 370 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "64.951 ms",
      "55.801 ms",
      "43.301 ms",
      "10.825 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (370 * 1024 * 8) / (70 * 10^6) = 43.301 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 720 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "117.965 ms",
      "176.947 ms",
      "29.491 ms",
      "130.465 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (720 * 1024 * 8) / (50 * 10^6) = 117.965 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3310 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "616.262 ms",
      "924.393 ms",
      "154.065 ms",
      "628.762 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3310 * 1024 * 8) / (44 * 10^6) = 616.262 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3400 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "174.50 ms",
      "85.00 ms",
      "1700.00 ms",
      "170.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3400 bits / (20 * 1000 bps) = 170.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2680 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "359.911 ms",
      "89.978 ms",
      "372.411 ms",
      "539.866 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2680 * 1024 * 8) / (61 * 10^6) = 359.911 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1420 KB over a point-to-point network link with transmission bandwidth rate of 76 Mbps. What is the theoretical transmission delay?",
    "options": [
      "165.561 ms",
      "38.265 ms",
      "153.061 ms",
      "229.592 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1420 * 1024 * 8) / (76 * 10^6) = 153.061 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1500 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "34.50 ms",
      "15.00 ms",
      "300.00 ms",
      "30.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1500 bits / (50 * 1000 bps) = 30.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.17.216 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.18.208",
      "192.168.17.223",
      "192.168.17.192",
      "192.168.17.224"
    ],
    "answer": 1,
    "explanation": "For host 192.168.17.216/28, the subnet mask bits reveal the network ID is 192.168.17.208 and broadcast address is 192.168.17.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2480 KB over a point-to-point network link with transmission bandwidth rate of 65 Mbps. What is the theoretical transmission delay?",
    "options": [
      "312.556 ms",
      "325.056 ms",
      "468.834 ms",
      "78.139 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2480 * 1024 * 8) / (65 * 10^6) = 312.556 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1030 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "57.012 ms",
      "228.048 ms",
      "240.548 ms",
      "342.071 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1030 * 1024 * 8) / (37 * 10^6) = 228.048 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3310 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "300.963 ms",
      "288.463 ms",
      "432.694 ms",
      "72.116 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3310 * 1024 * 8) / (94 * 10^6) = 288.463 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.142.53 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.143.32",
      "192.168.142.64",
      "192.168.142.63",
      "192.168.142.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.142.53/27, the subnet mask bits reveal the network ID is 192.168.142.32 and broadcast address is 192.168.142.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.63.15.184 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "10.63.16.0",
      "10.63.15.0"
    ],
    "answer": 3,
    "explanation": "For host 10.63.15.184/24, the subnet mask bits reveal the network ID is 10.63.15.0 and broadcast address is 10.63.15.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "30.50 ms",
      "13.00 ms",
      "26.00 ms",
      "260.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5200 bits / (200 * 1000 bps) = 26.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4730 KB over a point-to-point network link with transmission bandwidth rate of 48 Mbps. What is the theoretical transmission delay?",
    "options": [
      "819.753 ms",
      "807.253 ms",
      "1210.880 ms",
      "201.813 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4730 * 1024 * 8) / (48 * 10^6) = 807.253 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.247.152 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.29.247.160",
      "172.29.247.144",
      "172.29.247.159",
      "172.29.248.152"
    ],
    "answer": 2,
    "explanation": "For host 172.29.247.152/29, the subnet mask bits reveal the network ID is 172.29.247.152 and broadcast address is 172.29.247.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 170 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "32.395 ms",
      "29.842 ms",
      "19.895 ms",
      "4.974 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (170 * 1024 * 8) / (70 * 10^6) = 19.895 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.111.4.156 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.111.4.152",
      "10.111.5.156",
      "10.111.4.160",
      "10.111.4.159"
    ],
    "answer": 3,
    "explanation": "For host 10.111.4.156/30, the subnet mask bits reveal the network ID is 10.111.4.156 and broadcast address is 10.111.4.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.199.49.5 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.199.49.8",
      "10.199.49.0",
      "10.199.50.4",
      "10.199.49.7"
    ],
    "answer": 3,
    "explanation": "For host 10.199.49.5/30, the subnet mask bits reveal the network ID is 10.199.49.4 and broadcast address is 10.199.49.7."
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
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4350 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "21.75 ms",
      "435.00 ms",
      "43.50 ms",
      "48.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4350 bits / (100 * 1000 bps) = 43.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.156.60.47 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.156.61.32",
      "10.156.60.48",
      "10.156.60.47",
      "10.156.60.16"
    ],
    "answer": 2,
    "explanation": "For host 10.156.60.47/28, the subnet mask bits reveal the network ID is 10.156.60.32 and broadcast address is 10.156.60.47."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.100.72 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.100.127",
      "192.168.100.0",
      "192.168.101.0",
      "192.168.100.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.100.72/25, the subnet mask bits reveal the network ID is 192.168.100.0 and broadcast address is 192.168.100.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.52.232 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.52.0",
      "255.255.255.255",
      "192.168.53.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 192.168.52.232/23, the subnet mask bits reveal the network ID is 192.168.52.0 and broadcast address is 192.168.53.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2000 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.00 ms",
      "8.50 ms",
      "40.00 ms",
      "2.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2000 bits / (500 * 1000 bps) = 4.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.13.227.144 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.13.228.128",
      "10.13.227.0",
      "10.13.227.128",
      "10.13.227.0"
    ],
    "answer": 2,
    "explanation": "For host 10.13.227.144/25, the subnet mask bits reveal the network ID is 10.13.227.128 and broadcast address is 10.13.227.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.168.135 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.30.168.0",
      "172.30.169.0",
      "172.30.171.255",
      "172.30.168.0"
    ],
    "answer": 2,
    "explanation": "For host 172.30.168.135/22, the subnet mask bits reveal the network ID is 172.30.168.0 and broadcast address is 172.30.171.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.249.111 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.248.0",
      "192.168.250.0",
      "192.168.249.0",
      "192.168.249.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.249.111/23, the subnet mask bits reveal the network ID is 192.168.248.0 and broadcast address is 192.168.249.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2670 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "95.933 ms",
      "383.731 ms",
      "575.596 ms",
      "396.231 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2670 * 1024 * 8) / (57 * 10^6) = 383.731 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "570.00 ms",
      "28.50 ms",
      "61.50 ms",
      "57.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5700 bits / (100 * 1000 bps) = 57.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.104.163 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.22.105.0",
      "172.22.104.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 172.22.104.163/22, the subnet mask bits reveal the network ID is 172.22.104.0 and broadcast address is 172.22.107.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.247.101 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.23.247.80",
      "172.23.247.112",
      "172.23.247.96",
      "172.23.248.96"
    ],
    "answer": 2,
    "explanation": "For host 172.23.247.101/28, the subnet mask bits reveal the network ID is 172.23.247.96 and broadcast address is 172.23.247.111."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.134.236.220 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.134.236.0",
      "10.134.237.128",
      "10.134.236.128",
      "10.134.236.0"
    ],
    "answer": 2,
    "explanation": "For host 10.134.236.220/25, the subnet mask bits reveal the network ID is 10.134.236.128 and broadcast address is 10.134.236.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3950 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "3950.00 ms",
      "197.50 ms",
      "399.50 ms",
      "395.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3950 bits / (10 * 1000 bps) = 395.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 670 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "59.659 ms",
      "238.637 ms",
      "357.955 ms",
      "251.137 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (670 * 1024 * 8) / (23 * 10^6) = 238.637 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.16.68 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.16.32",
      "172.22.16.95",
      "172.22.17.64",
      "172.22.16.96"
    ],
    "answer": 1,
    "explanation": "For host 172.22.16.68/27, the subnet mask bits reveal the network ID is 172.22.16.64 and broadcast address is 172.22.16.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1510 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "65.797 ms",
      "394.785 ms",
      "263.190 ms",
      "275.690 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1510 * 1024 * 8) / (47 * 10^6) = 263.190 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3010 KB over a point-to-point network link with transmission bandwidth rate of 74 Mbps. What is the theoretical transmission delay?",
    "options": [
      "499.823 ms",
      "345.715 ms",
      "83.304 ms",
      "333.215 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3010 * 1024 * 8) / (74 * 10^6) = 333.215 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1250 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "17.00 ms",
      "6.25 ms",
      "125.00 ms",
      "12.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1250 bits / (100 * 1000 bps) = 12.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 140 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4.860 ms",
      "31.939 ms",
      "29.158 ms",
      "19.439 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (140 * 1024 * 8) / (59 * 10^6) = 19.439 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.168.146 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.169.128",
      "172.21.168.192",
      "172.21.168.64",
      "172.21.168.191"
    ],
    "answer": 3,
    "explanation": "For host 172.21.168.146/26, the subnet mask bits reveal the network ID is 172.21.168.128 and broadcast address is 172.21.168.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4400 KB over a point-to-point network link with transmission bandwidth rate of 32 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1126.400 ms",
      "1689.600 ms",
      "281.600 ms",
      "1138.900 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4400 * 1024 * 8) / (32 * 10^6) = 1126.400 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4300 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "95.722 ms",
      "382.887 ms",
      "395.387 ms",
      "574.330 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4300 * 1024 * 8) / (92 * 10^6) = 382.887 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2750 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "137.50 ms",
      "279.50 ms",
      "2750.00 ms",
      "275.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2750 bits / (10 * 1000 bps) = 275.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3190 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "933.303 ms",
      "5599.817 ms",
      "3733.211 ms",
      "3745.711 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3190 * 1024 * 8) / (7 * 10^6) = 3733.211 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3210 KB over a point-to-point network link with transmission bandwidth rate of 33 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1195.287 ms",
      "809.358 ms",
      "199.215 ms",
      "796.858 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3210 * 1024 * 8) / (33 * 10^6) = 796.858 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1600 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "32.00 ms",
      "3.20 ms",
      "1.60 ms",
      "7.70 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1600 bits / (500 * 1000 bps) = 3.20 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "63.50 ms",
      "59.00 ms",
      "590.00 ms",
      "29.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5900 bits / (100 * 1000 bps) = 59.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1400 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "140.00 ms",
      "7.00 ms",
      "14.00 ms",
      "18.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1400 bits / (100 * 1000 bps) = 14.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.96.19 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.96.31",
      "172.16.96.32",
      "172.16.96.0",
      "172.16.97.16"
    ],
    "answer": 0,
    "explanation": "For host 172.16.96.19/28, the subnet mask bits reveal the network ID is 172.16.96.16 and broadcast address is 172.16.96.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2780 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "355.840 ms",
      "59.307 ms",
      "237.227 ms",
      "249.727 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2780 * 1024 * 8) / (96 * 10^6) = 237.227 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.207.103 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.208.96",
      "192.168.207.104",
      "192.168.207.88",
      "192.168.207.103"
    ],
    "answer": 3,
    "explanation": "For host 192.168.207.103/29, the subnet mask bits reveal the network ID is 192.168.207.96 and broadcast address is 192.168.207.103."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3930 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "342.495 ms",
      "354.995 ms",
      "513.743 ms",
      "85.624 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3930 * 1024 * 8) / (94 * 10^6) = 342.495 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 530 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "114.257 ms",
      "126.757 ms",
      "28.564 ms",
      "171.385 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (530 * 1024 * 8) / (38 * 10^6) = 114.257 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.42.199 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.43.0",
      "172.19.42.0",
      "172.19.43.255",
      "172.19.42.0"
    ],
    "answer": 2,
    "explanation": "For host 172.19.42.199/23, the subnet mask bits reveal the network ID is 172.19.42.0 and broadcast address is 172.19.43.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.24.175 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.24.168",
      "172.30.24.172",
      "172.30.25.172",
      "172.30.24.176"
    ],
    "answer": 1,
    "explanation": "For host 172.30.24.175/30, the subnet mask bits reveal the network ID is 172.30.24.172 and broadcast address is 172.30.24.175."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4350 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "222.00 ms",
      "217.50 ms",
      "2175.00 ms",
      "108.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4350 bits / (20 * 1000 bps) = 217.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2550 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "510.00 ms",
      "55.50 ms",
      "25.50 ms",
      "51.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2550 bits / (50 * 1000 bps) = 51.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.126.138 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.126.160",
      "192.168.126.96",
      "192.168.127.128",
      "192.168.126.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.126.138/27, the subnet mask bits reveal the network ID is 192.168.126.128 and broadcast address is 192.168.126.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.180.226 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.181.224",
      "192.168.180.224",
      "192.168.180.240",
      "192.168.180.208"
    ],
    "answer": 1,
    "explanation": "For host 192.168.180.226/28, the subnet mask bits reveal the network ID is 192.168.180.224 and broadcast address is 192.168.180.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.158.129.17 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.158.129.31",
      "10.158.129.0",
      "10.158.130.16",
      "10.158.129.32"
    ],
    "answer": 0,
    "explanation": "For host 10.158.129.17/28, the subnet mask bits reveal the network ID is 10.158.129.16 and broadcast address is 10.158.129.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4740 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "670.637 ms",
      "164.534 ms",
      "987.205 ms",
      "658.137 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4740 * 1024 * 8) / (59 * 10^6) = 658.137 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4600 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "550.831 ms",
      "538.331 ms",
      "807.497 ms",
      "134.583 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4600 * 1024 * 8) / (70 * 10^6) = 538.331 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3280 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "100.260 ms",
      "401.041 ms",
      "413.541 ms",
      "601.562 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3280 * 1024 * 8) / (67 * 10^6) = 401.041 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3500 KB over a point-to-point network link with transmission bandwidth rate of 65 Mbps. What is the theoretical transmission delay?",
    "options": [
      "661.662 ms",
      "110.277 ms",
      "441.108 ms",
      "453.608 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3500 * 1024 * 8) / (65 * 10^6) = 441.108 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.40.152 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.40.0",
      "192.168.40.0",
      "192.168.41.128",
      "192.168.40.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.40.152/25, the subnet mask bits reveal the network ID is 192.168.40.128 and broadcast address is 192.168.40.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.166.140 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.167.140",
      "192.168.166.136",
      "192.168.166.143",
      "192.168.166.144"
    ],
    "answer": 2,
    "explanation": "For host 192.168.166.140/30, the subnet mask bits reveal the network ID is 192.168.166.140 and broadcast address is 192.168.166.143."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3200 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "32.00 ms",
      "320.00 ms",
      "36.50 ms",
      "16.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3200 bits / (100 * 1000 bps) = 32.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3560 KB over a point-to-point network link with transmission bandwidth rate of 4 Mbps. What is the theoretical transmission delay?",
    "options": [
      "7303.380 ms",
      "10936.320 ms",
      "1822.720 ms",
      "7290.880 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3560 * 1024 * 8) / (4 * 10^6) = 7290.880 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2150 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "219.50 ms",
      "215.00 ms",
      "107.50 ms",
      "2150.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2150 bits / (10 * 1000 bps) = 215.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3320 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "444.205 ms",
      "107.926 ms",
      "647.558 ms",
      "431.705 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3320 * 1024 * 8) / (63 * 10^6) = 431.705 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1000 KB over a point-to-point network link with transmission bandwidth rate of 54 Mbps. What is the theoretical transmission delay?",
    "options": [
      "151.704 ms",
      "37.926 ms",
      "227.556 ms",
      "164.204 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1000 * 1024 * 8) / (54 * 10^6) = 151.704 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1550 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "20.00 ms",
      "155.00 ms",
      "15.50 ms",
      "7.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1550 bits / (100 * 1000 bps) = 15.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.17.46.71 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.17.46.0",
      "10.17.46.64",
      "10.17.47.64",
      "10.17.46.128"
    ],
    "answer": 1,
    "explanation": "For host 10.17.46.71/26, the subnet mask bits reveal the network ID is 10.17.46.64 and broadcast address is 10.17.46.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5800 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "116.00 ms",
      "5.80 ms",
      "16.10 ms",
      "11.60 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5800 bits / (500 * 1000 bps) = 11.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4000 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "780.190 ms",
      "792.690 ms",
      "195.048 ms",
      "1170.286 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4000 * 1024 * 8) / (42 * 10^6) = 780.190 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.249.45 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.249.0",
      "255.255.255.255",
      "192.168.250.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 192.168.249.45/24, the subnet mask bits reveal the network ID is 192.168.249.0 and broadcast address is 192.168.249.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2850.00 ms",
      "142.50 ms",
      "285.00 ms",
      "289.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5700 bits / (20 * 1000 bps) = 285.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3810 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3901.440 ms",
      "650.240 ms",
      "2600.960 ms",
      "2613.460 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3810 * 1024 * 8) / (12 * 10^6) = 2600.960 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 690 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "100.937 ms",
      "79.791 ms",
      "16.823 ms",
      "67.291 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (690 * 1024 * 8) / (84 * 10^6) = 67.291 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2820 KB over a point-to-point network link with transmission bandwidth rate of 21 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1650.103 ms",
      "275.017 ms",
      "1100.069 ms",
      "1112.569 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2820 * 1024 * 8) / (21 * 10^6) = 1100.069 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3500 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "17.50 ms",
      "175.00 ms",
      "8.75 ms",
      "22.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3500 bits / (200 * 1000 bps) = 17.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1000 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "22.505 ms",
      "135.033 ms",
      "90.022 ms",
      "102.522 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1000 * 1024 * 8) / (91 * 10^6) = 90.022 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.241.246 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.242.192",
      "172.25.241.192",
      "172.25.241.128",
      "172.25.241.0"
    ],
    "answer": 1,
    "explanation": "For host 172.25.241.246/26, the subnet mask bits reveal the network ID is 172.25.241.192 and broadcast address is 172.25.241.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 680 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "86.143 ms",
      "14.357 ms",
      "57.428 ms",
      "69.928 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (680 * 1024 * 8) / (97 * 10^6) = 57.428 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1630 KB over a point-to-point network link with transmission bandwidth rate of 18 Mbps. What is the theoretical transmission delay?",
    "options": [
      "185.458 ms",
      "754.331 ms",
      "741.831 ms",
      "1112.747 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1630 * 1024 * 8) / (18 * 10^6) = 741.831 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.150.213 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.27.150.0",
      "255.255.255.255",
      "255.255.255.255",
      "172.27.151.0"
    ],
    "answer": 0,
    "explanation": "For host 172.27.150.213/24, the subnet mask bits reveal the network ID is 172.27.150.0 and broadcast address is 172.27.150.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4050 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2927.435 ms",
      "487.906 ms",
      "1951.624 ms",
      "1964.124 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4050 * 1024 * 8) / (17 * 10^6) = 1951.624 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4300 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "43.00 ms",
      "86.00 ms",
      "90.50 ms",
      "860.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4300 bits / (50 * 1000 bps) = 86.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "132.50 ms",
      "2650.00 ms",
      "265.00 ms",
      "269.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5300 bits / (20 * 1000 bps) = 265.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2480 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "72.558 ms",
      "290.231 ms",
      "435.346 ms",
      "302.731 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2480 * 1024 * 8) / (70 * 10^6) = 290.231 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.145.239.150 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.145.240.0",
      "10.145.238.0",
      "10.145.239.0",
      "10.145.239.0"
    ],
    "answer": 1,
    "explanation": "For host 10.145.239.150/23, the subnet mask bits reveal the network ID is 10.145.238.0 and broadcast address is 10.145.239.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4890 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "172.668 ms",
      "690.670 ms",
      "703.170 ms",
      "1036.006 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4890 * 1024 * 8) / (58 * 10^6) = 690.670 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1950 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "97.50 ms",
      "1950.00 ms",
      "199.50 ms",
      "195.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1950 bits / (10 * 1000 bps) = 195.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4970 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2142.855 ms",
      "535.714 ms",
      "3214.282 ms",
      "2155.355 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4970 * 1024 * 8) / (19 * 10^6) = 2142.855 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.29.166 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.30.0",
      "172.26.29.0",
      "172.26.31.255",
      "172.26.29.0"
    ],
    "answer": 2,
    "explanation": "For host 172.26.29.166/22, the subnet mask bits reveal the network ID is 172.26.28.0 and broadcast address is 172.26.31.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.107.75 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.27.107.80",
      "172.27.107.64",
      "172.27.107.48",
      "172.27.108.64"
    ],
    "answer": 1,
    "explanation": "For host 172.27.107.75/28, the subnet mask bits reveal the network ID is 172.27.107.64 and broadcast address is 172.27.107.79."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "150.00 ms",
      "304.50 ms",
      "300.00 ms",
      "3000.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3000 bits / (10 * 1000 bps) = 300.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "24.00 ms",
      "12.00 ms",
      "240.00 ms",
      "28.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2400 bits / (100 * 1000 bps) = 24.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2880 KB over a point-to-point network link with transmission bandwidth rate of 65 Mbps. What is the theoretical transmission delay?",
    "options": [
      "544.453 ms",
      "90.742 ms",
      "375.469 ms",
      "362.969 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2880 * 1024 * 8) / (65 * 10^6) = 362.969 ms."
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4130 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "134.258 ms",
      "805.547 ms",
      "537.031 ms",
      "549.531 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4130 * 1024 * 8) / (63 * 10^6) = 537.031 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1540 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "213.825 ms",
      "226.325 ms",
      "53.456 ms",
      "320.738 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1540 * 1024 * 8) / (59 * 10^6) = 213.825 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1600 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "80.00 ms",
      "84.50 ms",
      "800.00 ms",
      "40.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1600 bits / (20 * 1000 bps) = 80.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.68.27 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.27.71.255",
      "172.27.69.0",
      "172.27.68.0",
      "172.27.68.0"
    ],
    "answer": 0,
    "explanation": "For host 172.27.68.27/22, the subnet mask bits reveal the network ID is 172.27.68.0 and broadcast address is 172.27.71.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.96.151 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.96.159",
      "192.168.96.96",
      "192.168.96.160",
      "192.168.97.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.96.151/27, the subnet mask bits reveal the network ID is 192.168.96.128 and broadcast address is 192.168.96.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1990 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "110.149 ms",
      "440.597 ms",
      "660.895 ms",
      "453.097 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1990 * 1024 * 8) / (37 * 10^6) = 440.597 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "8.25 ms",
      "21.00 ms",
      "16.50 ms",
      "165.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1650 bits / (100 * 1000 bps) = 16.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.163.99.34 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.163.99.64",
      "10.163.100.32",
      "10.163.99.0",
      "10.163.99.32"
    ],
    "answer": 3,
    "explanation": "For host 10.163.99.34/27, the subnet mask bits reveal the network ID is 10.163.99.32 and broadcast address is 10.163.99.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4690 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "678.008 ms",
      "452.006 ms",
      "113.001 ms",
      "464.506 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4690 * 1024 * 8) / (85 * 10^6) = 452.006 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 770 KB over a point-to-point network link with transmission bandwidth rate of 36 Mbps. What is the theoretical transmission delay?",
    "options": [
      "175.218 ms",
      "262.827 ms",
      "187.718 ms",
      "43.804 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (770 * 1024 * 8) / (36 * 10^6) = 175.218 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4900 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "14.30 ms",
      "4.90 ms",
      "9.80 ms",
      "98.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4900 bits / (500 * 1000 bps) = 9.80 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "525.00 ms",
      "52.50 ms",
      "26.25 ms",
      "57.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5250 bits / (100 * 1000 bps) = 52.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3510 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "179.712 ms",
      "718.848 ms",
      "1078.272 ms",
      "731.348 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3510 * 1024 * 8) / (40 * 10^6) = 718.848 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1700 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "229.556 ms",
      "165.537 ms",
      "38.259 ms",
      "153.037 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1700 * 1024 * 8) / (91 * 10^6) = 153.037 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1150 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "1.15 ms",
      "2.30 ms",
      "6.80 ms",
      "23.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1150 bits / (500 * 1000 bps) = 2.30 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.173.150.55 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.173.150.0",
      "10.173.150.0",
      "10.173.150.255",
      "10.173.151.0"
    ],
    "answer": 2,
    "explanation": "For host 10.173.150.55/24, the subnet mask bits reveal the network ID is 10.173.150.0 and broadcast address is 10.173.150.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3900 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "24.00 ms",
      "195.00 ms",
      "19.50 ms",
      "9.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3900 bits / (200 * 1000 bps) = 19.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1400 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "140.00 ms",
      "1400.00 ms",
      "144.50 ms",
      "70.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1400 bits / (10 * 1000 bps) = 140.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4190 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "252.386 ms",
      "1022.044 ms",
      "1514.315 ms",
      "1009.544 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4190 * 1024 * 8) / (34 * 10^6) = 1009.544 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1100 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "110.00 ms",
      "1100.00 ms",
      "55.00 ms",
      "114.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1100 bits / (10 * 1000 bps) = 110.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4600 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "400.987 ms",
      "97.122 ms",
      "388.487 ms",
      "582.730 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4600 * 1024 * 8) / (97 * 10^6) = 388.487 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3690 KB over a point-to-point network link with transmission bandwidth rate of 45 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1007.616 ms",
      "167.936 ms",
      "671.744 ms",
      "684.244 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3690 * 1024 * 8) / (45 * 10^6) = 671.744 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3740 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "421.008 ms",
      "408.508 ms",
      "612.762 ms",
      "102.127 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3740 * 1024 * 8) / (75 * 10^6) = 408.508 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5750 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "62.00 ms",
      "57.50 ms",
      "28.75 ms",
      "575.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5750 bits / (100 * 1000 bps) = 57.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1550 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "77.50 ms",
      "82.00 ms",
      "775.00 ms",
      "38.75 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1550 bits / (20 * 1000 bps) = 77.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 840 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "120.022 ms",
      "20.004 ms",
      "80.015 ms",
      "92.515 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (840 * 1024 * 8) / (86 * 10^6) = 80.015 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4820 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "11845.632 ms",
      "7897.088 ms",
      "7909.588 ms",
      "1974.272 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4820 * 1024 * 8) / (5 * 10^6) = 7897.088 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.204.105 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.204.64",
      "172.19.205.96",
      "172.19.204.128",
      "172.19.204.127"
    ],
    "answer": 3,
    "explanation": "For host 172.19.204.105/27, the subnet mask bits reveal the network ID is 172.19.204.96 and broadcast address is 172.19.204.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1290 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "71.403 ms",
      "298.113 ms",
      "428.419 ms",
      "285.613 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1290 * 1024 * 8) / (37 * 10^6) = 285.613 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2630 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "105.613 ms",
      "633.675 ms",
      "434.950 ms",
      "422.450 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2630 * 1024 * 8) / (51 * 10^6) = 422.450 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3260 KB over a point-to-point network link with transmission bandwidth rate of 28 Mbps. What is the theoretical transmission delay?",
    "options": [
      "966.283 ms",
      "238.446 ms",
      "1430.674 ms",
      "953.783 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3260 * 1024 * 8) / (28 * 10^6) = 953.783 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 330 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "155.963 ms",
      "116.475 ms",
      "103.975 ms",
      "25.994 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (330 * 1024 * 8) / (26 * 10^6) = 103.975 ms."
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
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.67.209.29 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.67.209.16",
      "10.67.209.32",
      "10.67.209.24",
      "10.67.210.24"
    ],
    "answer": 2,
    "explanation": "For host 10.67.209.29/29, the subnet mask bits reveal the network ID is 10.67.209.24 and broadcast address is 10.67.209.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 260 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "69.454 ms",
      "11.576 ms",
      "58.803 ms",
      "46.303 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (260 * 1024 * 8) / (46 * 10^6) = 46.303 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.125.60.114 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.125.60.128",
      "10.125.60.64",
      "10.125.60.96",
      "10.125.61.96"
    ],
    "answer": 2,
    "explanation": "For host 10.125.60.114/27, the subnet mask bits reveal the network ID is 10.125.60.96 and broadcast address is 10.125.60.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4740 KB over a point-to-point network link with transmission bandwidth rate of 11 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5295.011 ms",
      "3530.007 ms",
      "882.502 ms",
      "3542.507 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4740 * 1024 * 8) / (11 * 10^6) = 3530.007 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4090 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1288.665 ms",
      "1301.165 ms",
      "322.166 ms",
      "1932.997 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4090 * 1024 * 8) / (26 * 10^6) = 1288.665 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3020 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "843.404 ms",
      "574.769 ms",
      "140.567 ms",
      "562.269 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3020 * 1024 * 8) / (44 * 10^6) = 562.269 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.229.159.138 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.229.159.96",
      "10.229.160.128",
      "10.229.159.160",
      "10.229.159.128"
    ],
    "answer": 3,
    "explanation": "For host 10.229.159.138/27, the subnet mask bits reveal the network ID is 10.229.159.128 and broadcast address is 10.229.159.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 920 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1884.160 ms",
      "1256.107 ms",
      "314.027 ms",
      "1268.607 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (920 * 1024 * 8) / (6 * 10^6) = 1256.107 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.157.81 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.157.76",
      "172.16.157.83",
      "172.16.158.80",
      "172.16.157.84"
    ],
    "answer": 1,
    "explanation": "For host 172.16.157.81/30, the subnet mask bits reveal the network ID is 172.16.157.80 and broadcast address is 172.16.157.83."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.144.179 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.144.183",
      "192.168.144.184",
      "192.168.144.168",
      "192.168.145.176"
    ],
    "answer": 0,
    "explanation": "For host 192.168.144.179/29, the subnet mask bits reveal the network ID is 192.168.144.176 and broadcast address is 192.168.144.183."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.237.92 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.16.238.0",
      "172.16.237.0",
      "172.16.237.128",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.16.237.92/25, the subnet mask bits reveal the network ID is 172.16.237.0 and broadcast address is 172.16.237.127."
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
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.127.146.209 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.127.147.0",
      "255.255.255.255",
      "10.127.146.0"
    ],
    "answer": 3,
    "explanation": "For host 10.127.146.209/24, the subnet mask bits reveal the network ID is 10.127.146.0 and broadcast address is 10.127.146.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1960 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "57.344 ms",
      "229.376 ms",
      "241.876 ms",
      "344.064 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1960 * 1024 * 8) / (70 * 10^6) = 229.376 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3690 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "451.171 ms",
      "676.757 ms",
      "463.671 ms",
      "112.793 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3690 * 1024 * 8) / (67 * 10^6) = 451.171 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2730 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "465.920 ms",
      "1876.180 ms",
      "2795.520 ms",
      "1863.680 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2730 * 1024 * 8) / (12 * 10^6) = 1863.680 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1930 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "465.016 ms",
      "310.011 ms",
      "322.511 ms",
      "77.503 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1930 * 1024 * 8) / (51 * 10^6) = 310.011 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.245.27.16 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.245.28.16",
      "10.245.27.8",
      "10.245.27.23",
      "10.245.27.24"
    ],
    "answer": 2,
    "explanation": "For host 10.245.27.16/29, the subnet mask bits reveal the network ID is 10.245.27.16 and broadcast address is 10.245.27.23."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1510 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "740.142 ms",
      "181.911 ms",
      "1091.464 ms",
      "727.642 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1510 * 1024 * 8) / (17 * 10^6) = 727.642 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1180 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "284.311 ms",
      "296.811 ms",
      "71.078 ms",
      "426.466 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1180 * 1024 * 8) / (34 * 10^6) = 284.311 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2250 KB over a point-to-point network link with transmission bandwidth rate of 14 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1329.071 ms",
      "1974.857 ms",
      "1316.571 ms",
      "329.143 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2250 * 1024 * 8) / (14 * 10^6) = 1316.571 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.163.155 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.164.128",
      "172.24.163.0",
      "172.24.163.255",
      "172.24.163.0"
    ],
    "answer": 2,
    "explanation": "For host 172.24.163.155/25, the subnet mask bits reveal the network ID is 172.24.163.128 and broadcast address is 172.24.163.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "31.50 ms",
      "270.00 ms",
      "13.50 ms",
      "27.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2700 bits / (100 * 1000 bps) = 27.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1310 KB over a point-to-point network link with transmission bandwidth rate of 33 Mbps. What is the theoretical transmission delay?",
    "options": [
      "81.299 ms",
      "337.698 ms",
      "487.796 ms",
      "325.198 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1310 * 1024 * 8) / (33 * 10^6) = 325.198 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2030 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "639.606 ms",
      "159.902 ms",
      "652.106 ms",
      "959.409 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2030 * 1024 * 8) / (26 * 10^6) = 639.606 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.205.73 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.205.0",
      "172.26.205.127",
      "172.26.206.0",
      "172.26.205.128"
    ],
    "answer": 1,
    "explanation": "For host 172.26.205.73/25, the subnet mask bits reveal the network ID is 172.26.205.0 and broadcast address is 172.26.205.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5150 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "12.88 ms",
      "30.25 ms",
      "257.50 ms",
      "25.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5150 bits / (200 * 1000 bps) = 25.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.108.150 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.108.0",
      "192.168.108.128",
      "192.168.109.128",
      "192.168.108.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.108.150/25, the subnet mask bits reveal the network ID is 192.168.108.128 and broadcast address is 192.168.108.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4200 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "21.00 ms",
      "10.50 ms",
      "210.00 ms",
      "25.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4200 bits / (200 * 1000 bps) = 21.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.247.29 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.19.247.0",
      "172.19.244.0",
      "172.19.248.0",
      "172.19.247.0"
    ],
    "answer": 1,
    "explanation": "For host 172.19.247.29/22, the subnet mask bits reveal the network ID is 172.19.244.0 and broadcast address is 172.19.247.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1270 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "152.998 ms",
      "611.991 ms",
      "917.986 ms",
      "624.491 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1270 * 1024 * 8) / (17 * 10^6) = 611.991 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4810 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "757.760 ms",
      "1136.640 ms",
      "770.260 ms",
      "189.440 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4810 * 1024 * 8) / (52 * 10^6) = 757.760 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.150.75.32 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.150.76.0",
      "255.255.255.255",
      "10.150.75.0",
      "10.150.75.64"
    ],
    "answer": 2,
    "explanation": "For host 10.150.75.32/26, the subnet mask bits reveal the network ID is 10.150.75.0 and broadcast address is 10.150.75.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3900 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "142.629 ms",
      "583.014 ms",
      "570.514 ms",
      "855.771 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3900 * 1024 * 8) / (56 * 10^6) = 570.514 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.96.203 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.96.200",
      "192.168.96.192",
      "192.168.97.200",
      "192.168.96.208"
    ],
    "answer": 0,
    "explanation": "For host 192.168.96.203/29, the subnet mask bits reveal the network ID is 192.168.96.200 and broadcast address is 192.168.96.207."
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
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "184.50 ms",
      "90.00 ms",
      "180.00 ms",
      "1800.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3600 bits / (20 * 1000 bps) = 180.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.107.164.145 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.107.164.0",
      "10.107.164.255",
      "10.107.165.0",
      "10.107.164.0"
    ],
    "answer": 1,
    "explanation": "For host 10.107.164.145/24, the subnet mask bits reveal the network ID is 10.107.164.0 and broadcast address is 10.107.164.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3940 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "931.052 ms",
      "155.175 ms",
      "633.202 ms",
      "620.702 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3940 * 1024 * 8) / (52 * 10^6) = 620.702 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3550 KB over a point-to-point network link with transmission bandwidth rate of 60 Mbps. What is the theoretical transmission delay?",
    "options": [
      "727.040 ms",
      "484.693 ms",
      "121.173 ms",
      "497.193 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3550 * 1024 * 8) / (60 * 10^6) = 484.693 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3840 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "533.174 ms",
      "133.294 ms",
      "545.674 ms",
      "799.761 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3840 * 1024 * 8) / (59 * 10^6) = 533.174 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.107.55 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.108.48",
      "192.168.107.63",
      "192.168.107.64",
      "192.168.107.32"
    ],
    "answer": 1,
    "explanation": "For host 192.168.107.55/28, the subnet mask bits reveal the network ID is 192.168.107.48 and broadcast address is 192.168.107.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2190 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "560.640 ms",
      "2242.560 ms",
      "3363.840 ms",
      "2255.060 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2190 * 1024 * 8) / (8 * 10^6) = 2242.560 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.74.89 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.75.88",
      "192.168.74.92",
      "192.168.74.84",
      "192.168.74.91"
    ],
    "answer": 3,
    "explanation": "For host 192.168.74.89/30, the subnet mask bits reveal the network ID is 192.168.74.88 and broadcast address is 192.168.74.91."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2100 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.20 ms",
      "42.00 ms",
      "2.10 ms",
      "8.70 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2100 bits / (500 * 1000 bps) = 4.20 ms."
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
    "question": "An interface is configured with host IP address 172.26.180.237 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.180.240",
      "172.26.180.224",
      "172.26.180.232",
      "172.26.181.232"
    ],
    "answer": 2,
    "explanation": "For host 172.26.180.237/29, the subnet mask bits reveal the network ID is 172.26.180.232 and broadcast address is 172.26.180.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.89.96 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.90.0",
      "192.168.91.255",
      "192.168.89.0",
      "192.168.89.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.89.96/22, the subnet mask bits reveal the network ID is 192.168.88.0 and broadcast address is 192.168.91.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 710 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "174.490 ms",
      "128.826 ms",
      "116.326 ms",
      "29.082 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (710 * 1024 * 8) / (50 * 10^6) = 116.326 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.145.234 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.145.240",
      "192.168.146.224",
      "192.168.145.208",
      "192.168.145.224"
    ],
    "answer": 3,
    "explanation": "For host 192.168.145.234/28, the subnet mask bits reveal the network ID is 192.168.145.224 and broadcast address is 192.168.145.239."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3030 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "603.494 ms",
      "590.994 ms",
      "147.749 ms",
      "886.491 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3030 * 1024 * 8) / (42 * 10^6) = 590.994 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.4.233.43 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.4.233.16",
      "10.4.233.32",
      "10.4.233.48",
      "10.4.234.32"
    ],
    "answer": 1,
    "explanation": "For host 10.4.233.43/28, the subnet mask bits reveal the network ID is 10.4.233.32 and broadcast address is 10.4.233.47."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4750 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "28.25 ms",
      "11.88 ms",
      "23.75 ms",
      "237.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4750 bits / (200 * 1000 bps) = 23.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.170.170.139 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.170.170.140",
      "10.170.171.136",
      "10.170.170.136",
      "10.170.170.132"
    ],
    "answer": 2,
    "explanation": "For host 10.170.170.139/30, the subnet mask bits reveal the network ID is 10.170.170.136 and broadcast address is 10.170.170.139."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 620 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "448.151 ms",
      "298.767 ms",
      "74.692 ms",
      "311.267 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (620 * 1024 * 8) / (17 * 10^6) = 298.767 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1650 KB over a point-to-point network link with transmission bandwidth rate of 74 Mbps. What is the theoretical transmission delay?",
    "options": [
      "195.159 ms",
      "45.665 ms",
      "273.989 ms",
      "182.659 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1650 * 1024 * 8) / (74 * 10^6) = 182.659 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5100 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "514.50 ms",
      "5100.00 ms",
      "510.00 ms",
      "255.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5100 bits / (10 * 1000 bps) = 510.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.149.60.39 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.149.61.32",
      "10.149.60.48",
      "10.149.60.16",
      "10.149.60.47"
    ],
    "answer": 3,
    "explanation": "For host 10.149.60.39/28, the subnet mask bits reveal the network ID is 10.149.60.32 and broadcast address is 10.149.60.47."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3950 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "371.936 ms",
      "384.436 ms",
      "92.984 ms",
      "557.903 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3950 * 1024 * 8) / (87 * 10^6) = 371.936 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 590 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "185.895 ms",
      "123.930 ms",
      "30.983 ms",
      "136.430 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (590 * 1024 * 8) / (39 * 10^6) = 123.930 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4060 KB over a point-to-point network link with transmission bandwidth rate of 24 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1398.313 ms",
      "346.453 ms",
      "1385.813 ms",
      "2078.720 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4060 * 1024 * 8) / (24 * 10^6) = 1385.813 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2460 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "89.966 ms",
      "359.863 ms",
      "539.794 ms",
      "372.363 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2460 * 1024 * 8) / (56 * 10^6) = 359.863 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.43.252.67 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.43.252.0",
      "10.43.253.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 10.43.252.67/23, the subnet mask bits reveal the network ID is 10.43.252.0 and broadcast address is 10.43.253.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1810 KB over a point-to-point network link with transmission bandwidth rate of 33 Mbps. What is the theoretical transmission delay?",
    "options": [
      "673.978 ms",
      "449.319 ms",
      "112.330 ms",
      "461.819 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1810 * 1024 * 8) / (33 * 10^6) = 449.319 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3740 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "134.378 ms",
      "550.010 ms",
      "806.265 ms",
      "537.510 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3740 * 1024 * 8) / (57 * 10^6) = 537.510 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1980 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "419.487 ms",
      "69.914 ms",
      "292.158 ms",
      "279.658 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1980 * 1024 * 8) / (58 * 10^6) = 279.658 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3560 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "568.121 ms",
      "378.747 ms",
      "94.687 ms",
      "391.247 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3560 * 1024 * 8) / (77 * 10^6) = 378.747 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.127.180.228 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.127.180.0",
      "10.127.181.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 10.127.180.228/24, the subnet mask bits reveal the network ID is 10.127.180.0 and broadcast address is 10.127.180.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.124.184 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.124.191",
      "172.17.125.184",
      "172.17.124.192",
      "172.17.124.176"
    ],
    "answer": 0,
    "explanation": "For host 172.17.124.184/29, the subnet mask bits reveal the network ID is 172.17.124.184 and broadcast address is 172.17.124.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.118.61 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.118.0",
      "192.168.119.0",
      "192.168.118.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.118.61/25, the subnet mask bits reveal the network ID is 192.168.118.0 and broadcast address is 192.168.118.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 530 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "83.495 ms",
      "125.243 ms",
      "95.995 ms",
      "20.874 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (530 * 1024 * 8) / (52 * 10^6) = 83.495 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.175.134 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.175.64",
      "192.168.175.191",
      "192.168.176.128",
      "192.168.175.192"
    ],
    "answer": 1,
    "explanation": "For host 192.168.175.134/26, the subnet mask bits reveal the network ID is 192.168.175.128 and broadcast address is 192.168.175.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "570.00 ms",
      "285.00 ms",
      "574.50 ms",
      "5700.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5700 bits / (10 * 1000 bps) = 570.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.151.45 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.152.0",
      "172.31.151.0",
      "172.31.151.255",
      "172.31.151.0"
    ],
    "answer": 2,
    "explanation": "For host 172.31.151.45/24, the subnet mask bits reveal the network ID is 172.31.151.0 and broadcast address is 172.31.151.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3710 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1599.596 ms",
      "1612.096 ms",
      "2399.394 ms",
      "399.899 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3710 * 1024 * 8) / (19 * 10^6) = 1599.596 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.78.148 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.78.0",
      "192.168.79.128",
      "192.168.78.255",
      "192.168.78.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.78.148/25, the subnet mask bits reveal the network ID is 192.168.78.128 and broadcast address is 192.168.78.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2350 KB over a point-to-point network link with transmission bandwidth rate of 69 Mbps. What is the theoretical transmission delay?",
    "options": [
      "279.003 ms",
      "291.503 ms",
      "418.504 ms",
      "69.751 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2350 * 1024 * 8) / (69 * 10^6) = 279.003 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2180 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "226.058 ms",
      "56.514 ms",
      "339.087 ms",
      "238.558 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2180 * 1024 * 8) / (79 * 10^6) = 226.058 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.106.52 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.107.48",
      "192.168.106.48",
      "192.168.106.40",
      "192.168.106.56"
    ],
    "answer": 1,
    "explanation": "For host 192.168.106.52/29, the subnet mask bits reveal the network ID is 192.168.106.48 and broadcast address is 192.168.106.55."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.146.242 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.147.0",
      "192.168.146.0",
      "192.168.146.255",
      "192.168.146.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.146.242/24, the subnet mask bits reveal the network ID is 192.168.146.0 and broadcast address is 192.168.146.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "58.50 ms",
      "540.00 ms",
      "54.00 ms",
      "27.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2700 bits / (50 * 1000 bps) = 54.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3100 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "31.00 ms",
      "66.50 ms",
      "62.00 ms",
      "620.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3100 bits / (50 * 1000 bps) = 62.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 730 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "169.250 ms",
      "28.208 ms",
      "125.333 ms",
      "112.833 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (730 * 1024 * 8) / (53 * 10^6) = 112.833 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "9.38 ms",
      "187.50 ms",
      "23.25 ms",
      "18.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3750 bits / (200 * 1000 bps) = 18.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.161.11 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.161.0",
      "192.168.162.0",
      "192.168.160.0",
      "192.168.161.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.161.11/23, the subnet mask bits reveal the network ID is 192.168.160.0 and broadcast address is 192.168.161.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.210.126.83 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.210.127.0",
      "10.210.126.0",
      "10.210.126.255",
      "10.210.126.0"
    ],
    "answer": 2,
    "explanation": "For host 10.210.126.83/24, the subnet mask bits reveal the network ID is 10.210.126.0 and broadcast address is 10.210.126.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5550 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "277.50 ms",
      "559.50 ms",
      "5550.00 ms",
      "555.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5550 bits / (10 * 1000 bps) = 555.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.118.114 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.118.128",
      "172.26.119.96",
      "172.26.118.64",
      "172.26.118.96"
    ],
    "answer": 3,
    "explanation": "For host 172.26.118.114/27, the subnet mask bits reveal the network ID is 172.26.118.96 and broadcast address is 172.26.118.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5800 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "58.00 ms",
      "116.00 ms",
      "120.50 ms",
      "1160.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5800 bits / (50 * 1000 bps) = 116.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1850 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "13.75 ms",
      "92.50 ms",
      "4.63 ms",
      "9.25 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1850 bits / (200 * 1000 bps) = 9.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.137.2.227 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.137.2.227",
      "10.137.3.224",
      "10.137.2.228",
      "10.137.2.220"
    ],
    "answer": 0,
    "explanation": "For host 10.137.2.227/30, the subnet mask bits reveal the network ID is 10.137.2.224 and broadcast address is 10.137.2.227."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "297.00 ms",
      "292.50 ms",
      "146.25 ms",
      "2925.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5850 bits / (20 * 1000 bps) = 292.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "18.00 ms",
      "40.50 ms",
      "36.00 ms",
      "360.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3600 bits / (100 * 1000 bps) = 36.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1630 KB over a point-to-point network link with transmission bandwidth rate of 81 Mbps. What is the theoretical transmission delay?",
    "options": [
      "247.277 ms",
      "164.851 ms",
      "41.213 ms",
      "177.351 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1630 * 1024 * 8) / (81 * 10^6) = 164.851 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5100 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "510.00 ms",
      "55.50 ms",
      "25.50 ms",
      "51.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5100 bits / (100 * 1000 bps) = 51.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.165.163.191 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.165.163.188",
      "10.165.164.188",
      "10.165.163.192",
      "10.165.163.184"
    ],
    "answer": 0,
    "explanation": "For host 10.165.163.191/30, the subnet mask bits reveal the network ID is 10.165.163.188 and broadcast address is 10.165.163.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 360 KB over a point-to-point network link with transmission bandwidth rate of 93 Mbps. What is the theoretical transmission delay?",
    "options": [
      "47.566 ms",
      "44.211 ms",
      "7.928 ms",
      "31.711 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (360 * 1024 * 8) / (93 * 10^6) = 31.711 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1520 KB over a point-to-point network link with transmission bandwidth rate of 68 Mbps. What is the theoretical transmission delay?",
    "options": [
      "195.615 ms",
      "45.779 ms",
      "183.115 ms",
      "274.673 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1520 * 1024 * 8) / (68 * 10^6) = 183.115 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1830 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "318.965 ms",
      "478.448 ms",
      "331.465 ms",
      "79.741 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1830 * 1024 * 8) / (47 * 10^6) = 318.965 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1090 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "607.785 ms",
      "892.928 ms",
      "148.821 ms",
      "595.285 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1090 * 1024 * 8) / (15 * 10^6) = 595.285 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4670 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "386.431 ms",
      "579.646 ms",
      "398.931 ms",
      "96.608 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4670 * 1024 * 8) / (99 * 10^6) = 386.431 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1010 KB over a point-to-point network link with transmission bandwidth rate of 35 Mbps. What is the theoretical transmission delay?",
    "options": [
      "354.597 ms",
      "236.398 ms",
      "59.099 ms",
      "248.898 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1010 * 1024 * 8) / (35 * 10^6) = 236.398 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3650 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "77.50 ms",
      "730.00 ms",
      "36.50 ms",
      "73.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3650 bits / (50 * 1000 bps) = 73.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.83.37 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.19.83.64",
      "172.19.84.0",
      "172.19.83.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 172.19.83.37/26, the subnet mask bits reveal the network ID is 172.19.83.0 and broadcast address is 172.19.83.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.244.148.164 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.244.148.192",
      "10.244.149.160",
      "10.244.148.191",
      "10.244.148.128"
    ],
    "answer": 2,
    "explanation": "For host 10.244.148.164/27, the subnet mask bits reveal the network ID is 10.244.148.160 and broadcast address is 10.244.148.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3570 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "86.016 ms",
      "516.096 ms",
      "356.564 ms",
      "344.064 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3570 * 1024 * 8) / (85 * 10^6) = 344.064 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 210 KB over a point-to-point network link with transmission bandwidth rate of 10 Mbps. What is the theoretical transmission delay?",
    "options": [
      "258.048 ms",
      "184.532 ms",
      "43.008 ms",
      "172.032 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (210 * 1024 * 8) / (10 * 10^6) = 172.032 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5100 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "106.50 ms",
      "1020.00 ms",
      "102.00 ms",
      "51.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5100 bits / (50 * 1000 bps) = 102.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1300 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "389.620 ms",
      "64.937 ms",
      "259.746 ms",
      "272.246 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1300 * 1024 * 8) / (41 * 10^6) = 259.746 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "29.25 ms",
      "58.50 ms",
      "63.00 ms",
      "585.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5850 bits / (100 * 1000 bps) = 58.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1580 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "995.643 ms",
      "1008.143 ms",
      "1493.465 ms",
      "248.911 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1580 * 1024 * 8) / (13 * 10^6) = 995.643 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3410 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1074.412 ms",
      "179.069 ms",
      "716.275 ms",
      "728.775 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3410 * 1024 * 8) / (39 * 10^6) = 716.275 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3200 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "10.90 ms",
      "3.20 ms",
      "64.00 ms",
      "6.40 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3200 bits / (500 * 1000 bps) = 6.40 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3830 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "540.954 ms",
      "811.432 ms",
      "135.239 ms",
      "553.454 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3830 * 1024 * 8) / (58 * 10^6) = 540.954 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.116.53 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.116.0",
      "192.168.116.64",
      "192.168.116.32",
      "192.168.117.32"
    ],
    "answer": 2,
    "explanation": "For host 192.168.116.53/27, the subnet mask bits reveal the network ID is 192.168.116.32 and broadcast address is 192.168.116.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.241.114 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "172.24.241.0",
      "172.24.242.0"
    ],
    "answer": 2,
    "explanation": "For host 172.24.241.114/24, the subnet mask bits reveal the network ID is 172.24.241.0 and broadcast address is 172.24.241.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.102.122 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.102.0",
      "192.168.102.127",
      "192.168.102.128",
      "192.168.103.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.102.122/25, the subnet mask bits reveal the network ID is 192.168.102.0 and broadcast address is 192.168.102.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4850 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "489.50 ms",
      "485.00 ms",
      "4850.00 ms",
      "242.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4850 bits / (10 * 1000 bps) = 485.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4300 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "187.370 ms",
      "1124.221 ms",
      "761.981 ms",
      "749.481 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4300 * 1024 * 8) / (47 * 10^6) = 749.481 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.90.121.124 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.90.122.0",
      "10.90.121.255",
      "10.90.121.0",
      "10.90.121.0"
    ],
    "answer": 1,
    "explanation": "For host 10.90.121.124/23, the subnet mask bits reveal the network ID is 10.90.120.0 and broadcast address is 10.90.121.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.198.112 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.198.0",
      "192.168.198.0",
      "192.168.198.255",
      "192.168.199.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.198.112/24, the subnet mask bits reveal the network ID is 192.168.198.0 and broadcast address is 192.168.198.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5550 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2775.00 ms",
      "277.50 ms",
      "138.75 ms",
      "282.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5550 bits / (20 * 1000 bps) = 277.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1050 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "1.05 ms",
      "6.60 ms",
      "2.10 ms",
      "21.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1050 bits / (500 * 1000 bps) = 2.10 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.159.227 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.29.159.192",
      "172.29.159.224",
      "172.29.159.0",
      "172.29.160.224"
    ],
    "answer": 1,
    "explanation": "For host 172.29.159.227/27, the subnet mask bits reveal the network ID is 172.29.159.224 and broadcast address is 172.29.159.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2670 KB over a point-to-point network link with transmission bandwidth rate of 43 Mbps. What is the theoretical transmission delay?",
    "options": [
      "127.167 ms",
      "762.999 ms",
      "521.166 ms",
      "508.666 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2670 * 1024 * 8) / (43 * 10^6) = 508.666 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.234.63 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.234.0",
      "192.168.234.127",
      "192.168.234.128",
      "192.168.235.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.234.63/25, the subnet mask bits reveal the network ID is 192.168.234.0 and broadcast address is 192.168.234.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3710 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "799.798 ms",
      "199.949 ms",
      "812.298 ms",
      "1199.697 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3710 * 1024 * 8) / (38 * 10^6) = 799.798 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2550 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "63.75 ms",
      "132.00 ms",
      "127.50 ms",
      "1275.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2550 bits / (20 * 1000 bps) = 127.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2330 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "254.498 ms",
      "266.998 ms",
      "63.625 ms",
      "381.747 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2330 * 1024 * 8) / (75 * 10^6) = 254.498 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2090 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "285.355 ms",
      "1141.419 ms",
      "1153.919 ms",
      "1712.128 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2090 * 1024 * 8) / (15 * 10^6) = 1141.419 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4740 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1713.092 ms",
      "1142.061 ms",
      "285.515 ms",
      "1154.561 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4740 * 1024 * 8) / (34 * 10^6) = 1142.061 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.67.74 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.68.0",
      "192.168.66.0",
      "192.168.67.0",
      "192.168.67.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.67.74/23, the subnet mask bits reveal the network ID is 192.168.66.0 and broadcast address is 192.168.67.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.35.69 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.18.35.64",
      "172.18.35.128",
      "172.18.36.64",
      "172.18.35.0"
    ],
    "answer": 0,
    "explanation": "For host 172.18.35.69/26, the subnet mask bits reveal the network ID is 172.18.35.64 and broadcast address is 172.18.35.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "5.00 ms",
      "14.50 ms",
      "10.00 ms",
      "100.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1000 bits / (100 * 1000 bps) = 10.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2490 KB over a point-to-point network link with transmission bandwidth rate of 62 Mbps. What is the theoretical transmission delay?",
    "options": [
      "341.501 ms",
      "82.250 ms",
      "493.502 ms",
      "329.001 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2490 * 1024 * 8) / (62 * 10^6) = 329.001 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.78.169 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.76.0",
      "192.168.79.0",
      "192.168.78.0",
      "192.168.78.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.78.169/22, the subnet mask bits reveal the network ID is 192.168.76.0 and broadcast address is 192.168.79.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "132.50 ms",
      "137.00 ms",
      "1325.00 ms",
      "66.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2650 bits / (20 * 1000 bps) = 132.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.28.135.25 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.28.135.0",
      "10.28.135.63",
      "10.28.135.64",
      "10.28.136.0"
    ],
    "answer": 1,
    "explanation": "For host 10.28.135.25/26, the subnet mask bits reveal the network ID is 10.28.135.0 and broadcast address is 10.28.135.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.218.182 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.218.128",
      "192.168.218.160",
      "192.168.219.160",
      "192.168.218.192"
    ],
    "answer": 1,
    "explanation": "For host 192.168.218.182/27, the subnet mask bits reveal the network ID is 192.168.218.160 and broadcast address is 192.168.218.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.114.177 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.114.0",
      "192.168.115.255",
      "192.168.114.0",
      "192.168.115.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.114.177/23, the subnet mask bits reveal the network ID is 192.168.114.0 and broadcast address is 192.168.115.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4100 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.10 ms",
      "82.00 ms",
      "12.70 ms",
      "8.20 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4100 bits / (500 * 1000 bps) = 8.20 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5450 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "59.00 ms",
      "27.25 ms",
      "545.00 ms",
      "54.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5450 bits / (100 * 1000 bps) = 54.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 910 KB over a point-to-point network link with transmission bandwidth rate of 36 Mbps. What is the theoretical transmission delay?",
    "options": [
      "207.076 ms",
      "51.769 ms",
      "219.576 ms",
      "310.613 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (910 * 1024 * 8) / (36 * 10^6) = 207.076 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2250 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2060.500 ms",
      "2048.000 ms",
      "3072.000 ms",
      "512.000 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2250 * 1024 * 8) / (9 * 10^6) = 2048.000 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1350 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "27.00 ms",
      "1.35 ms",
      "7.20 ms",
      "2.70 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1350 bits / (500 * 1000 bps) = 2.70 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4770 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "477.689 ms",
      "116.297 ms",
      "697.783 ms",
      "465.189 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4770 * 1024 * 8) / (84 * 10^6) = 465.189 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4750 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "475.00 ms",
      "23.75 ms",
      "47.50 ms",
      "52.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4750 bits / (100 * 1000 bps) = 47.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "152.50 ms",
      "15.25 ms",
      "7.63 ms",
      "19.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3050 bits / (200 * 1000 bps) = 15.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4750 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1267.726 ms",
      "313.806 ms",
      "1255.226 ms",
      "1882.839 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4750 * 1024 * 8) / (31 * 10^6) = 1255.226 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "740.00 ms",
      "37.00 ms",
      "74.00 ms",
      "78.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3700 bits / (50 * 1000 bps) = 74.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 830 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "25.755 ms",
      "115.521 ms",
      "103.021 ms",
      "154.531 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (830 * 1024 * 8) / (66 * 10^6) = 103.021 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1525.00 ms",
      "152.50 ms",
      "157.00 ms",
      "76.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3050 bits / (20 * 1000 bps) = 152.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4150 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "20.75 ms",
      "10.38 ms",
      "25.25 ms",
      "207.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4150 bits / (200 * 1000 bps) = 20.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.122.166.26 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.122.167.16",
      "10.122.166.0",
      "10.122.166.16",
      "10.122.166.32"
    ],
    "answer": 2,
    "explanation": "For host 10.122.166.26/28, the subnet mask bits reveal the network ID is 10.122.166.16 and broadcast address is 10.122.166.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.155.54 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.156.48",
      "172.31.155.40",
      "172.31.155.55",
      "172.31.155.56"
    ],
    "answer": 2,
    "explanation": "For host 172.31.155.54/29, the subnet mask bits reveal the network ID is 172.31.155.48 and broadcast address is 172.31.155.55."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "12.10 ms",
      "3.80 ms",
      "7.60 ms",
      "76.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3800 bits / (500 * 1000 bps) = 7.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1200 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "36.681 ms",
      "159.222 ms",
      "146.722 ms",
      "220.084 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1200 * 1024 * 8) / (67 * 10^6) = 146.722 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.156.30.9 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.156.31.8",
      "10.156.30.0",
      "10.156.30.16",
      "10.156.30.8"
    ],
    "answer": 3,
    "explanation": "For host 10.156.30.9/29, the subnet mask bits reveal the network ID is 10.156.30.8 and broadcast address is 10.156.30.15."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2040 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "48.580 ms",
      "194.322 ms",
      "206.822 ms",
      "291.483 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2040 * 1024 * 8) / (86 * 10^6) = 194.322 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.148.88 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.148.96",
      "192.168.148.64",
      "192.168.148.95",
      "192.168.149.80"
    ],
    "answer": 2,
    "explanation": "For host 192.168.148.88/28, the subnet mask bits reveal the network ID is 192.168.148.80 and broadcast address is 192.168.148.95."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1900 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "1.90 ms",
      "3.80 ms",
      "8.30 ms",
      "38.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1900 bits / (500 * 1000 bps) = 3.80 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 230 KB over a point-to-point network link with transmission bandwidth rate of 55 Mbps. What is the theoretical transmission delay?",
    "options": [
      "34.257 ms",
      "51.386 ms",
      "8.564 ms",
      "46.757 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (230 * 1024 * 8) / (55 * 10^6) = 34.257 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4400 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3180.424 ms",
      "2120.282 ms",
      "530.071 ms",
      "2132.782 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4400 * 1024 * 8) / (17 * 10^6) = 2120.282 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3830 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "653.653 ms",
      "108.942 ms",
      "435.769 ms",
      "448.269 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3830 * 1024 * 8) / (72 * 10^6) = 435.769 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2300 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "16.00 ms",
      "115.00 ms",
      "5.75 ms",
      "11.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2300 bits / (200 * 1000 bps) = 11.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1350 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "6.75 ms",
      "18.00 ms",
      "13.50 ms",
      "135.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1350 bits / (100 * 1000 bps) = 13.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1770 KB over a point-to-point network link with transmission bandwidth rate of 21 Mbps. What is the theoretical transmission delay?",
    "options": [
      "172.617 ms",
      "690.469 ms",
      "702.969 ms",
      "1035.703 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1770 * 1024 * 8) / (21 * 10^6) = 690.469 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3900 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "347.270 ms",
      "520.904 ms",
      "86.817 ms",
      "359.770 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3900 * 1024 * 8) / (92 * 10^6) = 347.270 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2250 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "225.00 ms",
      "229.50 ms",
      "2250.00 ms",
      "112.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2250 bits / (10 * 1000 bps) = 225.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.215.82 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.215.0",
      "192.168.216.0",
      "192.168.215.255",
      "192.168.215.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.215.82/24, the subnet mask bits reveal the network ID is 192.168.215.0 and broadcast address is 192.168.215.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.184.91.85 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.184.91.0",
      "10.184.91.255",
      "10.184.91.0",
      "10.184.92.0"
    ],
    "answer": 1,
    "explanation": "For host 10.184.91.85/22, the subnet mask bits reveal the network ID is 10.184.88.0 and broadcast address is 10.184.91.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.197.188 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.197.0",
      "172.25.197.0",
      "172.25.197.128",
      "172.25.198.128"
    ],
    "answer": 2,
    "explanation": "For host 172.25.197.188/25, the subnet mask bits reveal the network ID is 172.25.197.128 and broadcast address is 172.25.197.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1870 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "478.720 ms",
      "2872.320 ms",
      "1914.880 ms",
      "1927.380 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1870 * 1024 * 8) / (8 * 10^6) = 1914.880 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.190.38 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.190.32",
      "192.168.191.36",
      "192.168.190.40",
      "192.168.190.39"
    ],
    "answer": 3,
    "explanation": "For host 192.168.190.38/30, the subnet mask bits reveal the network ID is 192.168.190.36 and broadcast address is 192.168.190.39."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1330 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "375.679 ms",
      "90.795 ms",
      "363.179 ms",
      "544.768 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1330 * 1024 * 8) / (30 * 10^6) = 363.179 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3960 KB over a point-to-point network link with transmission bandwidth rate of 25 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1310.113 ms",
      "1297.613 ms",
      "1946.419 ms",
      "324.403 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3960 * 1024 * 8) / (25 * 10^6) = 1297.613 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4700 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "726.460 ms",
      "738.960 ms",
      "1089.691 ms",
      "181.615 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4700 * 1024 * 8) / (53 * 10^6) = 726.460 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "220.00 ms",
      "2200.00 ms",
      "110.00 ms",
      "224.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2200 bits / (10 * 1000 bps) = 220.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.119.182 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.27.119.176",
      "172.27.119.168",
      "172.27.119.184",
      "172.27.120.176"
    ],
    "answer": 0,
    "explanation": "For host 172.27.119.182/29, the subnet mask bits reveal the network ID is 172.27.119.176 and broadcast address is 172.27.119.183."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3350 KB over a point-to-point network link with transmission bandwidth rate of 65 Mbps. What is the theoretical transmission delay?",
    "options": [
      "434.703 ms",
      "422.203 ms",
      "105.551 ms",
      "633.305 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3350 * 1024 * 8) / (65 * 10^6) = 422.203 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 600 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "58.514 ms",
      "71.014 ms",
      "87.771 ms",
      "14.629 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (600 * 1024 * 8) / (84 * 10^6) = 58.514 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 670 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "117.614 ms",
      "90.909 ms",
      "19.602 ms",
      "78.409 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (670 * 1024 * 8) / (70 * 10^6) = 78.409 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.247.209.21 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.247.210.16",
      "10.247.209.8",
      "10.247.209.24",
      "10.247.209.23"
    ],
    "answer": 3,
    "explanation": "For host 10.247.209.21/29, the subnet mask bits reveal the network ID is 10.247.209.16 and broadcast address is 10.247.209.23."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.94.203 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.95.192",
      "192.168.94.207",
      "192.168.94.176",
      "192.168.94.208"
    ],
    "answer": 1,
    "explanation": "For host 192.168.94.203/28, the subnet mask bits reveal the network ID is 192.168.94.192 and broadcast address is 192.168.94.207."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.154.221 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.154.0",
      "192.168.154.0",
      "192.168.154.255",
      "192.168.155.128"
    ],
    "answer": 2,
    "explanation": "For host 192.168.154.221/25, the subnet mask bits reveal the network ID is 192.168.154.128 and broadcast address is 192.168.154.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5500 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "32.00 ms",
      "27.50 ms",
      "275.00 ms",
      "13.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5500 bits / (200 * 1000 bps) = 27.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.150.90 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.28.150.0",
      "172.28.151.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.28.150.90/23, the subnet mask bits reveal the network ID is 172.28.150.0 and broadcast address is 172.28.151.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3150 KB over a point-to-point network link with transmission bandwidth rate of 45 Mbps. What is the theoretical transmission delay?",
    "options": [
      "573.440 ms",
      "860.160 ms",
      "143.360 ms",
      "585.940 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3150 * 1024 * 8) / (45 * 10^6) = 573.440 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3310 KB over a point-to-point network link with transmission bandwidth rate of 65 Mbps. What is the theoretical transmission delay?",
    "options": [
      "625.743 ms",
      "104.290 ms",
      "417.162 ms",
      "429.662 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3310 * 1024 * 8) / (65 * 10^6) = 417.162 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2300 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "198.333 ms",
      "297.499 ms",
      "210.833 ms",
      "49.583 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2300 * 1024 * 8) / (95 * 10^6) = 198.333 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.49.248 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.49.251",
      "172.16.49.244",
      "172.16.49.252",
      "172.16.50.248"
    ],
    "answer": 0,
    "explanation": "For host 172.16.49.248/30, the subnet mask bits reveal the network ID is 172.16.49.248 and broadcast address is 172.16.49.251."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "121.50 ms",
      "58.50 ms",
      "117.00 ms",
      "1170.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5850 bits / (50 * 1000 bps) = 117.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.24.42 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.24.44",
      "192.168.24.36",
      "192.168.24.43",
      "192.168.25.40"
    ],
    "answer": 2,
    "explanation": "For host 192.168.24.42/30, the subnet mask bits reveal the network ID is 192.168.24.40 and broadcast address is 192.168.24.43."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.44.44 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.44.0",
      "192.168.45.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 192.168.44.44/24, the subnet mask bits reveal the network ID is 192.168.44.0 and broadcast address is 192.168.44.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.167.107 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.167.0",
      "192.168.167.0",
      "192.168.167.255",
      "192.168.168.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.167.107/22, the subnet mask bits reveal the network ID is 192.168.164.0 and broadcast address is 192.168.167.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "530.00 ms",
      "265.00 ms",
      "534.50 ms",
      "5300.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5300 bits / (10 * 1000 bps) = 530.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1900 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "14.00 ms",
      "95.00 ms",
      "4.75 ms",
      "9.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1900 bits / (200 * 1000 bps) = 9.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4070 KB over a point-to-point network link with transmission bandwidth rate of 68 Mbps. What is the theoretical transmission delay?",
    "options": [
      "122.579 ms",
      "502.815 ms",
      "490.315 ms",
      "735.473 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4070 * 1024 * 8) / (68 * 10^6) = 490.315 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.128.173 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.129.0",
      "255.255.255.255",
      "255.255.255.255",
      "172.25.128.0"
    ],
    "answer": 3,
    "explanation": "For host 172.25.128.173/24, the subnet mask bits reveal the network ID is 172.25.128.0 and broadcast address is 172.25.128.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.139.64 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.139.0",
      "172.22.139.255",
      "172.22.139.0",
      "172.22.140.0"
    ],
    "answer": 1,
    "explanation": "For host 172.22.139.64/24, the subnet mask bits reveal the network ID is 172.22.139.0 and broadcast address is 172.22.139.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1850 KB over a point-to-point network link with transmission bandwidth rate of 69 Mbps. What is the theoretical transmission delay?",
    "options": [
      "329.461 ms",
      "54.910 ms",
      "219.641 ms",
      "232.141 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1850 * 1024 * 8) / (69 * 10^6) = 219.641 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 920 KB over a point-to-point network link with transmission bandwidth rate of 69 Mbps. What is the theoretical transmission delay?",
    "options": [
      "163.840 ms",
      "121.727 ms",
      "27.307 ms",
      "109.227 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (920 * 1024 * 8) / (69 * 10^6) = 109.227 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.65.67 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.66.0",
      "192.168.64.0",
      "192.168.65.0",
      "192.168.65.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.65.67/22, the subnet mask bits reveal the network ID is 192.168.64.0 and broadcast address is 192.168.67.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4240 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "801.911 ms",
      "789.411 ms",
      "1184.116 ms",
      "197.353 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4240 * 1024 * 8) / (44 * 10^6) = 789.411 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "145.00 ms",
      "7.25 ms",
      "19.00 ms",
      "14.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1450 bits / (100 * 1000 bps) = 14.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.63.155 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.63.159",
      "192.168.64.144",
      "192.168.63.128",
      "192.168.63.160"
    ],
    "answer": 0,
    "explanation": "For host 192.168.63.155/28, the subnet mask bits reveal the network ID is 192.168.63.144 and broadcast address is 192.168.63.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1080 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "144.250 ms",
      "24.042 ms",
      "108.667 ms",
      "96.167 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1080 * 1024 * 8) / (92 * 10^6) = 96.167 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "370.00 ms",
      "18.50 ms",
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
    "question": "A router transmits a packet of size 4750 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2375.00 ms",
      "118.75 ms",
      "242.00 ms",
      "237.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4750 bits / (20 * 1000 bps) = 237.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3850 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "77.00 ms",
      "7.70 ms",
      "12.20 ms",
      "3.85 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3850 bits / (500 * 1000 bps) = 7.70 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.34.164.251 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.34.164.0",
      "10.34.165.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 10.34.164.251/22, the subnet mask bits reveal the network ID is 10.34.164.0 and broadcast address is 10.34.167.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3210 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "758.548 ms",
      "126.425 ms",
      "505.698 ms",
      "518.198 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3210 * 1024 * 8) / (52 * 10^6) = 505.698 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1670 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "211.556 ms",
      "141.038 ms",
      "35.259 ms",
      "153.538 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1670 * 1024 * 8) / (97 * 10^6) = 141.038 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4620 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "215.040 ms",
      "860.160 ms",
      "1290.240 ms",
      "872.660 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4620 * 1024 * 8) / (44 * 10^6) = 860.160 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.71.253 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.71.192",
      "192.168.72.192",
      "192.168.71.0",
      "192.168.71.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.71.253/26, the subnet mask bits reveal the network ID is 192.168.71.192 and broadcast address is 192.168.71.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3430 KB over a point-to-point network link with transmission bandwidth rate of 78 Mbps. What is the theoretical transmission delay?",
    "options": [
      "372.738 ms",
      "90.059 ms",
      "360.238 ms",
      "540.357 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3430 * 1024 * 8) / (78 * 10^6) = 360.238 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.124.36 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.125.0",
      "192.168.124.0",
      "255.255.255.255",
      "192.168.124.64"
    ],
    "answer": 1,
    "explanation": "For host 192.168.124.36/26, the subnet mask bits reveal the network ID is 192.168.124.0 and broadcast address is 192.168.124.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4940 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "6744.747 ms",
      "1124.124 ms",
      "4508.998 ms",
      "4496.498 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4940 * 1024 * 8) / (9 * 10^6) = 4496.498 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.193.83.11 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.193.83.16",
      "10.193.84.8",
      "10.193.83.15",
      "10.193.83.0"
    ],
    "answer": 2,
    "explanation": "For host 10.193.83.11/29, the subnet mask bits reveal the network ID is 10.193.83.8 and broadcast address is 10.193.83.15."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.58.151 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.58.0",
      "255.255.255.255",
      "192.168.59.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 192.168.58.151/23, the subnet mask bits reveal the network ID is 192.168.58.0 and broadcast address is 192.168.59.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "43.00 ms",
      "38.50 ms",
      "19.25 ms",
      "385.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3850 bits / (100 * 1000 bps) = 38.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.244.53.65 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.244.53.0",
      "10.244.54.0",
      "10.244.55.255",
      "10.244.53.0"
    ],
    "answer": 2,
    "explanation": "For host 10.244.53.65/22, the subnet mask bits reveal the network ID is 10.244.52.0 and broadcast address is 10.244.55.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.76.72.26 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.76.73.16",
      "10.76.72.32",
      "10.76.72.16",
      "10.76.72.0"
    ],
    "answer": 2,
    "explanation": "For host 10.76.72.26/28, the subnet mask bits reveal the network ID is 10.76.72.16 and broadcast address is 10.76.72.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 530 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "86.835 ms",
      "57.890 ms",
      "14.473 ms",
      "70.390 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (530 * 1024 * 8) / (75 * 10^6) = 57.890 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.29.50 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.29.0",
      "192.168.29.64",
      "192.168.30.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 192.168.29.50/26, the subnet mask bits reveal the network ID is 192.168.29.0 and broadcast address is 192.168.29.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3300 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "660.00 ms",
      "33.00 ms",
      "66.00 ms",
      "70.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3300 bits / (50 * 1000 bps) = 66.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4220 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "11523.413 ms",
      "11535.913 ms",
      "17285.120 ms",
      "2880.853 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4220 * 1024 * 8) / (3 * 10^6) = 11523.413 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.44.26.38 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.44.27.36",
      "10.44.26.36",
      "10.44.26.40",
      "10.44.26.32"
    ],
    "answer": 1,
    "explanation": "For host 10.44.26.38/30, the subnet mask bits reveal the network ID is 10.44.26.36 and broadcast address is 10.44.26.39."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.67.105 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.67.0",
      "172.17.67.0",
      "172.17.67.255",
      "172.17.68.0"
    ],
    "answer": 2,
    "explanation": "For host 172.17.67.105/24, the subnet mask bits reveal the network ID is 172.17.67.0 and broadcast address is 172.17.67.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "72.00 ms",
      "7.20 ms",
      "11.70 ms",
      "3.60 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3600 bits / (500 * 1000 bps) = 7.20 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 480 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "128.223 ms",
      "21.370 ms",
      "97.982 ms",
      "85.482 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (480 * 1024 * 8) / (46 * 10^6) = 85.482 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4770 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1465.344 ms",
      "976.896 ms",
      "244.224 ms",
      "989.396 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4770 * 1024 * 8) / (40 * 10^6) = 976.896 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2050 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "102.50 ms",
      "2050.00 ms",
      "209.50 ms",
      "205.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2050 bits / (10 * 1000 bps) = 205.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.149.118.197 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.149.118.200",
      "10.149.118.192",
      "10.149.119.196",
      "10.149.118.199"
    ],
    "answer": 3,
    "explanation": "For host 10.149.118.197/30, the subnet mask bits reveal the network ID is 10.149.118.196 and broadcast address is 10.149.118.199."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.8.173.31 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.8.173.255",
      "10.8.173.0",
      "10.8.173.0",
      "10.8.174.0"
    ],
    "answer": 0,
    "explanation": "For host 10.8.173.31/23, the subnet mask bits reveal the network ID is 10.8.172.0 and broadcast address is 10.8.173.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.21.207 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.22.21.0",
      "172.22.22.0",
      "172.22.21.0",
      "172.22.20.0"
    ],
    "answer": 3,
    "explanation": "For host 172.22.21.207/23, the subnet mask bits reveal the network ID is 172.22.20.0 and broadcast address is 172.22.21.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.172.78 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.173.72",
      "192.168.172.80",
      "192.168.172.64",
      "192.168.172.72"
    ],
    "answer": 3,
    "explanation": "For host 192.168.172.78/29, the subnet mask bits reveal the network ID is 192.168.172.72 and broadcast address is 192.168.172.79."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "524.50 ms",
      "520.00 ms",
      "260.00 ms",
      "5200.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5200 bits / (10 * 1000 bps) = 520.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4310 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1471.147 ms",
      "5897.087 ms",
      "5884.587 ms",
      "8826.880 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4310 * 1024 * 8) / (6 * 10^6) = 5884.587 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2170 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "435.753 ms",
      "105.813 ms",
      "634.880 ms",
      "423.253 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2170 * 1024 * 8) / (42 * 10^6) = 423.253 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2760 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1342.495 ms",
      "1994.993 ms",
      "1329.995 ms",
      "332.499 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2760 * 1024 * 8) / (17 * 10^6) = 1329.995 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.19.114.202 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.19.114.223",
      "10.19.114.160",
      "10.19.115.192",
      "10.19.114.224"
    ],
    "answer": 0,
    "explanation": "For host 10.19.114.202/27, the subnet mask bits reveal the network ID is 10.19.114.192 and broadcast address is 10.19.114.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4110 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "474.213 ms",
      "118.553 ms",
      "711.319 ms",
      "486.713 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4110 * 1024 * 8) / (71 * 10^6) = 474.213 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3480 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "192.623 ms",
      "1155.736 ms",
      "782.991 ms",
      "770.491 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3480 * 1024 * 8) / (37 * 10^6) = 770.491 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4950 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "12.38 ms",
      "29.25 ms",
      "24.75 ms",
      "247.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4950 bits / (200 * 1000 bps) = 24.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.10.219 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.11.216",
      "192.168.10.208",
      "192.168.10.224",
      "192.168.10.223"
    ],
    "answer": 3,
    "explanation": "For host 192.168.10.219/29, the subnet mask bits reveal the network ID is 192.168.10.216 and broadcast address is 192.168.10.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4680 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "497.798 ms",
      "121.325 ms",
      "485.298 ms",
      "727.947 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4680 * 1024 * 8) / (79 * 10^6) = 485.298 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.56.1.221 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.56.1.192",
      "10.56.1.128",
      "10.56.1.0",
      "10.56.2.192"
    ],
    "answer": 0,
    "explanation": "For host 10.56.1.221/26, the subnet mask bits reveal the network ID is 10.56.1.192 and broadcast address is 10.56.1.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4910 KB over a point-to-point network link with transmission bandwidth rate of 80 Mbps. What is the theoretical transmission delay?",
    "options": [
      "502.784 ms",
      "754.176 ms",
      "515.284 ms",
      "125.696 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4910 * 1024 * 8) / (80 * 10^6) = 502.784 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4740 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "480.332 ms",
      "116.958 ms",
      "467.832 ms",
      "701.748 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4740 * 1024 * 8) / (83 * 10^6) = 467.832 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2100 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "25.50 ms",
      "210.00 ms",
      "21.00 ms",
      "10.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2100 bits / (100 * 1000 bps) = 21.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1340 KB over a point-to-point network link with transmission bandwidth rate of 24 Mbps. What is the theoretical transmission delay?",
    "options": [
      "469.887 ms",
      "686.080 ms",
      "114.347 ms",
      "457.387 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1340 * 1024 * 8) / (24 * 10^6) = 457.387 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3660 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "737.280 ms",
      "122.880 ms",
      "491.520 ms",
      "504.020 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3660 * 1024 * 8) / (61 * 10^6) = 491.520 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.52.133.215 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.52.133.0",
      "10.52.133.0",
      "10.52.134.128",
      "10.52.133.255"
    ],
    "answer": 3,
    "explanation": "For host 10.52.133.215/25, the subnet mask bits reveal the network ID is 10.52.133.128 and broadcast address is 10.52.133.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.155.122 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.29.155.127",
      "172.29.155.128",
      "172.29.156.96",
      "172.29.155.64"
    ],
    "answer": 0,
    "explanation": "For host 172.29.155.122/27, the subnet mask bits reveal the network ID is 172.29.155.96 and broadcast address is 172.29.155.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2060 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "301.349 ms",
      "200.899 ms",
      "213.399 ms",
      "50.225 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2060 * 1024 * 8) / (84 * 10^6) = 200.899 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.188.19 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.188.64",
      "172.24.189.0",
      "172.24.188.0",
      "172.24.188.63"
    ],
    "answer": 3,
    "explanation": "For host 172.24.188.19/26, the subnet mask bits reveal the network ID is 172.24.188.0 and broadcast address is 172.24.188.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2600 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "520.00 ms",
      "26.00 ms",
      "56.50 ms",
      "52.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2600 bits / (50 * 1000 bps) = 52.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.196.37.1 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.196.37.0",
      "10.196.37.255",
      "10.196.37.0",
      "10.196.38.0"
    ],
    "answer": 1,
    "explanation": "For host 10.196.37.1/24, the subnet mask bits reveal the network ID is 10.196.37.0 and broadcast address is 10.196.37.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4500 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "11.25 ms",
      "27.00 ms",
      "225.00 ms",
      "22.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4500 bits / (200 * 1000 bps) = 22.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.144.93 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.144.96",
      "192.168.145.64",
      "192.168.144.32",
      "192.168.144.95"
    ],
    "answer": 3,
    "explanation": "For host 192.168.144.93/27, the subnet mask bits reveal the network ID is 192.168.144.64 and broadcast address is 192.168.144.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.205.163 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.205.192",
      "172.17.205.191",
      "172.17.206.128",
      "172.17.205.64"
    ],
    "answer": 1,
    "explanation": "For host 172.17.205.163/26, the subnet mask bits reveal the network ID is 172.17.205.128 and broadcast address is 172.17.205.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1010 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "32.320 ms",
      "193.920 ms",
      "141.780 ms",
      "129.280 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1010 * 1024 * 8) / (64 * 10^6) = 129.280 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5800 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "5800.00 ms",
      "580.00 ms",
      "290.00 ms",
      "584.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5800 bits / (10 * 1000 bps) = 580.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.233.184.229 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.233.185.0",
      "10.233.184.0",
      "10.233.185.255",
      "10.233.184.0"
    ],
    "answer": 2,
    "explanation": "For host 10.233.184.229/23, the subnet mask bits reveal the network ID is 10.233.184.0 and broadcast address is 10.233.185.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4260 KB over a point-to-point network link with transmission bandwidth rate of 100 Mbps. What is the theoretical transmission delay?",
    "options": [
      "348.979 ms",
      "361.479 ms",
      "87.245 ms",
      "523.469 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4260 * 1024 * 8) / (100 * 10^6) = 348.979 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "89.50 ms",
      "850.00 ms",
      "85.00 ms",
      "42.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1700 bits / (20 * 1000 bps) = 85.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2310 KB over a point-to-point network link with transmission bandwidth rate of 48 Mbps. What is the theoretical transmission delay?",
    "options": [
      "406.740 ms",
      "98.560 ms",
      "394.240 ms",
      "591.360 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2310 * 1024 * 8) / (48 * 10^6) = 394.240 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4810 KB over a point-to-point network link with transmission bandwidth rate of 18 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3283.627 ms",
      "2189.084 ms",
      "547.271 ms",
      "2201.584 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4810 * 1024 * 8) / (18 * 10^6) = 2189.084 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.163.2.131 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.163.2.0",
      "10.163.2.255",
      "10.163.2.0",
      "10.163.3.128"
    ],
    "answer": 1,
    "explanation": "For host 10.163.2.131/25, the subnet mask bits reveal the network ID is 10.163.2.128 and broadcast address is 10.163.2.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.87.83.55 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.87.84.0",
      "255.255.255.255",
      "255.255.255.255",
      "10.87.83.0"
    ],
    "answer": 3,
    "explanation": "For host 10.87.83.55/24, the subnet mask bits reveal the network ID is 10.87.83.0 and broadcast address is 10.87.83.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.232.179 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.232.192",
      "192.168.232.128",
      "192.168.232.191",
      "192.168.233.160"
    ],
    "answer": 2,
    "explanation": "For host 192.168.232.179/27, the subnet mask bits reveal the network ID is 192.168.232.160 and broadcast address is 192.168.232.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2860 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "366.080 ms",
      "1464.320 ms",
      "2196.480 ms",
      "1476.820 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2860 * 1024 * 8) / (16 * 10^6) = 1464.320 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2450 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "251.433 ms",
      "358.400 ms",
      "59.733 ms",
      "238.933 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2450 * 1024 * 8) / (84 * 10^6) = 238.933 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2950 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "2950.00 ms",
      "147.50 ms",
      "299.50 ms",
      "295.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2950 bits / (10 * 1000 bps) = 295.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.48.132 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.49.0",
      "172.25.48.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.25.48.132/24, the subnet mask bits reveal the network ID is 172.25.48.0 and broadcast address is 172.25.48.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2560 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1410.601 ms",
      "2097.152 ms",
      "1398.101 ms",
      "349.525 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2560 * 1024 * 8) / (15 * 10^6) = 1398.101 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.17.37.233 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.17.38.232",
      "10.17.37.236",
      "10.17.37.232",
      "10.17.37.228"
    ],
    "answer": 2,
    "explanation": "For host 10.17.37.233/30, the subnet mask bits reveal the network ID is 10.17.37.232 and broadcast address is 10.17.37.235."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "8.00 ms",
      "80.00 ms",
      "4.00 ms",
      "12.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4000 bits / (500 * 1000 bps) = 8.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.97.158 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.22.97.0",
      "172.22.97.0",
      "172.22.98.128",
      "172.22.97.128"
    ],
    "answer": 3,
    "explanation": "For host 172.22.97.158/25, the subnet mask bits reveal the network ID is 172.22.97.128 and broadcast address is 172.22.97.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.78.25 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.30.78.0",
      "172.30.79.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.30.78.25/23, the subnet mask bits reveal the network ID is 172.30.78.0 and broadcast address is 172.30.79.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2470 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "297.489 ms",
      "284.989 ms",
      "427.484 ms",
      "71.247 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2470 * 1024 * 8) / (71 * 10^6) = 284.989 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.68.89 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.31.68.80",
      "172.31.69.88",
      "172.31.68.96",
      "172.31.68.88"
    ],
    "answer": 3,
    "explanation": "For host 172.31.68.89/29, the subnet mask bits reveal the network ID is 172.31.68.88 and broadcast address is 172.31.68.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4770 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5582.263 ms",
      "8373.394 ms",
      "1395.566 ms",
      "5594.763 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4770 * 1024 * 8) / (7 * 10^6) = 5582.263 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2100 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1050.00 ms",
      "52.50 ms",
      "109.50 ms",
      "105.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2100 bits / (20 * 1000 bps) = 105.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.217.102 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.217.0",
      "172.20.217.255",
      "172.20.218.0",
      "172.20.217.0"
    ],
    "answer": 1,
    "explanation": "For host 172.20.217.102/24, the subnet mask bits reveal the network ID is 172.20.217.0 and broadcast address is 172.20.217.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.82.165 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.18.82.176",
      "172.18.82.144",
      "172.18.82.175",
      "172.18.83.160"
    ],
    "answer": 2,
    "explanation": "For host 172.18.82.165/28, the subnet mask bits reveal the network ID is 172.18.82.160 and broadcast address is 172.18.82.175."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4700 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "798.263 ms",
      "785.763 ms",
      "196.441 ms",
      "1178.645 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4700 * 1024 * 8) / (49 * 10^6) = 785.763 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5150 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.15 ms",
      "103.00 ms",
      "14.80 ms",
      "10.30 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5150 bits / (500 * 1000 bps) = 10.30 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.20 ms",
      "14.90 ms",
      "104.00 ms",
      "10.40 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5200 bits / (500 * 1000 bps) = 10.40 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4650 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "93.00 ms",
      "9.30 ms",
      "4.65 ms",
      "13.80 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4650 bits / (500 * 1000 bps) = 9.30 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "72.50 ms",
      "3.63 ms",
      "11.75 ms",
      "7.25 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1450 bits / (200 * 1000 bps) = 7.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1430 KB over a point-to-point network link with transmission bandwidth rate of 55 Mbps. What is the theoretical transmission delay?",
    "options": [
      "53.248 ms",
      "319.488 ms",
      "212.992 ms",
      "225.492 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1430 * 1024 * 8) / (55 * 10^6) = 212.992 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 820 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "81.920 ms",
      "122.880 ms",
      "94.420 ms",
      "20.480 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (820 * 1024 * 8) / (82 * 10^6) = 81.920 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.3.64.131 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.3.64.0",
      "10.3.65.0",
      "10.3.64.0",
      "10.3.67.255"
    ],
    "answer": 3,
    "explanation": "For host 10.3.64.131/22, the subnet mask bits reveal the network ID is 10.3.64.0 and broadcast address is 10.3.67.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4160 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "694.074 ms",
      "170.394 ms",
      "681.574 ms",
      "1022.362 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4160 * 1024 * 8) / (50 * 10^6) = 681.574 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.20.177.69 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.20.178.64",
      "10.20.177.0",
      "10.20.177.128",
      "10.20.177.64"
    ],
    "answer": 3,
    "explanation": "For host 10.20.177.69/26, the subnet mask bits reveal the network ID is 10.20.177.64 and broadcast address is 10.20.177.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4190 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1029.734 ms",
      "686.490 ms",
      "171.622 ms",
      "698.990 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4190 * 1024 * 8) / (50 * 10^6) = 686.490 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.133.42 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.133.0",
      "192.168.133.0",
      "192.168.134.0",
      "192.168.132.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.133.42/22, the subnet mask bits reveal the network ID is 192.168.132.0 and broadcast address is 192.168.135.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4400 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "224.50 ms",
      "110.00 ms",
      "220.00 ms",
      "2200.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4400 bits / (20 * 1000 bps) = 220.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.167.128.235 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.167.128.236",
      "10.167.128.228",
      "10.167.129.232",
      "10.167.128.235"
    ],
    "answer": 3,
    "explanation": "For host 10.167.128.235/30, the subnet mask bits reveal the network ID is 10.167.128.232 and broadcast address is 10.167.128.235."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.191.204.95 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.191.204.95",
      "10.191.205.88",
      "10.191.204.96",
      "10.191.204.80"
    ],
    "answer": 0,
    "explanation": "For host 10.191.204.95/29, the subnet mask bits reveal the network ID is 10.191.204.88 and broadcast address is 10.191.204.95."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5400 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.40 ms",
      "10.80 ms",
      "108.00 ms",
      "15.30 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5400 bits / (500 * 1000 bps) = 10.80 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.226.159 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.226.152",
      "172.26.227.152",
      "172.26.226.160",
      "172.26.226.144"
    ],
    "answer": 0,
    "explanation": "For host 172.26.226.159/29, the subnet mask bits reveal the network ID is 172.26.226.152 and broadcast address is 172.26.226.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3730 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2546.347 ms",
      "15278.080 ms",
      "10197.887 ms",
      "10185.387 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3730 * 1024 * 8) / (3 * 10^6) = 10185.387 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.86.154 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.86.0",
      "172.17.87.128",
      "172.17.86.255",
      "172.17.86.0"
    ],
    "answer": 2,
    "explanation": "For host 172.17.86.154/25, the subnet mask bits reveal the network ID is 172.17.86.128 and broadcast address is 172.17.86.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.130.197 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "192.168.130.0",
      "192.168.131.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.130.197/24, the subnet mask bits reveal the network ID is 192.168.130.0 and broadcast address is 192.168.130.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.213.157 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.213.0",
      "192.168.214.0",
      "192.168.213.0",
      "192.168.212.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.213.157/23, the subnet mask bits reveal the network ID is 192.168.212.0 and broadcast address is 192.168.213.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1550 KB over a point-to-point network link with transmission bandwidth rate of 43 Mbps. What is the theoretical transmission delay?",
    "options": [
      "307.793 ms",
      "442.940 ms",
      "295.293 ms",
      "73.823 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1550 * 1024 * 8) / (43 * 10^6) = 295.293 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.227.195 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.228.0",
      "172.24.227.0",
      "172.24.224.0",
      "172.24.227.0"
    ],
    "answer": 2,
    "explanation": "For host 172.24.227.195/22, the subnet mask bits reveal the network ID is 172.24.224.0 and broadcast address is 172.24.227.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.62.3 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.27.62.4",
      "172.27.63.0",
      "172.27.62.0",
      "172.27.62.3"
    ],
    "answer": 3,
    "explanation": "For host 172.27.62.3/30, the subnet mask bits reveal the network ID is 172.27.62.0 and broadcast address is 172.27.62.3."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2520 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "436.137 ms",
      "303.258 ms",
      "290.758 ms",
      "72.690 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2520 * 1024 * 8) / (71 * 10^6) = 290.758 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3980 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "105.858 ms",
      "635.146 ms",
      "435.931 ms",
      "423.431 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3980 * 1024 * 8) / (77 * 10^6) = 423.431 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.57.20.60 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.57.20.0",
      "10.57.20.128",
      "10.57.20.127",
      "10.57.21.0"
    ],
    "answer": 2,
    "explanation": "For host 10.57.20.60/25, the subnet mask bits reveal the network ID is 10.57.20.0 and broadcast address is 10.57.20.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3230 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "254.425 ms",
      "1017.698 ms",
      "1526.548 ms",
      "1030.198 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3230 * 1024 * 8) / (26 * 10^6) = 1017.698 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4800 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "14.10 ms",
      "4.80 ms",
      "9.60 ms",
      "96.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4800 bits / (500 * 1000 bps) = 9.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2900 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "29.00 ms",
      "580.00 ms",
      "62.50 ms",
      "58.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2900 bits / (50 * 1000 bps) = 58.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.109.54.11 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.109.54.0",
      "10.109.55.0",
      "255.255.255.255",
      "10.109.54.64"
    ],
    "answer": 0,
    "explanation": "For host 10.109.54.11/26, the subnet mask bits reveal the network ID is 10.109.54.0 and broadcast address is 10.109.54.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "57.50 ms",
      "530.00 ms",
      "26.50 ms",
      "53.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2650 bits / (50 * 1000 bps) = 53.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2600 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "384.925 ms",
      "64.154 ms",
      "256.617 ms",
      "269.117 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2600 * 1024 * 8) / (83 * 10^6) = 256.617 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3350 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "339.50 ms",
      "3350.00 ms",
      "335.00 ms",
      "167.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3350 bits / (10 * 1000 bps) = 335.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1270 KB over a point-to-point network link with transmission bandwidth rate of 35 Mbps. What is the theoretical transmission delay?",
    "options": [
      "309.753 ms",
      "74.313 ms",
      "297.253 ms",
      "445.879 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1270 * 1024 * 8) / (35 * 10^6) = 297.253 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.172.222 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.172.0",
      "192.168.172.0",
      "192.168.173.128",
      "192.168.172.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.172.222/25, the subnet mask bits reveal the network ID is 192.168.172.128 and broadcast address is 192.168.172.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.175.30.168 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.175.30.64",
      "10.175.31.128",
      "10.175.30.191",
      "10.175.30.192"
    ],
    "answer": 2,
    "explanation": "For host 10.175.30.168/26, the subnet mask bits reveal the network ID is 10.175.30.128 and broadcast address is 10.175.30.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3850 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "77.00 ms",
      "81.50 ms",
      "38.50 ms",
      "770.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3850 bits / (50 * 1000 bps) = 77.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 930 KB over a point-to-point network link with transmission bandwidth rate of 28 Mbps. What is the theoretical transmission delay?",
    "options": [
      "284.591 ms",
      "68.023 ms",
      "408.137 ms",
      "272.091 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (930 * 1024 * 8) / (28 * 10^6) = 272.091 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.182.104.155 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.182.104.0",
      "255.255.255.255",
      "255.255.255.255",
      "10.182.105.0"
    ],
    "answer": 0,
    "explanation": "For host 10.182.104.155/23, the subnet mask bits reveal the network ID is 10.182.104.0 and broadcast address is 10.182.105.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "77.00 ms",
      "72.50 ms",
      "36.25 ms",
      "725.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1450 bits / (20 * 1000 bps) = 72.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3660 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4997.120 ms",
      "3331.413 ms",
      "832.853 ms",
      "3343.913 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3660 * 1024 * 8) / (9 * 10^6) = 3331.413 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "117.50 ms",
      "235.00 ms",
      "239.50 ms",
      "2350.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4700 bits / (20 * 1000 bps) = 235.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.196.68 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.17.196.128",
      "172.17.197.64",
      "172.17.196.0",
      "172.17.196.64"
    ],
    "answer": 3,
    "explanation": "For host 172.17.196.68/26, the subnet mask bits reveal the network ID is 172.17.196.64 and broadcast address is 172.17.196.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.74.80.218 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.74.81.0",
      "10.74.80.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 10.74.80.218/24, the subnet mask bits reveal the network ID is 10.74.80.0 and broadcast address is 10.74.80.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1900 KB over a point-to-point network link with transmission bandwidth rate of 69 Mbps. What is the theoretical transmission delay?",
    "options": [
      "238.077 ms",
      "338.365 ms",
      "56.394 ms",
      "225.577 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1900 * 1024 * 8) / (69 * 10^6) = 225.577 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.60.154 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.61.152",
      "172.17.60.148",
      "172.17.60.155",
      "172.17.60.156"
    ],
    "answer": 2,
    "explanation": "For host 172.17.60.154/30, the subnet mask bits reveal the network ID is 172.17.60.152 and broadcast address is 172.17.60.155."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3260 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "412.978 ms",
      "287.819 ms",
      "68.830 ms",
      "275.319 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3260 * 1024 * 8) / (97 * 10^6) = 275.319 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.214.69 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.215.64",
      "192.168.214.79",
      "192.168.214.48",
      "192.168.214.80"
    ],
    "answer": 1,
    "explanation": "For host 192.168.214.69/28, the subnet mask bits reveal the network ID is 192.168.214.64 and broadcast address is 192.168.214.79."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2750 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "137.50 ms",
      "68.75 ms",
      "1375.00 ms",
      "142.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2750 bits / (20 * 1000 bps) = 137.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 190 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "29.553 ms",
      "32.202 ms",
      "19.702 ms",
      "4.926 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (190 * 1024 * 8) / (79 * 10^6) = 19.702 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1680 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "822.062 ms",
      "202.391 ms",
      "809.562 ms",
      "1214.344 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1680 * 1024 * 8) / (17 * 10^6) = 809.562 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2810 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "742.565 ms",
      "1113.848 ms",
      "185.641 ms",
      "755.065 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2810 * 1024 * 8) / (31 * 10^6) = 742.565 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4900 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "29.00 ms",
      "24.50 ms",
      "245.00 ms",
      "12.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4900 bits / (200 * 1000 bps) = 24.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2430 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "395.318 ms",
      "382.818 ms",
      "574.228 ms",
      "95.705 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2430 * 1024 * 8) / (52 * 10^6) = 382.818 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4350 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2813.305 ms",
      "1888.037 ms",
      "1875.537 ms",
      "468.884 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4350 * 1024 * 8) / (19 * 10^6) = 1875.537 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1290 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "440.320 ms",
      "2641.920 ms",
      "1761.280 ms",
      "1773.780 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1290 * 1024 * 8) / (6 * 10^6) = 1761.280 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.133.148.235 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.133.149.232",
      "10.133.148.240",
      "10.133.148.232",
      "10.133.148.224"
    ],
    "answer": 2,
    "explanation": "For host 10.133.148.235/29, the subnet mask bits reveal the network ID is 10.133.148.232 and broadcast address is 10.133.148.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.205.83 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.205.64",
      "192.168.205.0",
      "192.168.205.128",
      "192.168.206.64"
    ],
    "answer": 0,
    "explanation": "For host 192.168.205.83/26, the subnet mask bits reveal the network ID is 192.168.205.64 and broadcast address is 192.168.205.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3550 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "8.88 ms",
      "177.50 ms",
      "22.25 ms",
      "17.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3550 bits / (200 * 1000 bps) = 17.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5150 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "51.50 ms",
      "103.00 ms",
      "1030.00 ms",
      "107.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5150 bits / (50 * 1000 bps) = 103.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4370 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "509.709 ms",
      "745.813 ms",
      "497.209 ms",
      "124.302 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4370 * 1024 * 8) / (72 * 10^6) = 497.209 ms."
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
    "question": "An interface is configured with host IP address 192.168.32.2 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.32.0",
      "255.255.255.255",
      "192.168.33.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.32.2/23, the subnet mask bits reveal the network ID is 192.168.32.0 and broadcast address is 192.168.33.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 250 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "101.543 ms",
      "89.043 ms",
      "133.565 ms",
      "22.261 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (250 * 1024 * 8) / (23 * 10^6) = 89.043 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3000 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "64.50 ms",
      "30.00 ms",
      "600.00 ms",
      "60.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3000 bits / (50 * 1000 bps) = 60.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.70.110 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.70.127",
      "172.20.70.128",
      "172.20.71.96",
      "172.20.70.64"
    ],
    "answer": 0,
    "explanation": "For host 172.20.70.110/27, the subnet mask bits reveal the network ID is 172.20.70.96 and broadcast address is 172.20.70.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.127.243.78 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.127.243.0",
      "10.127.243.0",
      "10.127.240.0",
      "10.127.244.0"
    ],
    "answer": 2,
    "explanation": "For host 10.127.243.78/22, the subnet mask bits reveal the network ID is 10.127.240.0 and broadcast address is 10.127.243.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3320 KB over a point-to-point network link with transmission bandwidth rate of 20 Mbps. What is the theoretical transmission delay?",
    "options": [
      "339.968 ms",
      "1372.372 ms",
      "2039.808 ms",
      "1359.872 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3320 * 1024 * 8) / (20 * 10^6) = 1359.872 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4910 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "122.630 ms",
      "735.781 ms",
      "490.521 ms",
      "503.021 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4910 * 1024 * 8) / (82 * 10^6) = 490.521 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "292.50 ms",
      "589.50 ms",
      "5850.00 ms",
      "585.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5850 bits / (10 * 1000 bps) = 585.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1290 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "406.449 ms",
      "609.674 ms",
      "101.612 ms",
      "418.949 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1290 * 1024 * 8) / (26 * 10^6) = 406.449 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1550 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "15.50 ms",
      "31.00 ms",
      "310.00 ms",
      "35.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1550 bits / (50 * 1000 bps) = 31.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4650 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "97.50 ms",
      "93.00 ms",
      "46.50 ms",
      "930.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4650 bits / (50 * 1000 bps) = 93.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.80 ms",
      "9.30 ms",
      "2.40 ms",
      "48.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2400 bits / (500 * 1000 bps) = 4.80 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2920 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "488.176 ms",
      "122.044 ms",
      "500.676 ms",
      "732.264 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2920 * 1024 * 8) / (49 * 10^6) = 488.176 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.159.206.94 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.159.206.0",
      "10.159.204.0",
      "10.159.206.0",
      "10.159.207.0"
    ],
    "answer": 1,
    "explanation": "For host 10.159.206.94/22, the subnet mask bits reveal the network ID is 10.159.204.0 and broadcast address is 10.159.207.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.120.102 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.120.80",
      "192.168.121.96",
      "192.168.120.111",
      "192.168.120.112"
    ],
    "answer": 2,
    "explanation": "For host 192.168.120.102/28, the subnet mask bits reveal the network ID is 192.168.120.96 and broadcast address is 192.168.120.111."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2600 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "30.50 ms",
      "260.00 ms",
      "13.00 ms",
      "26.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2600 bits / (100 * 1000 bps) = 26.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1660 KB over a point-to-point network link with transmission bandwidth rate of 88 Mbps. What is the theoretical transmission delay?",
    "options": [
      "38.633 ms",
      "154.531 ms",
      "231.796 ms",
      "167.031 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1660 * 1024 * 8) / (88 * 10^6) = 154.531 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 240 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "73.728 ms",
      "49.152 ms",
      "61.652 ms",
      "12.288 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (240 * 1024 * 8) / (40 * 10^6) = 49.152 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.73.196.251 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.73.196.0",
      "10.73.197.128",
      "10.73.196.255",
      "10.73.196.0"
    ],
    "answer": 2,
    "explanation": "For host 10.73.196.251/25, the subnet mask bits reveal the network ID is 10.73.196.128 and broadcast address is 10.73.196.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2500 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "9.50 ms",
      "50.00 ms",
      "2.50 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2500 bits / (500 * 1000 bps) = 5.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.166.222.56 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.166.222.0",
      "10.166.223.0",
      "10.166.222.128"
    ],
    "answer": 1,
    "explanation": "For host 10.166.222.56/25, the subnet mask bits reveal the network ID is 10.166.222.0 and broadcast address is 10.166.222.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "41.25 ms",
      "87.00 ms",
      "825.00 ms",
      "82.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1650 bits / (20 * 1000 bps) = 82.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.158.216 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.159.208",
      "172.20.158.224",
      "172.20.158.192",
      "172.20.158.223"
    ],
    "answer": 3,
    "explanation": "For host 172.20.158.216/28, the subnet mask bits reveal the network ID is 172.20.158.208 and broadcast address is 172.20.158.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4550 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "45.50 ms",
      "91.00 ms",
      "910.00 ms",
      "95.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4550 bits / (50 * 1000 bps) = 91.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3250 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "650.00 ms",
      "32.50 ms",
      "65.00 ms",
      "69.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3250 bits / (50 * 1000 bps) = 65.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.109.151.16 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.109.152.16",
      "10.109.151.0",
      "10.109.151.31",
      "10.109.151.32"
    ],
    "answer": 2,
    "explanation": "For host 10.109.151.16/28, the subnet mask bits reveal the network ID is 10.109.151.16 and broadcast address is 10.109.151.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1350 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "11.25 ms",
      "67.50 ms",
      "3.38 ms",
      "6.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1350 bits / (200 * 1000 bps) = 6.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1230 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "787.589 ms",
      "775.089 ms",
      "1162.634 ms",
      "193.772 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1230 * 1024 * 8) / (13 * 10^6) = 775.089 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.45.133 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.18.45.136",
      "172.18.45.135",
      "172.18.46.132",
      "172.18.45.128"
    ],
    "answer": 1,
    "explanation": "For host 172.18.45.133/30, the subnet mask bits reveal the network ID is 172.18.45.132 and broadcast address is 172.18.45.135."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 700 KB over a point-to-point network link with transmission bandwidth rate of 29 Mbps. What is the theoretical transmission delay?",
    "options": [
      "49.434 ms",
      "296.607 ms",
      "210.238 ms",
      "197.738 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (700 * 1024 * 8) / (29 * 10^6) = 197.738 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1290 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "932.442 ms",
      "621.628 ms",
      "155.407 ms",
      "634.128 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1290 * 1024 * 8) / (17 * 10^6) = 621.628 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1990 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2729.513 ms",
      "2717.013 ms",
      "679.253 ms",
      "4075.520 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1990 * 1024 * 8) / (6 * 10^6) = 2717.013 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1420 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "581.632 ms",
      "3489.792 ms",
      "2339.028 ms",
      "2326.528 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1420 * 1024 * 8) / (5 * 10^6) = 2326.528 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "54.50 ms",
      "25.00 ms",
      "500.00 ms",
      "50.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5000 bits / (100 * 1000 bps) = 50.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3680 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "541.387 ms",
      "793.331 ms",
      "528.887 ms",
      "132.222 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3680 * 1024 * 8) / (57 * 10^6) = 528.887 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1100 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "5.50 ms",
      "15.50 ms",
      "11.00 ms",
      "110.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1100 bits / (100 * 1000 bps) = 11.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.89.164 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.89.0",
      "172.26.89.0",
      "172.26.88.0",
      "172.26.90.0"
    ],
    "answer": 2,
    "explanation": "For host 172.26.89.164/22, the subnet mask bits reveal the network ID is 172.26.88.0 and broadcast address is 172.26.91.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 490 KB over a point-to-point network link with transmission bandwidth rate of 100 Mbps. What is the theoretical transmission delay?",
    "options": [
      "40.141 ms",
      "60.211 ms",
      "10.035 ms",
      "52.641 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (490 * 1024 * 8) / (100 * 10^6) = 40.141 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3900 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "106.496 ms",
      "638.976 ms",
      "438.484 ms",
      "425.984 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3900 * 1024 * 8) / (75 * 10^6) = 425.984 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2270 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "236.546 ms",
      "56.012 ms",
      "336.069 ms",
      "224.046 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2270 * 1024 * 8) / (83 * 10^6) = 224.046 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4210 KB over a point-to-point network link with transmission bandwidth rate of 11 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3147.802 ms",
      "783.825 ms",
      "4702.953 ms",
      "3135.302 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4210 * 1024 * 8) / (11 * 10^6) = 3135.302 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1950 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "798.720 ms",
      "3207.380 ms",
      "3194.880 ms",
      "4792.320 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1950 * 1024 * 8) / (5 * 10^6) = 3194.880 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "15.10 ms",
      "5.30 ms",
      "10.60 ms",
      "106.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5300 bits / (500 * 1000 bps) = 10.60 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.131.135 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.18.131.255",
      "172.18.131.0",
      "172.18.132.0",
      "172.18.131.0"
    ],
    "answer": 0,
    "explanation": "For host 172.18.131.135/23, the subnet mask bits reveal the network ID is 172.18.130.0 and broadcast address is 172.18.131.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.242.133 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.242.96",
      "192.168.243.128",
      "192.168.242.128",
      "192.168.242.160"
    ],
    "answer": 2,
    "explanation": "For host 192.168.242.133/27, the subnet mask bits reveal the network ID is 192.168.242.128 and broadcast address is 192.168.242.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3620 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "190.096 ms",
      "760.386 ms",
      "772.886 ms",
      "1140.578 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3620 * 1024 * 8) / (39 * 10^6) = 760.386 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.63.164 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.63.0",
      "192.168.64.0",
      "192.168.63.255",
      "192.168.63.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.63.164/24, the subnet mask bits reveal the network ID is 192.168.63.0 and broadcast address is 192.168.63.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2690 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "306.062 ms",
      "318.562 ms",
      "459.093 ms",
      "76.516 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2690 * 1024 * 8) / (72 * 10^6) = 306.062 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.152.213.245 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "10.152.213.0",
      "10.152.214.0"
    ],
    "answer": 2,
    "explanation": "For host 10.152.213.245/24, the subnet mask bits reveal the network ID is 10.152.213.0 and broadcast address is 10.152.213.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1900 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "19.00 ms",
      "23.50 ms",
      "190.00 ms",
      "9.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1900 bits / (100 * 1000 bps) = 19.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.111.249 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.111.0",
      "172.19.111.255",
      "172.19.112.0",
      "172.19.111.0"
    ],
    "answer": 1,
    "explanation": "For host 172.19.111.249/24, the subnet mask bits reveal the network ID is 172.19.111.0 and broadcast address is 172.19.111.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2750 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "370.087 ms",
      "357.587 ms",
      "536.381 ms",
      "89.397 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2750 * 1024 * 8) / (63 * 10^6) = 357.587 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1100 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "2.75 ms",
      "5.50 ms",
      "55.00 ms",
      "10.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1100 bits / (200 * 1000 bps) = 5.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2520 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "224.390 ms",
      "897.558 ms",
      "910.058 ms",
      "1346.337 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2520 * 1024 * 8) / (23 * 10^6) = 897.558 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.61.14 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.60.0",
      "192.168.61.0",
      "192.168.62.0",
      "192.168.61.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.61.14/23, the subnet mask bits reveal the network ID is 192.168.60.0 and broadcast address is 192.168.61.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.11.136.181 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "10.11.137.0",
      "10.11.136.0"
    ],
    "answer": 3,
    "explanation": "For host 10.11.136.181/23, the subnet mask bits reveal the network ID is 10.11.136.0 and broadcast address is 10.11.137.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.193.20.151 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.193.20.128",
      "10.193.21.128",
      "10.193.20.64",
      "10.193.20.192"
    ],
    "answer": 0,
    "explanation": "For host 10.193.20.151/26, the subnet mask bits reveal the network ID is 10.193.20.128 and broadcast address is 10.193.20.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.170.169.3 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.170.169.0",
      "10.170.169.32",
      "255.255.255.255",
      "10.170.170.0"
    ],
    "answer": 0,
    "explanation": "For host 10.170.169.3/27, the subnet mask bits reveal the network ID is 10.170.169.0 and broadcast address is 10.170.169.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.168.72 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.169.72",
      "192.168.168.75",
      "192.168.168.76",
      "192.168.168.68"
    ],
    "answer": 1,
    "explanation": "For host 192.168.168.72/30, the subnet mask bits reveal the network ID is 192.168.168.72 and broadcast address is 192.168.168.75."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4210 KB over a point-to-point network link with transmission bandwidth rate of 80 Mbps. What is the theoretical transmission delay?",
    "options": [
      "646.656 ms",
      "443.604 ms",
      "431.104 ms",
      "107.776 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4210 * 1024 * 8) / (80 * 10^6) = 431.104 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5050 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "505.00 ms",
      "5050.00 ms",
      "252.50 ms",
      "509.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5050 bits / (10 * 1000 bps) = 505.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.242.44 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.25.242.0",
      "172.25.242.64",
      "172.25.243.0"
    ],
    "answer": 1,
    "explanation": "For host 172.25.242.44/26, the subnet mask bits reveal the network ID is 172.25.242.0 and broadcast address is 172.25.242.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2390 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "514.523 ms",
      "753.034 ms",
      "125.506 ms",
      "502.023 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2390 * 1024 * 8) / (39 * 10^6) = 502.023 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "2.90 ms",
      "1.45 ms",
      "29.00 ms",
      "7.40 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1450 bits / (500 * 1000 bps) = 2.90 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5400 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "1080.00 ms",
      "108.00 ms",
      "54.00 ms",
      "112.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5400 bits / (50 * 1000 bps) = 108.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5600 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "32.50 ms",
      "280.00 ms",
      "14.00 ms",
      "28.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5600 bits / (200 * 1000 bps) = 28.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.140.195.145 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.140.196.144",
      "10.140.195.147",
      "10.140.195.140",
      "10.140.195.148"
    ],
    "answer": 1,
    "explanation": "For host 10.140.195.145/30, the subnet mask bits reveal the network ID is 10.140.195.144 and broadcast address is 10.140.195.147."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1060 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "260.506 ms",
      "43.418 ms",
      "186.170 ms",
      "173.670 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1060 * 1024 * 8) / (50 * 10^6) = 173.670 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4900 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1003.520 ms",
      "250.880 ms",
      "1505.280 ms",
      "1016.020 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4900 * 1024 * 8) / (40 * 10^6) = 1003.520 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3300 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "297.073 ms",
      "74.268 ms",
      "309.573 ms",
      "445.609 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3300 * 1024 * 8) / (91 * 10^6) = 297.073 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "20.00 ms",
      "6.50 ms",
      "1.00 ms",
      "2.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1000 bits / (500 * 1000 bps) = 2.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2200 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.40 ms",
      "2.20 ms",
      "44.00 ms",
      "8.90 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2200 bits / (500 * 1000 bps) = 4.40 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.138.251 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.25.138.255",
      "172.25.138.0",
      "172.25.139.128",
      "172.25.138.0"
    ],
    "answer": 0,
    "explanation": "For host 172.25.138.251/25, the subnet mask bits reveal the network ID is 172.25.138.128 and broadcast address is 172.25.138.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4650 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "46.50 ms",
      "23.25 ms",
      "51.00 ms",
      "465.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4650 bits / (100 * 1000 bps) = 46.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2620 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "335.360 ms",
      "347.860 ms",
      "503.040 ms",
      "83.840 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2620 * 1024 * 8) / (64 * 10^6) = 335.360 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4850 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "382.031 ms",
      "1528.123 ms",
      "1540.623 ms",
      "2292.185 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4850 * 1024 * 8) / (26 * 10^6) = 1528.123 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.102.4.72 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.102.4.64",
      "10.102.4.79",
      "10.102.4.80",
      "10.102.5.72"
    ],
    "answer": 1,
    "explanation": "For host 10.102.4.72/29, the subnet mask bits reveal the network ID is 10.102.4.72 and broadcast address is 10.102.4.79."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2400 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "6566.100 ms",
      "6553.600 ms",
      "1638.400 ms",
      "9830.400 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2400 * 1024 * 8) / (3 * 10^6) = 6553.600 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2090 KB over a point-to-point network link with transmission bandwidth rate of 73 Mbps. What is the theoretical transmission delay?",
    "options": [
      "234.538 ms",
      "247.038 ms",
      "58.635 ms",
      "351.807 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2090 * 1024 * 8) / (73 * 10^6) = 234.538 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.204.38.189 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.204.39.0",
      "10.204.38.0",
      "10.204.38.0",
      "10.204.39.255"
    ],
    "answer": 3,
    "explanation": "For host 10.204.38.189/22, the subnet mask bits reveal the network ID is 10.204.36.0 and broadcast address is 10.204.39.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4240 KB over a point-to-point network link with transmission bandwidth rate of 28 Mbps. What is the theoretical transmission delay?",
    "options": [
      "310.126 ms",
      "1860.754 ms",
      "1253.003 ms",
      "1240.503 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4240 * 1024 * 8) / (28 * 10^6) = 1240.503 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.129.146 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.129.128",
      "192.168.129.0",
      "192.168.129.0",
      "192.168.130.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.129.146/25, the subnet mask bits reveal the network ID is 192.168.129.128 and broadcast address is 192.168.129.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4630 KB over a point-to-point network link with transmission bandwidth rate of 29 Mbps. What is the theoretical transmission delay?",
    "options": [
      "326.974 ms",
      "1307.895 ms",
      "1961.843 ms",
      "1320.395 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4630 * 1024 * 8) / (29 * 10^6) = 1307.895 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "104.50 ms",
      "1000.00 ms",
      "50.00 ms",
      "100.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1000 bits / (10 * 1000 bps) = 100.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2500 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "359.619 ms",
      "520.678 ms",
      "347.119 ms",
      "86.780 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2500 * 1024 * 8) / (59 * 10^6) = 347.119 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.97.250.141 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.97.250.0",
      "10.97.251.0",
      "10.97.250.0",
      "10.97.248.0"
    ],
    "answer": 3,
    "explanation": "For host 10.97.250.141/22, the subnet mask bits reveal the network ID is 10.97.248.0 and broadcast address is 10.97.251.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5450 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2725.00 ms",
      "272.50 ms",
      "136.25 ms",
      "277.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5450 bits / (20 * 1000 bps) = 272.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4150 KB over a point-to-point network link with transmission bandwidth rate of 35 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1457.006 ms",
      "971.337 ms",
      "983.837 ms",
      "242.834 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4150 * 1024 * 8) / (35 * 10^6) = 971.337 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4600 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "502.443 ms",
      "514.943 ms",
      "753.664 ms",
      "125.611 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4600 * 1024 * 8) / (75 * 10^6) = 502.443 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 300 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "65.926 ms",
      "80.139 ms",
      "13.357 ms",
      "53.426 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (300 * 1024 * 8) / (46 * 10^6) = 53.426 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1400 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "197.738 ms",
      "296.607 ms",
      "210.238 ms",
      "49.434 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1400 * 1024 * 8) / (58 * 10^6) = 197.738 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.45.17.238 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.45.17.0",
      "10.45.19.255",
      "10.45.17.0",
      "10.45.18.0"
    ],
    "answer": 1,
    "explanation": "For host 10.45.17.238/22, the subnet mask bits reveal the network ID is 10.45.16.0 and broadcast address is 10.45.19.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1660 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "64.145 ms",
      "256.580 ms",
      "269.080 ms",
      "384.869 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1660 * 1024 * 8) / (53 * 10^6) = 256.580 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2300 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "46.00 ms",
      "9.10 ms",
      "2.30 ms",
      "4.60 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2300 bits / (500 * 1000 bps) = 4.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "6.63 ms",
      "13.25 ms",
      "17.75 ms",
      "132.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2650 bits / (200 * 1000 bps) = 13.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1670 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "519.190 ms",
      "126.673 ms",
      "506.690 ms",
      "760.036 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1670 * 1024 * 8) / (27 * 10^6) = 506.690 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.72.130 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.25.72.96",
      "172.25.72.159",
      "172.25.72.160",
      "172.25.73.128"
    ],
    "answer": 1,
    "explanation": "For host 172.25.72.130/27, the subnet mask bits reveal the network ID is 172.25.72.128 and broadcast address is 172.25.72.159."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1150 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "575.00 ms",
      "62.00 ms",
      "57.50 ms",
      "28.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1150 bits / (20 * 1000 bps) = 57.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "309.50 ms",
      "3050.00 ms",
      "305.00 ms",
      "152.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3050 bits / (10 * 1000 bps) = 305.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3840 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "345.684 ms",
      "358.184 ms",
      "518.527 ms",
      "86.421 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3840 * 1024 * 8) / (91 * 10^6) = 345.684 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.246.229.129 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.246.229.0",
      "10.246.230.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 10.246.229.129/24, the subnet mask bits reveal the network ID is 10.246.229.0 and broadcast address is 10.246.229.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1850 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "925.00 ms",
      "92.50 ms",
      "46.25 ms",
      "97.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1850 bits / (20 * 1000 bps) = 92.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.49.141 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.49.159",
      "192.168.49.96",
      "192.168.50.128",
      "192.168.49.160"
    ],
    "answer": 0,
    "explanation": "For host 192.168.49.141/27, the subnet mask bits reveal the network ID is 192.168.49.128 and broadcast address is 192.168.49.159."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4350 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "8.70 ms",
      "87.00 ms",
      "4.35 ms",
      "13.20 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4350 bits / (500 * 1000 bps) = 8.70 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2430 KB over a point-to-point network link with transmission bandwidth rate of 80 Mbps. What is the theoretical transmission delay?",
    "options": [
      "261.332 ms",
      "62.208 ms",
      "373.248 ms",
      "248.832 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2430 * 1024 * 8) / (80 * 10^6) = 248.832 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4100 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "751.952 ms",
      "501.301 ms",
      "513.801 ms",
      "125.325 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4100 * 1024 * 8) / (67 * 10^6) = 501.301 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.142.96 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.143.96",
      "192.168.142.103",
      "192.168.142.88",
      "192.168.142.104"
    ],
    "answer": 1,
    "explanation": "For host 192.168.142.96/29, the subnet mask bits reveal the network ID is 192.168.142.96 and broadcast address is 192.168.142.103."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3000 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "6.00 ms",
      "10.50 ms",
      "3.00 ms",
      "60.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3000 bits / (500 * 1000 bps) = 6.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 230 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "55.322 ms",
      "10.705 ms",
      "42.822 ms",
      "64.233 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (230 * 1024 * 8) / (44 * 10^6) = 42.822 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "53.00 ms",
      "26.50 ms",
      "57.50 ms",
      "530.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5300 bits / (100 * 1000 bps) = 53.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "500.00 ms",
      "50.00 ms",
      "54.50 ms",
      "25.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1000 bits / (20 * 1000 bps) = 50.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5550 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "111.00 ms",
      "1110.00 ms",
      "115.50 ms",
      "55.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5550 bits / (50 * 1000 bps) = 111.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.160.119 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.160.128",
      "192.168.160.0",
      "192.168.161.64",
      "192.168.160.64"
    ],
    "answer": 3,
    "explanation": "For host 192.168.160.119/26, the subnet mask bits reveal the network ID is 192.168.160.64 and broadcast address is 192.168.160.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4200 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2100.00 ms",
      "214.50 ms",
      "105.00 ms",
      "210.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4200 bits / (20 * 1000 bps) = 210.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.184.111.19 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.184.111.32",
      "10.184.111.0",
      "10.184.112.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 10.184.111.19/27, the subnet mask bits reveal the network ID is 10.184.111.0 and broadcast address is 10.184.111.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3940 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "820.588 ms",
      "547.059 ms",
      "559.559 ms",
      "136.765 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3940 * 1024 * 8) / (59 * 10^6) = 547.059 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4350 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "217.50 ms",
      "10.88 ms",
      "21.75 ms",
      "26.25 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4350 bits / (200 * 1000 bps) = 21.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.169.181 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.169.168",
      "192.168.169.184",
      "192.168.170.176",
      "192.168.169.183"
    ],
    "answer": 3,
    "explanation": "For host 192.168.169.181/29, the subnet mask bits reveal the network ID is 192.168.169.176 and broadcast address is 192.168.169.183."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4350 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "43.50 ms",
      "91.50 ms",
      "870.00 ms",
      "87.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4350 bits / (50 * 1000 bps) = 87.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1750 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "13.25 ms",
      "4.38 ms",
      "8.75 ms",
      "87.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1750 bits / (200 * 1000 bps) = 8.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1290 KB over a point-to-point network link with transmission bandwidth rate of 33 Mbps. What is the theoretical transmission delay?",
    "options": [
      "320.233 ms",
      "480.349 ms",
      "332.733 ms",
      "80.058 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1290 * 1024 * 8) / (33 * 10^6) = 320.233 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.28.110 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.29.96",
      "172.25.28.112",
      "172.25.28.96",
      "172.25.28.80"
    ],
    "answer": 2,
    "explanation": "For host 172.25.28.110/28, the subnet mask bits reveal the network ID is 172.25.28.96 and broadcast address is 172.25.28.111."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "7.40 ms",
      "11.90 ms",
      "74.00 ms",
      "3.70 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3700 bits / (500 * 1000 bps) = 7.40 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3060 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "737.280 ms",
      "1105.920 ms",
      "184.320 ms",
      "749.780 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3060 * 1024 * 8) / (34 * 10^6) = 737.280 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4470 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "425.793 ms",
      "638.690 ms",
      "438.293 ms",
      "106.448 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4470 * 1024 * 8) / (86 * 10^6) = 425.793 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.122.97.108 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.122.97.128",
      "10.122.97.0",
      "10.122.98.64",
      "10.122.97.64"
    ],
    "answer": 3,
    "explanation": "For host 10.122.97.108/26, the subnet mask bits reveal the network ID is 10.122.97.64 and broadcast address is 10.122.97.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1620 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "352.783 ms",
      "510.425 ms",
      "85.071 ms",
      "340.283 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1620 * 1024 * 8) / (39 * 10^6) = 340.283 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1030 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "125.937 ms",
      "138.437 ms",
      "188.905 ms",
      "31.484 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1030 * 1024 * 8) / (67 * 10^6) = 125.937 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.113.52 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.113.255",
      "192.168.114.0",
      "192.168.113.0",
      "192.168.113.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.113.52/24, the subnet mask bits reveal the network ID is 192.168.113.0 and broadcast address is 192.168.113.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3480 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "555.354 ms",
      "370.236 ms",
      "382.736 ms",
      "92.559 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3480 * 1024 * 8) / (77 * 10^6) = 370.236 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.191.222 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.191.224",
      "192.168.191.223",
      "192.168.192.216",
      "192.168.191.208"
    ],
    "answer": 1,
    "explanation": "For host 192.168.191.222/29, the subnet mask bits reveal the network ID is 192.168.191.216 and broadcast address is 192.168.191.223."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.202.128.242 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.202.128.128",
      "10.202.129.192",
      "10.202.128.0",
      "10.202.128.192"
    ],
    "answer": 3,
    "explanation": "For host 10.202.128.242/26, the subnet mask bits reveal the network ID is 10.202.128.192 and broadcast address is 10.202.128.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "282.50 ms",
      "569.50 ms",
      "565.00 ms",
      "5650.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5650 bits / (10 * 1000 bps) = 565.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.106.213 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.27.107.0",
      "172.27.106.0",
      "172.27.106.0",
      "172.27.106.255"
    ],
    "answer": 3,
    "explanation": "For host 172.27.106.213/24, the subnet mask bits reveal the network ID is 172.27.106.0 and broadcast address is 172.27.106.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.236.19 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.237.0",
      "172.19.236.0",
      "172.19.236.0",
      "172.19.237.255"
    ],
    "answer": 3,
    "explanation": "For host 172.19.236.19/23, the subnet mask bits reveal the network ID is 172.19.236.0 and broadcast address is 172.19.237.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.124.36.126 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.124.36.96",
      "10.124.36.127",
      "10.124.37.112",
      "10.124.36.128"
    ],
    "answer": 1,
    "explanation": "For host 10.124.36.126/28, the subnet mask bits reveal the network ID is 10.124.36.112 and broadcast address is 10.124.36.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.247.76 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.247.96",
      "192.168.247.95",
      "192.168.248.64",
      "192.168.247.32"
    ],
    "answer": 1,
    "explanation": "For host 192.168.247.76/27, the subnet mask bits reveal the network ID is 192.168.247.64 and broadcast address is 192.168.247.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.39.238 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.39.240",
      "192.168.39.239",
      "192.168.40.236",
      "192.168.39.232"
    ],
    "answer": 1,
    "explanation": "For host 192.168.39.238/30, the subnet mask bits reveal the network ID is 192.168.39.236 and broadcast address is 192.168.39.239."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 590 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "68.055 ms",
      "83.332 ms",
      "55.555 ms",
      "13.889 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (590 * 1024 * 8) / (87 * 10^6) = 55.555 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.182.72 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.180.0",
      "192.168.182.0",
      "192.168.183.0",
      "192.168.182.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.182.72/22, the subnet mask bits reveal the network ID is 192.168.180.0 and broadcast address is 192.168.183.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5050 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "257.00 ms",
      "126.25 ms",
      "252.50 ms",
      "2525.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5050 bits / (20 * 1000 bps) = 252.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "25.75 ms",
      "212.50 ms",
      "21.25 ms",
      "10.63 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4250 bits / (200 * 1000 bps) = 21.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2800 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "280.00 ms",
      "28.00 ms",
      "32.50 ms",
      "14.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2800 bits / (100 * 1000 bps) = 28.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.42.10.123 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.42.10.0",
      "10.42.10.255",
      "10.42.10.0",
      "10.42.11.0"
    ],
    "answer": 1,
    "explanation": "For host 10.42.10.123/24, the subnet mask bits reveal the network ID is 10.42.10.0 and broadcast address is 10.42.10.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.27.231.219 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.27.232.192",
      "10.27.231.160",
      "10.27.231.224",
      "10.27.231.192"
    ],
    "answer": 3,
    "explanation": "For host 10.27.231.219/27, the subnet mask bits reveal the network ID is 10.27.231.192 and broadcast address is 10.27.231.223."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.230.37.10 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.230.38.0",
      "10.230.37.64",
      "10.230.37.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 10.230.37.10/26, the subnet mask bits reveal the network ID is 10.230.37.0 and broadcast address is 10.230.37.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.183.70 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.184.68",
      "172.21.183.64",
      "172.21.183.72",
      "172.21.183.71"
    ],
    "answer": 3,
    "explanation": "For host 172.21.183.70/30, the subnet mask bits reveal the network ID is 172.21.183.68 and broadcast address is 172.21.183.71."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.234.204 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.234.207",
      "192.168.234.208",
      "192.168.235.204",
      "192.168.234.200"
    ],
    "answer": 0,
    "explanation": "For host 192.168.234.204/30, the subnet mask bits reveal the network ID is 192.168.234.204 and broadcast address is 192.168.234.207."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1750 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "350.00 ms",
      "39.50 ms",
      "35.00 ms",
      "17.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1750 bits / (50 * 1000 bps) = 35.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.40.148 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.40.0",
      "192.168.40.0",
      "192.168.41.128",
      "192.168.40.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.40.148/25, the subnet mask bits reveal the network ID is 192.168.40.128 and broadcast address is 192.168.40.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.35.2.56 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.35.2.0",
      "255.255.255.255",
      "10.35.3.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 10.35.2.56/23, the subnet mask bits reveal the network ID is 10.35.2.0 and broadcast address is 10.35.3.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2150 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "100.073 ms",
      "600.436 ms",
      "412.791 ms",
      "400.291 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2150 * 1024 * 8) / (44 * 10^6) = 400.291 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5950 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "59.50 ms",
      "1190.00 ms",
      "119.00 ms",
      "123.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5950 bits / (50 * 1000 bps) = 119.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4260 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "737.280 ms",
      "504.020 ms",
      "122.880 ms",
      "491.520 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4260 * 1024 * 8) / (71 * 10^6) = 491.520 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3870 KB over a point-to-point network link with transmission bandwidth rate of 4 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1981.440 ms",
      "7925.760 ms",
      "11888.640 ms",
      "7938.260 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3870 * 1024 * 8) / (4 * 10^6) = 7925.760 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.199.209.22 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.199.209.23",
      "10.199.210.16",
      "10.199.209.8",
      "10.199.209.24"
    ],
    "answer": 0,
    "explanation": "For host 10.199.209.22/29, the subnet mask bits reveal the network ID is 10.199.209.16 and broadcast address is 10.199.209.23."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.159.146 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.159.136",
      "192.168.159.152",
      "192.168.160.144",
      "192.168.159.144"
    ],
    "answer": 3,
    "explanation": "For host 192.168.159.146/29, the subnet mask bits reveal the network ID is 192.168.159.144 and broadcast address is 192.168.159.151."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2770 KB over a point-to-point network link with transmission bandwidth rate of 98 Mbps. What is the theoretical transmission delay?",
    "options": [
      "57.887 ms",
      "244.049 ms",
      "231.549 ms",
      "347.324 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2770 * 1024 * 8) / (98 * 10^6) = 231.549 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1920 KB over a point-to-point network link with transmission bandwidth rate of 20 Mbps. What is the theoretical transmission delay?",
    "options": [
      "798.932 ms",
      "1179.648 ms",
      "786.432 ms",
      "196.608 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1920 * 1024 * 8) / (20 * 10^6) = 786.432 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "104.00 ms",
      "108.50 ms",
      "1040.00 ms",
      "52.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5200 bits / (50 * 1000 bps) = 104.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.111.143 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.111.0",
      "192.168.111.0",
      "192.168.112.0",
      "192.168.110.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.111.143/23, the subnet mask bits reveal the network ID is 192.168.110.0 and broadcast address is 192.168.111.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.242.248 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "192.168.243.0",
      "192.168.242.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.242.248/23, the subnet mask bits reveal the network ID is 192.168.242.0 and broadcast address is 192.168.243.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.191.192 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.19.191.0",
      "172.19.191.0",
      "172.19.192.0",
      "172.19.190.0"
    ],
    "answer": 3,
    "explanation": "For host 172.19.191.192/23, the subnet mask bits reveal the network ID is 172.19.190.0 and broadcast address is 172.19.191.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.174.143 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.175.0",
      "255.255.255.255",
      "192.168.174.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.174.143/23, the subnet mask bits reveal the network ID is 192.168.174.0 and broadcast address is 192.168.175.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4860 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "615.729 ms",
      "150.807 ms",
      "904.844 ms",
      "603.229 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4860 * 1024 * 8) / (66 * 10^6) = 603.229 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.118.194 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.116.0",
      "192.168.118.0",
      "192.168.118.0",
      "192.168.119.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.118.194/22, the subnet mask bits reveal the network ID is 192.168.116.0 and broadcast address is 192.168.119.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.46.202 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.46.0",
      "172.26.46.0",
      "172.26.46.255",
      "172.26.47.128"
    ],
    "answer": 2,
    "explanation": "For host 172.26.46.202/25, the subnet mask bits reveal the network ID is 172.26.46.128 and broadcast address is 172.26.46.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.67.70.131 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "10.67.70.0",
      "10.67.71.0"
    ],
    "answer": 2,
    "explanation": "For host 10.67.70.131/23, the subnet mask bits reveal the network ID is 10.67.70.0 and broadcast address is 10.67.71.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5050 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "25.25 ms",
      "50.50 ms",
      "505.00 ms",
      "55.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5050 bits / (100 * 1000 bps) = 50.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "36.00 ms",
      "72.00 ms",
      "76.50 ms",
      "720.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3600 bits / (50 * 1000 bps) = 72.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1140 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "108.592 ms",
      "121.092 ms",
      "162.887 ms",
      "27.148 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1140 * 1024 * 8) / (86 * 10^6) = 108.592 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4960 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "459.009 ms",
      "111.627 ms",
      "669.764 ms",
      "446.509 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4960 * 1024 * 8) / (91 * 10^6) = 446.509 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 860 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "182.201 ms",
      "30.367 ms",
      "133.968 ms",
      "121.468 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (860 * 1024 * 8) / (58 * 10^6) = 121.468 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 790 KB over a point-to-point network link with transmission bandwidth rate of 54 Mbps. What is the theoretical transmission delay?",
    "options": [
      "179.769 ms",
      "132.346 ms",
      "29.961 ms",
      "119.846 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (790 * 1024 * 8) / (54 * 10^6) = 119.846 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1710 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "538.782 ms",
      "808.172 ms",
      "134.695 ms",
      "551.282 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1710 * 1024 * 8) / (26 * 10^6) = 538.782 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3500 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "350.00 ms",
      "354.50 ms",
      "175.00 ms",
      "3500.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3500 bits / (10 * 1000 bps) = 350.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.140.125 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.140.0",
      "192.168.140.0",
      "192.168.141.255",
      "192.168.141.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.140.125/23, the subnet mask bits reveal the network ID is 192.168.140.0 and broadcast address is 192.168.141.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2250 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "117.00 ms",
      "112.50 ms",
      "56.25 ms",
      "1125.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2250 bits / (20 * 1000 bps) = 112.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.54.138 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.54.0",
      "172.16.54.255",
      "172.16.55.0",
      "172.16.54.0"
    ],
    "answer": 1,
    "explanation": "For host 172.16.54.138/24, the subnet mask bits reveal the network ID is 172.16.54.0 and broadcast address is 172.16.54.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.136.184 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.29.136.160",
      "172.29.136.192",
      "172.29.136.176",
      "172.29.137.176"
    ],
    "answer": 2,
    "explanation": "For host 172.29.136.184/28, the subnet mask bits reveal the network ID is 172.29.136.176 and broadcast address is 172.29.136.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.27.225.199 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.27.225.192",
      "10.27.225.184",
      "10.27.226.192",
      "10.27.225.200"
    ],
    "answer": 0,
    "explanation": "For host 10.27.225.199/29, the subnet mask bits reveal the network ID is 10.27.225.192 and broadcast address is 10.27.225.199."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2390 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1276.883 ms",
      "863.756 ms",
      "212.814 ms",
      "851.256 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2390 * 1024 * 8) / (23 * 10^6) = 851.256 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.122.22 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.17.122.0",
      "255.255.255.255",
      "172.17.123.0"
    ],
    "answer": 1,
    "explanation": "For host 172.17.122.22/23, the subnet mask bits reveal the network ID is 172.17.122.0 and broadcast address is 172.17.123.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.218.254 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.219.0",
      "172.24.216.0",
      "172.24.218.0",
      "172.24.218.0"
    ],
    "answer": 1,
    "explanation": "For host 172.24.218.254/22, the subnet mask bits reveal the network ID is 172.24.216.0 and broadcast address is 172.24.219.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1740 KB over a point-to-point network link with transmission bandwidth rate of 48 Mbps. What is the theoretical transmission delay?",
    "options": [
      "445.440 ms",
      "74.240 ms",
      "309.460 ms",
      "296.960 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1740 * 1024 * 8) / (48 * 10^6) = 296.960 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4760 KB over a point-to-point network link with transmission bandwidth rate of 76 Mbps. What is the theoretical transmission delay?",
    "options": [
      "128.269 ms",
      "525.578 ms",
      "769.617 ms",
      "513.078 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4760 * 1024 * 8) / (76 * 10^6) = 513.078 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1340 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "261.364 ms",
      "392.046 ms",
      "65.341 ms",
      "273.864 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1340 * 1024 * 8) / (42 * 10^6) = 261.364 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4420 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "101.710 ms",
      "419.339 ms",
      "406.839 ms",
      "610.258 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4420 * 1024 * 8) / (89 * 10^6) = 406.839 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4050 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "85.50 ms",
      "40.50 ms",
      "81.00 ms",
      "810.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4050 bits / (50 * 1000 bps) = 81.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 260 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "44.998 ms",
      "29.999 ms",
      "42.499 ms",
      "7.500 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (260 * 1024 * 8) / (71 * 10^6) = 29.999 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1900 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1729.422 ms",
      "1741.922 ms",
      "432.356 ms",
      "2594.133 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1900 * 1024 * 8) / (9 * 10^6) = 1729.422 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 710 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "484.693 ms",
      "497.193 ms",
      "727.040 ms",
      "121.173 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (710 * 1024 * 8) / (12 * 10^6) = 484.693 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4320 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "170.142 ms",
      "693.066 ms",
      "1020.849 ms",
      "680.566 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4320 * 1024 * 8) / (52 * 10^6) = 680.566 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.45.48 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.46.48",
      "192.168.45.32",
      "192.168.45.64",
      "192.168.45.63"
    ],
    "answer": 3,
    "explanation": "For host 192.168.45.48/28, the subnet mask bits reveal the network ID is 192.168.45.48 and broadcast address is 192.168.45.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.167.27 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.167.0",
      "172.26.168.0",
      "172.26.167.255",
      "172.26.167.0"
    ],
    "answer": 2,
    "explanation": "For host 172.26.167.27/24, the subnet mask bits reveal the network ID is 172.26.167.0 and broadcast address is 172.26.167.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1550 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "3.88 ms",
      "7.75 ms",
      "12.25 ms",
      "77.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1550 bits / (200 * 1000 bps) = 7.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4140 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "360.797 ms",
      "90.199 ms",
      "541.195 ms",
      "373.297 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4140 * 1024 * 8) / (94 * 10^6) = 360.797 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2800 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "28.00 ms",
      "56.00 ms",
      "60.50 ms",
      "560.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2800 bits / (50 * 1000 bps) = 56.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.91.107.203 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.91.108.0",
      "10.91.107.255",
      "10.91.107.0",
      "10.91.107.0"
    ],
    "answer": 1,
    "explanation": "For host 10.91.107.203/22, the subnet mask bits reveal the network ID is 10.91.104.0 and broadcast address is 10.91.107.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.147.60 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.147.255",
      "192.168.148.0",
      "192.168.147.0",
      "192.168.147.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.147.60/23, the subnet mask bits reveal the network ID is 192.168.146.0 and broadcast address is 192.168.147.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1250 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "62.50 ms",
      "129.50 ms",
      "125.00 ms",
      "1250.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1250 bits / (10 * 1000 bps) = 125.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3550 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "35.50 ms",
      "71.00 ms",
      "75.50 ms",
      "710.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3550 bits / (50 * 1000 bps) = 71.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.25.230 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.25.231",
      "192.168.25.232",
      "192.168.26.228",
      "192.168.25.224"
    ],
    "answer": 0,
    "explanation": "For host 192.168.25.230/30, the subnet mask bits reveal the network ID is 192.168.25.228 and broadcast address is 192.168.25.231."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "2700.00 ms",
      "135.00 ms",
      "270.00 ms",
      "274.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2700 bits / (10 * 1000 bps) = 270.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2210 KB over a point-to-point network link with transmission bandwidth rate of 25 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1086.259 ms",
      "724.173 ms",
      "181.043 ms",
      "736.673 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2210 * 1024 * 8) / (25 * 10^6) = 724.173 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1050 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "45.753 ms",
      "195.513 ms",
      "183.013 ms",
      "274.519 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1050 * 1024 * 8) / (47 * 10^6) = 183.013 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1330 KB over a point-to-point network link with transmission bandwidth rate of 65 Mbps. What is the theoretical transmission delay?",
    "options": [
      "167.621 ms",
      "251.431 ms",
      "41.905 ms",
      "180.121 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1330 * 1024 * 8) / (65 * 10^6) = 167.621 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 440 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "18.390 ms",
      "86.061 ms",
      "73.561 ms",
      "110.341 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (440 * 1024 * 8) / (49 * 10^6) = 73.561 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.188.101 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.20.188.0",
      "255.255.255.255",
      "172.20.189.0"
    ],
    "answer": 1,
    "explanation": "For host 172.20.188.101/22, the subnet mask bits reveal the network ID is 172.20.188.0 and broadcast address is 172.20.191.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.80.39.105 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.80.40.64",
      "10.80.39.127",
      "10.80.39.0",
      "10.80.39.128"
    ],
    "answer": 1,
    "explanation": "For host 10.80.39.105/26, the subnet mask bits reveal the network ID is 10.80.39.64 and broadcast address is 10.80.39.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.244.209 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.244.255",
      "192.168.245.0",
      "192.168.244.0",
      "192.168.244.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.244.209/24, the subnet mask bits reveal the network ID is 192.168.244.0 and broadcast address is 192.168.244.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.188.64 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.188.68",
      "192.168.188.64",
      "192.168.188.60",
      "192.168.189.64"
    ],
    "answer": 1,
    "explanation": "For host 192.168.188.64/30, the subnet mask bits reveal the network ID is 192.168.188.64 and broadcast address is 192.168.188.67."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.119.208 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.120.192",
      "172.30.119.160",
      "172.30.119.224",
      "172.30.119.192"
    ],
    "answer": 3,
    "explanation": "For host 172.30.119.208/27, the subnet mask bits reveal the network ID is 172.30.119.192 and broadcast address is 172.30.119.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2850 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "142.50 ms",
      "7.13 ms",
      "14.25 ms",
      "18.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2850 bits / (200 * 1000 bps) = 14.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1950 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "168.152 ms",
      "42.038 ms",
      "180.652 ms",
      "252.227 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1950 * 1024 * 8) / (95 * 10^6) = 168.152 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1880 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "252.475 ms",
      "264.975 ms",
      "378.712 ms",
      "63.119 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1880 * 1024 * 8) / (61 * 10^6) = 252.475 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1430 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "234.291 ms",
      "58.573 ms",
      "246.791 ms",
      "351.437 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1430 * 1024 * 8) / (50 * 10^6) = 234.291 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1400 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "32.50 ms",
      "14.00 ms",
      "28.00 ms",
      "280.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1400 bits / (50 * 1000 bps) = 28.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.55.147 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.55.0",
      "192.168.54.0",
      "192.168.55.0",
      "192.168.56.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.55.147/23, the subnet mask bits reveal the network ID is 192.168.54.0 and broadcast address is 192.168.55.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.248.1 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.249.0",
      "172.30.248.64",
      "172.30.248.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 172.30.248.1/26, the subnet mask bits reveal the network ID is 172.30.248.0 and broadcast address is 172.30.248.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.59.254 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.59.0",
      "192.168.59.128",
      "192.168.60.192",
      "192.168.59.192"
    ],
    "answer": 3,
    "explanation": "For host 192.168.59.254/26, the subnet mask bits reveal the network ID is 192.168.59.192 and broadcast address is 192.168.59.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.188.1.139 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.188.1.0",
      "10.188.2.0",
      "10.188.1.255",
      "10.188.1.0"
    ],
    "answer": 2,
    "explanation": "For host 10.188.1.139/24, the subnet mask bits reveal the network ID is 10.188.1.0 and broadcast address is 10.188.1.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.74.224 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.74.208",
      "192.168.74.239",
      "192.168.74.240",
      "192.168.75.224"
    ],
    "answer": 1,
    "explanation": "For host 192.168.74.224/28, the subnet mask bits reveal the network ID is 192.168.74.224 and broadcast address is 192.168.74.239."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1500 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "7.50 ms",
      "1.50 ms",
      "30.00 ms",
      "3.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1500 bits / (500 * 1000 bps) = 3.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.34.1 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.25.35.0",
      "255.255.255.255",
      "172.25.34.0"
    ],
    "answer": 3,
    "explanation": "For host 172.25.34.1/23, the subnet mask bits reveal the network ID is 172.25.34.0 and broadcast address is 172.25.35.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4800 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "48.00 ms",
      "24.00 ms",
      "480.00 ms",
      "52.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4800 bits / (100 * 1000 bps) = 48.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.48.174.87 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.48.175.84",
      "10.48.174.88",
      "10.48.174.80",
      "10.48.174.87"
    ],
    "answer": 3,
    "explanation": "For host 10.48.174.87/30, the subnet mask bits reveal the network ID is 10.48.174.84 and broadcast address is 10.48.174.87."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.52.169.14 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.52.169.63",
      "10.52.169.0",
      "10.52.170.0",
      "10.52.169.64"
    ],
    "answer": 0,
    "explanation": "For host 10.52.169.14/26, the subnet mask bits reveal the network ID is 10.52.169.0 and broadcast address is 10.52.169.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.39.220 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.39.255",
      "172.23.39.0",
      "172.23.40.128",
      "172.23.39.0"
    ],
    "answer": 0,
    "explanation": "For host 172.23.39.220/25, the subnet mask bits reveal the network ID is 172.23.39.128 and broadcast address is 172.23.39.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.244.154 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.22.244.148",
      "172.22.245.152",
      "172.22.244.152",
      "172.22.244.156"
    ],
    "answer": 2,
    "explanation": "For host 172.22.244.154/30, the subnet mask bits reveal the network ID is 172.22.244.152 and broadcast address is 172.22.244.155."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4740 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "126.072 ms",
      "516.787 ms",
      "756.430 ms",
      "504.287 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4740 * 1024 * 8) / (77 * 10^6) = 504.287 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.84.112.150 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.84.113.0",
      "10.84.112.0",
      "10.84.112.0",
      "10.84.112.255"
    ],
    "answer": 3,
    "explanation": "For host 10.84.112.150/24, the subnet mask bits reveal the network ID is 10.84.112.0 and broadcast address is 10.84.112.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1700 KB over a point-to-point network link with transmission bandwidth rate of 45 Mbps. What is the theoretical transmission delay?",
    "options": [
      "464.213 ms",
      "309.476 ms",
      "321.976 ms",
      "77.369 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1700 * 1024 * 8) / (45 * 10^6) = 309.476 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2150 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "5.38 ms",
      "10.75 ms",
      "107.50 ms",
      "15.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2150 bits / (200 * 1000 bps) = 10.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4960 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3125.563 ms",
      "3138.063 ms",
      "781.391 ms",
      "4688.345 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4960 * 1024 * 8) / (13 * 10^6) = 3125.563 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.31.157 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.31.128",
      "192.168.31.96",
      "192.168.32.128",
      "192.168.31.160"
    ],
    "answer": 0,
    "explanation": "For host 192.168.31.157/27, the subnet mask bits reveal the network ID is 192.168.31.128 and broadcast address is 192.168.31.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.103.46 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.104.32",
      "192.168.103.63",
      "192.168.103.64",
      "192.168.103.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.103.46/27, the subnet mask bits reveal the network ID is 192.168.103.32 and broadcast address is 192.168.103.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3040 KB over a point-to-point network link with transmission bandwidth rate of 35 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1067.301 ms",
      "724.034 ms",
      "177.883 ms",
      "711.534 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3040 * 1024 * 8) / (35 * 10^6) = 711.534 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1420 KB over a point-to-point network link with transmission bandwidth rate of 90 Mbps. What is the theoretical transmission delay?",
    "options": [
      "129.252 ms",
      "32.313 ms",
      "193.877 ms",
      "141.752 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1420 * 1024 * 8) / (90 * 10^6) = 129.252 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "290.00 ms",
      "14.50 ms",
      "33.50 ms",
      "29.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1450 bits / (50 * 1000 bps) = 29.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.13.188 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.17.13.0",
      "172.17.13.0",
      "172.17.13.128",
      "172.17.14.128"
    ],
    "answer": 2,
    "explanation": "For host 172.17.13.188/25, the subnet mask bits reveal the network ID is 172.17.13.128 and broadcast address is 172.17.13.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.171.231.70 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.171.231.0",
      "10.171.232.0",
      "10.171.231.0",
      "10.171.231.255"
    ],
    "answer": 3,
    "explanation": "For host 10.171.231.70/22, the subnet mask bits reveal the network ID is 10.171.228.0 and broadcast address is 10.171.231.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1360 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "742.741 ms",
      "755.241 ms",
      "185.685 ms",
      "1114.112 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1360 * 1024 * 8) / (15 * 10^6) = 742.741 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "139.50 ms",
      "1350.00 ms",
      "135.00 ms",
      "67.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2700 bits / (20 * 1000 bps) = 135.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2840 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2908.160 ms",
      "4362.240 ms",
      "727.040 ms",
      "2920.660 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2840 * 1024 * 8) / (8 * 10^6) = 2908.160 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.121.117 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.121.0",
      "172.24.122.0",
      "172.24.120.0",
      "172.24.121.0"
    ],
    "answer": 2,
    "explanation": "For host 172.24.121.117/22, the subnet mask bits reveal the network ID is 172.24.120.0 and broadcast address is 172.24.123.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.250.82 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.31.250.76",
      "172.31.250.84",
      "172.31.250.80",
      "172.31.251.80"
    ],
    "answer": 2,
    "explanation": "For host 172.31.250.82/30, the subnet mask bits reveal the network ID is 172.31.250.80 and broadcast address is 172.31.250.83."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2590 KB over a point-to-point network link with transmission bandwidth rate of 14 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1528.020 ms",
      "2273.280 ms",
      "1515.520 ms",
      "378.880 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2590 * 1024 * 8) / (14 * 10^6) = 1515.520 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.135.233 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.135.255",
      "192.168.136.192",
      "192.168.135.0",
      "192.168.135.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.135.233/26, the subnet mask bits reveal the network ID is 192.168.135.192 and broadcast address is 192.168.135.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1220 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "43.834 ms",
      "175.338 ms",
      "187.838 ms",
      "263.006 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1220 * 1024 * 8) / (57 * 10^6) = 175.338 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "18.50 ms",
      "23.00 ms",
      "9.25 ms",
      "185.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1850 bits / (100 * 1000 bps) = 18.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1390 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "49.942 ms",
      "299.655 ms",
      "212.270 ms",
      "199.770 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1390 * 1024 * 8) / (57 * 10^6) = 199.770 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.150.203 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "172.23.151.0",
      "172.23.150.0"
    ],
    "answer": 3,
    "explanation": "For host 172.23.150.203/23, the subnet mask bits reveal the network ID is 172.23.150.0 and broadcast address is 172.23.151.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4600 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "230.00 ms",
      "27.50 ms",
      "23.00 ms",
      "11.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4600 bits / (200 * 1000 bps) = 23.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.246.72 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.247.64",
      "172.24.246.32",
      "172.24.246.95",
      "172.24.246.96"
    ],
    "answer": 2,
    "explanation": "For host 172.24.246.72/27, the subnet mask bits reveal the network ID is 172.24.246.64 and broadcast address is 172.24.246.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.137.232 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.138.224",
      "192.168.137.0",
      "192.168.137.224",
      "192.168.137.192"
    ],
    "answer": 2,
    "explanation": "For host 192.168.137.232/27, the subnet mask bits reveal the network ID is 192.168.137.224 and broadcast address is 192.168.137.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.147.246.38 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.147.246.0",
      "10.147.246.128",
      "10.147.247.0",
      "10.147.246.127"
    ],
    "answer": 3,
    "explanation": "For host 10.147.246.38/25, the subnet mask bits reveal the network ID is 10.147.246.0 and broadcast address is 10.147.246.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4200 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "992.492 ms",
      "661.662 ms",
      "674.162 ms",
      "165.415 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4200 * 1024 * 8) / (52 * 10^6) = 661.662 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.6.63 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.18.6.0",
      "172.18.6.64",
      "255.255.255.255",
      "172.18.7.0"
    ],
    "answer": 0,
    "explanation": "For host 172.18.6.63/26, the subnet mask bits reveal the network ID is 172.18.6.0 and broadcast address is 172.18.6.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.61.216.223 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.61.217.128",
      "10.61.216.0",
      "10.61.216.128",
      "10.61.216.0"
    ],
    "answer": 2,
    "explanation": "For host 10.61.216.223/25, the subnet mask bits reveal the network ID is 10.61.216.128 and broadcast address is 10.61.216.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.179.171.185 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.179.172.0",
      "10.179.171.0",
      "10.179.171.0",
      "10.179.171.255"
    ],
    "answer": 3,
    "explanation": "For host 10.179.171.185/24, the subnet mask bits reveal the network ID is 10.179.171.0 and broadcast address is 10.179.171.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2350 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "122.00 ms",
      "1175.00 ms",
      "117.50 ms",
      "58.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2350 bits / (20 * 1000 bps) = 117.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.22.34.188 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.22.32.0",
      "10.22.34.0",
      "10.22.35.0",
      "10.22.34.0"
    ],
    "answer": 0,
    "explanation": "For host 10.22.34.188/22, the subnet mask bits reveal the network ID is 10.22.32.0 and broadcast address is 10.22.35.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 170 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "11.605 ms",
      "58.921 ms",
      "69.632 ms",
      "46.421 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (170 * 1024 * 8) / (30 * 10^6) = 46.421 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.154.236 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.17.154.240",
      "172.17.155.236",
      "172.17.154.236",
      "172.17.154.232"
    ],
    "answer": 2,
    "explanation": "For host 172.17.154.236/30, the subnet mask bits reveal the network ID is 172.17.154.236 and broadcast address is 172.17.154.239."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2000 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "100.00 ms",
      "1000.00 ms",
      "104.50 ms",
      "50.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2000 bits / (20 * 1000 bps) = 100.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1300 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "26.00 ms",
      "1.30 ms",
      "2.60 ms",
      "7.10 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1300 bits / (500 * 1000 bps) = 2.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2930 KB over a point-to-point network link with transmission bandwidth rate of 10 Mbps. What is the theoretical transmission delay?",
    "options": [
      "600.064 ms",
      "3600.384 ms",
      "2400.256 ms",
      "2412.756 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2930 * 1024 * 8) / (10 * 10^6) = 2400.256 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.64.234.185 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.64.234.176",
      "10.64.234.160",
      "10.64.234.192",
      "10.64.235.176"
    ],
    "answer": 0,
    "explanation": "For host 10.64.234.185/28, the subnet mask bits reveal the network ID is 10.64.234.176 and broadcast address is 10.64.234.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3450 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "177.00 ms",
      "172.50 ms",
      "86.25 ms",
      "1725.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3450 bits / (20 * 1000 bps) = 172.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2200 KB over a point-to-point network link with transmission bandwidth rate of 25 Mbps. What is the theoretical transmission delay?",
    "options": [
      "180.224 ms",
      "720.896 ms",
      "733.396 ms",
      "1081.344 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2200 * 1024 * 8) / (25 * 10^6) = 720.896 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.169.8 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.169.16",
      "192.168.170.0",
      "192.168.169.15",
      "192.168.169.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.169.8/28, the subnet mask bits reveal the network ID is 192.168.169.0 and broadcast address is 192.168.169.15."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1050 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "109.50 ms",
      "1050.00 ms",
      "105.00 ms",
      "52.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1050 bits / (10 * 1000 bps) = 105.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 470 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "137.509 ms",
      "91.672 ms",
      "104.172 ms",
      "22.918 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (470 * 1024 * 8) / (42 * 10^6) = 91.672 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "9.25 ms",
      "23.00 ms",
      "185.00 ms",
      "18.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3700 bits / (200 * 1000 bps) = 18.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4880 KB over a point-to-point network link with transmission bandwidth rate of 98 Mbps. What is the theoretical transmission delay?",
    "options": [
      "101.982 ms",
      "407.928 ms",
      "611.892 ms",
      "420.428 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4880 * 1024 * 8) / (98 * 10^6) = 407.928 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3550 KB over a point-to-point network link with transmission bandwidth rate of 74 Mbps. What is the theoretical transmission delay?",
    "options": [
      "589.492 ms",
      "405.495 ms",
      "98.249 ms",
      "392.995 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3550 * 1024 * 8) / (74 * 10^6) = 392.995 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.212.192 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.212.224",
      "192.168.212.160",
      "192.168.212.223",
      "192.168.213.192"
    ],
    "answer": 2,
    "explanation": "For host 192.168.212.192/27, the subnet mask bits reveal the network ID is 192.168.212.192 and broadcast address is 192.168.212.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4620 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "811.008 ms",
      "135.168 ms",
      "553.172 ms",
      "540.672 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4620 * 1024 * 8) / (70 * 10^6) = 540.672 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.254.214 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.255.255",
      "172.19.254.0",
      "172.19.254.0",
      "172.19.255.0"
    ],
    "answer": 0,
    "explanation": "For host 172.19.254.214/22, the subnet mask bits reveal the network ID is 172.19.252.0 and broadcast address is 172.19.255.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2880 KB over a point-to-point network link with transmission bandwidth rate of 10 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2371.796 ms",
      "589.824 ms",
      "2359.296 ms",
      "3538.944 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2880 * 1024 * 8) / (10 * 10^6) = 2359.296 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 380 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "15.565 ms",
      "74.759 ms",
      "93.389 ms",
      "62.259 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (380 * 1024 * 8) / (50 * 10^6) = 62.259 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3510 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "299.520 ms",
      "312.020 ms",
      "74.880 ms",
      "449.280 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3510 * 1024 * 8) / (96 * 10^6) = 299.520 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3030 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1432.025 ms",
      "967.183 ms",
      "954.683 ms",
      "238.671 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3030 * 1024 * 8) / (26 * 10^6) = 954.683 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1670 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "51.821 ms",
      "207.282 ms",
      "219.782 ms",
      "310.924 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1670 * 1024 * 8) / (66 * 10^6) = 207.282 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3650 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "369.50 ms",
      "365.00 ms",
      "3650.00 ms",
      "182.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3650 bits / (10 * 1000 bps) = 365.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.206.191.184 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.206.191.128",
      "10.206.191.192",
      "10.206.192.160",
      "10.206.191.160"
    ],
    "answer": 3,
    "explanation": "For host 10.206.191.184/27, the subnet mask bits reveal the network ID is 10.206.191.160 and broadcast address is 10.206.191.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4890 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "638.420 ms",
      "156.480 ms",
      "938.880 ms",
      "625.920 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4890 * 1024 * 8) / (64 * 10^6) = 625.920 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 980 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "20.273 ms",
      "121.639 ms",
      "81.093 ms",
      "93.593 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (980 * 1024 * 8) / (99 * 10^6) = 81.093 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.157.218 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.157.212",
      "192.168.157.216",
      "192.168.158.216",
      "192.168.157.220"
    ],
    "answer": 1,
    "explanation": "For host 192.168.157.218/30, the subnet mask bits reveal the network ID is 192.168.157.216 and broadcast address is 192.168.157.219."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 580 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "20.480 ms",
      "81.920 ms",
      "122.880 ms",
      "94.420 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (580 * 1024 * 8) / (58 * 10^6) = 81.920 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.213.249 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.21.213.0",
      "255.255.255.255",
      "255.255.255.255",
      "172.21.214.0"
    ],
    "answer": 0,
    "explanation": "For host 172.21.213.249/24, the subnet mask bits reveal the network ID is 172.21.213.0 and broadcast address is 172.21.213.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3800 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "569.444 ms",
      "392.129 ms",
      "94.907 ms",
      "379.629 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3800 * 1024 * 8) / (82 * 10^6) = 379.629 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.27.167 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.27.176",
      "172.17.28.160",
      "172.17.27.144",
      "172.17.27.175"
    ],
    "answer": 3,
    "explanation": "For host 172.17.27.167/28, the subnet mask bits reveal the network ID is 172.17.27.160 and broadcast address is 172.17.27.175."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2530 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1307.860 ms",
      "1295.360 ms",
      "323.840 ms",
      "1943.040 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2530 * 1024 * 8) / (16 * 10^6) = 1295.360 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.120.200.173 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "10.120.201.0",
      "10.120.200.0"
    ],
    "answer": 3,
    "explanation": "For host 10.120.200.173/24, the subnet mask bits reveal the network ID is 10.120.200.0 and broadcast address is 10.120.200.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "384.50 ms",
      "380.00 ms",
      "190.00 ms",
      "3800.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3800 bits / (10 * 1000 bps) = 380.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "20.00 ms",
      "400.00 ms",
      "40.00 ms",
      "44.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4000 bits / (100 * 1000 bps) = 40.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.144.20 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.145.255",
      "192.168.145.0",
      "192.168.144.0",
      "192.168.144.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.144.20/23, the subnet mask bits reveal the network ID is 192.168.144.0 and broadcast address is 192.168.145.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 890 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "148.793 ms",
      "161.293 ms",
      "37.198 ms",
      "223.190 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (890 * 1024 * 8) / (49 * 10^6) = 148.793 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2350 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "11.75 ms",
      "16.25 ms",
      "5.88 ms",
      "117.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2350 bits / (200 * 1000 bps) = 11.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4400 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "8.80 ms",
      "4.40 ms",
      "88.00 ms",
      "13.30 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4400 bits / (500 * 1000 bps) = 8.80 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2440 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "644.790 ms",
      "161.197 ms",
      "967.185 ms",
      "657.290 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2440 * 1024 * 8) / (31 * 10^6) = 644.790 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.91.102.198 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.91.102.0",
      "10.91.102.255",
      "10.91.103.192",
      "10.91.102.128"
    ],
    "answer": 1,
    "explanation": "For host 10.91.102.198/26, the subnet mask bits reveal the network ID is 10.91.102.192 and broadcast address is 10.91.102.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.132.226 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.132.224",
      "192.168.132.192",
      "192.168.132.0",
      "192.168.133.224"
    ],
    "answer": 0,
    "explanation": "For host 192.168.132.226/27, the subnet mask bits reveal the network ID is 192.168.132.224 and broadcast address is 192.168.132.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "14.25 ms",
      "33.00 ms",
      "28.50 ms",
      "285.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5700 bits / (200 * 1000 bps) = 28.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.176.100 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.176.104",
      "192.168.177.96",
      "192.168.176.103",
      "192.168.176.88"
    ],
    "answer": 2,
    "explanation": "For host 192.168.176.100/29, the subnet mask bits reveal the network ID is 192.168.176.96 and broadcast address is 192.168.176.103."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.225.221 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.226.220",
      "172.23.225.224",
      "172.23.225.223",
      "172.23.225.216"
    ],
    "answer": 2,
    "explanation": "For host 172.23.225.221/30, the subnet mask bits reveal the network ID is 172.23.225.220 and broadcast address is 172.23.225.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3850 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "192.50 ms",
      "23.75 ms",
      "9.63 ms",
      "19.25 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3850 bits / (200 * 1000 bps) = 19.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3480 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "431.942 ms",
      "444.442 ms",
      "647.913 ms",
      "107.985 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3480 * 1024 * 8) / (66 * 10^6) = 431.942 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2790 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "190.464 ms",
      "761.856 ms",
      "774.356 ms",
      "1142.784 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2790 * 1024 * 8) / (30 * 10^6) = 761.856 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1700 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "193.422 ms",
      "205.922 ms",
      "48.356 ms",
      "290.133 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1700 * 1024 * 8) / (72 * 10^6) = 193.422 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5600 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "112.00 ms",
      "15.70 ms",
      "5.60 ms",
      "11.20 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5600 bits / (500 * 1000 bps) = 11.20 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4090 KB over a point-to-point network link with transmission bandwidth rate of 18 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1861.404 ms",
      "2792.107 ms",
      "1873.904 ms",
      "465.351 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4090 * 1024 * 8) / (18 * 10^6) = 1861.404 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 900 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "153.600 ms",
      "921.600 ms",
      "626.900 ms",
      "614.400 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (900 * 1024 * 8) / (12 * 10^6) = 614.400 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.182.92 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.183.255",
      "172.23.183.0",
      "172.23.182.0",
      "172.23.182.0"
    ],
    "answer": 0,
    "explanation": "For host 172.23.182.92/23, the subnet mask bits reveal the network ID is 172.23.182.0 and broadcast address is 172.23.183.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 360 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "31.043 ms",
      "46.565 ms",
      "7.761 ms",
      "43.543 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (360 * 1024 * 8) / (95 * 10^6) = 31.043 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1950 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "19.50 ms",
      "24.00 ms",
      "195.00 ms",
      "9.75 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1950 bits / (100 * 1000 bps) = 19.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4700 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "94.00 ms",
      "13.90 ms",
      "9.40 ms",
      "4.70 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4700 bits / (500 * 1000 bps) = 9.40 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.18.48 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.18.0",
      "192.168.18.64",
      "192.168.18.63",
      "192.168.19.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.18.48/26, the subnet mask bits reveal the network ID is 192.168.18.0 and broadcast address is 192.168.18.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 520 KB over a point-to-point network link with transmission bandwidth rate of 10 Mbps. What is the theoretical transmission delay?",
    "options": [
      "638.976 ms",
      "106.496 ms",
      "438.484 ms",
      "425.984 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (520 * 1024 * 8) / (10 * 10^6) = 425.984 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.144.165.130 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.144.165.128",
      "10.144.165.120",
      "10.144.165.136",
      "10.144.166.128"
    ],
    "answer": 0,
    "explanation": "For host 10.144.165.130/29, the subnet mask bits reveal the network ID is 10.144.165.128 and broadcast address is 10.144.165.135."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4040 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "740.948 ms",
      "123.491 ms",
      "506.465 ms",
      "493.965 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4040 * 1024 * 8) / (67 * 10^6) = 493.965 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1180 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "136.149 ms",
      "204.223 ms",
      "34.037 ms",
      "148.649 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1180 * 1024 * 8) / (71 * 10^6) = 136.149 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 140 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "26.153 ms",
      "20.480 ms",
      "3.413 ms",
      "13.653 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (140 * 1024 * 8) / (84 * 10^6) = 13.653 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 330 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "40.349 ms",
      "60.523 ms",
      "10.087 ms",
      "52.849 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (330 * 1024 * 8) / (67 * 10^6) = 40.349 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "2.70 ms",
      "5.40 ms",
      "54.00 ms",
      "9.90 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2700 bits / (500 * 1000 bps) = 5.40 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.198.155.18 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.198.155.8",
      "10.198.155.23",
      "10.198.156.16",
      "10.198.155.24"
    ],
    "answer": 1,
    "explanation": "For host 10.198.155.18/29, the subnet mask bits reveal the network ID is 10.198.155.16 and broadcast address is 10.198.155.23."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4900 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "102.50 ms",
      "980.00 ms",
      "49.00 ms",
      "98.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4900 bits / (50 * 1000 bps) = 98.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 450 KB over a point-to-point network link with transmission bandwidth rate of 24 Mbps. What is the theoretical transmission delay?",
    "options": [
      "38.400 ms",
      "153.600 ms",
      "166.100 ms",
      "230.400 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (450 * 1024 * 8) / (24 * 10^6) = 153.600 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3650 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "36.50 ms",
      "18.25 ms",
      "41.00 ms",
      "365.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3650 bits / (100 * 1000 bps) = 36.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.249.126 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.30.250.0",
      "255.255.255.255",
      "172.30.249.0"
    ],
    "answer": 3,
    "explanation": "For host 172.30.249.126/24, the subnet mask bits reveal the network ID is 172.30.249.0 and broadcast address is 172.30.249.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "120.00 ms",
      "244.50 ms",
      "2400.00 ms",
      "240.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2400 bits / (10 * 1000 bps) = 240.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4150 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "83.00 ms",
      "87.50 ms",
      "41.50 ms",
      "830.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4150 bits / (50 * 1000 bps) = 83.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 370 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "48.159 ms",
      "53.489 ms",
      "35.659 ms",
      "8.915 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (370 * 1024 * 8) / (85 * 10^6) = 35.659 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.251.85 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.251.255",
      "172.21.252.0",
      "172.21.251.0",
      "172.21.251.0"
    ],
    "answer": 0,
    "explanation": "For host 172.21.251.85/24, the subnet mask bits reveal the network ID is 172.21.251.0 and broadcast address is 172.21.251.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2900 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "145.00 ms",
      "294.50 ms",
      "2900.00 ms",
      "290.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2900 bits / (10 * 1000 bps) = 290.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4490 KB over a point-to-point network link with transmission bandwidth rate of 21 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2627.291 ms",
      "1751.528 ms",
      "1764.028 ms",
      "437.882 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4490 * 1024 * 8) / (21 * 10^6) = 1751.528 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2050 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "8.60 ms",
      "2.05 ms",
      "4.10 ms",
      "41.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2050 bits / (500 * 1000 bps) = 4.10 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.238.187.123 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.238.188.0",
      "10.238.187.255",
      "10.238.187.0",
      "10.238.187.0"
    ],
    "answer": 1,
    "explanation": "For host 10.238.187.123/24, the subnet mask bits reveal the network ID is 10.238.187.0 and broadcast address is 10.238.187.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.61.188 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.61.0",
      "255.255.255.255",
      "172.30.62.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 172.30.61.188/24, the subnet mask bits reveal the network ID is 172.30.61.0 and broadcast address is 172.30.61.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.13.184 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.14.128",
      "192.168.13.192",
      "192.168.13.64",
      "192.168.13.191"
    ],
    "answer": 3,
    "explanation": "For host 192.168.13.184/26, the subnet mask bits reveal the network ID is 192.168.13.128 and broadcast address is 192.168.13.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.158.37 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.158.0",
      "172.20.158.0",
      "172.20.158.255",
      "172.20.159.0"
    ],
    "answer": 2,
    "explanation": "For host 172.20.158.37/24, the subnet mask bits reveal the network ID is 172.20.158.0 and broadcast address is 172.20.158.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3310 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1439.633 ms",
      "356.783 ms",
      "1427.133 ms",
      "2140.699 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3310 * 1024 * 8) / (19 * 10^6) = 1427.133 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2930 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2000.213 ms",
      "500.053 ms",
      "3000.320 ms",
      "2012.713 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2930 * 1024 * 8) / (12 * 10^6) = 2000.213 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3150 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "15.75 ms",
      "20.25 ms",
      "157.50 ms",
      "7.88 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3150 bits / (200 * 1000 bps) = 15.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.114.115.189 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.114.115.0",
      "10.114.115.0",
      "10.114.116.128",
      "10.114.115.128"
    ],
    "answer": 3,
    "explanation": "For host 10.114.115.189/25, the subnet mask bits reveal the network ID is 10.114.115.128 and broadcast address is 10.114.115.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.120.117.61 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.120.118.0",
      "255.255.255.255",
      "10.120.117.0",
      "10.120.117.64"
    ],
    "answer": 2,
    "explanation": "For host 10.120.117.61/26, the subnet mask bits reveal the network ID is 10.120.117.0 and broadcast address is 10.120.117.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.48.18 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.48.16",
      "192.168.49.16",
      "192.168.48.32",
      "192.168.48.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.48.18/28, the subnet mask bits reveal the network ID is 192.168.48.16 and broadcast address is 192.168.48.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.31.124 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.23.32.0",
      "172.23.31.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.23.31.124/24, the subnet mask bits reveal the network ID is 172.23.31.0 and broadcast address is 172.23.31.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.155.182 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.155.184",
      "192.168.156.176",
      "192.168.155.168",
      "192.168.155.176"
    ],
    "answer": 3,
    "explanation": "For host 192.168.155.182/29, the subnet mask bits reveal the network ID is 192.168.155.176 and broadcast address is 192.168.155.183."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.189.79 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.189.0",
      "192.168.190.0",
      "192.168.188.0",
      "192.168.189.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.189.79/22, the subnet mask bits reveal the network ID is 192.168.188.0 and broadcast address is 192.168.191.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4400 KB over a point-to-point network link with transmission bandwidth rate of 21 Mbps. What is the theoretical transmission delay?",
    "options": [
      "429.105 ms",
      "2574.629 ms",
      "1728.919 ms",
      "1716.419 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4400 * 1024 * 8) / (21 * 10^6) = 1716.419 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2250 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "225.00 ms",
      "11.25 ms",
      "27.00 ms",
      "22.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2250 bits / (100 * 1000 bps) = 22.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.136.75 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.137.0",
      "255.255.255.255",
      "192.168.136.128",
      "192.168.136.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.136.75/25, the subnet mask bits reveal the network ID is 192.168.136.0 and broadcast address is 192.168.136.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.80.86.177 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.80.86.64",
      "10.80.86.192",
      "10.80.86.128",
      "10.80.87.128"
    ],
    "answer": 2,
    "explanation": "For host 10.80.86.177/26, the subnet mask bits reveal the network ID is 10.80.86.128 and broadcast address is 10.80.86.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2600 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "313.224 ms",
      "1265.394 ms",
      "1879.341 ms",
      "1252.894 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2600 * 1024 * 8) / (17 * 10^6) = 1252.894 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.150.183.169 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.150.183.0",
      "10.150.183.128",
      "10.150.183.0",
      "10.150.184.128"
    ],
    "answer": 1,
    "explanation": "For host 10.150.183.169/25, the subnet mask bits reveal the network ID is 10.150.183.128 and broadcast address is 10.150.183.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4400 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "44.00 ms",
      "440.00 ms",
      "22.00 ms",
      "48.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4400 bits / (100 * 1000 bps) = 44.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.215.3 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.30.215.32",
      "172.30.215.31",
      "172.30.216.0",
      "172.30.215.0"
    ],
    "answer": 1,
    "explanation": "For host 172.30.215.3/27, the subnet mask bits reveal the network ID is 172.30.215.0 and broadcast address is 172.30.215.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1300 KB over a point-to-point network link with transmission bandwidth rate of 65 Mbps. What is the theoretical transmission delay?",
    "options": [
      "176.340 ms",
      "40.960 ms",
      "163.840 ms",
      "245.760 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1300 * 1024 * 8) / (65 * 10^6) = 163.840 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.158.226.163 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.158.226.160",
      "10.158.226.144",
      "10.158.226.176",
      "10.158.227.160"
    ],
    "answer": 0,
    "explanation": "For host 10.158.226.163/28, the subnet mask bits reveal the network ID is 10.158.226.160 and broadcast address is 10.158.226.175."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.238.221 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.22.238.224",
      "172.22.238.192",
      "172.22.239.192",
      "172.22.238.160"
    ],
    "answer": 1,
    "explanation": "For host 172.22.238.221/27, the subnet mask bits reveal the network ID is 172.22.238.192 and broadcast address is 172.22.238.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3590 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1291.164 ms",
      "1278.664 ms",
      "1917.997 ms",
      "319.666 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3590 * 1024 * 8) / (23 * 10^6) = 1278.664 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4390 KB over a point-to-point network link with transmission bandwidth rate of 33 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1102.284 ms",
      "1634.676 ms",
      "1089.784 ms",
      "272.446 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4390 * 1024 * 8) / (33 * 10^6) = 1089.784 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.192.100 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.192.0",
      "255.255.255.255",
      "255.255.255.255",
      "192.168.193.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.192.100/22, the subnet mask bits reveal the network ID is 192.168.192.0 and broadcast address is 192.168.195.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3200 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "104.025 ms",
      "428.602 ms",
      "624.152 ms",
      "416.102 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3200 * 1024 * 8) / (63 * 10^6) = 416.102 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.150.118 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.150.128",
      "172.16.151.0",
      "172.16.150.0",
      "172.16.150.127"
    ],
    "answer": 3,
    "explanation": "For host 172.16.150.118/25, the subnet mask bits reveal the network ID is 172.16.150.0 and broadcast address is 172.16.150.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.222.18.158 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.222.18.144",
      "10.222.18.152",
      "10.222.18.160",
      "10.222.19.152"
    ],
    "answer": 1,
    "explanation": "For host 10.222.18.158/29, the subnet mask bits reveal the network ID is 10.222.18.152 and broadcast address is 10.222.18.159."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1700 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "85.00 ms",
      "8.50 ms",
      "13.00 ms",
      "4.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1700 bits / (200 * 1000 bps) = 8.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.153.125 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.153.255",
      "192.168.153.0",
      "192.168.154.0",
      "192.168.153.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.153.125/24, the subnet mask bits reveal the network ID is 192.168.153.0 and broadcast address is 192.168.153.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.154.249.120 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.154.249.120",
      "10.154.249.124",
      "10.154.250.120",
      "10.154.249.116"
    ],
    "answer": 0,
    "explanation": "For host 10.154.249.120/30, the subnet mask bits reveal the network ID is 10.154.249.120 and broadcast address is 10.154.249.123."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2780 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "286.883 ms",
      "411.574 ms",
      "274.383 ms",
      "68.596 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2780 * 1024 * 8) / (83 * 10^6) = 274.383 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3600 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "351.479 ms",
      "84.745 ms",
      "508.469 ms",
      "338.979 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3600 * 1024 * 8) / (87 * 10^6) = 338.979 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.44.124 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.44.128",
      "192.168.45.120",
      "192.168.44.112",
      "192.168.44.120"
    ],
    "answer": 3,
    "explanation": "For host 192.168.44.124/29, the subnet mask bits reveal the network ID is 192.168.44.120 and broadcast address is 192.168.44.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.37.238 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.37.0",
      "172.20.38.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 172.20.37.238/24, the subnet mask bits reveal the network ID is 172.20.37.0 and broadcast address is 172.20.37.255."
  }
];
