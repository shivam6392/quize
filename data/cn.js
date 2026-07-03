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
      "21",
      "443",
      "22"
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
      "443",
      "80",
      "8080",
      "25"
    ],
    "answer": 0,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses?",
    "options": [
      "DNS in typical implementations",
      "ARP (Address Resolution Protocol)",
      "DHCP in typical implementations",
      "NAT in typical implementations"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for?",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Connection Protocol"
    ],
    "answer": 0,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model?",
    "options": [
      "Repeater",
      "Router",
      "Switch",
      "Hub"
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
      "Physical Layer (widely accepted)",
      "Transport Layer in most cases",
      "Network Layer (typical scenario)"
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
      "Best-effort delivery (default behavior)",
      "Lightweight with no handshake",
      "Connection-oriented and reliable",
      "Connectionless and unreliable"
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
      "Heavyweight as per specification",
      "Connection-oriented (commonly used)",
      "Connectionless and unreliable",
      "Guaranteed delivery in most cases"
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
      "ARP in most cases",
      "FTP (widely accepted)",
      "DNS (Domain Name System)",
      "DHCP (typical scenario)"
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
      "Encrypting network packets as per specification",
      "Connecting different protocols (general case)",
      "Increasing network bandwidth (general case)"
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
      "255.255.255.0",
      "255.255.255.255",
      "255.255.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet?",
    "options": [
      "HTTP (typical scenario)",
      "SNMP (typical scenario)",
      "SMTP in typical implementations",
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
      "Retrieve IP addresses",
      "Transfer files",
      "Retrieve emails"
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
      "Encrypts network traffic based on convention",
      "Filters spam emails in typical implementations",
      "Translates MAC to IP (standard definition)",
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
      "Three-way handshake",
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
      "Checksums in typical implementations",
      "Sliding window in typical implementations"
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
      "Parity bit",
      "CRC only",
      "Hamming code",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI?",
    "options": [
      "Application Layer in standard usage",
      "Transport Layer by design",
      "Presentation Layer (Layer 6)",
      "Session Layer in standard usage"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported?",
    "options": [
      "28 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "5000.0 milliseconds",
      "500.0 milliseconds",
      "250.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported?",
    "options": [
      "252 assignable hosts",
      "126 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "700.0 milliseconds",
      "70.0 milliseconds",
      "35.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "6000.0 milliseconds",
      "600.0 milliseconds",
      "0.5 milliseconds",
      "300.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (10 * 1000 bps) = 600 ms = 600.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol?",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access?",
    "options": [
      "Default Port 53",
      "Default Port 443",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol?",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility?",
    "options": [
      "Default Port 22",
      "Default Port 143",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "0.5 milliseconds",
      "40.0 milliseconds",
      "400.0 milliseconds",
      "20.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (100 * 1000 bps) = 40 ms = 40.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "0.5 milliseconds",
      "400.0 milliseconds",
      "200.0 milliseconds",
      "4000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported?",
    "options": [
      "256 assignable hosts",
      "258 assignable hosts",
      "254 assignable hosts",
      "508 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported?",
    "options": [
      "4 assignable hosts",
      "6 assignable hosts",
      "4 assignable hosts",
      "2 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "0.5 milliseconds",
      "350.0 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay?",
    "options": [
      "400.0 milliseconds",
      "800.0 milliseconds",
      "8000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.248 (corresponding to CIDR notation /29). How many usable host IP addresses are supported?",
    "options": [
      "10 assignable hosts",
      "8 assignable hosts",
      "6 assignable hosts",
      "12 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /29, standard calculation is 2^3 - 2 = 6 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "600.0 milliseconds",
      "0.5 milliseconds",
      "30.0 milliseconds",
      "60.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.224 (corresponding to CIDR notation /27). How many usable host IP addresses are supported?",
    "options": [
      "30 assignable hosts",
      "32 assignable hosts",
      "34 assignable hosts",
      "60 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /27, standard calculation is 2^5 - 2 = 30 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay?",
    "options": [
      "4.0 milliseconds",
      "0.5 milliseconds",
      "80.0 milliseconds",
      "8.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (1000 * 1000 bps) = 8 ms = 8.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay?",
    "options": [
      "2.5 milliseconds",
      "50.0 milliseconds",
      "5.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay?",
    "options": [
      "60.0 milliseconds",
      "0.5 milliseconds",
      "6.0 milliseconds",
      "3.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (1000 * 1000 bps) = 6 ms = 6.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTP web transfer server default?",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTP web transfer server default to Default Port 80."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "80.0 milliseconds",
      "40.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay?",
    "options": [
      "4.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds",
      "2.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login?",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay?",
    "options": [
      "0.5 milliseconds",
      "25.0 milliseconds",
      "500.0 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay?",
    "options": [
      "7.0 milliseconds",
      "70.0 milliseconds",
      "3.5 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (1000 * 1000 bps) = 7 ms = 7.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported?",
    "options": [
      "66 assignable hosts",
      "64 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1)",
    "options": [
      "18 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2)",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 53",
      "Default Port 22"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3)",
    "options": [
      "Connection-oriented in practice",
      "Connectionless and unreliable",
      "Heavyweight (standard definition)",
      "Guaranteed delivery (commonly used)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 4)",
    "options": [
      "Default Port 80",
      "Default Port 53",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer based on convention",
      "Session Layer (commonly used)",
      "Application Layer (general case)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 6)",
    "options": [
      "Sliding window in typical implementations",
      "Checksums in typical implementations",
      "MAC addresses in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start"
    ],
    "answer": 3,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 7)",
    "options": [
      "16 assignable hosts",
      "14 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 8)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Translates MAC to IP (default behavior)",
      "Filters spam emails as per specification",
      "Encrypts network traffic under normal conditions"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9)",
    "options": [
      "0.5 milliseconds",
      "40.0 milliseconds",
      "800.0 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10)",
    "options": [
      "0.5 milliseconds",
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 11)",
    "options": [
      "4.0 milliseconds",
      "2.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12)",
    "options": [
      "28 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 13)",
    "options": [
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application"
    ],
    "answer": 3,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14)",
    "options": [
      "Heavyweight (commonly used)",
      "Connectionless and unreliable",
      "Connection-oriented (commonly used)",
      "Guaranteed delivery by design"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15)",
    "options": [
      "700.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16)",
    "options": [
      "Retrieve IP addresses",
      "Send emails",
      "Transfer files",
      "Retrieve emails"
    ],
    "answer": 1,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 17)",
    "options": [
      "70.0 milliseconds",
      "7.0 milliseconds",
      "0.5 milliseconds",
      "3.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (1000 * 1000 bps) = 7 ms = 7.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 18)",
    "options": [
      "IPv4",
      "Subnet Mask",
      "IPv6",
      "MAC Address"
    ],
    "answer": 2,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19)",
    "options": [
      "4000.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds",
      "200.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 4) (Set 20)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Physical Layer in most cases",
      "Network Layer (commonly used)",
      "Transport Layer (general case)"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22)",
    "options": [
      "62 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 23)",
    "options": [
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24)",
    "options": [
      "40.0 milliseconds",
      "2.0 milliseconds",
      "0.5 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 25)",
    "options": [
      "Encrypts network traffic (primary approach)",
      "Filters spam emails in typical implementations",
      "Translates MAC to IP under normal conditions",
      "Translates private IP addresses to a public IP"
    ],
    "answer": 3,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 26)",
    "options": [
      "18 assignable hosts",
      "28 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 23) (Set 27)",
    "options": [
      "7000.0 milliseconds",
      "700.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 28)",
    "options": [
      "5.0 milliseconds",
      "2.5 milliseconds",
      "0.5 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29)",
    "options": [
      "IPv4",
      "IPv6",
      "Subnet Mask",
      "MAC Address"
    ],
    "answer": 1,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30)",
    "options": [
      "256 assignable hosts",
      "254 assignable hosts",
      "508 assignable hosts",
      "258 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 31)",
    "options": [
      "IPv6",
      "IPv4",
      "Subnet Mask",
      "MAC Address"
    ],
    "answer": 0,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 32)",
    "options": [
      "Physical Layer in practice",
      "Data Link Layer (Layer 2)",
      "Transport Layer in most cases",
      "Network Layer (commonly used)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 33)",
    "options": [
      "Retrieve emails",
      "Transfer files",
      "Send emails",
      "Retrieve IP addresses"
    ],
    "answer": 2,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 34)",
    "options": [
      "5000.0 milliseconds",
      "500.0 milliseconds",
      "250.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 35)",
    "options": [
      "Retrieve IP addresses",
      "Retrieve emails",
      "Send emails",
      "Transfer files"
    ],
    "answer": 2,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 36)",
    "options": [
      "Default Port 443",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 37)",
    "options": [
      "7000.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 38)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39)",
    "options": [
      "62 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 6) (Set 40)",
    "options": [
      "MAC addresses in typical implementations",
      "Checksums in typical implementations",
      "Sliding window in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start"
    ],
    "answer": 3,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 41)",
    "options": [
      "0.5 milliseconds",
      "350.0 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42)",
    "options": [
      "Three-way handshake",
      "Congestion window sizing",
      "Timeout retransmission only",
      "Sliding window mechanism"
    ],
    "answer": 3,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 43)",
    "options": [
      "DHCP (typical scenario)",
      "FTP in most cases",
      "ARP in standard usage",
      "DNS (Domain Name System)"
    ],
    "answer": 3,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 11) (Set 44)",
    "options": [
      "2.0 milliseconds",
      "4.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 45)",
    "options": [
      "Transfer files",
      "Send emails",
      "Retrieve emails",
      "Retrieve IP addresses"
    ],
    "answer": 1,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 46)",
    "options": [
      "CRC only",
      "Parity bit",
      "Hamming code",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47)",
    "options": [
      "Default Port 22",
      "Default Port 53",
      "Default Port 443",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 48)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented in practice",
      "Heavyweight (general case)",
      "Guaranteed delivery in practice"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50)",
    "options": [
      "66 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 51)",
    "options": [
      "124 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 17) (Set 52)",
    "options": [
      "3.5 milliseconds",
      "70.0 milliseconds",
      "7.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (1000 * 1000 bps) = 7 ms = 7.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 53)",
    "options": [
      "0.5 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54)",
    "options": [
      "66 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 55)",
    "options": [
      "Three-way handshake",
      "Sliding window mechanism",
      "Congestion window sizing",
      "Timeout retransmission only"
    ],
    "answer": 1,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 56)",
    "options": [
      "Default Port 22",
      "Default Port 53",
      "Default Port 25",
      "Default Port 143"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57)",
    "options": [
      "700.0 milliseconds",
      "350.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58)",
    "options": [
      "Connection-oriented (commonly used)",
      "Guaranteed delivery (general case)",
      "Heavyweight (standard definition)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 41) (Set 59)",
    "options": [
      "7000.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 60)",
    "options": [
      "66 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61)",
    "options": [
      "350.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTP web transfer server default? (Set 62)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link HTTP web transfer server default to Default Port 80."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 56) (Set 63)",
    "options": [
      "Default Port 53",
      "Default Port 143",
      "Default Port 22",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 64)",
    "options": [
      "DHCP (commonly used)",
      "ARP in most cases",
      "FTP (commonly used)",
      "DNS (Domain Name System)"
    ],
    "answer": 3,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 65)",
    "options": [
      "Connectionless and unreliable",
      "Guaranteed delivery in most cases",
      "Connection-oriented in most cases",
      "Heavyweight in practice"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 37) (Set 66)",
    "options": [
      "7000.0 milliseconds",
      "700.0 milliseconds",
      "350.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "DHCP under normal conditions",
      "NAT under normal conditions",
      "DNS in typical implementations"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.224 (corresponding to CIDR notation /27). How many usable host IP addresses are supported? (Set 68)",
    "options": [
      "30 assignable hosts",
      "32 assignable hosts",
      "34 assignable hosts",
      "60 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /27, standard calculation is 2^5 - 2 = 30 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 69)",
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
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 70)",
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
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71)",
    "options": [
      "Connection-oriented (general case)",
      "Heavyweight in most cases",
      "Connectionless and unreliable",
      "Guaranteed delivery in most cases"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 72)",
    "options": [
      "NAT under normal conditions",
      "DNS in typical implementations",
      "ARP (Address Resolution Protocol)",
      "DHCP in typical implementations"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 73)",
    "options": [
      "200.0 milliseconds",
      "4000.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74)",
    "options": [
      "0.5 milliseconds",
      "800.0 milliseconds",
      "8000.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75)",
    "options": [
      "Default Port 25",
      "Default Port 22",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 76)",
    "options": [
      "Connection-oriented (commonly used)",
      "Heavyweight in practice",
      "Guaranteed delivery (general case)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 77)",
    "options": [
      "350.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 28) (Set 78)",
    "options": [
      "0.5 milliseconds",
      "5.0 milliseconds",
      "50.0 milliseconds",
      "2.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 79)",
    "options": [
      "66 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 80)",
    "options": [
      "Default Port 22",
      "Default Port 53",
      "Default Port 443",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 48) (Set 81)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 82)",
    "options": [
      "Hamming code",
      "Checksum",
      "Parity bit",
      "CRC only"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer (commonly used)",
      "Session Layer (widely accepted)",
      "Transport Layer (primary approach)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84)",
    "options": [
      "Hamming code",
      "Checksum",
      "Parity bit",
      "CRC only"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 85)",
    "options": [
      "Guaranteed delivery by design",
      "Heavyweight (default behavior)",
      "Connection-oriented by design",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86)",
    "options": [
      "Transfer files",
      "Retrieve IP addresses",
      "Send emails",
      "Retrieve emails"
    ],
    "answer": 2,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 11) (Set 44) (Set 87)",
    "options": [
      "4.0 milliseconds",
      "2.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 88)",
    "options": [
      "Subnet Mask",
      "MAC Address",
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
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 89)",
    "options": [
      "Connection-oriented in most cases",
      "Heavyweight under normal conditions",
      "Connectionless and unreliable",
      "Guaranteed delivery in most cases"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90)",
    "options": [
      "0.5 milliseconds",
      "8000.0 milliseconds",
      "400.0 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91)",
    "options": [
      "2.0 milliseconds",
      "4.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 92)",
    "options": [
      "Default Port 22",
      "Default Port 80",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93)",
    "options": [
      "Guaranteed delivery in practice",
      "Connection-oriented in practice",
      "Connectionless and unreliable",
      "Heavyweight in most cases"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 94)",
    "options": [
      "16 assignable hosts",
      "18 assignable hosts",
      "28 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 95)",
    "options": [
      "64 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 96)",
    "options": [
      "Hamming code",
      "Parity bit",
      "Checksum",
      "CRC only"
    ],
    "answer": 2,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 46) (Set 97)",
    "options": [
      "Parity bit",
      "Hamming code",
      "Checksum",
      "CRC only"
    ],
    "answer": 2,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 98)",
    "options": [
      "Default Port 25",
      "Default Port 443",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99)",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 53",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 100)",
    "options": [
      "Transport Layer (widely accepted)",
      "Presentation Layer (Layer 6)",
      "Session Layer (default behavior)",
      "Application Layer by design"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 101)",
    "options": [
      "2 assignable hosts",
      "4 assignable hosts",
      "6 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 96) (Set 102)",
    "options": [
      "Parity bit",
      "Hamming code",
      "CRC only",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103)",
    "options": [
      "126 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 69) (Set 104)",
    "options": [
      "Three-way handshake",
      "Timeout retransmission only",
      "Sliding window mechanism",
      "Congestion window sizing"
    ],
    "answer": 2,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105)",
    "options": [
      "Connection-oriented in practice",
      "Heavyweight (typical scenario)",
      "Connectionless and unreliable",
      "Guaranteed delivery by design"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 106)",
    "options": [
      "Transport Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Network Layer (default behavior)",
      "Physical Layer by design"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "TCP is characterized as? (Set 107)",
    "options": [
      "Connectionless and unreliable",
      "Best-effort delivery in standard usage",
      "Connection-oriented and reliable",
      "Lightweight with no handshake"
    ],
    "answer": 2,
    "explanation": "TCP uses a 3-way handshake and guarantees packet ordering."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 108)",
    "options": [
      "Heavyweight in practice",
      "Connectionless and unreliable",
      "Guaranteed delivery (general case)",
      "Connection-oriented (general case)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 109)",
    "options": [
      "350.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110)",
    "options": [
      "126 assignable hosts",
      "252 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 111)",
    "options": [
      "4.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds",
      "2.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 112)",
    "options": [
      "62 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 113)",
    "options": [
      "128 assignable hosts",
      "252 assignable hosts",
      "126 assignable hosts",
      "130 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 114)",
    "options": [
      "Session Layer (standard definition)",
      "Presentation Layer (Layer 6)",
      "Transport Layer (widely accepted)",
      "Application Layer in standard usage"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 80) (Set 115)",
    "options": [
      "Default Port 25",
      "Default Port 22",
      "Default Port 53",
      "Default Port 443"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 116)",
    "options": [
      "Guaranteed delivery in most cases",
      "Connectionless and unreliable",
      "Heavyweight in practice",
      "Connection-oriented in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 94) (Set 117)",
    "options": [
      "18 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118)",
    "options": [
      "0.5 milliseconds",
      "50.0 milliseconds",
      "25.0 milliseconds",
      "500.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 119)",
    "options": [
      "Connection-oriented (general case)",
      "Heavyweight (typical scenario)",
      "Connectionless and unreliable",
      "Guaranteed delivery by design"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 120)",
    "options": [
      "Physical Layer (general case)",
      "Transport Layer in most cases",
      "Network Layer (widely accepted)",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121)",
    "options": [
      "Default Port 53",
      "Default Port 80",
      "Default Port 22",
      "Default Port 25"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122)",
    "options": [
      "2.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 123)",
    "options": [
      "800.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 95) (Set 124)",
    "options": [
      "66 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 125)",
    "options": [
      "Session Layer (widely accepted)",
      "Application Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Transport Layer (typical scenario)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 126)",
    "options": [
      "66 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 38) (Set 127)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 128)",
    "options": [
      "Heavyweight (default behavior)",
      "Guaranteed delivery (commonly used)",
      "Connection-oriented in most cases",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 129)",
    "options": [
      "62 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61) (Set 130)",
    "options": [
      "350.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 131)",
    "options": [
      "40.0 milliseconds",
      "2.0 milliseconds",
      "0.5 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 132)",
    "options": [
      "Guaranteed delivery by design",
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
    "question": "DHCP stands for? (Set 133)",
    "options": [
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol",
      "Direct Host Configuration Port"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 134)",
    "options": [
      "Physical Layer by design",
      "Transport Layer in practice",
      "Data Link Layer (Layer 2)",
      "Network Layer (primary approach)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 135)",
    "options": [
      "Application Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Transport Layer by design",
      "Session Layer (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 136)",
    "options": [
      "Connection-oriented in practice",
      "Guaranteed delivery (commonly used)",
      "Heavyweight based on convention",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 137)",
    "options": [
      "14 assignable hosts",
      "16 assignable hosts",
      "18 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138)",
    "options": [
      "Direct Host Configuration Port",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol",
      "Dynamic Host Connection Protocol"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 139)",
    "options": [
      "40.0 milliseconds",
      "80.0 milliseconds",
      "0.5 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 140)",
    "options": [
      "Default Port 22",
      "Default Port 80",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 92) (Set 141)",
    "options": [
      "Default Port 53",
      "Default Port 22",
      "Default Port 25",
      "Default Port 80"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 142)",
    "options": [
      "MAC Address",
      "IPv4",
      "IPv6",
      "Subnet Mask"
    ],
    "answer": 2,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 143)",
    "options": [
      "64 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 23) (Set 27) (Set 144)",
    "options": [
      "0.5 milliseconds",
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 145)",
    "options": [
      "Checksums in typical implementations",
      "Sliding window in typical implementations",
      "MAC addresses in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start"
    ],
    "answer": 3,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 100) (Set 146)",
    "options": [
      "Session Layer (general case)",
      "Transport Layer (typical scenario)",
      "Presentation Layer (Layer 6)",
      "Application Layer in most cases"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 80) (Set 115) (Set 147)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 443",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 108) (Set 148)",
    "options": [
      "Heavyweight in most cases",
      "Guaranteed delivery in most cases",
      "Connection-oriented (general case)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61) (Set 130) (Set 149)",
    "options": [
      "0.5 milliseconds",
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 143",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 151)",
    "options": [
      "40.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 152)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153)",
    "options": [
      "6 assignable hosts",
      "4 assignable hosts",
      "2 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 154)",
    "options": [
      "50.0 milliseconds",
      "500.0 milliseconds",
      "0.5 milliseconds",
      "25.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 77) (Set 155)",
    "options": [
      "0.5 milliseconds",
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 156)",
    "options": [
      "256 assignable hosts",
      "258 assignable hosts",
      "508 assignable hosts",
      "254 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 157)",
    "options": [
      "Connectionless and unreliable",
      "Guaranteed delivery (general case)",
      "Heavyweight in most cases",
      "Connection-oriented in practice"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 158)",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 53",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 76) (Set 159)",
    "options": [
      "Connection-oriented (general case)",
      "Guaranteed delivery (general case)",
      "Heavyweight in practice",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 160)",
    "options": [
      "4.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds",
      "2.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.224 (corresponding to CIDR notation /27). How many usable host IP addresses are supported? (Set 161)",
    "options": [
      "32 assignable hosts",
      "60 assignable hosts",
      "30 assignable hosts",
      "34 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /27, standard calculation is 2^5 - 2 = 30 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162)",
    "options": [
      "4 assignable hosts",
      "6 assignable hosts",
      "4 assignable hosts",
      "2 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 92) (Set 141) (Set 163)",
    "options": [
      "Default Port 80",
      "Default Port 25",
      "Default Port 53",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86) (Set 164)",
    "options": [
      "Retrieve IP addresses",
      "Retrieve emails",
      "Send emails",
      "Transfer files"
    ],
    "answer": 2,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 4) (Set 20) (Set 165)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166)",
    "options": [
      "Heavyweight (default behavior)",
      "Guaranteed delivery in most cases",
      "Connection-oriented in practice",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 167)",
    "options": [
      "124 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 168)",
    "options": [
      "Default Port 443",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 169)",
    "options": [
      "HTTP in standard usage",
      "SNMP in standard usage",
      "FTP (File Transfer Protocol)",
      "SMTP as per specification"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 109) (Set 170)",
    "options": [
      "7000.0 milliseconds",
      "350.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 69) (Set 171)",
    "options": [
      "Three-way handshake",
      "Congestion window sizing",
      "Timeout retransmission only",
      "Sliding window mechanism"
    ],
    "answer": 3,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Physical Layer in practice",
      "Transport Layer in practice",
      "Network Layer in most cases"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 4) (Set 173)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61) (Set 174)",
    "options": [
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61) (Set 130) (Set 149) (Set 175)",
    "options": [
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 119) (Set 176)",
    "options": [
      "Heavyweight under normal conditions",
      "Connection-oriented (commonly used)",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 177)",
    "options": [
      "80",
      "21",
      "443",
      "22"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 70) (Set 178)",
    "options": [
      "21",
      "443",
      "80",
      "22"
    ],
    "answer": 2,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 69) (Set 104) (Set 179)",
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
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 180)",
    "options": [
      "16 assignable hosts",
      "14 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 181)",
    "options": [
      "NAT in typical implementations",
      "DNS in typical implementations",
      "DHCP under normal conditions",
      "ARP (Address Resolution Protocol)"
    ],
    "answer": 3,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 182)",
    "options": [
      "250.0 milliseconds",
      "0.5 milliseconds",
      "500.0 milliseconds",
      "5000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 183)",
    "options": [
      "128 assignable hosts",
      "252 assignable hosts",
      "130 assignable hosts",
      "126 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184)",
    "options": [
      "Dynamic Host Connection Protocol",
      "Distributed Host Control Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Configuration Protocol"
    ],
    "answer": 3,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 185)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 80",
      "Default Port 53"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 186)",
    "options": [
      "28 assignable hosts",
      "14 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 187)",
    "options": [
      "258 assignable hosts",
      "256 assignable hosts",
      "254 assignable hosts",
      "508 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 101) (Set 188)",
    "options": [
      "4 assignable hosts",
      "4 assignable hosts",
      "6 assignable hosts",
      "2 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 189)",
    "options": [
      "Transport Layer by design",
      "Data Link Layer (Layer 2)",
      "Physical Layer in most cases",
      "Network Layer in standard usage"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 151) (Set 190)",
    "options": [
      "0.5 milliseconds",
      "80.0 milliseconds",
      "40.0 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 108) (Set 148) (Set 191)",
    "options": [
      "Heavyweight in standard usage",
      "Connectionless and unreliable",
      "Connection-oriented (commonly used)",
      "Guaranteed delivery in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 192)",
    "options": [
      "2 assignable hosts",
      "4 assignable hosts",
      "6 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 193)",
    "options": [
      "4000.0 milliseconds",
      "400.0 milliseconds",
      "200.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTP web transfer server default? (Set 194)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link HTTP web transfer server default to Default Port 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 46) (Set 195)",
    "options": [
      "Parity bit",
      "Hamming code",
      "Checksum",
      "CRC only"
    ],
    "answer": 2,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 186) (Set 196)",
    "options": [
      "14 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 139) (Set 197)",
    "options": [
      "40.0 milliseconds",
      "80.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 137) (Set 198)",
    "options": [
      "16 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 199)",
    "options": [
      "800.0 milliseconds",
      "8000.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200)",
    "options": [
      "126 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 201)",
    "options": [
      "18 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 202)",
    "options": [
      "Timeout retransmission only",
      "Three-way handshake",
      "Sliding window mechanism",
      "Congestion window sizing"
    ],
    "answer": 2,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 116) (Set 203)",
    "options": [
      "Guaranteed delivery in most cases",
      "Heavyweight as per specification",
      "Connection-oriented in practice",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 204)",
    "options": [
      "500.0 milliseconds",
      "0.5 milliseconds",
      "25.0 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 160) (Set 205)",
    "options": [
      "40.0 milliseconds",
      "2.0 milliseconds",
      "0.5 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 113) (Set 206)",
    "options": [
      "252 assignable hosts",
      "126 assignable hosts",
      "128 assignable hosts",
      "130 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 207)",
    "options": [
      "Default Port 22",
      "Default Port 143",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 208)",
    "options": [
      "3.0 milliseconds",
      "6.0 milliseconds",
      "60.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (1000 * 1000 bps) = 6 ms = 6.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 129) (Set 209)",
    "options": [
      "62 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 186) (Set 210)",
    "options": [
      "28 assignable hosts",
      "18 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 211)",
    "options": [
      "Connection-oriented (commonly used)",
      "Heavyweight (primary approach)",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "NAT under normal conditions",
      "DNS under normal conditions",
      "DHCP under normal conditions"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 7) (Set 213)",
    "options": [
      "14 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 214)",
    "options": [
      "60.0 milliseconds",
      "600.0 milliseconds",
      "0.5 milliseconds",
      "30.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215)",
    "options": [
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol",
      "Direct Host Configuration Port"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 216)",
    "options": [
      "64 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 46) (Set 97) (Set 217)",
    "options": [
      "Checksum",
      "CRC only",
      "Hamming code",
      "Parity bit"
    ],
    "answer": 0,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 199) (Set 218)",
    "options": [
      "0.5 milliseconds",
      "8000.0 milliseconds",
      "400.0 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 219)",
    "options": [
      "DNS in typical implementations",
      "DHCP under normal conditions",
      "ARP (Address Resolution Protocol)",
      "NAT under normal conditions"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 95) (Set 220)",
    "options": [
      "66 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTP web transfer server default? (Set 221)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTP web transfer server default to Default Port 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 222)",
    "options": [
      "Guaranteed delivery by design",
      "Heavyweight (typical scenario)",
      "Connectionless and unreliable",
      "Connection-oriented in most cases"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 96) (Set 102) (Set 223)",
    "options": [
      "Hamming code",
      "CRC only",
      "Parity bit",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 177) (Set 224)",
    "options": [
      "22",
      "21",
      "443",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225)",
    "options": [
      "0.5 milliseconds",
      "35.0 milliseconds",
      "700.0 milliseconds",
      "70.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 94) (Set 117) (Set 226)",
    "options": [
      "14 assignable hosts",
      "16 assignable hosts",
      "18 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 189) (Set 227)",
    "options": [
      "Physical Layer (widely accepted)",
      "Data Link Layer (Layer 2)",
      "Transport Layer in most cases",
      "Network Layer (primary approach)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 73) (Set 228)",
    "options": [
      "200.0 milliseconds",
      "4000.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 25) (Set 229)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Filters spam emails under normal conditions",
      "Translates MAC to IP (primary approach)",
      "Encrypts network traffic (default behavior)"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 140) (Set 230)",
    "options": [
      "Default Port 80",
      "Default Port 53",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 231)",
    "options": [
      "35.0 milliseconds",
      "0.5 milliseconds",
      "70.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 35) (Set 232)",
    "options": [
      "Retrieve emails",
      "Transfer files",
      "Send emails",
      "Retrieve IP addresses"
    ],
    "answer": 2,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 189) (Set 227) (Set 233)",
    "options": [
      "Transport Layer (general case)",
      "Physical Layer in practice",
      "Network Layer (general case)",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 56) (Set 63) (Set 234)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 143",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 235)",
    "options": [
      "443",
      "80",
      "22",
      "21"
    ],
    "answer": 1,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 55) (Set 236)",
    "options": [
      "Timeout retransmission only",
      "Congestion window sizing",
      "Three-way handshake",
      "Sliding window mechanism"
    ],
    "answer": 3,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 151) (Set 237)",
    "options": [
      "0.5 milliseconds",
      "800.0 milliseconds",
      "40.0 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 137) (Set 238)",
    "options": [
      "18 assignable hosts",
      "14 assignable hosts",
      "28 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 189) (Set 227) (Set 233) (Set 239)",
    "options": [
      "Transport Layer by design",
      "Network Layer (default behavior)",
      "Physical Layer (general case)",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 48) (Set 240)",
    "options": [
      "Default Port 80",
      "Default Port 25",
      "Default Port 53",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 70) (Set 241)",
    "options": [
      "22",
      "21",
      "80",
      "443"
    ],
    "answer": 2,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 242)",
    "options": [
      "Session Layer as per specification",
      "Presentation Layer (Layer 6)",
      "Application Layer (widely accepted)",
      "Transport Layer (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 186) (Set 243)",
    "options": [
      "14 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 48) (Set 244)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 22",
      "Default Port 80"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 207) (Set 245)",
    "options": [
      "Default Port 25",
      "Default Port 143",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 246)",
    "options": [
      "Network Layer (general case)",
      "Physical Layer (commonly used)",
      "Transport Layer in practice",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 247)",
    "options": [
      "Network Layer (primary approach)",
      "Data Link Layer (Layer 2)",
      "Transport Layer (commonly used)",
      "Physical Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 208) (Set 248)",
    "options": [
      "3.0 milliseconds",
      "6.0 milliseconds",
      "0.5 milliseconds",
      "60.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (1000 * 1000 bps) = 6 ms = 6.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 249)",
    "options": [
      "Connection-oriented in most cases",
      "Guaranteed delivery by design",
      "Connectionless and unreliable",
      "Heavyweight under normal conditions"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 28) (Set 250)",
    "options": [
      "50.0 milliseconds",
      "0.5 milliseconds",
      "5.0 milliseconds",
      "2.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 109) (Set 251)",
    "options": [
      "0.5 milliseconds",
      "350.0 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 132) (Set 252)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented by design",
      "Heavyweight (standard definition)",
      "Guaranteed delivery in most cases"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 73) (Set 253)",
    "options": [
      "400.0 milliseconds",
      "4000.0 milliseconds",
      "200.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254)",
    "options": [
      "Parity bit",
      "Hamming code",
      "CRC only",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 185) (Set 255)",
    "options": [
      "Default Port 53",
      "Default Port 22",
      "Default Port 80",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 111) (Set 256)",
    "options": [
      "0.5 milliseconds",
      "40.0 milliseconds",
      "4.0 milliseconds",
      "2.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 129) (Set 209) (Set 257)",
    "options": [
      "64 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 258)",
    "options": [
      "DNS in typical implementations",
      "ARP (Address Resolution Protocol)",
      "DHCP (standard definition)",
      "NAT in typical implementations"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 259)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 443",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 260)",
    "options": [
      "Three-way handshake",
      "Sliding window mechanism",
      "Congestion window sizing",
      "Timeout retransmission only"
    ],
    "answer": 1,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 261)",
    "options": [
      "0.5 milliseconds",
      "8.0 milliseconds",
      "4.0 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (1000 * 1000 bps) = 8 ms = 8.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 231) (Set 262)",
    "options": [
      "0.5 milliseconds",
      "700.0 milliseconds",
      "70.0 milliseconds",
      "35.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 263)",
    "options": [
      "800.0 milliseconds",
      "80.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 264)",
    "options": [
      "Connectionless and unreliable",
      "Heavyweight under normal conditions",
      "Guaranteed delivery by design",
      "Connection-oriented in most cases"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 249) (Set 265)",
    "options": [
      "Connection-oriented (general case)",
      "Heavyweight (commonly used)",
      "Connectionless and unreliable",
      "Guaranteed delivery by design"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 89) (Set 266)",
    "options": [
      "Connectionless and unreliable",
      "Heavyweight as per specification",
      "Guaranteed delivery in most cases",
      "Connection-oriented by design"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 85) (Set 267)",
    "options": [
      "Heavyweight as per specification",
      "Guaranteed delivery (general case)",
      "Connection-oriented in most cases",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 268)",
    "options": [
      "Connectionless and unreliable",
      "Guaranteed delivery by design",
      "Heavyweight (default behavior)",
      "Connection-oriented in most cases"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 96) (Set 102) (Set 269)",
    "options": [
      "Hamming code",
      "Checksum",
      "Parity bit",
      "CRC only"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 77) (Set 270)",
    "options": [
      "7000.0 milliseconds",
      "350.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212) (Set 271)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "NAT under normal conditions",
      "DHCP in typical implementations",
      "DNS in typical implementations"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 137) (Set 198) (Set 272)",
    "options": [
      "28 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 273)",
    "options": [
      "4.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds",
      "2.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 38) (Set 127) (Set 274)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 275)",
    "options": [
      "64 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 275) (Set 276)",
    "options": [
      "64 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 120) (Set 277)",
    "options": [
      "Network Layer (default behavior)",
      "Data Link Layer (Layer 2)",
      "Transport Layer (commonly used)",
      "Physical Layer (commonly used)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 154) (Set 278)",
    "options": [
      "500.0 milliseconds",
      "25.0 milliseconds",
      "50.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 160) (Set 205) (Set 279)",
    "options": [
      "4.0 milliseconds",
      "2.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 145) (Set 280)",
    "options": [
      "Congestion window (cwnd) and algorithms like Slow Start",
      "Sliding window in typical implementations",
      "MAC addresses in typical implementations",
      "Checksums in typical implementations"
    ],
    "answer": 0,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 264) (Set 281)",
    "options": [
      "Heavyweight (general case)",
      "Guaranteed delivery (commonly used)",
      "Connection-oriented in practice",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 282)",
    "options": [
      "0.5 milliseconds",
      "80.0 milliseconds",
      "8.0 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (1000 * 1000 bps) = 8 ms = 8.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 283)",
    "options": [
      "128 assignable hosts",
      "126 assignable hosts",
      "130 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212) (Set 271) (Set 284)",
    "options": [
      "NAT under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DHCP in typical implementations",
      "DNS under normal conditions"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 285)",
    "options": [
      "0.5 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 286)",
    "options": [
      "124 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 109) (Set 251) (Set 287)",
    "options": [
      "700.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 288)",
    "options": [
      "Connection-oriented in practice",
      "Guaranteed delivery by design",
      "Connectionless and unreliable",
      "Heavyweight in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 289)",
    "options": [
      "Direct Host Configuration Port",
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol"
    ],
    "answer": 2,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 290)",
    "options": [
      "64 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 211) (Set 291)",
    "options": [
      "Connection-oriented (commonly used)",
      "Guaranteed delivery (general case)",
      "Connectionless and unreliable",
      "Heavyweight (general case)"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 292)",
    "options": [
      "4000.0 milliseconds",
      "0.5 milliseconds",
      "200.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 169) (Set 293)",
    "options": [
      "SNMP (widely accepted)",
      "FTP (File Transfer Protocol)",
      "SMTP (standard definition)",
      "HTTP (widely accepted)"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 294)",
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
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110) (Set 295)",
    "options": [
      "128 assignable hosts",
      "252 assignable hosts",
      "130 assignable hosts",
      "126 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 296)",
    "options": [
      "0.5 milliseconds",
      "500.0 milliseconds",
      "5000.0 milliseconds",
      "250.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 285) (Set 297)",
    "options": [
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 219) (Set 298)",
    "options": [
      "NAT under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DNS in typical implementations",
      "DHCP (standard definition)"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 41) (Set 59) (Set 299)",
    "options": [
      "700.0 milliseconds",
      "350.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 285) (Set 297) (Set 300)",
    "options": [
      "0.5 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 82) (Set 301)",
    "options": [
      "Hamming code",
      "Checksum",
      "Parity bit",
      "CRC only"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 35) (Set 302)",
    "options": [
      "Retrieve emails",
      "Send emails",
      "Transfer files",
      "Retrieve IP addresses"
    ],
    "answer": 1,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 303)",
    "options": [
      "7000.0 milliseconds",
      "350.0 milliseconds",
      "700.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 268) (Set 304)",
    "options": [
      "Connection-oriented in practice",
      "Connectionless and unreliable",
      "Heavyweight in most cases",
      "Guaranteed delivery in most cases"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 268) (Set 305)",
    "options": [
      "Guaranteed delivery in practice",
      "Connection-oriented in practice",
      "Connectionless and unreliable",
      "Heavyweight (widely accepted)"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 79) (Set 306)",
    "options": [
      "66 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 131) (Set 307)",
    "options": [
      "4.0 milliseconds",
      "2.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 204) (Set 308)",
    "options": [
      "0.5 milliseconds",
      "25.0 milliseconds",
      "500.0 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 177) (Set 224) (Set 309)",
    "options": [
      "21",
      "22",
      "80",
      "443"
    ],
    "answer": 2,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 310)",
    "options": [
      "CRC only",
      "Parity bit",
      "Checksum",
      "Hamming code"
    ],
    "answer": 2,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 311)",
    "options": [
      "0.5 milliseconds",
      "800.0 milliseconds",
      "80.0 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 312)",
    "options": [
      "128 assignable hosts",
      "126 assignable hosts",
      "130 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 313)",
    "options": [
      "21",
      "80",
      "22",
      "443"
    ],
    "answer": 1,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 157) (Set 314)",
    "options": [
      "Heavyweight (general case)",
      "Connectionless and unreliable",
      "Connection-oriented in most cases",
      "Guaranteed delivery (general case)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 315)",
    "options": [
      "Network Layer (general case)",
      "Transport Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Physical Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 316)",
    "options": [
      "800.0 milliseconds",
      "400.0 milliseconds",
      "8000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 193) (Set 317)",
    "options": [
      "400.0 milliseconds",
      "200.0 milliseconds",
      "0.5 milliseconds",
      "4000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 119) (Set 318)",
    "options": [
      "Connection-oriented in most cases",
      "Heavyweight in standard usage",
      "Guaranteed delivery (commonly used)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 106) (Set 319)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Physical Layer (general case)",
      "Network Layer (widely accepted)",
      "Transport Layer (general case)"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 77) (Set 320)",
    "options": [
      "700.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 321)",
    "options": [
      "64 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 186) (Set 210) (Set 322)",
    "options": [
      "28 assignable hosts",
      "16 assignable hosts",
      "14 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 323)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 192) (Set 324)",
    "options": [
      "6 assignable hosts",
      "2 assignable hosts",
      "4 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 208) (Set 325)",
    "options": [
      "6.0 milliseconds",
      "60.0 milliseconds",
      "3.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (1000 * 1000 bps) = 6 ms = 6.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 311) (Set 326)",
    "options": [
      "0.5 milliseconds",
      "40.0 milliseconds",
      "80.0 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 327)",
    "options": [
      "4000.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds",
      "200.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 177) (Set 328)",
    "options": [
      "21",
      "80",
      "443",
      "22"
    ],
    "answer": 1,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 189) (Set 227) (Set 233) (Set 329)",
    "options": [
      "Physical Layer by design",
      "Data Link Layer (Layer 2)",
      "Transport Layer in most cases",
      "Network Layer (general case)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 92) (Set 141) (Set 163) (Set 330)",
    "options": [
      "Default Port 22",
      "Default Port 80",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 331)",
    "options": [
      "30.0 milliseconds",
      "600.0 milliseconds",
      "60.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 332)",
    "options": [
      "0.5 milliseconds",
      "70.0 milliseconds",
      "700.0 milliseconds",
      "35.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 285) (Set 297) (Set 333)",
    "options": [
      "350.0 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 156) (Set 334)",
    "options": [
      "256 assignable hosts",
      "508 assignable hosts",
      "254 assignable hosts",
      "258 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86) (Set 164) (Set 335)",
    "options": [
      "Transfer files",
      "Retrieve IP addresses",
      "Retrieve emails",
      "Send emails"
    ],
    "answer": 3,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 55) (Set 236) (Set 336)",
    "options": [
      "Congestion window sizing",
      "Three-way handshake",
      "Timeout retransmission only",
      "Sliding window mechanism"
    ],
    "answer": 3,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 285) (Set 297) (Set 333) (Set 337)",
    "options": [
      "350.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 286) (Set 338)",
    "options": [
      "66 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 31) (Set 339)",
    "options": [
      "Subnet Mask",
      "IPv4",
      "IPv6",
      "MAC Address"
    ],
    "answer": 2,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 154) (Set 340)",
    "options": [
      "25.0 milliseconds",
      "50.0 milliseconds",
      "0.5 milliseconds",
      "500.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 167) (Set 341)",
    "options": [
      "62 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 283) (Set 342)",
    "options": [
      "128 assignable hosts",
      "126 assignable hosts",
      "252 assignable hosts",
      "130 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 323) (Set 343)",
    "options": [
      "Default Port 80",
      "Default Port 53",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTP web transfer server default? (Set 221) (Set 344)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 80",
      "Default Port 53"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTP web transfer server default to Default Port 80."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 345)",
    "options": [
      "0.5 milliseconds",
      "8000.0 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 231) (Set 346)",
    "options": [
      "35.0 milliseconds",
      "700.0 milliseconds",
      "70.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 158) (Set 347)",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 53",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61) (Set 130) (Set 149) (Set 175) (Set 348)",
    "options": [
      "350.0 milliseconds",
      "700.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 349)",
    "options": [
      "800.0 milliseconds",
      "8000.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 350)",
    "options": [
      "Guaranteed delivery (general case)",
      "Connectionless and unreliable",
      "Heavyweight (widely accepted)",
      "Connection-oriented in most cases"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 351)",
    "options": [
      "4000.0 milliseconds",
      "200.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 231) (Set 262) (Set 352)",
    "options": [
      "35.0 milliseconds",
      "700.0 milliseconds",
      "70.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 192) (Set 353)",
    "options": [
      "4 assignable hosts",
      "4 assignable hosts",
      "2 assignable hosts",
      "6 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 119) (Set 176) (Set 354)",
    "options": [
      "Heavyweight (primary approach)",
      "Connection-oriented in most cases",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 116) (Set 355)",
    "options": [
      "Heavyweight (standard definition)",
      "Connectionless and unreliable",
      "Connection-oriented (general case)",
      "Guaranteed delivery in most cases"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 189) (Set 227) (Set 356)",
    "options": [
      "Network Layer (widely accepted)",
      "Physical Layer (commonly used)",
      "Transport Layer by design",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 231) (Set 346) (Set 357)",
    "options": [
      "700.0 milliseconds",
      "35.0 milliseconds",
      "0.5 milliseconds",
      "70.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 55) (Set 358)",
    "options": [
      "Congestion window sizing",
      "Sliding window mechanism",
      "Three-way handshake",
      "Timeout retransmission only"
    ],
    "answer": 1,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 92) (Set 359)",
    "options": [
      "Default Port 25",
      "Default Port 22",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86) (Set 360)",
    "options": [
      "Transfer files",
      "Retrieve IP addresses",
      "Send emails",
      "Retrieve emails"
    ],
    "answer": 2,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 361)",
    "options": [
      "64 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 362)",
    "options": [
      "CRC only",
      "Hamming code",
      "Parity bit",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.224 (corresponding to CIDR notation /27). How many usable host IP addresses are supported? (Set 161) (Set 363)",
    "options": [
      "32 assignable hosts",
      "34 assignable hosts",
      "30 assignable hosts",
      "60 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /27, standard calculation is 2^5 - 2 = 30 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 131) (Set 307) (Set 364)",
    "options": [
      "4.0 milliseconds",
      "2.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 108) (Set 365)",
    "options": [
      "Heavyweight under normal conditions",
      "Connectionless and unreliable",
      "Guaranteed delivery (general case)",
      "Connection-oriented in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.248 (corresponding to CIDR notation /29). How many usable host IP addresses are supported? (Set 366)",
    "options": [
      "8 assignable hosts",
      "6 assignable hosts",
      "10 assignable hosts",
      "12 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /29, standard calculation is 2^3 - 2 = 6 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 34) (Set 367)",
    "options": [
      "500.0 milliseconds",
      "250.0 milliseconds",
      "0.5 milliseconds",
      "5000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.224 (corresponding to CIDR notation /27). How many usable host IP addresses are supported? (Set 368)",
    "options": [
      "30 assignable hosts",
      "32 assignable hosts",
      "34 assignable hosts",
      "60 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /27, standard calculation is 2^5 - 2 = 30 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 77) (Set 270) (Set 369)",
    "options": [
      "700.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 80) (Set 115) (Set 370)",
    "options": [
      "Default Port 443",
      "Default Port 53",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 311) (Set 371)",
    "options": [
      "80.0 milliseconds",
      "0.5 milliseconds",
      "800.0 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 132) (Set 252) (Set 372)",
    "options": [
      "Guaranteed delivery (commonly used)",
      "Connection-oriented in practice",
      "Heavyweight (default behavior)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 373)",
    "options": [
      "4.0 milliseconds",
      "2.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 219) (Set 298) (Set 374)",
    "options": [
      "DHCP (standard definition)",
      "ARP (Address Resolution Protocol)",
      "NAT under normal conditions",
      "DNS under normal conditions"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212) (Set 271) (Set 375)",
    "options": [
      "DHCP in typical implementations",
      "ARP (Address Resolution Protocol)",
      "NAT under normal conditions",
      "DNS under normal conditions"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 376)",
    "options": [
      "CRC only",
      "Checksum",
      "Parity bit",
      "Hamming code"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 76) (Set 377)",
    "options": [
      "Guaranteed delivery (general case)",
      "Connectionless and unreliable",
      "Connection-oriented (commonly used)",
      "Heavyweight based on convention"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 48) (Set 81) (Set 378)",
    "options": [
      "Default Port 53",
      "Default Port 80",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 137) (Set 198) (Set 379)",
    "options": [
      "18 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "TCP is characterized as? (Set 380)",
    "options": [
      "Best-effort delivery (commonly used)",
      "Connectionless and unreliable",
      "Connection-oriented and reliable",
      "Lightweight with no handshake"
    ],
    "answer": 2,
    "explanation": "TCP uses a 3-way handshake and guarantees packet ordering."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 381)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 382)",
    "options": [
      "Heavyweight (widely accepted)",
      "Connectionless and unreliable",
      "Guaranteed delivery by design",
      "Connection-oriented (general case)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 313) (Set 383)",
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
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 48) (Set 384)",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 385)",
    "options": [
      "2 assignable hosts",
      "6 assignable hosts",
      "4 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 247) (Set 386)",
    "options": [
      "Transport Layer (commonly used)",
      "Network Layer by design",
      "Data Link Layer (Layer 2)",
      "Physical Layer (commonly used)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 72) (Set 387)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "NAT under normal conditions",
      "DHCP (standard definition)",
      "DNS in typical implementations"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 41) (Set 59) (Set 388)",
    "options": [
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 18) (Set 389)",
    "options": [
      "IPv6",
      "Subnet Mask",
      "IPv4",
      "MAC Address"
    ],
    "answer": 0,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 137) (Set 238) (Set 390)",
    "options": [
      "14 assignable hosts",
      "28 assignable hosts",
      "16 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110) (Set 295) (Set 391)",
    "options": [
      "128 assignable hosts",
      "130 assignable hosts",
      "126 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 214) (Set 392)",
    "options": [
      "30.0 milliseconds",
      "600.0 milliseconds",
      "0.5 milliseconds",
      "60.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 38) (Set 127) (Set 274) (Set 393)",
    "options": [
      "Default Port 80",
      "Default Port 25",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 362) (Set 394)",
    "options": [
      "Checksum",
      "CRC only",
      "Hamming code",
      "Parity bit"
    ],
    "answer": 0,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 395)",
    "options": [
      "Default Port 22",
      "Default Port 143",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 396)",
    "options": [
      "MAC Address",
      "IPv6",
      "IPv4",
      "Subnet Mask"
    ],
    "answer": 1,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 397)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Network Layer (typical scenario)",
      "Physical Layer (widely accepted)",
      "Transport Layer in practice"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 398)",
    "options": [
      "Default Port 25",
      "Default Port 22",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 6) (Set 40) (Set 399)",
    "options": [
      "Sliding window in typical implementations",
      "Checksums in typical implementations",
      "MAC addresses in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start"
    ],
    "answer": 3,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 400)",
    "options": [
      "35.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds",
      "70.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 401)",
    "options": [
      "Guaranteed delivery in most cases",
      "Connectionless and unreliable",
      "Heavyweight (default behavior)",
      "Connection-oriented (general case)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 362) (Set 402)",
    "options": [
      "CRC only",
      "Hamming code",
      "Parity bit",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 403)",
    "options": [
      "DNS (Domain Name System)",
      "FTP (typical scenario)",
      "DHCP under normal conditions",
      "ARP (commonly used)"
    ],
    "answer": 0,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 55) (Set 236) (Set 336) (Set 404)",
    "options": [
      "Sliding window mechanism",
      "Congestion window sizing",
      "Three-way handshake",
      "Timeout retransmission only"
    ],
    "answer": 0,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 405)",
    "options": [
      "Congestion window (cwnd) and algorithms like Slow Start",
      "MAC addresses in typical implementations",
      "Checksums in typical implementations",
      "Sliding window in typical implementations"
    ],
    "answer": 0,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 406)",
    "options": [
      "508 assignable hosts",
      "254 assignable hosts",
      "258 assignable hosts",
      "256 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 407)",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 186) (Set 196) (Set 408)",
    "options": [
      "18 assignable hosts",
      "28 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 409)",
    "options": [
      "400.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds",
      "8000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 100) (Set 410)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Session Layer based on convention",
      "Transport Layer in most cases",
      "Application Layer (general case)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 8) (Set 411)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Encrypts network traffic (widely accepted)",
      "Translates MAC to IP (default behavior)",
      "Filters spam emails in typical implementations"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 412)",
    "options": [
      "8000.0 milliseconds",
      "400.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 95) (Set 413)",
    "options": [
      "124 assignable hosts",
      "64 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 116) (Set 355) (Set 414)",
    "options": [
      "Connection-oriented (commonly used)",
      "Guaranteed delivery by design",
      "Connectionless and unreliable",
      "Heavyweight in standard usage"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 323) (Set 415)",
    "options": [
      "Default Port 80",
      "Default Port 25",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 416)",
    "options": [
      "Default Port 25",
      "Default Port 22",
      "Default Port 443",
      "Default Port 53"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 417)",
    "options": [
      "NAT under normal conditions",
      "DNS under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DHCP in typical implementations"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 82) (Set 301) (Set 418)",
    "options": [
      "Parity bit",
      "Hamming code",
      "Checksum",
      "CRC only"
    ],
    "answer": 2,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 419)",
    "options": [
      "0.5 milliseconds",
      "400.0 milliseconds",
      "8000.0 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 18) (Set 420)",
    "options": [
      "MAC Address",
      "IPv6",
      "IPv4",
      "Subnet Mask"
    ],
    "answer": 1,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 192) (Set 324) (Set 421)",
    "options": [
      "2 assignable hosts",
      "4 assignable hosts",
      "6 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 126) (Set 422)",
    "options": [
      "64 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 313) (Set 383) (Set 423)",
    "options": [
      "443",
      "21",
      "22",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 424)",
    "options": [
      "Heavyweight (commonly used)",
      "Guaranteed delivery in practice",
      "Connectionless and unreliable",
      "Connection-oriented in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 381) (Set 425)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 180) (Set 426)",
    "options": [
      "28 assignable hosts",
      "16 assignable hosts",
      "14 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 427)",
    "options": [
      "Sliding window mechanism",
      "Congestion window sizing",
      "Three-way handshake",
      "Timeout retransmission only"
    ],
    "answer": 0,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 131) (Set 428)",
    "options": [
      "0.5 milliseconds",
      "2.0 milliseconds",
      "4.0 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 362) (Set 402) (Set 429)",
    "options": [
      "Hamming code",
      "Checksum",
      "Parity bit",
      "CRC only"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 151) (Set 237) (Set 430)",
    "options": [
      "800.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 6) (Set 40) (Set 399) (Set 431)",
    "options": [
      "Sliding window in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start",
      "Checksums in typical implementations",
      "MAC addresses in typical implementations"
    ],
    "answer": 1,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215) (Set 432)",
    "options": [
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol",
      "Direct Host Configuration Port"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 25) (Set 433)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Filters spam emails based on convention",
      "Encrypts network traffic based on convention",
      "Translates MAC to IP (primary approach)"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 434)",
    "options": [
      "400.0 milliseconds",
      "4000.0 milliseconds",
      "200.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 23) (Set 435)",
    "options": [
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 98) (Set 436)",
    "options": [
      "Default Port 22",
      "Default Port 53",
      "Default Port 25",
      "Default Port 443"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 315) (Set 437)",
    "options": [
      "Transport Layer by design",
      "Data Link Layer (Layer 2)",
      "Network Layer in most cases",
      "Physical Layer (general case)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 53) (Set 438)",
    "options": [
      "700.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 17) (Set 439)",
    "options": [
      "0.5 milliseconds",
      "70.0 milliseconds",
      "3.5 milliseconds",
      "7.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (1000 * 1000 bps) = 7 ms = 7.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 45) (Set 440)",
    "options": [
      "Send emails",
      "Transfer files",
      "Retrieve emails",
      "Retrieve IP addresses"
    ],
    "answer": 0,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 53) (Set 438) (Set 441)",
    "options": [
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "350.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.224 (corresponding to CIDR notation /27). How many usable host IP addresses are supported? (Set 161) (Set 363) (Set 442)",
    "options": [
      "30 assignable hosts",
      "60 assignable hosts",
      "32 assignable hosts",
      "34 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /27, standard calculation is 2^5 - 2 = 30 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 72) (Set 387) (Set 443)",
    "options": [
      "DNS in typical implementations",
      "DHCP in typical implementations",
      "NAT in typical implementations",
      "ARP (Address Resolution Protocol)"
    ],
    "answer": 3,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 381) (Set 444)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 201) (Set 445)",
    "options": [
      "14 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 446)",
    "options": [
      "22",
      "80",
      "21",
      "443"
    ],
    "answer": 1,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 65) (Set 447)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented in most cases",
      "Guaranteed delivery in most cases",
      "Heavyweight as per specification"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 381) (Set 425) (Set 448)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 123) (Set 449)",
    "options": [
      "800.0 milliseconds",
      "0.5 milliseconds",
      "80.0 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 450)",
    "options": [
      "200.0 milliseconds",
      "4000.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 70) (Set 451)",
    "options": [
      "80",
      "22",
      "21",
      "443"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86) (Set 360) (Set 452)",
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
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 453)",
    "options": [
      "Guaranteed delivery by design",
      "Connection-oriented in most cases",
      "Connectionless and unreliable",
      "Heavyweight in standard usage"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 168) (Set 454)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 22",
      "Default Port 443"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 17) (Set 52) (Set 455)",
    "options": [
      "70.0 milliseconds",
      "0.5 milliseconds",
      "7.0 milliseconds",
      "3.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (1000 * 1000 bps) = 7 ms = 7.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 381) (Set 456)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 4) (Set 173) (Set 457)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 80",
      "Default Port 53"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 142) (Set 458)",
    "options": [
      "IPv4",
      "MAC Address",
      "Subnet Mask",
      "IPv6"
    ],
    "answer": 3,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 6) (Set 40) (Set 459)",
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
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 38) (Set 127) (Set 274) (Set 393) (Set 460)",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 461)",
    "options": [
      "DHCP in typical implementations",
      "DNS under normal conditions",
      "ARP (Address Resolution Protocol)",
      "NAT under normal conditions"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 193) (Set 462)",
    "options": [
      "0.5 milliseconds",
      "200.0 milliseconds",
      "400.0 milliseconds",
      "4000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 419) (Set 463)",
    "options": [
      "8000.0 milliseconds",
      "400.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 464)",
    "options": [
      "Checksum",
      "CRC only",
      "Hamming code",
      "Parity bit"
    ],
    "answer": 0,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 113) (Set 465)",
    "options": [
      "130 assignable hosts",
      "252 assignable hosts",
      "126 assignable hosts",
      "128 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 466)",
    "options": [
      "8000.0 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 409) (Set 467)",
    "options": [
      "8000.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 288) (Set 468)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented (general case)",
      "Heavyweight in standard usage",
      "Guaranteed delivery in practice"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 469)",
    "options": [
      "30.0 milliseconds",
      "0.5 milliseconds",
      "60.0 milliseconds",
      "600.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 332) (Set 470)",
    "options": [
      "0.5 milliseconds",
      "70.0 milliseconds",
      "700.0 milliseconds",
      "35.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 129) (Set 471)",
    "options": [
      "62 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 17) (Set 439) (Set 472)",
    "options": [
      "0.5 milliseconds",
      "7.0 milliseconds",
      "70.0 milliseconds",
      "3.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (1000 * 1000 bps) = 7 ms = 7.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 473)",
    "options": [
      "64 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 137) (Set 238) (Set 474)",
    "options": [
      "16 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 406) (Set 475)",
    "options": [
      "508 assignable hosts",
      "254 assignable hosts",
      "256 assignable hosts",
      "258 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 128) (Set 476)",
    "options": [
      "Connection-oriented by design",
      "Heavyweight (typical scenario)",
      "Connectionless and unreliable",
      "Guaranteed delivery in most cases"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 310) (Set 477)",
    "options": [
      "Parity bit",
      "Hamming code",
      "CRC only",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 478)",
    "options": [
      "80.0 milliseconds",
      "40.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 315) (Set 437) (Set 479)",
    "options": [
      "Transport Layer by design",
      "Network Layer by design",
      "Physical Layer by design",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 373) (Set 480)",
    "options": [
      "2.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 53) (Set 438) (Set 441) (Set 481)",
    "options": [
      "7000.0 milliseconds",
      "700.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 283) (Set 342) (Set 482)",
    "options": [
      "126 assignable hosts",
      "130 assignable hosts",
      "252 assignable hosts",
      "128 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 483)",
    "options": [
      "Default Port 53",
      "Default Port 22",
      "Default Port 143",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212) (Set 271) (Set 375) (Set 484)",
    "options": [
      "DNS under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DHCP in typical implementations",
      "NAT under normal conditions"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 231) (Set 485)",
    "options": [
      "70.0 milliseconds",
      "700.0 milliseconds",
      "0.5 milliseconds",
      "35.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 313) (Set 383) (Set 486)",
    "options": [
      "80",
      "21",
      "443",
      "22"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 268) (Set 487)",
    "options": [
      "Guaranteed delivery in most cases",
      "Connectionless and unreliable",
      "Heavyweight (primary approach)",
      "Connection-oriented in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 142) (Set 488)",
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61) (Set 130) (Set 149) (Set 489)",
    "options": [
      "350.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 285) (Set 297) (Set 333) (Set 337) (Set 490)",
    "options": [
      "700.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 491)",
    "options": [
      "300.0 milliseconds",
      "6000.0 milliseconds",
      "0.5 milliseconds",
      "600.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (10 * 1000 bps) = 600 ms = 600.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 25) (Set 433) (Set 492)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Translates MAC to IP under normal conditions",
      "Filters spam emails in typical implementations",
      "Encrypts network traffic under normal conditions"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 405) (Set 493)",
    "options": [
      "Congestion window (cwnd) and algorithms like Slow Start",
      "MAC addresses in typical implementations",
      "Sliding window in typical implementations",
      "Checksums in typical implementations"
    ],
    "answer": 0,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 275) (Set 494)",
    "options": [
      "64 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 28) (Set 78) (Set 495)",
    "options": [
      "5.0 milliseconds",
      "0.5 milliseconds",
      "50.0 milliseconds",
      "2.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 261) (Set 496)",
    "options": [
      "0.5 milliseconds",
      "80.0 milliseconds",
      "8.0 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (1000 * 1000 bps) = 8 ms = 8.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 310) (Set 497)",
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 498)",
    "options": [
      "3.5 milliseconds",
      "0.5 milliseconds",
      "7.0 milliseconds",
      "70.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (1000 * 1000 bps) = 7 ms = 7.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 43) (Set 499)",
    "options": [
      "ARP (default behavior)",
      "DHCP as per specification",
      "FTP (primary approach)",
      "DNS (Domain Name System)"
    ],
    "answer": 3,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTP web transfer server default? (Set 194) (Set 500)",
    "options": [
      "Default Port 53",
      "Default Port 80",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link HTTP web transfer server default to Default Port 80."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 331) (Set 501)",
    "options": [
      "600.0 milliseconds",
      "30.0 milliseconds",
      "0.5 milliseconds",
      "60.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 502)",
    "options": [
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Physical, Data Link, Network, Session, Transport, Presentation, Application"
    ],
    "answer": 2,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 131) (Set 428) (Set 503)",
    "options": [
      "2.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 351) (Set 504)",
    "options": [
      "400.0 milliseconds",
      "200.0 milliseconds",
      "4000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 46) (Set 505)",
    "options": [
      "Parity bit",
      "Checksum",
      "Hamming code",
      "CRC only"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 183) (Set 506)",
    "options": [
      "252 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts",
      "126 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 285) (Set 297) (Set 333) (Set 507)",
    "options": [
      "0.5 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110) (Set 508)",
    "options": [
      "130 assignable hosts",
      "128 assignable hosts",
      "252 assignable hosts",
      "126 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 258) (Set 509)",
    "options": [
      "DNS under normal conditions",
      "NAT under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DHCP (standard definition)"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 323) (Set 510)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 23) (Set 27) (Set 511)",
    "options": [
      "700.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 219) (Set 512)",
    "options": [
      "DNS in typical implementations",
      "ARP (Address Resolution Protocol)",
      "NAT in typical implementations",
      "DHCP in typical implementations"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 361) (Set 513)",
    "options": [
      "124 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 483) (Set 514)",
    "options": [
      "Default Port 22",
      "Default Port 53",
      "Default Port 25",
      "Default Port 143"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 491) (Set 515)",
    "options": [
      "0.5 milliseconds",
      "600.0 milliseconds",
      "6000.0 milliseconds",
      "300.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (10 * 1000 bps) = 600 ms = 600.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 483) (Set 514) (Set 516)",
    "options": [
      "Default Port 53",
      "Default Port 143",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 32) (Set 517)",
    "options": [
      "Physical Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Transport Layer by design",
      "Network Layer (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 100) (Set 518)",
    "options": [
      "Session Layer as per specification",
      "Transport Layer in most cases",
      "Application Layer in most cases",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 268) (Set 487) (Set 519)",
    "options": [
      "Connection-oriented (general case)",
      "Heavyweight (primary approach)",
      "Connectionless and unreliable",
      "Guaranteed delivery in most cases"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 219) (Set 298) (Set 374) (Set 520)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "NAT under normal conditions",
      "DHCP under normal conditions",
      "DNS under normal conditions"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110) (Set 295) (Set 391) (Set 521)",
    "options": [
      "126 assignable hosts",
      "252 assignable hosts",
      "128 assignable hosts",
      "130 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 186) (Set 210) (Set 522)",
    "options": [
      "16 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 6) (Set 40) (Set 399) (Set 431) (Set 523)",
    "options": [
      "Congestion window (cwnd) and algorithms like Slow Start",
      "MAC addresses in typical implementations",
      "Checksums in typical implementations",
      "Sliding window in typical implementations"
    ],
    "answer": 0,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 80) (Set 115) (Set 147) (Set 524)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 443",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 249) (Set 525)",
    "options": [
      "Heavyweight based on convention",
      "Connectionless and unreliable",
      "Guaranteed delivery (general case)",
      "Connection-oriented (commonly used)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 152) (Set 526)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 79) (Set 306) (Set 527)",
    "options": [
      "124 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 283) (Set 528)",
    "options": [
      "126 assignable hosts",
      "128 assignable hosts",
      "130 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 98) (Set 436) (Set 529)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 443",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 134) (Set 530)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Network Layer (general case)",
      "Transport Layer by design",
      "Physical Layer in standard usage"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110) (Set 531)",
    "options": [
      "128 assignable hosts",
      "130 assignable hosts",
      "126 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110) (Set 531) (Set 532)",
    "options": [
      "126 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 111) (Set 533)",
    "options": [
      "0.5 milliseconds",
      "40.0 milliseconds",
      "2.0 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 534)",
    "options": [
      "256 assignable hosts",
      "258 assignable hosts",
      "508 assignable hosts",
      "254 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 323) (Set 535)",
    "options": [
      "Default Port 53",
      "Default Port 80",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 275) (Set 536)",
    "options": [
      "64 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 483) (Set 514) (Set 537)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 143",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 181) (Set 538)",
    "options": [
      "NAT in typical implementations",
      "ARP (Address Resolution Protocol)",
      "DNS in typical implementations",
      "DHCP under normal conditions"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 94) (Set 117) (Set 539)",
    "options": [
      "16 assignable hosts",
      "18 assignable hosts",
      "14 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 26) (Set 540)",
    "options": [
      "14 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 80) (Set 115) (Set 541)",
    "options": [
      "Default Port 25",
      "Default Port 443",
      "Default Port 53",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 80) (Set 115) (Set 147) (Set 542)",
    "options": [
      "Default Port 443",
      "Default Port 22",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 543)",
    "options": [
      "500.0 milliseconds",
      "50.0 milliseconds",
      "0.5 milliseconds",
      "25.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 483) (Set 514) (Set 516) (Set 544)",
    "options": [
      "Default Port 143",
      "Default Port 25",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 109) (Set 251) (Set 545)",
    "options": [
      "0.5 milliseconds",
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 310) (Set 546)",
    "options": [
      "Parity bit",
      "Checksum",
      "CRC only",
      "Hamming code"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 412) (Set 547)",
    "options": [
      "800.0 milliseconds",
      "0.5 milliseconds",
      "8000.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 385) (Set 548)",
    "options": [
      "4 assignable hosts",
      "4 assignable hosts",
      "2 assignable hosts",
      "6 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 549)",
    "options": [
      "4 assignable hosts",
      "6 assignable hosts",
      "2 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 35) (Set 550)",
    "options": [
      "Retrieve IP addresses",
      "Send emails",
      "Retrieve emails",
      "Transfer files"
    ],
    "answer": 1,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215) (Set 551)",
    "options": [
      "Direct Host Configuration Port",
      "Dynamic Host Configuration Protocol",
      "Dynamic Host Connection Protocol",
      "Distributed Host Control Protocol"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 92) (Set 552)",
    "options": [
      "Default Port 22",
      "Default Port 80",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 553)",
    "options": [
      "Guaranteed delivery by design",
      "Connectionless and unreliable",
      "Heavyweight in standard usage",
      "Connection-oriented in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 33) (Set 554)",
    "options": [
      "Send emails",
      "Transfer files",
      "Retrieve emails",
      "Retrieve IP addresses"
    ],
    "answer": 0,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 137) (Set 198) (Set 379) (Set 555)",
    "options": [
      "16 assignable hosts",
      "28 assignable hosts",
      "14 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 556)",
    "options": [
      "Parity bit",
      "Checksum",
      "CRC only",
      "Hamming code"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 108) (Set 365) (Set 557)",
    "options": [
      "Connection-oriented in most cases",
      "Heavyweight in practice",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 89) (Set 266) (Set 558)",
    "options": [
      "Heavyweight in most cases",
      "Guaranteed delivery in practice",
      "Connection-oriented by design",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 559)",
    "options": [
      "Default Port 53",
      "Default Port 143",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 4) (Set 20) (Set 165) (Set 560)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 561)",
    "options": [
      "20.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (100 * 1000 bps) = 40 ms = 40.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 289) (Set 562)",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Direct Host Configuration Port",
      "Distributed Host Control Protocol",
      "Dynamic Host Connection Protocol"
    ],
    "answer": 0,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 129) (Set 471) (Set 563)",
    "options": [
      "124 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 79) (Set 306) (Set 527) (Set 564)",
    "options": [
      "66 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 565)",
    "options": [
      "Connectionless and unreliable",
      "Heavyweight (standard definition)",
      "Guaranteed delivery by design",
      "Connection-oriented (general case)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 566)",
    "options": [
      "60.0 milliseconds",
      "600.0 milliseconds",
      "0.5 milliseconds",
      "30.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 136) (Set 567)",
    "options": [
      "Guaranteed delivery (commonly used)",
      "Heavyweight as per specification",
      "Connection-oriented (general case)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 65) (Set 447) (Set 568)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented (commonly used)",
      "Heavyweight (primary approach)",
      "Guaranteed delivery (general case)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 286) (Set 569)",
    "options": [
      "124 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 100) (Set 518) (Set 570)",
    "options": [
      "Session Layer in standard usage",
      "Application Layer by design",
      "Presentation Layer (Layer 6)",
      "Transport Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 571)",
    "options": [
      "0.5 milliseconds",
      "4.0 milliseconds",
      "2.0 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 157) (Set 314) (Set 572)",
    "options": [
      "Guaranteed delivery (commonly used)",
      "Connection-oriented by design",
      "Connectionless and unreliable",
      "Heavyweight in standard usage"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 275) (Set 573)",
    "options": [
      "124 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 129) (Set 471) (Set 563) (Set 574)",
    "options": [
      "62 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 249) (Set 265) (Set 575)",
    "options": [
      "Heavyweight (default behavior)",
      "Connectionless and unreliable",
      "Guaranteed delivery (commonly used)",
      "Connection-oriented in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 208) (Set 576)",
    "options": [
      "0.5 milliseconds",
      "3.0 milliseconds",
      "6.0 milliseconds",
      "60.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (1000 * 1000 bps) = 6 ms = 6.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 577)",
    "options": [
      "Sliding window mechanism",
      "Timeout retransmission only",
      "Congestion window sizing",
      "Three-way handshake"
    ],
    "answer": 0,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 578)",
    "options": [
      "500.0 milliseconds",
      "50.0 milliseconds",
      "25.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 409) (Set 579)",
    "options": [
      "400.0 milliseconds",
      "0.5 milliseconds",
      "800.0 milliseconds",
      "8000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 283) (Set 342) (Set 580)",
    "options": [
      "128 assignable hosts",
      "126 assignable hosts",
      "252 assignable hosts",
      "130 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 581)",
    "options": [
      "Distributed Host Control Protocol",
      "Dynamic Host Connection Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Configuration Protocol"
    ],
    "answer": 3,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 186) (Set 243) (Set 582)",
    "options": [
      "18 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 26) (Set 583)",
    "options": [
      "16 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 316) (Set 584)",
    "options": [
      "8000.0 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 92) (Set 552) (Set 585)",
    "options": [
      "Default Port 80",
      "Default Port 53",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 202) (Set 586)",
    "options": [
      "Congestion window sizing",
      "Timeout retransmission only",
      "Sliding window mechanism",
      "Three-way handshake"
    ],
    "answer": 2,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 208) (Set 587)",
    "options": [
      "60.0 milliseconds",
      "6.0 milliseconds",
      "0.5 milliseconds",
      "3.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (1000 * 1000 bps) = 6 ms = 6.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 362) (Set 402) (Set 429) (Set 588)",
    "options": [
      "Parity bit",
      "CRC only",
      "Hamming code",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 214) (Set 589)",
    "options": [
      "600.0 milliseconds",
      "30.0 milliseconds",
      "0.5 milliseconds",
      "60.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 158) (Set 590)",
    "options": [
      "Default Port 22",
      "Default Port 80",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 591)",
    "options": [
      "700.0 milliseconds",
      "70.0 milliseconds",
      "0.5 milliseconds",
      "35.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 92) (Set 359) (Set 592)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 22",
      "Default Port 80"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 65) (Set 447) (Set 568) (Set 593)",
    "options": [
      "Heavyweight (default behavior)",
      "Connection-oriented (commonly used)",
      "Guaranteed delivery in practice",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 35) (Set 302) (Set 594)",
    "options": [
      "Retrieve IP addresses",
      "Retrieve emails",
      "Transfer files",
      "Send emails"
    ],
    "answer": 3,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 261) (Set 496) (Set 595)",
    "options": [
      "0.5 milliseconds",
      "8.0 milliseconds",
      "4.0 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (1000 * 1000 bps) = 8 ms = 8.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 327) (Set 596)",
    "options": [
      "200.0 milliseconds",
      "4000.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 140) (Set 230) (Set 597)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 231) (Set 346) (Set 357) (Set 598)",
    "options": [
      "35.0 milliseconds",
      "700.0 milliseconds",
      "70.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 311) (Set 371) (Set 599)",
    "options": [
      "40.0 milliseconds",
      "80.0 milliseconds",
      "0.5 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 17) (Set 600)",
    "options": [
      "3.5 milliseconds",
      "7.0 milliseconds",
      "0.5 milliseconds",
      "70.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (1000 * 1000 bps) = 7 ms = 7.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 315) (Set 601)",
    "options": [
      "Network Layer (typical scenario)",
      "Physical Layer (commonly used)",
      "Transport Layer (general case)",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 129) (Set 471) (Set 563) (Set 574) (Set 602)",
    "options": [
      "62 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 603)",
    "options": [
      "CRC only",
      "Hamming code",
      "Checksum",
      "Parity bit"
    ],
    "answer": 2,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 34) (Set 367) (Set 604)",
    "options": [
      "500.0 milliseconds",
      "0.5 milliseconds",
      "250.0 milliseconds",
      "5000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 73) (Set 253) (Set 605)",
    "options": [
      "200.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds",
      "4000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 202) (Set 606)",
    "options": [
      "Sliding window mechanism",
      "Three-way handshake",
      "Timeout retransmission only",
      "Congestion window sizing"
    ],
    "answer": 0,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 157) (Set 314) (Set 607)",
    "options": [
      "Heavyweight (primary approach)",
      "Connection-oriented in most cases",
      "Guaranteed delivery (commonly used)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215) (Set 432) (Set 608)",
    "options": [
      "Direct Host Configuration Port",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol",
      "Dynamic Host Connection Protocol"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86) (Set 164) (Set 335) (Set 609)",
    "options": [
      "Retrieve emails",
      "Send emails",
      "Transfer files",
      "Retrieve IP addresses"
    ],
    "answer": 1,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 160) (Set 205) (Set 610)",
    "options": [
      "4.0 milliseconds",
      "0.5 milliseconds",
      "2.0 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 152) (Set 611)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 612)",
    "options": [
      "124 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 92) (Set 359) (Set 613)",
    "options": [
      "Default Port 22",
      "Default Port 53",
      "Default Port 80",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 310) (Set 477) (Set 614)",
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 409) (Set 579) (Set 615)",
    "options": [
      "8000.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 543) (Set 616)",
    "options": [
      "50.0 milliseconds",
      "25.0 milliseconds",
      "0.5 milliseconds",
      "500.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 362) (Set 394) (Set 617)",
    "options": [
      "Checksum",
      "CRC only",
      "Parity bit",
      "Hamming code"
    ],
    "answer": 0,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTP web transfer server default? (Set 221) (Set 344) (Set 618)",
    "options": [
      "Default Port 53",
      "Default Port 22",
      "Default Port 25",
      "Default Port 80"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link HTTP web transfer server default to Default Port 80."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 434) (Set 619)",
    "options": [
      "200.0 milliseconds",
      "4000.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 207) (Set 620)",
    "options": [
      "Default Port 22",
      "Default Port 53",
      "Default Port 143",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 48) (Set 81) (Set 378) (Set 621)",
    "options": [
      "Default Port 80",
      "Default Port 53",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 424) (Set 622)",
    "options": [
      "Heavyweight in practice",
      "Connectionless and unreliable",
      "Connection-oriented by design",
      "Guaranteed delivery (commonly used)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110) (Set 295) (Set 391) (Set 521) (Set 623)",
    "options": [
      "128 assignable hosts",
      "126 assignable hosts",
      "252 assignable hosts",
      "130 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 70) (Set 451) (Set 624)",
    "options": [
      "80",
      "21",
      "443",
      "22"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 362) (Set 394) (Set 617) (Set 625)",
    "options": [
      "Parity bit",
      "Hamming code",
      "CRC only",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 106) (Set 626)",
    "options": [
      "Physical Layer in most cases",
      "Transport Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Network Layer (primary approach)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212) (Set 271) (Set 627)",
    "options": [
      "DNS under normal conditions",
      "ARP (Address Resolution Protocol)",
      "NAT in typical implementations",
      "DHCP under normal conditions"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 95) (Set 220) (Set 628)",
    "options": [
      "124 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 60) (Set 629)",
    "options": [
      "124 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 630)",
    "options": [
      "8000.0 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 310) (Set 497) (Set 631)",
    "options": [
      "CRC only",
      "Parity bit",
      "Checksum",
      "Hamming code"
    ],
    "answer": 2,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 285) (Set 297) (Set 300) (Set 632)",
    "options": [
      "700.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 633)",
    "options": [
      "Encrypting network packets (commonly used)",
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth (standard definition)",
      "Connecting different protocols (default behavior)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 80) (Set 115) (Set 370) (Set 634)",
    "options": [
      "Default Port 443",
      "Default Port 53",
      "Default Port 22",
      "Default Port 25"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61) (Set 130) (Set 149) (Set 175) (Set 348) (Set 635)",
    "options": [
      "350.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 123) (Set 636)",
    "options": [
      "0.5 milliseconds",
      "40.0 milliseconds",
      "800.0 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 28) (Set 78) (Set 637)",
    "options": [
      "0.5 milliseconds",
      "2.5 milliseconds",
      "5.0 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215) (Set 551) (Set 638)",
    "options": [
      "Direct Host Configuration Port",
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol"
    ],
    "answer": 2,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 543) (Set 639)",
    "options": [
      "25.0 milliseconds",
      "500.0 milliseconds",
      "0.5 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 640)",
    "options": [
      "62 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215) (Set 551) (Set 641)",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Connection Protocol"
    ],
    "answer": 0,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 450) (Set 642)",
    "options": [
      "400.0 milliseconds",
      "0.5 milliseconds",
      "4000.0 milliseconds",
      "200.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 26) (Set 643)",
    "options": [
      "18 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 296) (Set 644)",
    "options": [
      "500.0 milliseconds",
      "5000.0 milliseconds",
      "0.5 milliseconds",
      "250.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 98) (Set 645)",
    "options": [
      "Default Port 22",
      "Default Port 443",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.248 (corresponding to CIDR notation /29). How many usable host IP addresses are supported? (Set 646)",
    "options": [
      "6 assignable hosts",
      "10 assignable hosts",
      "8 assignable hosts",
      "12 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /29, standard calculation is 2^3 - 2 = 6 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 6) (Set 40) (Set 459) (Set 647)",
    "options": [
      "Checksums in typical implementations",
      "Sliding window in typical implementations",
      "MAC addresses in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start"
    ],
    "answer": 3,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 630) (Set 648)",
    "options": [
      "8000.0 milliseconds",
      "0.5 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 566) (Set 649)",
    "options": [
      "0.5 milliseconds",
      "30.0 milliseconds",
      "600.0 milliseconds",
      "60.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 650)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "DNS in typical implementations",
      "DHCP under normal conditions",
      "NAT under normal conditions"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 409) (Set 579) (Set 651)",
    "options": [
      "400.0 milliseconds",
      "8000.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 131) (Set 307) (Set 652)",
    "options": [
      "4.0 milliseconds",
      "40.0 milliseconds",
      "2.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 85) (Set 267) (Set 653)",
    "options": [
      "Guaranteed delivery in most cases",
      "Connection-oriented (commonly used)",
      "Heavyweight (standard definition)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 323) (Set 415) (Set 654)",
    "options": [
      "Default Port 25",
      "Default Port 22",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 655)",
    "options": [
      "66 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 37) (Set 656)",
    "options": [
      "700.0 milliseconds",
      "7000.0 milliseconds",
      "350.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 483) (Set 514) (Set 537) (Set 657)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 143",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 310) (Set 477) (Set 614) (Set 658)",
    "options": [
      "CRC only",
      "Checksum",
      "Parity bit",
      "Hamming code"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 659)",
    "options": [
      "124 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 69) (Set 171) (Set 660)",
    "options": [
      "Sliding window mechanism",
      "Timeout retransmission only",
      "Three-way handshake",
      "Congestion window sizing"
    ],
    "answer": 0,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 112) (Set 661)",
    "options": [
      "66 assignable hosts",
      "64 assignable hosts",
      "62 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 47) (Set 80) (Set 662)",
    "options": [
      "Default Port 53",
      "Default Port 22",
      "Default Port 443",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 268) (Set 305) (Set 663)",
    "options": [
      "Guaranteed delivery (general case)",
      "Connection-oriented (general case)",
      "Connectionless and unreliable",
      "Heavyweight (standard definition)"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 450) (Set 642) (Set 664)",
    "options": [
      "4000.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds",
      "200.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 79) (Set 306) (Set 527) (Set 564) (Set 665)",
    "options": [
      "64 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 231) (Set 262) (Set 666)",
    "options": [
      "35.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds",
      "70.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 667)",
    "options": [
      "Heavyweight (primary approach)",
      "Connectionless and unreliable",
      "Guaranteed delivery by design",
      "Connection-oriented in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 7) (Set 668)",
    "options": [
      "14 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 60) (Set 669)",
    "options": [
      "62 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 405) (Set 670)",
    "options": [
      "MAC addresses in typical implementations",
      "Checksums in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start",
      "Sliding window in typical implementations"
    ],
    "answer": 2,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 559) (Set 671)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 22",
      "Default Port 143"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 34) (Set 367) (Set 604) (Set 672)",
    "options": [
      "250.0 milliseconds",
      "0.5 milliseconds",
      "5000.0 milliseconds",
      "500.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 461) (Set 673)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "DNS in typical implementations",
      "DHCP in typical implementations",
      "NAT under normal conditions"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 674)",
    "options": [
      "50.0 milliseconds",
      "0.5 milliseconds",
      "5.0 milliseconds",
      "2.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 331) (Set 675)",
    "options": [
      "60.0 milliseconds",
      "0.5 milliseconds",
      "600.0 milliseconds",
      "30.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 202) (Set 586) (Set 676)",
    "options": [
      "Congestion window sizing",
      "Timeout retransmission only",
      "Three-way handshake",
      "Sliding window mechanism"
    ],
    "answer": 3,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 128) (Set 677)",
    "options": [
      "Heavyweight based on convention",
      "Guaranteed delivery (commonly used)",
      "Connection-oriented (general case)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 119) (Set 176) (Set 678)",
    "options": [
      "Guaranteed delivery by design",
      "Heavyweight (general case)",
      "Connection-oriented in practice",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 56) (Set 63) (Set 679)",
    "options": [
      "Default Port 22",
      "Default Port 143",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 680)",
    "options": [
      "Physical Layer in practice",
      "Transport Layer in most cases",
      "Data Link Layer (Layer 2)",
      "Network Layer in standard usage"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 681)",
    "options": [
      "Default Port 22",
      "Default Port 80",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 192) (Set 682)",
    "options": [
      "2 assignable hosts",
      "4 assignable hosts",
      "4 assignable hosts",
      "6 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 199) (Set 683)",
    "options": [
      "8000.0 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 283) (Set 528) (Set 684)",
    "options": [
      "252 assignable hosts",
      "126 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 249) (Set 685)",
    "options": [
      "Guaranteed delivery in practice",
      "Heavyweight based on convention",
      "Connection-oriented in practice",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 219) (Set 298) (Set 374) (Set 686)",
    "options": [
      "NAT in typical implementations",
      "DNS under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DHCP in typical implementations"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 559) (Set 687)",
    "options": [
      "Default Port 25",
      "Default Port 22",
      "Default Port 53",
      "Default Port 143"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 549) (Set 688)",
    "options": [
      "2 assignable hosts",
      "4 assignable hosts",
      "4 assignable hosts",
      "6 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 131) (Set 428) (Set 689)",
    "options": [
      "4.0 milliseconds",
      "0.5 milliseconds",
      "2.0 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 690)",
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 261) (Set 691)",
    "options": [
      "4.0 milliseconds",
      "0.5 milliseconds",
      "8.0 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (1000 * 1000 bps) = 8 ms = 8.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 48) (Set 244) (Set 692)",
    "options": [
      "Default Port 22",
      "Default Port 53",
      "Default Port 80",
      "Default Port 25"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 152) (Set 526) (Set 693)",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 450) (Set 642) (Set 664) (Set 694)",
    "options": [
      "200.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds",
      "4000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 419) (Set 695)",
    "options": [
      "800.0 milliseconds",
      "8000.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 53) (Set 438) (Set 441) (Set 481) (Set 696)",
    "options": [
      "700.0 milliseconds",
      "0.5 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 76) (Set 377) (Set 697)",
    "options": [
      "Heavyweight (commonly used)",
      "Connectionless and unreliable",
      "Guaranteed delivery (general case)",
      "Connection-oriented (commonly used)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 199) (Set 698)",
    "options": [
      "8000.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 25) (Set 699)",
    "options": [
      "Translates MAC to IP under normal conditions",
      "Translates private IP addresses to a public IP",
      "Encrypts network traffic (default behavior)",
      "Filters spam emails (standard definition)"
    ],
    "answer": 1,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 296) (Set 700)",
    "options": [
      "250.0 milliseconds",
      "0.5 milliseconds",
      "5000.0 milliseconds",
      "500.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 261) (Set 701)",
    "options": [
      "0.5 milliseconds",
      "8.0 milliseconds",
      "80.0 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (1000 * 1000 bps) = 8 ms = 8.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 702)",
    "options": [
      "Default Port 80",
      "Default Port 22",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 703)",
    "options": [
      "25.0 milliseconds",
      "0.5 milliseconds",
      "500.0 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 23) (Set 27) (Set 511) (Set 704)",
    "options": [
      "700.0 milliseconds",
      "350.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 4) (Set 20) (Set 165) (Set 705)",
    "options": [
      "Default Port 22",
      "Default Port 80",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 630) (Set 648) (Set 706)",
    "options": [
      "0.5 milliseconds",
      "8000.0 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 707)",
    "options": [
      "62 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 708)",
    "options": [
      "Transport Layer (commonly used)",
      "Physical Layer in practice",
      "Data Link Layer (Layer 2)",
      "Network Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 709)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 143",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 710)",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 53",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 711)",
    "options": [
      "130 assignable hosts",
      "126 assignable hosts",
      "252 assignable hosts",
      "128 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 409) (Set 579) (Set 615) (Set 712)",
    "options": [
      "8000.0 milliseconds",
      "400.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 211) (Set 713)",
    "options": [
      "Connectionless and unreliable",
      "Guaranteed delivery (commonly used)",
      "Connection-oriented (general case)",
      "Heavyweight based on convention"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 680) (Set 714)",
    "options": [
      "Transport Layer in practice",
      "Network Layer (widely accepted)",
      "Data Link Layer (Layer 2)",
      "Physical Layer (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 715)",
    "options": [
      "Subnet Mask",
      "IPv4",
      "IPv6",
      "MAC Address"
    ],
    "answer": 2,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 716)",
    "options": [
      "Heavyweight under normal conditions",
      "Connection-oriented (commonly used)",
      "Guaranteed delivery by design",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215) (Set 432) (Set 608) (Set 717)",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Connection Protocol",
      "Distributed Host Control Protocol"
    ],
    "answer": 0,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 718)",
    "options": [
      "0.5 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 311) (Set 371) (Set 599) (Set 719)",
    "options": [
      "800.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 137) (Set 720)",
    "options": [
      "14 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 491) (Set 721)",
    "options": [
      "600.0 milliseconds",
      "6000.0 milliseconds",
      "0.5 milliseconds",
      "300.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (10 * 1000 bps) = 600 ms = 600.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 406) (Set 722)",
    "options": [
      "254 assignable hosts",
      "256 assignable hosts",
      "508 assignable hosts",
      "258 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 211) (Set 713) (Set 723)",
    "options": [
      "Heavyweight in standard usage",
      "Connection-oriented (commonly used)",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 28) (Set 724)",
    "options": [
      "5.0 milliseconds",
      "50.0 milliseconds",
      "0.5 milliseconds",
      "2.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 94) (Set 117) (Set 226) (Set 725)",
    "options": [
      "16 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 46) (Set 97) (Set 217) (Set 726)",
    "options": [
      "Checksum",
      "CRC only",
      "Parity bit",
      "Hamming code"
    ],
    "answer": 0,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 727)",
    "options": [
      "Default Port 22",
      "Default Port 80",
      "Default Port 53",
      "Default Port 25"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 7) (Set 668) (Set 728)",
    "options": [
      "28 assignable hosts",
      "16 assignable hosts",
      "18 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 385) (Set 729)",
    "options": [
      "2 assignable hosts",
      "4 assignable hosts",
      "6 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 25) (Set 433) (Set 730)",
    "options": [
      "Filters spam emails under normal conditions",
      "Translates MAC to IP based on convention",
      "Translates private IP addresses to a public IP",
      "Encrypts network traffic (widely accepted)"
    ],
    "answer": 2,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 450) (Set 642) (Set 664) (Set 694) (Set 731)",
    "options": [
      "200.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds",
      "4000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 311) (Set 732)",
    "options": [
      "80.0 milliseconds",
      "40.0 milliseconds",
      "800.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 32) (Set 517) (Set 733)",
    "options": [
      "Network Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Physical Layer in standard usage",
      "Transport Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 177) (Set 224) (Set 734)",
    "options": [
      "443",
      "80",
      "22",
      "21"
    ],
    "answer": 1,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 311) (Set 735)",
    "options": [
      "40.0 milliseconds",
      "800.0 milliseconds",
      "80.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 55) (Set 236) (Set 736)",
    "options": [
      "Three-way handshake",
      "Congestion window sizing",
      "Timeout retransmission only",
      "Sliding window mechanism"
    ],
    "answer": 3,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 119) (Set 176) (Set 354) (Set 737)",
    "options": [
      "Heavyweight (typical scenario)",
      "Connection-oriented in practice",
      "Guaranteed delivery in practice",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 738)",
    "options": [
      "DHCP (standard definition)",
      "NAT in typical implementations",
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
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 739)",
    "options": [
      "IPv4",
      "IPv6",
      "MAC Address",
      "Subnet Mask"
    ],
    "answer": 1,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 650) (Set 740)",
    "options": [
      "NAT under normal conditions",
      "DNS in typical implementations",
      "DHCP under normal conditions",
      "ARP (Address Resolution Protocol)"
    ],
    "answer": 3,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 35) (Set 741)",
    "options": [
      "Transfer files",
      "Retrieve IP addresses",
      "Send emails",
      "Retrieve emails"
    ],
    "answer": 2,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 202) (Set 742)",
    "options": [
      "Sliding window mechanism",
      "Timeout retransmission only",
      "Three-way handshake",
      "Congestion window sizing"
    ],
    "answer": 0,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 55) (Set 236) (Set 336) (Set 743)",
    "options": [
      "Three-way handshake",
      "Sliding window mechanism",
      "Congestion window sizing",
      "Timeout retransmission only"
    ],
    "answer": 1,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 446) (Set 744)",
    "options": [
      "443",
      "22",
      "21",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 180) (Set 426) (Set 745)",
    "options": [
      "28 assignable hosts",
      "14 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 26) (Set 643) (Set 746)",
    "options": [
      "18 assignable hosts",
      "14 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212) (Set 747)",
    "options": [
      "NAT in typical implementations",
      "DNS in typical implementations",
      "ARP (Address Resolution Protocol)",
      "DHCP (standard definition)"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 398) (Set 748)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 80",
      "Default Port 53"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 73) (Set 749)",
    "options": [
      "400.0 milliseconds",
      "200.0 milliseconds",
      "4000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 177) (Set 328) (Set 750)",
    "options": [
      "80",
      "22",
      "443",
      "21"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 315) (Set 601) (Set 751)",
    "options": [
      "Transport Layer in most cases",
      "Network Layer (typical scenario)",
      "Data Link Layer (Layer 2)",
      "Physical Layer in practice"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 48) (Set 752)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 177) (Set 224) (Set 753)",
    "options": [
      "443",
      "22",
      "21",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 225) (Set 231) (Set 485) (Set 754)",
    "options": [
      "35.0 milliseconds",
      "700.0 milliseconds",
      "70.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (100 * 1000 bps) = 70 ms = 70.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 755)",
    "options": [
      "Connection-oriented in most cases",
      "Connectionless and unreliable",
      "Heavyweight (standard definition)",
      "Guaranteed delivery by design"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 192) (Set 324) (Set 756)",
    "options": [
      "4 assignable hosts",
      "2 assignable hosts",
      "4 assignable hosts",
      "6 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 268) (Set 304) (Set 757)",
    "options": [
      "Connectionless and unreliable",
      "Guaranteed delivery by design",
      "Heavyweight (standard definition)",
      "Connection-oriented (general case)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 315) (Set 437) (Set 758)",
    "options": [
      "Network Layer in most cases",
      "Data Link Layer (Layer 2)",
      "Physical Layer in practice",
      "Transport Layer by design"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 261) (Set 496) (Set 759)",
    "options": [
      "80.0 milliseconds",
      "4.0 milliseconds",
      "8.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (1000 * 1000 bps) = 8 ms = 8.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 128) (Set 476) (Set 760)",
    "options": [
      "Guaranteed delivery (commonly used)",
      "Connection-oriented (commonly used)",
      "Connectionless and unreliable",
      "Heavyweight (typical scenario)"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 189) (Set 227) (Set 761)",
    "options": [
      "Physical Layer in standard usage",
      "Data Link Layer (Layer 2)",
      "Network Layer (default behavior)",
      "Transport Layer in practice"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86) (Set 164) (Set 335) (Set 609) (Set 762)",
    "options": [
      "Retrieve emails",
      "Transfer files",
      "Retrieve IP addresses",
      "Send emails"
    ],
    "answer": 3,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 763)",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 139) (Set 197) (Set 764)",
    "options": [
      "0.5 milliseconds",
      "40.0 milliseconds",
      "800.0 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 275) (Set 573) (Set 765)",
    "options": [
      "64 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SMTP mail forwarding protocol? (Set 681) (Set 766)",
    "options": [
      "Default Port 80",
      "Default Port 25",
      "Default Port 53",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link SMTP mail forwarding protocol to Default Port 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 767)",
    "options": [
      "CRC only",
      "Hamming code",
      "Checksum",
      "Parity bit"
    ],
    "answer": 2,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 768)",
    "options": [
      "Guaranteed delivery (general case)",
      "Connection-oriented by design",
      "Connectionless and unreliable",
      "Heavyweight in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 296) (Set 700) (Set 769)",
    "options": [
      "250.0 milliseconds",
      "500.0 milliseconds",
      "0.5 milliseconds",
      "5000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 667) (Set 770)",
    "options": [
      "Connection-oriented by design",
      "Connectionless and unreliable",
      "Heavyweight (commonly used)",
      "Guaranteed delivery (commonly used)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 401) (Set 771)",
    "options": [
      "Heavyweight (primary approach)",
      "Guaranteed delivery in practice",
      "Connection-oriented (commonly used)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 288) (Set 468) (Set 772)",
    "options": [
      "Connectionless and unreliable",
      "Guaranteed delivery (commonly used)",
      "Heavyweight (commonly used)",
      "Connection-oriented (commonly used)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 773)",
    "options": [
      "2.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 154) (Set 278) (Set 774)",
    "options": [
      "0.5 milliseconds",
      "25.0 milliseconds",
      "500.0 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 7) (Set 775)",
    "options": [
      "16 assignable hosts",
      "14 assignable hosts",
      "28 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 41) (Set 59) (Set 299) (Set 776)",
    "options": [
      "700.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 95) (Set 220) (Set 777)",
    "options": [
      "64 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212) (Set 271) (Set 627) (Set 778)",
    "options": [
      "NAT under normal conditions",
      "DNS in typical implementations",
      "DHCP in typical implementations",
      "ARP (Address Resolution Protocol)"
    ],
    "answer": 3,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 100) (Set 779)",
    "options": [
      "Transport Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Application Layer by design",
      "Session Layer in practice"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 116) (Set 355) (Set 780)",
    "options": [
      "Connection-oriented in most cases",
      "Heavyweight (typical scenario)",
      "Guaranteed delivery (commonly used)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 396) (Set 781)",
    "options": [
      "IPv4",
      "Subnet Mask",
      "IPv6",
      "MAC Address"
    ],
    "answer": 2,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.224 (corresponding to CIDR notation /27). How many usable host IP addresses are supported? (Set 161) (Set 363) (Set 782)",
    "options": [
      "30 assignable hosts",
      "34 assignable hosts",
      "60 assignable hosts",
      "32 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /27, standard calculation is 2^5 - 2 = 30 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 154) (Set 783)",
    "options": [
      "25.0 milliseconds",
      "50.0 milliseconds",
      "500.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 2) (Set 702) (Set 784)",
    "options": [
      "Default Port 25",
      "Default Port 80",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 140) (Set 230) (Set 785)",
    "options": [
      "Default Port 53",
      "Default Port 80",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 183) (Set 786)",
    "options": [
      "126 assignable hosts",
      "252 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 132) (Set 252) (Set 372) (Set 787)",
    "options": [
      "Guaranteed delivery in practice",
      "Connection-oriented (general case)",
      "Connectionless and unreliable",
      "Heavyweight in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 125) (Set 788)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer (general case)",
      "Session Layer (default behavior)",
      "Transport Layer (widely accepted)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 789)",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 156) (Set 334) (Set 790)",
    "options": [
      "256 assignable hosts",
      "258 assignable hosts",
      "254 assignable hosts",
      "508 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 4) (Set 791)",
    "options": [
      "Default Port 22",
      "Default Port 53",
      "Default Port 80",
      "Default Port 25"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86) (Set 164) (Set 335) (Set 792)",
    "options": [
      "Transfer files",
      "Retrieve IP addresses",
      "Retrieve emails",
      "Send emails"
    ],
    "answer": 3,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 35) (Set 741) (Set 793)",
    "options": [
      "Retrieve emails",
      "Send emails",
      "Transfer files",
      "Retrieve IP addresses"
    ],
    "answer": 1,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 132) (Set 252) (Set 794)",
    "options": [
      "Heavyweight (commonly used)",
      "Connection-oriented (commonly used)",
      "Guaranteed delivery (general case)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTP web transfer server default? (Set 221) (Set 344) (Set 795)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 22",
      "Default Port 80"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link HTTP web transfer server default to Default Port 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 134) (Set 530) (Set 796)",
    "options": [
      "Physical Layer in most cases",
      "Network Layer in standard usage",
      "Transport Layer in most cases",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 581) (Set 797)",
    "options": [
      "Dynamic Host Connection Protocol",
      "Distributed Host Control Protocol",
      "Dynamic Host Configuration Protocol",
      "Direct Host Configuration Port"
    ],
    "answer": 2,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 351) (Set 798)",
    "options": [
      "200.0 milliseconds",
      "0.5 milliseconds",
      "4000.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 406) (Set 799)",
    "options": [
      "256 assignable hosts",
      "254 assignable hosts",
      "508 assignable hosts",
      "258 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 630) (Set 800)",
    "options": [
      "8000.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 31) (Set 801)",
    "options": [
      "IPv6",
      "Subnet Mask",
      "MAC Address",
      "IPv4"
    ],
    "answer": 0,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 79) (Set 306) (Set 527) (Set 564) (Set 802)",
    "options": [
      "124 assignable hosts",
      "62 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 193) (Set 803)",
    "options": [
      "4000.0 milliseconds",
      "200.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 94) (Set 117) (Set 804)",
    "options": [
      "16 assignable hosts",
      "28 assignable hosts",
      "14 assignable hosts",
      "18 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 381) (Set 805)",
    "options": [
      "Default Port 53",
      "Default Port 80",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 242) (Set 806)",
    "options": [
      "Transport Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Application Layer in most cases",
      "Session Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 313) (Set 807)",
    "options": [
      "443",
      "21",
      "22",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 187) (Set 808)",
    "options": [
      "254 assignable hosts",
      "256 assignable hosts",
      "508 assignable hosts",
      "258 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 450) (Set 642) (Set 809)",
    "options": [
      "4000.0 milliseconds",
      "200.0 milliseconds",
      "0.5 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 142) (Set 810)",
    "options": [
      "MAC Address",
      "Subnet Mask",
      "IPv6",
      "IPv4"
    ],
    "answer": 2,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 811)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented in practice",
      "Heavyweight (commonly used)",
      "Guaranteed delivery in most cases"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 72) (Set 387) (Set 443) (Set 812)",
    "options": [
      "DHCP in typical implementations",
      "ARP (Address Resolution Protocol)",
      "DNS under normal conditions",
      "NAT in typical implementations"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 561) (Set 813)",
    "options": [
      "40.0 milliseconds",
      "400.0 milliseconds",
      "20.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (100 * 1000 bps) = 40 ms = 40.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215) (Set 432) (Set 608) (Set 814)",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Connection Protocol",
      "Distributed Host Control Protocol"
    ],
    "answer": 0,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 100) (Set 518) (Set 815)",
    "options": [
      "Application Layer in most cases",
      "Session Layer based on convention",
      "Transport Layer by design",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 41) (Set 59) (Set 299) (Set 776) (Set 816)",
    "options": [
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 259) (Set 817)",
    "options": [
      "Default Port 53",
      "Default Port 443",
      "Default Port 22",
      "Default Port 25"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 192) (Set 324) (Set 818)",
    "options": [
      "4 assignable hosts",
      "4 assignable hosts",
      "2 assignable hosts",
      "6 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 156) (Set 334) (Set 819)",
    "options": [
      "508 assignable hosts",
      "254 assignable hosts",
      "256 assignable hosts",
      "258 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 710) (Set 820)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 22",
      "Default Port 80"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 24) (Set 91) (Set 122) (Set 131) (Set 821)",
    "options": [
      "40.0 milliseconds",
      "2.0 milliseconds",
      "0.5 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 412) (Set 822)",
    "options": [
      "0.5 milliseconds",
      "800.0 milliseconds",
      "8000.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 145) (Set 280) (Set 823)",
    "options": [
      "MAC addresses in typical implementations",
      "Checksums in typical implementations",
      "Sliding window in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start"
    ],
    "answer": 3,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110) (Set 295) (Set 391) (Set 521) (Set 824)",
    "options": [
      "126 assignable hosts",
      "252 assignable hosts",
      "128 assignable hosts",
      "130 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 412) (Set 822) (Set 825)",
    "options": [
      "0.5 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds",
      "8000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 711) (Set 826)",
    "options": [
      "130 assignable hosts",
      "128 assignable hosts",
      "126 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 417) (Set 827)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "DHCP under normal conditions",
      "DNS under normal conditions",
      "NAT under normal conditions"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 106) (Set 828)",
    "options": [
      "Physical Layer in standard usage",
      "Network Layer (typical scenario)",
      "Transport Layer in most cases",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 829)",
    "options": [
      "0.5 milliseconds",
      "400.0 milliseconds",
      "4000.0 milliseconds",
      "200.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 53) (Set 438) (Set 441) (Set 481) (Set 830)",
    "options": [
      "7000.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds",
      "350.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 313) (Set 383) (Set 423) (Set 831)",
    "options": [
      "21",
      "80",
      "22",
      "443"
    ],
    "answer": 1,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 53) (Set 832)",
    "options": [
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "350.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 37) (Set 833)",
    "options": [
      "350.0 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 680) (Set 714) (Set 834)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Physical Layer in practice",
      "Transport Layer in most cases",
      "Network Layer in most cases"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 158) (Set 590) (Set 835)",
    "options": [
      "Default Port 53",
      "Default Port 22",
      "Default Port 80",
      "Default Port 25"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 84) (Set 310) (Set 497) (Set 836)",
    "options": [
      "CRC only",
      "Hamming code",
      "Parity bit",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 362) (Set 402) (Set 429) (Set 588) (Set 837)",
    "options": [
      "Hamming code",
      "CRC only",
      "Parity bit",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 838)",
    "options": [
      "252 assignable hosts",
      "126 assignable hosts",
      "128 assignable hosts",
      "130 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 450) (Set 642) (Set 809) (Set 839)",
    "options": [
      "0.5 milliseconds",
      "4000.0 milliseconds",
      "200.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 549) (Set 688) (Set 840)",
    "options": [
      "4 assignable hosts",
      "6 assignable hosts",
      "2 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 381) (Set 425) (Set 448) (Set 841)",
    "options": [
      "Default Port 25",
      "Default Port 22",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 46) (Set 97) (Set 217) (Set 842)",
    "options": [
      "CRC only",
      "Checksum",
      "Parity bit",
      "Hamming code"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 202) (Set 586) (Set 843)",
    "options": [
      "Timeout retransmission only",
      "Three-way handshake",
      "Congestion window sizing",
      "Sliding window mechanism"
    ],
    "answer": 3,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 288) (Set 844)",
    "options": [
      "Heavyweight as per specification",
      "Connectionless and unreliable",
      "Guaranteed delivery (general case)",
      "Connection-oriented in most cases"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 199) (Set 698) (Set 845)",
    "options": [
      "800.0 milliseconds",
      "8000.0 milliseconds",
      "400.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTP web transfer server default? (Set 221) (Set 344) (Set 795) (Set 846)",
    "options": [
      "Default Port 53",
      "Default Port 25",
      "Default Port 80",
      "Default Port 22"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link HTTP web transfer server default to Default Port 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 134) (Set 847)",
    "options": [
      "Network Layer (general case)",
      "Physical Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Transport Layer by design"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 718) (Set 848)",
    "options": [
      "350.0 milliseconds",
      "0.5 milliseconds",
      "700.0 milliseconds",
      "7000.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 849)",
    "options": [
      "Default Port 80",
      "Default Port 25",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 77) (Set 320) (Set 850)",
    "options": [
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 28) (Set 250) (Set 851)",
    "options": [
      "0.5 milliseconds",
      "5.0 milliseconds",
      "50.0 milliseconds",
      "2.5 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 28) (Set 250) (Set 852)",
    "options": [
      "2.5 milliseconds",
      "5.0 milliseconds",
      "0.5 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the HTTPS SSL/TLS protected website access? (Set 36) (Set 853)",
    "options": [
      "Default Port 25",
      "Default Port 53",
      "Default Port 22",
      "Default Port 443"
    ],
    "answer": 3,
    "explanation": "Standard TCP/IP RFC designations link HTTPS SSL/TLS protected website access to Default Port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 566) (Set 854)",
    "options": [
      "0.5 milliseconds",
      "600.0 milliseconds",
      "30.0 milliseconds",
      "60.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 855)",
    "options": [
      "Transfer files",
      "Retrieve IP addresses",
      "Retrieve emails",
      "Send emails"
    ],
    "answer": 3,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 94) (Set 117) (Set 226) (Set 725) (Set 856)",
    "options": [
      "14 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86) (Set 857)",
    "options": [
      "Send emails",
      "Retrieve IP addresses",
      "Retrieve emails",
      "Transfer files"
    ],
    "answer": 0,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 183) (Set 506) (Set 858)",
    "options": [
      "126 assignable hosts",
      "252 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 129) (Set 209) (Set 859)",
    "options": [
      "66 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 142) (Set 810) (Set 860)",
    "options": [
      "IPv4",
      "MAC Address",
      "IPv6",
      "Subnet Mask"
    ],
    "answer": 2,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 26) (Set 861)",
    "options": [
      "18 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts",
      "14 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 202) (Set 586) (Set 843) (Set 862)",
    "options": [
      "Congestion window sizing",
      "Sliding window mechanism",
      "Three-way handshake",
      "Timeout retransmission only"
    ],
    "answer": 1,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 655) (Set 863)",
    "options": [
      "64 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 185) (Set 864)",
    "options": [
      "Default Port 80",
      "Default Port 25",
      "Default Port 22",
      "Default Port 53"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 466) (Set 865)",
    "options": [
      "0.5 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds",
      "8000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 86) (Set 360) (Set 866)",
    "options": [
      "Retrieve IP addresses",
      "Send emails",
      "Transfer files",
      "Retrieve emails"
    ],
    "answer": 1,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61) (Set 130) (Set 149) (Set 867)",
    "options": [
      "700.0 milliseconds",
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 15) (Set 77) (Set 270) (Set 369) (Set 868)",
    "options": [
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 129) (Set 869)",
    "options": [
      "66 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 49) (Set 89) (Set 266) (Set 558) (Set 870)",
    "options": [
      "Heavyweight as per specification",
      "Connection-oriented by design",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 103) (Set 110) (Set 871)",
    "options": [
      "128 assignable hosts",
      "130 assignable hosts",
      "126 assignable hosts",
      "252 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 872)",
    "options": [
      "Repeater",
      "Hub",
      "Switch",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 151) (Set 237) (Set 430) (Set 873)",
    "options": [
      "0.5 milliseconds",
      "80.0 milliseconds",
      "40.0 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.128 (corresponding to CIDR notation /25). How many usable host IP addresses are supported? (Set 200) (Set 283) (Set 874)",
    "options": [
      "252 assignable hosts",
      "130 assignable hosts",
      "128 assignable hosts",
      "126 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /25, standard calculation is 2^7 - 2 = 126 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215) (Set 432) (Set 875)",
    "options": [
      "Distributed Host Control Protocol",
      "Dynamic Host Configuration Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Connection Protocol"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 450) (Set 642) (Set 664) (Set 876)",
    "options": [
      "400.0 milliseconds",
      "0.5 milliseconds",
      "4000.0 milliseconds",
      "200.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 192) (Set 324) (Set 756) (Set 877)",
    "options": [
      "2 assignable hosts",
      "4 assignable hosts",
      "6 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 878)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Encrypts network traffic based on convention",
      "Translates MAC to IP (typical scenario)",
      "Filters spam emails under normal conditions"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 82) (Set 301) (Set 418) (Set 879)",
    "options": [
      "Hamming code",
      "Parity bit",
      "CRC only",
      "Checksum"
    ],
    "answer": 3,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 11) (Set 44) (Set 87) (Set 880)",
    "options": [
      "4.0 milliseconds",
      "2.0 milliseconds",
      "0.5 milliseconds",
      "40.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (1000 * 1000 bps) = 4 ms = 4.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 881)",
    "options": [
      "3.5 milliseconds",
      "7.0 milliseconds",
      "0.5 milliseconds",
      "70.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (1000 * 1000 bps) = 7 ms = 7.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 26) (Set 861) (Set 882)",
    "options": [
      "28 assignable hosts",
      "14 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 883)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Transport Layer in most cases",
      "Physical Layer (general case)",
      "Network Layer in practice"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 884)",
    "options": [
      "5000.0 milliseconds",
      "500.0 milliseconds",
      "0.5 milliseconds",
      "250.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 403) (Set 885)",
    "options": [
      "DHCP (commonly used)",
      "FTP (typical scenario)",
      "ARP in standard usage",
      "DNS (Domain Name System)"
    ],
    "answer": 3,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 294) (Set 886)",
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
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 249) (Set 525) (Set 887)",
    "options": [
      "Connection-oriented (general case)",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice",
      "Heavyweight (primary approach)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 888)",
    "options": [
      "0.5 milliseconds",
      "5.0 milliseconds",
      "2.5 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 10) (Set 41) (Set 59) (Set 388) (Set 889)",
    "options": [
      "350.0 milliseconds",
      "0.5 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 29) (Set 142) (Set 810) (Set 890)",
    "options": [
      "Subnet Mask",
      "MAC Address",
      "IPv6",
      "IPv4"
    ],
    "answer": 2,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 473) (Set 891)",
    "options": [
      "124 assignable hosts",
      "64 assignable hosts",
      "66 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 58) (Set 76) (Set 377) (Set 697) (Set 892)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented in most cases",
      "Heavyweight as per specification",
      "Guaranteed delivery (commonly used)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 331) (Set 893)",
    "options": [
      "60.0 milliseconds",
      "30.0 milliseconds",
      "600.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (100 * 1000 bps) = 60 ms = 60.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 202) (Set 894)",
    "options": [
      "Congestion window sizing",
      "Three-way handshake",
      "Timeout retransmission only",
      "Sliding window mechanism"
    ],
    "answer": 3,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 249) (Set 525) (Set 895)",
    "options": [
      "Connection-oriented in practice",
      "Heavyweight as per specification",
      "Guaranteed delivery (general case)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 261) (Set 691) (Set 896)",
    "options": [
      "8.0 milliseconds",
      "80.0 milliseconds",
      "0.5 milliseconds",
      "4.0 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (1000 * 1000 bps) = 8 ms = 8.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 897)",
    "options": [
      "NAT in typical implementations",
      "ARP (Address Resolution Protocol)",
      "DHCP under normal conditions",
      "DNS in typical implementations"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 166) (Set 268) (Set 304) (Set 757) (Set 898)",
    "options": [
      "Connectionless and unreliable",
      "Heavyweight under normal conditions",
      "Connection-oriented in practice",
      "Guaranteed delivery in most cases"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212) (Set 271) (Set 375) (Set 899)",
    "options": [
      "NAT under normal conditions",
      "DHCP in typical implementations",
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
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 172) (Set 315) (Set 601) (Set 900)",
    "options": [
      "Transport Layer in practice",
      "Network Layer by design",
      "Data Link Layer (Layer 2)",
      "Physical Layer (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 69) (Set 171) (Set 660) (Set 901)",
    "options": [
      "Three-way handshake",
      "Sliding window mechanism",
      "Congestion window sizing",
      "Timeout retransmission only"
    ],
    "answer": 1,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 51) (Set 902)",
    "options": [
      "62 assignable hosts",
      "64 assignable hosts",
      "66 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 640) (Set 903)",
    "options": [
      "62 assignable hosts",
      "124 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 94) (Set 117) (Set 226) (Set 904)",
    "options": [
      "14 assignable hosts",
      "16 assignable hosts",
      "18 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 254) (Set 362) (Set 394) (Set 617) (Set 905)",
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
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 630) (Set 906)",
    "options": [
      "0.5 milliseconds",
      "800.0 milliseconds",
      "400.0 milliseconds",
      "8000.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 119) (Set 907)",
    "options": [
      "Heavyweight (typical scenario)",
      "Connectionless and unreliable",
      "Connection-oriented by design",
      "Guaranteed delivery in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 908)",
    "options": [
      "800.0 milliseconds",
      "40.0 milliseconds",
      "0.5 milliseconds",
      "80.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 296) (Set 700) (Set 769) (Set 909)",
    "options": [
      "5000.0 milliseconds",
      "500.0 milliseconds",
      "0.5 milliseconds",
      "250.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (10 * 1000 bps) = 500 ms = 500.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 67) (Set 212) (Set 271) (Set 375) (Set 899) (Set 910)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "DNS in typical implementations",
      "NAT under normal conditions",
      "DHCP under normal conditions"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 461) (Set 911)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "DNS in typical implementations",
      "NAT in typical implementations",
      "DHCP under normal conditions"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 396) (Set 912)",
    "options": [
      "IPv6",
      "Subnet Mask",
      "IPv4",
      "MAC Address"
    ],
    "answer": 0,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 187) (Set 808) (Set 913)",
    "options": [
      "256 assignable hosts",
      "258 assignable hosts",
      "254 assignable hosts",
      "508 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 158) (Set 590) (Set 835) (Set 914)",
    "options": [
      "Default Port 22",
      "Default Port 25",
      "Default Port 53",
      "Default Port 80"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 21) (Set 120) (Set 277) (Set 915)",
    "options": [
      "Transport Layer (general case)",
      "Physical Layer by design",
      "Data Link Layer (Layer 2)",
      "Network Layer in most cases"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 74) (Set 90) (Set 630) (Set 648) (Set 916)",
    "options": [
      "800.0 milliseconds",
      "400.0 milliseconds",
      "8000.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 0,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (10 * 1000 bps) = 800 ms = 800.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 789) (Set 917)",
    "options": [
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 401) (Set 918)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented in practice",
      "Guaranteed delivery (general case)",
      "Heavyweight (commonly used)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 167) (Set 919)",
    "options": [
      "62 assignable hosts",
      "66 assignable hosts",
      "64 assignable hosts",
      "124 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 19) (Set 450) (Set 920)",
    "options": [
      "0.5 milliseconds",
      "4000.0 milliseconds",
      "200.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 313) (Set 807) (Set 921)",
    "options": [
      "21",
      "22",
      "443",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 105) (Set 401) (Set 922)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented in practice",
      "Guaranteed delivery in most cases",
      "Heavyweight (widely accepted)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 6) (Set 40) (Set 459) (Set 647) (Set 923)",
    "options": [
      "Congestion window (cwnd) and algorithms like Slow Start",
      "Checksums in typical implementations",
      "MAC addresses in typical implementations",
      "Sliding window in typical implementations"
    ],
    "answer": 0,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 461) (Set 673) (Set 924)",
    "options": [
      "DNS under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DHCP in typical implementations",
      "NAT under normal conditions"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 14) (Set 71) (Set 249) (Set 525) (Set 887) (Set 925)",
    "options": [
      "Guaranteed delivery in most cases",
      "Heavyweight (widely accepted)",
      "Connection-oriented (general case)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 180) (Set 426) (Set 926)",
    "options": [
      "14 assignable hosts",
      "18 assignable hosts",
      "16 assignable hosts",
      "28 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 18) (Set 927)",
    "options": [
      "IPv6",
      "MAC Address",
      "Subnet Mask",
      "IPv4"
    ],
    "answer": 0,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the IMAP webmail access utility? (Set 150) (Set 483) (Set 928)",
    "options": [
      "Default Port 25",
      "Default Port 22",
      "Default Port 143",
      "Default Port 53"
    ],
    "answer": 2,
    "explanation": "Standard TCP/IP RFC designations link IMAP webmail access utility to Default Port 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 397) (Set 929)",
    "options": [
      "Physical Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Network Layer by design",
      "Transport Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 85) (Set 930)",
    "options": [
      "Guaranteed delivery (general case)",
      "Connectionless and unreliable",
      "Connection-oriented (general case)",
      "Heavyweight in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 16) (Set 35) (Set 232) (Set 931)",
    "options": [
      "Retrieve emails",
      "Transfer files",
      "Send emails",
      "Retrieve IP addresses"
    ],
    "answer": 2,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 6000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 208) (Set 587) (Set 932)",
    "options": [
      "60.0 milliseconds",
      "0.5 milliseconds",
      "6.0 milliseconds",
      "3.0 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 6000 bits / (1000 * 1000 bps) = 6 ms = 6.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 446) (Set 933)",
    "options": [
      "80",
      "22",
      "443",
      "21"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 118) (Set 154) (Set 278) (Set 934)",
    "options": [
      "0.5 milliseconds",
      "500.0 milliseconds",
      "25.0 milliseconds",
      "50.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (100 * 1000 bps) = 50 ms = 50.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.248 (corresponding to CIDR notation /29). How many usable host IP addresses are supported? (Set 935)",
    "options": [
      "6 assignable hosts",
      "10 assignable hosts",
      "8 assignable hosts",
      "12 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /29, standard calculation is 2^3 - 2 = 6 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.240 (corresponding to CIDR notation /28). How many usable host IP addresses are supported? (Set 1) (Set 12) (Set 186) (Set 936)",
    "options": [
      "18 assignable hosts",
      "14 assignable hosts",
      "28 assignable hosts",
      "16 assignable hosts"
    ],
    "answer": 1,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /28, standard calculation is 2^4 - 2 = 14 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 133) (Set 138) (Set 184) (Set 215) (Set 432) (Set 875) (Set 937)",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Direct Host Configuration Port",
      "Distributed Host Control Protocol",
      "Dynamic Host Connection Protocol"
    ],
    "answer": 0,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 3) (Set 85) (Set 267) (Set 938)",
    "options": [
      "Connectionless and unreliable",
      "Guaranteed delivery in practice",
      "Connection-oriented in practice",
      "Heavyweight (typical scenario)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 83) (Set 100) (Set 939)",
    "options": [
      "Session Layer (default behavior)",
      "Presentation Layer (Layer 6)",
      "Transport Layer in practice",
      "Application Layer (commonly used)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 6) (Set 40) (Set 399) (Set 940)",
    "options": [
      "Congestion window (cwnd) and algorithms like Slow Start",
      "Sliding window in typical implementations",
      "Checksums in typical implementations",
      "MAC addresses in typical implementations"
    ],
    "answer": 0,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.0 (corresponding to CIDR notation /24). How many usable host IP addresses are supported? (Set 30) (Set 406) (Set 475) (Set 941)",
    "options": [
      "254 assignable hosts",
      "258 assignable hosts",
      "256 assignable hosts",
      "508 assignable hosts"
    ],
    "answer": 0,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /24, standard calculation is 2^8 - 2 = 254 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 5000 bits onto a communication link with bandwidth speed of 1000 kbps. What is the transmission delay? (Set 28) (Set 250) (Set 852) (Set 942)",
    "options": [
      "2.5 milliseconds",
      "0.5 milliseconds",
      "50.0 milliseconds",
      "5.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 5000 bits / (1000 * 1000 bps) = 5 ms = 5.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 7000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 57) (Set 61) (Set 130) (Set 149) (Set 175) (Set 348) (Set 635) (Set 943)",
    "options": [
      "350.0 milliseconds",
      "7000.0 milliseconds",
      "700.0 milliseconds",
      "0.5 milliseconds"
    ],
    "answer": 2,
    "explanation": "Delay = Packet size / Bandwidth = 7000 bits / (10 * 1000 bps) = 700 ms = 700.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the DNS domain resolution protocol? (Set 75) (Set 99) (Set 121) (Set 158) (Set 590) (Set 835) (Set 944)",
    "options": [
      "Default Port 80",
      "Default Port 53",
      "Default Port 25",
      "Default Port 22"
    ],
    "answer": 1,
    "explanation": "Standard TCP/IP RFC designations link DNS domain resolution protocol to Default Port 53."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 8000 bits onto a communication link with bandwidth speed of 100 kbps. What is the transmission delay? (Set 9) (Set 945)",
    "options": [
      "40.0 milliseconds",
      "80.0 milliseconds",
      "0.5 milliseconds",
      "800.0 milliseconds"
    ],
    "answer": 1,
    "explanation": "Delay = Packet size / Bandwidth = 8000 bits / (100 * 1000 bps) = 80 ms = 80.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "Network Performance Calculations",
    "difficulty": "Hard",
    "question": "A router transmits a packet of size 4000 bits onto a communication link with bandwidth speed of 10 kbps. What is the transmission delay? (Set 351) (Set 946)",
    "options": [
      "200.0 milliseconds",
      "0.5 milliseconds",
      "4000.0 milliseconds",
      "400.0 milliseconds"
    ],
    "answer": 3,
    "explanation": "Delay = Packet size / Bandwidth = 4000 bits / (10 * 1000 bps) = 400 ms = 400.0 milliseconds."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 93) (Set 119) (Set 176) (Set 678) (Set 947)",
    "options": [
      "Heavyweight (commonly used)",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice",
      "Connection-oriented (commonly used)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 202) (Set 586) (Set 843) (Set 862) (Set 948)",
    "options": [
      "Sliding window mechanism",
      "Timeout retransmission only",
      "Congestion window sizing",
      "Three-way handshake"
    ],
    "answer": 0,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 42) (Set 55) (Set 236) (Set 336) (Set 743) (Set 949)",
    "options": [
      "Sliding window mechanism",
      "Congestion window sizing",
      "Timeout retransmission only",
      "Three-way handshake"
    ],
    "answer": 0,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Port Protocols Mapping",
    "difficulty": "Easy",
    "question": "In Internet networking architecture protocols, which destination port is used by default for the SSH Secure Shell login? (Set 38) (Set 950)",
    "options": [
      "Default Port 22",
      "Default Port 80",
      "Default Port 25",
      "Default Port 53"
    ],
    "answer": 0,
    "explanation": "Standard TCP/IP RFC designations link SSH Secure Shell login to Default Port 22."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.252 (corresponding to CIDR notation /30). How many usable host IP addresses are supported? (Set 153) (Set 162) (Set 192) (Set 324) (Set 951)",
    "options": [
      "4 assignable hosts",
      "6 assignable hosts",
      "2 assignable hosts",
      "4 assignable hosts"
    ],
    "answer": 2,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /30, standard calculation is 2^2 - 2 = 2 assignable hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnet Masking",
    "difficulty": "Medium",
    "question": "An enterprise interface is configured with the subnet mask 255.255.255.192 (corresponding to CIDR notation /26). How many usable host IP addresses are supported? (Set 22) (Set 39) (Set 50) (Set 54) (Set 659) (Set 952)",
    "options": [
      "66 assignable hosts",
      "124 assignable hosts",
      "64 assignable hosts",
      "62 assignable hosts"
    ],
    "answer": 3,
    "explanation": "Formula = 2^(32-CIDR) - 2. For /26, standard calculation is 2^6 - 2 = 62 assignable hosts."
  }
];
