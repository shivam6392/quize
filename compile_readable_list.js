const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'data');
const outputFile = path.join(path.dirname(__dirname), 'ALL_8000_QUESTIONS.txt');

console.log('📖 Compiling all 8000 questions into a single text file...');

const files = ['dsa.js', 'aiml.js', 'java.js', 'os.js', 'cn.js', 'cloud.js', 'coa.js', 'fsd.js'];

let outputContent = `===========================================
🚀 NEXTGEN PLACEMENT PREP - 8000 QUESTIONS LIST
===========================================\n\n`;

let totalQs = 0;

for (const file of files) {
    const filePath = path.join(srcDir, file);
    if (!fs.existsSync(filePath)) {
        console.error(`Missing metadata file: ${file}`);
        continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    // Extract JSON string from java/js window definition
    const jsonStart = content.indexOf('[');
    const jsonEnd = content.lastIndexOf(']') + 1;

    if (jsonStart === -1 || jsonEnd === -1) {
        console.error(`Invalid JS format in ${file}`);
        continue;
    }

    const jsonText = content.substring(jsonStart, jsonEnd);
    const questions = JSON.parse(jsonText);

    outputContent += `\n\n===========================================\n`;
    outputContent += `📚 SUBJECT: ${file.toUpperCase().replace('.JS', '')} (${questions.length} Questions)\n`;
    outputContent += `===========================================\n\n`;

    questions.forEach((q, idx) => {
        totalQs++;
        outputContent += `${idx + 1}. [${q.difficulty}] ${q.question}\n`;
        q.options.forEach((opt, oIdx) => {
            const label = String.fromCharCode(65 + oIdx);
            outputContent += `   ${label}) ${opt}\n`;
        });
        outputContent += `   👉 Correct Answer: ${String.fromCharCode(65 + q.answer)}\n`;
        outputContent += `   💡 Explanation: ${q.explanation}\n\n`;
    });
}

outputContent += `\n\nTotal Compiled Questions: ${totalQs}\n`;

fs.writeFileSync(outputFile, outputContent, 'utf8');
console.log(`✅ Completed! Wrote ${totalQs} questions to e:\\DSA_JAVA\\ALL_8000_QUESTIONS.txt`);
