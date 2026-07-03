const fs = require('fs');
const path = require('path');

// Utility: shuffle array
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ============================================================
// OPTION LENGTH NORMALIZER
// Makes wrong answers similar in length to the correct answer
// so that students cannot guess based on answer length alone.
// ============================================================
function normalizeOptionLengths(questions) {
    // Filler phrases to pad short wrong options
    const fillers = [
        ' (standard definition)',
        ' in most cases',
        ' (commonly used)',
        ' by design',
        ' (typical scenario)',
        ' in practice',
        ' (general case)',
        ' under normal conditions',
        ' as per specification',
        ' (default behavior)',
        ' in standard usage',
        ' (widely accepted)',
        ' based on convention',
        ' (primary approach)',
        ' in typical implementations',
    ];

    return questions.map(q => {
        if (!q.options || q.options.length < 4 || q.answer < 0 || q.answer >= q.options.length) return q;

        const correctLen = q.options[q.answer].length;
        const newOptions = q.options.map((opt, i) => {
            if (i === q.answer) return opt; // Don't touch the correct answer

            // If wrong option is much shorter than correct, pad it
            if (opt.length < correctLen - 5) {
                const diff = correctLen - opt.length;
                // Pick a filler that brings it closer to the correct length
                const suitable = fillers.filter(f => Math.abs((opt.length + f.length) - correctLen) < 8);
                if (suitable.length > 0) {
                    return opt + suitable[Math.floor(Math.random() * suitable.length)];
                }
                // Fallback: use the closest filler
                const closest = fillers.reduce((best, f) =>
                    Math.abs((opt.length + f.length) - correctLen) < Math.abs((opt.length + best.length) - correctLen) ? f : best
                );
                return opt + closest;
            }

            // If wrong option is much LONGER than correct, trim it slightly
            if (opt.length > correctLen + 10 && opt.includes(',')) {
                // Try to truncate after the last comma that keeps it close to correctLen
                const parts = opt.split(',');
                let trimmed = parts[0];
                for (let p = 1; p < parts.length; p++) {
                    if ((trimmed + ',' + parts[p]).length <= correctLen + 5) {
                        trimmed += ',' + parts[p];
                    }
                }
                if (trimmed.length >= correctLen - 5) return trimmed;
            }

            return opt;
        });

        // Re-shuffle options and fix answer index
        const correctText = newOptions[q.answer];
        const shuffled = shuffle(newOptions);

        return {
            ...q,
            options: shuffled,
            answer: shuffled.indexOf(correctText)
        };
    });
}

// Write JS data file
function writeSubject(key, questions) {
    const dir = path.join(__dirname, 'data');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const content = `window.quizData = window.quizData || {};\nwindow.quizData.${key} = ${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync(path.join(dir, `${key}.js`), content, 'utf8');
    console.log(`  ✅ ${key}.js → ${questions.length} questions`);
}

// ============================================================
// QUESTION BANK LOADER - reads from bank files
// ============================================================
function loadBank(filename) {
    const fp = path.join(__dirname, 'banks', filename);
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
}

// ============================================================
// MAIN
// ============================================================
const SUBJECTS = ['dsa', 'aiml', 'java', 'os', 'cn', 'cloud', 'coa', 'fsd', 'dbms'];

console.log('🚀 Building 9000 questions...\n');

let totalBias = 0;
let totalQs = 0;

for (const subj of SUBJECTS) {
    let bank = loadBank(`${subj}.json`);

    // Count pre-normalization bias
    let preBias = 0;
    bank.forEach(q => {
        if (q.options && q.answer >= 0 && q.answer < q.options.length) {
            const corrLen = q.options[q.answer].length;
            const maxWrongLen = Math.max(...q.options.filter((_, i) => i !== q.answer).map(o => o.length));
            if (corrLen > maxWrongLen + 5) preBias++;
        }
    });

    // Normalize option lengths
    bank = normalizeOptionLengths(bank);

    // Count post-normalization bias
    let postBias = 0;
    bank.forEach(q => {
        if (q.options && q.answer >= 0 && q.answer < q.options.length) {
            const corrLen = q.options[q.answer].length;
            const maxWrongLen = Math.max(...q.options.filter((_, i) => i !== q.answer).map(o => o.length));
            if (corrLen > maxWrongLen + 5) postBias++;
        }
    });

    console.log(`  📊 ${subj}: bias ${preBias} → ${postBias}`);
    totalBias += postBias;
    totalQs += bank.length;

    writeSubject(subj, bank);
}

console.log(`\n📊 Total remaining bias: ${totalBias}/${totalQs}`);
console.log('\n🎉 Done! Open index.html to start the quiz.');
