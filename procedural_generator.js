// Helper utilities
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

    if (key === 'dsa') {
        const dsList = ['Singly Linked List', 'Doubly Linked List', 'BST', 'AVL Tree', 'Red-Black Tree', 'Min Heap', 'Max Heap', 'Array (unsorted)', 'Array (sorted)', 'Stack', 'Queue'];
        const opList = ['Search', 'Insertion', 'Deletion', 'Access'];
        const caseList = ['Best Case', 'Average Case', 'Worst Case'];

        const ds = R(dsList);
        const op = R(opList);
        const tc = R(caseList);

        let answerStr = 'O(n)';
        let expl = `Operation details on ${ds}.`;

        // Define realistic complexities
        if (ds === 'Array (unsorted)') {
            if (op === 'Search') answerStr = 'O(n)';
            else if (op === 'Insertion') answerStr = 'O(1)';
            else if (op === 'Deletion') answerStr = 'O(n)';
            else if (op === 'Access') answerStr = 'O(1)';
        } else if (ds === 'Array (sorted)') {
            if (op === 'Search') answerStr = 'O(log n)';
            else if (op === 'Insertion') answerStr = 'O(n)';
            else if (op === 'Deletion') answerStr = 'O(n)';
            else if (op === 'Access') answerStr = 'O(1)';
        } else if (ds === 'Singly Linked List' || ds === 'Doubly Linked List') {
            if (op === 'Search') answerStr = 'O(n)';
            else if (op === 'Insertion') answerStr = ds === 'Doubly Linked List' ? 'O(1)' : 'O(1)';
            else if (op === 'Deletion') answerStr = 'O(1)'; // head/tail
            else if (op === 'Access') answerStr = 'O(n)';
        } else if (ds === 'BST') {
            if (tc === 'Worst Case') answerStr = 'O(n)'; // skewed
            else answerStr = 'O(log n)';
        } else if (ds === 'AVL Tree' || ds === 'Red-Black Tree') {
            if (op === 'Access') answerStr = 'O(log n)';
            else answerStr = 'O(log n)';
        } else if (ds === 'Min Heap' || ds === 'Max Heap') {
            if (op === 'Search') answerStr = 'O(n)';
            else if (op === 'Insertion' || op === 'Deletion') answerStr = 'O(log n)';
            else if (op === 'Access') answerStr = 'O(1)'; // root
        } else if (ds === 'Stack' || ds === 'Queue') {
            if (op === 'Access') answerStr = 'O(n)';
            else answerStr = 'O(1)'; // push/pop/enqueue/dequeue
        }

        const q = `In DSA, what is the ${tc.toLowerCase()} time complexity of performing a '${op}' operation on a ${ds}?`;
        const cor = answerStr;
        const w = ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'].filter(x => x !== cor).slice(0, 3);

        return {
            subject: 'DSA',
            topic: 'Complexities',
            difficulty: R(['Easy', 'Medium']),
            question: q,
            options: shuffle([cor, ...w]),
            answer: -1, // filled relative to option index later
            explanation: `For ${ds}, a ${op} under ${tc} takes ${answerStr}.`,
            _correct: cor
        };
    }

    if (key === 'aiml') {
        const type = R(['confusion', 'regression', 'distance']);
        if (type === 'confusion') {
            const tp = 50 + Math.floor(Math.random() * 150);
            const fp = 5 + Math.floor(Math.random() * 40);
            const fn = 5 + Math.floor(Math.random() * 40);
            const tn = 100 + Math.floor(Math.random() * 200);

            const metric = R(['Accuracy', 'Precision', 'Recall']);
            let val = 0;
            if (metric === 'Accuracy') val = (tp + tn) / (tp + tn + fp + fn);
            else if (metric === 'Precision') val = tp / (tp + fp);
            else val = tp / (tp + fn);

            const cor = (val * 100).toFixed(2) + '%';
            const w = [
                ((val - 0.15) * 100).toFixed(2) + '%',
                ((val + 0.10) * 100).toFixed(2) + '%',
                ((val * 0.8) * 100).toFixed(2) + '%',
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
            const x1 = Math.floor(Math.random() * 20);
            const y1 = Math.floor(Math.random() * 20);
            const x2 = Math.floor(Math.random() * 20) + 5;
            const y2 = Math.floor(Math.random() * 20) + 5;

            const metric = R(['Manhattan', 'Euclidean']);
            let val = 0;
            if (metric === 'Manhattan') {
                val = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            } else {
                val = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            }

            const cor = val.toFixed(2);
            const w = [
                (val + 3.5).toFixed(2),
                Math.abs(val - 2.1).toFixed(2),
                (val * 1.5).toFixed(2)
            ];

            return {
                subject: 'AI / ML',
                topic: 'Clustering & KNN',
                difficulty: 'Medium',
                question: `What is the ${metric} distance between point A(${x1}, ${y1}) and point B(${x2}, ${y2}) in a 2D space?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `${metric} distance formula resolves to ${cor}.`,
                _correct: cor
            };
        } else {
            const slope = Math.floor(Math.random() * 10) + 1;
            const intercept = Math.floor(Math.random() * 15) - 5;
            const x = Math.floor(Math.random() * 30);

            const cor = (slope * x + intercept).toString();
            const w = [
                ((slope + 2) * x + intercept).toString(),
                (slope * x + intercept + 10).toString(),
                (slope * x - intercept).toString()
            ];

            return {
                subject: 'AI / ML',
                topic: 'Regression',
                difficulty: 'Easy',
                question: `Assuming a simple linear regression equation is y = ${slope}x + (${intercept}), what is the predicted value of y when x = ${x}?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Plug x=${x} into y = ${slope}(${x}) + ${intercept} to get ${cor}.`,
                _correct: cor
            };
        }
    }

    if (key === 'java') {
        const op = R(['%', '&', '|', '^', '<<', '>>']);
        const a = Math.floor(Math.random() * 20) + 5;
        const b = Math.floor(Math.random() * 5) + 2;

        let val = 0;
        if (op === '%') val = a % b;
        else if (op === '&') val = a & b;
        else if (op === '|') val = a | b;
        else if (op === '^') val = a ^ b;
        else if (op === '<<') val = a << 1;
        else if (op === '>>') val = a >> 1;

        const cor = val.toString();
        const w = [(val + 3).toString(), (val - 1).toString(), (val * 2).toString()].filter(x => x !== cor).slice(0, 3);
        while (w.length < 3) w.push((Math.floor(Math.random() * 40) + 50).toString());

        return {
            subject: 'Java',
            topic: 'Java Operators',
            difficulty: 'Easy',
            question: `What will be the output of the Java printing statement: System.out.println(${a} ${op} ${op === '<<' || op === '>>' ? '1' : b});?`,
            options: shuffle([cor, ...w]),
            answer: -1,
            explanation: `Running bitwise/arithmetic operator ${op} on targets matches standard Java JVM specification. Result is ${cor}.`,
            _correct: cor
        };
    }

    if (key === 'os') {
        const type = R(['scheduling', 'partition', 'pagefault']);
        if (type === 'scheduling') {
            const b1 = Math.floor(Math.random() * 8) + 2;
            const b2 = Math.floor(Math.random() * 8) + 2;
            const b3 = Math.floor(Math.random() * 8) + 2;

            // Average waiting time under FCFS arriving at 0
            const avg = ((0 + b1 + (b1 + b2)) / 3).toFixed(2);
            const cor = avg + ' ms';
            const w = [
                ((b1 + b2 + b3) / 3).toFixed(2) + ' ms',
                ((b1 + b3) / 3).toFixed(2) + ' ms',
                ((0 + b2 + b3) / 3).toFixed(2) + ' ms'
            ];

            return {
                subject: 'OS',
                topic: 'CPU Scheduling',
                difficulty: 'Hard',
                question: `Given three processes arriving at time 0 with CPU burst times of P1 = ${b1}ms, P2 = ${b2}ms, and P3 = ${b3}ms. What is the average waiting time under non-preemptive FCFS scheduling?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Waiting times: P1=0, P2=${b1}, P3=${b1}+${b2}. Average = (${b1}+${b1 + b2})/3 = ${cor}.`,
                _correct: cor
            };
        } else if (type === 'pagefault') {
            const frames = R([3, 4]);
            const cor = (frames === 3 ? '6' : '5');
            const w = ['3', '4', '7'];

            return {
                subject: 'OS',
                topic: 'Virtual Memory',
                difficulty: 'Hard',
                question: `Using the reference string [1, 2, 3, 4, 1, 2] with ${frames} physical page frames initially empty, how many page faults occur under the FIFO replacement algorithm?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Simulates FIFO allocations on ${frames} page frame size. Result is ${cor}.`,
                _correct: cor
            };
        } else {
            const size = Math.floor(Math.random() * 50) + 10;
            const cor = 'First-Fit';
            const w = ['Best-Fit', 'Worst-Fit', 'None of these'];

            return {
                subject: 'OS',
                topic: 'Memory Management',
                difficulty: 'Medium',
                question: `Which memory partition allocation algorithm places a new process of size ${size} KB in the very first free block that is large enough?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `First-Fit allocates the first available partition holding size.`,
                _correct: cor
            };
        }
    }

    if (key === 'cn') {
        const type = R(['port', 'hostcount']);
        if (type === 'port') {
            const protocols = [
                { name: 'FTP', port: '21' },
                { name: 'SSH', port: '22' },
                { name: 'Telnet', port: '23' },
                { name: 'SMTP', port: '25' },
                { name: 'DNS', port: '53' },
                { name: 'DHCP (Client)', port: '68' },
                { name: 'HTTP', port: '80' },
                { name: 'HTTPS', port: '443' },
                { name: 'POP3', port: '110' },
                { name: 'IMAP', port: '143' }
            ];
            const target = R(protocols);
            const cor = target.port;
            const w = protocols.filter(p => p.port !== cor).map(p => p.port).slice(0, 3);

            return {
                subject: 'CN',
                topic: 'Ports & Protocols',
                difficulty: 'Easy',
                question: `In Computer Networks, what is the default transport layer port number designated for the ${target.name} service?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `${target.name} standard port is ${cor}.`,
                _correct: cor
            };
        } else {
            const cidr = Math.floor(Math.random() * 6) + 24; // /24 to /29
            const hosts = Math.pow(2, 32 - cidr) - 2;
            const cor = hosts.toString();
            const w = [
                (hosts + 2).toString(),
                (hosts * 2).toString(),
                (hosts - 2).toString()
            ];
            return {
                subject: 'CN',
                topic: 'Subnetting',
                difficulty: 'Medium',
                question: `A subnet mask is configured with CIDR notation /${cidr}. What is the maximum number of assignable host IP addresses on this subnet?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Formula is 2^(32 - CIDR) - 2. For /${cidr}, this equals ${cor} hosts.`,
                _correct: cor
            };
        }
    }

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

    if (key === 'coa') {
        const type = R(['binary', 'hex']);
        if (type === 'binary') {
            const val = Math.floor(Math.random() * 120) + 10;
            const cor = val.toString(2);
            const w = [
                (val + 3).toString(2),
                (val - 1).toString(2),
                (val + 12).toString(2)
            ];
            return {
                subject: 'COA',
                topic: 'Binary Representation',
                difficulty: 'Easy',
                question: `What is the binary representation of the decimal integer value ${val}?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `${val} divided successively by 2 yields binary ${cor}.`,
                _correct: cor
            };
        } else {
            const val = Math.floor(Math.random() * 200) + 50;
            const cor = '0x' + val.toString(16).toUpperCase();
            const w = [
                '0x' + (val - 5).toString(16).toUpperCase(),
                '0x' + (val + 16).toString(16).toUpperCase(),
                '0x' + (val * 2).toString(16).toUpperCase()
            ];
            return {
                subject: 'COA',
                topic: 'Hex Conversions',
                difficulty: 'Medium',
                question: `What is the hexadecimal representation of the decimal integer value ${val}?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Converting decimal base 10 to base 16 gives ${cor}.`,
                _correct: cor
            };
        }
    }

    if (key === 'fsd') {
        const type = R(['statuscode', 'color']);
        if (type === 'statuscode') {
            const codes = [
                { c: '200', desc: 'OK' },
                { c: '201', desc: 'Created' },
                { c: '204', desc: 'No Content' },
                { c: '301', desc: 'Moved Permanently' },
                { c: '304', desc: 'Not Modified' },
                { c: '400', desc: 'Bad Request' },
                { c: '401', desc: 'Unauthorized' },
                { c: '403', desc: 'Forbidden' },
                { c: '404', desc: 'Not Found' },
                { c: '500', desc: 'Internal Server Error' },
                { c: '502', desc: 'Bad Gateway' },
                { c: '503', desc: 'Service Unavailable' }
            ];
            const target = R(codes);
            const cor = target.desc;
            const w = codes.filter(x => x.desc !== cor).map(x => x.desc).slice(0, 3);

            return {
                subject: 'FSD',
                topic: 'HTTP Protocol',
                difficulty: 'Easy',
                question: `In REST APIs, what does the official HTTP response status code ${target.c} stand for?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `Status code ${target.c} indicates ${cor} standard client/server sync state.`,
                _correct: cor
            };
        } else {
            const colors = [
                { code: '#FF0000', name: 'Red' },
                { code: '#00FF00', name: 'Green' },
                { code: '#0000FF', name: 'Blue' },
                { code: '#FFFF00', name: 'Yellow' },
                { code: '#00FFFF', name: 'Cyan' },
                { code: '#FF00FF', name: 'Magenta' },
                { code: '#FFFFFF', name: 'White' },
                { code: '#000000', name: 'Black' }
            ];
            const target = R(colors);
            const cor = target.name;
            const w = colors.filter(x => x.name !== cor).map(x => x.name).slice(0, 3);

            return {
                subject: 'FSD',
                topic: 'CSS & Styling',
                difficulty: 'Easy',
                question: `Which primary color is represented by the hexadecimal value '${target.code}' in CSS styling sheets?`,
                options: shuffle([cor, ...w]),
                answer: -1,
                explanation: `${target.code} maps to RGB representation for ${cor}.`,
                _correct: cor
            };
        }
    }

    // Default safe fallback if subject mismatch
    return {
        subject: sub,
        topic: 'Miscellaneous',
        difficulty: 'Easy',
        question: `Procedural question for subject ${sub} with reference ID #${id}`,
        options: shuffle(['Correct Option', 'Wrong Option A', 'Wrong Option B', 'Wrong Option C']),
        answer: -1,
        explanation: 'Procedural mock question.',
        _correct: 'Correct Option'
    };
}

module.exports = { generateProceduralQuestion, R };
