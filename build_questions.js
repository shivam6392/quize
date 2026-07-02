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

// Pick random items from array
function pick(arr, n) { return shuffle(arr).slice(0, n); }
function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Build a question object with shuffled options
function Q(subject, topic, difficulty, question, correct, wrongs, explanation) {
    const opts = shuffle([correct, ...wrongs.slice(0, 3)]);
    return { subject, topic, difficulty, question, options: opts, answer: opts.indexOf(correct), explanation };
}

// Distribute N questions across topics proportionally
function distribute(topics, total) {
    const base = Math.floor(total / topics.length);
    const rem = total % topics.length;
    return topics.map((t, i) => ({ ...t, count: base + (i < rem ? 1 : 0) }));
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
const SUBJECTS = ['dsa', 'aiml', 'java', 'os', 'cn', 'cloud', 'coa', 'fsd'];

console.log('🚀 Building 8000 questions...\n');
for (const subj of SUBJECTS) {
    const bank = loadBank(`${subj}.json`);
    writeSubject(subj, bank);
}
console.log('\n🎉 Done! Open index.html to start the quiz.');
