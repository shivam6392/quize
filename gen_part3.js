const { Q, shuffle, R, save, pad } = require('./gen_part1');

// ===================== COMPUTER NETWORKS =====================
function genCN() {
    const S = 'CN'; const all = [];
    const items = [
        { q: 'What are the seven layers of the OSI model in order?', c: 'Physical, Data Link, Network, Transport, Session, Presentation, Application', w: ['Physical, Network, Transport, Data Link, Session, Presentation, Application', 'Application, Presentation, Session, Transport, Network, Physical, Data Link', 'Physical, Data Link, Network, Session, Transport, Presentation, Application'], e: 'Mnemonic: Please Do Not Throw Sausage Pizza Away.', d: 'Easy' },
        { q: 'Which IP address structure is 128 bits long?', c: 'IPv6', w: ['IPv4', 'MAC Address', 'Subnet Mask'], e: 'IPv6 uses 128-bit hexadecimal addresses.', d: 'Easy' },
        { q: 'HTTP works on which default port?', c: '80', w: ['443', '21', '22'], e: 'HTTP uses port 80; HTTPS uses port 443.', d: 'Easy' },
        { q: 'HTTPS uses which default port?', c: '443', w: ['80', '8080', '25'], e: 'HTTPS defaults to port 443 for secure TLS connections.', d: 'Easy' },
        { q: 'Which protocol resolves IP addresses to physical MAC addresses?', c: 'ARP (Address Resolution Protocol)', w: ['DHCP', 'DNS', 'NAT'], e: 'ARP resolves Layer 3 IP to Layer 2 MAC addresses.', d: 'Easy' },
        { q: 'DHCP stands for?', c: 'Dynamic Host Configuration Protocol', w: ['Dynamic Host Connection Protocol', 'Direct Host Configuration Port', 'Distributed Host Control Protocol'], e: 'DHCP dynamically assigns IP addresses to hosts.', d: 'Easy' },
        { q: 'Which device operates primarily at Layer 3 (Network Layer) of the OSI model?', c: 'Router', w: ['Switch', 'Hub', 'Repeater'], e: 'Routers route packets across IP networks (Layer 3).', d: 'Easy' },
        { q: 'A standard network Switch operates at which OSI layer?', c: 'Data Link Layer (Layer 2)', w: ['Physical Layer', 'Network Layer', 'Transport Layer'], e: 'Switches use MAC addresses to forward frames at Layer 2.', d: 'Easy' },
        { q: 'TCP is characterized as?', c: 'Connection-oriented and reliable', w: ['Connectionless and unreliable', 'Best-effort delivery', 'Lightweight with no handshake'], e: 'TCP uses a 3-way handshake and guarantees packet ordering.', d: 'Easy' },
        { q: 'UDP is characterized as?', c: 'Connectionless and unreliable', w: ['Connection-oriented', 'Guaranteed delivery', 'Heavyweight'], e: 'UDP is low-overhead and does not perform retransmissions.', d: 'Easy' },
        { q: 'Which protocol is used to translate domain names into IP addresses?', c: 'DNS (Domain Name System)', w: ['DHCP', 'ARP', 'FTP'], e: 'DNS translates human-readable names to machine-readable IPs.', d: 'Easy' },
        { q: 'What is subnetting?', c: 'Dividing a large network into smaller subnetworks', w: ['Increasing network bandwidth', 'Connecting different protocols', 'Encrypting network packets'], e: 'Subnetting improves routing efficiency and security.', d: 'Easy' },
        { q: 'In Class C IP addressing, what is the default subnet mask?', c: '255.255.255.0', w: ['255.0.0.0', '255.255.0.0', '255.255.255.255'], e: 'Class C uses 24 bits for the network portion.', d: 'Easy' },
        { q: 'Which protocol is primarily used for transferring files over the internet?', c: 'FTP (File Transfer Protocol)', w: ['SMTP', 'HTTP', 'SNMP'], e: 'FTP is dedicated to file upload/download.', d: 'Easy' },
        { q: 'SMTP is used to?', c: 'Send emails', w: ['Retrieve emails', 'Retrieve IP addresses', 'Transfer files'], e: 'Simple Mail Transfer Protocol is used to transmit emails.', d: 'Easy' },
        { q: 'What does NAT (Network Address Translation) do?', c: 'Translates private IP addresses to a public IP', w: ['Translates MAC to IP', 'Encrypts network traffic', 'Filters spam emails'], e: 'NAT conserves IPv4 space by mapping private IPs to a public IP.', d: 'Medium' },
        { q: 'What is TCP flow control achieved through?', c: 'Sliding window mechanism', w: ['Three-way handshake', 'Congestion window sizing', 'Timeout retransmission only'], e: 'Sliding window prevents receiver buffer overflow.', d: 'Medium' },
        { q: 'What is TCP congestion control achieved through?', c: 'Congestion window (cwnd) and algorithms like Slow Start', w: ['Sliding window', 'MAC addresses', 'Checksums'], e: 'Prevents network congestion by scaling down output when drops occur.', d: 'Hard' },
        { q: 'What is the primary method of error detection in TCP/IP?', c: 'Checksum', w: ['Parity bit', 'CRC only', 'Hamming code'], e: 'TCP and UDP header fields include a checksum.', d: 'Medium' },
        { q: 'Which layer performs encryption and data compression in OSI?', c: 'Presentation Layer (Layer 6)', w: ['Application Layer', 'Session Layer', 'Transport Layer'], e: 'Presentation handles formatting, compression, and encryption.', d: 'Medium' },
    ];
    items.forEach(it => all.push(Q(S, 'CN', it.d, it.q, it.c, it.w, it.e)));
    return all;
}

// ===================== CLOUD COMPUTING =====================
function genCloud() {
    const S = 'Cloud'; const all = [];
    const items = [
        { q: 'Which cloud service model provides OS, runtime, and tools directly?', c: 'PaaS (Platform as a Service)', w: ['IaaS', 'SaaS', 'FaaS'], e: 'PaaS lets you run apps without managing the OS.', d: 'Easy' },
        { q: 'AWS EC2 stands for?', c: 'Elastic Compute Cloud', w: ['Elastic Connection Cloud', 'Easy Compute Center', 'Extended Core Engine'], e: 'EC2 is Amazon\'s resizable virtual server service.', d: 'Easy' },
        { q: 'Standard public cloud model means?', c: 'Resources are shared across multiple tenants over the internet', w: ['Resources are dedicated to a single enterprise', 'Hosted on-premises only', 'Private network access only'], e: 'Public cloud uses multi-tenant shared infrastructure.', d: 'Easy' },
        { q: 'Docker allows you to?', c: 'Package an app with its dependencies into a lightweight container', w: ['Emulate full hardware with an OS', 'Deploy physical servers', 'Store databases only'], e: 'Containers run isolated environments sharing the host OS kernel.', d: 'Easy' },
        { q: 'Kubernetes is used for?', c: 'Container orchestration and management', w: ['Creating container images', 'Version control', 'Web development'], e: 'K8s automates deployment, scaling, and load-balancing of containers.', d: 'Easy' },
        { q: 'AWS S3 is an example of?', c: 'Object Storage', w: ['Block Storage', 'Relational Database', 'File System Storage'], e: 'S3 stores flat files/folders as objects with metadata.', d: 'Easy' },
        { q: 'What is serverless computing?', c: 'Developer writes code without worrying about server provisioning', w: ['No servers are used at all', 'Running code offline', 'Physical servers are deleted'], e: 'Cloud provider dynamically manages resource allocation and scaling.', d: 'Easy' },
        { q: 'Which AWS service provides load balancing across multiple targets?', c: 'ALB (Application Load Balancer)', w: ['VPC', 'Route 53', 'CloudTrail'], e: 'ALB operates at Layer 7 to distribute HTTP/HTTPS traffic.', d: 'Medium' },
        { q: 'What is the scope of a VPC (Virtual Private Cloud)?', c: 'A logically isolated virtual network within an AWS account', w: ['A database instance', 'A physical storage array', 'An encryption service'], e: 'VPC allows securing and provisioning a private network.', d: 'Medium' },
        { q: 'What does Auto Scaling do?', c: 'Dynamically adjusts the number of EC2 instances based on load', w: ['Resizes databases automatically', 'Optimizes query performance', 'Speeds up connection latency'], e: 'Ensures application has enough resources to handle target load.', d: 'Medium' },
        { q: 'What is IaaS (Infrastructure as a Service)?', c: 'Provides virtualized computing resources (VMs, storage, networks)', w: ['Provides ready-to-run business applications', 'Provides only database access', 'Provides code execution environments without servers'], e: 'Examples: AWS EC2, GCP Compute Engine.', d: 'Easy' },
        { q: 'What is SaaS (Software as a Service)?', c: 'End-user applications hosted and managed by a provider', w: ['Virtual servers', 'Database servers', 'Code execution runtimes'], e: 'Examples: Gmail, Office 365, Salesforce.', d: 'Easy' },
        { q: 'What is hybrid cloud deployment?', c: 'Combining public cloud with private cloud/on-premises infrastructure', w: ['Using multiple public clouds', 'Using physical servers only', 'Offline storage only'], e: 'Allows keeping critical data private while using public cloud scale.', d: 'Easy' },
        { q: 'What is the AWS Shared Responsibility Model?', c: 'AWS secures the infrastructure; customer secures data and access', w: ['Customer is responsible for physical host security', 'AWS handles application code debugging', 'Both manage everything together'], e: 'Clear demarcation of cloud provider vs customer responsibilities.', d: 'Medium' },
        { q: 'Infrastructure as Code (IaC) is represented by?', c: 'Terraform / AWS CloudFormation', w: ['Docker', 'Kubernetes', 'Git'], e: 'IaC provisions resources using configuration files.', d: 'Medium' },
    ];
    items.forEach(it => all.push(Q(S, 'Cloud', it.d, it.q, it.c, it.w, it.e)));
    return all;
}

// ===================== COA =====================
function genCOA() {
    const S = 'COA'; const all = [];
    const items = [
        { q: 'What is the decimal value of binary 1010?', c: '10', w: ['8', '12', '6'], e: '1010 = 8 + 2 = 10.', d: 'Easy' },
        { q: 'Which component of CPU performs calculations like addition and logic checks?', c: 'ALU (Arithmetic Logic Unit)', w: ['Control Unit', 'Registers', 'Cache'], e: 'ALU handles math and logical operations.', d: 'Easy' },
        { q: 'What does the Program Counter (PC) store?', c: 'Address of the next instruction to be fetched', w: ['Current instruction value', 'Result of last calculation', 'Address of accumulator'], e: 'PC tracks execution flow.', d: 'Easy' },
        { q: 'Pipelining increases CPU performance by?', c: 'Executing instructions in an overlapping manner', w: ['Making instructions run faster individually', 'Increasing CPU clock speed', 'Reducing memory access time'], e: 'Pipelining parallelizes different stages of instruction processing.', d: 'Easy' },
        { q: 'What is a pipeline hazard caused by branches called?', c: 'Control Hazard', w: ['Data Hazard', 'Structural Hazard', 'Memory Hazard'], e: 'Branching changes PC, requiring stalls or flush.', d: 'Medium' },
        { q: 'Which cache mapping technique allows any block of memory to be placed anywhere in cache?', c: 'Fully Associative Mapping', w: ['Direct Mapping', 'Set-Associative Mapping', 'Index Mapping'], e: 'Fully associative allows maximum flexibility but complex lookup.', d: 'Medium' },
        { q: 'DMA stands for?', c: 'Direct Memory Access', w: ['Direct Method Address', 'Dynamic Memory Allocation', 'Dual Memory Access'], e: 'DMA bypasses CPU for bulk data transfers between I/O and RAM.', d: 'Easy' },
        { q: 'Addressing mode: operand value is specified directly in the instruction?', c: 'Immediate Addressing', w: ['Direct Addressing', 'Indirect Addressing', 'Register Addressing'], e: 'Example: ADD #5 adds value 5 directly.', d: 'Easy' },
        { q: 'RISC stands for?', c: 'Reduced Instruction Set Computer', w: ['Random Instruction Set Core', 'Reduced Info System Chip', 'Rapid Instruction Segment Computer'], e: 'RISC uses simple, single-cycle instructions.', d: 'Easy' },
        { q: 'CISC stands for?', c: 'Complex Instruction Set Computer', w: ['Core Integrated System Chip', 'Central Instruction Storage Computer', 'Compressed Instruction Segment Computer'], e: 'CISC uses complex, variable-length instructions.', d: 'Easy' },
        { q: 'What is Flynn\'s classification for parallel computers with multiple data streams but one instruction stream?', c: 'SIMD', w: ['SISD', 'MIMD', 'MISD'], e: 'SIMD = Single Instruction Multiple Data.', d: 'Medium' },
        { q: 'Cache hit ratio is defined as?', c: 'Hits / (Hits + Misses)', w: ['Misses / Hits', 'Hits / Total Memory', 'Misses / Total Memory'], e: 'Hit ratio measures cache effectiveness.', d: 'Easy' },
    ];
    items.forEach(it => all.push(Q(S, 'COA', it.d, it.q, it.c, it.w, it.e)));
    return all;
}

// ===================== FULL STACK DEVELOPMENT =====================
function genFSD() {
    const S = 'FSD'; const all = [];
    const items = [
        { q: 'What does DOM stand for in web browsers?', c: 'Document Object Model', w: ['Document Order Manager', 'Data Object Module', 'Distributed Object Model'], e: 'DOM is the structured representation of HTML elements.', d: 'Easy' },
        { q: 'CSS Box Model includes which four elements in order from inside to outside?', c: 'Content, Padding, Border, Margin', w: ['Content, Border, Padding, Margin', 'Content, Margin, Border, Padding', 'Margin, Border, Padding, Content'], e: 'Box model defines layout properties.', d: 'Easy' },
        { q: 'Which HTTP method is typically used to create a new resource on a server?', c: 'POST', w: ['GET', 'PUT', 'DELETE'], e: 'POST is standard for creating resources; PUT is for updates.', d: 'Easy' },
        { q: 'What is the purpose of React\'s useEffect hook?', c: 'To handle side effects like data fetching or DOM manipulation', w: ['To store persistent local state', 'To optimize callback references', 'To create conditional route structures'], e: 'useEffect runs side-effects during component lifecycle.', d: 'Easy' },
        { q: 'Which CSS display property makes child items flow either horizontally or vertically inside a flexible container?', c: 'display: flex', w: ['display: grid', 'display: block', 'display: inline-block'], e: 'Flexbox handles 1-directional layout.', d: 'Easy' },
        { q: 'Which CSS selector aligns elements by their id attribute?', c: '#id', w: ['.id', 'id', '*id'], e: '# prefix is for ID selectors; . prefix is for class selectors.', d: 'Easy' },
        { q: 'What does CORS stand for?', c: 'Cross-Origin Resource Sharing', w: ['Cross-Origin Request Security', 'Central Object Routing System', 'Common Object Request Schema'], e: 'CORS allows servers to specify who is allowed to fetch endpoints.', d: 'Easy' },
        { q: 'What is Event Bubbling in Javascript?', c: 'Events propagate upwards from the target element through its ancestors', w: ['Events execute concurrently on all elements', 'Events stay on target element only', 'Events propagate downwards from window'], e: 'Bubbles up from target to outer elements.', d: 'Medium' },
        { q: 'Which JS keyword is hoisting-bound but initialized as undefined?', c: 'var', w: ['let', 'const', 'function'], e: 'var variables are hoisted and default to undefined.', d: 'Medium' },
        { q: 'Which tool hashes passwords securely in Node/Express applications?', c: 'bcrypt', w: ['JWT', 'crypto-js', 'base64'], e: 'bcrypt implements salt-round hashing.', d: 'Easy' },
        { q: 'What does JWT contain?', c: 'Header, Payload, Signature', w: ['Key, Value, Salt', 'ID, Session, Cookie', 'Username, Password, Role'], e: 'Three parts separated by dots.', d: 'Easy' },
        { q: 'MERN stack consists of?', c: 'MongoDB, Express, React, Node', w: ['MySQL, Express, React, Node', 'MongoDB, Elixir, React, Node', 'MongoDB, Express, Redux, Node'], e: 'Top Javascript full-stack combination.', d: 'Easy' },
        { q: 'In SQL, which keyword groups rows having the same values?', c: 'GROUP BY', w: ['ORDER BY', 'HAVING', 'SELECT DISTINCT'], e: 'GROUP BY aggregates rows.', d: 'Easy' },
        { q: 'In MongoDB, a document wraps data in which raw format?', c: 'BSON (Binary JSON)', w: ['XML', 'Plain Text', 'CSV'], e: 'MongoDB stores documents internally as binary JSON (BSON).', d: 'Medium' },
        { q: 'What does MVC stand for in architectural design patterns?', c: 'Model-View-Controller', w: ['Map-Value-Collection', 'Model-Validation-Controller', 'Module-View-Code'], e: 'Separates database representations, templates/UI, and routers.', d: 'Easy' },
    ];
    items.forEach(it => all.push(Q(S, 'FSD', it.d, it.q, it.c, it.w, it.e)));
    return all;
}

module.exports = { genCN, genCloud, genCOA, genFSD };
