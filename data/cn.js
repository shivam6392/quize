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
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application"
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
      "Subnet Mask",
      "IPv4",
      "MAC Address",
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
      "80",
      "21",
      "22"
    ],
    "answer": 1,
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
      "ARP (Address Resolution Protocol)",
      "DNS under normal conditions",
      "DHCP under normal conditions",
      "NAT under normal conditions"
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
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol"
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
      "Switch",
      "Hub",
      "Router",
      "Repeater"
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
      "Transport Layer by design",
      "Data Link Layer (Layer 2)",
      "Physical Layer (general case)",
      "Network Layer by design"
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
      "Connection-oriented and reliable",
      "Lightweight with no handshake",
      "Best-effort delivery by design",
      "Connectionless and unreliable"
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
      "Heavyweight (typical scenario)",
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
    "question": "Which protocol is used to translate domain names into IP addresses?",
    "options": [
      "ARP (default behavior)",
      "FTP (widely accepted)",
      "DNS (Domain Name System)",
      "DHCP in typical implementations"
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
      "Encrypting network packets in typical implementations",
      "Increasing network bandwidth as per specification",
      "Connecting different protocols in most cases"
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
      "FTP (File Transfer Protocol)",
      "SNMP (widely accepted)",
      "HTTP (widely accepted)",
      "SMTP as per specification"
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
      "Retrieve IP addresses",
      "Send emails"
    ],
    "answer": 3,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do?",
    "options": [
      "Translates MAC to IP in typical implementations",
      "Translates private IP addresses to a public IP",
      "Encrypts network traffic based on convention",
      "Filters spam emails based on convention"
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
      "MAC addresses in typical implementations",
      "Sliding window in typical implementations",
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
      "Hamming code",
      "CRC only",
      "Parity bit"
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
      "Transport Layer by design",
      "Session Layer based on convention",
      "Application Layer in standard usage"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DNS service?",
    "options": [
      "53",
      "22",
      "21",
      "23"
    ],
    "answer": 0,
    "explanation": "DNS standard port is 53."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service?",
    "options": [
      "22",
      "25",
      "21",
      "23"
    ],
    "answer": 2,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet?",
    "options": [
      "252",
      "256",
      "508",
      "254"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /25. What is the maximum number of assignable host IP addresses on this subnet?",
    "options": [
      "126",
      "128",
      "252",
      "124"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /25, this equals 126 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet?",
    "options": [
      "14",
      "12",
      "16",
      "28"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTPS service?",
    "options": [
      "23",
      "22",
      "443",
      "21"
    ],
    "answer": 2,
    "explanation": "HTTPS standard port is 443."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet?",
    "options": [
      "28",
      "32",
      "60",
      "30"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service?",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet?",
    "options": [
      "124",
      "62",
      "64",
      "60"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service?",
    "options": [
      "23",
      "21",
      "68",
      "22"
    ],
    "answer": 2,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /29. What is the maximum number of assignable host IP addresses on this subnet?",
    "options": [
      "4",
      "8",
      "12",
      "6"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /29, this equals 6 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service?",
    "options": [
      "22",
      "23",
      "25",
      "21"
    ],
    "answer": 0,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service?",
    "options": [
      "23",
      "22",
      "21",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the Telnet service?",
    "options": [
      "25",
      "21",
      "22",
      "23"
    ],
    "answer": 3,
    "explanation": "Telnet standard port is 23."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the IMAP service?",
    "options": [
      "23",
      "143",
      "22",
      "21"
    ],
    "answer": 1,
    "explanation": "IMAP standard port is 143."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the POP3 service?",
    "options": [
      "21",
      "23",
      "22",
      "110"
    ],
    "answer": 3,
    "explanation": "POP3 standard port is 110."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2)",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth (commonly used)",
      "Encrypting network packets (primary approach)",
      "Connecting different protocols as per specification"
    ],
    "answer": 0,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3)",
    "options": [
      "60",
      "28",
      "30",
      "32"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4)",
    "options": [
      "Network Layer in most cases",
      "Physical Layer by design",
      "Data Link Layer (Layer 2)",
      "Transport Layer by design"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5)",
    "options": [
      "Application Layer in practice",
      "Transport Layer (primary approach)",
      "Presentation Layer (Layer 6)",
      "Session Layer (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6)",
    "options": [
      "Switch",
      "Repeater",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 7)",
    "options": [
      "21",
      "22",
      "23",
      "68"
    ],
    "answer": 3,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 8)",
    "options": [
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application"
    ],
    "answer": 1,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9)",
    "options": [
      "Switch",
      "Hub",
      "Router",
      "Repeater"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10)",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets based on convention",
      "Increasing network bandwidth (standard definition)",
      "Connecting different protocols in standard usage"
    ],
    "answer": 0,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 11)",
    "options": [
      "124",
      "62",
      "60",
      "64"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12)",
    "options": [
      "Encrypting network packets (default behavior)",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (default behavior)",
      "Increasing network bandwidth (general case)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13)",
    "options": [
      "60",
      "62",
      "64",
      "124"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the IMAP service? (Set 14)",
    "options": [
      "143",
      "22",
      "23",
      "21"
    ],
    "answer": 0,
    "explanation": "IMAP standard port is 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15)",
    "options": [
      "Repeater",
      "Router",
      "Hub",
      "Switch"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 16)",
    "options": [
      "SMTP (standard definition)",
      "FTP (File Transfer Protocol)",
      "SNMP (widely accepted)",
      "HTTP as per specification"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17)",
    "options": [
      "60",
      "30",
      "28",
      "32"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 18)",
    "options": [
      "DHCP under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DNS in typical implementations",
      "NAT under normal conditions"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 19)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 21)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 22)",
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
    "question": "DHCP stands for? (Set 23)",
    "options": [
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol",
      "Direct Host Configuration Port",
      "Distributed Host Control Protocol"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24)",
    "options": [
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25)",
    "options": [
      "Router",
      "Repeater",
      "Hub",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the Telnet service? (Set 27)",
    "options": [
      "22",
      "21",
      "25",
      "23"
    ],
    "answer": 3,
    "explanation": "Telnet standard port is 23."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 28)",
    "options": [
      "NAT under normal conditions",
      "DHCP under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DNS under normal conditions"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29)",
    "options": [
      "Application Layer in standard usage",
      "Session Layer (general case)",
      "Transport Layer (default behavior)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 30)",
    "options": [
      "Connecting different protocols (widely accepted)",
      "Encrypting network packets in standard usage",
      "Increasing network bandwidth (standard definition)",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 31)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 1,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32)",
    "options": [
      "8080",
      "443",
      "25",
      "80"
    ],
    "answer": 1,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 33)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34)",
    "options": [
      "25",
      "21",
      "23",
      "22"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35)",
    "options": [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36)",
    "options": [
      "22",
      "21",
      "80",
      "23"
    ],
    "answer": 2,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 37)",
    "options": [
      "124",
      "60",
      "62",
      "64"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38)",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39)",
    "options": [
      "Router",
      "Hub",
      "Repeater",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40)",
    "options": [
      "Switch",
      "Repeater",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 41)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 1,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 42)",
    "options": [
      "64",
      "62",
      "60",
      "124"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Physical Layer (widely accepted)",
      "Transport Layer by design",
      "Network Layer in most cases"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 44)",
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
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 45)",
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
    "question": "Which IP address structure is 128 bits long? (Set 46)",
    "options": [
      "IPv4",
      "Subnet Mask",
      "MAC Address",
      "IPv6"
    ],
    "answer": 3,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47)",
    "options": [
      "Transport Layer in standard usage",
      "Presentation Layer (Layer 6)",
      "Session Layer in practice",
      "Application Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48)",
    "options": [
      "FTP (File Transfer Protocol)",
      "SMTP in standard usage",
      "SNMP based on convention",
      "HTTP in typical implementations"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 49)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 50)",
    "options": [
      "Session Layer (default behavior)",
      "Transport Layer in standard usage",
      "Presentation Layer (Layer 6)",
      "Application Layer (commonly used)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51)",
    "options": [
      "Application Layer (commonly used)",
      "Session Layer (default behavior)",
      "Transport Layer in practice",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52)",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53)",
    "options": [
      "Encrypts network traffic (standard definition)",
      "Translates MAC to IP (typical scenario)",
      "Filters spam emails (standard definition)",
      "Translates private IP addresses to a public IP"
    ],
    "answer": 3,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 54)",
    "options": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 55)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Transport Layer in practice",
      "Physical Layer in most cases",
      "Network Layer (commonly used)"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 56)",
    "options": [
      "Heavyweight in standard usage",
      "Connectionless and unreliable",
      "Connection-oriented in practice",
      "Guaranteed delivery in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 8) (Set 57)",
    "options": [
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application"
    ],
    "answer": 1,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 58)",
    "options": [
      "28",
      "30",
      "60",
      "32"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented by design",
      "Guaranteed delivery by design",
      "Heavyweight in standard usage"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60)",
    "options": [
      "Session Layer by design",
      "Presentation Layer (Layer 6)",
      "Application Layer (widely accepted)",
      "Transport Layer based on convention"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 62)",
    "options": [
      "23",
      "21",
      "80",
      "22"
    ],
    "answer": 2,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63)",
    "options": [
      "80",
      "21",
      "22",
      "443"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64)",
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
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 65)",
    "options": [
      "Connection-oriented (commonly used)",
      "Guaranteed delivery (commonly used)",
      "Connectionless and unreliable",
      "Heavyweight (default behavior)"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 65) (Set 66)",
    "options": [
      "Guaranteed delivery in most cases",
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
    "question": "What is subnetting? (Set 67)",
    "options": [
      "Increasing network bandwidth (primary approach)",
      "Encrypting network packets based on convention",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (default behavior)"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 69)",
    "options": [
      "256",
      "252",
      "254",
      "508"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 70)",
    "options": [
      "DNS (Domain Name System)",
      "DHCP (standard definition)",
      "ARP in typical implementations",
      "FTP (widely accepted)"
    ],
    "answer": 0,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 71)",
    "options": [
      "443",
      "8080",
      "80",
      "25"
    ],
    "answer": 0,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 72)",
    "options": [
      "32",
      "28",
      "30",
      "60"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 73)",
    "options": [
      "Repeater",
      "Switch",
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
    "question": "HTTP works on which default port? (Set 63) (Set 74)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76)",
    "options": [
      "25",
      "21",
      "22",
      "23"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 50) (Set 77)",
    "options": [
      "Transport Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Application Layer in most cases",
      "Session Layer (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 54) (Set 78)",
    "options": [
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 73) (Set 79)",
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
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 80)",
    "options": [
      "IPv4",
      "Subnet Mask",
      "MAC Address",
      "IPv6"
    ],
    "answer": 3,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 81)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 82)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 83)",
    "options": [
      "Transport Layer (typical scenario)",
      "Session Layer based on convention",
      "Presentation Layer (Layer 6)",
      "Application Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 41) (Set 84)",
    "options": [
      "21",
      "23",
      "25",
      "22"
    ],
    "answer": 0,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer (general case)",
      "Application Layer (widely accepted)",
      "Session Layer in practice"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86)",
    "options": [
      "Session Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Application Layer in practice",
      "Transport Layer by design"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 65) (Set 87)",
    "options": [
      "Guaranteed delivery (general case)",
      "Connection-oriented (commonly used)",
      "Heavyweight under normal conditions",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 88)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /29. What is the maximum number of assignable host IP addresses on this subnet? (Set 89)",
    "options": [
      "6",
      "8",
      "4",
      "12"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /29, this equals 6 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 50) (Set 90)",
    "options": [
      "Application Layer in standard usage",
      "Presentation Layer (Layer 6)",
      "Session Layer (default behavior)",
      "Transport Layer (primary approach)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 92)",
    "options": [
      "60",
      "32",
      "30",
      "28"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 93)",
    "options": [
      "Application Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Transport Layer in practice",
      "Session Layer (general case)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 55) (Set 94)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Network Layer in practice",
      "Transport Layer by design",
      "Physical Layer in standard usage"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 95)",
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
    "question": "What is the primary method of error detection in TCP/IP? (Set 96)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 54) (Set 97)",
    "options": [
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98)",
    "options": [
      "Session Layer as per specification",
      "Transport Layer (general case)",
      "Application Layer (commonly used)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99)",
    "options": [
      "HTTP as per specification",
      "SMTP (standard definition)",
      "FTP (File Transfer Protocol)",
      "SNMP (typical scenario)"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 93) (Set 100)",
    "options": [
      "Application Layer by design",
      "Presentation Layer (Layer 6)",
      "Session Layer in standard usage",
      "Transport Layer (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 101)",
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
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48) (Set 102)",
    "options": [
      "FTP (File Transfer Protocol)",
      "SNMP under normal conditions",
      "SMTP (primary approach)",
      "HTTP (standard definition)"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103)",
    "options": [
      "Transport Layer based on convention",
      "Session Layer by design",
      "Application Layer in most cases",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 104)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer in standard usage",
      "Session Layer as per specification",
      "Application Layer (commonly used)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105)",
    "options": [
      "SMTP as per specification",
      "HTTP based on convention",
      "SNMP (default behavior)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 106)",
    "options": [
      "Connecting different protocols based on convention",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets under normal conditions",
      "Increasing network bandwidth as per specification"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107)",
    "options": [
      "Router",
      "Repeater",
      "Switch",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 50) (Set 108)",
    "options": [
      "Application Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Session Layer (typical scenario)",
      "Transport Layer (general case)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 109)",
    "options": [
      "Router",
      "Repeater",
      "Hub",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 110)",
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
    "question": "HTTPS uses which default port? (Set 32) (Set 111)",
    "options": [
      "25",
      "80",
      "443",
      "8080"
    ],
    "answer": 2,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 112)",
    "options": [
      "62",
      "124",
      "64",
      "60"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 113)",
    "options": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 114)",
    "options": [
      "Router",
      "Switch",
      "Repeater",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 115)",
    "options": [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48) (Set 116)",
    "options": [
      "HTTP in typical implementations",
      "SNMP based on convention",
      "SMTP (primary approach)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 65) (Set 87) (Set 117)",
    "options": [
      "Guaranteed delivery in most cases",
      "Connection-oriented (general case)",
      "Heavyweight (standard definition)",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 118)",
    "options": [
      "Retrieve IP addresses",
      "Transfer files",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119)",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 120)",
    "options": [
      "SNMP in standard usage",
      "SMTP (typical scenario)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 121)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 106) (Set 122)",
    "options": [
      "Increasing network bandwidth (general case)",
      "Encrypting network packets as per specification",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 123)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124)",
    "options": [
      "HTTP under normal conditions",
      "FTP (File Transfer Protocol)",
      "SNMP (primary approach)",
      "SMTP (widely accepted)"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 125)",
    "options": [
      "Application Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Session Layer (commonly used)",
      "Transport Layer in standard usage"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126)",
    "options": [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 55) (Set 127)",
    "options": [
      "Network Layer (typical scenario)",
      "Data Link Layer (Layer 2)",
      "Physical Layer (general case)",
      "Transport Layer in practice"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128)",
    "options": [
      "Repeater",
      "Router",
      "Hub",
      "Switch"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 45) (Set 129)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 62) (Set 130)",
    "options": [
      "23",
      "80",
      "21",
      "22"
    ],
    "answer": 1,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 131)",
    "options": [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 132)",
    "options": [
      "Transport Layer in practice",
      "Presentation Layer (Layer 6)",
      "Application Layer (widely accepted)",
      "Session Layer in practice"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133)",
    "options": [
      "255.0.0.0",
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134)",
    "options": [
      "25",
      "22",
      "21",
      "23"
    ],
    "answer": 1,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 7) (Set 135)",
    "options": [
      "68",
      "21",
      "23",
      "22"
    ],
    "answer": 0,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 58) (Set 136)",
    "options": [
      "32",
      "30",
      "60",
      "28"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 95) (Set 137)",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138)",
    "options": [
      "Router",
      "Switch",
      "Repeater",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 93) (Set 100) (Set 139)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer in practice",
      "Application Layer in most cases",
      "Session Layer in practice"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 140)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer (commonly used)",
      "Application Layer (widely accepted)",
      "Session Layer (general case)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 80) (Set 141)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 142)",
    "options": [
      "Application Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Session Layer (primary approach)",
      "Transport Layer (commonly used)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 143)",
    "options": [
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 145)",
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
    "question": "A standard network Switch operates at which OSI layer? (Set 146)",
    "options": [
      "Network Layer (commonly used)",
      "Transport Layer (general case)",
      "Physical Layer (general case)",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147)",
    "options": [
      "Router",
      "Repeater",
      "Hub",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64) (Set 148)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 149)",
    "options": [
      "62",
      "60",
      "64",
      "124"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 150)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Session Layer (general case)",
      "Application Layer (commonly used)",
      "Transport Layer (primary approach)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 151)",
    "options": [
      "Heavyweight in most cases",
      "Guaranteed delivery in practice",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152)",
    "options": [
      "Switch",
      "Hub",
      "Repeater",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 153)",
    "options": [
      "23",
      "68",
      "21",
      "22"
    ],
    "answer": 1,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 92) (Set 154)",
    "options": [
      "30",
      "60",
      "28",
      "32"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 16) (Set 155)",
    "options": [
      "HTTP (widely accepted)",
      "FTP (File Transfer Protocol)",
      "SMTP (default behavior)",
      "SNMP in standard usage"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 41) (Set 84) (Set 156)",
    "options": [
      "23",
      "25",
      "21",
      "22"
    ],
    "answer": 2,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 157)",
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
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 158)",
    "options": [
      "Router",
      "Switch",
      "Repeater",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 160)",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth in typical implementations",
      "Connecting different protocols in practice",
      "Encrypting network packets (typical scenario)"
    ],
    "answer": 0,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 161)",
    "options": [
      "SNMP as per specification",
      "FTP (File Transfer Protocol)",
      "SMTP in standard usage",
      "HTTP (widely accepted)"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 33) (Set 162)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 163)",
    "options": [
      "Repeater",
      "Router",
      "Hub",
      "Switch"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 164)",
    "options": [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165)",
    "options": [
      "Encrypts network traffic (general case)",
      "Filters spam emails under normal conditions",
      "Translates private IP addresses to a public IP",
      "Translates MAC to IP (standard definition)"
    ],
    "answer": 2,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 19) (Set 166)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 93) (Set 100) (Set 139) (Set 167)",
    "options": [
      "Application Layer in most cases",
      "Session Layer in most cases",
      "Transport Layer (typical scenario)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 125) (Set 168)",
    "options": [
      "Transport Layer (primary approach)",
      "Application Layer in standard usage",
      "Presentation Layer (Layer 6)",
      "Session Layer (primary approach)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 169)",
    "options": [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 71) (Set 170)",
    "options": [
      "443",
      "8080",
      "25",
      "80"
    ],
    "answer": 0,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 145) (Set 171)",
    "options": [
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172)",
    "options": [
      "Transport Layer (commonly used)",
      "Application Layer by design",
      "Presentation Layer (Layer 6)",
      "Session Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 173)",
    "options": [
      "Connectionless and unreliable",
      "Heavyweight (standard definition)",
      "Guaranteed delivery (general case)",
      "Connection-oriented in practice"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 174)",
    "options": [
      "MAC addresses in typical implementations",
      "Sliding window in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start",
      "Checksums in typical implementations"
    ],
    "answer": 2,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 175)",
    "options": [
      "Transport Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Physical Layer in most cases",
      "Network Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 83) (Set 176)",
    "options": [
      "Application Layer (commonly used)",
      "Session Layer (typical scenario)",
      "Presentation Layer (Layer 6)",
      "Transport Layer in most cases"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 177)",
    "options": [
      "21",
      "22",
      "23",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 178)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer (typical scenario)",
      "Application Layer in practice",
      "Session Layer in most cases"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 179)",
    "options": [
      "Router",
      "Hub",
      "Repeater",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 180)",
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
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 21) (Set 181)",
    "options": [
      "Sliding window in typical implementations",
      "MAC addresses in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start",
      "Checksums in typical implementations"
    ],
    "answer": 2,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 182)",
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
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 183)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 184)",
    "options": [
      "16",
      "14",
      "28",
      "12"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 158) (Set 185)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133) (Set 186)",
    "options": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.255",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 93) (Set 100) (Set 139) (Set 187)",
    "options": [
      "Session Layer (default behavior)",
      "Transport Layer (commonly used)",
      "Application Layer in standard usage",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 188)",
    "options": [
      "60",
      "30",
      "32",
      "28"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 189)",
    "options": [
      "Guaranteed delivery in most cases",
      "Connectionless and unreliable",
      "Connection-oriented by design",
      "Heavyweight (typical scenario)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172) (Set 190)",
    "options": [
      "Session Layer based on convention",
      "Presentation Layer (Layer 6)",
      "Transport Layer (primary approach)",
      "Application Layer by design"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 191)",
    "options": [
      "Switch",
      "Router",
      "Repeater",
      "Hub"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 41) (Set 192)",
    "options": [
      "23",
      "22",
      "25",
      "21"
    ],
    "answer": 3,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 143) (Set 193)",
    "options": [
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link"
    ],
    "answer": 2,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 95) (Set 194)",
    "options": [
      "443",
      "21",
      "80",
      "22"
    ],
    "answer": 2,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 19) (Set 166) (Set 195)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196)",
    "options": [
      "Encrypts network traffic (general case)",
      "Filters spam emails under normal conditions",
      "Translates MAC to IP in typical implementations",
      "Translates private IP addresses to a public IP"
    ],
    "answer": 3,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 197)",
    "options": [
      "Transport Layer (commonly used)",
      "Data Link Layer (Layer 2)",
      "Network Layer by design",
      "Physical Layer (commonly used)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 199)",
    "options": [
      "28",
      "30",
      "32",
      "60"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 121) (Set 200)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201)",
    "options": [
      "Switch",
      "Hub",
      "Repeater",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202)",
    "options": [
      "25",
      "23",
      "22",
      "21"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 92) (Set 154) (Set 203)",
    "options": [
      "30",
      "28",
      "32",
      "60"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 204)",
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
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 96) (Set 205)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 206)",
    "options": [
      "30",
      "28",
      "60",
      "32"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 207)",
    "options": [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 96) (Set 205) (Set 208)",
    "options": [
      "CRC only",
      "Checksum",
      "Hamming code",
      "Parity bit"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133) (Set 186) (Set 209)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 121) (Set 210)",
    "options": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.255",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 145) (Set 211)",
    "options": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212)",
    "options": [
      "25",
      "21",
      "22",
      "23"
    ],
    "answer": 2,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 0,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 73) (Set 79) (Set 214)",
    "options": [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 215)",
    "options": [
      "64",
      "124",
      "62",
      "60"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 216)",
    "options": [
      "Increasing network bandwidth (commonly used)",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols under normal conditions",
      "Encrypting network packets (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 88) (Set 217)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 218)",
    "options": [
      "Transport Layer (general case)",
      "Session Layer in practice",
      "Presentation Layer (Layer 6)",
      "Application Layer (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91) (Set 219)",
    "options": [
      "22",
      "80",
      "443",
      "21"
    ],
    "answer": 1,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 220)",
    "options": [
      "22",
      "443",
      "21",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64) (Set 148) (Set 221)",
    "options": [
      "Congestion window sizing",
      "Sliding window mechanism",
      "Timeout retransmission only",
      "Three-way handshake"
    ],
    "answer": 1,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 222)",
    "options": [
      "32",
      "28",
      "60",
      "30"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48) (Set 102) (Set 223)",
    "options": [
      "HTTP based on convention",
      "FTP (File Transfer Protocol)",
      "SMTP as per specification",
      "SNMP based on convention"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 112) (Set 224)",
    "options": [
      "60",
      "62",
      "64",
      "124"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 225)",
    "options": [
      "Guaranteed delivery in practice",
      "Heavyweight in standard usage",
      "Connectionless and unreliable",
      "Connection-oriented (commonly used)"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 114) (Set 226)",
    "options": [
      "Router",
      "Repeater",
      "Switch",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 227)",
    "options": [
      "Transport Layer in most cases",
      "Data Link Layer (Layer 2)",
      "Network Layer (primary approach)",
      "Physical Layer (general case)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 228)",
    "options": [
      "508",
      "256",
      "254",
      "252"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 229)",
    "options": [
      "Transport Layer in practice",
      "Session Layer in practice",
      "Application Layer (widely accepted)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 230)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Session Layer (typical scenario)",
      "Transport Layer in practice",
      "Application Layer in standard usage"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231)",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets (typical scenario)",
      "Increasing network bandwidth under normal conditions",
      "Connecting different protocols as per specification"
    ],
    "answer": 0,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 56) (Set 232)",
    "options": [
      "Guaranteed delivery (general case)",
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
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 220) (Set 233)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 234)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 235)",
    "options": [
      "Repeater",
      "Router",
      "Hub",
      "Switch"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /29. What is the maximum number of assignable host IP addresses on this subnet? (Set 89) (Set 236)",
    "options": [
      "12",
      "4",
      "8",
      "6"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /29, this equals 6 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 8) (Set 237)",
    "options": [
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application"
    ],
    "answer": 3,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 238)",
    "options": [
      "22",
      "25",
      "23",
      "21"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /25. What is the maximum number of assignable host IP addresses on this subnet? (Set 239)",
    "options": [
      "128",
      "126",
      "252",
      "124"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /25, this equals 126 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 11) (Set 240)",
    "options": [
      "60",
      "64",
      "62",
      "124"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 241)",
    "options": [
      "Hub",
      "Switch",
      "Repeater",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 115) (Set 242)",
    "options": [
      "Router",
      "Repeater",
      "Switch",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 243)",
    "options": [
      "Application Layer (widely accepted)",
      "Session Layer by design",
      "Transport Layer in practice",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 206) (Set 244)",
    "options": [
      "60",
      "30",
      "32",
      "28"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 245)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Transport Layer in most cases",
      "Network Layer (default behavior)",
      "Physical Layer in practice"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 246)",
    "options": [
      "SNMP under normal conditions",
      "HTTP (typical scenario)",
      "FTP (File Transfer Protocol)",
      "SMTP in typical implementations"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 247)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer in practice",
      "Session Layer (primary approach)",
      "Transport Layer in practice"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 248)",
    "options": [
      "21",
      "80",
      "23",
      "22"
    ],
    "answer": 1,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 249)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 41) (Set 84) (Set 250)",
    "options": [
      "21",
      "22",
      "23",
      "25"
    ],
    "answer": 0,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 54) (Set 78) (Set 251)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 169) (Set 252)",
    "options": [
      "Router",
      "Switch",
      "Hub",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 177) (Set 253)",
    "options": [
      "23",
      "80",
      "22",
      "21"
    ],
    "answer": 1,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 58) (Set 136) (Set 254)",
    "options": [
      "32",
      "60",
      "28",
      "30"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 255)",
    "options": [
      "Repeater",
      "Hub",
      "Router",
      "Switch"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 256)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 177) (Set 257)",
    "options": [
      "23",
      "80",
      "21",
      "22"
    ],
    "answer": 1,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 258)",
    "options": [
      "FTP (File Transfer Protocol)",
      "SNMP (primary approach)",
      "SMTP (typical scenario)",
      "HTTP (standard definition)"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 82) (Set 259)",
    "options": [
      "Distributed Host Control Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol"
    ],
    "answer": 3,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 260)",
    "options": [
      "25",
      "23",
      "22",
      "21"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 228) (Set 261)",
    "options": [
      "252",
      "256",
      "254",
      "508"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 262)",
    "options": [
      "Router",
      "Hub",
      "Repeater",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 263)",
    "options": [
      "Distributed Host Control Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol"
    ],
    "answer": 3,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172) (Set 264)",
    "options": [
      "Transport Layer in most cases",
      "Application Layer (commonly used)",
      "Session Layer (widely accepted)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 265)",
    "options": [
      "Network Layer by design",
      "Data Link Layer (Layer 2)",
      "Physical Layer (commonly used)",
      "Transport Layer in practice"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 266)",
    "options": [
      "DNS (Domain Name System)",
      "DHCP as per specification",
      "FTP as per specification",
      "ARP (commonly used)"
    ],
    "answer": 0,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 215) (Set 267)",
    "options": [
      "62",
      "124",
      "60",
      "64"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 73) (Set 79) (Set 268)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 230) (Set 269)",
    "options": [
      "Session Layer (widely accepted)",
      "Transport Layer in most cases",
      "Application Layer (general case)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 96) (Set 270)",
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
    "question": "HTTP works on which default port? (Set 68) (Set 95) (Set 137) (Set 271)",
    "options": [
      "21",
      "443",
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
    "question": "What is subnetting? (Set 2) (Set 272)",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth in most cases",
      "Connecting different protocols in most cases",
      "Encrypting network packets (commonly used)"
    ],
    "answer": 0,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 273)",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 114) (Set 226) (Set 274)",
    "options": [
      "Repeater",
      "Switch",
      "Router",
      "Hub"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 42) (Set 275)",
    "options": [
      "62",
      "60",
      "64",
      "124"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 276)",
    "options": [
      "23",
      "25",
      "22",
      "21"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 115) (Set 277)",
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
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48) (Set 278)",
    "options": [
      "SMTP under normal conditions",
      "HTTP (standard definition)",
      "SNMP (default behavior)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91) (Set 279)",
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
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 93) (Set 100) (Set 139) (Set 167) (Set 280)",
    "options": [
      "Transport Layer (default behavior)",
      "Application Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Session Layer (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 174) (Set 281)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 282)",
    "options": [
      "Connectionless and unreliable",
      "Heavyweight under normal conditions",
      "Guaranteed delivery (commonly used)",
      "Connection-oriented in practice"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 173) (Set 283)",
    "options": [
      "Heavyweight (default behavior)",
      "Connection-oriented in most cases",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /25. What is the maximum number of assignable host IP addresses on this subnet? (Set 284)",
    "options": [
      "126",
      "124",
      "252",
      "128"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /25, this equals 126 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 285)",
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
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 286)",
    "options": [
      "Transport Layer (typical scenario)",
      "Application Layer (widely accepted)",
      "Presentation Layer (Layer 6)",
      "Session Layer in most cases"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 287)",
    "options": [
      "25",
      "22",
      "23",
      "21"
    ],
    "answer": 1,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 288)",
    "options": [
      "Translates MAC to IP (typical scenario)",
      "Translates private IP addresses to a public IP",
      "Encrypts network traffic under normal conditions",
      "Filters spam emails (standard definition)"
    ],
    "answer": 1,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 260) (Set 289)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 290)",
    "options": [
      "16",
      "12",
      "28",
      "14"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133) (Set 291)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
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
    "question": "HTTP works on which default port? (Set 157) (Set 292)",
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
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 83) (Set 293)",
    "options": [
      "Transport Layer in standard usage",
      "Session Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Application Layer (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 294)",
    "options": [
      "256",
      "508",
      "254",
      "252"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 173) (Set 283) (Set 295)",
    "options": [
      "Heavyweight as per specification",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice",
      "Connection-oriented in practice"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 216) (Set 296)",
    "options": [
      "Connecting different protocols as per specification",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets (widely accepted)",
      "Increasing network bandwidth (standard definition)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 175) (Set 297)",
    "options": [
      "Physical Layer (widely accepted)",
      "Transport Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Network Layer (default behavior)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 298)",
    "options": [
      "14",
      "28",
      "16",
      "12"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 121) (Set 200) (Set 299)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 112) (Set 300)",
    "options": [
      "124",
      "62",
      "60",
      "64"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172) (Set 264) (Set 301)",
    "options": [
      "Application Layer in practice",
      "Session Layer (typical scenario)",
      "Transport Layer in most cases",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 21) (Set 181) (Set 302)",
    "options": [
      "Congestion window (cwnd) and algorithms like Slow Start",
      "Checksums in typical implementations",
      "Sliding window in typical implementations",
      "MAC addresses in typical implementations"
    ],
    "answer": 0,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 62) (Set 303)",
    "options": [
      "80",
      "23",
      "22",
      "21"
    ],
    "answer": 0,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 304)",
    "options": [
      "Router",
      "Repeater",
      "Hub",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 305)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Encrypts network traffic (typical scenario)",
      "Filters spam emails based on convention",
      "Translates MAC to IP (standard definition)"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 306)",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255",
      "255.255.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 307)",
    "options": [
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Physical, Data Link, Network, Session, Transport, Presentation, Application"
    ],
    "answer": 2,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 308)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 309)",
    "options": [
      "255.0.0.0",
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64) (Set 310)",
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
    "question": "SMTP is used to? (Set 33) (Set 162) (Set 311)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 62) (Set 130) (Set 312)",
    "options": [
      "21",
      "23",
      "80",
      "22"
    ],
    "answer": 2,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 313)",
    "options": [
      "23",
      "22",
      "68",
      "21"
    ],
    "answer": 2,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64) (Set 314)",
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
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 315)",
    "options": [
      "HTTP as per specification",
      "SMTP based on convention",
      "SNMP (default behavior)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 316)",
    "options": [
      "Heavyweight in practice",
      "Connectionless and unreliable",
      "Guaranteed delivery (commonly used)",
      "Connection-oriented (commonly used)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 183) (Set 317)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91) (Set 219) (Set 318)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 319)",
    "options": [
      "255.255.255.255",
      "255.0.0.0",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 179) (Set 320)",
    "options": [
      "Repeater",
      "Switch",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 276) (Set 321)",
    "options": [
      "25",
      "23",
      "22",
      "21"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 255) (Set 322)",
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
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48) (Set 116) (Set 323)",
    "options": [
      "FTP (File Transfer Protocol)",
      "HTTP in standard usage",
      "SNMP under normal conditions",
      "SMTP under normal conditions"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 153) (Set 324)",
    "options": [
      "68",
      "23",
      "22",
      "21"
    ],
    "answer": 0,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 325)",
    "options": [
      "Application Layer in standard usage",
      "Session Layer in most cases",
      "Transport Layer in practice",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 145) (Set 211) (Set 326)",
    "options": [
      "255.255.255.255",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 11) (Set 327)",
    "options": [
      "64",
      "62",
      "60",
      "124"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 80) (Set 141) (Set 328)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 62) (Set 130) (Set 329)",
    "options": [
      "22",
      "23",
      "21",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 330)",
    "options": [
      "23",
      "21",
      "68",
      "22"
    ],
    "answer": 2,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 153) (Set 324) (Set 331)",
    "options": [
      "23",
      "68",
      "21",
      "22"
    ],
    "answer": 1,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 332)",
    "options": [
      "FTP (File Transfer Protocol)",
      "SMTP (widely accepted)",
      "SNMP (standard definition)",
      "HTTP (default behavior)"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 245) (Set 333)",
    "options": [
      "Physical Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Network Layer (typical scenario)",
      "Transport Layer (commonly used)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 334)",
    "options": [
      "Checksums in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start",
      "MAC addresses in typical implementations",
      "Sliding window in typical implementations"
    ],
    "answer": 1,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 335)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 336)",
    "options": [
      "255.255.255.255",
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337)",
    "options": [
      "SNMP (default behavior)",
      "FTP (File Transfer Protocol)",
      "HTTP (default behavior)",
      "SMTP in typical implementations"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 197) (Set 338)",
    "options": [
      "Physical Layer (widely accepted)",
      "Transport Layer (commonly used)",
      "Data Link Layer (Layer 2)",
      "Network Layer (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 339)",
    "options": [
      "Encrypts network traffic in typical implementations",
      "Translates MAC to IP as per specification",
      "Translates private IP addresses to a public IP",
      "Filters spam emails based on convention"
    ],
    "answer": 2,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTPS service? (Set 340)",
    "options": [
      "21",
      "23",
      "22",
      "443"
    ],
    "answer": 3,
    "explanation": "HTTPS standard port is 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 83) (Set 341)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Session Layer (typical scenario)",
      "Transport Layer based on convention",
      "Application Layer (commonly used)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 80) (Set 141) (Set 328) (Set 342)",
    "options": [
      "MAC Address",
      "IPv4",
      "Subnet Mask",
      "IPv6"
    ],
    "answer": 3,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 343)",
    "options": [
      "Router",
      "Hub",
      "Repeater",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 344)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 33) (Set 345)",
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
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 273) (Set 346)",
    "options": [
      "255.255.255.255",
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 347)",
    "options": [
      "HTTP (typical scenario)",
      "FTP (File Transfer Protocol)",
      "SMTP (typical scenario)",
      "SNMP (primary approach)"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 216) (Set 348)",
    "options": [
      "Increasing network bandwidth (commonly used)",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (default behavior)",
      "Encrypting network packets (commonly used)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 349)",
    "options": [
      "SNMP under normal conditions",
      "SMTP in typical implementations",
      "FTP (File Transfer Protocol)",
      "HTTP as per specification"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 350)",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 351)",
    "options": [
      "Connecting different protocols (typical scenario)",
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth as per specification",
      "Encrypting network packets in standard usage"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 71) (Set 170) (Set 352)",
    "options": [
      "25",
      "8080",
      "80",
      "443"
    ],
    "answer": 3,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 163) (Set 353)",
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
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 332) (Set 354)",
    "options": [
      "SMTP (default behavior)",
      "SNMP based on convention",
      "FTP (File Transfer Protocol)",
      "HTTP (typical scenario)"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 355)",
    "options": [
      "Connecting different protocols in most cases",
      "Encrypting network packets in typical implementations",
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth in standard usage"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 111) (Set 356)",
    "options": [
      "80",
      "8080",
      "443",
      "25"
    ],
    "answer": 2,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 215) (Set 357)",
    "options": [
      "62",
      "60",
      "64",
      "124"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 276) (Set 358)",
    "options": [
      "22",
      "21",
      "25",
      "23"
    ],
    "answer": 2,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 359)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 360)",
    "options": [
      "Transport Layer (general case)",
      "Data Link Layer (Layer 2)",
      "Physical Layer in most cases",
      "Network Layer (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 115) (Set 242) (Set 361)",
    "options": [
      "Router",
      "Switch",
      "Hub",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 336) (Set 362)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133) (Set 186) (Set 363)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 255) (Set 322) (Set 364)",
    "options": [
      "Repeater",
      "Hub",
      "Router",
      "Switch"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 365)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 298) (Set 366)",
    "options": [
      "12",
      "28",
      "16",
      "14"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 145) (Set 171) (Set 367)",
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
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 368)",
    "options": [
      "SNMP (default behavior)",
      "FTP (File Transfer Protocol)",
      "SMTP under normal conditions",
      "HTTP based on convention"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 369)",
    "options": [
      "Session Layer in practice",
      "Transport Layer by design",
      "Presentation Layer (Layer 6)",
      "Application Layer by design"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 370)",
    "options": [
      "Connectionless and unreliable",
      "Guaranteed delivery (general case)",
      "Connection-oriented by design",
      "Heavyweight (general case)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 169) (Set 371)",
    "options": [
      "Switch",
      "Router",
      "Repeater",
      "Hub"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 96) (Set 372)",
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
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 373)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the IMAP service? (Set 374)",
    "options": [
      "23",
      "22",
      "21",
      "143"
    ],
    "answer": 3,
    "explanation": "IMAP standard port is 143."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 375)",
    "options": [
      "508",
      "252",
      "256",
      "254"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 238) (Set 376)",
    "options": [
      "22",
      "25",
      "21",
      "23"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 229) (Set 377)",
    "options": [
      "Application Layer by design",
      "Transport Layer in most cases",
      "Presentation Layer (Layer 6)",
      "Session Layer by design"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 378)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172) (Set 379)",
    "options": [
      "Session Layer (general case)",
      "Application Layer (general case)",
      "Transport Layer (commonly used)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 70) (Set 380)",
    "options": [
      "DHCP (default behavior)",
      "ARP (widely accepted)",
      "DNS (Domain Name System)",
      "FTP (widely accepted)"
    ],
    "answer": 2,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 381)",
    "options": [
      "443",
      "25",
      "8080",
      "80"
    ],
    "answer": 0,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 308) (Set 382)",
    "options": [
      "Hamming code",
      "Checksum",
      "CRC only",
      "Parity bit"
    ],
    "answer": 1,
    "explanation": "TCP and UDP header fields include a checksum."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91) (Set 219) (Set 318) (Set 383)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 384)",
    "options": [
      "SNMP (primary approach)",
      "SMTP (widely accepted)",
      "FTP (File Transfer Protocol)",
      "HTTP in typical implementations"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 304) (Set 385)",
    "options": [
      "Hub",
      "Switch",
      "Router",
      "Repeater"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /29. What is the maximum number of assignable host IP addresses on this subnet? (Set 89) (Set 236) (Set 386)",
    "options": [
      "4",
      "12",
      "8",
      "6"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /29, this equals 6 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91) (Set 219) (Set 387)",
    "options": [
      "22",
      "80",
      "443",
      "21"
    ],
    "answer": 1,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 256) (Set 388)",
    "options": [
      "255.255.255.255",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 174) (Set 389)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 158) (Set 185) (Set 390)",
    "options": [
      "Hub",
      "Switch",
      "Repeater",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 375) (Set 391)",
    "options": [
      "508",
      "252",
      "256",
      "254"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 392)",
    "options": [
      "Heavyweight (primary approach)",
      "Connectionless and unreliable",
      "Connection-oriented by design",
      "Guaranteed delivery (general case)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133) (Set 186) (Set 363) (Set 393)",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255",
      "255.255.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 368) (Set 394)",
    "options": [
      "FTP (File Transfer Protocol)",
      "HTTP under normal conditions",
      "SNMP as per specification",
      "SMTP in standard usage"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 104) (Set 395)",
    "options": [
      "Session Layer (primary approach)",
      "Transport Layer in practice",
      "Application Layer in practice",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 273) (Set 396)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 81) (Set 397)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398)",
    "options": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 360) (Set 399)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Transport Layer (commonly used)",
      "Physical Layer by design",
      "Network Layer (general case)"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48) (Set 116) (Set 323) (Set 400)",
    "options": [
      "FTP (File Transfer Protocol)",
      "SMTP based on convention",
      "HTTP (default behavior)",
      "SNMP (typical scenario)"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 174) (Set 401)",
    "options": [
      "Checksums in typical implementations",
      "Sliding window in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start",
      "MAC addresses in typical implementations"
    ],
    "answer": 2,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 349) (Set 402)",
    "options": [
      "FTP (File Transfer Protocol)",
      "HTTP (primary approach)",
      "SNMP (standard definition)",
      "SMTP (widely accepted)"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 403)",
    "options": [
      "22",
      "23",
      "25",
      "21"
    ],
    "answer": 2,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 309) (Set 404)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /29. What is the maximum number of assignable host IP addresses on this subnet? (Set 89) (Set 236) (Set 405)",
    "options": [
      "4",
      "6",
      "12",
      "8"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /29, this equals 6 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 142) (Set 406)",
    "options": [
      "Session Layer based on convention",
      "Transport Layer (widely accepted)",
      "Application Layer by design",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 93) (Set 100) (Set 407)",
    "options": [
      "Transport Layer in standard usage",
      "Presentation Layer (Layer 6)",
      "Session Layer as per specification",
      "Application Layer (general case)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408)",
    "options": [
      "25",
      "21",
      "23",
      "22"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 96) (Set 205) (Set 208) (Set 409)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 16) (Set 410)",
    "options": [
      "SMTP (default behavior)",
      "HTTP (widely accepted)",
      "SNMP (standard definition)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 175) (Set 297) (Set 411)",
    "options": [
      "Transport Layer in most cases",
      "Network Layer in standard usage",
      "Physical Layer (commonly used)",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 256) (Set 412)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 33) (Set 413)",
    "options": [
      "Retrieve emails",
      "Retrieve IP addresses",
      "Transfer files",
      "Send emails"
    ],
    "answer": 3,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 414)",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255",
      "255.255.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 336) (Set 362) (Set 415)",
    "options": [
      "255.255.255.255",
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 416)",
    "options": [
      "21",
      "22",
      "25",
      "23"
    ],
    "answer": 1,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 304) (Set 417)",
    "options": [
      "Switch",
      "Hub",
      "Router",
      "Repeater"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 419)",
    "options": [
      "25",
      "22",
      "23",
      "21"
    ],
    "answer": 1,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 109) (Set 420)",
    "options": [
      "Router",
      "Switch",
      "Repeater",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 71) (Set 170) (Set 352) (Set 421)",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 422)",
    "options": [
      "Switch",
      "Router",
      "Repeater",
      "Hub"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 423)",
    "options": [
      "Transport Layer in most cases",
      "Application Layer in standard usage",
      "Presentation Layer (Layer 6)",
      "Session Layer (typical scenario)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 81) (Set 397) (Set 424)",
    "options": [
      "80",
      "21",
      "22",
      "443"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 225) (Set 425)",
    "options": [
      "Guaranteed delivery by design",
      "Connection-oriented by design",
      "Connectionless and unreliable",
      "Heavyweight (standard definition)"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 426)",
    "options": [
      "25",
      "21",
      "22",
      "23"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 80) (Set 141) (Set 427)",
    "options": [
      "MAC Address",
      "IPv4",
      "Subnet Mask",
      "IPv6"
    ],
    "answer": 3,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 142) (Set 428)",
    "options": [
      "Transport Layer (general case)",
      "Application Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Session Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 246) (Set 429)",
    "options": [
      "SNMP in typical implementations",
      "SMTP (standard definition)",
      "HTTP under normal conditions",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 347) (Set 430)",
    "options": [
      "SMTP in standard usage",
      "HTTP as per specification",
      "FTP (File Transfer Protocol)",
      "SNMP (typical scenario)"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 431)",
    "options": [
      "22",
      "23",
      "68",
      "21"
    ],
    "answer": 2,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 158) (Set 432)",
    "options": [
      "Hub",
      "Repeater",
      "Router",
      "Switch"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 273) (Set 433)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 434)",
    "options": [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 149) (Set 435)",
    "options": [
      "124",
      "60",
      "62",
      "64"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 375) (Set 436)",
    "options": [
      "252",
      "256",
      "254",
      "508"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 437)",
    "options": [
      "Transport Layer (widely accepted)",
      "Presentation Layer (Layer 6)",
      "Application Layer in standard usage",
      "Session Layer based on convention"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 351) (Set 438)",
    "options": [
      "Increasing network bandwidth as per specification",
      "Connecting different protocols as per specification",
      "Encrypting network packets in standard usage",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 142) (Set 439)",
    "options": [
      "Transport Layer (primary approach)",
      "Session Layer (widely accepted)",
      "Presentation Layer (Layer 6)",
      "Application Layer (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the IMAP service? (Set 374) (Set 440)",
    "options": [
      "22",
      "143",
      "21",
      "23"
    ],
    "answer": 1,
    "explanation": "IMAP standard port is 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 305) (Set 441)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Filters spam emails under normal conditions",
      "Translates MAC to IP in typical implementations",
      "Encrypts network traffic (widely accepted)"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 7) (Set 135) (Set 442)",
    "options": [
      "23",
      "68",
      "21",
      "22"
    ],
    "answer": 1,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 381) (Set 443)",
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
    "question": "HTTP works on which default port? (Set 26) (Set 444)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 256) (Set 445)",
    "options": [
      "255.255.255.0",
      "255.255.255.255",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 446)",
    "options": [
      "Hub",
      "Repeater",
      "Router",
      "Switch"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 83) (Set 293) (Set 447)",
    "options": [
      "Application Layer by design",
      "Transport Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Session Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 423) (Set 448)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Session Layer in standard usage",
      "Transport Layer in standard usage",
      "Application Layer in standard usage"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 449)",
    "options": [
      "Connecting different protocols (general case)",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets based on convention",
      "Increasing network bandwidth (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 112) (Set 224) (Set 450)",
    "options": [
      "62",
      "60",
      "64",
      "124"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 55) (Set 94) (Set 451)",
    "options": [
      "Transport Layer (general case)",
      "Network Layer (primary approach)",
      "Physical Layer (widely accepted)",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 21) (Set 181) (Set 452)",
    "options": [
      "Checksums in typical implementations",
      "Congestion window (cwnd) and algorithms like Slow Start",
      "MAC addresses in typical implementations",
      "Sliding window in typical implementations"
    ],
    "answer": 1,
    "explanation": "Prevents network congestion by scaling down output when drops occur."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 260) (Set 453)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 454)",
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
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 365) (Set 455)",
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
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 315) (Set 456)",
    "options": [
      "HTTP (widely accepted)",
      "SNMP as per specification",
      "FTP (File Transfer Protocol)",
      "SMTP (standard definition)"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 163) (Set 457)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 243) (Set 458)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer in practice",
      "Application Layer in practice",
      "Session Layer (primary approach)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 164) (Set 459)",
    "options": [
      "Hub",
      "Router",
      "Switch",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 460)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 92) (Set 154) (Set 461)",
    "options": [
      "60",
      "30",
      "28",
      "32"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 255) (Set 462)",
    "options": [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 18) (Set 463)",
    "options": [
      "DNS in typical implementations",
      "ARP (Address Resolution Protocol)",
      "DHCP under normal conditions",
      "NAT in typical implementations"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 227) (Set 464)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Network Layer in standard usage",
      "Physical Layer (widely accepted)",
      "Transport Layer (commonly used)"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 315) (Set 465)",
    "options": [
      "SNMP in typical implementations",
      "SMTP (widely accepted)",
      "FTP (File Transfer Protocol)",
      "HTTP in standard usage"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 414) (Set 466)",
    "options": [
      "255.255.255.255",
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 414) (Set 466) (Set 467)",
    "options": [
      "255.255.255.0",
      "255.255.255.255",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 204) (Set 468)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 73) (Set 79) (Set 469)",
    "options": [
      "Switch",
      "Repeater",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 470)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the Telnet service? (Set 471)",
    "options": [
      "21",
      "25",
      "23",
      "22"
    ],
    "answer": 2,
    "explanation": "Telnet standard port is 23."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 472)",
    "options": [
      "124",
      "62",
      "60",
      "64"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 304) (Set 473)",
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
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 183) (Set 474)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 475)",
    "options": [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 16) (Set 155) (Set 476)",
    "options": [
      "HTTP (widely accepted)",
      "SMTP (typical scenario)",
      "FTP (File Transfer Protocol)",
      "SNMP under normal conditions"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 454) (Set 477)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 256) (Set 388) (Set 478)",
    "options": [
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 115) (Set 242) (Set 479)",
    "options": [
      "Repeater",
      "Switch",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48) (Set 102) (Set 480)",
    "options": [
      "FTP (File Transfer Protocol)",
      "HTTP (primary approach)",
      "SNMP (typical scenario)",
      "SMTP (primary approach)"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 158) (Set 432) (Set 481)",
    "options": [
      "Repeater",
      "Hub",
      "Router",
      "Switch"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 305) (Set 482)",
    "options": [
      "Encrypts network traffic (primary approach)",
      "Filters spam emails in typical implementations",
      "Translates private IP addresses to a public IP",
      "Translates MAC to IP (primary approach)"
    ],
    "answer": 2,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 245) (Set 333) (Set 483)",
    "options": [
      "Physical Layer in practice",
      "Network Layer in standard usage",
      "Transport Layer (general case)",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 143) (Set 193) (Set 484)",
    "options": [
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link",
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application"
    ],
    "answer": 0,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 153) (Set 324) (Set 485)",
    "options": [
      "23",
      "68",
      "21",
      "22"
    ],
    "answer": 1,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 65) (Set 87) (Set 117) (Set 486)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented in most cases",
      "Guaranteed delivery (general case)",
      "Heavyweight as per specification"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 487)",
    "options": [
      "Hub",
      "Repeater",
      "Router",
      "Switch"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 115) (Set 277) (Set 488)",
    "options": [
      "Switch",
      "Hub",
      "Repeater",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 489)",
    "options": [
      "SMTP as per specification",
      "SNMP as per specification",
      "HTTP (widely accepted)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 215) (Set 357) (Set 490)",
    "options": [
      "64",
      "62",
      "60",
      "124"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 454) (Set 477) (Set 491)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 492)",
    "options": [
      "21",
      "23",
      "25",
      "22"
    ],
    "answer": 2,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 112) (Set 224) (Set 450) (Set 493)",
    "options": [
      "62",
      "60",
      "124",
      "64"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 174) (Set 281) (Set 494)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 378) (Set 495)",
    "options": [
      "23",
      "21",
      "22",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 73) (Set 79) (Set 268) (Set 496)",
    "options": [
      "Router",
      "Repeater",
      "Hub",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 177) (Set 257) (Set 497)",
    "options": [
      "22",
      "23",
      "80",
      "21"
    ],
    "answer": 2,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 492) (Set 498)",
    "options": [
      "22",
      "23",
      "21",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 499)",
    "options": [
      "Encrypting network packets (standard definition)",
      "Connecting different protocols in most cases",
      "Increasing network bandwidth under normal conditions",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 500)",
    "options": [
      "Session Layer (typical scenario)",
      "Application Layer in practice",
      "Presentation Layer (Layer 6)",
      "Transport Layer by design"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 501)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 132) (Set 502)",
    "options": [
      "Transport Layer by design",
      "Presentation Layer (Layer 6)",
      "Application Layer by design",
      "Session Layer as per specification"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 82) (Set 503)",
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
    "question": "A standard network Switch operates at which OSI layer? (Set 175) (Set 297) (Set 411) (Set 504)",
    "options": [
      "Network Layer (default behavior)",
      "Data Link Layer (Layer 2)",
      "Transport Layer (commonly used)",
      "Physical Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 80) (Set 141) (Set 328) (Set 342) (Set 505)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 349) (Set 506)",
    "options": [
      "SNMP (standard definition)",
      "FTP (File Transfer Protocol)",
      "HTTP (default behavior)",
      "SMTP (primary approach)"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 243) (Set 507)",
    "options": [
      "Application Layer in standard usage",
      "Transport Layer in most cases",
      "Session Layer (widely accepted)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 472) (Set 508)",
    "options": [
      "64",
      "124",
      "60",
      "62"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 182) (Set 509)",
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
    "question": "What is subnetting? (Set 2) (Set 106) (Set 122) (Set 510)",
    "options": [
      "Connecting different protocols based on convention",
      "Increasing network bandwidth under normal conditions",
      "Encrypting network packets under normal conditions",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 62) (Set 130) (Set 312) (Set 511)",
    "options": [
      "80",
      "22",
      "23",
      "21"
    ],
    "answer": 0,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 207) (Set 512)",
    "options": [
      "Switch",
      "Repeater",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 513)",
    "options": [
      "Repeater",
      "Router",
      "Hub",
      "Switch"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418) (Set 514)",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255",
      "255.255.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 431) (Set 515)",
    "options": [
      "23",
      "21",
      "22",
      "68"
    ],
    "answer": 3,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 184) (Set 516)",
    "options": [
      "16",
      "12",
      "14",
      "28"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 517)",
    "options": [
      "Hub",
      "Router",
      "Switch",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 518)",
    "options": [
      "Application Layer in standard usage",
      "Session Layer (default behavior)",
      "Transport Layer (primary approach)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 132) (Set 519)",
    "options": [
      "Session Layer (widely accepted)",
      "Application Layer by design",
      "Transport Layer in standard usage",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 520)",
    "options": [
      "21",
      "22",
      "25",
      "23"
    ],
    "answer": 2,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64) (Set 310) (Set 521)",
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
    "question": "HTTP works on which default port? (Set 63) (Set 81) (Set 397) (Set 522)",
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
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 96) (Set 205) (Set 208) (Set 523)",
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
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172) (Set 264) (Set 301) (Set 524)",
    "options": [
      "Application Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Transport Layer (general case)",
      "Session Layer based on convention"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 525)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 526)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 373) (Set 527)",
    "options": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 140) (Set 528)",
    "options": [
      "Application Layer in standard usage",
      "Session Layer (standard definition)",
      "Presentation Layer (Layer 6)",
      "Transport Layer (commonly used)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 444) (Set 529)",
    "options": [
      "80",
      "443",
      "21",
      "22"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 149) (Set 530)",
    "options": [
      "62",
      "124",
      "64",
      "60"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 169) (Set 531)",
    "options": [
      "Repeater",
      "Router",
      "Hub",
      "Switch"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 19) (Set 532)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418) (Set 514) (Set 533)",
    "options": [
      "255.255.255.0",
      "255.255.255.255",
      "255.0.0.0",
      "255.255.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "SMTP is used to? (Set 33) (Set 413) (Set 534)",
    "options": [
      "Transfer files",
      "Retrieve emails",
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
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 220) (Set 233) (Set 535)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 222) (Set 536)",
    "options": [
      "60",
      "32",
      "28",
      "30"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 305) (Set 441) (Set 537)",
    "options": [
      "Translates MAC to IP in typical implementations",
      "Encrypts network traffic (default behavior)",
      "Translates private IP addresses to a public IP",
      "Filters spam emails as per specification"
    ],
    "answer": 2,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 538)",
    "options": [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 313) (Set 539)",
    "options": [
      "68",
      "23",
      "21",
      "22"
    ],
    "answer": 0,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 199) (Set 540)",
    "options": [
      "60",
      "28",
      "32",
      "30"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 541)",
    "options": [
      "FTP (standard definition)",
      "DHCP under normal conditions",
      "ARP (standard definition)",
      "DNS (Domain Name System)"
    ],
    "answer": 3,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 542)",
    "options": [
      "Session Layer (default behavior)",
      "Presentation Layer (Layer 6)",
      "Transport Layer (widely accepted)",
      "Application Layer (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 55) (Set 543)",
    "options": [
      "Transport Layer (commonly used)",
      "Network Layer (widely accepted)",
      "Data Link Layer (Layer 2)",
      "Physical Layer in standard usage"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 544)",
    "options": [
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 437) (Set 545)",
    "options": [
      "Transport Layer (commonly used)",
      "Application Layer (widely accepted)",
      "Presentation Layer (Layer 6)",
      "Session Layer by design"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 158) (Set 185) (Set 390) (Set 546)",
    "options": [
      "Switch",
      "Repeater",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418) (Set 514) (Set 533) (Set 547)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 114) (Set 548)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 549)",
    "options": [
      "23",
      "25",
      "22",
      "21"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 550)",
    "options": [
      "HTTP (widely accepted)",
      "SNMP (widely accepted)",
      "SMTP based on convention",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 22) (Set 551)",
    "options": [
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link"
    ],
    "answer": 2,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 437) (Set 552)",
    "options": [
      "Session Layer by design",
      "Application Layer in standard usage",
      "Transport Layer based on convention",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 287) (Set 553)",
    "options": [
      "21",
      "25",
      "23",
      "22"
    ],
    "answer": 3,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 336) (Set 554)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 449) (Set 555)",
    "options": [
      "Connecting different protocols (widely accepted)",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets (typical scenario)",
      "Increasing network bandwidth as per specification"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 255) (Set 322) (Set 556)",
    "options": [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 189) (Set 557)",
    "options": [
      "Connection-oriented by design",
      "Guaranteed delivery in most cases",
      "Connectionless and unreliable",
      "Heavyweight (typical scenario)"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 243) (Set 507) (Set 558)",
    "options": [
      "Application Layer (widely accepted)",
      "Presentation Layer (Layer 6)",
      "Transport Layer (default behavior)",
      "Session Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172) (Set 264) (Set 301) (Set 524) (Set 559)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer (typical scenario)",
      "Session Layer (standard definition)",
      "Application Layer by design"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 69) (Set 560)",
    "options": [
      "252",
      "256",
      "254",
      "508"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 487) (Set 561)",
    "options": [
      "Hub",
      "Router",
      "Switch",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 19) (Set 166) (Set 562)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 153) (Set 324) (Set 331) (Set 563)",
    "options": [
      "22",
      "23",
      "21",
      "68"
    ],
    "answer": 3,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 222) (Set 564)",
    "options": [
      "30",
      "32",
      "28",
      "60"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 315) (Set 565)",
    "options": [
      "SMTP as per specification",
      "SNMP (default behavior)",
      "HTTP (primary approach)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 238) (Set 376) (Set 566)",
    "options": [
      "21",
      "22",
      "25",
      "23"
    ],
    "answer": 2,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 282) (Set 567)",
    "options": [
      "Heavyweight (commonly used)",
      "Connection-oriented (general case)",
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
    "question": "HTTPS uses which default port? (Set 32) (Set 111) (Set 356) (Set 568)",
    "options": [
      "25",
      "80",
      "443",
      "8080"
    ],
    "answer": 2,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 304) (Set 385) (Set 569)",
    "options": [
      "Switch",
      "Hub",
      "Repeater",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 140) (Set 570)",
    "options": [
      "Transport Layer (general case)",
      "Presentation Layer (Layer 6)",
      "Session Layer as per specification",
      "Application Layer (general case)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 298) (Set 571)",
    "options": [
      "14",
      "12",
      "16",
      "28"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 449) (Set 555) (Set 572)",
    "options": [
      "Encrypting network packets based on convention",
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth as per specification",
      "Connecting different protocols (default behavior)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 220) (Set 573)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 542) (Set 574)",
    "options": [
      "Application Layer in standard usage",
      "Transport Layer (widely accepted)",
      "Session Layer (commonly used)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 263) (Set 575)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 576)",
    "options": [
      "Increasing network bandwidth (general case)",
      "Connecting different protocols (commonly used)",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets in typical implementations"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 419) (Set 577)",
    "options": [
      "22",
      "23",
      "25",
      "21"
    ],
    "answer": 0,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 319) (Set 578)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 62) (Set 130) (Set 329) (Set 579)",
    "options": [
      "22",
      "80",
      "23",
      "21"
    ],
    "answer": 1,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /29. What is the maximum number of assignable host IP addresses on this subnet? (Set 89) (Set 236) (Set 580)",
    "options": [
      "6",
      "4",
      "8",
      "12"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /29, this equals 6 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 18) (Set 463) (Set 581)",
    "options": [
      "DHCP in typical implementations",
      "DNS under normal conditions",
      "NAT in typical implementations",
      "ARP (Address Resolution Protocol)"
    ],
    "answer": 3,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 582)",
    "options": [
      "255.255.255.255",
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 583)",
    "options": [
      "Network Layer (commonly used)",
      "Physical Layer in practice",
      "Transport Layer by design",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 175) (Set 297) (Set 411) (Set 504) (Set 584)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Network Layer (general case)",
      "Physical Layer in practice",
      "Transport Layer (general case)"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 375) (Set 436) (Set 585)",
    "options": [
      "256",
      "508",
      "254",
      "252"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 31) (Set 586)",
    "options": [
      "22",
      "25",
      "21",
      "23"
    ],
    "answer": 2,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 419) (Set 587)",
    "options": [
      "21",
      "25",
      "22",
      "23"
    ],
    "answer": 2,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 304) (Set 473) (Set 588)",
    "options": [
      "Router",
      "Repeater",
      "Hub",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 82) (Set 589)",
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
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 50) (Set 90) (Set 590)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer in standard usage",
      "Session Layer (primary approach)",
      "Transport Layer based on convention"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 45) (Set 591)",
    "options": [
      "Router",
      "Switch",
      "Repeater",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 419) (Set 577) (Set 592)",
    "options": [
      "22",
      "23",
      "25",
      "21"
    ],
    "answer": 0,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 336) (Set 362) (Set 593)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 83) (Set 341) (Set 594)",
    "options": [
      "Application Layer in practice",
      "Transport Layer in standard usage",
      "Session Layer as per specification",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 163) (Set 353) (Set 595)",
    "options": [
      "Repeater",
      "Switch",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 71) (Set 596)",
    "options": [
      "443",
      "8080",
      "80",
      "25"
    ],
    "answer": 0,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 597)",
    "options": [
      "Guaranteed delivery in most cases",
      "Connectionless and unreliable",
      "Connection-oriented by design",
      "Heavyweight (widely accepted)"
    ],
    "answer": 1,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 58) (Set 598)",
    "options": [
      "30",
      "32",
      "28",
      "60"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 255) (Set 322) (Set 364) (Set 599)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 222) (Set 564) (Set 600)",
    "options": [
      "60",
      "28",
      "30",
      "32"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 601)",
    "options": [
      "Encrypting network packets (widely accepted)",
      "Increasing network bandwidth based on convention",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 160) (Set 602)",
    "options": [
      "Connecting different protocols (primary approach)",
      "Encrypting network packets (typical scenario)",
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth (typical scenario)"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 603)",
    "options": [
      "Router",
      "Switch",
      "Repeater",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 308) (Set 382) (Set 604)",
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
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 334) (Set 605)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 69) (Set 606)",
    "options": [
      "508",
      "256",
      "252",
      "254"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 71) (Set 596) (Set 607)",
    "options": [
      "8080",
      "25",
      "443",
      "80"
    ],
    "answer": 2,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 298) (Set 571) (Set 608)",
    "options": [
      "12",
      "28",
      "16",
      "14"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 423) (Set 448) (Set 609)",
    "options": [
      "Application Layer (general case)",
      "Session Layer in practice",
      "Transport Layer by design",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 145) (Set 211) (Set 610)",
    "options": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the POP3 service? (Set 611)",
    "options": [
      "110",
      "23",
      "22",
      "21"
    ],
    "answer": 0,
    "explanation": "POP3 standard port is 110."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the Telnet service? (Set 27) (Set 612)",
    "options": [
      "21",
      "25",
      "22",
      "23"
    ],
    "answer": 3,
    "explanation": "Telnet standard port is 23."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 112) (Set 224) (Set 450) (Set 493) (Set 613)",
    "options": [
      "64",
      "60",
      "124",
      "62"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 44) (Set 614)",
    "options": [
      "80",
      "443",
      "21",
      "22"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 220) (Set 573) (Set 615)",
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
    "question": "What is subnetting? (Set 2) (Set 272) (Set 616)",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth (widely accepted)",
      "Encrypting network packets (commonly used)",
      "Connecting different protocols (widely accepted)"
    ],
    "answer": 0,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 96) (Set 205) (Set 617)",
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
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 355) (Set 618)",
    "options": [
      "Increasing network bandwidth (standard definition)",
      "Encrypting network packets in standard usage",
      "Connecting different protocols based on convention",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 576) (Set 619)",
    "options": [
      "Encrypting network packets as per specification",
      "Increasing network bandwidth in most cases",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (default behavior)"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 23) (Set 620)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 58) (Set 598) (Set 621)",
    "options": [
      "30",
      "28",
      "32",
      "60"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 622)",
    "options": [
      "SMTP in typical implementations",
      "SNMP (standard definition)",
      "HTTP in standard usage",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 227) (Set 464) (Set 623)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Physical Layer (general case)",
      "Network Layer (default behavior)",
      "Transport Layer in most cases"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 336) (Set 554) (Set 624)",
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
    "question": "What is subnetting? (Set 67) (Set 625)",
    "options": [
      "Increasing network bandwidth under normal conditions",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (widely accepted)",
      "Encrypting network packets under normal conditions"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 626)",
    "options": [
      "Session Layer in standard usage",
      "Transport Layer (commonly used)",
      "Application Layer (widely accepted)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 222) (Set 564) (Set 600) (Set 627)",
    "options": [
      "30",
      "28",
      "60",
      "32"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 335) (Set 628)",
    "options": [
      "DHCP under normal conditions",
      "NAT in typical implementations",
      "DNS under normal conditions",
      "ARP (Address Resolution Protocol)"
    ],
    "answer": 3,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the IMAP service? (Set 374) (Set 440) (Set 629)",
    "options": [
      "21",
      "22",
      "143",
      "23"
    ],
    "answer": 2,
    "explanation": "IMAP standard port is 143."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 487) (Set 630)",
    "options": [
      "Router",
      "Repeater",
      "Switch",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 631)",
    "options": [
      "25",
      "21",
      "22",
      "23"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 121) (Set 200) (Set 299) (Set 632)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 633)",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255",
      "255.255.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 634)",
    "options": [
      "28",
      "60",
      "30",
      "32"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /29. What is the maximum number of assignable host IP addresses on this subnet? (Set 89) (Set 236) (Set 405) (Set 635)",
    "options": [
      "8",
      "4",
      "12",
      "6"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /29, this equals 6 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 520) (Set 636)",
    "options": [
      "21",
      "23",
      "25",
      "22"
    ],
    "answer": 2,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 637)",
    "options": [
      "64",
      "124",
      "62",
      "60"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 81) (Set 397) (Set 424) (Set 638)",
    "options": [
      "21",
      "443",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 241) (Set 639)",
    "options": [
      "Router",
      "Switch",
      "Repeater",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 104) (Set 395) (Set 640)",
    "options": [
      "Transport Layer (primary approach)",
      "Session Layer based on convention",
      "Presentation Layer (Layer 6)",
      "Application Layer (commonly used)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 641)",
    "options": [
      "60",
      "62",
      "64",
      "124"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 260) (Set 642)",
    "options": [
      "21",
      "25",
      "23",
      "22"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 308) (Set 643)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 644)",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 67) (Set 645)",
    "options": [
      "Encrypting network packets (widely accepted)",
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth (primary approach)",
      "Connecting different protocols (commonly used)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 255) (Set 322) (Set 364) (Set 646)",
    "options": [
      "Router",
      "Repeater",
      "Switch",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 538) (Set 647)",
    "options": [
      "Switch",
      "Router",
      "Repeater",
      "Hub"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 368) (Set 394) (Set 648)",
    "options": [
      "FTP (File Transfer Protocol)",
      "HTTP under normal conditions",
      "SNMP based on convention",
      "SMTP under normal conditions"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 437) (Set 552) (Set 649)",
    "options": [
      "Transport Layer based on convention",
      "Application Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Session Layer in standard usage"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 177) (Set 257) (Set 497) (Set 650)",
    "options": [
      "21",
      "80",
      "23",
      "22"
    ],
    "answer": 1,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 80) (Set 141) (Set 328) (Set 342) (Set 505) (Set 651)",
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
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 50) (Set 652)",
    "options": [
      "Session Layer by design",
      "Transport Layer (primary approach)",
      "Presentation Layer (Layer 6)",
      "Application Layer by design"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 653)",
    "options": [
      "252",
      "256",
      "508",
      "254"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 653) (Set 654)",
    "options": [
      "508",
      "252",
      "254",
      "256"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 426) (Set 655)",
    "options": [
      "25",
      "22",
      "21",
      "23"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 288) (Set 656)",
    "options": [
      "Filters spam emails (standard definition)",
      "Translates MAC to IP in typical implementations",
      "Translates private IP addresses to a public IP",
      "Encrypts network traffic (standard definition)"
    ],
    "answer": 2,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 132) (Set 657)",
    "options": [
      "Application Layer in standard usage",
      "Session Layer as per specification",
      "Presentation Layer (Layer 6)",
      "Transport Layer (default behavior)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 517) (Set 658)",
    "options": [
      "Router",
      "Repeater",
      "Switch",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91) (Set 659)",
    "options": [
      "21",
      "443",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 163) (Set 660)",
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
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 80) (Set 141) (Set 661)",
    "options": [
      "MAC Address",
      "IPv4",
      "Subnet Mask",
      "IPv6"
    ],
    "answer": 3,
    "explanation": "IPv6 uses 128-bit hexadecimal addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 335) (Set 662)",
    "options": [
      "DHCP (standard definition)",
      "ARP (Address Resolution Protocol)",
      "DNS under normal conditions",
      "NAT in typical implementations"
    ],
    "answer": 1,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 151) (Set 663)",
    "options": [
      "Guaranteed delivery (general case)",
      "Connection-oriented by design",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 164) (Set 664)",
    "options": [
      "Switch",
      "Repeater",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91) (Set 219) (Set 665)",
    "options": [
      "80",
      "21",
      "22",
      "443"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 526) (Set 666)",
    "options": [
      "255.255.255.255",
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 197) (Set 338) (Set 667)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Physical Layer (widely accepted)",
      "Network Layer (general case)",
      "Transport Layer in most cases"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 668)",
    "options": [
      "22",
      "80",
      "443",
      "21"
    ],
    "answer": 1,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 125) (Set 168) (Set 669)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer by design",
      "Transport Layer in practice",
      "Session Layer based on convention"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 160) (Set 670)",
    "options": [
      "Increasing network bandwidth (primary approach)",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols based on convention",
      "Encrypting network packets based on convention"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 319) (Set 578) (Set 671)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 215) (Set 357) (Set 672)",
    "options": [
      "124",
      "64",
      "60",
      "62"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133) (Set 673)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 71) (Set 596) (Set 674)",
    "options": [
      "443",
      "25",
      "8080",
      "80"
    ],
    "answer": 0,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 359) (Set 675)",
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
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64) (Set 310) (Set 676)",
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
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 677)",
    "options": [
      "DHCP in typical implementations",
      "NAT in typical implementations",
      "ARP (Address Resolution Protocol)",
      "DNS in typical implementations"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 106) (Set 122) (Set 678)",
    "options": [
      "Encrypting network packets (default behavior)",
      "Connecting different protocols (general case)",
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth (default behavior)"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 679)",
    "options": [
      "80",
      "22",
      "21",
      "23"
    ],
    "answer": 0,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 332) (Set 354) (Set 680)",
    "options": [
      "HTTP (standard definition)",
      "FTP (File Transfer Protocol)",
      "SMTP (default behavior)",
      "SNMP (primary approach)"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 149) (Set 681)",
    "options": [
      "60",
      "62",
      "64",
      "124"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 294) (Set 682)",
    "options": [
      "254",
      "256",
      "508",
      "252"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 683)",
    "options": [
      "Transport Layer based on convention",
      "Session Layer as per specification",
      "Presentation Layer (Layer 6)",
      "Application Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 444) (Set 684)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 685)",
    "options": [
      "Session Layer (widely accepted)",
      "Application Layer in most cases",
      "Transport Layer (general case)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 31) (Set 586) (Set 686)",
    "options": [
      "23",
      "21",
      "22",
      "25"
    ],
    "answer": 1,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 294) (Set 682) (Set 687)",
    "options": [
      "252",
      "256",
      "508",
      "254"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 93) (Set 100) (Set 139) (Set 688)",
    "options": [
      "Session Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Transport Layer (widely accepted)",
      "Application Layer in standard usage"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 82) (Set 689)",
    "options": [
      "Dynamic Host Connection Protocol",
      "Dynamic Host Configuration Protocol",
      "Direct Host Configuration Port",
      "Distributed Host Control Protocol"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 41) (Set 84) (Set 250) (Set 690)",
    "options": [
      "21",
      "22",
      "25",
      "23"
    ],
    "answer": 0,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 691)",
    "options": [
      "Filters spam emails based on convention",
      "Translates private IP addresses to a public IP",
      "Encrypts network traffic (standard definition)",
      "Translates MAC to IP (standard definition)"
    ],
    "answer": 1,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 31) (Set 586) (Set 686) (Set 692)",
    "options": [
      "23",
      "25",
      "22",
      "21"
    ],
    "answer": 3,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 355) (Set 618) (Set 693)",
    "options": [
      "Increasing network bandwidth (primary approach)",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols in practice",
      "Encrypting network packets (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 230) (Set 269) (Set 694)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Session Layer (commonly used)",
      "Application Layer (widely accepted)",
      "Transport Layer (typical scenario)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 695)",
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
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 334) (Set 605) (Set 696)",
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
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 697)",
    "options": [
      "Transport Layer in most cases",
      "Application Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Session Layer (standard definition)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 50) (Set 77) (Set 698)",
    "options": [
      "Transport Layer (general case)",
      "Session Layer based on convention",
      "Application Layer (general case)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 304) (Set 473) (Set 588) (Set 699)",
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
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 28) (Set 700)",
    "options": [
      "ARP (Address Resolution Protocol)",
      "DNS under normal conditions",
      "NAT under normal conditions",
      "DHCP in typical implementations"
    ],
    "answer": 0,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 335) (Set 628) (Set 701)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 260) (Set 642) (Set 702)",
    "options": [
      "21",
      "23",
      "25",
      "22"
    ],
    "answer": 2,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 703)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 88) (Set 704)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 140) (Set 528) (Set 705)",
    "options": [
      "Session Layer (widely accepted)",
      "Transport Layer in standard usage",
      "Application Layer in standard usage",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 541) (Set 706)",
    "options": [
      "FTP in standard usage",
      "DHCP based on convention",
      "ARP (typical scenario)",
      "DNS (Domain Name System)"
    ],
    "answer": 3,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91) (Set 219) (Set 318) (Set 383) (Set 707)",
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
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 332) (Set 354) (Set 680) (Set 708)",
    "options": [
      "HTTP (widely accepted)",
      "SMTP under normal conditions",
      "SNMP (typical scenario)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 285) (Set 709)",
    "options": [
      "80",
      "21",
      "22",
      "443"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 18) (Set 463) (Set 710)",
    "options": [
      "DNS under normal conditions",
      "DHCP under normal conditions",
      "ARP (Address Resolution Protocol)",
      "NAT under normal conditions"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 332) (Set 354) (Set 680) (Set 708) (Set 711)",
    "options": [
      "SMTP under normal conditions",
      "FTP (File Transfer Protocol)",
      "SNMP in standard usage",
      "HTTP in standard usage"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 143) (Set 193) (Set 484) (Set 712)",
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
    "question": "What is subnetting? (Set 160) (Set 713)",
    "options": [
      "Increasing network bandwidth (widely accepted)",
      "Connecting different protocols based on convention",
      "Encrypting network packets under normal conditions",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 298) (Set 571) (Set 714)",
    "options": [
      "28",
      "12",
      "14",
      "16"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 359) (Set 715)",
    "options": [
      "255.0.0.0",
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 403) (Set 716)",
    "options": [
      "21",
      "25",
      "22",
      "23"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 717)",
    "options": [
      "HTTP in standard usage",
      "SNMP based on convention",
      "SMTP in standard usage",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 501) (Set 718)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418) (Set 514) (Set 533) (Set 719)",
    "options": [
      "255.255.255.0",
      "255.255.255.255",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 720)",
    "options": [
      "Hub",
      "Repeater",
      "Router",
      "Switch"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 339) (Set 721)",
    "options": [
      "Encrypts network traffic (typical scenario)",
      "Translates MAC to IP under normal conditions",
      "Translates private IP addresses to a public IP",
      "Filters spam emails as per specification"
    ],
    "answer": 2,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 73) (Set 79) (Set 268) (Set 722)",
    "options": [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 256) (Set 445) (Set 723)",
    "options": [
      "255.0.0.0",
      "255.255.255.255",
      "255.255.0.0",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 153) (Set 324) (Set 485) (Set 724)",
    "options": [
      "68",
      "22",
      "23",
      "21"
    ],
    "answer": 0,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 220) (Set 573) (Set 725)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 140) (Set 726)",
    "options": [
      "Session Layer (general case)",
      "Transport Layer in standard usage",
      "Application Layer in practice",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 249) (Set 727)",
    "options": [
      "255.255.255.0",
      "255.255.255.255",
      "255.0.0.0",
      "255.255.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 550) (Set 728)",
    "options": [
      "FTP (File Transfer Protocol)",
      "HTTP under normal conditions",
      "SNMP (typical scenario)",
      "SMTP (default behavior)"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 437) (Set 552) (Set 729)",
    "options": [
      "Transport Layer based on convention",
      "Presentation Layer (Layer 6)",
      "Session Layer by design",
      "Application Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 730)",
    "options": [
      "Transport Layer (widely accepted)",
      "Application Layer by design",
      "Session Layer (commonly used)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 276) (Set 321) (Set 731)",
    "options": [
      "21",
      "25",
      "23",
      "22"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 112) (Set 224) (Set 450) (Set 732)",
    "options": [
      "124",
      "62",
      "64",
      "60"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 276) (Set 358) (Set 733)",
    "options": [
      "21",
      "25",
      "23",
      "22"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64) (Set 310) (Set 676) (Set 734)",
    "options": [
      "Sliding window mechanism",
      "Three-way handshake",
      "Congestion window sizing",
      "Timeout retransmission only"
    ],
    "answer": 0,
    "explanation": "Sliding window prevents receiver buffer overflow."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 541) (Set 706) (Set 735)",
    "options": [
      "ARP in typical implementations",
      "DHCP in typical implementations",
      "DNS (Domain Name System)",
      "FTP under normal conditions"
    ],
    "answer": 2,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 359) (Set 675) (Set 736)",
    "options": [
      "255.0.0.0",
      "255.255.255.255",
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
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 258) (Set 737)",
    "options": [
      "HTTP (primary approach)",
      "FTP (File Transfer Protocol)",
      "SMTP in standard usage",
      "SNMP based on convention"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 206) (Set 244) (Set 738)",
    "options": [
      "28",
      "30",
      "60",
      "32"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 149) (Set 530) (Set 739)",
    "options": [
      "64",
      "124",
      "60",
      "62"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 112) (Set 224) (Set 450) (Set 493) (Set 740)",
    "options": [
      "64",
      "60",
      "124",
      "62"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 351) (Set 741)",
    "options": [
      "Increasing network bandwidth (standard definition)",
      "Connecting different protocols (standard definition)",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets in standard usage"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 174) (Set 401) (Set 742)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 55) (Set 94) (Set 451) (Set 743)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Transport Layer in most cases",
      "Network Layer (general case)",
      "Physical Layer in standard usage"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133) (Set 186) (Set 363) (Set 393) (Set 744)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 526) (Set 666) (Set 745)",
    "options": [
      "255.255.255.0",
      "255.255.255.255",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 159) (Set 373) (Set 527) (Set 746)",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 288) (Set 747)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Filters spam emails in typical implementations",
      "Encrypts network traffic (default behavior)",
      "Translates MAC to IP (primary approach)"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 748)",
    "options": [
      "21",
      "25",
      "22",
      "23"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 749)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 287) (Set 750)",
    "options": [
      "22",
      "23",
      "21",
      "25"
    ],
    "answer": 0,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 751)",
    "options": [
      "SNMP (primary approach)",
      "SMTP in typical implementations",
      "HTTP in typical implementations",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 247) (Set 752)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer in practice",
      "Session Layer based on convention",
      "Transport Layer in most cases"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the Telnet service? (Set 27) (Set 753)",
    "options": [
      "25",
      "22",
      "23",
      "21"
    ],
    "answer": 2,
    "explanation": "Telnet standard port is 23."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 276) (Set 358) (Set 754)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 163) (Set 755)",
    "options": [
      "Router",
      "Switch",
      "Hub",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 50) (Set 90) (Set 756)",
    "options": [
      "Application Layer in standard usage",
      "Transport Layer (typical scenario)",
      "Session Layer (standard definition)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 757)",
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
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 227) (Set 464) (Set 758)",
    "options": [
      "Transport Layer in most cases",
      "Network Layer (typical scenario)",
      "Physical Layer in standard usage",
      "Data Link Layer (Layer 2)"
    ],
    "answer": 3,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 313) (Set 539) (Set 759)",
    "options": [
      "21",
      "22",
      "68",
      "23"
    ],
    "answer": 2,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 121) (Set 200) (Set 760)",
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
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 227) (Set 464) (Set 761)",
    "options": [
      "Network Layer in practice",
      "Physical Layer (commonly used)",
      "Data Link Layer (Layer 2)",
      "Transport Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 368) (Set 394) (Set 648) (Set 762)",
    "options": [
      "SMTP (standard definition)",
      "SNMP based on convention",
      "HTTP (default behavior)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 132) (Set 763)",
    "options": [
      "Application Layer in practice",
      "Session Layer (widely accepted)",
      "Transport Layer (general case)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 106) (Set 764)",
    "options": [
      "Increasing network bandwidth (standard definition)",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets (default behavior)",
      "Connecting different protocols (primary approach)"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 492) (Set 765)",
    "options": [
      "23",
      "21",
      "22",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 332) (Set 354) (Set 680) (Set 766)",
    "options": [
      "SMTP (primary approach)",
      "HTTP in typical implementations",
      "FTP (File Transfer Protocol)",
      "SNMP (widely accepted)"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 419) (Set 587) (Set 767)",
    "options": [
      "22",
      "21",
      "25",
      "23"
    ],
    "answer": 0,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 40) (Set 73) (Set 79) (Set 469) (Set 768)",
    "options": [
      "Hub",
      "Switch",
      "Router",
      "Repeater"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 34) (Set 260) (Set 769)",
    "options": [
      "23",
      "22",
      "21",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 18) (Set 463) (Set 770)",
    "options": [
      "DNS in typical implementations",
      "DHCP under normal conditions",
      "NAT under normal conditions",
      "ARP (Address Resolution Protocol)"
    ],
    "answer": 3,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 96) (Set 205) (Set 208) (Set 523) (Set 771)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 772)",
    "options": [
      "68",
      "23",
      "21",
      "22"
    ],
    "answer": 0,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 526) (Set 666) (Set 773)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 255) (Set 322) (Set 556) (Set 774)",
    "options": [
      "Switch",
      "Router",
      "Repeater",
      "Hub"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48) (Set 116) (Set 323) (Set 400) (Set 775)",
    "options": [
      "SMTP (standard definition)",
      "HTTP (default behavior)",
      "SNMP (default behavior)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 776)",
    "options": [
      "Encrypting network packets (typical scenario)",
      "Connecting different protocols (primary approach)",
      "Increasing network bandwidth (typical scenario)",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 48) (Set 102) (Set 480) (Set 777)",
    "options": [
      "SNMP (typical scenario)",
      "FTP (File Transfer Protocol)",
      "HTTP (typical scenario)",
      "SMTP (primary approach)"
    ],
    "answer": 1,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 225) (Set 425) (Set 778)",
    "options": [
      "Guaranteed delivery in most cases",
      "Heavyweight as per specification",
      "Connection-oriented in most cases",
      "Connectionless and unreliable"
    ],
    "answer": 3,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 419) (Set 577) (Set 779)",
    "options": [
      "23",
      "21",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 125) (Set 168) (Set 669) (Set 780)",
    "options": [
      "Application Layer in standard usage",
      "Session Layer in practice",
      "Presentation Layer (Layer 6)",
      "Transport Layer based on convention"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 781)",
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
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 782)",
    "options": [
      "Application Layer in practice",
      "Presentation Layer (Layer 6)",
      "Transport Layer (commonly used)",
      "Session Layer (general case)"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 132) (Set 763) (Set 783)",
    "options": [
      "Application Layer in standard usage",
      "Session Layer by design",
      "Transport Layer in practice",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 142) (Set 406) (Set 784)",
    "options": [
      "Session Layer by design",
      "Presentation Layer (Layer 6)",
      "Application Layer in practice",
      "Transport Layer in standard usage"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 173) (Set 283) (Set 785)",
    "options": [
      "Connectionless and unreliable",
      "Connection-oriented (general case)",
      "Heavyweight based on convention",
      "Guaranteed delivery (general case)"
    ],
    "answer": 0,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 71) (Set 786)",
    "options": [
      "80",
      "25",
      "8080",
      "443"
    ],
    "answer": 3,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 517) (Set 787)",
    "options": [
      "Hub",
      "Switch",
      "Repeater",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 542) (Set 574) (Set 788)",
    "options": [
      "Transport Layer (primary approach)",
      "Application Layer by design",
      "Session Layer (widely accepted)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 789)",
    "options": [
      "DNS in typical implementations",
      "DHCP (standard definition)",
      "NAT under normal conditions",
      "ARP (Address Resolution Protocol)"
    ],
    "answer": 3,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 16) (Set 790)",
    "options": [
      "SNMP (widely accepted)",
      "HTTP as per specification",
      "SMTP (primary approach)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 791)",
    "options": [
      "Router",
      "Repeater",
      "Hub",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 105) (Set 124) (Set 368) (Set 394) (Set 648) (Set 792)",
    "options": [
      "HTTP (widely accepted)",
      "SNMP (default behavior)",
      "FTP (File Transfer Protocol)",
      "SMTP (standard definition)"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 131) (Set 793)",
    "options": [
      "Router",
      "Hub",
      "Repeater",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 228) (Set 794)",
    "options": [
      "256",
      "508",
      "254",
      "252"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 597) (Set 795)",
    "options": [
      "Connection-oriented in most cases",
      "Heavyweight (general case)",
      "Connectionless and unreliable",
      "Guaranteed delivery in practice"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 243) (Set 507) (Set 796)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer in practice",
      "Transport Layer (typical scenario)",
      "Session Layer in practice"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 797)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 41) (Set 84) (Set 250) (Set 798)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 1,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 679) (Set 799)",
    "options": [
      "22",
      "23",
      "21",
      "80"
    ],
    "answer": 3,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 304) (Set 385) (Set 569) (Set 800)",
    "options": [
      "Repeater",
      "Router",
      "Hub",
      "Switch"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172) (Set 379) (Set 801)",
    "options": [
      "Session Layer in most cases",
      "Transport Layer in most cases",
      "Application Layer by design",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 697) (Set 802)",
    "options": [
      "Application Layer in most cases",
      "Transport Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Session Layer in practice"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTPS service? (Set 340) (Set 803)",
    "options": [
      "443",
      "22",
      "21",
      "23"
    ],
    "answer": 0,
    "explanation": "HTTPS standard port is 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 804)",
    "options": [
      "FTP (File Transfer Protocol)",
      "SNMP (default behavior)",
      "SMTP under normal conditions",
      "HTTP in typical implementations"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 805)",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (standard definition)",
      "Encrypting network packets under normal conditions",
      "Increasing network bandwidth in most cases"
    ],
    "answer": 0,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 222) (Set 564) (Set 806)",
    "options": [
      "32",
      "28",
      "30",
      "60"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 541) (Set 706) (Set 807)",
    "options": [
      "DNS (Domain Name System)",
      "DHCP in most cases",
      "ARP based on convention",
      "FTP (standard definition)"
    ],
    "answer": 0,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 201) (Set 304) (Set 385) (Set 569) (Set 808)",
    "options": [
      "Hub",
      "Router",
      "Switch",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 235) (Set 809)",
    "options": [
      "Switch",
      "Hub",
      "Router",
      "Repeater"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 182) (Set 810)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418) (Set 514) (Set 533) (Set 811)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 812)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 31) (Set 586) (Set 686) (Set 692) (Set 813)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 1,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 305) (Set 482) (Set 814)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Filters spam emails under normal conditions",
      "Translates MAC to IP (primary approach)",
      "Encrypts network traffic in typical implementations"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 288) (Set 656) (Set 815)",
    "options": [
      "Encrypts network traffic (default behavior)",
      "Translates MAC to IP (default behavior)",
      "Translates private IP addresses to a public IP",
      "Filters spam emails in typical implementations"
    ],
    "answer": 2,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 347) (Set 816)",
    "options": [
      "SMTP (default behavior)",
      "SNMP as per specification",
      "HTTP under normal conditions",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 151) (Set 663) (Set 817)",
    "options": [
      "Guaranteed delivery in practice",
      "Connection-oriented (general case)",
      "Connectionless and unreliable",
      "Heavyweight based on convention"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 177) (Set 257) (Set 818)",
    "options": [
      "22",
      "23",
      "80",
      "21"
    ],
    "answer": 2,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "UDP is characterized as? (Set 59) (Set 173) (Set 283) (Set 295) (Set 819)",
    "options": [
      "Guaranteed delivery by design",
      "Connection-oriented (general case)",
      "Connectionless and unreliable",
      "Heavyweight as per specification"
    ],
    "answer": 2,
    "explanation": "UDP is low-overhead and does not perform retransmissions."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 82) (Set 589) (Set 820)",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Dynamic Host Connection Protocol",
      "Distributed Host Control Protocol",
      "Direct Host Configuration Port"
    ],
    "answer": 0,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 23) (Set 821)",
    "options": [
      "Dynamic Host Connection Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol"
    ],
    "answer": 2,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 230) (Set 822)",
    "options": [
      "Application Layer in standard usage",
      "Transport Layer in practice",
      "Presentation Layer (Layer 6)",
      "Session Layer (default behavior)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 241) (Set 639) (Set 823)",
    "options": [
      "Repeater",
      "Switch",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 54) (Set 78) (Set 251) (Set 824)",
    "options": [
      "255.255.255.0",
      "255.255.255.255",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 375) (Set 825)",
    "options": [
      "252",
      "254",
      "508",
      "256"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 69) (Set 606) (Set 826)",
    "options": [
      "508",
      "252",
      "254",
      "256"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 582) (Set 827)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 19) (Set 166) (Set 828)",
    "options": [
      "255.255.255.255",
      "255.255.0.0",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 286) (Set 829)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer in most cases",
      "Transport Layer (commonly used)",
      "Session Layer (typical scenario)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 16) (Set 830)",
    "options": [
      "SNMP in typical implementations",
      "HTTP in standard usage",
      "FTP (File Transfer Protocol)",
      "SMTP in standard usage"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 19) (Set 166) (Set 562) (Set 831)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 160) (Set 832)",
    "options": [
      "Increasing network bandwidth (widely accepted)",
      "Connecting different protocols in standard usage",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets based on convention"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 381) (Set 443) (Set 833)",
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
    "question": "A standard network Switch operates at which OSI layer? (Set 834)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Transport Layer in practice",
      "Physical Layer in most cases",
      "Network Layer (commonly used)"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 653) (Set 654) (Set 835)",
    "options": [
      "256",
      "508",
      "252",
      "254"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 836)",
    "options": [
      "SNMP as per specification",
      "HTTP (widely accepted)",
      "SMTP (primary approach)",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 111) (Set 837)",
    "options": [
      "80",
      "443",
      "8080",
      "25"
    ],
    "answer": 1,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 96) (Set 205) (Set 208) (Set 523) (Set 771) (Set 838)",
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
    "question": "HTTP works on which default port? (Set 63) (Set 81) (Set 397) (Set 424) (Set 638) (Set 839)",
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
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 644) (Set 840)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 804) (Set 841)",
    "options": [
      "SNMP (default behavior)",
      "HTTP (default behavior)",
      "FTP (File Transfer Protocol)",
      "SMTP as per specification"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 276) (Set 358) (Set 754) (Set 842)",
    "options": [
      "21",
      "23",
      "25",
      "22"
    ],
    "answer": 2,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 541) (Set 706) (Set 735) (Set 843)",
    "options": [
      "ARP (general case)",
      "DNS (Domain Name System)",
      "FTP based on convention",
      "DHCP in most cases"
    ],
    "answer": 1,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 844)",
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
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 220) (Set 573) (Set 615) (Set 845)",
    "options": [
      "443",
      "21",
      "80",
      "22"
    ],
    "answer": 2,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 526) (Set 666) (Set 773) (Set 846)",
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
    "question": "What is subnetting? (Set 2) (Set 601) (Set 847)",
    "options": [
      "Encrypting network packets in standard usage",
      "Increasing network bandwidth based on convention",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (standard definition)"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 158) (Set 185) (Set 390) (Set 546) (Set 848)",
    "options": [
      "Router",
      "Repeater",
      "Hub",
      "Switch"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133) (Set 186) (Set 209) (Set 849)",
    "options": [
      "255.0.0.0",
      "255.255.255.255",
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
    "question": "What is subnetting? (Set 2) (Set 106) (Set 850)",
    "options": [
      "Connecting different protocols in most cases",
      "Increasing network bandwidth in standard usage",
      "Encrypting network packets (commonly used)",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 69) (Set 560) (Set 851)",
    "options": [
      "252",
      "508",
      "256",
      "254"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 852)",
    "options": [
      "25",
      "21",
      "22",
      "23"
    ],
    "answer": 0,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 381) (Set 443) (Set 833) (Set 853)",
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
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 499) (Set 854)",
    "options": [
      "Encrypting network packets (default behavior)",
      "Connecting different protocols based on convention",
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth based on convention"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418) (Set 514) (Set 533) (Set 811) (Set 855)",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 235) (Set 856)",
    "options": [
      "Router",
      "Repeater",
      "Switch",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTPS service? (Set 857)",
    "options": [
      "21",
      "443",
      "23",
      "22"
    ],
    "answer": 1,
    "explanation": "HTTPS standard port is 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 16) (Set 155) (Set 476) (Set 858)",
    "options": [
      "SNMP (default behavior)",
      "HTTP (typical scenario)",
      "FTP (File Transfer Protocol)",
      "SMTP (typical scenario)"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 634) (Set 859)",
    "options": [
      "30",
      "32",
      "60",
      "28"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 492) (Set 765) (Set 860)",
    "options": [
      "22",
      "23",
      "25",
      "21"
    ],
    "answer": 2,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 35) (Set 39) (Set 115) (Set 242) (Set 361) (Set 861)",
    "options": [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 111) (Set 356) (Set 862)",
    "options": [
      "80",
      "25",
      "8080",
      "443"
    ],
    "answer": 3,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 350) (Set 863)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 298) (Set 571) (Set 864)",
    "options": [
      "16",
      "28",
      "12",
      "14"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 247) (Set 752) (Set 865)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Session Layer by design",
      "Transport Layer in standard usage",
      "Application Layer in practice"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 26) (Set 844) (Set 866)",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 867)",
    "options": [
      "Switch",
      "Repeater",
      "Hub",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 335) (Set 628) (Set 701) (Set 868)",
    "options": [
      "DNS under normal conditions",
      "NAT under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DHCP in typical implementations"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 55) (Set 127) (Set 869)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Network Layer (widely accepted)",
      "Physical Layer in practice",
      "Transport Layer in most cases"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 749) (Set 870)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 871)",
    "options": [
      "Transport Layer based on convention",
      "Presentation Layer (Layer 6)",
      "Application Layer (widely accepted)",
      "Session Layer in most cases"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 375) (Set 436) (Set 872)",
    "options": [
      "254",
      "256",
      "252",
      "508"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 315) (Set 465) (Set 873)",
    "options": [
      "SNMP under normal conditions",
      "SMTP in standard usage",
      "FTP (File Transfer Protocol)",
      "HTTP (typical scenario)"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 133) (Set 673) (Set 874)",
    "options": [
      "255.255.255.0",
      "255.255.255.255",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 157) (Set 292) (Set 875)",
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
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 191) (Set 876)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 408) (Set 426) (Set 655) (Set 877)",
    "options": [
      "21",
      "25",
      "23",
      "22"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 243) (Set 507) (Set 878)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Session Layer (general case)",
      "Application Layer (widely accepted)",
      "Transport Layer in standard usage"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 526) (Set 666) (Set 879)",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64) (Set 310) (Set 676) (Set 734) (Set 880)",
    "options": [
      "Congestion window sizing",
      "Three-way handshake",
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
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 109) (Set 420) (Set 881)",
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
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 339) (Set 721) (Set 882)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Translates MAC to IP based on convention",
      "Encrypts network traffic as per specification",
      "Filters spam emails under normal conditions"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /26. What is the maximum number of assignable host IP addresses on this subnet? (Set 13) (Set 42) (Set 883)",
    "options": [
      "124",
      "60",
      "62",
      "64"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /26, this equals 62 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 169) (Set 371) (Set 884)",
    "options": [
      "Hub",
      "Switch",
      "Repeater",
      "Router"
    ],
    "answer": 3,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is the primary method of error detection in TCP/IP? (Set 365) (Set 455) (Set 885)",
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
    "topic": "CN",
    "difficulty": "Easy",
    "question": "DHCP stands for? (Set 82) (Set 589) (Set 886)",
    "options": [
      "Dynamic Host Connection Protocol",
      "Direct Host Configuration Port",
      "Dynamic Host Configuration Protocol",
      "Distributed Host Control Protocol"
    ],
    "answer": 2,
    "explanation": "DHCP dynamically assigns IP addresses to hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 243) (Set 887)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer in practice",
      "Session Layer (commonly used)",
      "Transport Layer (primary approach)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What is TCP flow control achieved through? (Set 64) (Set 310) (Set 521) (Set 888)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 679) (Set 799) (Set 889)",
    "options": [
      "80",
      "22",
      "21",
      "23"
    ],
    "answer": 0,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 305) (Set 482) (Set 814) (Set 890)",
    "options": [
      "Encrypts network traffic under normal conditions",
      "Translates MAC to IP (standard definition)",
      "Filters spam emails as per specification",
      "Translates private IP addresses to a public IP"
    ],
    "answer": 3,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 158) (Set 185) (Set 390) (Set 891)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 243) (Set 507) (Set 878) (Set 892)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Application Layer (general case)",
      "Transport Layer in practice",
      "Session Layer (typical scenario)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 103) (Set 178) (Set 893)",
    "options": [
      "Session Layer (typical scenario)",
      "Transport Layer (widely accepted)",
      "Presentation Layer (Layer 6)",
      "Application Layer (general case)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTPS service? (Set 894)",
    "options": [
      "22",
      "443",
      "21",
      "23"
    ],
    "answer": 1,
    "explanation": "HTTPS standard port is 443."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 375) (Set 436) (Set 872) (Set 895)",
    "options": [
      "256",
      "254",
      "252",
      "508"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 216) (Set 296) (Set 896)",
    "options": [
      "Connecting different protocols under normal conditions",
      "Increasing network bandwidth (commonly used)",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets (standard definition)"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418) (Set 514) (Set 533) (Set 897)",
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
    "question": "SMTP is used to? (Set 33) (Set 345) (Set 898)",
    "options": [
      "Send emails",
      "Retrieve emails",
      "Transfer files",
      "Retrieve IP addresses"
    ],
    "answer": 0,
    "explanation": "Simple Mail Transfer Protocol is used to transmit emails."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 85) (Set 93) (Set 100) (Set 139) (Set 899)",
    "options": [
      "Application Layer (commonly used)",
      "Session Layer (standard definition)",
      "Transport Layer (primary approach)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 290) (Set 900)",
    "options": [
      "12",
      "16",
      "14",
      "28"
    ],
    "answer": 2,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 499) (Set 854) (Set 901)",
    "options": [
      "Connecting different protocols as per specification",
      "Encrypting network packets (commonly used)",
      "Increasing network bandwidth (general case)",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is used to translate domain names into IP addresses? (Set 70) (Set 380) (Set 902)",
    "options": [
      "DHCP under normal conditions",
      "DNS (Domain Name System)",
      "FTP in typical implementations",
      "ARP (typical scenario)"
    ],
    "answer": 1,
    "explanation": "DNS translates human-readable names to machine-readable IPs."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 126) (Set 158) (Set 432) (Set 481) (Set 903)",
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
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 5) (Set 871) (Set 904)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer by design",
      "Application Layer in most cases",
      "Session Layer as per specification"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 526) (Set 666) (Set 773) (Set 905)",
    "options": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.255",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172) (Set 264) (Set 301) (Set 906)",
    "options": [
      "Transport Layer (typical scenario)",
      "Application Layer (widely accepted)",
      "Session Layer in most cases",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the FTP service? (Set 41) (Set 84) (Set 250) (Set 690) (Set 907)",
    "options": [
      "21",
      "22",
      "25",
      "23"
    ],
    "answer": 0,
    "explanation": "FTP standard port is 21."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 804) (Set 908)",
    "options": [
      "HTTP based on convention",
      "SMTP based on convention",
      "SNMP based on convention",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 276) (Set 321) (Set 909)",
    "options": [
      "22",
      "21",
      "23",
      "25"
    ],
    "answer": 3,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 375) (Set 825) (Set 910)",
    "options": [
      "508",
      "254",
      "256",
      "252"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 911)",
    "options": [
      "Increasing network bandwidth (general case)",
      "Dividing a large network into smaller subnetworks",
      "Encrypting network packets (standard definition)",
      "Connecting different protocols in most cases"
    ],
    "answer": 1,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 912)",
    "options": [
      "25",
      "23",
      "22",
      "21"
    ],
    "answer": 2,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 30) (Set 913)",
    "options": [
      "Increasing network bandwidth under normal conditions",
      "Encrypting network packets (standard definition)",
      "Dividing a large network into smaller subnetworks",
      "Connecting different protocols (commonly used)"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 582) (Set 914)",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.255.255",
      "255.255.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the DHCP (Client) service? (Set 431) (Set 915)",
    "options": [
      "21",
      "23",
      "22",
      "68"
    ],
    "answer": 3,
    "explanation": "DHCP (Client) standard port is 68."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 305) (Set 482) (Set 916)",
    "options": [
      "Translates private IP addresses to a public IP",
      "Translates MAC to IP (standard definition)",
      "Encrypts network traffic under normal conditions",
      "Filters spam emails based on convention"
    ],
    "answer": 0,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 526) (Set 666) (Set 879) (Set 917)",
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
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 918)",
    "options": [
      "21",
      "25",
      "23",
      "22"
    ],
    "answer": 3,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 449) (Set 555) (Set 572) (Set 919)",
    "options": [
      "Increasing network bandwidth (standard definition)",
      "Connecting different protocols in practice",
      "Encrypting network packets in typical implementations",
      "Dividing a large network into smaller subnetworks"
    ],
    "answer": 3,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 15) (Set 152) (Set 169) (Set 252) (Set 920)",
    "options": [
      "Router",
      "Switch",
      "Hub",
      "Repeater"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 55) (Set 94) (Set 451) (Set 743) (Set 921)",
    "options": [
      "Data Link Layer (Layer 2)",
      "Physical Layer in most cases",
      "Transport Layer by design",
      "Network Layer in practice"
    ],
    "answer": 0,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 12) (Set 231) (Set 355) (Set 618) (Set 922)",
    "options": [
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth (commonly used)",
      "Encrypting network packets (typical scenario)",
      "Connecting different protocols as per specification"
    ],
    "answer": 0,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which IP address structure is 128 bits long? (Set 46) (Set 80) (Set 141) (Set 328) (Set 342) (Set 923)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 75) (Set 119) (Set 359) (Set 715) (Set 924)",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 172) (Set 264) (Set 301) (Set 906) (Set 925)",
    "options": [
      "Presentation Layer (Layer 6)",
      "Transport Layer in most cases",
      "Session Layer (standard definition)",
      "Application Layer (commonly used)"
    ],
    "answer": 0,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 98) (Set 542) (Set 574) (Set 926)",
    "options": [
      "Application Layer in standard usage",
      "Session Layer in practice",
      "Presentation Layer (Layer 6)",
      "Transport Layer (typical scenario)"
    ],
    "answer": 2,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 91) (Set 219) (Set 318) (Set 383) (Set 707) (Set 927)",
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
    "difficulty": "Easy",
    "question": "A standard network Switch operates at which OSI layer? (Set 4) (Set 43) (Set 55) (Set 94) (Set 451) (Set 743) (Set 928)",
    "options": [
      "Network Layer in practice",
      "Data Link Layer (Layer 2)",
      "Physical Layer in standard usage",
      "Transport Layer (general case)"
    ],
    "answer": 1,
    "explanation": "Switches use MAC addresses to forward frames at Layer 2."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SMTP service? (Set 76) (Set 202) (Set 403) (Set 929)",
    "options": [
      "23",
      "25",
      "21",
      "22"
    ],
    "answer": 1,
    "explanation": "SMTP standard port is 25."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 63) (Set 74) (Set 220) (Set 573) (Set 930)",
    "options": [
      "80",
      "21",
      "22",
      "443"
    ],
    "answer": 0,
    "explanation": "HTTP uses port 80; HTTPS uses port 443."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Hard",
    "question": "What is TCP congestion control achieved through? (Set 21) (Set 181) (Set 302) (Set 931)",
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
    "difficulty": "Easy",
    "question": "What are the seven layers of the OSI model in order? (Set 143) (Set 932)",
    "options": [
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Physical, Network, Transport, Data Link, Session, Presentation, Application",
      "Physical, Data Link, Network, Session, Transport, Presentation, Application",
      "Application, Presentation, Session, Transport, Network, Physical, Data Link"
    ],
    "answer": 0,
    "explanation": "Mnemonic: Please Do Not Throw Sausage Pizza Away."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 933)",
    "options": [
      "Router",
      "Repeater",
      "Switch",
      "Hub"
    ],
    "answer": 0,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 9) (Set 25) (Set 107) (Set 114) (Set 226) (Set 274) (Set 934)",
    "options": [
      "Hub",
      "Router",
      "Switch",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418) (Set 514) (Set 533) (Set 897) (Set 935)",
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
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /28. What is the maximum number of assignable host IP addresses on this subnet? (Set 298) (Set 571) (Set 864) (Set 936)",
    "options": [
      "12",
      "14",
      "16",
      "28"
    ],
    "answer": 1,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /28, this equals 14 hosts."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /27. What is the maximum number of assignable host IP addresses on this subnet? (Set 3) (Set 17) (Set 199) (Set 540) (Set 937)",
    "options": [
      "32",
      "28",
      "60",
      "30"
    ],
    "answer": 3,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /27, this equals 30 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "What is subnetting? (Set 2) (Set 10) (Set 938)",
    "options": [
      "Connecting different protocols (widely accepted)",
      "Encrypting network packets (primary approach)",
      "Dividing a large network into smaller subnetworks",
      "Increasing network bandwidth in standard usage"
    ],
    "answer": 2,
    "explanation": "Subnetting improves routing efficiency and security."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the Telnet service? (Set 27) (Set 753) (Set 939)",
    "options": [
      "21",
      "25",
      "22",
      "23"
    ],
    "answer": 3,
    "explanation": "Telnet standard port is 23."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 940)",
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
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 18) (Set 463) (Set 710) (Set 941)",
    "options": [
      "NAT under normal conditions",
      "DNS under normal conditions",
      "ARP (Address Resolution Protocol)",
      "DHCP under normal conditions"
    ],
    "answer": 2,
    "explanation": "ARP resolves Layer 3 IP to Layer 2 MAC addresses."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 337) (Set 804) (Set 841) (Set 942)",
    "options": [
      "FTP (File Transfer Protocol)",
      "HTTP (typical scenario)",
      "SMTP under normal conditions",
      "SNMP (typical scenario)"
    ],
    "answer": 0,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 336) (Set 362) (Set 943)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Subnetting",
    "difficulty": "Medium",
    "question": "A subnet mask is configured with CIDR notation /24. What is the maximum number of assignable host IP addresses on this subnet? (Set 375) (Set 436) (Set 872) (Set 895) (Set 944)",
    "options": [
      "254",
      "508",
      "256",
      "252"
    ],
    "answer": 0,
    "explanation": "Formula is 2^(32 - CIDR) - 2. For /24, this equals 254 hosts."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol resolves IP addresses to physical MAC addresses? (Set 18) (Set 463) (Set 581) (Set 945)",
    "options": [
      "DNS under normal conditions",
      "DHCP in typical implementations",
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
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 836) (Set 946)",
    "options": [
      "HTTP (default behavior)",
      "SMTP (widely accepted)",
      "SNMP based on convention",
      "FTP (File Transfer Protocol)"
    ],
    "answer": 3,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "What does NAT (Network Address Translation) do? (Set 53) (Set 165) (Set 196) (Set 305) (Set 947)",
    "options": [
      "Filters spam emails (standard definition)",
      "Encrypts network traffic (commonly used)",
      "Translates MAC to IP in typical implementations",
      "Translates private IP addresses to a public IP"
    ],
    "answer": 3,
    "explanation": "NAT conserves IPv4 space by mapping private IPs to a public IP."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 111) (Set 356) (Set 948)",
    "options": [
      "443",
      "8080",
      "80",
      "25"
    ],
    "answer": 0,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 247) (Set 949)",
    "options": [
      "Application Layer (commonly used)",
      "Presentation Layer (Layer 6)",
      "Transport Layer (typical scenario)",
      "Session Layer in practice"
    ],
    "answer": 1,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 47) (Set 51) (Set 60) (Set 83) (Set 176) (Set 950)",
    "options": [
      "Application Layer by design",
      "Transport Layer in most cases",
      "Session Layer (typical scenario)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 121) (Set 200) (Set 299) (Set 951)",
    "options": [
      "255.255.255.0",
      "255.255.255.255",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 0,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTP works on which default port? (Set 68) (Set 95) (Set 137) (Set 952)",
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
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 256) (Set 953)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 1) (Set 20) (Set 38) (Set 198) (Set 398) (Set 418) (Set 514) (Set 533) (Set 897) (Set 935) (Set 954)",
    "options": [
      "255.255.255.255",
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0"
    ],
    "answer": 1,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "HTTPS uses which default port? (Set 32) (Set 71) (Set 596) (Set 674) (Set 955)",
    "options": [
      "25",
      "443",
      "8080",
      "80"
    ],
    "answer": 1,
    "explanation": "HTTPS defaults to port 443 for secure TLS connections."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which protocol is primarily used for transferring files over the internet? (Set 99) (Set 315) (Set 956)",
    "options": [
      "HTTP under normal conditions",
      "SNMP as per specification",
      "FTP (File Transfer Protocol)",
      "SMTP (primary approach)"
    ],
    "answer": 2,
    "explanation": "FTP is dedicated to file upload/download."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 957)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.255.255.0",
      "255.0.0.0"
    ],
    "answer": 2,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 36) (Set 177) (Set 253) (Set 958)",
    "options": [
      "21",
      "80",
      "22",
      "23"
    ],
    "answer": 1,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "Which device operates primarily at Layer 3 (Network Layer) of the OSI model? (Set 6) (Set 128) (Set 138) (Set 147) (Set 797) (Set 959)",
    "options": [
      "Repeater",
      "Switch",
      "Router",
      "Hub"
    ],
    "answer": 2,
    "explanation": "Routers route packets across IP networks (Layer 3)."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the SSH service? (Set 134) (Set 212) (Set 213) (Set 419) (Set 577) (Set 779) (Set 960)",
    "options": [
      "21",
      "22",
      "25",
      "23"
    ],
    "answer": 1,
    "explanation": "SSH standard port is 22."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 24) (Set 350) (Set 961)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Medium",
    "question": "Which layer performs encryption and data compression in OSI? (Set 29) (Set 86) (Set 369) (Set 962)",
    "options": [
      "Session Layer (standard definition)",
      "Transport Layer in practice",
      "Application Layer (widely accepted)",
      "Presentation Layer (Layer 6)"
    ],
    "answer": 3,
    "explanation": "Presentation handles formatting, compression, and encryption."
  },
  {
    "subject": "CN",
    "topic": "Ports & Protocols",
    "difficulty": "Easy",
    "question": "In Computer Networks, what is the default transport layer port number designated for the HTTP service? (Set 963)",
    "options": [
      "23",
      "22",
      "80",
      "21"
    ],
    "answer": 2,
    "explanation": "HTTP standard port is 80."
  },
  {
    "subject": "CN",
    "topic": "CN",
    "difficulty": "Easy",
    "question": "In Class C IP addressing, what is the default subnet mask? (Set 52) (Set 61) (Set 144) (Set 336) (Set 362) (Set 593) (Set 964)",
    "options": [
      "255.255.0.0",
      "255.255.255.255",
      "255.0.0.0",
      "255.255.255.0"
    ],
    "answer": 3,
    "explanation": "Class C uses 24 bits for the network portion."
  }
];
