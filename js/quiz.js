// Quiz Engine Logic

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;
let currentSessionMode = ''; // track mode for save/resume

// Mode targets
const MODE_TOTALS = {
    quick: 1000,
    standard: 2500,
    deep: 8000
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

// ============================================================
// EVENT LISTENERS
// ============================================================

// Mode start buttons (Quick, Standard, Deep)
document.querySelectorAll('.start-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const mode = e.target.closest('.mode-card').getAttribute('data-mode');
        initQuiz(mode);
    });
});

// Subject-specific quick practice (100 Qs)
document.querySelectorAll('.start-sub-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const subject = e.target.closest('.subject-card').getAttribute('data-subject');
        initQuiz('subject', subject);
    });
});

// Subject full assessment (1000 Qs)
document.querySelectorAll('.start-assess-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const subject = e.target.closest('.subject-card').getAttribute('data-subject');
        initQuiz('assessment', subject);
    });
});

// Difficulty-level assessment
document.querySelectorAll('.start-diff-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const difficulty = e.target.closest('.difficulty-card').getAttribute('data-difficulty');
        initQuiz('difficulty', null, difficulty);
    });
});

// Home button
document.getElementById('home-btn').addEventListener('click', () => {
    resultScreen.classList.remove('active');
    setupScreen.classList.add('active');
});

// ============================================================
// SAVE & RESUME LOGIC
// ============================================================

const saveModal = document.getElementById('save-modal');
const saveNameInput = document.getElementById('save-name-input');
const saveConfirmBtn = document.getElementById('save-confirm-btn');
const saveCancelBtn = document.getElementById('save-cancel-btn');
const saveDoneBtn = document.getElementById('save-done-btn');
const codeDisplay = document.getElementById('code-display');
const codeValue = document.getElementById('code-value');
const saveQuitBtn = document.getElementById('save-quit-btn');
const resumeBtn = document.getElementById('resume-btn');
const resumeCodeInput = document.getElementById('resume-code-input');

// Generate a unique 4-digit code
function generate4DigitCode() {
    // Check existing codes in localStorage to avoid collisions
    const existing = new Set();
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('quizSave_')) {
            existing.add(key.replace('quizSave_', ''));
        }
    }
    let code;
    do {
        code = Math.floor(1000 + Math.random() * 9000).toString();
    } while (existing.has(code));
    return code;
}

// Save progress to localStorage
function saveProgress(name) {
    const code = generate4DigitCode();
    const saveData = {
        name: name,
        code: code,
        mode: currentSessionMode,
        score: score,
        currentIndex: currentQuestionIndex,
        questions: currentQuestions,
        timestamp: Date.now()
    };
    localStorage.setItem('quizSave_' + code, JSON.stringify(saveData));
    return code;
}

// Resume progress from localStorage
function resumeProgress(code) {
    const key = 'quizSave_' + code;
    const dataStr = localStorage.getItem(key);
    if (!dataStr) return false;

    try {
        const data = JSON.parse(dataStr);
        currentQuestions = data.questions;
        currentQuestionIndex = data.currentIndex;
        score = data.score;
        currentSessionMode = data.mode;

        currentScoreElement.innerText = score;

        // Switch screens
        setupScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        quizScreen.classList.add('active');

        loadQuestion();

        // Remove the save after successful resume
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
}

// Save & Quit button click
saveQuitBtn.addEventListener('click', () => {
    saveModal.classList.add('active');
    saveNameInput.value = '';
    codeDisplay.style.display = 'none';
    saveConfirmBtn.style.display = 'block';
    saveNameInput.style.display = 'block';
    saveCancelBtn.style.display = 'block';
    saveNameInput.focus();
});

// Save confirm click
saveConfirmBtn.addEventListener('click', () => {
    const name = saveNameInput.value.trim();
    if (!name) {
        saveNameInput.style.border = '2px solid var(--error)';
        saveNameInput.placeholder = 'Please enter your name!';
        return;
    }
    const code = saveProgress(name);
    codeValue.innerText = code;
    codeDisplay.style.display = 'block';
    saveConfirmBtn.style.display = 'none';
    saveNameInput.style.display = 'none';
    saveCancelBtn.style.display = 'none';
});

// Save done — quit to home
saveDoneBtn.addEventListener('click', () => {
    saveModal.classList.remove('active');
    quizScreen.classList.remove('active');
    setupScreen.classList.add('active');
});

// Cancel save
saveCancelBtn.addEventListener('click', () => {
    saveModal.classList.remove('active');
});

// Resume button click
resumeBtn.addEventListener('click', () => {
    const code = resumeCodeInput.value.trim();
    if (code.length !== 4) {
        resumeCodeInput.style.border = '2px solid var(--error)';
        resumeCodeInput.placeholder = 'Must be 4 digits!';
        return;
    }
    const success = resumeProgress(code);
    if (!success) {
        resumeCodeInput.value = '';
        resumeCodeInput.style.border = '2px solid var(--error)';
        resumeCodeInput.placeholder = 'Invalid code! Try again.';
    }
});

// Allow Enter key on resume input
resumeCodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') resumeBtn.click();
});

// ============================================================
// UTILITY
// ============================================================

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// ============================================================
// INITIALIZATION
// ============================================================

function initQuiz(mode, subjectKey = null, difficultyLevel = null) {
    currentQuestions = [];
    currentSessionMode = mode;

    if (mode === 'subject' && subjectKey) {
        // Quick practice: 100 random from a subject
        let qs = window.quizData[subjectKey];
        if (qs && qs.length > 0) {
            currentQuestions = shuffle([...qs]).slice(0, 100);
        }
    } else if (mode === 'assessment' && subjectKey) {
        // Full assessment: all 1000 from a subject
        let qs = window.quizData[subjectKey];
        if (qs && qs.length > 0) {
            currentQuestions = shuffle([...qs]);
        }
    } else if (mode === 'difficulty' && difficultyLevel) {
        // Difficulty filter: collect matching questions from all subjects
        const subjectKeys = Object.keys(window.quizData);
        subjectKeys.forEach(key => {
            let qs = window.quizData[key];
            if (qs && qs.length > 0) {
                qs.forEach(q => {
                    if (q.difficulty && q.difficulty.toLowerCase() === difficultyLevel.toLowerCase()) {
                        currentQuestions.push(q);
                    }
                });
            }
        });
        currentQuestions = shuffle(currentQuestions);
    } else {
        // Mode: quick / standard / deep
        let targetTotal = MODE_TOTALS[mode];
        const subjectKeys = Object.keys(window.quizData);
        let itemsPerSubject = Math.ceil(targetTotal / subjectKeys.length);

        subjectKeys.forEach(key => {
            let qs = window.quizData[key];
            if (qs && qs.length > 0) {
                let shuffledQs = shuffle([...qs]);
                currentQuestions = currentQuestions.concat(shuffledQs.slice(0, itemsPerSubject));
            }
        });

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

// ============================================================
// QUIZ FLOW
// ============================================================

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

    // Auto Advance after 0.8s for correct, 1.8s for incorrect
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
