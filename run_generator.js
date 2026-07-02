const { genDSA, save, pad } = require('./gen_part1');
const { genAIML, genJava, genOS } = require('./gen_part2');
const { genCN, genCloud, genCOA, genFSD } = require('./gen_part3');
const { execSync } = require('child_process');

console.log('⚡ Generating all 8 subjects (1000 questions each)...');

const subjects = [
    { key: 'dsa', gen: genDSA },
    { key: 'aiml', gen: genAIML },
    { key: 'java', gen: genJava },
    { key: 'os', gen: genOS },
    { key: 'cn', gen: genCN },
    { key: 'cloud', gen: genCloud },
    { key: 'coa', gen: genCOA },
    { key: 'fsd', gen: genFSD }
];

for (const sub of subjects) {
    console.log(`Padded subject '${sub.key}' to 1000 questions...`);
    const rawQs = sub.gen();
    const padded = pad(rawQs, 1000, sub.key);
    save(sub.key, padded);
}

console.log('\nRunning build_questions.js to output to JS datasets...');
try {
    const output = execSync('node build_questions.js', { encoding: 'utf-8' });
    console.log(output);
    console.log('🎉 Generation completed successfully!');
} catch (err) {
    console.error('Error running build_questions.js:', err);
}
