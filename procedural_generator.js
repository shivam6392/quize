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
        const type = R(['sla', 'pricing', 'storage', 'instance', 'region', 'scaling']);

        if (type === 'sla') {
            const pctIndex = R([0, 1, 2]);
            const pcts = ['99.9%', '99.99%', '99.999%'];
            const values = ['8.72 hours per year', '52.56 minutes per year', '5.26 minutes per year'];
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
            const val = Math.floor(Math.random() * 10000) + 15;
            const cor = val.toString(2);
            const w = [
                (val + 6).toString(2),
                (val - 4).toString(2),
                (val + 24).toString(2)
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push('11111111');

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
            const val = Math.floor(Math.random() * 80000) + 60;
            const cor = '0x' + val.toString(16).toUpperCase();
            const w = [
                '0x' + (val - 16).toString(16).toUpperCase(),
                '0x' + (val + 64).toString(16).toUpperCase(),
                '0x' + (val * 2).toString(16).toUpperCase()
            ].filter(x => x !== cor).slice(0, 3);
            while (w.length < 3) w.push('0x00FF');

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
