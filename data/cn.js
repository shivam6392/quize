window.quizData = window.quizData || {};
window.quizData.cn = [
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order?",
    "options": [
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Physical, Data Link, Network, Session, Transport, Presentation, Application"
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
      "IPv6",
      "Subnet Mask",
      "IPv4"
    ],
    "answer": 1,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port?",
    "options": [
      "80",
      "443",
      "22",
      "21"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port?",
    "options": [
      "8080",
      "443",
      "80",
      "25"
    ],
    "answer": 1,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses?",
    "options": [
      "ARP (Address Resolution Protocol)",
      "DNS under normal conditions",
      "DHCP (standard definition)",
      "NAT in typical implementations"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for?",
    "options": [
      "Direct Host Configuration Port",
      "Distributed Host Control Protocol",
      "Dynamic Host Configuration Protocol",
      "Dynamic Host Connection Protocol"
    ],
    "answer": 2,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model?",
    "options": [
      "Hub",
      "Repeater",
      "Switch",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer?",
    "options": [
      "Physical Layer (widely accepted)",
      "Data Link Layer (Layer 2)",
      "Transport Layer by design",
      "Network Layer (default behavior)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "TCP is characterized as?",
    "options": [
      "Connectionless and unreliable",
      "Lightweight with no handshake",
      "Connection-oriented and reliable",
      "Best-effort delivery (commonly used)"
    ],
    "answer": 2,
    "explanation": "TCP uses a 3-way handshake and guarantees packet ordering."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as?",
    "options": [
      "Connection-oriented (commonly used)",
      "Guaranteed delivery (general case)",
      "Connectionless and unreliable",
      "Heavyweight (widely accepted)"
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
      "ARP (primary approach)",
      "DHCP (standard definition)",
      "FTP (typical scenario)",
      "DNS (Domain Name System)"
    ],
    "answer": 3,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting?",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets (primary approach)",
      "Connecting different protocols (widely accepted)",
      "Increasing network bandwidth (typical scenario)"
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
      "255.255.255.255",
      "255.255.0.0",
      "255.0.0.0",
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
      "SNMP (default behavior)",
      "SMTP in typical implementations",
      "HTTP (widely accepted)",
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
      "Retrieve emails",
      "Send emails",
      "Retrieve IP addresses",
      "Transfer files"
    ],
    "answer": 1,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do?",
    "options": [
      "Encrypts network traffic (primary approach)",
      "Translates MAC to IP (primary approach)",
      "Filters spam emails as per specification",
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
      "Three-way handshake",
      "Congestion window sizing",
      "Sliding window mechanism",
      "Timeout retransmission only"
    ],
    "answer": 2,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through?",
    "options": [
      "Sliding window in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start",
      "MAC addresses in typical implementations",
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
      "Hamming code",
      "Parity bit",
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
      "Application Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Session Layer as per specification",
      "Transport Layer (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "3.70 ms",
      "74.00 ms",
      "7.40 ms",
      "11.90 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3700 bits / (500 * 1000 bps) = 7.40 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5800 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "120.50 ms",
      "116.00 ms",
      "58.00 ms",
      "1160.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5800 bits / (50 * 1000 bps) = 116.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.152.80.215 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.152.80.215",
      "10.152.80.216",
      "10.152.81.208",
      "10.152.80.200"
    ],
    "answer": 0,
    "explanation": "For host 10.152.80.215/29, the subnet mask bits reveal the network ID is 10.152.80.208 and broadcast address is 10.152.80.215."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4680 KB over a point-to-point network link with transmission bandwidth rate of 48 Mbps. What is the theoretical transmission delay?",
    "options": [
      "199.680 ms",
      "798.720 ms",
      "1198.080 ms",
      "811.220 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4680 * 1024 * 8) / (48 * 10^6) = 798.720 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2450 KB over a point-to-point network link with transmission bandwidth rate of 80 Mbps. What is the theoretical transmission delay?",
    "options": [
      "62.720 ms",
      "263.380 ms",
      "250.880 ms",
      "376.320 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2450 * 1024 * 8) / (80 * 10^6) = 250.880 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1240 KB over a point-to-point network link with transmission bandwidth rate of 76 Mbps. What is the theoretical transmission delay?",
    "options": [
      "33.415 ms",
      "146.159 ms",
      "133.659 ms",
      "200.488 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1240 * 1024 * 8) / (76 * 10^6) = 133.659 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2000 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "400.00 ms",
      "40.00 ms",
      "20.00 ms",
      "44.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2000 bits / (50 * 1000 bps) = 40.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4700 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "4700.00 ms",
      "470.00 ms",
      "474.50 ms",
      "235.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4700 bits / (10 * 1000 bps) = 470.00 ms."
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
    "question": "A router transmits a packet of size 1300 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "6.50 ms",
      "130.00 ms",
      "13.00 ms",
      "17.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1300 bits / (100 * 1000 bps) = 13.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5150 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "128.75 ms",
      "257.50 ms",
      "2575.00 ms",
      "262.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5150 bits / (20 * 1000 bps) = 257.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2100 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "214.50 ms",
      "210.00 ms",
      "105.00 ms",
      "2100.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2100 bits / (10 * 1000 bps) = 210.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "185.00 ms",
      "3700.00 ms",
      "370.00 ms",
      "374.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3700 bits / (10 * 1000 bps) = 370.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3030 KB over a point-to-point network link with transmission bandwidth rate of 55 Mbps. What is the theoretical transmission delay?",
    "options": [
      "676.957 ms",
      "451.305 ms",
      "112.826 ms",
      "463.805 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3030 * 1024 * 8) / (55 * 10^6) = 451.305 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.147.187.115 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.147.188.64",
      "10.147.187.127",
      "10.147.187.0",
      "10.147.187.128"
    ],
    "answer": 1,
    "explanation": "For host 10.147.187.115/26, the subnet mask bits reveal the network ID is 10.147.187.64 and broadcast address is 10.147.187.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "108.50 ms",
      "52.00 ms",
      "1040.00 ms",
      "104.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5200 bits / (50 * 1000 bps) = 104.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2350 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.70 ms",
      "47.00 ms",
      "9.20 ms",
      "2.35 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2350 bits / (500 * 1000 bps) = 4.70 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2550 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "127.50 ms",
      "259.50 ms",
      "255.00 ms",
      "2550.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2550 bits / (10 * 1000 bps) = 255.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.70.184 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.70.0",
      "192.168.71.0",
      "192.168.70.0",
      "192.168.68.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.70.184/22, the subnet mask bits reveal the network ID is 192.168.68.0 and broadcast address is 192.168.71.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2940 KB over a point-to-point network link with transmission bandwidth rate of 88 Mbps. What is the theoretical transmission delay?",
    "options": [
      "68.422 ms",
      "286.187 ms",
      "273.687 ms",
      "410.531 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2940 * 1024 * 8) / (88 * 10^6) = 273.687 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.64.152 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.30.67.255",
      "172.30.64.0",
      "172.30.65.0",
      "172.30.64.0"
    ],
    "answer": 0,
    "explanation": "For host 172.30.64.152/22, the subnet mask bits reveal the network ID is 172.30.64.0 and broadcast address is 172.30.67.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.107.117 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.107.255",
      "192.168.108.0",
      "192.168.107.0",
      "192.168.107.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.107.117/22, the subnet mask bits reveal the network ID is 192.168.104.0 and broadcast address is 192.168.107.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1170 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "133.825 ms",
      "181.987 ms",
      "121.325 ms",
      "30.331 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1170 * 1024 * 8) / (79 * 10^6) = 121.325 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 970 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "136.660 ms",
      "31.040 ms",
      "186.240 ms",
      "124.160 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (970 * 1024 * 8) / (64 * 10^6) = 124.160 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2130 KB over a point-to-point network link with transmission bandwidth rate of 78 Mbps. What is the theoretical transmission delay?",
    "options": [
      "223.705 ms",
      "236.205 ms",
      "55.926 ms",
      "335.557 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2130 * 1024 * 8) / (78 * 10^6) = 223.705 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1000 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "10.00 ms",
      "20.00 ms",
      "200.00 ms",
      "24.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1000 bits / (50 * 1000 bps) = 20.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.171.16.245 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.171.16.232",
      "10.171.16.240",
      "10.171.16.248",
      "10.171.17.240"
    ],
    "answer": 1,
    "explanation": "For host 10.171.16.245/29, the subnet mask bits reveal the network ID is 10.171.16.240 and broadcast address is 10.171.16.247."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "54.00 ms",
      "2.70 ms",
      "5.40 ms",
      "9.90 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2700 bits / (500 * 1000 bps) = 5.40 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1720 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "220.160 ms",
      "330.240 ms",
      "55.040 ms",
      "232.660 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1720 * 1024 * 8) / (64 * 10^6) = 220.160 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.130.210.5 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.130.210.4",
      "10.130.210.8",
      "10.130.210.0",
      "10.130.211.4"
    ],
    "answer": 0,
    "explanation": "For host 10.130.210.5/30, the subnet mask bits reveal the network ID is 10.130.210.4 and broadcast address is 10.130.210.7."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 480 KB over a point-to-point network link with transmission bandwidth rate of 74 Mbps. What is the theoretical transmission delay?",
    "options": [
      "65.637 ms",
      "13.284 ms",
      "79.706 ms",
      "53.137 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (480 * 1024 * 8) / (74 * 10^6) = 53.137 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.253.120 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.253.128",
      "192.168.253.64",
      "192.168.254.96",
      "192.168.253.127"
    ],
    "answer": 3,
    "explanation": "For host 192.168.253.120/27, the subnet mask bits reveal the network ID is 192.168.253.96 and broadcast address is 192.168.253.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.35.181.244 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.35.181.255",
      "10.35.182.240",
      "10.35.181.0",
      "10.35.181.224"
    ],
    "answer": 0,
    "explanation": "For host 10.35.181.244/28, the subnet mask bits reveal the network ID is 10.35.181.240 and broadcast address is 10.35.181.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5450 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "272.50 ms",
      "5450.00 ms",
      "549.50 ms",
      "545.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5450 bits / (10 * 1000 bps) = 545.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2350.00 ms",
      "235.00 ms",
      "117.50 ms",
      "239.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4700 bits / (20 * 1000 bps) = 235.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3600 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "589.824 ms",
      "147.456 ms",
      "884.736 ms",
      "602.324 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3600 * 1024 * 8) / (50 * 10^6) = 589.824 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3430 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "234.155 ms",
      "936.619 ms",
      "1404.928 ms",
      "949.119 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3430 * 1024 * 8) / (30 * 10^6) = 936.619 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.183.121.124 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.183.120.0",
      "10.183.122.0",
      "10.183.121.0",
      "10.183.121.0"
    ],
    "answer": 0,
    "explanation": "For host 10.183.121.124/23, the subnet mask bits reveal the network ID is 10.183.120.0 and broadcast address is 10.183.121.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 520 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "608.549 ms",
      "621.049 ms",
      "912.823 ms",
      "152.137 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (520 * 1024 * 8) / (7 * 10^6) = 608.549 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.201.173 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.201.0",
      "192.168.201.0",
      "192.168.200.0",
      "192.168.202.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.201.173/23, the subnet mask bits reveal the network ID is 192.168.200.0 and broadcast address is 192.168.201.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4950 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "247.50 ms",
      "12.38 ms",
      "24.75 ms",
      "29.25 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4950 bits / (200 * 1000 bps) = 24.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "3600.00 ms",
      "360.00 ms",
      "364.50 ms",
      "180.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3600 bits / (10 * 1000 bps) = 360.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4830 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "319.092 ms",
      "1914.550 ms",
      "1288.866 ms",
      "1276.366 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4830 * 1024 * 8) / (31 * 10^6) = 1276.366 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.51.193.186 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.51.194.128",
      "10.51.193.0",
      "10.51.193.0",
      "10.51.193.255"
    ],
    "answer": 3,
    "explanation": "For host 10.51.193.186/25, the subnet mask bits reveal the network ID is 10.51.193.128 and broadcast address is 10.51.193.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.58.163.53 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.58.164.0",
      "10.58.163.0",
      "10.58.162.0",
      "10.58.163.0"
    ],
    "answer": 2,
    "explanation": "For host 10.58.163.53/23, the subnet mask bits reveal the network ID is 10.58.162.0 and broadcast address is 10.58.163.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3500 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "3.50 ms",
      "70.00 ms",
      "7.00 ms",
      "11.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3500 bits / (500 * 1000 bps) = 7.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "53.00 ms",
      "5.30 ms",
      "2.65 ms",
      "9.80 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2650 bits / (500 * 1000 bps) = 5.30 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4370 KB over a point-to-point network link with transmission bandwidth rate of 37 Mbps. What is the theoretical transmission delay?",
    "options": [
      "967.542 ms",
      "1451.312 ms",
      "241.885 ms",
      "980.042 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4370 * 1024 * 8) / (37 * 10^6) = 967.542 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "1800.00 ms",
      "90.00 ms",
      "184.50 ms",
      "180.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1800 bits / (10 * 1000 bps) = 180.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.221.84 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.222.0",
      "192.168.221.0",
      "192.168.221.127",
      "192.168.221.128"
    ],
    "answer": 2,
    "explanation": "For host 192.168.221.84/25, the subnet mask bits reveal the network ID is 192.168.221.0 and broadcast address is 192.168.221.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4800 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "480.00 ms",
      "52.50 ms",
      "48.00 ms",
      "24.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4800 bits / (100 * 1000 bps) = 48.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.125.197 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.125.199",
      "192.168.126.196",
      "192.168.125.192",
      "192.168.125.200"
    ],
    "answer": 0,
    "explanation": "For host 192.168.125.197/30, the subnet mask bits reveal the network ID is 192.168.125.196 and broadcast address is 192.168.125.199."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.158.33.210 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.158.34.208",
      "10.158.33.208",
      "10.158.33.216",
      "10.158.33.200"
    ],
    "answer": 1,
    "explanation": "For host 10.158.33.210/29, the subnet mask bits reveal the network ID is 10.158.33.208 and broadcast address is 10.158.33.215."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4280 KB over a point-to-point network link with transmission bandwidth rate of 100 Mbps. What is the theoretical transmission delay?",
    "options": [
      "525.926 ms",
      "350.618 ms",
      "363.118 ms",
      "87.654 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4280 * 1024 * 8) / (100 * 10^6) = 350.618 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.107.75.104 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.107.75.0",
      "10.107.76.0",
      "10.107.75.127",
      "10.107.75.128"
    ],
    "answer": 2,
    "explanation": "For host 10.107.75.104/25, the subnet mask bits reveal the network ID is 10.107.75.0 and broadcast address is 10.107.75.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2560 KB over a point-to-point network link with transmission bandwidth rate of 73 Mbps. What is the theoretical transmission delay?",
    "options": [
      "71.820 ms",
      "299.781 ms",
      "287.281 ms",
      "430.922 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2560 * 1024 * 8) / (73 * 10^6) = 287.281 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.81.26.242 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.81.26.192",
      "10.81.26.0",
      "10.81.26.255",
      "10.81.27.224"
    ],
    "answer": 2,
    "explanation": "For host 10.81.26.242/27, the subnet mask bits reveal the network ID is 10.81.26.224 and broadcast address is 10.81.26.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "8.50 ms",
      "21.50 ms",
      "170.00 ms",
      "17.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1700 bits / (100 * 1000 bps) = 17.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4610 KB over a point-to-point network link with transmission bandwidth rate of 93 Mbps. What is the theoretical transmission delay?",
    "options": [
      "609.115 ms",
      "418.577 ms",
      "101.519 ms",
      "406.077 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4610 * 1024 * 8) / (93 * 10^6) = 406.077 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 330 KB over a point-to-point network link with transmission bandwidth rate of 21 Mbps. What is the theoretical transmission delay?",
    "options": [
      "32.183 ms",
      "193.097 ms",
      "141.231 ms",
      "128.731 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (330 * 1024 * 8) / (21 * 10^6) = 128.731 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4480 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "145.636 ms",
      "582.542 ms",
      "873.813 ms",
      "595.042 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4480 * 1024 * 8) / (63 * 10^6) = 582.542 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.80.153 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.80.192",
      "172.22.80.64",
      "172.22.80.191",
      "172.22.81.128"
    ],
    "answer": 2,
    "explanation": "For host 172.22.80.153/26, the subnet mask bits reveal the network ID is 172.22.80.128 and broadcast address is 172.22.80.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 500 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "341.333 ms",
      "1377.833 ms",
      "2048.000 ms",
      "1365.333 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (500 * 1024 * 8) / (3 * 10^6) = 1365.333 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "42.50 ms",
      "89.50 ms",
      "850.00 ms",
      "85.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4250 bits / (50 * 1000 bps) = 85.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1500 KB over a point-to-point network link with transmission bandwidth rate of 55 Mbps. What is the theoretical transmission delay?",
    "options": [
      "55.855 ms",
      "235.918 ms",
      "223.418 ms",
      "335.127 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1500 * 1024 * 8) / (55 * 10^6) = 223.418 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1560 KB over a point-to-point network link with transmission bandwidth rate of 50 Mbps. What is the theoretical transmission delay?",
    "options": [
      "255.590 ms",
      "63.898 ms",
      "383.386 ms",
      "268.090 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1560 * 1024 * 8) / (50 * 10^6) = 255.590 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.206.150 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.207.128",
      "192.168.206.0",
      "192.168.206.0",
      "192.168.206.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.206.150/25, the subnet mask bits reveal the network ID is 192.168.206.128 and broadcast address is 192.168.206.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.29.18.119 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.29.18.0",
      "10.29.18.128",
      "10.29.19.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 10.29.18.119/25, the subnet mask bits reveal the network ID is 10.29.18.0 and broadcast address is 10.29.18.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1230 KB over a point-to-point network link with transmission bandwidth rate of 100 Mbps. What is the theoretical transmission delay?",
    "options": [
      "113.262 ms",
      "25.190 ms",
      "100.762 ms",
      "151.142 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1230 * 1024 * 8) / (100 * 10^6) = 100.762 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "192.00 ms",
      "93.75 ms",
      "187.50 ms",
      "1875.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3750 bits / (20 * 1000 bps) = 187.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2030 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "554.325 ms",
      "831.488 ms",
      "566.825 ms",
      "138.581 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2030 * 1024 * 8) / (30 * 10^6) = 554.325 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 100 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2.111 ms",
      "12.668 ms",
      "20.945 ms",
      "8.445 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (100 * 1024 * 8) / (97 * 10^6) = 8.445 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.5.101.212 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.5.102.0",
      "10.5.101.0",
      "10.5.100.0",
      "10.5.101.0"
    ],
    "answer": 2,
    "explanation": "For host 10.5.101.212/22, the subnet mask bits reveal the network ID is 10.5.100.0 and broadcast address is 10.5.103.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "3.60 ms",
      "72.00 ms",
      "11.70 ms",
      "7.20 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3600 bits / (500 * 1000 bps) = 7.20 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2200 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1100.00 ms",
      "114.50 ms",
      "55.00 ms",
      "110.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2200 bits / (20 * 1000 bps) = 110.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "585.00 ms",
      "58.50 ms",
      "63.00 ms",
      "29.25 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5850 bits / (100 * 1000 bps) = 58.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.242.131 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.242.112",
      "172.16.243.128",
      "172.16.242.143",
      "172.16.242.144"
    ],
    "answer": 2,
    "explanation": "For host 172.16.242.131/28, the subnet mask bits reveal the network ID is 172.16.242.128 and broadcast address is 172.16.242.143."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.160.249 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.161.0",
      "172.22.163.255",
      "172.22.160.0",
      "172.22.160.0"
    ],
    "answer": 1,
    "explanation": "For host 172.22.160.249/22, the subnet mask bits reveal the network ID is 172.22.160.0 and broadcast address is 172.22.163.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1730 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "93.238 ms",
      "559.427 ms",
      "372.952 ms",
      "385.452 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1730 * 1024 * 8) / (38 * 10^6) = 372.952 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4050 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2073.600 ms",
      "3110.400 ms",
      "2086.100 ms",
      "518.400 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4050 * 1024 * 8) / (16 * 10^6) = 2073.600 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.244.195 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.244.255",
      "172.31.245.192",
      "172.31.244.128",
      "172.31.244.0"
    ],
    "answer": 0,
    "explanation": "For host 172.31.244.195/26, the subnet mask bits reveal the network ID is 172.31.244.192 and broadcast address is 172.31.244.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4300 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "43.00 ms",
      "86.00 ms",
      "860.00 ms",
      "90.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4300 bits / (50 * 1000 bps) = 86.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2050 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "410.00 ms",
      "45.50 ms",
      "41.00 ms",
      "20.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2050 bits / (50 * 1000 bps) = 41.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.13.159 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.13.0",
      "192.168.14.128",
      "192.168.13.0",
      "192.168.13.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.13.159/25, the subnet mask bits reveal the network ID is 192.168.13.128 and broadcast address is 192.168.13.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1050 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "52.50 ms",
      "5.25 ms",
      "2.63 ms",
      "9.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1050 bits / (200 * 1000 bps) = 5.25 ms."
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
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "57.00 ms",
      "61.50 ms",
      "570.00 ms",
      "28.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5700 bits / (100 * 1000 bps) = 57.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "25.75 ms",
      "10.63 ms",
      "21.25 ms",
      "212.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4250 bits / (200 * 1000 bps) = 21.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 100 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "21.033 ms",
      "8.533 ms",
      "2.133 ms",
      "12.800 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (100 * 1024 * 8) / (96 * 10^6) = 8.533 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.148.67.136 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.148.67.255",
      "10.148.67.0",
      "10.148.68.0",
      "10.148.67.0"
    ],
    "answer": 0,
    "explanation": "For host 10.148.67.136/24, the subnet mask bits reveal the network ID is 10.148.67.0 and broadcast address is 10.148.67.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.229.106.92 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.229.106.88",
      "10.229.106.92",
      "10.229.106.96",
      "10.229.107.92"
    ],
    "answer": 1,
    "explanation": "For host 10.229.106.92/30, the subnet mask bits reveal the network ID is 10.229.106.92 and broadcast address is 10.229.106.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1710 KB over a point-to-point network link with transmission bandwidth rate of 4 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3502.080 ms",
      "875.520 ms",
      "5253.120 ms",
      "3514.580 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1710 * 1024 * 8) / (4 * 10^6) = 3502.080 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.195.58 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.195.0",
      "192.168.196.0",
      "255.255.255.255",
      "192.168.195.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.195.58/25, the subnet mask bits reveal the network ID is 192.168.195.0 and broadcast address is 192.168.195.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.238.60 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.28.238.32",
      "172.28.238.64",
      "172.28.238.48",
      "172.28.239.48"
    ],
    "answer": 2,
    "explanation": "For host 172.28.238.60/28, the subnet mask bits reveal the network ID is 172.28.238.48 and broadcast address is 172.28.238.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2050 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.10 ms",
      "41.00 ms",
      "8.60 ms",
      "2.05 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2050 bits / (500 * 1000 bps) = 4.10 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4090 KB over a point-to-point network link with transmission bandwidth rate of 20 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1675.264 ms",
      "2512.896 ms",
      "418.816 ms",
      "1687.764 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4090 * 1024 * 8) / (20 * 10^6) = 1675.264 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4400 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "891.641 ms",
      "219.785 ms",
      "879.141 ms",
      "1318.712 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4400 * 1024 * 8) / (41 * 10^6) = 879.141 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.250.153 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.251.0",
      "172.17.250.0",
      "172.17.250.255",
      "172.17.250.0"
    ],
    "answer": 2,
    "explanation": "For host 172.17.250.153/24, the subnet mask bits reveal the network ID is 172.17.250.0 and broadcast address is 172.17.250.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.89.110 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.89.127",
      "192.168.90.0",
      "192.168.89.0",
      "192.168.89.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.89.110/25, the subnet mask bits reveal the network ID is 192.168.89.0 and broadcast address is 192.168.89.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "61.00 ms",
      "28.25 ms",
      "565.00 ms",
      "56.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5650 bits / (100 * 1000 bps) = 56.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4370 KB over a point-to-point network link with transmission bandwidth rate of 45 Mbps. What is the theoretical transmission delay?",
    "options": [
      "795.534 ms",
      "808.034 ms",
      "1193.301 ms",
      "198.884 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4370 * 1024 * 8) / (45 * 10^6) = 795.534 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.166.126 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.166.0",
      "172.28.167.0",
      "172.28.167.255",
      "172.28.166.0"
    ],
    "answer": 2,
    "explanation": "For host 172.28.166.126/23, the subnet mask bits reveal the network ID is 172.28.166.0 and broadcast address is 172.28.167.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4620 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "193.097 ms",
      "772.389 ms",
      "784.889 ms",
      "1158.583 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4620 * 1024 * 8) / (49 * 10^6) = 772.389 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.245.199.210 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.245.199.0",
      "10.245.199.192",
      "10.245.199.128",
      "10.245.200.192"
    ],
    "answer": 1,
    "explanation": "For host 10.245.199.210/26, the subnet mask bits reveal the network ID is 10.245.199.192 and broadcast address is 10.245.199.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 850 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "127.376 ms",
      "21.229 ms",
      "97.417 ms",
      "84.917 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (850 * 1024 * 8) / (82 * 10^6) = 84.917 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.74.126.43 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.74.127.0",
      "10.74.126.0",
      "10.74.126.127",
      "10.74.126.128"
    ],
    "answer": 2,
    "explanation": "For host 10.74.126.43/25, the subnet mask bits reveal the network ID is 10.74.126.0 and broadcast address is 10.74.126.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4320 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "215.789 ms",
      "875.657 ms",
      "1294.736 ms",
      "863.157 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4320 * 1024 * 8) / (41 * 10^6) = 863.157 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.208.78 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.209.0",
      "192.168.208.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 192.168.208.78/22, the subnet mask bits reveal the network ID is 192.168.208.0 and broadcast address is 192.168.211.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2780 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "813.349 ms",
      "554.732 ms",
      "135.558 ms",
      "542.232 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2780 * 1024 * 8) / (42 * 10^6) = 542.232 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1930 KB over a point-to-point network link with transmission bandwidth rate of 54 Mbps. What is the theoretical transmission delay?",
    "options": [
      "292.788 ms",
      "439.182 ms",
      "73.197 ms",
      "305.288 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1930 * 1024 * 8) / (54 * 10^6) = 292.788 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1650 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "316.800 ms",
      "211.200 ms",
      "223.700 ms",
      "52.800 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1650 * 1024 * 8) / (64 * 10^6) = 211.200 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.95.105.118 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.95.105.0",
      "10.95.106.0",
      "10.95.107.255",
      "10.95.105.0"
    ],
    "answer": 2,
    "explanation": "For host 10.95.105.118/22, the subnet mask bits reveal the network ID is 10.95.104.0 and broadcast address is 10.95.107.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "3050.00 ms",
      "305.00 ms",
      "152.50 ms",
      "309.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3050 bits / (10 * 1000 bps) = 305.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.25 ms",
      "85.00 ms",
      "13.00 ms",
      "8.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4250 bits / (500 * 1000 bps) = 8.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1600 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "831.700 ms",
      "819.200 ms",
      "1228.800 ms",
      "204.800 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1600 * 1024 * 8) / (16 * 10^6) = 819.200 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3900 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "791.739 ms",
      "1168.859 ms",
      "194.810 ms",
      "779.239 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3900 * 1024 * 8) / (41 * 10^6) = 779.239 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2620 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "6438.912 ms",
      "1073.152 ms",
      "4305.108 ms",
      "4292.608 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2620 * 1024 * 8) / (5 * 10^6) = 4292.608 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "13.50 ms",
      "6.75 ms",
      "135.00 ms",
      "18.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2700 bits / (200 * 1000 bps) = 13.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2200 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "11.00 ms",
      "220.00 ms",
      "26.50 ms",
      "22.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2200 bits / (100 * 1000 bps) = 22.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.89.83 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.90.0",
      "192.168.89.128",
      "192.168.89.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.89.83/25, the subnet mask bits reveal the network ID is 192.168.89.0 and broadcast address is 192.168.89.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "32.75 ms",
      "282.50 ms",
      "28.25 ms",
      "14.13 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5650 bits / (200 * 1000 bps) = 28.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4450 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "13.40 ms",
      "8.90 ms",
      "89.00 ms",
      "4.45 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4450 bits / (500 * 1000 bps) = 8.90 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4870 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "480.663 ms",
      "493.163 ms",
      "120.166 ms",
      "720.995 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4870 * 1024 * 8) / (83 * 10^6) = 480.663 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.112.103.65 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.112.103.0",
      "10.112.103.0",
      "10.112.104.0",
      "10.112.100.0"
    ],
    "answer": 3,
    "explanation": "For host 10.112.103.65/22, the subnet mask bits reveal the network ID is 10.112.100.0 and broadcast address is 10.112.103.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "95.00 ms",
      "1900.00 ms",
      "190.00 ms",
      "194.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3800 bits / (20 * 1000 bps) = 190.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 460 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "61.440 ms",
      "10.240 ms",
      "40.960 ms",
      "53.460 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (460 * 1024 * 8) / (92 * 10^6) = 40.960 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4140 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "877.109 ms",
      "146.185 ms",
      "584.739 ms",
      "597.239 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4140 * 1024 * 8) / (58 * 10^6) = 584.739 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.56.195.224 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.56.196.224",
      "10.56.195.208",
      "10.56.195.224",
      "10.56.195.240"
    ],
    "answer": 2,
    "explanation": "For host 10.56.195.224/28, the subnet mask bits reveal the network ID is 10.56.195.224 and broadcast address is 10.56.195.239."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1850 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "92.50 ms",
      "189.50 ms",
      "1850.00 ms",
      "185.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1850 bits / (10 * 1000 bps) = 185.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4610 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "666.443 ms",
      "111.074 ms",
      "456.796 ms",
      "444.296 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4610 * 1024 * 8) / (85 * 10^6) = 444.296 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3440 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "587.093 ms",
      "391.396 ms",
      "403.896 ms",
      "97.849 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3440 * 1024 * 8) / (72 * 10^6) = 391.396 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.101.193.53 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.101.193.48",
      "10.101.193.52",
      "10.101.193.56",
      "10.101.194.52"
    ],
    "answer": 1,
    "explanation": "For host 10.101.193.53/30, the subnet mask bits reveal the network ID is 10.101.193.52 and broadcast address is 10.101.193.55."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.10.139.212 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.10.139.0",
      "255.255.255.255",
      "10.10.140.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 10.10.139.212/24, the subnet mask bits reveal the network ID is 10.10.139.0 and broadcast address is 10.10.139.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "37.50 ms",
      "79.50 ms",
      "75.00 ms",
      "750.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3750 bits / (50 * 1000 bps) = 75.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2890 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2959.360 ms",
      "11849.940 ms",
      "11837.440 ms",
      "17756.160 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2890 * 1024 * 8) / (2 * 10^6) = 11837.440 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.171.37 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.171.40",
      "192.168.171.24",
      "192.168.171.32",
      "192.168.172.32"
    ],
    "answer": 2,
    "explanation": "For host 192.168.171.37/29, the subnet mask bits reveal the network ID is 192.168.171.32 and broadcast address is 192.168.171.39."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.119.101 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.22.119.0",
      "172.22.120.0",
      "172.22.119.128"
    ],
    "answer": 1,
    "explanation": "For host 172.22.119.101/25, the subnet mask bits reveal the network ID is 172.22.119.0 and broadcast address is 172.22.119.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.43.120.29 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.43.120.32",
      "10.43.120.24",
      "10.43.120.31",
      "10.43.121.28"
    ],
    "answer": 2,
    "explanation": "For host 10.43.120.29/30, the subnet mask bits reveal the network ID is 10.43.120.28 and broadcast address is 10.43.120.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 350 KB over a point-to-point network link with transmission bandwidth rate of 32 Mbps. What is the theoretical transmission delay?",
    "options": [
      "22.400 ms",
      "89.600 ms",
      "102.100 ms",
      "134.400 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (350 * 1024 * 8) / (32 * 10^6) = 89.600 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4500 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "450.00 ms",
      "22.50 ms",
      "45.00 ms",
      "49.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4500 bits / (100 * 1000 bps) = 45.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3180 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "831.401 ms",
      "138.567 ms",
      "566.767 ms",
      "554.267 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3180 * 1024 * 8) / (47 * 10^6) = 554.267 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1600 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "1600.00 ms",
      "80.00 ms",
      "160.00 ms",
      "164.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1600 bits / (10 * 1000 bps) = 160.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4420 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4035.682 ms",
      "1005.796 ms",
      "6034.773 ms",
      "4023.182 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4420 * 1024 * 8) / (9 * 10^6) = 4023.182 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1850 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "8.20 ms",
      "1.85 ms",
      "37.00 ms",
      "3.70 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1850 bits / (500 * 1000 bps) = 3.70 ms."
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
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.163.161.166 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.163.160.0",
      "10.163.161.0",
      "10.163.161.0",
      "10.163.162.0"
    ],
    "answer": 0,
    "explanation": "For host 10.163.161.166/22, the subnet mask bits reveal the network ID is 10.163.160.0 and broadcast address is 10.163.163.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "43.00 ms",
      "385.00 ms",
      "19.25 ms",
      "38.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3850 bits / (100 * 1000 bps) = 38.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1480 KB over a point-to-point network link with transmission bandwidth rate of 55 Mbps. What is the theoretical transmission delay?",
    "options": [
      "55.110 ms",
      "220.439 ms",
      "330.659 ms",
      "232.939 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1480 * 1024 * 8) / (55 * 10^6) = 220.439 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.64.163 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.23.64.192",
      "172.23.65.128",
      "172.23.64.64",
      "172.23.64.128"
    ],
    "answer": 3,
    "explanation": "For host 172.23.64.163/26, the subnet mask bits reveal the network ID is 172.23.64.128 and broadcast address is 172.23.64.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "14.50 ms",
      "33.50 ms",
      "290.00 ms",
      "29.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1450 bits / (50 * 1000 bps) = 29.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4350 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "870.00 ms",
      "91.50 ms",
      "87.00 ms",
      "43.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4350 bits / (50 * 1000 bps) = 87.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "37.50 ms",
      "18.75 ms",
      "375.00 ms",
      "42.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3750 bits / (100 * 1000 bps) = 37.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3300 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "165.00 ms",
      "169.50 ms",
      "82.50 ms",
      "1650.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3300 bits / (20 * 1000 bps) = 165.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.203.139 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.22.203.0",
      "255.255.255.255",
      "172.22.204.0"
    ],
    "answer": 1,
    "explanation": "For host 172.22.203.139/24, the subnet mask bits reveal the network ID is 172.22.203.0 and broadcast address is 172.22.203.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2500 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.00 ms",
      "50.00 ms",
      "9.50 ms",
      "2.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2500 bits / (500 * 1000 bps) = 5.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.126.18 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.126.0",
      "255.255.255.255",
      "172.30.126.64",
      "172.30.127.0"
    ],
    "answer": 0,
    "explanation": "For host 172.30.126.18/26, the subnet mask bits reveal the network ID is 172.30.126.0 and broadcast address is 172.30.126.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.215.84.82 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.215.84.0",
      "10.215.85.0",
      "10.215.84.128",
      "10.215.84.127"
    ],
    "answer": 3,
    "explanation": "For host 10.215.84.82/25, the subnet mask bits reveal the network ID is 10.215.84.0 and broadcast address is 10.215.84.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3030 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "620.544 ms",
      "155.136 ms",
      "930.816 ms",
      "633.044 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3030 * 1024 * 8) / (40 * 10^6) = 620.544 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.65.144 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.65.144",
      "192.168.66.144",
      "192.168.65.160",
      "192.168.65.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.65.144/28, the subnet mask bits reveal the network ID is 192.168.65.144 and broadcast address is 192.168.65.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.159.63 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.21.160.0",
      "255.255.255.255",
      "172.21.159.64",
      "172.21.159.0"
    ],
    "answer": 3,
    "explanation": "For host 172.21.159.63/26, the subnet mask bits reveal the network ID is 172.21.159.0 and broadcast address is 172.21.159.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "292.50 ms",
      "29.25 ms",
      "14.63 ms",
      "33.75 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5850 bits / (200 * 1000 bps) = 29.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2770 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "11358.420 ms",
      "17018.880 ms",
      "2836.480 ms",
      "11345.920 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2770 * 1024 * 8) / (2 * 10^6) = 11345.920 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2950 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "147.50 ms",
      "73.75 ms",
      "1475.00 ms",
      "152.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2950 bits / (20 * 1000 bps) = 147.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "16.30 ms",
      "11.80 ms",
      "118.00 ms",
      "5.90 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5900 bits / (500 * 1000 bps) = 11.80 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4950 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.95 ms",
      "14.40 ms",
      "9.90 ms",
      "99.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4950 bits / (500 * 1000 bps) = 9.90 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.233.220 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.233.0",
      "192.168.235.255",
      "192.168.234.0",
      "192.168.233.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.233.220/22, the subnet mask bits reveal the network ID is 192.168.232.0 and broadcast address is 192.168.235.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.2.45 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.2.64",
      "172.31.3.0",
      "172.31.2.63",
      "172.31.2.0"
    ],
    "answer": 2,
    "explanation": "For host 172.31.2.45/26, the subnet mask bits reveal the network ID is 172.31.2.0 and broadcast address is 172.31.2.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.171.186 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.171.128",
      "172.26.172.160",
      "172.26.171.191",
      "172.26.171.192"
    ],
    "answer": 2,
    "explanation": "For host 172.26.171.186/27, the subnet mask bits reveal the network ID is 172.26.171.160 and broadcast address is 172.26.171.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.33.98.66 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.33.99.0",
      "10.33.98.128",
      "10.33.98.127",
      "10.33.98.0"
    ],
    "answer": 2,
    "explanation": "For host 10.33.98.66/25, the subnet mask bits reveal the network ID is 10.33.98.0 and broadcast address is 10.33.98.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.108.193 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.108.0",
      "192.168.109.128",
      "192.168.108.255",
      "192.168.108.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.108.193/25, the subnet mask bits reveal the network ID is 192.168.108.128 and broadcast address is 192.168.108.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.68.165.242 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.68.165.0",
      "10.68.166.0",
      "10.68.165.0",
      "10.68.164.0"
    ],
    "answer": 3,
    "explanation": "For host 10.68.165.242/22, the subnet mask bits reveal the network ID is 10.68.164.0 and broadcast address is 10.68.167.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "56.50 ms",
      "52.00 ms",
      "520.00 ms",
      "26.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5200 bits / (100 * 1000 bps) = 52.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.128.119 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.129.0",
      "255.255.255.255",
      "192.168.128.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 192.168.128.119/24, the subnet mask bits reveal the network ID is 192.168.128.0 and broadcast address is 192.168.128.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3400 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "344.50 ms",
      "170.00 ms",
      "340.00 ms",
      "3400.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3400 bits / (10 * 1000 bps) = 340.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1870 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "392.796 ms",
      "405.296 ms",
      "589.194 ms",
      "98.199 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1870 * 1024 * 8) / (39 * 10^6) = 392.796 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1490 KB over a point-to-point network link with transmission bandwidth rate of 81 Mbps. What is the theoretical transmission delay?",
    "options": [
      "163.192 ms",
      "150.692 ms",
      "226.039 ms",
      "37.673 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1490 * 1024 * 8) / (81 * 10^6) = 150.692 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1150 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "134.583 ms",
      "33.646 ms",
      "201.874 ms",
      "147.083 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1150 * 1024 * 8) / (70 * 10^6) = 134.583 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4600 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "460.00 ms",
      "50.50 ms",
      "23.00 ms",
      "46.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4600 bits / (100 * 1000 bps) = 46.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.125.219.54 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.125.219.64",
      "10.125.220.0",
      "10.125.219.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 10.125.219.54/26, the subnet mask bits reveal the network ID is 10.125.219.0 and broadcast address is 10.125.219.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3400 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "34.00 ms",
      "68.00 ms",
      "72.50 ms",
      "680.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3400 bits / (50 * 1000 bps) = 68.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.166.78 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.166.79",
      "192.168.166.48",
      "192.168.166.80",
      "192.168.167.64"
    ],
    "answer": 0,
    "explanation": "For host 192.168.166.78/28, the subnet mask bits reveal the network ID is 192.168.166.64 and broadcast address is 192.168.166.79."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1200 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "6.90 ms",
      "24.00 ms",
      "2.40 ms",
      "1.20 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1200 bits / (500 * 1000 bps) = 2.40 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.188.156 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.189.156",
      "192.168.188.160",
      "192.168.188.159",
      "192.168.188.152"
    ],
    "answer": 2,
    "explanation": "For host 192.168.188.156/30, the subnet mask bits reveal the network ID is 192.168.188.156 and broadcast address is 192.168.188.159."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5800 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "5.80 ms",
      "116.00 ms",
      "16.10 ms",
      "11.60 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5800 bits / (500 * 1000 bps) = 11.60 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.79.243 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.79.0",
      "172.26.79.224",
      "172.26.79.255",
      "172.26.80.240"
    ],
    "answer": 2,
    "explanation": "For host 172.26.79.243/28, the subnet mask bits reveal the network ID is 172.26.79.240 and broadcast address is 172.26.79.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3100 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "529.067 ms",
      "352.711 ms",
      "365.211 ms",
      "88.178 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3100 * 1024 * 8) / (72 * 10^6) = 352.711 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3670 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "455.525 ms",
      "303.683 ms",
      "316.183 ms",
      "75.921 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3670 * 1024 * 8) / (99 * 10^6) = 303.683 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.172.216.189 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.172.216.192",
      "10.172.217.128",
      "10.172.216.128",
      "10.172.216.64"
    ],
    "answer": 2,
    "explanation": "For host 10.172.216.189/26, the subnet mask bits reveal the network ID is 10.172.216.128 and broadcast address is 10.172.216.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.95.209 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.95.0",
      "172.24.95.0",
      "172.24.96.128",
      "172.24.95.128"
    ],
    "answer": 3,
    "explanation": "For host 172.24.95.209/25, the subnet mask bits reveal the network ID is 172.24.95.128 and broadcast address is 172.24.95.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3290 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "386.829 ms",
      "374.329 ms",
      "561.493 ms",
      "93.582 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3290 * 1024 * 8) / (72 * 10^6) = 374.329 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 810 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "510.425 ms",
      "765.637 ms",
      "522.925 ms",
      "127.606 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (810 * 1024 * 8) / (13 * 10^6) = 510.425 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3070 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "83.831 ms",
      "335.326 ms",
      "502.989 ms",
      "347.826 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3070 * 1024 * 8) / (75 * 10^6) = 335.326 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2580 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "258.260 ms",
      "368.640 ms",
      "61.440 ms",
      "245.760 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2580 * 1024 * 8) / (86 * 10^6) = 245.760 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.55.20 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.54.0",
      "192.168.55.0",
      "192.168.55.0",
      "192.168.56.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.55.20/23, the subnet mask bits reveal the network ID is 192.168.54.0 and broadcast address is 192.168.55.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.54.129 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.21.54.112",
      "172.21.54.144",
      "172.21.55.128",
      "172.21.54.128"
    ],
    "answer": 3,
    "explanation": "For host 172.21.54.129/28, the subnet mask bits reveal the network ID is 172.21.54.128 and broadcast address is 172.21.54.143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3540 KB over a point-to-point network link with transmission bandwidth rate of 29 Mbps. What is the theoretical transmission delay?",
    "options": [
      "999.989 ms",
      "1012.489 ms",
      "249.997 ms",
      "1499.983 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3540 * 1024 * 8) / (29 * 10^6) = 999.989 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3640 KB over a point-to-point network link with transmission bandwidth rate of 90 Mbps. What is the theoretical transmission delay?",
    "options": [
      "343.821 ms",
      "82.830 ms",
      "331.321 ms",
      "496.981 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3640 * 1024 * 8) / (90 * 10^6) = 331.321 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2110 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "84.731 ms",
      "338.924 ms",
      "508.386 ms",
      "351.424 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2110 * 1024 * 8) / (51 * 10^6) = 338.924 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.168.233.254 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.168.233.0",
      "10.168.233.240",
      "10.168.233.248",
      "10.168.234.248"
    ],
    "answer": 2,
    "explanation": "For host 10.168.233.254/29, the subnet mask bits reveal the network ID is 10.168.233.248 and broadcast address is 10.168.233.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2450 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "122.50 ms",
      "2450.00 ms",
      "249.50 ms",
      "245.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2450 bits / (10 * 1000 bps) = 245.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4450 KB over a point-to-point network link with transmission bandwidth rate of 68 Mbps. What is the theoretical transmission delay?",
    "options": [
      "804.141 ms",
      "548.594 ms",
      "536.094 ms",
      "134.024 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4450 * 1024 * 8) / (68 * 10^6) = 536.094 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "2.40 ms",
      "9.30 ms",
      "4.80 ms",
      "48.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2400 bits / (500 * 1000 bps) = 4.80 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.215.41.133 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.215.43.255",
      "10.215.41.0",
      "10.215.41.0",
      "10.215.42.0"
    ],
    "answer": 0,
    "explanation": "For host 10.215.41.133/22, the subnet mask bits reveal the network ID is 10.215.40.0 and broadcast address is 10.215.43.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.18.218 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.18.220",
      "192.168.18.212",
      "192.168.18.216",
      "192.168.19.216"
    ],
    "answer": 2,
    "explanation": "For host 192.168.18.218/30, the subnet mask bits reveal the network ID is 192.168.18.216 and broadcast address is 192.168.18.219."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.9.143.56 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.9.143.64",
      "10.9.143.48",
      "10.9.144.56",
      "10.9.143.56"
    ],
    "answer": 3,
    "explanation": "For host 10.9.143.56/29, the subnet mask bits reveal the network ID is 10.9.143.56 and broadcast address is 10.9.143.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.188.233.15 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.188.233.32",
      "10.188.233.0",
      "10.188.234.0",
      "10.188.233.31"
    ],
    "answer": 3,
    "explanation": "For host 10.188.233.15/27, the subnet mask bits reveal the network ID is 10.188.233.0 and broadcast address is 10.188.233.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1200 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "10.50 ms",
      "6.00 ms",
      "60.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1200 bits / (200 * 1000 bps) = 6.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.196.42 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.196.128",
      "192.168.196.0",
      "192.168.196.127",
      "192.168.197.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.196.42/25, the subnet mask bits reveal the network ID is 192.168.196.0 and broadcast address is 192.168.196.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.215.184 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.215.128",
      "172.20.216.128",
      "172.20.215.0",
      "172.20.215.0"
    ],
    "answer": 0,
    "explanation": "For host 172.20.215.184/25, the subnet mask bits reveal the network ID is 172.20.215.128 and broadcast address is 172.20.215.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3300 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "300.091 ms",
      "71.898 ms",
      "287.591 ms",
      "431.387 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3300 * 1024 * 8) / (94 * 10^6) = 287.591 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3680 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "572.403 ms",
      "394.102 ms",
      "95.401 ms",
      "381.602 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3680 * 1024 * 8) / (79 * 10^6) = 381.602 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4380 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2990.080 ms",
      "11960.320 ms",
      "17940.480 ms",
      "11972.820 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4380 * 1024 * 8) / (3 * 10^6) = 11960.320 ms."
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
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.182.15 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.183.0",
      "255.255.255.255",
      "192.168.182.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.182.15/24, the subnet mask bits reveal the network ID is 192.168.182.0 and broadcast address is 192.168.182.255."
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
    "question": "A client sends a file of size 2370 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "230.647 ms",
      "54.537 ms",
      "327.220 ms",
      "218.147 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2370 * 1024 * 8) / (89 * 10^6) = 218.147 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2250 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "22.50 ms",
      "45.00 ms",
      "49.50 ms",
      "450.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2250 bits / (50 * 1000 bps) = 45.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.104.100 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.105.96",
      "192.168.104.111",
      "192.168.104.80",
      "192.168.104.112"
    ],
    "answer": 1,
    "explanation": "For host 192.168.104.100/28, the subnet mask bits reveal the network ID is 192.168.104.96 and broadcast address is 192.168.104.111."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3900 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "335.215 ms",
      "322.715 ms",
      "484.073 ms",
      "80.679 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3900 * 1024 * 8) / (99 * 10^6) = 322.715 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4850 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "247.00 ms",
      "121.25 ms",
      "2425.00 ms",
      "242.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4850 bits / (20 * 1000 bps) = 242.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3200 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "36.50 ms",
      "320.00 ms",
      "16.00 ms",
      "32.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3200 bits / (100 * 1000 bps) = 32.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.216.212 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.216.200",
      "172.26.216.216",
      "172.26.216.208",
      "172.26.217.208"
    ],
    "answer": 2,
    "explanation": "For host 172.26.216.212/29, the subnet mask bits reveal the network ID is 172.26.216.208 and broadcast address is 172.26.216.215."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1500 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "37.50 ms",
      "75.00 ms",
      "79.50 ms",
      "750.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1500 bits / (20 * 1000 bps) = 75.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.19.63 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.20.56",
      "172.24.19.48",
      "172.24.19.63",
      "172.24.19.64"
    ],
    "answer": 2,
    "explanation": "For host 172.24.19.63/29, the subnet mask bits reveal the network ID is 172.24.19.56 and broadcast address is 172.24.19.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.165.19 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.165.0",
      "172.24.166.0",
      "172.24.165.0",
      "172.24.165.255"
    ],
    "answer": 3,
    "explanation": "For host 172.24.165.19/23, the subnet mask bits reveal the network ID is 172.24.164.0 and broadcast address is 172.24.165.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.104.143.129 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.104.143.0",
      "10.104.144.0",
      "10.104.143.255",
      "10.104.143.0"
    ],
    "answer": 2,
    "explanation": "For host 10.104.143.129/22, the subnet mask bits reveal the network ID is 10.104.140.0 and broadcast address is 10.104.143.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2200 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "48.50 ms",
      "22.00 ms",
      "440.00 ms",
      "44.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2200 bits / (50 * 1000 bps) = 44.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.98.150 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.99.144",
      "172.19.98.160",
      "172.19.98.128",
      "172.19.98.159"
    ],
    "answer": 3,
    "explanation": "For host 172.19.98.150/28, the subnet mask bits reveal the network ID is 172.19.98.144 and broadcast address is 172.19.98.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.234.18 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.234.32",
      "172.23.234.0",
      "172.23.234.31",
      "172.23.235.16"
    ],
    "answer": 2,
    "explanation": "For host 172.23.234.18/28, the subnet mask bits reveal the network ID is 172.23.234.16 and broadcast address is 172.23.234.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3650 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "36.50 ms",
      "365.00 ms",
      "41.00 ms",
      "18.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3650 bits / (100 * 1000 bps) = 36.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1550 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2720.914 ms",
      "1813.943 ms",
      "1826.443 ms",
      "453.486 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1550 * 1024 * 8) / (7 * 10^6) = 1813.943 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.144.143 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.144.64",
      "172.25.144.192",
      "172.25.144.128",
      "172.25.145.128"
    ],
    "answer": 2,
    "explanation": "For host 172.25.144.143/26, the subnet mask bits reveal the network ID is 172.25.144.128 and broadcast address is 172.25.144.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.6.134.123 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.6.134.0",
      "10.6.134.0",
      "10.6.135.255",
      "10.6.135.0"
    ],
    "answer": 2,
    "explanation": "For host 10.6.134.123/23, the subnet mask bits reveal the network ID is 10.6.134.0 and broadcast address is 10.6.135.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.118.158 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.118.152",
      "192.168.119.156",
      "192.168.118.160",
      "192.168.118.156"
    ],
    "answer": 3,
    "explanation": "For host 192.168.118.158/30, the subnet mask bits reveal the network ID is 192.168.118.156 and broadcast address is 192.168.118.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.232.40.103 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.232.41.64",
      "10.232.40.127",
      "10.232.40.0",
      "10.232.40.128"
    ],
    "answer": 1,
    "explanation": "For host 10.232.40.103/26, the subnet mask bits reveal the network ID is 10.232.40.64 and broadcast address is 10.232.40.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.174.11.246 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.174.12.0",
      "255.255.255.255",
      "10.174.11.0"
    ],
    "answer": 3,
    "explanation": "For host 10.174.11.246/24, the subnet mask bits reveal the network ID is 10.174.11.0 and broadcast address is 10.174.11.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2280 KB over a point-to-point network link with transmission bandwidth rate of 25 Mbps. What is the theoretical transmission delay?",
    "options": [
      "747.110 ms",
      "759.610 ms",
      "1120.666 ms",
      "186.778 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2280 * 1024 * 8) / (25 * 10^6) = 747.110 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.254.93 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.254.0",
      "192.168.255.0",
      "192.168.255.255",
      "192.168.254.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.254.93/22, the subnet mask bits reveal the network ID is 192.168.252.0 and broadcast address is 192.168.255.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.209.133 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.21.210.0",
      "172.21.209.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.21.209.133/24, the subnet mask bits reveal the network ID is 172.21.209.0 and broadcast address is 172.21.209.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.182.28 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.182.24",
      "192.168.182.32",
      "192.168.183.28",
      "192.168.182.31"
    ],
    "answer": 3,
    "explanation": "For host 192.168.182.28/30, the subnet mask bits reveal the network ID is 192.168.182.28 and broadcast address is 192.168.182.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.217.182 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.31.217.0",
      "172.31.218.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 172.31.217.182/24, the subnet mask bits reveal the network ID is 172.31.217.0 and broadcast address is 172.31.217.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4950 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "49.50 ms",
      "24.75 ms",
      "495.00 ms",
      "54.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4950 bits / (100 * 1000 bps) = 49.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2500 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "12.50 ms",
      "125.00 ms",
      "6.25 ms",
      "17.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2500 bits / (200 * 1000 bps) = 12.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.47.123 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.19.48.0",
      "172.19.47.0",
      "172.19.47.128"
    ],
    "answer": 2,
    "explanation": "For host 172.19.47.123/25, the subnet mask bits reveal the network ID is 172.19.47.0 and broadcast address is 172.19.47.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.191.59.84 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.191.59.32",
      "10.191.59.96",
      "10.191.60.64",
      "10.191.59.64"
    ],
    "answer": 3,
    "explanation": "For host 10.191.59.84/27, the subnet mask bits reveal the network ID is 10.191.59.64 and broadcast address is 10.191.59.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2770 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "354.560 ms",
      "367.060 ms",
      "531.840 ms",
      "88.640 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2770 * 1024 * 8) / (64 * 10^6) = 354.560 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.225.33 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.225.128",
      "172.24.226.0",
      "172.24.225.0",
      "172.24.225.127"
    ],
    "answer": 3,
    "explanation": "For host 172.24.225.33/25, the subnet mask bits reveal the network ID is 172.24.225.0 and broadcast address is 172.24.225.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3570 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "708.820 ms",
      "1044.480 ms",
      "696.320 ms",
      "174.080 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3570 * 1024 * 8) / (42 * 10^6) = 696.320 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "9.00 ms",
      "90.00 ms",
      "4.50 ms",
      "13.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1800 bits / (200 * 1000 bps) = 9.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4500 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "27.00 ms",
      "22.50 ms",
      "11.25 ms",
      "225.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4500 bits / (200 * 1000 bps) = 22.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.119.76 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.119.48",
      "192.168.119.80",
      "192.168.120.64",
      "192.168.119.64"
    ],
    "answer": 3,
    "explanation": "For host 192.168.119.76/28, the subnet mask bits reveal the network ID is 192.168.119.64 and broadcast address is 192.168.119.79."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "52.50 ms",
      "525.00 ms",
      "26.25 ms",
      "57.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5250 bits / (100 * 1000 bps) = 52.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4250 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "429.50 ms",
      "425.00 ms",
      "212.50 ms",
      "4250.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4250 bits / (10 * 1000 bps) = 425.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 710 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "35.465 ms",
      "154.361 ms",
      "212.792 ms",
      "141.861 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (710 * 1024 * 8) / (41 * 10^6) = 141.861 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.22.211 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.22.212",
      "172.20.23.208",
      "172.20.22.204",
      "172.20.22.211"
    ],
    "answer": 3,
    "explanation": "For host 172.20.22.211/30, the subnet mask bits reveal the network ID is 172.20.22.208 and broadcast address is 172.20.22.211."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.185.33 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.185.47",
      "172.28.186.32",
      "172.28.185.16",
      "172.28.185.48"
    ],
    "answer": 0,
    "explanation": "For host 172.28.185.33/28, the subnet mask bits reveal the network ID is 172.28.185.32 and broadcast address is 172.28.185.47."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.254.173 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "172.28.255.0",
      "172.28.254.0"
    ],
    "answer": 3,
    "explanation": "For host 172.28.254.173/23, the subnet mask bits reveal the network ID is 172.28.254.0 and broadcast address is 172.28.255.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.4.152.247 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.4.152.224",
      "10.4.153.240",
      "10.4.152.255",
      "10.4.152.0"
    ],
    "answer": 2,
    "explanation": "For host 10.4.152.247/28, the subnet mask bits reveal the network ID is 10.4.152.240 and broadcast address is 10.4.152.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4760 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "808.294 ms",
      "1193.691 ms",
      "198.949 ms",
      "795.794 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4760 * 1024 * 8) / (49 * 10^6) = 795.794 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "53.00 ms",
      "1060.00 ms",
      "106.00 ms",
      "110.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5300 bits / (50 * 1000 bps) = 106.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4110 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "405.652 ms",
      "101.413 ms",
      "418.152 ms",
      "608.478 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4110 * 1024 * 8) / (83 * 10^6) = 405.652 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.30.160 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.30.0",
      "192.168.28.0",
      "192.168.30.0",
      "192.168.31.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.30.160/22, the subnet mask bits reveal the network ID is 192.168.28.0 and broadcast address is 192.168.31.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.175.99 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.175.80",
      "172.26.176.96",
      "172.26.175.112",
      "172.26.175.111"
    ],
    "answer": 3,
    "explanation": "For host 172.26.175.99/28, the subnet mask bits reveal the network ID is 172.26.175.96 and broadcast address is 172.26.175.111."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.108.250 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.108.0",
      "192.168.109.128",
      "192.168.108.0",
      "192.168.108.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.108.250/25, the subnet mask bits reveal the network ID is 192.168.108.128 and broadcast address is 192.168.108.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "9.00 ms",
      "180.00 ms",
      "18.00 ms",
      "22.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1800 bits / (100 * 1000 bps) = 18.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1110 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "192.108 ms",
      "32.018 ms",
      "140.572 ms",
      "128.072 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1110 * 1024 * 8) / (71 * 10^6) = 128.072 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.9.49 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.30.9.0",
      "172.30.9.0",
      "172.30.10.0",
      "172.30.11.255"
    ],
    "answer": 3,
    "explanation": "For host 172.30.9.49/22, the subnet mask bits reveal the network ID is 172.30.8.0 and broadcast address is 172.30.11.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4330 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "445.078 ms",
      "432.578 ms",
      "108.144 ms",
      "648.866 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4330 * 1024 * 8) / (82 * 10^6) = 432.578 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.168.227 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.168.0",
      "192.168.168.0",
      "192.168.169.128",
      "192.168.168.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.168.227/25, the subnet mask bits reveal the network ID is 192.168.168.128 and broadcast address is 192.168.168.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2370 KB over a point-to-point network link with transmission bandwidth rate of 32 Mbps. What is the theoretical transmission delay?",
    "options": [
      "606.720 ms",
      "151.680 ms",
      "619.220 ms",
      "910.080 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2370 * 1024 * 8) / (32 * 10^6) = 606.720 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.140.17 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "192.168.140.0",
      "192.168.141.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.140.17/24, the subnet mask bits reveal the network ID is 192.168.140.0 and broadcast address is 192.168.140.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.169.75 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.170.64",
      "192.168.169.48",
      "192.168.169.80",
      "192.168.169.79"
    ],
    "answer": 3,
    "explanation": "For host 192.168.169.75/28, the subnet mask bits reveal the network ID is 192.168.169.64 and broadcast address is 192.168.169.79."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 140 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "27.395 ms",
      "14.895 ms",
      "22.342 ms",
      "3.724 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (140 * 1024 * 8) / (77 * 10^6) = 14.895 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "132.50 ms",
      "1325.00 ms",
      "137.00 ms",
      "66.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2650 bits / (20 * 1000 bps) = 132.50 ms."
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4680 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "121.325 ms",
      "485.298 ms",
      "727.947 ms",
      "497.798 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4680 * 1024 * 8) / (79 * 10^6) = 485.298 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "4200.00 ms",
      "420.00 ms",
      "210.00 ms",
      "424.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4200 bits / (10 * 1000 bps) = 420.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.112.176 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.112.192",
      "172.26.112.128",
      "172.26.112.191",
      "172.26.113.160"
    ],
    "answer": 2,
    "explanation": "For host 172.26.112.176/27, the subnet mask bits reveal the network ID is 172.26.112.160 and broadcast address is 172.26.112.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.54.237 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.55.224",
      "192.168.54.0",
      "192.168.54.255",
      "192.168.54.192"
    ],
    "answer": 2,
    "explanation": "For host 192.168.54.237/27, the subnet mask bits reveal the network ID is 192.168.54.224 and broadcast address is 192.168.54.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4050 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "24.75 ms",
      "20.25 ms",
      "202.50 ms",
      "10.13 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4050 bits / (200 * 1000 bps) = 20.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2090 KB over a point-to-point network link with transmission bandwidth rate of 80 Mbps. What is the theoretical transmission delay?",
    "options": [
      "53.504 ms",
      "214.016 ms",
      "321.024 ms",
      "226.516 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2090 * 1024 * 8) / (80 * 10^6) = 214.016 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.21.174 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.21.176",
      "192.168.21.175",
      "192.168.21.144",
      "192.168.22.160"
    ],
    "answer": 1,
    "explanation": "For host 192.168.21.174/28, the subnet mask bits reveal the network ID is 192.168.21.160 and broadcast address is 192.168.21.175."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "165.00 ms",
      "8.25 ms",
      "16.50 ms",
      "21.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1650 bits / (100 * 1000 bps) = 16.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.163.40 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.163.0",
      "172.22.163.255",
      "172.22.163.0",
      "172.22.164.0"
    ],
    "answer": 1,
    "explanation": "For host 172.22.163.40/24, the subnet mask bits reveal the network ID is 172.22.163.0 and broadcast address is 172.22.163.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3230 KB over a point-to-point network link with transmission bandwidth rate of 32 Mbps. What is the theoretical transmission delay?",
    "options": [
      "826.880 ms",
      "1240.320 ms",
      "839.380 ms",
      "206.720 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3230 * 1024 * 8) / (32 * 10^6) = 826.880 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.213.245.116 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.213.244.0",
      "10.213.245.0",
      "10.213.246.0",
      "10.213.245.0"
    ],
    "answer": 0,
    "explanation": "For host 10.213.245.116/22, the subnet mask bits reveal the network ID is 10.213.244.0 and broadcast address is 10.213.247.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4650 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "11.63 ms",
      "23.25 ms",
      "27.75 ms",
      "232.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4650 bits / (200 * 1000 bps) = 23.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.166.110 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.27.167.0",
      "172.27.166.128",
      "172.27.166.0"
    ],
    "answer": 3,
    "explanation": "For host 172.27.166.110/25, the subnet mask bits reveal the network ID is 172.27.166.0 and broadcast address is 172.27.166.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1250 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "192.149 ms",
      "44.912 ms",
      "269.474 ms",
      "179.649 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1250 * 1024 * 8) / (57 * 10^6) = 179.649 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.4.63.75 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.4.64.0",
      "10.4.63.0",
      "10.4.62.0",
      "10.4.63.0"
    ],
    "answer": 2,
    "explanation": "For host 10.4.63.75/23, the subnet mask bits reveal the network ID is 10.4.62.0 and broadcast address is 10.4.63.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5150 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "51.50 ms",
      "1030.00 ms",
      "107.50 ms",
      "103.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5150 bits / (50 * 1000 bps) = 103.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3950 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "98.75 ms",
      "197.50 ms",
      "202.00 ms",
      "1975.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3950 bits / (20 * 1000 bps) = 197.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.53.76 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.53.76",
      "192.168.53.80",
      "192.168.53.72",
      "192.168.54.76"
    ],
    "answer": 0,
    "explanation": "For host 192.168.53.76/30, the subnet mask bits reveal the network ID is 192.168.53.76 and broadcast address is 192.168.53.79."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2950 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "63.50 ms",
      "29.50 ms",
      "590.00 ms",
      "59.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2950 bits / (50 * 1000 bps) = 59.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.186.59.68 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.186.59.96",
      "10.186.59.95",
      "10.186.60.64",
      "10.186.59.32"
    ],
    "answer": 1,
    "explanation": "For host 10.186.59.68/27, the subnet mask bits reveal the network ID is 10.186.59.64 and broadcast address is 10.186.59.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4710 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4823.040 ms",
      "803.840 ms",
      "3215.360 ms",
      "3227.860 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4710 * 1024 * 8) / (12 * 10^6) = 3215.360 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.237.140.148 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.237.141.128",
      "10.237.140.128",
      "10.237.140.64",
      "10.237.140.192"
    ],
    "answer": 1,
    "explanation": "For host 10.237.140.148/26, the subnet mask bits reveal the network ID is 10.237.140.128 and broadcast address is 10.237.140.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "104.50 ms",
      "50.00 ms",
      "1000.00 ms",
      "100.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5000 bits / (50 * 1000 bps) = 100.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 570 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "50.755 ms",
      "63.255 ms",
      "76.132 ms",
      "12.689 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (570 * 1024 * 8) / (92 * 10^6) = 50.755 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.244.175 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.245.168",
      "192.168.244.160",
      "192.168.244.176",
      "192.168.244.175"
    ],
    "answer": 3,
    "explanation": "For host 192.168.244.175/29, the subnet mask bits reveal the network ID is 192.168.244.168 and broadcast address is 192.168.244.175."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.90.253 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.90.0",
      "255.255.255.255",
      "255.255.255.255",
      "172.24.91.0"
    ],
    "answer": 0,
    "explanation": "For host 172.24.90.253/23, the subnet mask bits reveal the network ID is 172.24.90.0 and broadcast address is 172.24.91.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.15.190 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.15.0",
      "192.168.16.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 192.168.15.190/24, the subnet mask bits reveal the network ID is 192.168.15.0 and broadcast address is 192.168.15.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3260 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "989.108 ms",
      "1483.662 ms",
      "1001.608 ms",
      "247.277 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3260 * 1024 * 8) / (27 * 10^6) = 989.108 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.76.160.83 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.76.160.95",
      "10.76.160.64",
      "10.76.161.80",
      "10.76.160.96"
    ],
    "answer": 0,
    "explanation": "For host 10.76.160.83/28, the subnet mask bits reveal the network ID is 10.76.160.80 and broadcast address is 10.76.160.95."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "59.00 ms",
      "63.50 ms",
      "29.50 ms",
      "590.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5900 bits / (100 * 1000 bps) = 59.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2330 KB over a point-to-point network link with transmission bandwidth rate of 62 Mbps. What is the theoretical transmission delay?",
    "options": [
      "320.361 ms",
      "461.791 ms",
      "76.965 ms",
      "307.861 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2330 * 1024 * 8) / (62 * 10^6) = 307.861 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 200 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "7.062 ms",
      "40.748 ms",
      "42.372 ms",
      "28.248 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (200 * 1024 * 8) / (58 * 10^6) = 28.248 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3550 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "519.314 ms",
      "86.552 ms",
      "346.210 ms",
      "358.710 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3550 * 1024 * 8) / (84 * 10^6) = 346.210 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.195.20 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.195.0",
      "192.168.195.63",
      "192.168.196.0",
      "192.168.195.64"
    ],
    "answer": 1,
    "explanation": "For host 192.168.195.20/26, the subnet mask bits reveal the network ID is 192.168.195.0 and broadcast address is 192.168.195.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.173.30 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.172.0",
      "192.168.173.0",
      "192.168.174.0",
      "192.168.173.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.173.30/22, the subnet mask bits reveal the network ID is 192.168.172.0 and broadcast address is 192.168.175.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4060 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "346.453 ms",
      "519.680 ms",
      "86.613 ms",
      "358.953 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4060 * 1024 * 8) / (96 * 10^6) = 346.453 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4380 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "390.010 ms",
      "585.016 ms",
      "97.503 ms",
      "402.510 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4380 * 1024 * 8) / (92 * 10^6) = 390.010 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "265.00 ms",
      "269.50 ms",
      "132.50 ms",
      "2650.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2650 bits / (10 * 1000 bps) = 265.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.169.205.78 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.169.206.64",
      "10.169.205.64",
      "10.169.205.48",
      "10.169.205.80"
    ],
    "answer": 1,
    "explanation": "For host 10.169.205.78/28, the subnet mask bits reveal the network ID is 10.169.205.64 and broadcast address is 10.169.205.79."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.93.220 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.93.0",
      "192.168.93.128",
      "192.168.94.128",
      "192.168.93.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.93.220/25, the subnet mask bits reveal the network ID is 192.168.93.128 and broadcast address is 192.168.93.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "30.00 ms",
      "34.50 ms",
      "15.00 ms",
      "300.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3000 bits / (100 * 1000 bps) = 30.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.206.138 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.206.112",
      "192.168.206.128",
      "192.168.207.128",
      "192.168.206.144"
    ],
    "answer": 1,
    "explanation": "For host 192.168.206.138/28, the subnet mask bits reveal the network ID is 192.168.206.128 and broadcast address is 192.168.206.143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3480 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1900.544 ms",
      "475.136 ms",
      "2850.816 ms",
      "1913.044 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3480 * 1024 * 8) / (15 * 10^6) = 1900.544 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.119.244 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.120.0",
      "192.168.119.255",
      "192.168.119.0",
      "192.168.119.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.119.244/22, the subnet mask bits reveal the network ID is 192.168.116.0 and broadcast address is 192.168.119.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1690 KB over a point-to-point network link with transmission bandwidth rate of 72 Mbps. What is the theoretical transmission delay?",
    "options": [
      "192.284 ms",
      "204.784 ms",
      "288.427 ms",
      "48.071 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1690 * 1024 * 8) / (72 * 10^6) = 192.284 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2790 KB over a point-to-point network link with transmission bandwidth rate of 60 Mbps. What is the theoretical transmission delay?",
    "options": [
      "571.392 ms",
      "95.232 ms",
      "380.928 ms",
      "393.428 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2790 * 1024 * 8) / (60 * 10^6) = 380.928 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1100 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "1100.00 ms",
      "110.00 ms",
      "114.50 ms",
      "55.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1100 bits / (10 * 1000 bps) = 110.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1620 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3981.312 ms",
      "663.552 ms",
      "2666.708 ms",
      "2654.208 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1620 * 1024 * 8) / (5 * 10^6) = 2654.208 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5450 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "109.00 ms",
      "54.50 ms",
      "113.50 ms",
      "1090.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5450 bits / (50 * 1000 bps) = 109.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1400 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "14.00 ms",
      "7.00 ms",
      "140.00 ms",
      "18.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1400 bits / (100 * 1000 bps) = 14.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.84.50.23 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.84.50.0",
      "10.84.50.127",
      "10.84.50.128",
      "10.84.51.0"
    ],
    "answer": 1,
    "explanation": "For host 10.84.50.23/25, the subnet mask bits reveal the network ID is 10.84.50.0 and broadcast address is 10.84.50.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.147.236.178 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.147.239.255",
      "10.147.237.0",
      "10.147.236.0",
      "10.147.236.0"
    ],
    "answer": 0,
    "explanation": "For host 10.147.236.178/22, the subnet mask bits reveal the network ID is 10.147.236.0 and broadcast address is 10.147.239.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.144.206.44 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.144.207.0",
      "255.255.255.255",
      "10.144.206.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 10.144.206.44/24, the subnet mask bits reveal the network ID is 10.144.206.0 and broadcast address is 10.144.206.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3010 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "393.477 ms",
      "274.818 ms",
      "65.580 ms",
      "262.318 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3010 * 1024 * 8) / (94 * 10^6) = 262.318 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "292.50 ms",
      "5850.00 ms",
      "589.50 ms",
      "585.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5850 bits / (10 * 1000 bps) = 585.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.205.250.58 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.205.250.0",
      "10.205.250.64",
      "10.205.250.63",
      "10.205.251.0"
    ],
    "answer": 2,
    "explanation": "For host 10.205.250.58/26, the subnet mask bits reveal the network ID is 10.205.250.0 and broadcast address is 10.205.250.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.40.81.79 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.40.82.64",
      "10.40.81.32",
      "10.40.81.95",
      "10.40.81.96"
    ],
    "answer": 2,
    "explanation": "For host 10.40.81.79/27, the subnet mask bits reveal the network ID is 10.40.81.64 and broadcast address is 10.40.81.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 550 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "65.507 ms",
      "53.007 ms",
      "79.511 ms",
      "13.252 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (550 * 1024 * 8) / (85 * 10^6) = 53.007 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.10.2 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.10.4",
      "192.168.10.0",
      "255.255.255.255",
      "192.168.11.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.10.2/30, the subnet mask bits reveal the network ID is 192.168.10.0 and broadcast address is 192.168.10.3."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 120 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "24.576 ms",
      "36.864 ms",
      "6.144 ms",
      "37.076 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (120 * 1024 * 8) / (40 * 10^6) = 24.576 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 790 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "67.413 ms",
      "101.120 ms",
      "16.853 ms",
      "79.913 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (790 * 1024 * 8) / (96 * 10^6) = 67.413 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.143.72 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.29.143.64",
      "172.29.144.72",
      "172.29.143.80",
      "172.29.143.79"
    ],
    "answer": 3,
    "explanation": "For host 172.29.143.72/29, the subnet mask bits reveal the network ID is 172.29.143.72 and broadcast address is 172.29.143.79."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 490 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "10.453 ms",
      "62.720 ms",
      "41.813 ms",
      "54.313 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (490 * 1024 * 8) / (96 * 10^6) = 41.813 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4270 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "130.522 ms",
      "783.131 ms",
      "522.087 ms",
      "534.587 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4270 * 1024 * 8) / (67 * 10^6) = 522.087 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2050 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "205.00 ms",
      "20.50 ms",
      "10.25 ms",
      "25.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2050 bits / (100 * 1000 bps) = 20.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2800 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "56.00 ms",
      "10.10 ms",
      "5.60 ms",
      "2.80 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2800 bits / (500 * 1000 bps) = 5.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 630 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "22.636 ms",
      "103.043 ms",
      "135.815 ms",
      "90.543 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (630 * 1024 * 8) / (57 * 10^6) = 90.543 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.139.178 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.139.0",
      "172.30.140.128",
      "172.30.139.0",
      "172.30.139.128"
    ],
    "answer": 3,
    "explanation": "For host 172.30.139.178/25, the subnet mask bits reveal the network ID is 172.30.139.128 and broadcast address is 172.30.139.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.124.61 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.124.0",
      "192.168.124.32",
      "192.168.124.64",
      "192.168.125.32"
    ],
    "answer": 1,
    "explanation": "For host 192.168.124.61/27, the subnet mask bits reveal the network ID is 192.168.124.32 and broadcast address is 192.168.124.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "41.25 ms",
      "87.00 ms",
      "82.50 ms",
      "825.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1650 bits / (20 * 1000 bps) = 82.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5100 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "14.70 ms",
      "5.10 ms",
      "102.00 ms",
      "10.20 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5100 bits / (500 * 1000 bps) = 10.20 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 990 KB over a point-to-point network link with transmission bandwidth rate of 45 Mbps. What is the theoretical transmission delay?",
    "options": [
      "270.336 ms",
      "180.224 ms",
      "45.056 ms",
      "192.724 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (990 * 1024 * 8) / (45 * 10^6) = 180.224 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2210 KB over a point-to-point network link with transmission bandwidth rate of 21 Mbps. What is the theoretical transmission delay?",
    "options": [
      "874.610 ms",
      "862.110 ms",
      "1293.166 ms",
      "215.528 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2210 * 1024 * 8) / (21 * 10^6) = 862.110 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.3.137 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.3.0",
      "192.168.4.0",
      "192.168.3.255",
      "192.168.3.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.3.137/22, the subnet mask bits reveal the network ID is 192.168.0.0 and broadcast address is 192.168.3.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "289.50 ms",
      "2850.00 ms",
      "285.00 ms",
      "142.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5700 bits / (20 * 1000 bps) = 285.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1300 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "7.10 ms",
      "1.30 ms",
      "2.60 ms",
      "26.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1300 bits / (500 * 1000 bps) = 2.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4200 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "42.00 ms",
      "840.00 ms",
      "88.50 ms",
      "84.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4200 bits / (50 * 1000 bps) = 84.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1400 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "11.50 ms",
      "3.50 ms",
      "70.00 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1400 bits / (200 * 1000 bps) = 7.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "250.00 ms",
      "254.50 ms",
      "2500.00 ms",
      "125.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5000 bits / (20 * 1000 bps) = 250.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3900 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "19.50 ms",
      "9.75 ms",
      "24.00 ms",
      "195.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3900 bits / (200 * 1000 bps) = 19.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1910 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "413.698 ms",
      "401.198 ms",
      "601.797 ms",
      "100.299 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1910 * 1024 * 8) / (39 * 10^6) = 401.198 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2950 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "29.50 ms",
      "34.00 ms",
      "14.75 ms",
      "295.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2950 bits / (100 * 1000 bps) = 29.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.234.70 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.31.234.64",
      "172.31.234.72",
      "172.31.235.68",
      "172.31.234.68"
    ],
    "answer": 3,
    "explanation": "For host 172.31.234.70/30, the subnet mask bits reveal the network ID is 172.31.234.68 and broadcast address is 172.31.234.71."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2040 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "204.588 ms",
      "192.088 ms",
      "48.022 ms",
      "288.132 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2040 * 1024 * 8) / (87 * 10^6) = 192.088 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.125.108 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.125.0",
      "172.22.127.255",
      "172.22.126.0",
      "172.22.125.0"
    ],
    "answer": 1,
    "explanation": "For host 172.22.125.108/22, the subnet mask bits reveal the network ID is 172.22.124.0 and broadcast address is 172.22.127.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2150 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "53.75 ms",
      "107.50 ms",
      "1075.00 ms",
      "112.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2150 bits / (20 * 1000 bps) = 107.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1790 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2443.947 ms",
      "1641.798 ms",
      "407.324 ms",
      "1629.298 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1790 * 1024 * 8) / (9 * 10^6) = 1629.298 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.54.55 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.55.0",
      "192.168.54.0",
      "255.255.255.255",
      "192.168.54.64"
    ],
    "answer": 1,
    "explanation": "For host 192.168.54.55/26, the subnet mask bits reveal the network ID is 192.168.54.0 and broadcast address is 192.168.54.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.175.116 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.175.0",
      "192.168.175.0",
      "192.168.176.0",
      "192.168.175.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.175.116/23, the subnet mask bits reveal the network ID is 192.168.174.0 and broadcast address is 192.168.175.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.77.146 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.77.128",
      "192.168.78.128",
      "192.168.77.96",
      "192.168.77.160"
    ],
    "answer": 0,
    "explanation": "For host 192.168.77.146/27, the subnet mask bits reveal the network ID is 192.168.77.128 and broadcast address is 192.168.77.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 710 KB over a point-to-point network link with transmission bandwidth rate of 54 Mbps. What is the theoretical transmission delay?",
    "options": [
      "120.210 ms",
      "26.927 ms",
      "161.564 ms",
      "107.710 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (710 * 1024 * 8) / (54 * 10^6) = 107.710 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1430 KB over a point-to-point network link with transmission bandwidth rate of 68 Mbps. What is the theoretical transmission delay?",
    "options": [
      "184.773 ms",
      "258.409 ms",
      "172.273 ms",
      "43.068 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1430 * 1024 * 8) / (68 * 10^6) = 172.273 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.22.87 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.28.22.128",
      "172.28.22.0",
      "172.28.23.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.28.22.87/25, the subnet mask bits reveal the network ID is 172.28.22.0 and broadcast address is 172.28.22.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.62.232 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.62.240",
      "192.168.62.208",
      "192.168.62.224",
      "192.168.63.224"
    ],
    "answer": 2,
    "explanation": "For host 192.168.62.232/28, the subnet mask bits reveal the network ID is 192.168.62.224 and broadcast address is 192.168.62.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.249.98.100 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.249.98.0",
      "255.255.255.255",
      "10.249.99.0"
    ],
    "answer": 1,
    "explanation": "For host 10.249.98.100/23, the subnet mask bits reveal the network ID is 10.249.98.0 and broadcast address is 10.249.99.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1750 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "175.00 ms",
      "1750.00 ms",
      "179.50 ms",
      "87.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1750 bits / (10 * 1000 bps) = 175.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.22.134.224 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.22.132.0",
      "10.22.135.0",
      "10.22.134.0",
      "10.22.134.0"
    ],
    "answer": 0,
    "explanation": "For host 10.22.134.224/22, the subnet mask bits reveal the network ID is 10.22.132.0 and broadcast address is 10.22.135.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 540 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "48.612 ms",
      "72.918 ms",
      "61.112 ms",
      "12.153 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (540 * 1024 * 8) / (91 * 10^6) = 48.612 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.83.179.190 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.83.179.0",
      "10.83.179.0",
      "10.83.179.128",
      "10.83.180.128"
    ],
    "answer": 2,
    "explanation": "For host 10.83.179.190/25, the subnet mask bits reveal the network ID is 10.83.179.128 and broadcast address is 10.83.179.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2340 KB over a point-to-point network link with transmission bandwidth rate of 18 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1064.960 ms",
      "266.240 ms",
      "1597.440 ms",
      "1077.460 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2340 * 1024 * 8) / (18 * 10^6) = 1064.960 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.89.95.23 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.89.95.0",
      "10.89.96.0",
      "10.89.94.0",
      "10.89.95.0"
    ],
    "answer": 2,
    "explanation": "For host 10.89.95.23/23, the subnet mask bits reveal the network ID is 10.89.94.0 and broadcast address is 10.89.95.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5350 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "535.00 ms",
      "26.75 ms",
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
    "question": "A router transmits a packet of size 1550 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "12.25 ms",
      "7.75 ms",
      "77.50 ms",
      "3.88 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1550 bits / (200 * 1000 bps) = 7.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.25.198.73 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.25.198.76",
      "10.25.198.72",
      "10.25.198.68",
      "10.25.199.72"
    ],
    "answer": 1,
    "explanation": "For host 10.25.198.73/30, the subnet mask bits reveal the network ID is 10.25.198.72 and broadcast address is 10.25.198.75."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4890 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1496.162 ms",
      "2225.493 ms",
      "370.916 ms",
      "1483.662 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4890 * 1024 * 8) / (27 * 10^6) = 1483.662 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.227.57 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.228.0",
      "172.31.227.64",
      "172.31.227.0",
      "172.31.227.63"
    ],
    "answer": 3,
    "explanation": "For host 172.31.227.57/26, the subnet mask bits reveal the network ID is 172.31.227.0 and broadcast address is 172.31.227.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.80.202.144 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.80.202.0",
      "10.80.203.0",
      "10.80.203.255",
      "10.80.202.0"
    ],
    "answer": 2,
    "explanation": "For host 10.80.202.144/22, the subnet mask bits reveal the network ID is 10.80.200.0 and broadcast address is 10.80.203.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 120 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4.237 ms",
      "25.423 ms",
      "16.949 ms",
      "29.449 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (120 * 1024 * 8) / (58 * 10^6) = 16.949 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4650 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "906.971 ms",
      "1360.457 ms",
      "226.743 ms",
      "919.471 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4650 * 1024 * 8) / (42 * 10^6) = 906.971 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.97.116.207 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.97.116.208",
      "10.97.116.200",
      "10.97.116.192",
      "10.97.117.200"
    ],
    "answer": 1,
    "explanation": "For host 10.97.116.207/29, the subnet mask bits reveal the network ID is 10.97.116.200 and broadcast address is 10.97.116.207."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.203.134 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.204.0",
      "192.168.203.0",
      "192.168.203.0",
      "192.168.203.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.203.134/23, the subnet mask bits reveal the network ID is 192.168.202.0 and broadcast address is 192.168.203.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 440 KB over a point-to-point network link with transmission bandwidth rate of 45 Mbps. What is the theoretical transmission delay?",
    "options": [
      "92.600 ms",
      "20.025 ms",
      "120.149 ms",
      "80.100 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (440 * 1024 * 8) / (45 * 10^6) = 80.100 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.139.112 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.139.0",
      "192.168.140.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 192.168.139.112/24, the subnet mask bits reveal the network ID is 192.168.139.0 and broadcast address is 192.168.139.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.30.52 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.31.0",
      "255.255.255.255",
      "192.168.30.128",
      "192.168.30.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.30.52/25, the subnet mask bits reveal the network ID is 192.168.30.0 and broadcast address is 192.168.30.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "204.50 ms",
      "100.00 ms",
      "200.00 ms",
      "2000.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2000 bits / (10 * 1000 bps) = 200.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1750 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1804.500 ms",
      "448.000 ms",
      "1792.000 ms",
      "2688.000 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1750 * 1024 * 8) / (8 * 10^6) = 1792.000 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5500 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "137.50 ms",
      "2750.00 ms",
      "275.00 ms",
      "279.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5500 bits / (20 * 1000 bps) = 275.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.133.142.240 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.133.142.232",
      "10.133.143.240",
      "10.133.142.240",
      "10.133.142.248"
    ],
    "answer": 2,
    "explanation": "For host 10.133.142.240/29, the subnet mask bits reveal the network ID is 10.133.142.240 and broadcast address is 10.133.142.247."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4120 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3164.160 ms",
      "527.360 ms",
      "2121.940 ms",
      "2109.440 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4120 * 1024 * 8) / (16 * 10^6) = 2109.440 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "270.00 ms",
      "27.00 ms",
      "31.50 ms",
      "13.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2700 bits / (100 * 1000 bps) = 27.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2360 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "408.446 ms",
      "68.074 ms",
      "284.797 ms",
      "272.297 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2360 * 1024 * 8) / (71 * 10^6) = 272.297 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2780 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "255.885 ms",
      "383.827 ms",
      "268.385 ms",
      "63.971 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2780 * 1024 * 8) / (89 * 10^6) = 255.885 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4600 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "588.800 ms",
      "405.033 ms",
      "98.133 ms",
      "392.533 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4600 * 1024 * 8) / (96 * 10^6) = 392.533 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2180 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "73.191 ms",
      "292.763 ms",
      "305.263 ms",
      "439.145 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2180 * 1024 * 8) / (61 * 10^6) = 292.763 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "10.50 ms",
      "105.00 ms",
      "5.25 ms",
      "15.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5250 bits / (500 * 1000 bps) = 10.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4220 KB over a point-to-point network link with transmission bandwidth rate of 60 Mbps. What is the theoretical transmission delay?",
    "options": [
      "864.256 ms",
      "588.671 ms",
      "144.043 ms",
      "576.171 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4220 * 1024 * 8) / (60 * 10^6) = 576.171 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5450 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2725.00 ms",
      "277.00 ms",
      "272.50 ms",
      "136.25 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5450 bits / (20 * 1000 bps) = 272.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.201.1.196 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.201.1.0",
      "10.201.1.128",
      "10.201.1.0",
      "10.201.2.128"
    ],
    "answer": 1,
    "explanation": "For host 10.201.1.196/25, the subnet mask bits reveal the network ID is 10.201.1.128 and broadcast address is 10.201.1.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 260 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "11.329 ms",
      "57.817 ms",
      "67.976 ms",
      "45.317 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (260 * 1024 * 8) / (47 * 10^6) = 45.317 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.175.37 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.176.32",
      "192.168.175.39",
      "192.168.175.40",
      "192.168.175.24"
    ],
    "answer": 1,
    "explanation": "For host 192.168.175.37/29, the subnet mask bits reveal the network ID is 192.168.175.32 and broadcast address is 192.168.175.39."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.132.119 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.132.128",
      "192.168.133.112",
      "192.168.132.96",
      "192.168.132.112"
    ],
    "answer": 3,
    "explanation": "For host 192.168.132.119/28, the subnet mask bits reveal the network ID is 192.168.132.112 and broadcast address is 192.168.132.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3670 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "492.863 ms",
      "123.216 ms",
      "739.294 ms",
      "505.363 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3670 * 1024 * 8) / (61 * 10^6) = 492.863 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4880 KB over a point-to-point network link with transmission bandwidth rate of 85 Mbps. What is the theoretical transmission delay?",
    "options": [
      "117.579 ms",
      "482.817 ms",
      "470.317 ms",
      "705.476 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4880 * 1024 * 8) / (85 * 10^6) = 470.317 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4190 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2031.587 ms",
      "2019.087 ms",
      "3028.631 ms",
      "504.772 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4190 * 1024 * 8) / (17 * 10^6) = 2019.087 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1060 KB over a point-to-point network link with transmission bandwidth rate of 34 Mbps. What is the theoretical transmission delay?",
    "options": [
      "63.849 ms",
      "267.898 ms",
      "255.398 ms",
      "383.096 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1060 * 1024 * 8) / (34 * 10^6) = 255.398 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1860 KB over a point-to-point network link with transmission bandwidth rate of 62 Mbps. What is the theoretical transmission delay?",
    "options": [
      "368.640 ms",
      "258.260 ms",
      "245.760 ms",
      "61.440 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1860 * 1024 * 8) / (62 * 10^6) = 245.760 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2440 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "240.825 ms",
      "253.325 ms",
      "361.238 ms",
      "60.206 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2440 * 1024 * 8) / (83 * 10^6) = 240.825 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2990 KB over a point-to-point network link with transmission bandwidth rate of 18 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2041.173 ms",
      "1360.782 ms",
      "1373.282 ms",
      "340.196 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2990 * 1024 * 8) / (18 * 10^6) = 1360.782 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2850 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "142.50 ms",
      "14.25 ms",
      "18.75 ms",
      "7.13 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2850 bits / (200 * 1000 bps) = 14.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5550 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "60.00 ms",
      "27.75 ms",
      "55.50 ms",
      "555.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5550 bits / (100 * 1000 bps) = 55.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3920 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "365.386 ms",
      "529.329 ms",
      "352.886 ms",
      "88.222 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3920 * 1024 * 8) / (91 * 10^6) = 352.886 ms."
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
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.237.70.54 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.237.70.64",
      "10.237.71.32",
      "10.237.70.0",
      "10.237.70.63"
    ],
    "answer": 3,
    "explanation": "For host 10.237.70.54/27, the subnet mask bits reveal the network ID is 10.237.70.32 and broadcast address is 10.237.70.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4200 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "105.00 ms",
      "210.00 ms",
      "214.50 ms",
      "2100.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4200 bits / (20 * 1000 bps) = 210.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2800 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "284.50 ms",
      "280.00 ms",
      "140.00 ms",
      "2800.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2800 bits / (10 * 1000 bps) = 280.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2100 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "105.00 ms",
      "15.00 ms",
      "5.25 ms",
      "10.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2100 bits / (200 * 1000 bps) = 10.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 380 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "115.295 ms",
      "172.942 ms",
      "127.795 ms",
      "28.824 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (380 * 1024 * 8) / (27 * 10^6) = 115.295 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.68.168 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.68.0",
      "172.19.69.0",
      "172.19.68.0",
      "172.19.68.255"
    ],
    "answer": 3,
    "explanation": "For host 172.19.68.168/24, the subnet mask bits reveal the network ID is 172.19.68.0 and broadcast address is 172.19.68.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.66.185 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.66.184",
      "192.168.66.192",
      "192.168.67.184",
      "192.168.66.176"
    ],
    "answer": 0,
    "explanation": "For host 192.168.66.185/29, the subnet mask bits reveal the network ID is 192.168.66.184 and broadcast address is 192.168.66.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1550 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "7.75 ms",
      "155.00 ms",
      "20.00 ms",
      "15.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1550 bits / (100 * 1000 bps) = 15.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2550 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "2.55 ms",
      "51.00 ms",
      "5.10 ms",
      "9.60 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2550 bits / (500 * 1000 bps) = 5.10 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4810 KB over a point-to-point network link with transmission bandwidth rate of 22 Mbps. What is the theoretical transmission delay?",
    "options": [
      "447.767 ms",
      "1803.569 ms",
      "1791.069 ms",
      "2686.604 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4810 * 1024 * 8) / (22 * 10^6) = 1791.069 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4130 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2831.913 ms",
      "4229.120 ms",
      "2819.413 ms",
      "704.853 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4130 * 1024 * 8) / (12 * 10^6) = 2819.413 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.166.165 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.166.64",
      "172.30.166.128",
      "172.30.166.192",
      "172.30.167.128"
    ],
    "answer": 1,
    "explanation": "For host 172.30.166.165/26, the subnet mask bits reveal the network ID is 172.30.166.128 and broadcast address is 172.30.166.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4950 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "422.400 ms",
      "105.600 ms",
      "633.600 ms",
      "434.900 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4950 * 1024 * 8) / (96 * 10^6) = 422.400 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2620 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "271.684 ms",
      "284.184 ms",
      "67.921 ms",
      "407.526 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2620 * 1024 * 8) / (79 * 10^6) = 271.684 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.72.119 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.72.0",
      "192.168.72.128",
      "192.168.73.64",
      "192.168.72.64"
    ],
    "answer": 3,
    "explanation": "For host 192.168.72.119/26, the subnet mask bits reveal the network ID is 192.168.72.64 and broadcast address is 192.168.72.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.127.10.178 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "255.255.255.255",
      "10.127.10.0",
      "10.127.11.0"
    ],
    "answer": 2,
    "explanation": "For host 10.127.10.178/24, the subnet mask bits reveal the network ID is 10.127.10.0 and broadcast address is 10.127.10.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "38.00 ms",
      "760.00 ms",
      "80.50 ms",
      "76.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3800 bits / (50 * 1000 bps) = 76.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5500 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "114.50 ms",
      "1100.00 ms",
      "55.00 ms",
      "110.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5500 bits / (50 * 1000 bps) = 110.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.21.241 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.23.21.0",
      "172.23.20.0",
      "172.23.21.0",
      "172.23.22.0"
    ],
    "answer": 1,
    "explanation": "For host 172.23.21.241/22, the subnet mask bits reveal the network ID is 172.23.20.0 and broadcast address is 172.23.23.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.40.240 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.40.0",
      "172.31.40.255",
      "172.31.41.0",
      "172.31.40.0"
    ],
    "answer": 1,
    "explanation": "For host 172.31.40.240/24, the subnet mask bits reveal the network ID is 172.31.40.0 and broadcast address is 172.31.40.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 960 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "131.656 ms",
      "178.735 ms",
      "119.156 ms",
      "29.789 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (960 * 1024 * 8) / (66 * 10^6) = 119.156 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3840 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "93.623 ms",
      "561.737 ms",
      "386.991 ms",
      "374.491 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3840 * 1024 * 8) / (84 * 10^6) = 374.491 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1990 KB over a point-to-point network link with transmission bandwidth rate of 73 Mbps. What is the theoretical transmission delay?",
    "options": [
      "223.316 ms",
      "334.974 ms",
      "55.829 ms",
      "235.816 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1990 * 1024 * 8) / (73 * 10^6) = 223.316 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.5.116.236 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.5.117.224",
      "10.5.116.0",
      "10.5.116.192",
      "10.5.116.255"
    ],
    "answer": 3,
    "explanation": "For host 10.5.116.236/27, the subnet mask bits reveal the network ID is 10.5.116.224 and broadcast address is 10.5.116.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4390 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2778.875 ms",
      "2766.375 ms",
      "4149.563 ms",
      "691.594 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4390 * 1024 * 8) / (13 * 10^6) = 2766.375 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2230 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "595.701 ms",
      "409.634 ms",
      "397.134 ms",
      "99.283 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2230 * 1024 * 8) / (46 * 10^6) = 397.134 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 140 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "22.055 ms",
      "34.555 ms",
      "33.083 ms",
      "5.514 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (140 * 1024 * 8) / (52 * 10^6) = 22.055 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.245.220.86 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.245.221.0",
      "10.245.220.127",
      "10.245.220.0",
      "10.245.220.128"
    ],
    "answer": 1,
    "explanation": "For host 10.245.220.86/25, the subnet mask bits reveal the network ID is 10.245.220.0 and broadcast address is 10.245.220.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.177.193 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.177.0",
      "192.168.178.128",
      "192.168.177.255",
      "192.168.177.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.177.193/25, the subnet mask bits reveal the network ID is 192.168.177.128 and broadcast address is 192.168.177.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.125.27 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.125.32",
      "172.17.125.16",
      "172.17.125.31",
      "172.17.126.24"
    ],
    "answer": 2,
    "explanation": "For host 172.17.125.27/29, the subnet mask bits reveal the network ID is 172.17.125.24 and broadcast address is 172.17.125.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1480 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "356.593 ms",
      "59.432 ms",
      "250.229 ms",
      "237.729 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1480 * 1024 * 8) / (51 * 10^6) = 237.729 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.226.247.207 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.226.247.223",
      "10.226.247.160",
      "10.226.247.224",
      "10.226.248.192"
    ],
    "answer": 0,
    "explanation": "For host 10.226.247.207/27, the subnet mask bits reveal the network ID is 10.226.247.192 and broadcast address is 10.226.247.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4920 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "441.273 ms",
      "643.159 ms",
      "107.193 ms",
      "428.773 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4920 * 1024 * 8) / (94 * 10^6) = 428.773 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.223.40 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.224.40",
      "172.21.223.47",
      "172.21.223.32",
      "172.21.223.48"
    ],
    "answer": 1,
    "explanation": "For host 172.21.223.40/29, the subnet mask bits reveal the network ID is 172.21.223.40 and broadcast address is 172.21.223.47."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2150 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "58.709 ms",
      "352.256 ms",
      "247.337 ms",
      "234.837 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2150 * 1024 * 8) / (75 * 10^6) = 234.837 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4750 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "95.00 ms",
      "4.75 ms",
      "9.50 ms",
      "14.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4750 bits / (500 * 1000 bps) = 9.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4860 KB over a point-to-point network link with transmission bandwidth rate of 93 Mbps. What is the theoretical transmission delay?",
    "options": [
      "642.147 ms",
      "428.098 ms",
      "107.025 ms",
      "440.598 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4860 * 1024 * 8) / (93 * 10^6) = 428.098 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.71.201 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.71.176",
      "172.23.71.208",
      "172.23.72.192",
      "172.23.71.207"
    ],
    "answer": 3,
    "explanation": "For host 172.23.71.201/28, the subnet mask bits reveal the network ID is 172.23.71.192 and broadcast address is 172.23.71.207."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1950 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "48.75 ms",
      "102.00 ms",
      "97.50 ms",
      "975.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1950 bits / (20 * 1000 bps) = 97.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3450 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "34.50 ms",
      "690.00 ms",
      "69.00 ms",
      "73.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3450 bits / (50 * 1000 bps) = 69.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4320 KB over a point-to-point network link with transmission bandwidth rate of 15 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3538.944 ms",
      "2371.796 ms",
      "589.824 ms",
      "2359.296 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4320 * 1024 * 8) / (15 * 10^6) = 2359.296 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3600 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "14758.100 ms",
      "22118.400 ms",
      "3686.400 ms",
      "14745.600 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3600 * 1024 * 8) / (2 * 10^6) = 14745.600 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2100 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "46.50 ms",
      "420.00 ms",
      "21.00 ms",
      "42.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2100 bits / (50 * 1000 bps) = 42.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3150 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "63.00 ms",
      "630.00 ms",
      "31.50 ms",
      "67.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3150 bits / (50 * 1000 bps) = 63.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.135.63.113 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.135.63.0",
      "255.255.255.255",
      "10.135.64.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 10.135.63.113/24, the subnet mask bits reveal the network ID is 10.135.63.0 and broadcast address is 10.135.63.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.142.2 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.30.142.0",
      "172.30.142.0",
      "172.30.143.255",
      "172.30.143.0"
    ],
    "answer": 2,
    "explanation": "For host 172.30.142.2/22, the subnet mask bits reveal the network ID is 172.30.140.0 and broadcast address is 172.30.143.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4300 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "430.00 ms",
      "434.50 ms",
      "4300.00 ms",
      "215.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4300 bits / (10 * 1000 bps) = 430.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.248.239 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.248.255",
      "192.168.248.0",
      "192.168.249.128",
      "192.168.248.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.248.239/25, the subnet mask bits reveal the network ID is 192.168.248.128 and broadcast address is 192.168.248.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1680 KB over a point-to-point network link with transmission bandwidth rate of 55 Mbps. What is the theoretical transmission delay?",
    "options": [
      "250.228 ms",
      "375.343 ms",
      "262.728 ms",
      "62.557 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1680 * 1024 * 8) / (55 * 10^6) = 250.228 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.101.193 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.102.128",
      "172.26.101.0",
      "172.26.101.255",
      "172.26.101.0"
    ],
    "answer": 2,
    "explanation": "For host 172.26.101.193/25, the subnet mask bits reveal the network ID is 172.26.101.128 and broadcast address is 172.26.101.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 610 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "86.157 ms",
      "21.539 ms",
      "98.657 ms",
      "129.236 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (610 * 1024 * 8) / (58 * 10^6) = 86.157 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "274.50 ms",
      "270.00 ms",
      "135.00 ms",
      "2700.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2700 bits / (10 * 1000 bps) = 270.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.15.27 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.16.0",
      "172.20.15.32",
      "172.20.15.0",
      "172.20.15.31"
    ],
    "answer": 3,
    "explanation": "For host 172.20.15.27/27, the subnet mask bits reveal the network ID is 172.20.15.0 and broadcast address is 172.20.15.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3490 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4765.013 ms",
      "3189.176 ms",
      "794.169 ms",
      "3176.676 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3490 * 1024 * 8) / (9 * 10^6) = 3176.676 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.93.112 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.19.93.0",
      "172.19.93.0",
      "172.19.94.0",
      "172.19.93.255"
    ],
    "answer": 3,
    "explanation": "For host 172.19.93.112/24, the subnet mask bits reveal the network ID is 172.19.93.0 and broadcast address is 172.19.93.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 610 KB over a point-to-point network link with transmission bandwidth rate of 59 Mbps. What is the theoretical transmission delay?",
    "options": [
      "97.197 ms",
      "84.697 ms",
      "127.045 ms",
      "21.174 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (610 * 1024 * 8) / (59 * 10^6) = 84.697 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5950 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "5950.00 ms",
      "599.50 ms",
      "595.00 ms",
      "297.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5950 bits / (10 * 1000 bps) = 595.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.125.84 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.25.126.0",
      "172.25.127.255",
      "172.25.125.0",
      "172.25.125.0"
    ],
    "answer": 1,
    "explanation": "For host 172.25.125.84/22, the subnet mask bits reveal the network ID is 172.25.124.0 and broadcast address is 172.25.127.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.119.144 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.120.128",
      "192.168.119.159",
      "192.168.119.160",
      "192.168.119.96"
    ],
    "answer": 1,
    "explanation": "For host 192.168.119.144/27, the subnet mask bits reveal the network ID is 192.168.119.128 and broadcast address is 192.168.119.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.87.222 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.27.87.208",
      "172.27.87.223",
      "172.27.87.224",
      "172.27.88.216"
    ],
    "answer": 1,
    "explanation": "For host 172.27.87.222/29, the subnet mask bits reveal the network ID is 172.27.87.216 and broadcast address is 172.27.87.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3750 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "75.00 ms",
      "12.00 ms",
      "7.50 ms",
      "3.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3750 bits / (500 * 1000 bps) = 7.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "26.50 ms",
      "530.00 ms",
      "57.50 ms",
      "53.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5300 bits / (100 * 1000 bps) = 53.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2640 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "58.769 ms",
      "352.612 ms",
      "247.575 ms",
      "235.075 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2640 * 1024 * 8) / (92 * 10^6) = 235.075 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1050 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "181.159 ms",
      "252.988 ms",
      "42.165 ms",
      "168.659 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1050 * 1024 * 8) / (51 * 10^6) = 168.659 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 720 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "16.949 ms",
      "101.694 ms",
      "80.296 ms",
      "67.796 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (720 * 1024 * 8) / (87 * 10^6) = 67.796 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2900 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "2.90 ms",
      "5.80 ms",
      "10.30 ms",
      "58.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2900 bits / (500 * 1000 bps) = 5.80 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4440 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1136.640 ms",
      "4559.060 ms",
      "4546.560 ms",
      "6819.840 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4440 * 1024 * 8) / (8 * 10^6) = 4546.560 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.121.189.230 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.121.189.0",
      "10.121.191.255",
      "10.121.189.0",
      "10.121.190.0"
    ],
    "answer": 1,
    "explanation": "For host 10.121.189.230/22, the subnet mask bits reveal the network ID is 10.121.188.0 and broadcast address is 10.121.191.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.225.20.136 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.225.20.128",
      "10.225.20.160",
      "10.225.20.96",
      "10.225.21.128"
    ],
    "answer": 0,
    "explanation": "For host 10.225.20.136/27, the subnet mask bits reveal the network ID is 10.225.20.128 and broadcast address is 10.225.20.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 490 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "860.160 ms",
      "143.360 ms",
      "573.440 ms",
      "585.940 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (490 * 1024 * 8) / (7 * 10^6) = 573.440 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.214.167 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.214.152",
      "192.168.214.168",
      "192.168.214.167",
      "192.168.215.160"
    ],
    "answer": 2,
    "explanation": "For host 192.168.214.167/29, the subnet mask bits reveal the network ID is 192.168.214.160 and broadcast address is 192.168.214.167."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.100.153 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.100.160",
      "192.168.101.144",
      "192.168.100.128",
      "192.168.100.159"
    ],
    "answer": 3,
    "explanation": "For host 192.168.100.153/28, the subnet mask bits reveal the network ID is 192.168.100.144 and broadcast address is 192.168.100.159."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4350 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "217.50 ms",
      "435.00 ms",
      "4350.00 ms",
      "439.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4350 bits / (10 * 1000 bps) = 435.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2350 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "62.504 ms",
      "262.516 ms",
      "375.023 ms",
      "250.016 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2350 * 1024 * 8) / (77 * 10^6) = 250.016 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3510 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "616.155 ms",
      "410.770 ms",
      "102.693 ms",
      "423.270 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3510 * 1024 * 8) / (70 * 10^6) = 410.770 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2700 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "358.100 ms",
      "345.600 ms",
      "518.400 ms",
      "86.400 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2700 * 1024 * 8) / (64 * 10^6) = 345.600 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3020 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "321.297 ms",
      "80.324 ms",
      "333.797 ms",
      "481.945 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3020 * 1024 * 8) / (77 * 10^6) = 321.297 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2050 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "262.400 ms",
      "65.600 ms",
      "393.600 ms",
      "274.900 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2050 * 1024 * 8) / (64 * 10^6) = 262.400 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "53.00 ms",
      "57.50 ms",
      "530.00 ms",
      "26.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2650 bits / (50 * 1000 bps) = 53.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2290 KB over a point-to-point network link with transmission bandwidth rate of 75 Mbps. What is the theoretical transmission delay?",
    "options": [
      "375.194 ms",
      "262.629 ms",
      "250.129 ms",
      "62.532 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2290 * 1024 * 8) / (75 * 10^6) = 250.129 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.44.31.188 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.44.31.0",
      "10.44.30.0",
      "10.44.31.0",
      "10.44.32.0"
    ],
    "answer": 1,
    "explanation": "For host 10.44.31.188/23, the subnet mask bits reveal the network ID is 10.44.30.0 and broadcast address is 10.44.31.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 870 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "242.967 ms",
      "40.495 ms",
      "161.978 ms",
      "174.478 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (870 * 1024 * 8) / (44 * 10^6) = 161.978 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.82.122 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.82.64",
      "192.168.82.127",
      "192.168.83.96",
      "192.168.82.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.82.122/27, the subnet mask bits reveal the network ID is 192.168.82.96 and broadcast address is 192.168.82.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.133.162 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.133.128",
      "192.168.133.191",
      "192.168.133.192",
      "192.168.134.160"
    ],
    "answer": 1,
    "explanation": "For host 192.168.133.162/27, the subnet mask bits reveal the network ID is 192.168.133.160 and broadcast address is 192.168.133.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5950 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "14.88 ms",
      "34.25 ms",
      "297.50 ms",
      "29.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5950 bits / (200 * 1000 bps) = 29.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4500 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "225.00 ms",
      "2250.00 ms",
      "112.50 ms",
      "229.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4500 bits / (20 * 1000 bps) = 225.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.77.250.226 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.77.250.239",
      "10.77.250.240",
      "10.77.251.224",
      "10.77.250.208"
    ],
    "answer": 0,
    "explanation": "For host 10.77.250.226/28, the subnet mask bits reveal the network ID is 10.77.250.224 and broadcast address is 10.77.250.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.5.233 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.6.128",
      "172.20.5.0",
      "172.20.5.0",
      "172.20.5.255"
    ],
    "answer": 3,
    "explanation": "For host 172.20.5.233/25, the subnet mask bits reveal the network ID is 172.20.5.128 and broadcast address is 172.20.5.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.57.231.139 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.57.231.128",
      "10.57.231.192",
      "10.57.231.64",
      "10.57.232.128"
    ],
    "answer": 0,
    "explanation": "For host 10.57.231.139/26, the subnet mask bits reveal the network ID is 10.57.231.128 and broadcast address is 10.57.231.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.15.102 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.15.64",
      "192.168.16.96",
      "192.168.15.128",
      "192.168.15.127"
    ],
    "answer": 3,
    "explanation": "For host 192.168.15.102/27, the subnet mask bits reveal the network ID is 192.168.15.96 and broadcast address is 192.168.15.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4150 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "180.834 ms",
      "1085.004 ms",
      "735.836 ms",
      "723.336 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4150 * 1024 * 8) / (47 * 10^6) = 723.336 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 900 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "19.200 ms",
      "76.800 ms",
      "115.200 ms",
      "89.300 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (900 * 1024 * 8) / (96 * 10^6) = 76.800 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.14.141 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.14.0",
      "192.168.15.0",
      "192.168.14.0",
      "192.168.15.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.14.141/22, the subnet mask bits reveal the network ID is 192.168.12.0 and broadcast address is 192.168.15.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3750 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "480.000 ms",
      "120.000 ms",
      "720.000 ms",
      "492.500 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3750 * 1024 * 8) / (64 * 10^6) = 480.000 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1800 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "36.00 ms",
      "1.80 ms",
      "3.60 ms",
      "8.10 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1800 bits / (500 * 1000 bps) = 3.60 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2450 KB over a point-to-point network link with transmission bandwidth rate of 36 Mbps. What is the theoretical transmission delay?",
    "options": [
      "570.011 ms",
      "139.378 ms",
      "557.511 ms",
      "836.267 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2450 * 1024 * 8) / (36 * 10^6) = 557.511 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.92.69 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.92.128",
      "192.168.93.64",
      "192.168.92.64",
      "192.168.92.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.92.69/26, the subnet mask bits reveal the network ID is 192.168.92.64 and broadcast address is 192.168.92.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4310 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "691.491 ms",
      "169.748 ms",
      "678.991 ms",
      "1018.486 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4310 * 1024 * 8) / (52 * 10^6) = 678.991 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "52.50 ms",
      "109.50 ms",
      "1050.00 ms",
      "105.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5250 bits / (50 * 1000 bps) = 105.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "384.50 ms",
      "190.00 ms",
      "380.00 ms",
      "3800.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3800 bits / (10 * 1000 bps) = 380.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.196.233 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.29.196.224",
      "172.29.197.224",
      "172.29.196.240",
      "172.29.196.208"
    ],
    "answer": 0,
    "explanation": "For host 172.29.196.233/28, the subnet mask bits reveal the network ID is 172.29.196.224 and broadcast address is 172.29.196.239."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3250 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "84.253 ms",
      "349.513 ms",
      "337.013 ms",
      "505.519 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3250 * 1024 * 8) / (79 * 10^6) = 337.013 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3780 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "82.356 ms",
      "341.923 ms",
      "494.134 ms",
      "329.423 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3780 * 1024 * 8) / (94 * 10^6) = 329.423 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3630 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "335.728 ms",
      "80.807 ms",
      "484.842 ms",
      "323.228 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3630 * 1024 * 8) / (92 * 10^6) = 323.228 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.74.158 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.25.75.128",
      "172.25.74.64",
      "172.25.74.191",
      "172.25.74.192"
    ],
    "answer": 2,
    "explanation": "For host 172.25.74.158/26, the subnet mask bits reveal the network ID is 172.25.74.128 and broadcast address is 172.25.74.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4070 KB over a point-to-point network link with transmission bandwidth rate of 43 Mbps. What is the theoretical transmission delay?",
    "options": [
      "787.882 ms",
      "775.382 ms",
      "1163.073 ms",
      "193.846 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4070 * 1024 * 8) / (43 * 10^6) = 775.382 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.114.223.197 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.114.223.223",
      "10.114.223.224",
      "10.114.224.192",
      "10.114.223.160"
    ],
    "answer": 0,
    "explanation": "For host 10.114.223.197/27, the subnet mask bits reveal the network ID is 10.114.223.192 and broadcast address is 10.114.223.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3750 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "639.439 ms",
      "940.408 ms",
      "156.735 ms",
      "626.939 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3750 * 1024 * 8) / (49 * 10^6) = 626.939 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2360 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "51.418 ms",
      "308.507 ms",
      "218.171 ms",
      "205.671 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2360 * 1024 * 8) / (94 * 10^6) = 205.671 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.66.130 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.66.0",
      "172.23.66.0",
      "172.23.67.255",
      "172.23.67.0"
    ],
    "answer": 2,
    "explanation": "For host 172.23.66.130/22, the subnet mask bits reveal the network ID is 172.23.64.0 and broadcast address is 172.23.67.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.247.27 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.247.20",
      "172.21.248.24",
      "172.21.247.27",
      "172.21.247.28"
    ],
    "answer": 2,
    "explanation": "For host 172.21.247.27/30, the subnet mask bits reveal the network ID is 172.21.247.24 and broadcast address is 172.21.247.27."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4020 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "968.584 ms",
      "161.431 ms",
      "658.222 ms",
      "645.722 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4020 * 1024 * 8) / (51 * 10^6) = 645.722 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.160.15 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.26.160.16",
      "172.26.161.12",
      "172.26.160.8",
      "172.26.160.15"
    ],
    "answer": 3,
    "explanation": "For host 172.26.160.15/30, the subnet mask bits reveal the network ID is 172.26.160.12 and broadcast address is 172.26.160.15."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1750 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "150.905 ms",
      "163.405 ms",
      "37.726 ms",
      "226.358 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1750 * 1024 * 8) / (95 * 10^6) = 150.905 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1060 KB over a point-to-point network link with transmission bandwidth rate of 98 Mbps. What is the theoretical transmission delay?",
    "options": [
      "101.107 ms",
      "88.607 ms",
      "22.152 ms",
      "132.911 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1060 * 1024 * 8) / (98 * 10^6) = 88.607 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3460 KB over a point-to-point network link with transmission bandwidth rate of 36 Mbps. What is the theoretical transmission delay?",
    "options": [
      "196.836 ms",
      "787.342 ms",
      "799.842 ms",
      "1181.013 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3460 * 1024 * 8) / (36 * 10^6) = 787.342 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2440 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "285.550 ms",
      "71.387 ms",
      "298.050 ms",
      "428.325 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2440 * 1024 * 8) / (70 * 10^6) = 285.550 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4590 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3133.440 ms",
      "4700.160 ms",
      "3145.940 ms",
      "783.360 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4590 * 1024 * 8) / (12 * 10^6) = 3133.440 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 670 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1097.728 ms",
      "1646.592 ms",
      "274.432 ms",
      "1110.228 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (670 * 1024 * 8) / (5 * 10^6) = 1097.728 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 280 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "36.645 ms",
      "6.036 ms",
      "24.145 ms",
      "36.217 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (280 * 1024 * 8) / (95 * 10^6) = 24.145 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.192.91 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.17.193.0",
      "255.255.255.255",
      "172.17.192.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 172.17.192.91/23, the subnet mask bits reveal the network ID is 172.17.192.0 and broadcast address is 172.17.193.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2450 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "4.90 ms",
      "49.00 ms",
      "2.45 ms",
      "9.40 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2450 bits / (500 * 1000 bps) = 4.90 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.91.96 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.24.91.127",
      "172.24.91.64",
      "172.24.92.96",
      "172.24.91.128"
    ],
    "answer": 0,
    "explanation": "For host 172.24.91.96/27, the subnet mask bits reveal the network ID is 172.24.91.96 and broadcast address is 172.24.91.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.206.204 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.206.176",
      "172.23.206.208",
      "172.23.207.192",
      "172.23.206.207"
    ],
    "answer": 3,
    "explanation": "For host 172.23.206.204/28, the subnet mask bits reveal the network ID is 172.23.206.192 and broadcast address is 172.23.206.207."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.221.28.188 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.221.29.188",
      "10.221.28.192",
      "10.221.28.188",
      "10.221.28.184"
    ],
    "answer": 2,
    "explanation": "For host 10.221.28.188/30, the subnet mask bits reveal the network ID is 10.221.28.188 and broadcast address is 10.221.28.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2350 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "117.50 ms",
      "58.75 ms",
      "1175.00 ms",
      "122.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2350 bits / (20 * 1000 bps) = 117.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.85.27.10 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.85.27.0",
      "10.85.28.0",
      "10.85.27.16",
      "10.85.27.15"
    ],
    "answer": 3,
    "explanation": "For host 10.85.27.10/28, the subnet mask bits reveal the network ID is 10.85.27.0 and broadcast address is 10.85.27.15."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2880 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "761.063 ms",
      "1141.595 ms",
      "190.266 ms",
      "773.563 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2880 * 1024 * 8) / (31 * 10^6) = 761.063 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.54.193.225 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.54.194.224",
      "10.54.193.224",
      "10.54.193.192",
      "10.54.193.0"
    ],
    "answer": 1,
    "explanation": "For host 10.54.193.225/27, the subnet mask bits reveal the network ID is 10.54.193.224 and broadcast address is 10.54.193.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4970 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5828.820 ms",
      "8724.480 ms",
      "1454.080 ms",
      "5816.320 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4970 * 1024 * 8) / (7 * 10^6) = 5816.320 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "1200.00 ms",
      "124.50 ms",
      "60.00 ms",
      "120.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1200 bits / (10 * 1000 bps) = 120.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.201.161.105 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.201.161.0",
      "10.201.160.0",
      "10.201.161.0",
      "10.201.162.0"
    ],
    "answer": 1,
    "explanation": "For host 10.201.161.105/22, the subnet mask bits reveal the network ID is 10.201.160.0 and broadcast address is 10.201.163.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3120 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "331.936 ms",
      "82.984 ms",
      "497.903 ms",
      "344.436 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3120 * 1024 * 8) / (77 * 10^6) = 331.936 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4950 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "103.50 ms",
      "49.50 ms",
      "990.00 ms",
      "99.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4950 bits / (50 * 1000 bps) = 99.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.209.103 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.209.96",
      "192.168.209.128",
      "192.168.210.96",
      "192.168.209.64"
    ],
    "answer": 0,
    "explanation": "For host 192.168.209.103/27, the subnet mask bits reveal the network ID is 192.168.209.96 and broadcast address is 192.168.209.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3400 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "21.50 ms",
      "170.00 ms",
      "17.00 ms",
      "8.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3400 bits / (200 * 1000 bps) = 17.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5100 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "102.00 ms",
      "1020.00 ms",
      "51.00 ms",
      "106.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5100 bits / (50 * 1000 bps) = 102.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4900 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "122.50 ms",
      "249.50 ms",
      "245.00 ms",
      "2450.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4900 bits / (20 * 1000 bps) = 245.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4590 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "408.303 ms",
      "98.951 ms",
      "395.803 ms",
      "593.704 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4590 * 1024 * 8) / (95 * 10^6) = 395.803 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 810 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "258.260 ms",
      "368.640 ms",
      "61.440 ms",
      "245.760 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (810 * 1024 * 8) / (27 * 10^6) = 245.760 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2300 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "57.50 ms",
      "115.00 ms",
      "1150.00 ms",
      "119.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2300 bits / (20 * 1000 bps) = 115.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.76.136.127 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.76.136.0",
      "10.76.136.128",
      "10.76.137.0"
    ],
    "answer": 1,
    "explanation": "For host 10.76.136.127/25, the subnet mask bits reveal the network ID is 10.76.136.0 and broadcast address is 10.76.136.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.126.232.42 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.126.232.32",
      "10.126.233.40",
      "10.126.232.47",
      "10.126.232.48"
    ],
    "answer": 2,
    "explanation": "For host 10.126.232.42/29, the subnet mask bits reveal the network ID is 10.126.232.40 and broadcast address is 10.126.232.47."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3100 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1336.589 ms",
      "334.147 ms",
      "2004.884 ms",
      "1349.089 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3100 * 1024 * 8) / (19 * 10^6) = 1336.589 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 310 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "16.707 ms",
      "66.829 ms",
      "100.244 ms",
      "79.329 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (310 * 1024 * 8) / (38 * 10^6) = 66.829 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5750 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "57.50 ms",
      "575.00 ms",
      "62.00 ms",
      "28.75 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5750 bits / (100 * 1000 bps) = 57.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.220.126.58 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.220.127.56",
      "10.220.126.56",
      "10.220.126.48",
      "10.220.126.64"
    ],
    "answer": 1,
    "explanation": "For host 10.220.126.58/29, the subnet mask bits reveal the network ID is 10.220.126.56 and broadcast address is 10.220.126.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3110 KB over a point-to-point network link with transmission bandwidth rate of 88 Mbps. What is the theoretical transmission delay?",
    "options": [
      "434.269 ms",
      "72.378 ms",
      "302.013 ms",
      "289.513 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3110 * 1024 * 8) / (88 * 10^6) = 289.513 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4600 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "4600.00 ms",
      "460.00 ms",
      "464.50 ms",
      "230.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4600 bits / (10 * 1000 bps) = 460.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 780 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "95.370 ms",
      "143.054 ms",
      "23.842 ms",
      "107.870 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (780 * 1024 * 8) / (67 * 10^6) = 95.370 ms."
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4510 KB over a point-to-point network link with transmission bandwidth rate of 25 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1490.337 ms",
      "1477.837 ms",
      "369.459 ms",
      "2216.755 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4510 * 1024 * 8) / (25 * 10^6) = 1477.837 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4100 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "209.50 ms",
      "205.00 ms",
      "102.50 ms",
      "2050.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4100 bits / (20 * 1000 bps) = 205.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5900 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "29.50 ms",
      "295.00 ms",
      "34.00 ms",
      "14.75 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5900 bits / (200 * 1000 bps) = 29.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.187.38.112 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.187.38.0",
      "10.187.39.0",
      "10.187.38.0",
      "10.187.38.255"
    ],
    "answer": 3,
    "explanation": "For host 10.187.38.112/24, the subnet mask bits reveal the network ID is 10.187.38.0 and broadcast address is 10.187.38.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2070 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "373.297 ms",
      "90.199 ms",
      "360.797 ms",
      "541.195 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2070 * 1024 * 8) / (47 * 10^6) = 360.797 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3000 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "10.50 ms",
      "6.00 ms",
      "3.00 ms",
      "60.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3000 bits / (500 * 1000 bps) = 6.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2640 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "85.821 ms",
      "343.284 ms",
      "514.926 ms",
      "355.784 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2640 * 1024 * 8) / (63 * 10^6) = 343.284 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1880 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "417.788 ms",
      "101.322 ms",
      "405.288 ms",
      "607.933 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1880 * 1024 * 8) / (38 * 10^6) = 405.288 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.57.220.64 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.57.220.32",
      "10.57.220.95",
      "10.57.220.96",
      "10.57.221.64"
    ],
    "answer": 1,
    "explanation": "For host 10.57.220.64/27, the subnet mask bits reveal the network ID is 10.57.220.64 and broadcast address is 10.57.220.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.23.192 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.31.23.255",
      "172.31.24.192",
      "172.31.23.0",
      "172.31.23.128"
    ],
    "answer": 0,
    "explanation": "For host 172.31.23.192/26, the subnet mask bits reveal the network ID is 172.31.23.192 and broadcast address is 172.31.23.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.215.231 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.215.0",
      "192.168.215.255",
      "192.168.215.192",
      "192.168.216.224"
    ],
    "answer": 1,
    "explanation": "For host 192.168.215.231/27, the subnet mask bits reveal the network ID is 192.168.215.224 and broadcast address is 192.168.215.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4630 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "399.252 ms",
      "598.878 ms",
      "99.813 ms",
      "411.752 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4630 * 1024 * 8) / (95 * 10^6) = 399.252 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4850 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "489.50 ms",
      "4850.00 ms",
      "242.50 ms",
      "485.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4850 bits / (10 * 1000 bps) = 485.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "725.00 ms",
      "36.25 ms",
      "77.00 ms",
      "72.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1450 bits / (20 * 1000 bps) = 72.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.54.240 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.55.0",
      "255.255.255.255",
      "192.168.54.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 192.168.54.240/23, the subnet mask bits reveal the network ID is 192.168.54.0 and broadcast address is 192.168.55.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4720 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "230.156 ms",
      "1380.937 ms",
      "933.125 ms",
      "920.625 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4720 * 1024 * 8) / (42 * 10^6) = 920.625 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5350 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "267.50 ms",
      "5350.00 ms",
      "539.50 ms",
      "535.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5350 bits / (10 * 1000 bps) = 535.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3020 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "466.789 ms",
      "116.697 ms",
      "700.184 ms",
      "479.289 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3020 * 1024 * 8) / (53 * 10^6) = 466.789 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5050 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "14.60 ms",
      "101.00 ms",
      "10.10 ms",
      "5.05 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5050 bits / (500 * 1000 bps) = 10.10 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4220 KB over a point-to-point network link with transmission bandwidth rate of 30 Mbps. What is the theoretical transmission delay?",
    "options": [
      "288.085 ms",
      "1152.341 ms",
      "1728.512 ms",
      "1164.841 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4220 * 1024 * 8) / (30 * 10^6) = 1152.341 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3300 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "66.00 ms",
      "70.50 ms",
      "660.00 ms",
      "33.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3300 bits / (50 * 1000 bps) = 66.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3940 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "489.038 ms",
      "501.538 ms",
      "733.556 ms",
      "122.259 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3940 * 1024 * 8) / (66 * 10^6) = 489.038 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3360 KB over a point-to-point network link with transmission bandwidth rate of 22 Mbps. What is the theoretical transmission delay?",
    "options": [
      "312.785 ms",
      "1876.713 ms",
      "1251.142 ms",
      "1263.642 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3360 * 1024 * 8) / (22 * 10^6) = 1251.142 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.118.143 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.118.0",
      "192.168.118.0",
      "192.168.119.255",
      "192.168.119.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.118.143/23, the subnet mask bits reveal the network ID is 192.168.118.0 and broadcast address is 192.168.119.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1920 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "238.313 ms",
      "39.719 ms",
      "171.375 ms",
      "158.875 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1920 * 1024 * 8) / (99 * 10^6) = 158.875 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.192.176 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.195.255",
      "192.168.193.0",
      "192.168.192.0",
      "192.168.192.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.192.176/22, the subnet mask bits reveal the network ID is 192.168.192.0 and broadcast address is 192.168.195.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.169.15 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.29.170.0",
      "255.255.255.255",
      "172.29.169.64",
      "172.29.169.0"
    ],
    "answer": 3,
    "explanation": "For host 172.29.169.15/26, the subnet mask bits reveal the network ID is 172.29.169.0 and broadcast address is 172.29.169.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.4.124.151 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.4.124.151",
      "10.4.125.148",
      "10.4.124.152",
      "10.4.124.144"
    ],
    "answer": 0,
    "explanation": "For host 10.4.124.151/30, the subnet mask bits reveal the network ID is 10.4.124.148 and broadcast address is 10.4.124.151."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1100 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "259.938 ms",
      "43.323 ms",
      "185.792 ms",
      "173.292 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1100 * 1024 * 8) / (52 * 10^6) = 173.292 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.41.85 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.41.0",
      "172.28.42.0",
      "172.28.41.255",
      "172.28.41.0"
    ],
    "answer": 2,
    "explanation": "For host 172.28.41.85/24, the subnet mask bits reveal the network ID is 172.28.41.0 and broadcast address is 172.28.41.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.103.211.237 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.103.211.0",
      "10.103.208.0",
      "10.103.211.0",
      "10.103.212.0"
    ],
    "answer": 1,
    "explanation": "For host 10.103.211.237/22, the subnet mask bits reveal the network ID is 10.103.208.0 and broadcast address is 10.103.211.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.45.243.138 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.45.243.128",
      "10.45.243.0",
      "10.45.243.0",
      "10.45.244.128"
    ],
    "answer": 0,
    "explanation": "For host 10.45.243.138/25, the subnet mask bits reveal the network ID is 10.45.243.128 and broadcast address is 10.45.243.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4100 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "205.00 ms",
      "414.50 ms",
      "410.00 ms",
      "4100.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4100 bits / (10 * 1000 bps) = 410.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 720 KB over a point-to-point network link with transmission bandwidth rate of 98 Mbps. What is the theoretical transmission delay?",
    "options": [
      "15.047 ms",
      "90.279 ms",
      "72.686 ms",
      "60.186 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (720 * 1024 * 8) / (98 * 10^6) = 60.186 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1950 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "261.875 ms",
      "392.813 ms",
      "65.469 ms",
      "274.375 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1950 * 1024 * 8) / (61 * 10^6) = 261.875 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3950 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "44.00 ms",
      "395.00 ms",
      "19.75 ms",
      "39.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3950 bits / (100 * 1000 bps) = 39.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3470 KB over a point-to-point network link with transmission bandwidth rate of 46 Mbps. What is the theoretical transmission delay?",
    "options": [
      "617.962 ms",
      "630.462 ms",
      "154.490 ms",
      "926.943 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3470 * 1024 * 8) / (46 * 10^6) = 617.962 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.69.238.104 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.69.239.255",
      "10.69.238.0",
      "10.69.238.0",
      "10.69.239.0"
    ],
    "answer": 0,
    "explanation": "For host 10.69.238.104/23, the subnet mask bits reveal the network ID is 10.69.238.0 and broadcast address is 10.69.239.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.154.93.65 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.154.94.64",
      "10.154.93.60",
      "10.154.93.64",
      "10.154.93.68"
    ],
    "answer": 2,
    "explanation": "For host 10.154.93.65/30, the subnet mask bits reveal the network ID is 10.154.93.64 and broadcast address is 10.154.93.67."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1680 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "516.096 ms",
      "356.564 ms",
      "344.064 ms",
      "86.016 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1680 * 1024 * 8) / (40 * 10^6) = 344.064 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1250 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "6.25 ms",
      "12.50 ms",
      "17.00 ms",
      "125.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1250 bits / (100 * 1000 bps) = 12.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.23.117 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.23.128",
      "192.168.23.127",
      "192.168.23.0",
      "192.168.24.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.23.117/25, the subnet mask bits reveal the network ID is 192.168.23.0 and broadcast address is 192.168.23.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "1450.00 ms",
      "72.50 ms",
      "149.50 ms",
      "145.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1450 bits / (10 * 1000 bps) = 145.00 ms."
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
    "question": "A client sends a file of size 1920 KB over a point-to-point network link with transmission bandwidth rate of 24 Mbps. What is the theoretical transmission delay?",
    "options": [
      "163.840 ms",
      "667.860 ms",
      "983.040 ms",
      "655.360 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1920 * 1024 * 8) / (24 * 10^6) = 655.360 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.19.206 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.19.160",
      "192.168.19.192",
      "192.168.19.224",
      "192.168.20.192"
    ],
    "answer": 1,
    "explanation": "For host 192.168.19.206/27, the subnet mask bits reveal the network ID is 192.168.19.192 and broadcast address is 192.168.19.223."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.45.126.212 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.45.126.0",
      "10.45.127.255",
      "10.45.126.0",
      "10.45.127.0"
    ],
    "answer": 1,
    "explanation": "For host 10.45.126.212/23, the subnet mask bits reveal the network ID is 10.45.126.0 and broadcast address is 10.45.127.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5850 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "58.50 ms",
      "117.00 ms",
      "121.50 ms",
      "1170.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5850 bits / (50 * 1000 bps) = 117.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1870 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "425.529 ms",
      "1702.116 ms",
      "2553.173 ms",
      "1714.616 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1870 * 1024 * 8) / (9 * 10^6) = 1702.116 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2830 KB over a point-to-point network link with transmission bandwidth rate of 90 Mbps. What is the theoretical transmission delay?",
    "options": [
      "270.093 ms",
      "257.593 ms",
      "64.398 ms",
      "386.389 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2830 * 1024 * 8) / (90 * 10^6) = 257.593 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4260 KB over a point-to-point network link with transmission bandwidth rate of 17 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2052.819 ms",
      "2065.319 ms",
      "3079.228 ms",
      "513.205 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4260 * 1024 * 8) / (17 * 10^6) = 2052.819 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.3.134 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.28.3.0",
      "255.255.255.255",
      "172.28.4.0"
    ],
    "answer": 1,
    "explanation": "For host 172.28.3.134/24, the subnet mask bits reveal the network ID is 172.28.3.0 and broadcast address is 172.28.3.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4550 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "22.75 ms",
      "455.00 ms",
      "50.00 ms",
      "45.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4550 bits / (100 * 1000 bps) = 45.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.156.182 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.156.183",
      "192.168.156.184",
      "192.168.157.176",
      "192.168.156.168"
    ],
    "answer": 0,
    "explanation": "For host 192.168.156.182/29, the subnet mask bits reveal the network ID is 192.168.156.176 and broadcast address is 192.168.156.183."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.128.149.225 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.128.150.224",
      "10.128.149.240",
      "10.128.149.224",
      "10.128.149.208"
    ],
    "answer": 2,
    "explanation": "For host 10.128.149.225/28, the subnet mask bits reveal the network ID is 10.128.149.224 and broadcast address is 10.128.149.239."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.114.25.213 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.114.26.192",
      "10.114.25.192",
      "10.114.25.160",
      "10.114.25.224"
    ],
    "answer": 1,
    "explanation": "For host 10.114.25.213/27, the subnet mask bits reveal the network ID is 10.114.25.192 and broadcast address is 10.114.25.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3300 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "105.600 ms",
      "422.400 ms",
      "434.900 ms",
      "633.600 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3300 * 1024 * 8) / (64 * 10^6) = 422.400 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.243.38 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.243.0",
      "172.22.244.0",
      "172.22.243.0",
      "172.22.243.255"
    ],
    "answer": 3,
    "explanation": "For host 172.22.243.38/22, the subnet mask bits reveal the network ID is 172.22.240.0 and broadcast address is 172.22.243.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2920 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1157.450 ms",
      "771.634 ms",
      "192.908 ms",
      "784.134 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2920 * 1024 * 8) / (31 * 10^6) = 771.634 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.75.175 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.75.175",
      "172.22.76.172",
      "172.22.75.176",
      "172.22.75.168"
    ],
    "answer": 0,
    "explanation": "For host 172.22.75.175/30, the subnet mask bits reveal the network ID is 172.22.75.172 and broadcast address is 172.22.75.175."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.21.58 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.22.48",
      "192.168.21.64",
      "192.168.21.63",
      "192.168.21.32"
    ],
    "answer": 2,
    "explanation": "For host 192.168.21.58/28, the subnet mask bits reveal the network ID is 192.168.21.48 and broadcast address is 192.168.21.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4380 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1736.175 ms",
      "1169.950 ms",
      "1157.450 ms",
      "289.363 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4380 * 1024 * 8) / (31 * 10^6) = 1157.450 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.217.205 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.22.218.192",
      "172.22.217.208",
      "172.22.217.176",
      "172.22.217.192"
    ],
    "answer": 3,
    "explanation": "For host 172.22.217.205/28, the subnet mask bits reveal the network ID is 172.22.217.192 and broadcast address is 172.22.217.207."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 120 KB over a point-to-point network link with transmission bandwidth rate of 73 Mbps. What is the theoretical transmission delay?",
    "options": [
      "20.199 ms",
      "3.367 ms",
      "25.966 ms",
      "13.466 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (120 * 1024 * 8) / (73 * 10^6) = 13.466 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3050 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "252.380 ms",
      "378.570 ms",
      "63.095 ms",
      "264.880 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3050 * 1024 * 8) / (99 * 10^6) = 252.380 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.188.222 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.189.220",
      "172.20.188.224",
      "172.20.188.216",
      "172.20.188.220"
    ],
    "answer": 3,
    "explanation": "For host 172.20.188.222/30, the subnet mask bits reveal the network ID is 172.20.188.220 and broadcast address is 172.20.188.223."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.130.237.171 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.130.237.168",
      "10.130.237.160",
      "10.130.237.176",
      "10.130.238.168"
    ],
    "answer": 0,
    "explanation": "For host 10.130.237.171/29, the subnet mask bits reveal the network ID is 10.130.237.168 and broadcast address is 10.130.237.175."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4520 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "402.477 ms",
      "2414.859 ms",
      "1609.906 ms",
      "1622.406 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4520 * 1024 * 8) / (23 * 10^6) = 1609.906 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1430 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "41.838 ms",
      "179.851 ms",
      "251.026 ms",
      "167.351 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1430 * 1024 * 8) / (70 * 10^6) = 167.351 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.19.27.14 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.19.27.0",
      "172.19.27.32",
      "172.19.28.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 172.19.27.14/27, the subnet mask bits reveal the network ID is 172.19.27.0 and broadcast address is 172.19.27.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.72.9.111 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.72.9.0",
      "255.255.255.255",
      "10.72.10.0",
      "10.72.9.128"
    ],
    "answer": 0,
    "explanation": "For host 10.72.9.111/25, the subnet mask bits reveal the network ID is 10.72.9.0 and broadcast address is 10.72.9.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1450 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "11.75 ms",
      "3.63 ms",
      "7.25 ms",
      "72.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1450 bits / (200 * 1000 bps) = 7.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2350 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "117.50 ms",
      "2350.00 ms",
      "235.00 ms",
      "239.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2350 bits / (10 * 1000 bps) = 235.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2790 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "557.456 ms",
      "569.956 ms",
      "139.364 ms",
      "836.183 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2790 * 1024 * 8) / (41 * 10^6) = 557.456 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5750 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "579.50 ms",
      "287.50 ms",
      "5750.00 ms",
      "575.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5750 bits / (10 * 1000 bps) = 575.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.232.130.195 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.232.130.200",
      "10.232.130.184",
      "10.232.131.192",
      "10.232.130.192"
    ],
    "answer": 3,
    "explanation": "For host 10.232.130.195/29, the subnet mask bits reveal the network ID is 10.232.130.192 and broadcast address is 10.232.130.199."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5800 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "62.50 ms",
      "29.00 ms",
      "580.00 ms",
      "58.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5800 bits / (100 * 1000 bps) = 58.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.105.130 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.105.120",
      "172.21.105.135",
      "172.21.106.128",
      "172.21.105.136"
    ],
    "answer": 1,
    "explanation": "For host 172.21.105.130/29, the subnet mask bits reveal the network ID is 172.21.105.128 and broadcast address is 172.21.105.135."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.46.110 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.44.0",
      "172.25.47.0",
      "172.25.46.0",
      "172.25.46.0"
    ],
    "answer": 0,
    "explanation": "For host 172.25.46.110/22, the subnet mask bits reveal the network ID is 172.25.44.0 and broadcast address is 172.25.47.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 770 KB over a point-to-point network link with transmission bandwidth rate of 84 Mbps. What is the theoretical transmission delay?",
    "options": [
      "87.593 ms",
      "75.093 ms",
      "112.640 ms",
      "18.773 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (770 * 1024 * 8) / (84 * 10^6) = 75.093 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.196.206 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.196.0",
      "192.168.196.0",
      "192.168.197.0",
      "192.168.197.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.196.206/23, the subnet mask bits reveal the network ID is 192.168.196.0 and broadcast address is 192.168.197.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.134.193.156 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.134.193.144",
      "10.134.194.144",
      "10.134.193.160",
      "10.134.193.128"
    ],
    "answer": 0,
    "explanation": "For host 10.134.193.156/28, the subnet mask bits reveal the network ID is 10.134.193.144 and broadcast address is 10.134.193.159."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "180.00 ms",
      "184.50 ms",
      "90.00 ms",
      "1800.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3600 bits / (20 * 1000 bps) = 180.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2190 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "52.153 ms",
      "208.610 ms",
      "221.110 ms",
      "312.915 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2190 * 1024 * 8) / (86 * 10^6) = 208.610 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.221.200 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.221.0",
      "192.168.221.128",
      "192.168.222.192",
      "192.168.221.192"
    ],
    "answer": 3,
    "explanation": "For host 192.168.221.200/26, the subnet mask bits reveal the network ID is 192.168.221.192 and broadcast address is 192.168.221.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.138.196 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.138.0",
      "192.168.139.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 192.168.138.196/23, the subnet mask bits reveal the network ID is 192.168.138.0 and broadcast address is 192.168.139.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.105.206.248 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.105.206.224",
      "10.105.207.240",
      "10.105.206.0",
      "10.105.206.240"
    ],
    "answer": 3,
    "explanation": "For host 10.105.206.248/28, the subnet mask bits reveal the network ID is 10.105.206.240 and broadcast address is 10.105.206.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.94.157.132 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.94.157.0",
      "10.94.158.0",
      "10.94.157.0",
      "10.94.156.0"
    ],
    "answer": 3,
    "explanation": "For host 10.94.157.132/22, the subnet mask bits reveal the network ID is 10.94.156.0 and broadcast address is 10.94.159.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.62.129 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.63.128",
      "192.168.62.128",
      "192.168.62.160",
      "192.168.62.96"
    ],
    "answer": 1,
    "explanation": "For host 192.168.62.129/27, the subnet mask bits reveal the network ID is 192.168.62.128 and broadcast address is 192.168.62.159."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "20.00 ms",
      "40.00 ms",
      "44.50 ms",
      "400.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4000 bits / (100 * 1000 bps) = 40.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2450 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "527.126 ms",
      "128.656 ms",
      "771.938 ms",
      "514.626 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2450 * 1024 * 8) / (39 * 10^6) = 514.626 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.16.228 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.16.0",
      "192.168.17.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 192.168.16.228/23, the subnet mask bits reveal the network ID is 192.168.16.0 and broadcast address is 192.168.17.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.13.214 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.21.13.0",
      "172.21.13.0",
      "172.21.13.255",
      "172.21.14.0"
    ],
    "answer": 2,
    "explanation": "For host 172.21.13.214/23, the subnet mask bits reveal the network ID is 172.21.12.0 and broadcast address is 172.21.13.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3500 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "700.00 ms",
      "70.00 ms",
      "74.50 ms",
      "35.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3500 bits / (50 * 1000 bps) = 70.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.106.176 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.106.128",
      "192.168.107.160",
      "192.168.106.160",
      "192.168.106.192"
    ],
    "answer": 2,
    "explanation": "For host 192.168.106.176/27, the subnet mask bits reveal the network ID is 192.168.106.160 and broadcast address is 192.168.106.191."
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4430 KB over a point-to-point network link with transmission bandwidth rate of 22 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1662.071 ms",
      "2474.356 ms",
      "1649.571 ms",
      "412.393 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4430 * 1024 * 8) / (22 * 10^6) = 1649.571 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4450 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "44.50 ms",
      "89.00 ms",
      "890.00 ms",
      "93.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4450 bits / (50 * 1000 bps) = 89.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 320 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "10.403 ms",
      "41.610 ms",
      "62.415 ms",
      "54.110 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (320 * 1024 * 8) / (63 * 10^6) = 41.610 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5500 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "110.00 ms",
      "15.50 ms",
      "11.00 ms",
      "5.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5500 bits / (500 * 1000 bps) = 11.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5600 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "284.50 ms",
      "140.00 ms",
      "280.00 ms",
      "2800.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5600 bits / (20 * 1000 bps) = 280.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3880 KB over a point-to-point network link with transmission bandwidth rate of 4 Mbps. What is the theoretical transmission delay?",
    "options": [
      "7958.740 ms",
      "1986.560 ms",
      "7946.240 ms",
      "11919.360 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3880 * 1024 * 8) / (4 * 10^6) = 7946.240 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4780 KB over a point-to-point network link with transmission bandwidth rate of 90 Mbps. What is the theoretical transmission delay?",
    "options": [
      "108.772 ms",
      "435.086 ms",
      "447.586 ms",
      "652.629 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4780 * 1024 * 8) / (90 * 10^6) = 435.086 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1420 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5828.820 ms",
      "8724.480 ms",
      "5816.320 ms",
      "1454.080 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1420 * 1024 * 8) / (2 * 10^6) = 5816.320 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1900 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "1.90 ms",
      "8.30 ms",
      "3.80 ms",
      "38.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1900 bits / (500 * 1000 bps) = 3.80 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.16.46.137 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.16.46.0",
      "172.16.47.0",
      "172.16.46.0",
      "172.16.46.255"
    ],
    "answer": 3,
    "explanation": "For host 172.16.46.137/24, the subnet mask bits reveal the network ID is 172.16.46.0 and broadcast address is 172.16.46.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 330 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "10.728 ms",
      "64.366 ms",
      "42.910 ms",
      "55.410 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (330 * 1024 * 8) / (63 * 10^6) = 42.910 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1290 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1761.280 ms",
      "1174.187 ms",
      "1186.687 ms",
      "293.547 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1290 * 1024 * 8) / (9 * 10^6) = 1174.187 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2900 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "19.00 ms",
      "7.25 ms",
      "14.50 ms",
      "145.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2900 bits / (200 * 1000 bps) = 14.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "240.00 ms",
      "244.50 ms",
      "2400.00 ms",
      "120.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2400 bits / (10 * 1000 bps) = 240.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.58.142 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.58.0",
      "192.168.58.0",
      "192.168.59.255",
      "192.168.59.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.58.142/22, the subnet mask bits reveal the network ID is 192.168.56.0 and broadcast address is 192.168.59.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3500 KB over a point-to-point network link with transmission bandwidth rate of 43 Mbps. What is the theoretical transmission delay?",
    "options": [
      "666.791 ms",
      "166.698 ms",
      "679.291 ms",
      "1000.186 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3500 * 1024 * 8) / (43 * 10^6) = 666.791 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.161.62 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.161.0",
      "172.25.160.0",
      "172.25.162.0",
      "172.25.161.0"
    ],
    "answer": 1,
    "explanation": "For host 172.25.161.62/23, the subnet mask bits reveal the network ID is 172.25.160.0 and broadcast address is 172.25.161.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.225.150 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.226.128",
      "172.20.225.0",
      "172.20.225.255",
      "172.20.225.0"
    ],
    "answer": 2,
    "explanation": "For host 172.20.225.150/25, the subnet mask bits reveal the network ID is 172.20.225.128 and broadcast address is 172.20.225.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5650 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2825.00 ms",
      "141.25 ms",
      "287.00 ms",
      "282.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5650 bits / (20 * 1000 bps) = 282.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.194.133 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.194.144",
      "172.22.194.112",
      "172.22.195.128",
      "172.22.194.143"
    ],
    "answer": 3,
    "explanation": "For host 172.22.194.133/28, the subnet mask bits reveal the network ID is 172.22.194.128 and broadcast address is 172.22.194.143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2310 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "82.998 ms",
      "344.492 ms",
      "497.987 ms",
      "331.992 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2310 * 1024 * 8) / (57 * 10^6) = 331.992 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.212.32 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.212.24",
      "172.25.213.32",
      "172.25.212.32",
      "172.25.212.40"
    ],
    "answer": 2,
    "explanation": "For host 172.25.212.32/29, the subnet mask bits reveal the network ID is 172.25.212.32 and broadcast address is 172.25.212.39."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "12.50 ms",
      "8.00 ms",
      "80.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4000 bits / (500 * 1000 bps) = 8.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.195.86 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.196.0",
      "192.168.195.0",
      "192.168.192.0",
      "192.168.195.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.195.86/22, the subnet mask bits reveal the network ID is 192.168.192.0 and broadcast address is 192.168.195.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.160.34 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.18.161.0",
      "172.18.160.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 172.18.160.34/23, the subnet mask bits reveal the network ID is 172.18.160.0 and broadcast address is 172.18.161.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.72.90.102 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.72.90.127",
      "10.72.91.96",
      "10.72.90.64",
      "10.72.90.128"
    ],
    "answer": 0,
    "explanation": "For host 10.72.90.102/27, the subnet mask bits reveal the network ID is 10.72.90.96 and broadcast address is 10.72.90.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3950 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "790.00 ms",
      "79.00 ms",
      "39.50 ms",
      "83.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3950 bits / (50 * 1000 bps) = 79.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "520.00 ms",
      "524.50 ms",
      "260.00 ms",
      "5200.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5200 bits / (10 * 1000 bps) = 520.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3850 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "96.25 ms",
      "197.00 ms",
      "1925.00 ms",
      "192.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3850 bits / (20 * 1000 bps) = 192.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3310 KB over a point-to-point network link with transmission bandwidth rate of 71 Mbps. What is the theoretical transmission delay?",
    "options": [
      "381.909 ms",
      "572.863 ms",
      "95.477 ms",
      "394.409 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3310 * 1024 * 8) / (71 * 10^6) = 381.909 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.119.101 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.22.119.0",
      "172.22.120.64",
      "172.22.119.127",
      "172.22.119.128"
    ],
    "answer": 2,
    "explanation": "For host 172.22.119.101/26, the subnet mask bits reveal the network ID is 172.22.119.64 and broadcast address is 172.22.119.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.16.74.219 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.16.74.224",
      "10.16.75.192",
      "10.16.74.160",
      "10.16.74.223"
    ],
    "answer": 3,
    "explanation": "For host 10.16.74.219/27, the subnet mask bits reveal the network ID is 10.16.74.192 and broadcast address is 10.16.74.223."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1400 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "7.30 ms",
      "28.00 ms",
      "1.40 ms",
      "2.80 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 1400 bits / (500 * 1000 bps) = 2.80 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.153.41 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.154.32",
      "192.168.153.16",
      "192.168.153.32",
      "192.168.153.48"
    ],
    "answer": 2,
    "explanation": "For host 192.168.153.41/28, the subnet mask bits reveal the network ID is 192.168.153.32 and broadcast address is 192.168.153.47."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2590 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2357.476 ms",
      "589.369 ms",
      "2369.976 ms",
      "3536.213 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2590 * 1024 * 8) / (9 * 10^6) = 2357.476 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3950 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "3.95 ms",
      "12.40 ms",
      "79.00 ms",
      "7.90 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3950 bits / (500 * 1000 bps) = 7.90 ms."
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
    "question": "A client sends a file of size 4180 KB over a point-to-point network link with transmission bandwidth rate of 58 Mbps. What is the theoretical transmission delay?",
    "options": [
      "590.389 ms",
      "602.889 ms",
      "885.583 ms",
      "147.597 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4180 * 1024 * 8) / (58 * 10^6) = 590.389 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.86.89.230 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.86.88.0",
      "10.86.89.0",
      "10.86.90.0",
      "10.86.89.0"
    ],
    "answer": 0,
    "explanation": "For host 10.86.89.230/23, the subnet mask bits reveal the network ID is 10.86.88.0 and broadcast address is 10.86.89.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5600 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "116.50 ms",
      "1120.00 ms",
      "112.00 ms",
      "56.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5600 bits / (50 * 1000 bps) = 112.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1990 KB over a point-to-point network link with transmission bandwidth rate of 4 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4075.520 ms",
      "4088.020 ms",
      "1018.880 ms",
      "6113.280 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1990 * 1024 * 8) / (4 * 10^6) = 4075.520 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.14.231 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.15.0",
      "172.30.14.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.30.14.231/23, the subnet mask bits reveal the network ID is 172.30.14.0 and broadcast address is 172.30.15.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2150 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "15.25 ms",
      "5.38 ms",
      "10.75 ms",
      "107.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2150 bits / (200 * 1000 bps) = 10.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.81.133 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.18.81.120",
      "172.18.81.136",
      "172.18.81.135",
      "172.18.82.128"
    ],
    "answer": 2,
    "explanation": "For host 172.18.81.133/29, the subnet mask bits reveal the network ID is 172.18.81.128 and broadcast address is 172.18.81.135."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2650 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "132.50 ms",
      "17.75 ms",
      "6.63 ms",
      "13.25 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2650 bits / (200 * 1000 bps) = 13.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2360 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5799.936 ms",
      "3866.624 ms",
      "966.656 ms",
      "3879.124 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2360 * 1024 * 8) / (5 * 10^6) = 3866.624 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.111.20.165 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.111.20.0",
      "10.111.20.0",
      "10.111.21.128",
      "10.111.20.128"
    ],
    "answer": 3,
    "explanation": "For host 10.111.20.165/25, the subnet mask bits reveal the network ID is 10.111.20.128 and broadcast address is 10.111.20.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 460 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2826.240 ms",
      "471.040 ms",
      "1884.160 ms",
      "1896.660 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (460 * 1024 * 8) / (2 * 10^6) = 1884.160 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.15.108.16 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.15.108.23",
      "10.15.108.24",
      "10.15.108.8",
      "10.15.109.16"
    ],
    "answer": 0,
    "explanation": "For host 10.15.108.16/29, the subnet mask bits reveal the network ID is 10.15.108.16 and broadcast address is 10.15.108.23."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.103.156 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.103.0",
      "192.168.103.0",
      "192.168.104.128",
      "192.168.103.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.103.156/25, the subnet mask bits reveal the network ID is 192.168.103.128 and broadcast address is 192.168.103.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1820 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "235.029 ms",
      "333.793 ms",
      "222.529 ms",
      "55.632 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1820 * 1024 * 8) / (67 * 10^6) = 222.529 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.56.254 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.27.56.192",
      "172.27.57.192",
      "172.27.56.128",
      "172.27.56.0"
    ],
    "answer": 0,
    "explanation": "For host 172.27.56.254/26, the subnet mask bits reveal the network ID is 172.27.56.192 and broadcast address is 172.27.56.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.92.237 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.93.128",
      "192.168.92.0",
      "192.168.92.0",
      "192.168.92.128"
    ],
    "answer": 3,
    "explanation": "For host 192.168.92.237/25, the subnet mask bits reveal the network ID is 192.168.92.128 and broadcast address is 192.168.92.255."
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3530 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "172.130 ms",
      "1032.777 ms",
      "688.518 ms",
      "701.018 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3530 * 1024 * 8) / (42 * 10^6) = 688.518 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.250.249.210 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.250.249.216",
      "10.250.250.208",
      "10.250.249.215",
      "10.250.249.200"
    ],
    "answer": 2,
    "explanation": "For host 10.250.249.210/29, the subnet mask bits reveal the network ID is 10.250.249.208 and broadcast address is 10.250.249.215."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.33.145 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.33.151",
      "192.168.34.144",
      "192.168.33.136",
      "192.168.33.152"
    ],
    "answer": 0,
    "explanation": "For host 192.168.33.145/29, the subnet mask bits reveal the network ID is 192.168.33.144 and broadcast address is 192.168.33.151."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1360 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5583.060 ms",
      "5570.560 ms",
      "8355.840 ms",
      "1392.640 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1360 * 1024 * 8) / (2 * 10^6) = 5570.560 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.113.64.145 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.113.64.0",
      "255.255.255.255",
      "10.113.65.0"
    ],
    "answer": 1,
    "explanation": "For host 10.113.64.145/24, the subnet mask bits reveal the network ID is 10.113.64.0 and broadcast address is 10.113.64.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1400 KB over a point-to-point network link with transmission bandwidth rate of 79 Mbps. What is the theoretical transmission delay?",
    "options": [
      "145.175 ms",
      "217.762 ms",
      "157.675 ms",
      "36.294 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1400 * 1024 * 8) / (79 * 10^6) = 145.175 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2720 KB over a point-to-point network link with transmission bandwidth rate of 25 Mbps. What is the theoretical transmission delay?",
    "options": [
      "903.790 ms",
      "891.290 ms",
      "1336.934 ms",
      "222.822 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2720 * 1024 * 8) / (25 * 10^6) = 891.290 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1480 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "466.314 ms",
      "116.578 ms",
      "478.814 ms",
      "699.471 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1480 * 1024 * 8) / (26 * 10^6) = 466.314 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2730 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "99.840 ms",
      "411.860 ms",
      "599.040 ms",
      "399.360 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2730 * 1024 * 8) / (56 * 10^6) = 399.360 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4790 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3269.973 ms",
      "4904.960 ms",
      "3282.473 ms",
      "817.493 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4790 * 1024 * 8) / (12 * 10^6) = 3269.973 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3720 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "185.819 ms",
      "1114.911 ms",
      "755.774 ms",
      "743.274 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3720 * 1024 * 8) / (41 * 10^6) = 743.274 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.101.161 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.102.0",
      "172.25.101.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 172.25.101.161/24, the subnet mask bits reveal the network ID is 172.25.101.0 and broadcast address is 172.25.101.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.87.166.198 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.87.166.160",
      "10.87.166.224",
      "10.87.167.192",
      "10.87.166.192"
    ],
    "answer": 3,
    "explanation": "For host 10.87.166.198/27, the subnet mask bits reveal the network ID is 10.87.166.192 and broadcast address is 10.87.166.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 830 KB over a point-to-point network link with transmission bandwidth rate of 16 Mbps. What is the theoretical transmission delay?",
    "options": [
      "637.440 ms",
      "106.240 ms",
      "424.960 ms",
      "437.460 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (830 * 1024 * 8) / (16 * 10^6) = 424.960 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.37.146 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.37.0",
      "192.168.38.0",
      "192.168.37.0",
      "192.168.36.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.37.146/22, the subnet mask bits reveal the network ID is 192.168.36.0 and broadcast address is 192.168.39.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.27.149 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.28.128",
      "192.168.27.64",
      "192.168.27.128",
      "192.168.27.192"
    ],
    "answer": 2,
    "explanation": "For host 192.168.27.149/26, the subnet mask bits reveal the network ID is 192.168.27.128 and broadcast address is 192.168.27.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.163.229.6 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.163.229.64",
      "10.163.230.0",
      "10.163.229.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 10.163.229.6/26, the subnet mask bits reveal the network ID is 10.163.229.0 and broadcast address is 10.163.229.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3450 KB over a point-to-point network link with transmission bandwidth rate of 22 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1926.982 ms",
      "1297.155 ms",
      "1284.655 ms",
      "321.164 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3450 * 1024 * 8) / (22 * 10^6) = 1284.655 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.28.190.177 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.28.191.160",
      "172.28.190.192",
      "172.28.190.128",
      "172.28.190.191"
    ],
    "answer": 3,
    "explanation": "For host 172.28.190.177/27, the subnet mask bits reveal the network ID is 172.28.190.160 and broadcast address is 172.28.190.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4800 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "240.00 ms",
      "24.00 ms",
      "12.00 ms",
      "28.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4800 bits / (200 * 1000 bps) = 24.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.74.83.194 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.74.83.0",
      "10.74.83.0",
      "10.74.84.128",
      "10.74.83.128"
    ],
    "answer": 3,
    "explanation": "For host 10.74.83.194/25, the subnet mask bits reveal the network ID is 10.74.83.128 and broadcast address is 10.74.83.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.12.46.189 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.12.47.188",
      "10.12.46.192",
      "10.12.46.188",
      "10.12.46.184"
    ],
    "answer": 2,
    "explanation": "For host 10.12.46.189/30, the subnet mask bits reveal the network ID is 10.12.46.188 and broadcast address is 10.12.46.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2980 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3499.951 ms",
      "871.863 ms",
      "5231.177 ms",
      "3487.451 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2980 * 1024 * 8) / (7 * 10^6) = 3487.451 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.106.127.220 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.106.127.0",
      "10.106.127.255",
      "10.106.128.192",
      "10.106.127.128"
    ],
    "answer": 1,
    "explanation": "For host 10.106.127.220/26, the subnet mask bits reveal the network ID is 10.106.127.192 and broadcast address is 10.106.127.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2190 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "297.270 ms",
      "284.770 ms",
      "427.154 ms",
      "71.192 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2190 * 1024 * 8) / (63 * 10^6) = 284.770 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1770 KB over a point-to-point network link with transmission bandwidth rate of 81 Mbps. What is the theoretical transmission delay?",
    "options": [
      "179.010 ms",
      "44.753 ms",
      "268.516 ms",
      "191.510 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1770 * 1024 * 8) / (81 * 10^6) = 179.010 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5150 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "51.50 ms",
      "515.00 ms",
      "25.75 ms",
      "56.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5150 bits / (100 * 1000 bps) = 51.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1080 KB over a point-to-point network link with transmission bandwidth rate of 74 Mbps. What is the theoretical transmission delay?",
    "options": [
      "119.559 ms",
      "29.890 ms",
      "132.059 ms",
      "179.338 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1080 * 1024 * 8) / (74 * 10^6) = 119.559 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.199.5 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.199.0",
      "192.168.200.0",
      "192.168.199.128",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "For host 192.168.199.5/25, the subnet mask bits reveal the network ID is 192.168.199.0 and broadcast address is 192.168.199.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1480 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4041.387 ms",
      "6062.080 ms",
      "4053.887 ms",
      "1010.347 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1480 * 1024 * 8) / (3 * 10^6) = 4041.387 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2880 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "113.428 ms",
      "680.566 ms",
      "453.711 ms",
      "466.211 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2880 * 1024 * 8) / (52 * 10^6) = 453.711 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3350 KB over a point-to-point network link with transmission bandwidth rate of 13 Mbps. What is the theoretical transmission delay?",
    "options": [
      "3166.523 ms",
      "527.754 ms",
      "2123.515 ms",
      "2111.015 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3350 * 1024 * 8) / (13 * 10^6) = 2111.015 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5750 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "287.50 ms",
      "292.00 ms",
      "143.75 ms",
      "2875.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5750 bits / (20 * 1000 bps) = 287.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3000 KB over a point-to-point network link with transmission bandwidth rate of 89 Mbps. What is the theoretical transmission delay?",
    "options": [
      "288.635 ms",
      "69.034 ms",
      "276.135 ms",
      "414.202 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3000 * 1024 * 8) / (89 * 10^6) = 276.135 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.64.207.234 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.64.207.255",
      "10.64.207.0",
      "10.64.208.224",
      "10.64.207.192"
    ],
    "answer": 0,
    "explanation": "For host 10.64.207.234/27, the subnet mask bits reveal the network ID is 10.64.207.224 and broadcast address is 10.64.207.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.23.201.87 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.23.201.88",
      "172.23.202.84",
      "172.23.201.87",
      "172.23.201.80"
    ],
    "answer": 2,
    "explanation": "For host 172.23.201.87/30, the subnet mask bits reveal the network ID is 172.23.201.84 and broadcast address is 172.23.201.87."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3000 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "30.00 ms",
      "600.00 ms",
      "64.50 ms",
      "60.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3000 bits / (50 * 1000 bps) = 60.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3000 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "282.483 ms",
      "70.621 ms",
      "294.983 ms",
      "423.724 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3000 * 1024 * 8) / (87 * 10^6) = 282.483 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4550 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "4550.00 ms",
      "227.50 ms",
      "459.50 ms",
      "455.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4550 bits / (10 * 1000 bps) = 455.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.137.199 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.137.255",
      "192.168.137.0",
      "192.168.138.192",
      "192.168.137.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.137.199/26, the subnet mask bits reveal the network ID is 192.168.137.192 and broadcast address is 192.168.137.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.127.248 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.127.255",
      "192.168.127.0",
      "192.168.128.128",
      "192.168.127.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.127.248/25, the subnet mask bits reveal the network ID is 192.168.127.128 and broadcast address is 192.168.127.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 480 KB over a point-to-point network link with transmission bandwidth rate of 20 Mbps. What is the theoretical transmission delay?",
    "options": [
      "49.152 ms",
      "196.608 ms",
      "294.912 ms",
      "209.108 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (480 * 1024 * 8) / (20 * 10^6) = 196.608 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.5.28.99 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.5.28.80",
      "10.5.28.111",
      "10.5.29.96",
      "10.5.28.112"
    ],
    "answer": 1,
    "explanation": "For host 10.5.28.99/28, the subnet mask bits reveal the network ID is 10.5.28.96 and broadcast address is 10.5.28.111."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "4000.00 ms",
      "200.00 ms",
      "400.00 ms",
      "404.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4000 bits / (10 * 1000 bps) = 400.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2040 KB over a point-to-point network link with transmission bandwidth rate of 74 Mbps. What is the theoretical transmission delay?",
    "options": [
      "338.750 ms",
      "225.834 ms",
      "56.458 ms",
      "238.334 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2040 * 1024 * 8) / (74 * 10^6) = 225.834 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "267.00 ms",
      "131.25 ms",
      "2625.00 ms",
      "262.50 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5250 bits / (20 * 1000 bps) = 262.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.235.167.160 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.235.167.0",
      "255.255.255.255",
      "255.255.255.255",
      "10.235.168.0"
    ],
    "answer": 0,
    "explanation": "For host 10.235.167.160/24, the subnet mask bits reveal the network ID is 10.235.167.0 and broadcast address is 10.235.167.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4500 KB over a point-to-point network link with transmission bandwidth rate of 99 Mbps. What is the theoretical transmission delay?",
    "options": [
      "372.364 ms",
      "558.545 ms",
      "384.864 ms",
      "93.091 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4500 * 1024 * 8) / (99 * 10^6) = 372.364 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.183.12 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.183.255",
      "192.168.183.0",
      "192.168.183.0",
      "192.168.184.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.183.12/24, the subnet mask bits reveal the network ID is 192.168.183.0 and broadcast address is 192.168.183.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.248.30 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.248.127",
      "192.168.248.128",
      "192.168.248.0",
      "192.168.249.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.248.30/25, the subnet mask bits reveal the network ID is 192.168.248.0 and broadcast address is 192.168.248.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4600 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "2300.00 ms",
      "115.00 ms",
      "230.00 ms",
      "234.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 4600 bits / (20 * 1000 bps) = 230.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1000 KB over a point-to-point network link with transmission bandwidth rate of 21 Mbps. What is the theoretical transmission delay?",
    "options": [
      "390.095 ms",
      "97.524 ms",
      "585.143 ms",
      "402.595 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1000 * 1024 * 8) / (21 * 10^6) = 390.095 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.208.37 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.209.0",
      "255.255.255.255",
      "192.168.208.128",
      "192.168.208.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.208.37/25, the subnet mask bits reveal the network ID is 192.168.208.0 and broadcast address is 192.168.208.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.27.185.238 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.27.185.0",
      "172.27.185.0",
      "172.27.184.0",
      "172.27.186.0"
    ],
    "answer": 2,
    "explanation": "For host 172.27.185.238/22, the subnet mask bits reveal the network ID is 172.27.184.0 and broadcast address is 172.27.187.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.164.57.151 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.164.57.144",
      "10.164.57.148",
      "10.164.58.148",
      "10.164.57.152"
    ],
    "answer": 1,
    "explanation": "For host 10.164.57.151/30, the subnet mask bits reveal the network ID is 10.164.57.148 and broadcast address is 10.164.57.151."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.115.48 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.115.0",
      "172.20.116.0",
      "255.255.255.255",
      "172.20.115.128"
    ],
    "answer": 0,
    "explanation": "For host 172.20.115.48/25, the subnet mask bits reveal the network ID is 172.20.115.0 and broadcast address is 172.20.115.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2100 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "314.311 ms",
      "301.811 ms",
      "452.716 ms",
      "75.453 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2100 * 1024 * 8) / (57 * 10^6) = 301.811 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.90.212 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.91.0",
      "192.168.90.0",
      "255.255.255.255",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 192.168.90.212/24, the subnet mask bits reveal the network ID is 192.168.90.0 and broadcast address is 192.168.90.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 790 KB over a point-to-point network link with transmission bandwidth rate of 32 Mbps. What is the theoretical transmission delay?",
    "options": [
      "214.740 ms",
      "303.360 ms",
      "50.560 ms",
      "202.240 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (790 * 1024 * 8) / (32 * 10^6) = 202.240 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4150 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "871.713 ms",
      "884.213 ms",
      "217.928 ms",
      "1307.569 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4150 * 1024 * 8) / (39 * 10^6) = 871.713 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.243.231 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.244.0",
      "192.168.242.0",
      "192.168.243.0",
      "192.168.243.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.243.231/23, the subnet mask bits reveal the network ID is 192.168.242.0 and broadcast address is 192.168.243.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1400 KB over a point-to-point network link with transmission bandwidth rate of 27 Mbps. What is the theoretical transmission delay?",
    "options": [
      "424.770 ms",
      "106.193 ms",
      "437.270 ms",
      "637.156 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1400 * 1024 * 8) / (27 * 10^6) = 424.770 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.26.170.103 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.26.171.0",
      "172.26.170.128",
      "255.255.255.255",
      "172.26.170.0"
    ],
    "answer": 3,
    "explanation": "For host 172.26.170.103/25, the subnet mask bits reveal the network ID is 172.26.170.0 and broadcast address is 172.26.170.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.122.35 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.122.48",
      "192.168.122.16",
      "192.168.122.32",
      "192.168.123.32"
    ],
    "answer": 2,
    "explanation": "For host 192.168.122.35/28, the subnet mask bits reveal the network ID is 192.168.122.32 and broadcast address is 192.168.122.47."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.249.86 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.250.0",
      "192.168.249.127",
      "192.168.249.128",
      "192.168.249.0"
    ],
    "answer": 1,
    "explanation": "For host 192.168.249.86/25, the subnet mask bits reveal the network ID is 192.168.249.0 and broadcast address is 192.168.249.127."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2700 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "1350.00 ms",
      "67.50 ms",
      "139.50 ms",
      "135.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2700 bits / (20 * 1000 bps) = 135.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3970 KB over a point-to-point network link with transmission bandwidth rate of 51 Mbps. What is the theoretical transmission delay?",
    "options": [
      "650.191 ms",
      "159.423 ms",
      "637.691 ms",
      "956.536 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3970 * 1024 * 8) / (51 * 10^6) = 637.691 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2410 KB over a point-to-point network link with transmission bandwidth rate of 82 Mbps. What is the theoretical transmission delay?",
    "options": [
      "240.765 ms",
      "60.191 ms",
      "253.265 ms",
      "361.147 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2410 * 1024 * 8) / (82 * 10^6) = 240.765 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.20.195 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.21.128",
      "192.168.20.0",
      "192.168.20.128",
      "192.168.20.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.20.195/25, the subnet mask bits reveal the network ID is 192.168.20.128 and broadcast address is 192.168.20.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3620 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "663.919 ms",
      "110.653 ms",
      "455.113 ms",
      "442.613 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3620 * 1024 * 8) / (67 * 10^6) = 442.613 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.21.222 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.21.216",
      "192.168.21.223",
      "192.168.22.220",
      "192.168.21.224"
    ],
    "answer": 1,
    "explanation": "For host 192.168.21.222/30, the subnet mask bits reveal the network ID is 192.168.21.220 and broadcast address is 192.168.21.223."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.139.145 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.140.128",
      "192.168.139.96",
      "192.168.139.159",
      "192.168.139.160"
    ],
    "answer": 2,
    "explanation": "For host 192.168.139.145/27, the subnet mask bits reveal the network ID is 192.168.139.128 and broadcast address is 192.168.139.159."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 440 KB over a point-to-point network link with transmission bandwidth rate of 90 Mbps. What is the theoretical transmission delay?",
    "options": [
      "60.075 ms",
      "40.050 ms",
      "52.550 ms",
      "10.012 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (440 * 1024 * 8) / (90 * 10^6) = 40.050 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1130 KB over a point-to-point network link with transmission bandwidth rate of 87 Mbps. What is the theoretical transmission delay?",
    "options": [
      "26.600 ms",
      "118.902 ms",
      "159.603 ms",
      "106.402 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1130 * 1024 * 8) / (87 * 10^6) = 106.402 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 330 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "675.840 ms",
      "112.640 ms",
      "450.560 ms",
      "463.060 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (330 * 1024 * 8) / (6 * 10^6) = 450.560 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.153.116 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.153.128",
      "192.168.153.96",
      "192.168.153.112",
      "192.168.154.112"
    ],
    "answer": 2,
    "explanation": "For host 192.168.153.116/28, the subnet mask bits reveal the network ID is 192.168.153.112 and broadcast address is 192.168.153.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1090 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "202.485 ms",
      "284.977 ms",
      "189.985 ms",
      "47.496 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1090 * 1024 * 8) / (47 * 10^6) = 189.985 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.164.165 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.164.191",
      "192.168.164.64",
      "192.168.164.192",
      "192.168.165.128"
    ],
    "answer": 0,
    "explanation": "For host 192.168.164.165/26, the subnet mask bits reveal the network ID is 192.168.164.128 and broadcast address is 192.168.164.191."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.103.221.93 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.103.221.80",
      "10.103.222.80",
      "10.103.221.64",
      "10.103.221.96"
    ],
    "answer": 0,
    "explanation": "For host 10.103.221.93/28, the subnet mask bits reveal the network ID is 10.103.221.80 and broadcast address is 10.103.221.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1310 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "47.909 ms",
      "191.634 ms",
      "204.134 ms",
      "287.451 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1310 * 1024 * 8) / (56 * 10^6) = 191.634 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3050 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "65.50 ms",
      "610.00 ms",
      "61.00 ms",
      "30.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3050 bits / (50 * 1000 bps) = 61.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1500 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "7.50 ms",
      "3.75 ms",
      "12.00 ms",
      "75.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 1500 bits / (200 * 1000 bps) = 7.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4200 KB over a point-to-point network link with transmission bandwidth rate of 31 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1122.384 ms",
      "1664.826 ms",
      "277.471 ms",
      "1109.884 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4200 * 1024 * 8) / (31 * 10^6) = 1109.884 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3050 KB over a point-to-point network link with transmission bandwidth rate of 3 Mbps. What is the theoretical transmission delay?",
    "options": [
      "12492.800 ms",
      "8328.533 ms",
      "2082.133 ms",
      "8341.033 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3050 * 1024 * 8) / (3 * 10^6) = 8328.533 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4300 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "215.00 ms",
      "2150.00 ms",
      "107.50 ms",
      "219.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 4300 bits / (20 * 1000 bps) = 215.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.186.220.51 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.186.221.0",
      "10.186.220.64",
      "10.186.220.63",
      "10.186.220.0"
    ],
    "answer": 2,
    "explanation": "For host 10.186.220.51/26, the subnet mask bits reveal the network ID is 10.186.220.0 and broadcast address is 10.186.220.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "16.50 ms",
      "6.00 ms",
      "120.00 ms",
      "12.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 2400 bits / (200 * 1000 bps) = 12.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.22.89.183 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.22.89.176",
      "172.22.89.192",
      "172.22.90.176",
      "172.22.89.160"
    ],
    "answer": 0,
    "explanation": "For host 172.22.89.183/28, the subnet mask bits reveal the network ID is 172.22.89.176 and broadcast address is 172.22.89.191."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3650 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "9.13 ms",
      "22.75 ms",
      "18.25 ms",
      "182.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3650 bits / (200 * 1000 bps) = 18.25 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.78.59.27 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.78.59.0",
      "10.78.60.0",
      "10.78.56.0",
      "10.78.59.0"
    ],
    "answer": 2,
    "explanation": "For host 10.78.59.27/22, the subnet mask bits reveal the network ID is 10.78.56.0 and broadcast address is 10.78.59.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.200.207.141 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.200.207.64",
      "10.200.207.192",
      "10.200.207.128",
      "10.200.208.128"
    ],
    "answer": 2,
    "explanation": "For host 10.200.207.141/26, the subnet mask bits reveal the network ID is 10.200.207.128 and broadcast address is 10.200.207.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4170 KB over a point-to-point network link with transmission bandwidth rate of 44 Mbps. What is the theoretical transmission delay?",
    "options": [
      "776.378 ms",
      "1164.567 ms",
      "788.878 ms",
      "194.095 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4170 * 1024 * 8) / (44 * 10^6) = 776.378 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.211.130.194 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.211.130.0",
      "10.211.131.192",
      "10.211.130.255",
      "10.211.130.128"
    ],
    "answer": 2,
    "explanation": "For host 10.211.130.194/26, the subnet mask bits reveal the network ID is 10.211.130.192 and broadcast address is 10.211.130.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2520 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "793.994 ms",
      "1190.991 ms",
      "198.498 ms",
      "806.494 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2520 * 1024 * 8) / (26 * 10^6) = 793.994 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.29.76.122 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.29.76.128",
      "172.29.76.96",
      "172.29.76.112",
      "172.29.77.112"
    ],
    "answer": 2,
    "explanation": "For host 172.29.76.122/28, the subnet mask bits reveal the network ID is 172.29.76.112 and broadcast address is 172.29.76.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.197.179 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.197.0",
      "192.168.197.0",
      "192.168.198.0",
      "192.168.196.0"
    ],
    "answer": 3,
    "explanation": "For host 192.168.197.179/22, the subnet mask bits reveal the network ID is 192.168.196.0 and broadcast address is 192.168.199.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.232.240.104 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.232.240.112",
      "10.232.240.96",
      "10.232.241.96",
      "10.232.240.80"
    ],
    "answer": 1,
    "explanation": "For host 10.232.240.104/28, the subnet mask bits reveal the network ID is 10.232.240.96 and broadcast address is 10.232.240.111."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.183.195.251 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.183.196.240",
      "10.183.195.0",
      "10.183.195.224",
      "10.183.195.240"
    ],
    "answer": 3,
    "explanation": "For host 10.183.195.251/28, the subnet mask bits reveal the network ID is 10.183.195.240 and broadcast address is 10.183.195.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 270 KB over a point-to-point network link with transmission bandwidth rate of 86 Mbps. What is the theoretical transmission delay?",
    "options": [
      "6.430 ms",
      "38.219 ms",
      "38.579 ms",
      "25.719 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (270 * 1024 * 8) / (86 * 10^6) = 25.719 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.75.120.100 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.75.121.96",
      "10.75.120.128",
      "10.75.120.64",
      "10.75.120.127"
    ],
    "answer": 3,
    "explanation": "For host 10.75.120.100/27, the subnet mask bits reveal the network ID is 10.75.120.96 and broadcast address is 10.75.120.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.182.100 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.18.183.100",
      "172.18.182.104",
      "172.18.182.100",
      "172.18.182.96"
    ],
    "answer": 2,
    "explanation": "For host 172.18.182.100/30, the subnet mask bits reveal the network ID is 172.18.182.100 and broadcast address is 172.18.182.103."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 820 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "18.254 ms",
      "109.523 ms",
      "85.516 ms",
      "73.016 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (820 * 1024 * 8) / (92 * 10^6) = 73.016 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.9.229 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.10.224",
      "192.168.9.192",
      "192.168.9.224",
      "192.168.9.0"
    ],
    "answer": 2,
    "explanation": "For host 192.168.9.229/27, the subnet mask bits reveal the network ID is 192.168.9.224 and broadcast address is 192.168.9.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1850 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "23.00 ms",
      "9.25 ms",
      "18.50 ms",
      "185.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1850 bits / (100 * 1000 bps) = 18.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.218.15 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.218.63",
      "172.20.218.0",
      "172.20.219.0",
      "172.20.218.64"
    ],
    "answer": 0,
    "explanation": "For host 172.20.218.15/26, the subnet mask bits reveal the network ID is 172.20.218.0 and broadcast address is 172.20.218.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2750 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "27.50 ms",
      "55.00 ms",
      "550.00 ms",
      "59.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 2750 bits / (50 * 1000 bps) = 55.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1670 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "81.432 ms",
      "488.594 ms",
      "338.230 ms",
      "325.730 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1670 * 1024 * 8) / (42 * 10^6) = 325.730 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 110 KB over a point-to-point network link with transmission bandwidth rate of 76 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2.964 ms",
      "24.357 ms",
      "11.857 ms",
      "17.785 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (110 * 1024 * 8) / (76 * 10^6) = 11.857 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.218.1.17 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.218.1.32",
      "10.218.2.16",
      "10.218.1.0",
      "10.218.1.31"
    ],
    "answer": 3,
    "explanation": "For host 10.218.1.17/28, the subnet mask bits reveal the network ID is 10.218.1.16 and broadcast address is 10.218.1.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.6.234 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.18.6.0",
      "172.18.6.192",
      "172.18.6.128",
      "172.18.7.192"
    ],
    "answer": 1,
    "explanation": "For host 172.18.6.234/26, the subnet mask bits reveal the network ID is 172.18.6.192 and broadcast address is 172.18.6.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.216.21 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.216.0",
      "192.168.216.0",
      "192.168.217.0",
      "192.168.216.255"
    ],
    "answer": 3,
    "explanation": "For host 192.168.216.21/24, the subnet mask bits reveal the network ID is 192.168.216.0 and broadcast address is 192.168.216.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3040 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "469.881 ms",
      "117.470 ms",
      "482.381 ms",
      "704.821 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3040 * 1024 * 8) / (53 * 10^6) = 469.881 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1100 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "15.50 ms",
      "110.00 ms",
      "11.00 ms",
      "5.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1100 bits / (100 * 1000 bps) = 11.00 ms."
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
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.59.196 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.60.192",
      "192.168.59.184",
      "192.168.59.199",
      "192.168.59.200"
    ],
    "answer": 2,
    "explanation": "For host 192.168.59.196/29, the subnet mask bits reveal the network ID is 192.168.59.192 and broadcast address is 192.168.59.199."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3830 KB over a point-to-point network link with transmission bandwidth rate of 24 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1319.807 ms",
      "1960.960 ms",
      "1307.307 ms",
      "326.827 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3830 * 1024 * 8) / (24 * 10^6) = 1307.307 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2850 KB over a point-to-point network link with transmission bandwidth rate of 20 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1179.860 ms",
      "291.840 ms",
      "1167.360 ms",
      "1751.040 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2850 * 1024 * 8) / (20 * 10^6) = 1167.360 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 340 KB over a point-to-point network link with transmission bandwidth rate of 69 Mbps. What is the theoretical transmission delay?",
    "options": [
      "52.866 ms",
      "10.092 ms",
      "40.366 ms",
      "60.550 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (340 * 1024 * 8) / (69 * 10^6) = 40.366 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2070 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "2838.740 ms",
      "2826.240 ms",
      "706.560 ms",
      "4239.360 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2070 * 1024 * 8) / (6 * 10^6) = 2826.240 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.172.126 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.172.255",
      "192.168.172.0",
      "192.168.173.0",
      "192.168.172.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.172.126/24, the subnet mask bits reveal the network ID is 192.168.172.0 and broadcast address is 192.168.172.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.183.105.180 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.183.105.192",
      "10.183.105.128",
      "10.183.105.64",
      "10.183.106.128"
    ],
    "answer": 1,
    "explanation": "For host 10.183.105.180/26, the subnet mask bits reveal the network ID is 10.183.105.128 and broadcast address is 10.183.105.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1890 KB over a point-to-point network link with transmission bandwidth rate of 49 Mbps. What is the theoretical transmission delay?",
    "options": [
      "473.966 ms",
      "328.477 ms",
      "315.977 ms",
      "78.994 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1890 * 1024 * 8) / (49 * 10^6) = 315.977 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1410 KB over a point-to-point network link with transmission bandwidth rate of 56 Mbps. What is the theoretical transmission delay?",
    "options": [
      "309.394 ms",
      "218.763 ms",
      "206.263 ms",
      "51.566 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1410 * 1024 * 8) / (56 * 10^6) = 206.263 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1020 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "187.071 ms",
      "137.214 ms",
      "31.179 ms",
      "124.714 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1020 * 1024 * 8) / (67 * 10^6) = 124.714 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2410 KB over a point-to-point network link with transmission bandwidth rate of 42 Mbps. What is the theoretical transmission delay?",
    "options": [
      "117.516 ms",
      "482.565 ms",
      "705.097 ms",
      "470.065 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (2410 * 1024 * 8) / (42 * 10^6) = 470.065 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 670 KB over a point-to-point network link with transmission bandwidth rate of 9 Mbps. What is the theoretical transmission delay?",
    "options": [
      "622.349 ms",
      "914.773 ms",
      "609.849 ms",
      "152.462 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (670 * 1024 * 8) / (9 * 10^6) = 609.849 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.223.218 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.18.223.0",
      "172.18.223.192",
      "172.18.224.192",
      "172.18.223.128"
    ],
    "answer": 1,
    "explanation": "For host 172.18.223.218/26, the subnet mask bits reveal the network ID is 172.18.223.192 and broadcast address is 172.18.223.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.168.79 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.20.169.76",
      "172.20.168.76",
      "172.20.168.72",
      "172.20.168.80"
    ],
    "answer": 1,
    "explanation": "For host 172.20.168.79/30, the subnet mask bits reveal the network ID is 172.20.168.76 and broadcast address is 172.20.168.79."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.253.149 and subnet mask /29. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.253.136",
      "192.168.254.144",
      "192.168.253.151",
      "192.168.253.152"
    ],
    "answer": 2,
    "explanation": "For host 192.168.253.149/29, the subnet mask bits reveal the network ID is 192.168.253.144 and broadcast address is 192.168.253.151."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5150 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "25.75 ms",
      "257.50 ms",
      "12.88 ms",
      "30.25 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5150 bits / (200 * 1000 bps) = 25.75 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4660 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "19099.860 ms",
      "28631.040 ms",
      "4771.840 ms",
      "19087.360 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4660 * 1024 * 8) / (2 * 10^6) = 19087.360 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.176.152 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.176.128",
      "192.168.176.160",
      "192.168.176.159",
      "192.168.177.144"
    ],
    "answer": 2,
    "explanation": "For host 192.168.176.152/28, the subnet mask bits reveal the network ID is 192.168.176.144 and broadcast address is 192.168.176.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.139.58.125 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.139.58.0",
      "10.139.58.0",
      "10.139.59.0",
      "10.139.59.255"
    ],
    "answer": 3,
    "explanation": "For host 10.139.58.125/22, the subnet mask bits reveal the network ID is 10.139.56.0 and broadcast address is 10.139.59.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3600 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4915.200 ms",
      "4927.700 ms",
      "7372.800 ms",
      "1228.800 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3600 * 1024 * 8) / (6 * 10^6) = 4915.200 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.27.128.14 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.27.129.0",
      "10.27.128.0",
      "10.27.128.32"
    ],
    "answer": 2,
    "explanation": "For host 10.27.128.14/27, the subnet mask bits reveal the network ID is 10.27.128.0 and broadcast address is 10.27.128.31."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3600 KB over a point-to-point network link with transmission bandwidth rate of 61 Mbps. What is the theoretical transmission delay?",
    "options": [
      "725.193 ms",
      "483.462 ms",
      "495.962 ms",
      "120.866 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3600 * 1024 * 8) / (61 * 10^6) = 483.462 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2790 KB over a point-to-point network link with transmission bandwidth rate of 63 Mbps. What is the theoretical transmission delay?",
    "options": [
      "544.183 ms",
      "375.289 ms",
      "362.789 ms",
      "90.697 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2790 * 1024 * 8) / (63 * 10^6) = 362.789 ms."
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
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3350 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "335.00 ms",
      "16.75 ms",
      "33.50 ms",
      "38.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3350 bits / (100 * 1000 bps) = 33.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2400 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "240.00 ms",
      "28.50 ms",
      "24.00 ms",
      "12.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2400 bits / (100 * 1000 bps) = 24.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.204.210 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.204.192",
      "192.168.204.224",
      "192.168.205.208",
      "192.168.204.223"
    ],
    "answer": 3,
    "explanation": "For host 192.168.204.210/28, the subnet mask bits reveal the network ID is 192.168.204.208 and broadcast address is 192.168.204.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2240 KB over a point-to-point network link with transmission bandwidth rate of 57 Mbps. What is the theoretical transmission delay?",
    "options": [
      "334.431 ms",
      "321.931 ms",
      "482.897 ms",
      "80.483 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2240 * 1024 * 8) / (57 * 10^6) = 321.931 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1600 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "48.907 ms",
      "208.130 ms",
      "293.445 ms",
      "195.630 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1600 * 1024 * 8) / (67 * 10^6) = 195.630 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.8.90.225 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.8.91.0",
      "10.8.90.255",
      "10.8.90.0",
      "10.8.90.0"
    ],
    "answer": 1,
    "explanation": "For host 10.8.90.225/24, the subnet mask bits reveal the network ID is 10.8.90.0 and broadcast address is 10.8.90.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "114.00 ms",
      "1140.00 ms",
      "118.50 ms",
      "57.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5700 bits / (50 * 1000 bps) = 114.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2880 KB over a point-to-point network link with transmission bandwidth rate of 64 Mbps. What is the theoretical transmission delay?",
    "options": [
      "381.140 ms",
      "552.960 ms",
      "368.640 ms",
      "92.160 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2880 * 1024 * 8) / (64 * 10^6) = 368.640 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 220 KB over a point-to-point network link with transmission bandwidth rate of 47 Mbps. What is the theoretical transmission delay?",
    "options": [
      "9.586 ms",
      "50.846 ms",
      "38.346 ms",
      "57.518 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (220 * 1024 * 8) / (47 * 10^6) = 38.346 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2800 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "14.00 ms",
      "7.00 ms",
      "18.50 ms",
      "140.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2800 bits / (200 * 1000 bps) = 14.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5200 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "130.00 ms",
      "264.50 ms",
      "2600.00 ms",
      "260.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5200 bits / (20 * 1000 bps) = 260.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.165.83 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.165.128",
      "192.168.165.0",
      "192.168.165.127",
      "192.168.166.64"
    ],
    "answer": 2,
    "explanation": "For host 192.168.165.83/26, the subnet mask bits reveal the network ID is 192.168.165.64 and broadcast address is 192.168.165.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.15.253.220 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.15.254.0",
      "255.255.255.255",
      "10.15.253.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "For host 10.15.253.220/24, the subnet mask bits reveal the network ID is 10.15.253.0 and broadcast address is 10.15.253.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5700 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "15.90 ms",
      "114.00 ms",
      "5.70 ms",
      "11.40 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5700 bits / (500 * 1000 bps) = 11.40 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1910 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "307.721 ms",
      "442.832 ms",
      "295.221 ms",
      "73.805 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1910 * 1024 * 8) / (53 * 10^6) = 295.221 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.163.61 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.25.163.0",
      "172.25.163.0",
      "172.25.164.0",
      "172.25.160.0"
    ],
    "answer": 3,
    "explanation": "For host 172.25.163.61/22, the subnet mask bits reveal the network ID is 172.25.160.0 and broadcast address is 172.25.163.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4550 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "91.00 ms",
      "4.55 ms",
      "13.60 ms",
      "9.10 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 4550 bits / (500 * 1000 bps) = 9.10 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.34.249 and subnet mask /23. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "192.168.34.0",
      "192.168.35.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "For host 192.168.34.249/23, the subnet mask bits reveal the network ID is 192.168.34.0 and broadcast address is 192.168.35.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.109.106 and subnet mask /22. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.108.0",
      "192.168.110.0",
      "192.168.109.0",
      "192.168.109.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.109.106/22, the subnet mask bits reveal the network ID is 192.168.108.0 and broadcast address is 192.168.111.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4230 KB over a point-to-point network link with transmission bandwidth rate of 81 Mbps. What is the theoretical transmission delay?",
    "options": [
      "440.304 ms",
      "427.804 ms",
      "641.707 ms",
      "106.951 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4230 * 1024 * 8) / (81 * 10^6) = 427.804 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.241.250.90 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.241.250.96",
      "10.241.250.88",
      "10.241.250.80",
      "10.241.251.88"
    ],
    "answer": 1,
    "explanation": "For host 10.241.250.90/29, the subnet mask bits reveal the network ID is 10.241.250.88 and broadcast address is 10.241.250.95."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2580 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "660.480 ms",
      "2641.920 ms",
      "3962.880 ms",
      "2654.420 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2580 * 1024 * 8) / (8 * 10^6) = 2641.920 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.180.30 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.180.0",
      "255.255.255.255",
      "192.168.181.0",
      "192.168.180.64"
    ],
    "answer": 0,
    "explanation": "For host 192.168.180.30/26, the subnet mask bits reveal the network ID is 192.168.180.0 and broadcast address is 192.168.180.63."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3640 KB over a point-to-point network link with transmission bandwidth rate of 22 Mbps. What is the theoretical transmission delay?",
    "options": [
      "338.851 ms",
      "2033.105 ms",
      "1367.904 ms",
      "1355.404 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3640 * 1024 * 8) / (22 * 10^6) = 1355.404 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3470 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1122.088 ms",
      "187.015 ms",
      "748.059 ms",
      "760.559 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3470 * 1024 * 8) / (38 * 10^6) = 748.059 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5350 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "107.00 ms",
      "10.70 ms",
      "5.35 ms",
      "15.20 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5350 bits / (500 * 1000 bps) = 10.70 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3760 KB over a point-to-point network link with transmission bandwidth rate of 28 Mbps. What is the theoretical transmission delay?",
    "options": [
      "275.017 ms",
      "1112.569 ms",
      "1650.103 ms",
      "1100.069 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (3760 * 1024 * 8) / (28 * 10^6) = 1100.069 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.44.253.242 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.44.253.0",
      "10.44.253.0",
      "10.44.255.255",
      "10.44.254.0"
    ],
    "answer": 2,
    "explanation": "For host 10.44.253.242/22, the subnet mask bits reveal the network ID is 10.44.252.0 and broadcast address is 10.44.255.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3170 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1082.027 ms",
      "4328.107 ms",
      "4340.607 ms",
      "6492.160 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (3170 * 1024 * 8) / (6 * 10^6) = 4328.107 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.161.189 and subnet mask /25. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.161.0",
      "192.168.161.255",
      "192.168.161.0",
      "192.168.162.128"
    ],
    "answer": 1,
    "explanation": "For host 192.168.161.189/25, the subnet mask bits reveal the network ID is 192.168.161.128 and broadcast address is 192.168.161.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2630 KB over a point-to-point network link with transmission bandwidth rate of 38 Mbps. What is the theoretical transmission delay?",
    "options": [
      "141.743 ms",
      "566.973 ms",
      "579.473 ms",
      "850.459 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2630 * 1024 * 8) / (38 * 10^6) = 566.973 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.180.115.20 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "10.180.115.0",
      "10.180.116.0",
      "10.180.115.128"
    ],
    "answer": 1,
    "explanation": "For host 10.180.115.20/25, the subnet mask bits reveal the network ID is 10.180.115.0 and broadcast address is 10.180.115.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3490 KB over a point-to-point network link with transmission bandwidth rate of 60 Mbps. What is the theoretical transmission delay?",
    "options": [
      "489.001 ms",
      "714.752 ms",
      "476.501 ms",
      "119.125 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3490 * 1024 * 8) / (60 * 10^6) = 476.501 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3260 KB over a point-to-point network link with transmission bandwidth rate of 67 Mbps. What is the theoretical transmission delay?",
    "options": [
      "597.894 ms",
      "411.096 ms",
      "398.596 ms",
      "99.649 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3260 * 1024 * 8) / (67 * 10^6) = 398.596 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.165.119 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.165.96",
      "192.168.166.112",
      "192.168.165.128",
      "192.168.165.112"
    ],
    "answer": 3,
    "explanation": "For host 192.168.165.119/28, the subnet mask bits reveal the network ID is 192.168.165.112 and broadcast address is 192.168.165.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.147.18.230 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.147.19.0",
      "10.147.18.0",
      "10.147.18.0",
      "10.147.18.255"
    ],
    "answer": 3,
    "explanation": "For host 10.147.18.230/24, the subnet mask bits reveal the network ID is 10.147.18.0 and broadcast address is 10.147.18.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1060 KB over a point-to-point network link with transmission bandwidth rate of 7 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1240.503 ms",
      "1860.754 ms",
      "1253.003 ms",
      "310.126 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (1060 * 1024 * 8) / (7 * 10^6) = 1240.503 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.78.231 and subnet mask /24. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "255.255.255.255",
      "172.24.78.0",
      "255.255.255.255",
      "172.24.79.0"
    ],
    "answer": 1,
    "explanation": "For host 172.24.78.231/24, the subnet mask bits reveal the network ID is 172.24.78.0 and broadcast address is 172.24.78.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1380 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "40.375 ms",
      "161.499 ms",
      "242.249 ms",
      "173.999 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1380 * 1024 * 8) / (70 * 10^6) = 161.499 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1470 KB over a point-to-point network link with transmission bandwidth rate of 39 Mbps. What is the theoretical transmission delay?",
    "options": [
      "77.194 ms",
      "308.775 ms",
      "321.275 ms",
      "463.163 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1470 * 1024 * 8) / (39 * 10^6) = 308.775 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1250 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "129.50 ms",
      "125.00 ms",
      "1250.00 ms",
      "62.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1250 bits / (10 * 1000 bps) = 125.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.17.210.77 and subnet mask /24. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.17.210.0",
      "172.17.211.0",
      "172.17.210.255",
      "172.17.210.0"
    ],
    "answer": 2,
    "explanation": "For host 172.17.210.77/24, the subnet mask bits reveal the network ID is 172.17.210.0 and broadcast address is 172.17.210.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 220 KB over a point-to-point network link with transmission bandwidth rate of 6 Mbps. What is the theoretical transmission delay?",
    "options": [
      "312.873 ms",
      "450.560 ms",
      "300.373 ms",
      "75.093 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (220 * 1024 * 8) / (6 * 10^6) = 300.373 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3700 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "370.00 ms",
      "37.00 ms",
      "18.50 ms",
      "41.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3700 bits / (100 * 1000 bps) = 37.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3850 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "9.63 ms",
      "23.75 ms",
      "192.50 ms",
      "19.25 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3850 bits / (200 * 1000 bps) = 19.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1410 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "134.087 ms",
      "182.380 ms",
      "30.397 ms",
      "121.587 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (1410 * 1024 * 8) / (95 * 10^6) = 121.587 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.156.170.109 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.156.170.112",
      "10.156.170.104",
      "10.156.170.111",
      "10.156.171.108"
    ],
    "answer": 2,
    "explanation": "For host 10.156.170.109/30, the subnet mask bits reveal the network ID is 10.156.170.108 and broadcast address is 10.156.170.111."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1150 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "23.00 ms",
      "2.30 ms",
      "1.15 ms",
      "6.80 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 1150 bits / (500 * 1000 bps) = 2.30 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.237.242 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.238.224",
      "192.168.237.255",
      "192.168.237.0",
      "192.168.237.192"
    ],
    "answer": 1,
    "explanation": "For host 192.168.237.242/27, the subnet mask bits reveal the network ID is 192.168.237.224 and broadcast address is 192.168.237.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2350 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "23.50 ms",
      "11.75 ms",
      "28.00 ms",
      "235.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 2350 bits / (100 * 1000 bps) = 23.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3720 KB over a point-to-point network link with transmission bandwidth rate of 97 Mbps. What is the theoretical transmission delay?",
    "options": [
      "471.251 ms",
      "78.542 ms",
      "314.167 ms",
      "326.667 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3720 * 1024 * 8) / (97 * 10^6) = 314.167 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5750 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "11.50 ms",
      "115.00 ms",
      "16.00 ms",
      "5.75 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5750 bits / (500 * 1000 bps) = 11.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3400 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "38.50 ms",
      "34.00 ms",
      "17.00 ms",
      "340.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3400 bits / (100 * 1000 bps) = 34.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.118.130.81 and subnet mask /27. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.118.131.64",
      "10.118.130.64",
      "10.118.130.32",
      "10.118.130.96"
    ],
    "answer": 1,
    "explanation": "For host 10.118.130.81/27, the subnet mask bits reveal the network ID is 10.118.130.64 and broadcast address is 10.118.130.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.89.57.28 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.89.57.0",
      "10.89.57.255",
      "10.89.58.0",
      "10.89.57.0"
    ],
    "answer": 1,
    "explanation": "For host 10.89.57.28/23, the subnet mask bits reveal the network ID is 10.89.56.0 and broadcast address is 10.89.57.255."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1320 KB over a point-to-point network link with transmission bandwidth rate of 94 Mbps. What is the theoretical transmission delay?",
    "options": [
      "172.555 ms",
      "127.537 ms",
      "115.037 ms",
      "28.759 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1320 * 1024 * 8) / (94 * 10^6) = 115.037 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5050 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "50.50 ms",
      "25.25 ms",
      "505.00 ms",
      "55.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5050 bits / (100 * 1000 bps) = 50.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2830 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "305.044 ms",
      "1220.177 ms",
      "1232.677 ms",
      "1830.265 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2830 * 1024 * 8) / (19 * 10^6) = 1220.177 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2460 KB over a point-to-point network link with transmission bandwidth rate of 18 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1119.573 ms",
      "1132.073 ms",
      "1679.360 ms",
      "279.893 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2460 * 1024 * 8) / (18 * 10^6) = 1119.573 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 4950 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "252.00 ms",
      "247.50 ms",
      "123.75 ms",
      "2475.00 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 4950 bits / (20 * 1000 bps) = 247.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.31.111.115 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.31.111.0",
      "10.31.112.64",
      "10.31.111.128",
      "10.31.111.127"
    ],
    "answer": 3,
    "explanation": "For host 10.31.111.115/26, the subnet mask bits reveal the network ID is 10.31.111.64 and broadcast address is 10.31.111.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 420 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "64.918 ms",
      "97.377 ms",
      "77.418 ms",
      "16.229 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (420 * 1024 * 8) / (53 * 10^6) = 64.918 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.26.28 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.26.28",
      "192.168.26.24",
      "192.168.26.32",
      "192.168.27.28"
    ],
    "answer": 0,
    "explanation": "For host 192.168.26.28/30, the subnet mask bits reveal the network ID is 192.168.26.28 and broadcast address is 192.168.26.31."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1700 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "13.00 ms",
      "85.00 ms",
      "8.50 ms",
      "4.25 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1700 bits / (200 * 1000 bps) = 8.50 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.110.202.34 and subnet mask /26. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.110.203.0",
      "10.110.202.64",
      "10.110.202.63",
      "10.110.202.0"
    ],
    "answer": 2,
    "explanation": "For host 10.110.202.34/26, the subnet mask bits reveal the network ID is 10.110.202.0 and broadcast address is 10.110.202.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.200.155.216 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.200.155.224",
      "10.200.156.208",
      "10.200.155.208",
      "10.200.155.192"
    ],
    "answer": 2,
    "explanation": "For host 10.200.155.216/28, the subnet mask bits reveal the network ID is 10.200.155.208 and broadcast address is 10.200.155.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 390 KB over a point-to-point network link with transmission bandwidth rate of 92 Mbps. What is the theoretical transmission delay?",
    "options": [
      "52.090 ms",
      "8.682 ms",
      "34.727 ms",
      "47.227 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (390 * 1024 * 8) / (92 * 10^6) = 34.727 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3000 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "15.00 ms",
      "150.00 ms",
      "19.50 ms",
      "7.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3000 bits / (200 * 1000 bps) = 15.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2710 KB over a point-to-point network link with transmission bandwidth rate of 41 Mbps. What is the theoretical transmission delay?",
    "options": [
      "135.368 ms",
      "541.471 ms",
      "553.971 ms",
      "812.207 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2710 * 1024 * 8) / (41 * 10^6) = 541.471 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5300 bits onto a communication link with bandwidth speed of 20 kbps. What is the transmission delay?",
    "options": [
      "269.50 ms",
      "2650.00 ms",
      "132.50 ms",
      "265.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 5300 bits / (20 * 1000 bps) = 265.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.25.86.241 and subnet mask /23. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.25.86.0",
      "172.25.87.255",
      "172.25.86.0",
      "172.25.87.0"
    ],
    "answer": 1,
    "explanation": "For host 172.25.86.241/23, the subnet mask bits reveal the network ID is 172.25.86.0 and broadcast address is 172.25.87.255."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.31.111.72 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.31.111.72",
      "172.31.111.68",
      "172.31.112.72",
      "172.31.111.76"
    ],
    "answer": 0,
    "explanation": "For host 172.31.111.72/30, the subnet mask bits reveal the network ID is 172.31.111.72 and broadcast address is 172.31.111.75."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3570 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "5861.588 ms",
      "8773.632 ms",
      "5849.088 ms",
      "1462.272 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (3570 * 1024 * 8) / (5 * 10^6) = 5849.088 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3900 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "390.00 ms",
      "3900.00 ms",
      "394.50 ms",
      "195.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3900 bits / (10 * 1000 bps) = 390.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.141.159.83 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.141.160.64",
      "10.141.159.95",
      "10.141.159.96",
      "10.141.159.32"
    ],
    "answer": 1,
    "explanation": "For host 10.141.159.83/27, the subnet mask bits reveal the network ID is 10.141.159.64 and broadcast address is 10.141.159.95."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.240.57 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.241.48",
      "192.168.240.32",
      "192.168.240.63",
      "192.168.240.64"
    ],
    "answer": 2,
    "explanation": "For host 192.168.240.57/28, the subnet mask bits reveal the network ID is 192.168.240.48 and broadcast address is 192.168.240.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.21.126 and subnet mask /22. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.23.255",
      "192.168.21.0",
      "192.168.21.0",
      "192.168.22.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.21.126/22, the subnet mask bits reveal the network ID is 192.168.20.0 and broadcast address is 192.168.23.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3350 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "8.38 ms",
      "21.25 ms",
      "167.50 ms",
      "16.75 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3350 bits / (200 * 1000 bps) = 16.75 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.30.224.83 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.30.224.80",
      "172.30.224.88",
      "172.30.225.80",
      "172.30.224.72"
    ],
    "answer": 0,
    "explanation": "For host 172.30.224.83/29, the subnet mask bits reveal the network ID is 172.30.224.80 and broadcast address is 172.30.224.87."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2770 KB over a point-to-point network link with transmission bandwidth rate of 5 Mbps. What is the theoretical transmission delay?",
    "options": [
      "4550.868 ms",
      "4538.368 ms",
      "6807.552 ms",
      "1134.592 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (2770 * 1024 * 8) / (5 * 10^6) = 4538.368 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5500 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "27.50 ms",
      "13.75 ms",
      "32.00 ms",
      "275.00 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5500 bits / (200 * 1000 bps) = 27.50 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2900 KB over a point-to-point network link with transmission bandwidth rate of 26 Mbps. What is the theoretical transmission delay?",
    "options": [
      "228.431 ms",
      "1370.585 ms",
      "913.723 ms",
      "926.223 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2900 * 1024 * 8) / (26 * 10^6) = 913.723 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.20.244.225 and subnet mask /30. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "172.20.245.224",
      "172.20.244.227",
      "172.20.244.228",
      "172.20.244.220"
    ],
    "answer": 1,
    "explanation": "For host 172.20.244.225/30, the subnet mask bits reveal the network ID is 172.20.244.224 and broadcast address is 172.20.244.227."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 290 KB over a point-to-point network link with transmission bandwidth rate of 95 Mbps. What is the theoretical transmission delay?",
    "options": [
      "25.007 ms",
      "6.252 ms",
      "37.507 ms",
      "37.511 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (290 * 1024 * 8) / (95 * 10^6) = 25.007 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.137.83.205 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "10.137.84.128",
      "10.137.83.0",
      "10.137.83.0",
      "10.137.83.128"
    ],
    "answer": 3,
    "explanation": "For host 10.137.83.205/25, the subnet mask bits reveal the network ID is 10.137.83.128 and broadcast address is 10.137.83.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5600 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "15.70 ms",
      "5.60 ms",
      "11.20 ms",
      "112.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 5600 bits / (500 * 1000 bps) = 11.20 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.18.98.58 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.18.99.0",
      "172.18.98.128",
      "255.255.255.255",
      "172.18.98.0"
    ],
    "answer": 3,
    "explanation": "For host 172.18.98.58/25, the subnet mask bits reveal the network ID is 172.18.98.0 and broadcast address is 172.18.98.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2540 KB over a point-to-point network link with transmission bandwidth rate of 70 Mbps. What is the theoretical transmission delay?",
    "options": [
      "74.313 ms",
      "445.879 ms",
      "297.253 ms",
      "309.753 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2540 * 1024 * 8) / (70 * 10^6) = 297.253 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.205.157 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.205.156",
      "192.168.205.160",
      "192.168.205.152",
      "192.168.206.156"
    ],
    "answer": 0,
    "explanation": "For host 192.168.205.157/30, the subnet mask bits reveal the network ID is 192.168.205.156 and broadcast address is 192.168.205.159."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.21.205.191 and subnet mask /26. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.21.206.128",
      "172.21.205.192",
      "172.21.205.128",
      "172.21.205.64"
    ],
    "answer": 2,
    "explanation": "For host 172.21.205.191/26, the subnet mask bits reveal the network ID is 172.21.205.128 and broadcast address is 172.21.205.191."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1270 KB over a point-to-point network link with transmission bandwidth rate of 66 Mbps. What is the theoretical transmission delay?",
    "options": [
      "39.408 ms",
      "236.451 ms",
      "157.634 ms",
      "170.134 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (1270 * 1024 * 8) / (66 * 10^6) = 157.634 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1300 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "30.50 ms",
      "13.00 ms",
      "26.00 ms",
      "260.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1300 bits / (50 * 1000 bps) = 26.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.36.148.47 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.36.148.47",
      "10.36.148.48",
      "10.36.149.32",
      "10.36.148.16"
    ],
    "answer": 0,
    "explanation": "For host 10.36.148.47/28, the subnet mask bits reveal the network ID is 10.36.148.32 and broadcast address is 10.36.148.47."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 2800 bits onto a communication link with bandwidth speed of 50 kbps. What is the transmission delay?",
    "options": [
      "560.00 ms",
      "60.50 ms",
      "56.00 ms",
      "28.00 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 2800 bits / (50 * 1000 bps) = 56.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4430 KB over a point-to-point network link with transmission bandwidth rate of 12 Mbps. What is the theoretical transmission delay?",
    "options": [
      "756.053 ms",
      "4536.320 ms",
      "3036.713 ms",
      "3024.213 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (4430 * 1024 * 8) / (12 * 10^6) = 3024.213 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.172.93.15 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.172.93.0",
      "10.172.93.31",
      "10.172.94.0",
      "10.172.93.32"
    ],
    "answer": 1,
    "explanation": "For host 10.172.93.15/27, the subnet mask bits reveal the network ID is 10.172.93.0 and broadcast address is 10.172.93.31."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.176.117 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.176.96",
      "192.168.176.128",
      "192.168.177.112",
      "192.168.176.112"
    ],
    "answer": 3,
    "explanation": "For host 192.168.176.117/28, the subnet mask bits reveal the network ID is 192.168.176.112 and broadcast address is 192.168.176.127."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 950 KB over a point-to-point network link with transmission bandwidth rate of 2 Mbps. What is the theoretical transmission delay?",
    "options": [
      "972.800 ms",
      "5836.800 ms",
      "3903.700 ms",
      "3891.200 ms"
    ],
    "answer": 3,
    "explanation": "Delay = File size in bits / Link rate = (950 * 1024 * 8) / (2 * 10^6) = 3891.200 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4240 KB over a point-to-point network link with transmission bandwidth rate of 77 Mbps. What is the theoretical transmission delay?",
    "options": [
      "676.638 ms",
      "451.092 ms",
      "112.773 ms",
      "463.592 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4240 * 1024 * 8) / (77 * 10^6) = 451.092 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3550 bits onto a communication link with bandwidth speed of 500 kbps. What is the transmission delay?",
    "options": [
      "11.60 ms",
      "7.10 ms",
      "71.00 ms",
      "3.55 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 3550 bits / (500 * 1000 bps) = 7.10 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4810 KB over a point-to-point network link with transmission bandwidth rate of 96 Mbps. What is the theoretical transmission delay?",
    "options": [
      "410.453 ms",
      "102.613 ms",
      "422.953 ms",
      "615.680 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (4810 * 1024 * 8) / (96 * 10^6) = 410.453 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4240 KB over a point-to-point network link with transmission bandwidth rate of 93 Mbps. What is the theoretical transmission delay?",
    "options": [
      "385.985 ms",
      "93.371 ms",
      "373.485 ms",
      "560.227 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (4240 * 1024 * 8) / (93 * 10^6) = 373.485 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3600 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "18.00 ms",
      "180.00 ms",
      "9.00 ms",
      "22.50 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 3600 bits / (200 * 1000 bps) = 18.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 870 KB over a point-to-point network link with transmission bandwidth rate of 53 Mbps. What is the theoretical transmission delay?",
    "options": [
      "146.972 ms",
      "134.472 ms",
      "201.709 ms",
      "33.618 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (870 * 1024 * 8) / (53 * 10^6) = 134.472 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 360 KB over a point-to-point network link with transmission bandwidth rate of 52 Mbps. What is the theoretical transmission delay?",
    "options": [
      "14.178 ms",
      "56.714 ms",
      "69.214 ms",
      "85.071 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (360 * 1024 * 8) / (52 * 10^6) = 56.714 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3200 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "160.00 ms",
      "3200.00 ms",
      "320.00 ms",
      "324.50 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 3200 bits / (10 * 1000 bps) = 320.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5500 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "550.00 ms",
      "55.00 ms",
      "59.50 ms",
      "27.50 ms"
    ],
    "answer": 1,
    "explanation": "Delay = Size / Rate = 5500 bits / (100 * 1000 bps) = 55.00 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.16.217 and subnet mask /28. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.17.208",
      "172.24.16.208",
      "172.24.16.224",
      "172.24.16.192"
    ],
    "answer": 1,
    "explanation": "For host 172.24.16.217/28, the subnet mask bits reveal the network ID is 172.24.16.208 and broadcast address is 172.24.16.223."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2650 KB over a point-to-point network link with transmission bandwidth rate of 40 Mbps. What is the theoretical transmission delay?",
    "options": [
      "814.080 ms",
      "555.220 ms",
      "542.720 ms",
      "135.680 ms"
    ],
    "answer": 2,
    "explanation": "Delay = File size in bits / Link rate = (2650 * 1024 * 8) / (40 * 10^6) = 542.720 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.242.62 and subnet mask /30. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.242.60",
      "192.168.242.64",
      "192.168.243.60",
      "192.168.242.56"
    ],
    "answer": 0,
    "explanation": "For host 192.168.242.62/30, the subnet mask bits reveal the network ID is 192.168.242.60 and broadcast address is 192.168.242.63."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.25.68 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.25.0",
      "255.255.255.255",
      "192.168.25.128",
      "192.168.26.0"
    ],
    "answer": 0,
    "explanation": "For host 192.168.25.68/25, the subnet mask bits reveal the network ID is 192.168.25.0 and broadcast address is 192.168.25.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.187.125 and subnet mask /28. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "192.168.187.96",
      "192.168.187.128",
      "192.168.188.112",
      "192.168.187.127"
    ],
    "answer": 3,
    "explanation": "For host 192.168.187.125/28, the subnet mask bits reveal the network ID is 192.168.187.112 and broadcast address is 192.168.187.127."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 172.24.102.211 and subnet mask /25. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "172.24.102.128",
      "172.24.102.0",
      "172.24.102.0",
      "172.24.103.128"
    ],
    "answer": 0,
    "explanation": "For host 172.24.102.211/25, the subnet mask bits reveal the network ID is 172.24.102.128 and broadcast address is 172.24.102.255."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 3800 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "380.00 ms",
      "19.00 ms",
      "42.50 ms",
      "38.00 ms"
    ],
    "answer": 3,
    "explanation": "Delay = Size / Rate = 3800 bits / (100 * 1000 bps) = 38.00 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 3210 KB over a point-to-point network link with transmission bandwidth rate of 83 Mbps. What is the theoretical transmission delay?",
    "options": [
      "316.823 ms",
      "475.235 ms",
      "79.206 ms",
      "329.323 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (3210 * 1024 * 8) / (83 * 10^6) = 316.823 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 192.168.27.61 and subnet mask /29. What is the correct Network ID (Subnet Address) of this subnet?",
    "options": [
      "192.168.27.64",
      "192.168.27.56",
      "192.168.28.56",
      "192.168.27.48"
    ],
    "answer": 1,
    "explanation": "For host 192.168.27.61/29, the subnet mask bits reveal the network ID is 192.168.27.56 and broadcast address is 192.168.27.63."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 5250 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "26.25 ms",
      "262.50 ms",
      "30.75 ms",
      "13.13 ms"
    ],
    "answer": 0,
    "explanation": "Delay = Size / Rate = 5250 bits / (200 * 1000 bps) = 26.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 1650 KB over a point-to-point network link with transmission bandwidth rate of 91 Mbps. What is the theoretical transmission delay?",
    "options": [
      "161.036 ms",
      "148.536 ms",
      "37.134 ms",
      "222.804 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (1650 * 1024 * 8) / (91 * 10^6) = 148.536 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 2490 KB over a point-to-point network link with transmission bandwidth rate of 23 Mbps. What is the theoretical transmission delay?",
    "options": [
      "886.873 ms",
      "1330.310 ms",
      "221.718 ms",
      "899.373 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (2490 * 1024 * 8) / (23 * 10^6) = 886.873 ms."
  },
  {
    "subject": "CN",
    "topic": "IP Subnetting",
    "difficulty": "Hard",
    "question": "An interface is configured with host IP address 10.80.196.74 and subnet mask /27. What is the correct Directed Broadcast Address of this subnet?",
    "options": [
      "10.80.196.95",
      "10.80.197.64",
      "10.80.196.32",
      "10.80.196.96"
    ],
    "answer": 0,
    "explanation": "For host 10.80.196.74/27, the subnet mask bits reveal the network ID is 10.80.196.64 and broadcast address is 10.80.196.95."
  },
  {
    "subject": "CN",
    "topic": "Transmission Delays",
    "difficulty": "Medium",
    "question": "A router transmits a packet of size 1650 bits onto a communication link with bandwidth speed of 200 kbps. What is the transmission delay?",
    "options": [
      "4.13 ms",
      "82.50 ms",
      "8.25 ms",
      "12.75 ms"
    ],
    "answer": 2,
    "explanation": "Delay = Size / Rate = 1650 bits / (200 * 1000 bps) = 8.25 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 480 KB over a point-to-point network link with transmission bandwidth rate of 19 Mbps. What is the theoretical transmission delay?",
    "options": [
      "206.956 ms",
      "51.739 ms",
      "310.434 ms",
      "219.456 ms"
    ],
    "answer": 0,
    "explanation": "Delay = File size in bits / Link rate = (480 * 1024 * 8) / (19 * 10^6) = 206.956 ms."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A client sends a file of size 4650 KB over a point-to-point network link with transmission bandwidth rate of 8 Mbps. What is the theoretical transmission delay?",
    "options": [
      "1190.400 ms",
      "4761.600 ms",
      "7142.400 ms",
      "4774.100 ms"
    ],
    "answer": 1,
    "explanation": "Delay = File size in bits / Link rate = (4650 * 1024 * 8) / (8 * 10^6) = 4761.600 ms."
  }
];
