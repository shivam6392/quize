// Quiz Engine Logic

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

// Mode targets are the desired items per subject.
const MODE_TOTALS = {
    quick: 1000,
    standard: 2500,
    deep: 8000 // 1000 per subject for 8 subjects
};

// DOM Elements
const setupScreen = document.getElementById('setup-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const qText = document.getElementById('q-text');
const optionsGrid = document.getElementById('options-grid');
const qCounter = document.getElementById('q-counter');
const progressFill = document.getElementById('progress-fill');
const currentScoreElement = document.getElementById('current-score');
const subjectBadge = document.getElementById('subject-badge');
const qDifficulty = document.getElementById('q-difficulty');
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');
const feedbackTitle = document.getElementById('feedback-title');

// Listeners for mode start
document.querySelectorAll('.start-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const mode = e.target.closest('.mode-card').getAttribute('data-mode');
        initQuiz(mode);
    });
});

// Listeners for subject-specific practice start
document.querySelectorAll('.start-sub-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const subject = e.target.closest('.subject-card').getAttribute('data-subject');
        initQuiz('subject', subject);
    });
});

document.getElementById('home-btn').addEventListener('click', () => {
    resultScreen.classList.remove('active');
    setupScreen.classList.add('active');
});

// Utility: Shuffle Array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Initialization
function initQuiz(mode, subjectKey = null) {
    currentQuestions = [];

    if (mode === 'subject' && subjectKey) {
        let qs = window.quizData[subjectKey];
        if (qs && qs.length > 0) {
            // Take 100 random questions from this specific subject
            currentQuestions = shuffle([...qs]).slice(0, 100);
        }
    } else {
        let targetTotal = MODE_TOTALS[mode];
        const subjectKeys = Object.keys(window.quizData);
        let itemsPerSubject = Math.ceil(targetTotal / subjectKeys.length);

        // Collect questions from all subjects securely
        subjectKeys.forEach(key => {
            let qs = window.quizData[key];
            if (qs && qs.length > 0) {
                // Shuffle a copy of the subject's questions
                let shuffledQs = shuffle([...qs]);
                // Take the requested amount, or as many as available
                currentQuestions = currentQuestions.concat(shuffledQs.slice(0, itemsPerSubject));
            }
        });

        // Shuffle the final batched array so subjects are mixed seamlessly
        currentQuestions = shuffle(currentQuestions);
    }

    if (currentQuestions.length === 0) {
        alert("No questions found! Please generate the data files.");
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    currentScoreElement.innerText = score;

    // Switch screens
    setupScreen.classList.remove('active');
    quizScreen.classList.add('active');

    loadQuestion();
}

function loadQuestion() {
    isAnswered = false;
    explanationBox.style.display = 'none';
    optionsGrid.innerHTML = '';

    const currentQ = currentQuestions[currentQuestionIndex];

    // Update UI headers
    qCounter.innerText = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    progressFill.style.width = `${((currentQuestionIndex) / currentQuestions.length) * 100}%`;
    subjectBadge.innerText = currentQ.subject;

    qDifficulty.innerText = currentQ.difficulty;
    qDifficulty.setAttribute('data-level', currentQ.difficulty);

    qText.innerText = currentQ.question;

    // Render options
    currentQ.options.forEach((optText, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="font-weight:600; color:var(--primary); width: 25px;">${String.fromCharCode(65 + index)}.</span> ${optText}`;
        btn.addEventListener('click', () => checkAnswer(index, btn));
        optionsGrid.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    if (isAnswered) return;
    isAnswered = true;

    const currentQ = currentQuestions[currentQuestionIndex];
    const isCorrect = (selectedIndex === currentQ.answer);

    const allButtons = optionsGrid.querySelectorAll('.option-btn');

    // Disable all options
    allButtons.forEach(b => b.disabled = true);

    if (isCorrect) {
        btnElement.classList.add('correct');
        score++;
        currentScoreElement.innerText = score;
        feedbackTitle.innerText = "✅ Correct!";
        feedbackTitle.style.color = "var(--success)";
    } else {
        btnElement.classList.add('wrong');
        allButtons[currentQ.answer].classList.add('correct');
        feedbackTitle.innerText = "❌ Incorrect!";
        feedbackTitle.style.color = "var(--error)";
    }

    // Show Explanation
    explanationText.innerText = currentQ.explanation || "No explanation provided.";
    explanationBox.style.display = 'block';

    // Auto Advance after 1.8 seconds for incorrect, 0.8s for correct
    const delay = isCorrect ? 800 : 1800;

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, delay);
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    document.getElementById('final-score').innerText = `${score} / ${currentQuestions.length}`;
    const percentage = score / currentQuestions.length;

    let msg = "Keep practicing!";
    if (percentage >= 0.8) msg = "Outstanding! You're placement-ready! 🚀";
    else if (percentage >= 0.5) msg = "Good effort! A bit more practice needed. 👍";

    document.getElementById('result-message').innerText = msg;
}
