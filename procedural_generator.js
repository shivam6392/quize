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
            const rows = Math.floor(Math.random() * 25) + 5; // 5 to 29
            const cols = Math.floor(Math.random() * 30) + 10; // 10 to 39
            const base = Math.floor(Math.random() * 20) * 100 + 1000; // 1000 to 2900
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
                (addr + (isRowMajor ? cols : rows) * size).toString(),
                (addr - size * 2).toString(),
                (base + (targetRow * targetCol) * size).toString()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((addr + 16).toString());

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
            const size = Math.floor(Math.random() * 8) + 5; // 5 to 12
            const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 50) + 1);
            const index = Math.floor(Math.random() * (size - 3)) + 2; // 2 to size-2
            let sum = 0;
            for (let i = 0; i <= index; i++) sum += arr[i];

            const cor = sum.toString();
            const w = [
                (sum + arr[index]).toString(),
                (sum - arr[0]).toString(),
                (sum + 17).toString()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((sum + 30).toString());

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
            const nodes = Math.floor(Math.random() * 50) + 10; // 10 to 59
            const maxEdges = (nodes * (nodes - 1)) / 2;
            const density = parseFloat((Math.random() * 0.5 + 0.2).toFixed(2)); // 20% to 70%
            const edges = Math.floor(maxEdges * density);

            const cor = edges.toString();
            const w = [
                (edges + nodes).toString(),
                (edges - Math.floor(nodes / 2)).toString(),
                maxEdges.toString()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((edges + 4).toString());

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
            const tp = 50 + Math.floor(Math.random() * 300);
            const fp = 5 + Math.floor(Math.random() * 80);
            const fn = 5 + Math.floor(Math.random() * 80);
            const tn = 100 + Math.floor(Math.random() * 500);

            const metric = R(['Accuracy', 'Precision', 'Recall', 'Specificity']);
            let val = 0;
            if (metric === 'Accuracy') val = (tp + tn) / (tp + tn + fp + fn);
            else if (metric === 'Precision') val = tp / (tp + fp);
            else if (metric === 'Recall') val = tp / (tp + fn);
            else val = tn / (tn + fp);

            const cor = (val * 100).toFixed(2) + '%';
            const w = [
                ((val - 0.14) * 100).toFixed(2) + '%',
                ((val + 0.09) * 100).toFixed(2) + '%',
                ((val * 0.88) * 100).toFixed(2) + '%',
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
            const x1 = Math.floor(Math.random() * 50);
            const y1 = Math.floor(Math.random() * 50);
            const x2 = Math.floor(Math.random() * 50) + 5;
            const y2 = Math.floor(Math.random() * 50) + 5;

            const metric = R(['Manhattan', 'Euclidean']);
            let val = 0;
            if (metric === 'Manhattan') {
                val = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            } else {
                val = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            }

            const cor = val.toFixed(2);
            const w = [
                (val + 4.15).toFixed(2),
                Math.abs(val - 2.25).toFixed(2),
                (val * 1.25).toFixed(2)
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((val + 10.00).toFixed(2));

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
            const total = (Math.floor(Math.random() * 190) + 10) * 100; // 1000 to 20000
            const pct = R([70, 75, 80]);
            const trainCount = (total * pct) / 100;
            const testCount = total - trainCount;

            const askTrain = Math.random() > 0.5;
            const cor = (askTrain ? trainCount : testCount).toString();
            const w = [
                (askTrain ? trainCount - 500 : testCount + 500).toString(),
                (askTrain ? trainCount * 0.75 : testCount * 1.25).toString(),
                (total / 2).toString()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((total - 100).toString());

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
            const slope = Math.floor(Math.random() * 25) + 2;
            const intercept = Math.floor(Math.random() * 40) - 20;
            const x = Math.floor(Math.random() * 100);

            const cor = (slope * x + intercept).toString();
            const w = [
                ((slope + 4) * x + intercept).toString(),
                (slope * x + intercept + 25).toString(),
                (slope * x - intercept).toString()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((slope * x + 77).toString());

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
            const a = Math.floor(Math.random() * 200) + 10; // 10 to 209
            const b = Math.floor(Math.random() * 100) + 5; // 5 to 104
            const op = R(['&', '|', '^']);

            let val = 0;
            if (op === '&') val = a & b;
            else if (op === '|') val = a | b;
            else val = a ^ b;

            const cor = val.toString();
            const w = [
                (val + 3).toString(),
                (val - 2).toString(),
                (a + b).toString()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((val + 24).toString());

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
            const a = Math.floor(Math.random() * 5000) + 200;
            const b = Math.floor(Math.random() * 50) + 10;
            const cor = (a % b).toString();
            const w = [
                (a % b + 3).toString(),
                Math.floor(a / b).toString(),
                '0'
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((a % b + 7).toString());

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
            const x = Math.floor(Math.random() * 200) + 10;
            const y = Math.floor(Math.random() * 200) + 10;
            const addVal = Math.floor(Math.random() * 30) + 5;

            const cond = x > y;
            const cor = (cond ? x + addVal : y - addVal).toString();
            const w = [
                (cond ? x - addVal : y + addVal).toString(),
                x.toString(),
                y.toString()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push((Math.floor(Math.random() * 300) + 250).toString());

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
            const b1 = Math.floor(Math.random() * 40) + 5; // P1: 5 to 44
            const b2 = Math.floor(Math.random() * 40) + 5; // P2: ...
            const b3 = Math.floor(Math.random() * 40) + 5; // P3: ...

            // Average turnaround time (AT) under FCFS arriving at 0
            const avgAT = ((b1 + (b1 + b2) + (b1 + b2 + b3)) / 3).toFixed(2);
            const cor = avgAT + ' ms';
            const w = [
                ((b1 + b2 + b3) / 3).toFixed(2) + ' ms',
                ((b1 + b2) / 3).toFixed(2) + ' ms',
                ((b2 + b3) / 3).toFixed(2) + ' ms'
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push(((b1 + b2 + b3 + 12) / 3).toFixed(2) + ' ms');

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
            // Generating reference string of length 8 with 8 distinct elements
            const arrSize = 8;
            const str = [];
            for (let i = 0; i < arrSize; i++) {
                str.push(Math.floor(Math.random() * 7) + 1); // pages 1 to 7
            }
            const frames = R([3, 4, 5]);

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
                (pf === 8 ? '5' : '8') + ' page faults'
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push('3 page faults');

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
            const req = Math.floor(Math.random() * 500) + 100; // 100 to 599 KB
            const partitions = [req - 60, req + 30, req + 120, req - 15];

            // Best Fit is the smallest large-enough partition
            const sortedValids = partitions.filter(x => x >= req).sort((a, b) => a - b);
            const corVal = sortedValids[0] || 0;

            const cor = corVal.toString() + ' KB partition';
            const w = partitions.filter(x => x !== corVal).map(x => x.toString() + ' KB partition');
            if (w.length < 3) w.push('None of the partitions');
            while (w.length < 3) w.push((req + 200).toString() + ' KB partition');

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
        const type = R(['subnet', 'latency', 'transmission']);

        if (type === 'subnet') {
            const octet1 = R([10, 172, 192]);
            let octet2 = 168;
            if (octet1 === 10) octet2 = Math.floor(Math.random() * 250) + 1;
            else if (octet1 === 172) octet2 = Math.floor(Math.random() * 16) + 16;

            const octet3 = Math.floor(Math.random() * 254) + 1;
            const octet4 = Math.floor(Math.random() * 254) + 1;
            const cidr = Math.floor(Math.random() * 9) + 22; // /22 to /30

            // Calculations for subnet
            const ipInt = (octet1 << 24) | (octet2 << 16) | (octet3 << 8) | octet4;
            const mask = ~((1 << (32 - cidr)) - 1);
            const netInt = ipInt & mask;

            const netIP = [
                (netInt >>> 24) & 255,
                (netInt >>> 16) & 255,
                (netInt >>> 8) & 255,
                netInt & 255
            ].join('.');

            const broadInt = netInt | ~mask;
            const broadIP = [
                (broadInt >>> 24) & 255,
                (broadInt >>> 16) & 255,
                (broadInt >>> 8) & 255,
                broadInt & 255
            ].join('.');

            const askNetwork = Math.random() > 0.5;
            const cor = askNetwork ? netIP : broadIP;

            // Generate wrong options by altering network segments slightly (offset base octet4)
            const baseO4 = netInt & 255;
            const step = Math.pow(2, 32 - cidr);
            const w = [
                [(octet1), (octet2), (octet3), (baseO4 + step) & 255].join('.'),
                [(octet1), (octet2), (octet3), Math.max(0, baseO4 - step) & 255].join('.'),
                [(octet1), (octet2), (octet3 + 1), baseO4].join('.')
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push('255.255.255.255');

            return {
                subject: 'CN',
                topic: 'IP Subnetting',
                difficulty: 'Hard',
                question: `An interface is configured with host IP address ${octet1}.${octet2}.${octet3}.${octet4} and subnet mask /${cidr}. What is the correct ${askNetwork ? 'Network ID (Subnet Address)' : 'Directed Broadcast Address'} of this subnet?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `For host ${octet1}.${octet2}.${octet3}.${octet4}/${cidr}, the subnet mask bits reveal the network ID is ${netIP} and broadcast address is ${broadIP}.`,
                _correct: cor
            };
        } else if (type === 'latency') {
            const sizeKB = Math.floor(Math.random() * 490) * 10 + 100; // 100 to 5000 KB
            const rateMbps = Math.floor(Math.random() * 99) + 2; // 2 to 100 Mbps

            // Delay in milliseconds: (sizeKB * 1024 * 8) / (rateMbps * 1000)
            const sizeBits = sizeKB * 1024 * 8;
            const rateBps = rateMbps * 1000000;
            const delayMs = (sizeBits / rateBps) * 1000;

            const cor = delayMs.toFixed(3) + ' ms';
            const w = [
                (delayMs * 1.5).toFixed(3) + ' ms',
                (delayMs / 4).toFixed(3) + ' ms',
                (delayMs + 12.5).toFixed(3) + ' ms'
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push('1.250 ms');

            return {
                subject: 'CN',
                topic: 'Network Performance Calculations',
                difficulty: 'Hard',
                question: `A client sends a file of size ${sizeKB} KB over a point-to-point network link with transmission bandwidth rate of ${rateMbps} Mbps. What is the theoretical transmission delay?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Delay = File size in bits / Link rate = (${sizeKB} * 1024 * 8) / (${rateMbps} * 10^6) = ${cor}.`,
                _correct: cor
            };
        } else {
            const sizeBits = Math.floor(Math.random() * 100) * 50 + 1000; // 1000 to 6000 bits
            const rateKbps = R([10, 20, 50, 100, 200, 500]); // kbps

            // Delay in ms
            const delayMs = (sizeBits / (rateKbps * 1000)) * 1000;
            const cor = delayMs.toFixed(2) + ' ms';
            const w = [
                (delayMs * 10).toFixed(2) + ' ms',
                (delayMs / 2).toFixed(2) + ' ms',
                (delayMs + 4.5).toFixed(2) + ' ms'
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push('10.00 ms');

            return {
                subject: 'CN',
                topic: 'Transmission Delays',
                difficulty: 'Medium',
                question: `A router transmits a packet of size ${sizeBits} bits onto a communication link with bandwidth speed of ${rateKbps} kbps. What is the transmission delay?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Delay = Size / Rate = ${sizeBits} bits / (${rateKbps} * 1000 bps) = ${cor}.`,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 6. CLOUD COMPUTING (CLOUD)
    // ============================================================
    if (key === 'cloud') {
        const type = R(['iam', 'k8s', 'vpc', 'dynamodb', 'docker']);

        if (type === 'iam') {
            const bucket = R(['prod-assets-s3', 'finance-ledger-raw', 'customer-identity-keys']);
            const folder1 = R(['confidential', 'payroll', 'archives', 'system-logs']);
            const action1 = R(['GetObject', 'PutObject', 'DeleteObject']);
            const effect1 = R(['Allow', 'Deny']);
            const effect2 = effect1 === 'Allow' ? 'Deny' : 'Allow';

            const requestOnConfidential = Math.random() > 0.5;
            let cor = '';
            let explanation = '';

            if (requestOnConfidential) {
                cor = 'Access Denied (Explicit Deny)';
                explanation = `Under AWS IAM policy evaluation rules, if any matching statement contains an explicit 'Deny' (which is the case here since one statement is 'Allow' and the other is 'Deny'), it always overrides any matching 'Allow' statements. Hence, access is Denied.`;
            } else {
                cor = effect1 === 'Allow' ? 'Access Allowed' : 'Access Denied (Explicit Deny)';
                explanation = `For target path outside the '/${folder1}/' namespace, only Rule A applies (Effect: ${effect1}). ${effect1 === 'Allow' ? 'Since it matches the Allow statement and there are no matching Deny statements, the request is Allowed.' : 'Since the matching statement has Deny, it is explicitly Denied.'}`;
            }

            const qTextStr = `Consider the following AWS IAM policy definition for an S3 bucket:
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "RuleA",
      "Effect": "${effect1}",
      "Action": ["s3:${action1}"],
      "Resource": ["arn:aws:s3:::${bucket}/*"]
    },
    {
      "Sid": "RuleB",
      "Effect": "${effect2}",
      "Action": ["s3:${action1}"],
      "Resource": ["arn:aws:s3:::${bucket}/${folder1}/*"]
    }
  ]
}
If an IAM role containing this policy attempts to make an API call to 's3:${action1}' on target file 'arn:aws:s3:::${bucket}/${requestOnConfidential ? folder1 : 'public-docs'}/secret.keys', what is the final decision outcome under AWS policy evaluation logic?`;

            const w = [
                'Access Allowed',
                'Access Denied (Explicit Deny)',
                'Access Denied (Implicit Deny due to missing permissions)',
                'Access Allowed (but restricted to Read-Only metadata checks)'
            ].filter(x => x !== cor).slice(0, 3);

            return {
                subject: 'Cloud',
                topic: 'Cloud Security & IAM Policy Evaluation',
                difficulty: 'Hard',
                question: qTextStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: explanation,
                _correct: cor
            };
        } else if (type === 'k8s') {
            const delay = Math.floor(Math.random() * 20) + 10; // 10 to 29 s
            const period = Math.floor(Math.random() * 10) + 5; // 5 to 14 s
            const threshold = Math.floor(Math.random() * 4) + 2; // 2 to 5 failures
            const time = delay + (threshold - 1) * period;

            const questionStr = `A Kubernetes Pod deployment defines the following livenessProbe inside the container spec:
livenessProbe:
  tcpSocket:
    port: 8080
  initialDelaySeconds: ${delay}
  periodSeconds: ${period}
  failureThreshold: ${threshold}

If the container application crashes internally and fails every TCP check starting from the startup moment, of the time milestones elapsed since the pod initialized, exactly at which second will Kubelet trigger the first container restart?`;

            const cor = `${time} seconds`;
            const w = [
                `${delay + threshold * period} seconds`,
                `${delay} seconds`,
                `${(threshold - 1) * period} seconds`,
                `${delay + period} seconds`
            ].filter(x => x !== cor).slice(0, 3);
            const explanation = `Liveness probes are initiated after initialDelaySeconds (${delay}s). Subsequent checks run every periodSeconds (${period}s). The container is restarted when failures reach the failureThreshold (${threshold} consecutive failures). Calculated: Start checks at ${delay}s (failure 1), then ${delay + period}s (failure 2), and finally ${delay + (threshold - 1) * period}s = ${time}s (failure ${threshold}), triggering container kill/restart.`;

            return {
                subject: 'Cloud',
                topic: 'Containers & Orchestration (K8s)',
                difficulty: 'Hard',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: explanation,
                _correct: cor
            };
        } else if (type === 'vpc') {
            const subnetAName = R(['Subnet-Private-A', 'App-Subnet-1', 'DB-Subnet-Primary']);
            const destIP = R(['10.0.0.45', '10.0.0.194', '10.0.24.8', '192.168.1.15']);

            let cor = '';
            let explanation = '';

            if (destIP === '10.0.0.45') {
                cor = 'NAT Gateway (nat-gateway)';
                explanation = `The IP address 10.0.0.45 matches 10.0.0.0/16, 10.0.0.0/24, and 0.0.0.0/0. Under the Longest Prefix Match routing rule, /24 is selected because it is the most specific network prefix.`;
            } else if (destIP === '10.0.0.194') {
                cor = 'VPC Peering (peering-connection)';
                explanation = `The IP address 10.0.0.194 matches 10.0.0.0/16, 10.0.0.0/24, 10.0.0.128/25, and 0.0.0.0/0. The /25 mask is the longest prefix matching this target.`;
            } else if (destIP === '10.0.24.8') {
                cor = 'Local Router (local)';
                explanation = `The IP address 10.0.24.8 matches 10.0.0.0/16 and 0.0.0.0/0. The /16 prefix is more specific than the /0 default route.`;
            } else {
                cor = 'Internet Gateway (internet-gateway)';
                explanation = `The IP address 192.168.1.15 only matches the default route 0.0.0.0/0. Thus it is routed through the Internet Gateway.`;
            }

            const questionStr = `An AWS VPC contains a custom Route Table configured as follows:
- Destination: 10.0.0.0/16  ==> Target: local
- Destination: 10.0.0.0/24  ==> Target: nat-gateway
- Destination: 10.0.0.128/25 ==> Target: peering-connection
- Destination: 0.0.0.0/0     ==> Target: internet-gateway

An EC2 instance in ${subnetAName} initiates an egress socket stream connection targeting destination IP: ${destIP}. What is the route target used by the VPC virtual router?`;

            const w = [
                'Local Router (local)',
                'NAT Gateway (nat-gateway)',
                'VPC Peering (peering-connection)',
                'Internet Gateway (internet-gateway)'
            ].filter(x => x !== cor);

            return {
                subject: 'Cloud',
                topic: 'AWS VPC Networking',
                difficulty: 'Hard',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: explanation,
                _correct: cor
            };
        } else if (type === 'dynamodb') {
            const wRate = Math.floor(Math.random() * 20) * 10 + 50;
            const wSize = Math.floor(Math.random() * 4) + 1.2;
            const rRate = Math.floor(Math.random() * 50) * 10 + 100;
            const rSize = Math.floor(Math.random() * 8) + 1.5;

            const wChunks = Math.ceil(wSize);
            const wcus = wRate * wChunks;

            const rChunks = Math.ceil(rSize / 4);
            const rcus = rRate * rChunks;

            const questionStr = `You are hosting an application that requires writing database records to user sessions at a steady rate of ${wRate} items/second (average item size of ${wSize.toFixed(1)} KB) and performing strongly consistent reads at a rate of ${rRate} items/second (average item size of ${rSize.toFixed(1)} KB). Under DynamoDB Provisioned Capacity Mode, what are the minimum Write Capacity Units (WCU) and Read Capacity Units (RCU) required?`;

            const cor = `${wcus} WCU and ${rcus} RCU`;
            const w = [
                `${wRate} WCU and ${rRate} RCU`,
                `${Math.round(wcus * 0.5)} WCU and ${Math.round(rcus * 2)} RCU`,
                `${wcus * 2} WCU and ${Math.round(rcus * 0.5)} RCU`,
                `${wRate * Math.floor(wSize)} WCU and ${rRate * Math.floor(rSize / 4)} RCU`
            ].filter(x => x !== cor).slice(0, 3);
            const explanation = `Calculations:\\n1. WCUs: Size ${wSize.toFixed(1)} KB rounds up to ${wChunks} KB chunks. Output: ${wRate} writes/sec * ${wChunks} WCU/write = ${wcus} WCU.\\n2. RCUs: Size ${rSize.toFixed(1)} KB rounds up to the next 4 KB boundary = ${rChunks * 4} KB (which is ${rChunks} * 4KB chunks). Output: ${rRate} reads/sec * ${rChunks} RCU/read = ${rcus} RCU.`;

            return {
                subject: 'Cloud',
                topic: 'AWS Storage Capacity Calculations',
                difficulty: 'Medium',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: explanation,
                _correct: cor
            };
        } else {
            const hPort = Math.floor(Math.random() * 2000) + 8000;
            const cPort = R([80, 3000, 5000, 8080]);
            const isRo = Math.random() > 0.5;

            const questionStr = `You execute the following Docker CLI deployment command inside a shell terminal:
docker run -d --name app-container -v /opt/app/data:/var/lib/data:${isRo ? 'ro' : 'rw'} -p ${hPort}:${cPort} node-microservice:latest

Which of the following configurations describes the operational filesystem access and port mapping behavior of the resulting container?`;

            const cor = isRo
                ? `Host directory /opt/app/data is mounted read-only inside the container at /var/lib/data, and host traffic is port-forwarded from ${hPort} to container internal port ${cPort}.`
                : `Host directory /opt/app/data is mounted read-write inside the container at /var/lib/data, and host traffic is port-forwarded from ${hPort} to container internal port ${cPort}.`;

            const w = [
                `Host directory /var/lib/data is mounted read-only inside the container at /opt/app/data, mapping port ${cPort} of host to container port ${hPort}.`,
                `Host directory /opt/app/data is mounted read-write inside the container at /var/lib/data, mapping port ${cPort} of host to container port ${hPort}.`,
                `A named volume is constructed pointing node-microservice image data to container, exporting port ${hPort} exclusively to private docker networks.`
            ].filter(x => x !== cor).slice(0, 3);

            const explanation = `Analyzing commands:\\n1. '-v /opt/app/data:/var/lib/data:${isRo ? 'ro' : 'rw'}' maps host directory /opt/app/data to container directory /var/lib/data in ${isRo ? 'read-only (ro)' : 'read-write (rw)'} mode.\\n2. '-p ${hPort}:${cPort}' maps host access port ${hPort} to container destination port ${cPort}.`;

            return {
                subject: 'Cloud',
                topic: 'Virtualization & Containers',
                difficulty: 'Medium',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: explanation,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 7. COMPUTER ORGANIZATION & ARCHITECTURE (COA)
    // ============================================================
    if (key === 'coa') {
        const type = R(['pipeline', 'ieee754', 'cache_split']);

        if (type === 'pipeline') {
            const stages = R([4, 5, 6]);
            const inst = Math.floor(Math.random() * 50) + 20; // 20 to 69 instructions
            const hazards = Math.floor(Math.random() * 5) + 2;
            const stalls = R([1, 2]);

            const time = stages + (inst - 1) + (hazards * stalls);

            const questionStr = `A CPU executes a program sequence with ${inst} instructions on an instruction pipeline having ${stages} stages (Fetch, Decode, Execute, Memory access, Writeback). If the compiler identifies exactly ${hazards} data hazard dependency conflicts, and each hazard inserts ${stalls} clock cycle bubble stall(s) into the pipeline, what is the total clock cycle count required to execute the instructions to completion?`;

            const cor = `${time} cycles`;
            const w = [
                `${inst + stages} cycles`,
                `${stages + inst - 1} cycles`,
                `${time + 5} cycles`,
                `${inst * stages} cycles`
            ].filter(x => x !== cor).slice(0, 3);

            const explanation = `Pipeline Clocks Formula: Total Cycles = Stages + (Instructions - 1) + Stalls. Here, Stages = ${stages}, Instructions = ${inst}. Total Stalls = ${hazards} dependency hazards * ${stalls} cycle(s) = ${hazards * stalls} stalls. Total = ${stages} + (${inst} - 1) + ${hazards * stalls} = ${time} cycles.`;

            return {
                subject: 'COA',
                topic: 'Pipelining & Hazards',
                difficulty: 'Hard',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: explanation,
                _correct: cor
            };
        } else if (type === 'ieee754') {
            const isDouble = Math.random() > 0.5;

            const questionStr = isDouble
                ? `In the IEEE 754 Double-Precision (64-bit) Floating-Point representation standard, what is the bit allocation configuration for the Sign, Biased Exponent, and Fraction/Mantissa fields respectively?`
                : `In the IEEE 754 Single-Precision (32-bit) Floating-Point representation standard, what is the bit allocation configuration for the Sign, Biased Exponent, and Fraction/Mantissa fields respectively?`;

            const cor = isDouble
                ? `1 bit Sign, 11 bits Exponent, 52 bits Mantissa`
                : `1 bit Sign, 8 bits Exponent, 23 bits Mantissa`;

            const w = isDouble
                ? [
                    `1 bit Sign, 8 bits Exponent, 55 bits Mantissa`,
                    `1 bit Sign, 12 bits Exponent, 51 bits Mantissa`,
                    `1 bit Sign, 10 bits Exponent, 53 bits Mantissa`
                ]
                : [
                    `1 bit Sign, 7 bits Exponent, 24 bits Mantissa`,
                    `1 bit Sign, 9 bits Exponent, 22 bits Mantissa`,
                    `1 bit Sign, 8 bits Exponent, 24 bits Mantissa`
                ];

            return {
                subject: 'COA',
                topic: 'Data Representation',
                difficulty: 'Medium',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: isDouble
                    ? `IEEE 754 Double-Precision uses a 64-bit layout: Sign = 1 bit (bit 63), Biased Exponent = 11 bits (bits 62-52), Fraction/Mantissa = 52 bits (bits 51-0).`
                    : `IEEE 754 Single-Precision uses a 32-bit layout: Sign = 1 bit (bit 31), Biased Exponent = 8 bits (bits 30-23), Fraction/Mantissa = 23 bits (bits 22-0).`,
                _correct: cor
            };
        } else {
            const addrBits = R([16, 24, 32, 64]);
            const cacheSizeKB = R([4, 8, 16, 32, 64, 128, 256]);
            const blockSizeB = R([16, 32, 64, 128]);
            const ways = R([1, 2, 4, 8, 16]); // 1 is direct-mapped

            const offsetBits = Math.log2(blockSizeB);
            const cacheSlots = (cacheSizeKB * 1024) / blockSizeB;
            const indexBits = Math.log2(cacheSlots / ways);
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
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push('8 bits');

            return {
                subject: 'COA',
                topic: 'Cache Architecture',
                difficulty: 'Hard',
                question: `In a ${ways}-way set-associative cache architecture using ${addrBits}-bit memory addresses, cache size is ${cacheSizeKB} KB, and line block size is ${blockSizeB} bytes. What is the length of the ${ask.toUpperCase()} bitfield?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `For ${addrBits}-bit addresses: Offset = log2(${blockSizeB}) = ${offsetBits} bits. Sets = CacheSlots / Ways = (${cacheSizeKB}KB/${blockSizeB}B)/${ways}. Index = log2(Sets) = ${indexBits} bits. Tag = ${addrBits} - Index - Offset = ${tagBits} bits.`,
                _correct: cor
            };
        }
    }

    // ============================================================
    // 8. FULL STACK DEVELOPMENT (FSD)
    // ============================================================
    if (key === 'fsd') {
        const type = R(['color', 'sqlcount', 'statuscode']);

        if (type === 'color') {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            const toHex = (x) => x.toString(16).padStart(2, '0').toUpperCase();
            const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

            const cor = `rgb(${r}, ${g}, ${b})`;
            const w = [
                `rgb(${Math.min(255, r + 24)}, ${g}, ${b})`,
                `rgb(${r}, ${Math.max(0, g - 48)}, ${b})`,
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
            const threshold = Math.floor(Math.random() * 8000) + 10; // 10 to 8009
            const table = R(['Customers', 'Users', 'Employees', 'Accounts', 'Products', 'Orders', 'Transactions']);
            const col = R(['age', 'salary', 'score', 'points', 'balance', 'price', 'quantity']);
            const op = R(['>', '<', '>=', '<=', '!=']);

            const opDesc = op === '>' ? 'strictly larger than' :
                op === '<' ? 'strictly smaller than' :
                    op === '>=' ? 'greater than or equal to' :
                        op === '<=' ? 'less than or equal to' :
                            'not equal to';

            const cor = `Query output is all rows with ${col} values ${opDesc} ${threshold}`;
            const w = [
                `Query output includes only rows having ${col} exactly equivalent to ${threshold} value`,
                `Query output returns count representing table column rows having ${col} value sum up to ${threshold}`,
                `Query output returns errors due to invalid query syntax parameters on filtering ${col}`
            ];

            return {
                subject: 'FSD',
                topic: 'SQL Databases Select Queries',
                difficulty: 'Medium',
                question: `For a database table named '${table}', what does the SQL query filter for? SELECT * FROM ${table} WHERE ${col} ${op} ${threshold};`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `The '${op}' operator filters table rows where the column '${col}' matches the criteria, which is ${opDesc} ${threshold}.`,
                _correct: cor
            };
        }

        // default status checks
        const statusList = [
            { code: '200', text: 'OK (Request succeeded)' },
            { code: '201', text: 'Created (Resource successfully created)' },
            { code: '204', text: 'No Content (Request succeeded but returns no content body)' },
            { code: '301', text: 'Moved Permanently (Target resource URI changed)' },
            { code: '304', text: 'Not Modified (Cached local copy still updated)' },
            { code: '400', text: 'Bad Request (Server cannot interpret payload syntax)' },
            { code: '401', text: 'Unauthorized (Target credentials invalid or missing)' },
            { code: '403', text: 'Forbidden (Client validated but has no authorization permissions)' },
            { code: '404', text: 'Not Found (Target URL resource does not exist)' },
            { code: '500', text: 'Internal Server Error (Generic server-side error code)' },
            { code: '502', text: 'Bad Gateway (Upstream server returned invalid response)' },
            { code: '503', text: 'Service Unavailable (Server overloaded or down for maintenance)' }
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

    // ============================================================
    // 9. DATABASE MANAGEMENT SYSTEMS (DBMS)
    // ============================================================
    if (key === 'dbms') {
        const type = R(['joins', 'normalization', 'concurrency', 'nosql', 'indexing']);

        if (type === 'joins') {
            const empCount = Math.floor(Math.random() * 120) + 80; // 80 to 199
            const deptCount = Math.floor(Math.random() * 20) + 10; // 10 to 29
            const matchCount = Math.floor(Math.random() * 8) + 12; // 12 to 19
            const isLeft = Math.random() > 0.5;

            const questionStr = `You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing ${empCount} rows, and 'Departments' (dept_id, dept_name) containing ${deptCount} rows. If there are exactly ${matchCount} matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a ${isLeft ? 'LEFT OUTER JOIN' : 'INNER JOIN'} between 'Employees' and 'Departments' on 'dept_id'?`;

            const corVal = isLeft ? empCount : matchCount;
            const cor = `${corVal} rows`;
            const w = [
                `${isLeft ? matchCount : empCount} rows`,
                `${empCount + deptCount} rows`,
                `${matchCount + deptCount} rows`,
                `${Math.abs(empCount - deptCount)} rows`
            ].filter(x => x !== cor).slice(0, 3);

            const explanation = isLeft
                ? `A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has ${empCount} rows, the result contains exactly ${empCount} rows.`
                : `An INNER JOIN returns only the rows where the join condition matches. Since there are exactly ${matchCount} matching dept_ids, the result contains ${matchCount} rows.`;

            return {
                subject: 'DBMS',
                topic: 'Relational Database Joins',
                difficulty: 'Medium',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: explanation,
                _correct: cor
            };
        } else if (type === 'normalization') {
            const fdsList = [
                {
                    fds: 'A -> B, B -> C (Primary Key is A)',
                    nf: '2NF',
                    exp: "The relation has a transitive dependency A -> B -> C where C is non-prime and B is not a superkey. Thus, it contains transitive dependencies, violating 3NF, but has no partial dependencies (A is the single-attribute primary key), leaving it in 2NF."
                },
                {
                    fds: 'A -> B, C -> D (Primary Key is (A, C))',
                    nf: '1NF',
                    exp: "The key is composite (A, C). FDs 'A -> B' and 'C -> D' exhibit partial dependencies (where part of the primary key determines a non-prime attribute). Since partial dependencies exist, it violates 2NF, leaving it in 1NF."
                },
                {
                    fds: 'AB -> C, C -> D (Primary Key is (A, B))',
                    nf: '2NF',
                    exp: "No partial dependencies exist because C depends on the full key AB, and D depends on C. However, C -> D is a transitive dependency (D depends on C, which is not a primary key). This violates 3NF, leaving it in 2NF."
                },
                {
                    fds: 'A -> B, A -> C, A -> D (Primary Key is A)',
                    nf: '3NF (and BCNF)',
                    exp: "All non-prime attributes (B, C, D) are fully and directly dependent on the primary key A (a single attribute superkey). No partial or transitive dependencies exist, meaning the relation is in 3NF and BCNF."
                },
                {
                    fds: 'A -> B, B -> C, C -> A (Primary Key is A)',
                    nf: '3NF (and BCNF)',
                    exp: "Since A, B, and C can each act as a candidate key (due to the circular dependencies), there are no transitive or partial dependencies. Every determinant is a candidate key. Highest NF is BCNF/3NF."
                }
            ];

            const targetCase = R(fdsList);
            const questionStr = `A relational schema R(A, B, C, D) is configured with the following set of Functional Dependencies:
{ ${targetCase.fds} }

What is the highest normal form (Normal Form status) satisfied by this relation?`;

            const cor = targetCase.nf;
            const w = ['1NF', '2NF', '3NF (and BCNF)', '4NF'].filter(x => x !== cor).slice(0, 3);

            return {
                subject: 'DBMS',
                topic: 'Database Normalization',
                difficulty: 'Hard',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: targetCase.exp,
                _correct: cor
            };
        } else if (type === 'concurrency') {
            const anomalies = [
                {
                    name: 'Dirty Read (Write-Read Conflict)',
                    seq: 'Transaction T1 updates row R (writes R), Transaction T2 reads row R, then Transaction T1 performs a Rollback/Abort.',
                    exp: 'A Dirty Read occurs when a transaction reads data that has been modified by another transaction but not yet committed.'
                },
                {
                    name: 'Non-Repeatable Read (Read-Write Conflict)',
                    seq: 'Transaction T1 reads row R, Transaction T2 updates row R and commits, then Transaction T1 reads row R again and finds a different value.',
                    exp: 'A Non-Repeatable Read occurs when a transaction retrieves the same row twice and obtains different data values because another transaction modified it in between.'
                },
                {
                    name: 'Phantom Read',
                    seq: 'Transaction T1 reads a set of rows matching search criteria, Transaction T2 inserts a new row matching those criteria and commits, then T1 executes the query again.',
                    exp: 'A Phantom Read occurs when a transaction runs a query returning a set of rows, and upon re-running, finds new "phantom" rows inserted by a committed concurrent transaction.'
                },
                {
                    name: 'Lost Update (Write-Write Conflict)',
                    seq: 'Transaction T1 reads balance. Transaction T2 reads balance. T1 updates balance and writes it back. T2 updates balance based on its old read and writes it back, overwriting T1\'s change.',
                    exp: 'A Lost Update happens when two transactions read the same record, and then both write updates to it, where the latter write overrides and cancels the earlier write.'
                }
            ];

            const target = R(anomalies);
            const questionStr = `Read the following transaction operations execution sequence:
"${target.seq}"

Which SQL concurrency level anomaly/conflict does this sequence represent?`;

            const cor = target.name;
            const w = anomalies.filter(x => x.name !== target.name).map(x => x.name).slice(0, 3);

            return {
                subject: 'DBMS',
                topic: 'Transactions & Concurrency Control',
                difficulty: 'Hard',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: target.exp,
                _correct: cor
            };
        } else if (type === 'nosql') {
            const collections = ['orders', 'users', 'inventory', 'reviews'];
            const col = R(collections);
            const field = col === 'orders' ? 'amount' : col === 'users' ? 'age' : col === 'inventory' ? 'price' : 'rating';
            const groupField = col === 'orders' ? 'status' : col === 'users' ? 'country' : col === 'inventory' ? 'category' : 'product_id';

            const questionStr = `A MongoDB database contains a collection named '${col}'. You run the following aggregate database query:
db.${col}.aggregate([
  { $match: { ${field}: { $gt: 100 } } },
  { $group: { _id: "$${groupField}", averageValue: { $avg: "$${field}" } } }
])

What is the operational execution flow of this aggregation pipeline?`;

            const cor = `First, filters documents in '${col}' where '${field}' is greater than 100, then groups the remaining documents by '${groupField}', and computes the average of the '${field}' field for each group.`;
            const w = [
                `Groups all documents in '${col}' by '${groupField}', calculates the average of ${field}, and outputs only groups having an average greater than 100.`,
                `Creates an index on '${groupField}' and '${field}', then aggregates and inserts filtered documents greater than 100 back into the database.`,
                `Runs a join query matching documents in '${col}' and '${groupField}' where both tables share fields greater than 100.`
            ].slice(0, 3);

            return {
                subject: 'DBMS',
                topic: 'NoSQL Databases (MongoDB)',
                difficulty: 'Medium',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `In MongoDB, the aggregation array executes sequentially: stage 1 ($match) filters matching documents where '${field}' > 100, and stage 2 ($group) groups by '_id: $${groupField}' and outputs the average value.`,
                _correct: cor
            };
        } else {
            const blockSize = R([2048, 4096, 8192]);
            const keySize = R([16, 24, 32]);
            const ptrSize = 8;

            // Formula solver: P * (ptrSize + keySize) <= blockSize + keySize
            // P <= (blockSize + keySize) / (ptrSize + keySize)
            const maxOrder = Math.floor((blockSize + keySize) / (ptrSize + keySize));

            const questionStr = `A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of ${blockSize} bytes. Each search key requires ${keySize} bytes, and child pointers require ${ptrSize} bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?`;

            const cor = `${maxOrder} children`;
            const w = [
                `${maxOrder + 10} children`,
                `${maxOrder - 15} children`,
                `${Math.floor(blockSize / keySize)} children`,
                `${Math.floor(blockSize / (keySize + ptrSize))} children`
            ].filter(x => x !== cor).slice(0, 3);

            const explanation = `Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * ${ptrSize} + (P - 1) * ${keySize} <= ${blockSize} => P * (${ptrSize} + ${keySize}) - ${keySize} <= ${blockSize} => P * ${ptrSize + keySize} <= ${blockSize + keySize} => P <= ${blockSize + keySize} / ${ptrSize + keySize} = ${(blockSize + keySize) / (ptrSize + keySize)} => Max P = ${maxOrder}.`;

            return {
                subject: 'DBMS',
                topic: 'Database Indexes & B+ Trees',
                difficulty: 'Hard',
                question: questionStr,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: explanation,
                _correct: cor
            };
        }
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

