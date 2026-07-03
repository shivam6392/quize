// Helper utility
function R(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Procedural question generator by subject area
function generateProceduralQuestion(sub, id) {
    const key = sub.toLowerCase();

    // ============================================================
    // 1. DATA STRUCTURES & ALGORITHMS (DSA)
    // ============================================================
    if (key === 'dsa') {
        const type = R(['rowmajor', 'complexity', 'prefixsum', 'graph_edges']);

        if (type === 'rowmajor') {
            const rows = Math.floor(Math.random() * 15) + 5; // 5 to 19
            const cols = Math.floor(Math.random() * 20) + 10; // 10 to 29
            const base = Math.floor(Math.random() * 10) * 100 + 1000; // 1000 to 1900
            const size = R([1, 2, 4, 8]);
            const targetRow = Math.floor(Math.random() * (rows - 2)) + 1;
            const targetCol = Math.floor(Math.random() * (cols - 2)) + 1;
            const isRowMajor = Math.random() > 0.5;

            let addr = 0;
            if (isRowMajor) {
                addr = base + (targetRow * cols + targetCol) * size;
            } else {
                addr = base + (targetCol * rows + targetRow) * size;
            }

            const cor = addr.toString();
            const w = [
                (addr + 4).toString(),
                (addr - 8).toString(),
                (base + (targetRow * targetCol) * size).toString()
            ];

            return {
                subject: 'DSA',
                topic: '2D Arrays Address Mapping',
                difficulty: 'Hard',
                question: `A 2D array A[${rows}][${cols}] starts at base address ${base} with each element occupying ${size} bytes. If stored in ${isRowMajor ? 'row-major' : 'column-major'} order, what is the memory address of A[${targetRow}][${targetCol}]?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Address = Base + (${isRowMajor ? `i * Cols + j` : `j * Rows + i`}) * Size = ${base} + (${isRowMajor ? `${targetRow} * ${cols} + ${targetCol}` : `${targetCol} * ${rows} + ${targetRow}`}) * ${size} = ${cor}.`,
                _correct: cor
            };
        } else if (type === 'prefixsum') {
            const size = Math.floor(Math.random() * 6) + 5; // 5 to 10
            const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 20) + 1);
            const index = Math.floor(Math.random() * (size - 2)) + 2; // 2 to size-1
            let sum = 0;
            for (let i = 0; i <= index; i++) sum += arr[i];

            const cor = sum.toString();
            const w = [
                (sum + arr[index]).toString(),
                (sum - arr[0]).toString(),
                (sum + 5).toString()
            ];

            return {
                subject: 'DSA',
                topic: 'Prefix Sum Algorithm',
                difficulty: 'Easy',
                question: `Given the 1D integer array [${arr.join(', ')}], what is the prefix sum prefix[${index}] value (0-indexed sum from index 0 to ${index})?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Evaluating prefix sum: sum up indices from 0 to ${index} of the given array = ${cor}.`,
                _correct: cor
            };
        } else if (type === 'graph_edges') {
            const nodes = Math.floor(Math.random() * 30) + 5; // 5 to 34
            const maxEdges = (nodes * (nodes - 1)) / 2;
            const density = parseFloat((Math.random() * 0.4 + 0.3).toFixed(2)); // 30% to 70%
            const edges = Math.floor(maxEdges * density);

            const cor = edges.toString();
            const w = [
                (edges + 5).toString(),
                (edges - 3).toString(),
                maxEdges.toString()
            ];

            return {
                subject: 'DSA',
                topic: 'Graph Theory',
                difficulty: 'Medium',
                question: `An undirected simple graph G has ${nodes} vertices. If the graph connectivity density is ${Math.round(density * 100)}%, how many edges are present in G?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Max edges = V*(V-1)/2 = ${nodes}*(${nodes - 1})/2 = ${maxEdges}. At ${Math.round(density * 100)}% density, total edges = ${edges}.`,
                _correct: cor
            };
        } else {
            const dsList = ['Unsorted Array', 'Sorted Array', 'Singly Linked List', 'Doubly Linked List', 'Regular BST (worst case)', 'AVL Tree', 'Stack', 'Queue'];
            const opList = ['Search', 'Insertion', 'Deletion', 'Access'];
            const ds = R(dsList);
            const op = R(opList);

            let tc = 'O(n)';
            if (ds === 'Unsorted Array') {
                if (op === 'Search' || op === 'Deletion') tc = 'O(n)';
                else tc = 'O(1)';
            } else if (ds === 'Sorted Array') {
                if (op === 'Search') tc = 'O(log n)';
                else if (op === 'Access') tc = 'O(1)';
                else tc = 'O(n)';
            } else if (ds === 'Singly Linked List' || ds === 'Doubly Linked List') {
                if (op === 'Search' || op === 'Access') tc = 'O(n)';
                else tc = 'O(1)';
            } else if (ds === 'Regular BST (worst case)') {
                tc = 'O(n)';
            } else if (ds === 'AVL Tree') {
                tc = 'O(log n)';
            } else if (ds === 'Stack' || ds === 'Queue') {
                if (op === 'Access') tc = 'O(n)';
                else tc = 'O(1)';
            }

            const cor = tc;
            const w = ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'].filter(x => x !== cor).slice(0, 3);

            return {
                subject: 'DSA',
                topic: 'Complexity Analysis',
                difficulty: 'Medium',
                question: `What is the time complexity of performing a '${op}' operation on a ${ds}?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `For ${ds}, performing a '${op}' takes ${cor}.`,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 2. ARTIFICIAL INTELLIGENCE / ML (AIML)
    // ============================================================
    if (key === 'aiml') {
        const type = R(['confusion', 'regression', 'distance', 'datasplit']);

        if (type === 'confusion') {
            const tp = 50 + Math.floor(Math.random() * 200);
            const fp = 5 + Math.floor(Math.random() * 50);
            const fn = 5 + Math.floor(Math.random() * 50);
            const tn = 100 + Math.floor(Math.random() * 300);

            const metric = R(['Accuracy', 'Precision', 'Recall', 'Specificity']);
            let val = 0;
            if (metric === 'Accuracy') val = (tp + tn) / (tp + tn + fp + fn);
            else if (metric === 'Precision') val = tp / (tp + fp);
            else if (metric === 'Recall') val = tp / (tp + fn);
            else val = tn / (tn + fp);

            const cor = (val * 100).toFixed(2) + '%';
            const w = [
                ((val - 0.12) * 100).toFixed(2) + '%',
                ((val + 0.08) * 100).toFixed(2) + '%',
                ((val * 0.85) * 100).toFixed(2) + '%',
            ];

            return {
                subject: 'AI / ML',
                topic: 'Evaluation Metrics',
                difficulty: 'Medium',
                question: `Given a classification report with TP = ${tp}, FP = ${fp}, FN = ${fn}, and TN = ${tn}, what is the exact ${metric}?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `${metric} is calculated by standard formula using counts: TP=${tp}, FP=${fp}, FN=${fn}, TN=${tn}.`,
                _correct: cor
            };
        } else if (type === 'distance') {
            const x1 = Math.floor(Math.random() * 30);
            const y1 = Math.floor(Math.random() * 30);
            const x2 = Math.floor(Math.random() * 30) + 5;
            const y2 = Math.floor(Math.random() * 30) + 5;

            const metric = R(['Manhattan', 'Euclidean']);
            let val = 0;
            if (metric === 'Manhattan') {
                val = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            } else {
                val = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            }

            const cor = val.toFixed(2);
            const w = [
                (val + 3.25).toFixed(2),
                Math.abs(val - 1.85).toFixed(2),
                (val * 1.35).toFixed(2)
            ];

            return {
                subject: 'AI / ML',
                topic: 'KNN & Clustering',
                difficulty: 'Medium',
                question: `What is the ${metric} distance between coordinate point A(${x1}, ${y1}) and point B(${x2}, ${y2}) in a 2D Euclidean coordinate space?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `${metric} distance formula resolves to ${cor}.`,
                _correct: cor
            };
        } else if (type === 'datasplit') {
            const total = (Math.floor(Math.random() * 50) + 10) * 100; // 1000 to 6000
            const pct = R([70, 75, 80]);
            const trainCount = (total * pct) / 100;
            const testCount = total - trainCount;

            const askTrain = Math.random() > 0.5;
            const cor = (askTrain ? trainCount : testCount).toString();
            const w = [
                (askTrain ? trainCount - 250 : testCount + 250).toString(),
                (askTrain ? trainCount * 0.8 : testCount * 1.5).toString(),
                (total / 2).toString()
            ];

            return {
                subject: 'AI / ML',
                topic: 'Data Splitting',
                difficulty: 'Easy',
                question: `A machine learning pipeline is partitioning a dataset of ${total} records. If configured with a ${pct}/${100 - pct} train/test split, how many samples are in the ${askTrain ? 'training' : 'testing'} set?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `${pct}% of ${total} is ${trainCount}. ${100 - pct}% is ${testCount}.`,
                _correct: cor
            };
        } else {
            const slope = Math.floor(Math.random() * 12) + 2;
            const intercept = Math.floor(Math.random() * 20) - 10;
            const x = Math.floor(Math.random() * 40);

            const cor = (slope * x + intercept).toString();
            const w = [
                ((slope + 3) * x + intercept).toString(),
                (slope * x + intercept + 15).toString(),
                (slope * x - intercept).toString()
            ];

            return {
                subject: 'AI / ML',
                topic: 'Linear Regression',
                difficulty: 'Easy',
                question: `For a linear regression model parameterized as y = ${slope}x + (${intercept}), what is the predicted response variable y value for x = ${x}?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `y = ${slope}(${x}) + ${intercept} = ${cor}.`,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 3. JAVA (JAVA)
    // ============================================================
    if (key === 'java') {
        const type = R(['bitwise', 'modulo', 'ternary']);

        if (type === 'bitwise') {
            const a = Math.floor(Math.random() * 16) + 4; // 4 to 19
            const b = Math.floor(Math.random() * 8) + 2; // 2 to 9
            const op = R(['&', '|', '^']);

            let val = 0;
            if (op === '&') val = a & b;
            else if (op === '|') val = a | b;
            else val = a ^ b;

            const cor = val.toString();
            const w = [
                (val + 2).toString(),
                (val - 1).toString(),
                (a + b).toString()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((Math.floor(Math.random() * 30) + 25).toString());

            return {
                subject: 'Java',
                topic: 'Bitwise Operators',
                difficulty: 'Medium',
                question: `What will be the output of following statement in Java? System.out.println(${a} ${op} ${b});`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Applying bitwise ${op} between binary ${a.toString(2)} and ${b.toString(2)} yields decimal ${cor}.`,
                _correct: cor
            };
        } else if (type === 'modulo') {
            const a = Math.floor(Math.random() * 50) + 15;
            const b = Math.floor(Math.random() * 8) + 4;
            const cor = (a % b).toString();
            const w = [
                (a % b + 2).toString(),
                Math.floor(a / b).toString(),
                '0'
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((Math.floor(Math.random() * 10) + 12).toString());

            return {
                subject: 'Java',
                topic: 'Java Operators',
                difficulty: 'Easy',
                question: `What is the printed output of the Java expression: System.out.println(${a} % ${b});?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Modulo operator (%) returns the division remainder: ${a} / ${b} leaves remainder ${cor}.`,
                _correct: cor
            };
        } else {
            const x = Math.floor(Math.random() * 20) + 5;
            const y = Math.floor(Math.random() * 20) + 5;
            const addVal = Math.floor(Math.random() * 10) + 2;

            const cond = x > y;
            const cor = (cond ? x + addVal : y - addVal).toString();
            const w = [
                (cond ? x - addVal : y + addVal).toString(),
                x.toString(),
                y.toString()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((Math.floor(Math.random() * 30) + 40).toString());

            return {
                subject: 'Java',
                topic: 'Ternary Operator',
                difficulty: 'Medium',
                question: `In Java, what is the value of variable 'z' after execution of: int x = ${x}; int y = ${y}; int z = (x > y) ? x + ${addVal} : y - ${addVal};?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Condition (${x} > ${y}) evaluates to ${cond}. Thus z is assigned to ${cond ? `${x} + ${addVal}` : `${y} - ${addVal}`} which equals ${cor}.`,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 4. OPERATING SYSTEMS (OS)
    // ============================================================
    if (key === 'os') {
        const type = R(['scheduling', 'pagefaults', 'partitions']);

        if (type === 'scheduling') {
            const b1 = Math.floor(Math.random() * 10) + 3; // P1
            const b2 = Math.floor(Math.random() * 10) + 3; // P2
            const b3 = Math.floor(Math.random() * 10) + 3; // P3

            // Average turnaround time (AT) under FCFS arriving at 0
            const avgAT = ((b1 + (b1 + b2) + (b1 + b2 + b3)) / 3).toFixed(2);
            const cor = avgAT + ' ms';
            const w = [
                ((b1 + b2 + b3) / 3).toFixed(2) + ' ms',
                ((b1 + b2) / 3).toFixed(2) + ' ms',
                ((b2 + b3) / 3).toFixed(2) + ' ms'
            ];

            return {
                subject: 'OS',
                topic: 'CPU Scheduling',
                difficulty: 'Hard',
                question: `Processes P1, P2, P3 arrive at time 0 with burst times P1 = ${b1}ms, P2 = ${b2}ms, and P3 = ${b3}ms. What is the average turnaround time under non-preemptive FCFS?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Turnaround: P1 finishes at ${b1}, P2 at ${b1 + b2}, P3 at ${b1 + b2 + b3}. Avg Turnaround = (${b1} + ${b1 + b2} + ${b1 + b2 + b3}) / 3 = ${cor}.`,
                _correct: cor
            };
        } else if (type === 'pagefaults') {
            // Generating variable length strings to avoid duplicates
            const val1 = Math.floor(Math.random() * 4) + 1;
            const val2 = Math.floor(Math.random() * 4) + 5;
            const str = [val1, val2, val1, val2 - 1, val1 + 1, val2];
            const frames = R([3, 4]);

            // Emulate FIFO
            let pf = 0;
            const cache = [];
            str.forEach(p => {
                if (!cache.includes(p)) {
                    pf++;
                    if (cache.length >= frames) cache.shift();
                    cache.push(p);
                }
            });

            const cor = pf.toString() + ' page faults';
            const w = [
                (pf + 2).toString() + ' page faults',
                (pf - 1).toString() + ' page faults',
                '3 page faults'
            ];

            return {
                subject: 'OS',
                topic: 'Virtual Memory & Demand Paging',
                difficulty: 'Hard',
                question: `In OS virtual memory, using FIFO algorithm on empty cache memory with ${frames} frames, how many page faults occur for access string [${str.join(', ')}]?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Tracing FIFO: ${str.join('➔')}. Cache slots = ${frames}. Total page fault hits = ${cor}.`,
                _correct: cor
            };
        } else {
            const req = Math.floor(Math.random() * 100) + 100; // 100 to 199 KB
            const partitions = [req - 40, req + 20, req + 80, req - 10];

            // Best Fit is the smallest large-enough partition
            const sortedValids = partitions.filter(x => x >= req).sort((a, b) => a - b);
            const corVal = sortedValids[0] || 0;

            const cor = corVal.toString() + ' KB partition';
            const w = partitions.filter(x => x !== corVal).map(x => x.toString() + ' KB partition');
            if (w.length < 3) w.push('None of the partitions');

            return {
                subject: 'OS',
                topic: 'Contiguous Memory Allocation',
                difficulty: 'Medium',
                question: `A process requests ${req} KB memory. Block chunks available are [${partitions.join(', ')}] KB. Which partition is allocated under the Best-Fit memory placement scheme?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Best-Fit searches for the smallest partition block that is large enough (>= ${req} KB), which selects ${cor}.`,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 5. COMPUTER NETWORKS (CN)
    // ============================================================
    if (key === 'cn') {
        const type = R(['subnet', 'port', 'latency']);

        if (type === 'subnet') {
            const cidr = Math.floor(Math.random() * 7) + 24; // /24 to /30
            const hostIPs = Math.pow(2, 32 - cidr) - 2;
            const subnetOctet = 256 - Math.pow(2, 32 - cidr);

            const subName = cidr >= 24 ? `255.255.255.${subnetOctet}` : `255.255.${subnetOctet}.0`;
            const cor = hostIPs.toString() + ' assignable hosts';
            const w = [
                (hostIPs + 2).toString() + ' assignable hosts',
                (hostIPs * 2).toString() + ' assignable hosts',
                (hostIPs + 4).toString() + ' assignable hosts'
            ];

            return {
                subject: 'CN',
                topic: 'Subnet Masking',
                difficulty: 'Medium',
                question: `An enterprise interface is configured with the subnet mask ${subName} (corresponding to CIDR notation /${cidr}). How many usable host IP addresses are supported?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Formula = 2^(32-CIDR) - 2. For /${cidr}, standard calculation is 2^${32 - cidr} - 2 = ${cor}.`,
                _correct: cor
            };
        } else if (type === 'latency') {
            const size = Math.floor(Math.random() * 5) * 1000 + 4000; // 4000 to 8000 bits
            const rate = R([10, 100, 1000]); // kbps
            const delay = (size / (rate * 1000)) * 1000; // ms

            const cor = delay.toFixed(1) + ' milliseconds';
            const w = [
                (delay * 10).toFixed(1) + ' milliseconds',
                (delay / 2).toFixed(1) + ' milliseconds',
                '0.5 milliseconds'
            ];
            return {
                subject: 'CN',
                topic: 'Network Performance Calculations',
                difficulty: 'Hard',
                question: `A router transmits a packet of size ${size} bits onto a communication link with bandwidth speed of ${rate} kbps. What is the transmission delay?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Delay = Packet size / Bandwidth = ${size} bits / (${rate} * 1000 bps) = ${delay} ms = ${cor}.`,
                _correct: cor
            };
        } else {
            const ports = [
                { svc: 'SSH Secure Shell login', p: '22', layer: 'Application Layer' },
                { svc: 'DNS domain resolution protocol', p: '53', layer: 'Application Layer' },
                { svc: 'SMTP mail forwarding protocol', p: '25', layer: 'Application Layer' },
                { svc: 'HTTP web transfer server default', p: '80', layer: 'Application Layer' },
                { svc: 'HTTPS SSL/TLS protected website access', p: '443', layer: 'Application Layer' },
                { svc: 'IMAP webmail access utility', p: '143', layer: 'Application Layer' }
            ];
            const target = R(ports);
            const cor = 'Default Port ' + target.p;
            const w = ports.filter(x => x.p !== target.p).map(x => 'Default Port ' + x.p).slice(0, 3);

            return {
                subject: 'CN',
                topic: 'Port Protocols Mapping',
                difficulty: 'Easy',
                question: `In Internet networking architecture protocols, which destination port is used by default for the ${target.svc}?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Standard TCP/IP RFC designations link ${target.svc} to ${cor}.`,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 6. CLOUD COMPUTING (CLOUD)
    // ============================================================
    if (key === 'cloud') {
        const type = R(['sla', 'pricing', 'storage', 'instance', 'region', 'scaling']);

        if (type === 'sla') {
            const pctIndex = R([0, 1, 2]);
            const pcts = ['99.9%', '99.99%', '99.999%'];
            const values = ['8.76 hours per year', '52.56 minutes per year', '5.26 minutes per year'];
            const cor = values[pctIndex];
            const w = values.filter(x => x !== cor);
            w.push('365.25 minutes per year');
            return {
                subject: 'Cloud', topic: 'SLA Calculations', difficulty: 'Medium',
                question: `A cloud provider guarantees ${pcts[pctIndex]} uptime SLA. What is the maximum allowed annual downtime?`,
                options: shuffle([cor, ...w]), answer: -1,
                explanation: `${pcts[pctIndex]} uptime allows ${cor} of downtime.`,
                _correct: cor
            };
        } else if (type === 'pricing') {
            const hours = Math.floor(Math.random() * 720) + 100;
            const rate = (Math.random() * 0.5 + 0.05).toFixed(3);
            const cost = (hours * parseFloat(rate)).toFixed(2);
            const cor = '$' + cost;
            const w = [
                '$' + (parseFloat(cost) + 15.50).toFixed(2),
                '$' + (parseFloat(cost) * 0.6).toFixed(2),
                '$' + (parseFloat(cost) + 42.00).toFixed(2)
            ];
            return {
                subject: 'Cloud', topic: 'Cost Management', difficulty: 'Medium',
                question: `An EC2 instance runs for ${hours} hours at $${rate}/hour. What is the total on-demand compute cost?`,
                options: shuffle([cor, ...w]), answer: -1,
                explanation: `${hours} × $${rate} = ${cor}.`,
                _correct: cor
            };
        } else if (type === 'storage') {
            const gb = Math.floor(Math.random() * 500) + 50;
            const pricePerGB = (Math.random() * 0.05 + 0.01).toFixed(3);
            const cost = (gb * parseFloat(pricePerGB)).toFixed(2);
            const cor = '$' + cost;
            const w = [
                '$' + (parseFloat(cost) + 5.25).toFixed(2),
                '$' + (parseFloat(cost) * 1.8).toFixed(2),
                '$' + (parseFloat(cost) - 2.10).toFixed(2)
            ];
            return {
                subject: 'Cloud', topic: 'Storage Pricing', difficulty: 'Easy',
                question: `Storing ${gb} GB in S3 Standard at $${pricePerGB}/GB/month costs how much monthly?`,
                options: shuffle([cor, ...w]), answer: -1,
                explanation: `${gb} × $${pricePerGB} = ${cor} per month.`,
                _correct: cor
            };
        } else if (type === 'instance') {
            const instances = [
                { name: 't2.micro', vcpu: '1 vCPU, 1 GB RAM' },
                { name: 't3.medium', vcpu: '2 vCPU, 4 GB RAM' },
                { name: 'm5.large', vcpu: '2 vCPU, 8 GB RAM' },
                { name: 'c5.xlarge', vcpu: '4 vCPU, 8 GB RAM' },
                { name: 'r5.large', vcpu: '2 vCPU, 16 GB RAM' },
                { name: 'p3.2xlarge', vcpu: '8 vCPU, 61 GB RAM' }
            ];
            const target = R(instances);
            const cor = target.vcpu;
            const w = instances.filter(i => i.vcpu !== cor).map(i => i.vcpu).slice(0, 3);
            return {
                subject: 'Cloud', topic: 'Compute Instances', difficulty: 'Medium',
                question: `What are the default specifications of an AWS ${target.name} instance type?`,
                options: shuffle([cor, ...w]), answer: -1,
                explanation: `AWS ${target.name} provides ${cor}.`,
                _correct: cor
            };
        } else if (type === 'region') {
            const regions = [
                { code: 'us-east-1', name: 'N. Virginia region' },
                { code: 'us-west-2', name: 'Oregon region' },
                { code: 'eu-west-1', name: 'Ireland region' },
                { code: 'ap-south-1', name: 'Mumbai region' },
                { code: 'ap-southeast-1', name: 'Singapore region' },
                { code: 'eu-central-1', name: 'Frankfurt region' }
            ];
            const target = R(regions);
            const cor = target.name;
            const w = regions.filter(r => r.name !== cor).map(r => r.name).slice(0, 3);
            return {
                subject: 'Cloud', topic: 'AWS Regions', difficulty: 'Easy',
                question: `Which geographic location does the AWS region code '${target.code}' correspond to?`,
                options: shuffle([cor, ...w]), answer: -1,
                explanation: `${target.code} is the ${cor}.`,
                _correct: cor
            };
        } else {
            const curr = Math.floor(Math.random() * 4) + 2;
            const target = curr + Math.floor(Math.random() * 6) + 2;
            const added = target - curr;
            const cor = added + ' new instances';
            const w = [
                (added + 2) + ' new instances',
                (added - 1) + ' new instances',
                (added * 2) + ' new instances'
            ];
            return {
                subject: 'Cloud', topic: 'Auto Scaling', difficulty: 'Easy',
                question: `An auto-scaling group has ${curr} running instances and a desired capacity of ${target}. How many instances will be launched?`,
                options: shuffle([cor, ...w]), answer: -1,
                explanation: `${target} desired - ${curr} running = ${added} new instances.`,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 7. COMPUTER ORGANIZATION & ARCHITECTURE (COA)
    // ============================================================
    if (key === 'coa') {
        const type = R(['binary', 'hex', 'cache_split']);

        if (type === 'binary') {
            const val = Math.floor(Math.random() * 200) + 15;
            const cor = val.toString(2);
            const w = [
                (val + 5).toString(2),
                (val - 3).toString(2),
                (val + 17).toString(2)
            ];
            return {
                subject: 'COA',
                topic: 'Binary Conversions',
                difficulty: 'Easy',
                question: `Convert the decimal integer base-10 number ${val} to its binary representation.`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `${val} in binary base-2 is format = ${cor}.`,
                _correct: cor
            };
        } else if (type === 'hex') {
            const val = Math.floor(Math.random() * 500) + 60;
            const cor = '0x' + val.toString(16).toUpperCase();
            const w = [
                '0x' + (val - 12).toString(16).toUpperCase(),
                '0x' + (val + 32).toString(16).toUpperCase(),
                '0x' + (val * 2).toString(16).toUpperCase()
            ];
            return {
                subject: 'COA',
                topic: 'Hexadecimal Conversions',
                difficulty: 'Medium',
                question: `Determine the correct hexadecimal representation of the decimal value ${val}.`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Decimal ${val} translates directly to Base-16 hexadecimal as ${cor}.`,
                _correct: cor
            };
        } else {
            const addrBits = R([16, 24, 32]);
            const cacheSizeKB = R([16, 32, 64, 128]);
            const blockSizeB = R([16, 32, 64]);

            const offsetBits = Math.log2(blockSizeB);
            const indexBits = Math.log2((cacheSizeKB * 1024) / blockSizeB);
            const tagBits = addrBits - indexBits - offsetBits;

            const ask = R(['tag', 'index', 'offset']);
            let corVal = tagBits;
            if (ask === 'index') corVal = indexBits;
            else if (ask === 'offset') corVal = offsetBits;

            const cor = corVal.toString() + ' bits';
            const w = [
                (corVal + 2).toString() + ' bits',
                Math.abs(corVal - 3).toString() + ' bits',
                (addrBits - corVal).toString() + ' bits'
            ];

            return {
                subject: 'COA',
                topic: 'Cache Architecture',
                difficulty: 'Hard',
                question: `In a direct-mapped cache architecture using ${addrBits}-bit memory addresses, cache size is ${cacheSizeKB} KB, and line block size is ${blockSizeB} bytes. What is the length of the ${ask.toUpperCase()} bitfield?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `For ${addrBits}-bit addresses: Offset = log2(${blockSizeB}) = ${offsetBits} bits. Index = log2(${cacheSizeKB}KB/${blockSizeB}B) = ${indexBits} bits. Tag = ${addrBits} - Index - Offset = ${tagBits} bits.`,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 8. FULL STACK DEVELOPMENT (FSD)
    // ============================================================
    if (key === 'fsd') {
        const type = R(['color', 'status', 'sqlcount']);

        if (type === 'color') {
            const r = Math.floor(Math.random() * 6) * 51; // gives multiples of 51 (web safe)
            const g = Math.floor(Math.random() * 6) * 51;
            const b = Math.floor(Math.random() * 6) * 51;

            const toHex = (x) => x.toString(16).padStart(2, '0').toUpperCase();
            const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

            const cor = `rgb(${r}, ${g}, ${b})`;
            const w = [
                `rgb(${Math.min(255, r + 51)}, ${g}, ${b})`,
                `rgb(${r}, ${Math.max(0, g - 51)}, ${b})`,
                `rgb(0, 0, 0)`
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push(`rgb(${Math.floor(Math.random() * 255)}, 255, 255)`);

            return {
                subject: 'FSD',
                topic: 'CSS Hex Colors',
                difficulty: 'Easy',
                question: `In Web Development CSS colors styling, which RGB functional code represents color hex value '${hex}'?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Hex color values directly match RGB components: ${hex} <=> R=${r}, G=${g}, B=${b} => ${cor}.`,
                _correct: cor
            };
        }

        if (type === 'sqlcount') {
            const threshold = Math.floor(Math.random() * 30) + 18; // 18 to 47
            const ageVal1 = threshold - 2;
            const ageVal2 = threshold + 5;
            const ageVal3 = threshold - 1;

            const cor = `Query output is all rows with age values strictly larger than ${threshold}`;
            const w = [
                `Query output includes only rows having age exactly ${threshold} inside the database`,
                `Query output returns count representing table column rows having age less than or equal to ${threshold}`,
                `Query output returns errors due to invalid query syntax parameters on filtering age`
            ];

            return {
                subject: 'FSD',
                topic: 'SQL Databases Select Queries',
                difficulty: 'Medium',
                question: `For a database table containing age values, what does query: SELECT * FROM Students WHERE age > ${threshold}; filter for?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `The '>' operator returns records where the column value is strictly greater than the threshold ${threshold}.`,
                _correct: cor
            };
        }

        // default status checks
        const statusList = [
            { code: '200', text: 'OK (Request succeeded)' },
            { code: '201', text: 'Created (Resource successfully created)' },
            { code: '204', text: 'No Content (Request succeeded but returns no content body)' },
            { code: '400', text: 'Bad Request (Server cannot interpret payload syntax)' },
            { code: '401', text: 'Unauthorized (Target credentials invalid or missing)' },
            { code: '403', text: 'Forbidden (Client validated but has no authorization permissions)' },
            { code: '404', text: 'Not Found (Target URL resource does not exist)' }
        ];
        const target = R(statusList);
        const cor = target.text;
        const w = statusList.filter(x => x.code !== target.code).map(x => x.text).slice(0, 3);

        return {
            subject: 'FSD',
            topic: 'REST HTTP Status Codes',
            difficulty: 'Easy',
            question: `In REST Web Service API designs, what behavior does the HTTP response status code ${target.code} signal?`,
            options: shuffle([cor, ...w]),
            answer: -1,
            explanation: `HTTP RFC specifications correlate status ${target.code} with '${cor}'.`,
            _correct: cor
        };
    }

    // Default safe fallback if subject mismatch
    return {
        subject: sub,
        topic: 'General Questions',
        difficulty: 'Easy',
        question: `What is the output behavior of the generic test system variable #${id}?`,
        options: shuffle(['Standard system output', 'Unassigned loop value', 'Memory index fault error', 'System diagnostic test']),
        answer: -1,
        explanation: 'Procedural diagnostic question.',
        _correct: 'Standard system output'
    };
}

module.exports = { generateProceduralQuestion, R };
