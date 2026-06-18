/* ═══════════════════════════════════════════════════════
   AcademIQ — app.js
   All site logic: Auth, Notes, Quiz, Leaderboard
═══════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */

const PDF_FILES = [
  "chemistry-ch-1-notes.pdf",
  "chemistry-ch-2-notes.pdf",
  "chemistry-ch-3-notes.pdf",
  "chemistry-ch-4-notes.pdf",
  "chemistry-ch-5-notes.pdf",
  "chemistry-ch-6-notes.pdf",
  "chemistry-ch-7-notes.pdf",
  "chem_summer-2024.pdf",
  "chem_summer-2025.pdf",
  "chem_winter-2024.pdf",
  "chem_winter-2025.pdf",
  "ES QUESTION BANK.pdf",
  "Applied_mathematics_tu.1.pdf",
  "Applied_mathematics_tu.2.pdf",
  "Applied_mathematics_tu.3.pdf",
  "Applied_mathematics_unit-1-notes.pdf",
  "Applied_mathematics_unit-2-notes.pdf",
  "Applied_mathematics_unit-3-notes.pdf",
  "Applied_mathematics_unit-4-notes.pdf",
  "Applied_mathematics_unit-5-notes.pdf",
  "Applied_mathematics_assignments.pdf",
  "Applied_mathematics_important_methods.pdf",
  "Applied_mathematics_WINTER-2025.pdf",
  "Applied_mathematics_WINTER-2023.pdf",
  "Applied_mathematics_WINTER25.pdf",
  "Applied_mathematics_W2024.pdf",
  "Applied_mathematics_SUMMER 2025.pdf",
  "Applied_mathematics_SUMMER 2024.pdf",
  "Applied_mathematics_SUMMER 2023.pdf",
  "PY-GTU-IMP-PY(DI02032011).pdf",
  "PY-ASSIGNMENT-1.pdf",
  "PY-ASSIGNMENT-2.pdf",
  "PY-ASSIGNMENT-3.pdf",
  "PY-ASSIGNMENT-4.pdf",
  "PY-ASSIGNMENT-5.pdf",
  "PY-GERNAL-EXAMPLE'S.pdf",
  "PYTHON Q BANK.pdf",
  "ES-ASSIGNMENT-2.pdf",
  "ES-ASSIGNMENT-3.pdf",
  "ES-ASSIGNMENT-4.pdf",
  "ES-ASSIGNMENT-5.pdf",
  "PY-G-BOOK.pdf",
  "ES-S25.pdf",
  "ES-W25.pdf",
  "PY-S23.pdf",
  "PY-S24.pdf",
  "PY-W25.pdf",
  "CPD-Old GTU Papers-Up to S-2026.pdf",
];

// --- Quiz Data Array ---
const QUIZ_DATA = [
  {
    id: 'q-maths',
    title: 'Applied Mathematics',
    icon: '📐',
    color: '#f59e0b',
    desc: 'Matrices, Derivatives & Integration',
    questions: [
      // --- SUMMER 2024 ---
      { q: 'Order of the matrix [[1,2,3],[-4,5,6]] is =', opts: ['3x2', '2x3', '2x2', '3x3'], ans: 1 },
      { q: 'If [[x-3, 2],[4, 0]] = [[5, 2],[4, 0]] then x =', opts: ['2', '8', '-8', '0'], ans: 1 },
      { q: 'The adjoint of [[-3, 2],[0, 1]] =', opts: ['[[-3, 2],[0, 1]]', '[[1, -2],[0, -3]]', '[[3, -2],[0, 1]]', '[[3, 0],[2, -1]]'], ans: 1 },
      { q: 'For any square matrix A, (A^-1)^-1 =', opts: ['A^-1', 'A', '-A', 'adj(A)'], ans: 1 },
      { q: 'd/dx (log x) =', opts: ['x', '1/x', 'sin x', 'cos x'], ans: 1 },
      { q: 'd/dx (tan^-1 x + cot^-1 x) =', opts: ['pi/2', '1', '-1', '0'], ans: 3 },
      { q: 'If x = a cos(θ), y = a sin(θ) then dy/dx =', opts: ['-cot(θ)', 'sin(θ)', 'sec(θ)', 'cos(θ)'], ans: 0 },
      { q: '∫ 5x^4 dx = ______ + c', opts: ['x^4', '4x^3', '25x^5', 'x^5'], ans: 3 },
      { q: '∫₀¹ e^x dx =', opts: ['e - 1', 'e + 1', 'e', '1 - e'], ans: 0 },
      { q: '∫_{-1}¹ (3x^2 - 2x + 1) dx =', opts: ['0', '2', '4', '6'], ans: 2 },
      { q: 'The order of differential equation (dy/dx)^2 + 4y = x is', opts: ['0', '2', '4', '1'], ans: 3 },
      { q: 'The integrating factor of dy/dx + 3y = x is', opts: ['3x', 'e^x', 'e^2x', 'e^3x'], ans: 3 },
      { q: 'The mean of first ten natural numbers is', opts: ['5.5', '5', '5.4', '6'], ans: 0 },
      { q: 'The range of the data 17, 15, 25, 34, 32 is', opts: ['32', '17', '15', '19'], ans: 3 },

      // --- WINTER 2024 ---
      { q: 'Order of the matrix [[1,3,5],[4,6,14]] is', opts: ['2x3', '3x2', '2x2', '3x3'], ans: 0 },
      { q: 'If A = [[1, 2], [3, 4]] then A^T =', opts: ['[[4, 2], [3, 1]]', '[[1, 3], [2, 4]]', '[[1, 4], [3, 2]]', 'None of these'], ans: 1 },
      { q: 'If A = [[1, -1], [2, 3]] then adj(A) =', opts: ['[[1, 2], [-1, 1]]', '[[-1, 1], [-2, -3]]', '[[2, 3], [1, -1]]', '[[3, 1], [-2, 1]]'], ans: 3 },
      { q: '[1, 2, 3] * [[4], [5], [-1]] =', opts: ['5', '3', '11', '-1'], ans: 2 },
      { q: 'd/dx (x^3 + 1) =', opts: ['3x^2', 'x^2', '3x^2 + 1', 'x^3'], ans: 0 },
      { q: 'd/dx (sec^2 x - tan^2 x) =', opts: ['1', '0', '3x^2', 'None of these'], ans: 1 },
      { q: 'int x^2 dx = ______ + C', opts: ['x', 'x^3', '2x', 'x^3 / 3'], ans: 3 },
      { q: '∫_{-pi/2}^{pi/2} sin x dx =', opts: ['0', '-3', '1', '2*pi'], ans: 0 },
      { q: '∫₁³ (1/x) dx =', opts: ['-3', 'log x', 'log 3', 'None of these'], ans: 2 },
      { q: 'Order and Degree of (d^2y/dx^2)^3 + dy/dx + 1 = 0 are', opts: ['2,3', '3,2', '1,3', '2,1'], ans: 0 },
      { q: 'Integrating Factor of x(dy/dx) + y = 1 is', opts: ['log x', 'x', 'tan x', 'None of these'], ans: 1 },
      { q: 'If the Mean of 15, 7, 6, a, 3 is 4 then a =', opts: ['10', '21', '-11', '11'], ans: 2 },

      // --- SUMMER 2025 ---
      { q: '[[1, 2], [3, 4]] + [[1, -1], [1, 3]] =', opts: ['[[1, 2], [3, 12]]', '[[3, 5], [7, 7]]', '[[2, 1], [4, 7]]', 'None of these'], ans: 2 },
      { q: 'Order of the Matrix [0, -4, 2] is', opts: ['2x2', '1x1', '1x3', '3x1'], ans: 2 },
      { q: 'If f(x) = e^(4x) then f\'(0) =', opts: ['1', '0', '4', 'e^4'], ans: 2 },
      { q: 'If y = log(4x + 3) then dy/dx =', opts: ['1/(4x+3)', '3/(4x+3)', '4/(4x+3)', '0'], ans: 2 },
      { q: 'If y = x^5 then d^5y/dx^5 =', opts: ['120', '120x', '0', '1'], ans: 0 },
      { q: 'The Mean of First Five even natural numbers is', opts: ['6', '30', '15', '12.5'], ans: 0 },

      // --- WINTER 2025 (DI02000011) ---
      { q: 'Order of the matrix A = [[1,2],[0,1],[3,4]] is', opts: ['3x2', '2x3', '1x1', '3x3'], ans: 0 },
      { q: 'For square matrix A and B, (AB)^-1 =', opts: ['I', 'A^-1 * B^-1', 'B^-1 * A^-1', '0'], ans: 2 },
      { q: 'd/dx (x^3 + e^x + 2) =', opts: ['3x^2 + e^x', '3x^2 + e^x + 1', 'x^2 + e^x', 'x^2 + e^x + 1'], ans: 0 },
      { q: 'If mean of 7, 9, and x is 10 then x =', opts: ['10', '12', '13', '14'], ans: 1 }
    ]
  },
  {
    id: 'q-chem',
    title: 'Engineering Chemistry',
    icon: '⚗️',
    color: '#0ea5e9',
    desc: 'Corrosion, Fuels, Lubricants & Polymers',
    questions: [
      { q: 'Corrosion (Kat) rokva mate kai padhdhati vapray chhe?', opts: ['Galvanizing', 'Oxidation', 'Heating', 'Cooling'], ans: 0 },
      { q: 'Electrochemical cell ma Oxidation kaya pole par thay?', opts: ['Cathode', 'Anode', 'Electrolyte', 'Salt bridge'], ans: 1 },
      { q: 'Lignite ane Anthracite niche na mathi kona prakar chhe?', opts: ['Petroleum', 'Coal', 'Natural Gas', 'Biogas'], ans: 1 },
      { q: 'Niche na mathi kayo Good Conductor chhe?', opts: ['Glass', 'Copper', 'Rubber', 'Wood'], ans: 1 },
      { q: 'LPG ma mukhya ghatak (main component) kayo hoy chhe?', opts: ['Methane', 'Butane', 'Hydrogen', 'Carbon'], ans: 1 },
      { q: 'Lubricant no mukhya upyog shu chhe?', opts: ['To increase friction', 'To reduce friction', 'To increase weight', 'To stop machine'], ans: 1 },
      { q: 'Cement ma Gypsum kem umerava ma ave chhe?', opts: ['Increase strength', 'Retard setting time', 'Give color', 'Reduce cost'], ans: 1 },
      { q: 'Hard water ne soft banavva mate kai process vapray?', opts: ['Zeolite Process', 'Filtration', 'Chlorination', 'Heating'], ans: 0 },
      { q: 'Niche na mathi kai Alloy (Mishra-dhatu) chhe?', opts: ['Iron', 'Brass', 'Gold', 'Oxygen'], ans: 1 },
      { q: 'Polymerisation process mathi shu bane chhe?', opts: ['Glass', 'Plastic', 'Steel', 'Acid'], ans: 1 }
    ]
  },
  {
    id: 'q-py',
    title: 'Python Programming',
    icon: '🐍',
    color: '#3776ab',
    desc: 'Basics, Data Types, Loops & Strings',
    questions: [
      { q: 'Python ma data print karva mate kayo function vapray?', opts: ['echo()', 'print()', 'output()', 'printf()'], ans: 1 },
      { q: 'Python ma immutable data type kayo chhe?', opts: ['List', 'Tuple', 'Dictionary', 'Set'], ans: 1 },
      { q: 'Python files nu extension shu hoy chhe?', opts: ['.py', '.python', '.pt', '.exe'], ans: 0 },
      { q: 'List mathi last element remove karva kai method vapray?', opts: ['remove()', 'pop()', 'delete()', 'clear()'], ans: 1 },
      { q: "Output of '10' + '20' in Python?", opts: ['30', '1020', 'Error', 'NaN'], ans: 1 },
      { q: 'Loop ne stop karva mate kayo keyword vapray?', opts: ['continue', 'break', 'stop', 'return'], ans: 1 },
      { q: 'List ma new item add karva mate kai method vapray?', opts: ['add()', 'append()', 'insert_last()', 'extend_one()'], ans: 1 },
      { q: 'Dictionary mate kaya bracket vapray chhe?', opts: ['[ ]', '{ }', '( )', '< >'], ans: 1 },
      { q: "len('Jerry') ni value ketli thashe?", opts: ['4', '5', '6', '0'], ans: 1 },
      { q: 'Python ma comment karva mate kayo symbol vapray?', opts: ['//', '#', '/* */', ''], ans: 1 }
    ]
  },
  {
    id: 'q-env',
    title: 'પર્યાવરણ અને ટકાઉપણું',
    icon: '🌍',
    color: '#10b981',
    desc: 'પરિસ્થિતિકી, પ્રદૂષણ અને પુનઃપ્રાપ્ય ઉર્જા વિશે ૧૦ પ્રશ્નો',
    questions: [
      { q: 'ઇકોલોજી (Ecology) નીચેનામાંથી કોનો અભ્યાસ છે?', opts: ['તારાઓનો', 'સજીવો અને પર્યાવરણ વચ્ચેના સંબંધોનો', 'રસાયણોનો', 'ઇતિહાસનો'], ans: 1 },
      { q: 'નીચેનામાંથી કયો અજૈવિક (Abiotic) ઘટક છે?', opts: ['વનસ્પતિ', 'પ્રાણીઓ', 'સૂર્યપ્રકાશ', 'બેક્ટેરિયા'], ans: 2 },
      { q: 'નિવસનતંત્રમાં ઉત્પાદકો (Producers) કોને કહેવાય?', opts: ['લીલી વનસ્પતિ', 'મનુષ્યો', 'સિંહ', 'મશરૂમ'], ans: 0 },
      { q: 'ઓઝોન સ્તર વાતાવરણના કયા સ્તરમાં હોય છે?', opts: ['ટ્રોપોસ્ફિયર', 'સ્ટ્રેટોસ્ફિયર', 'મેસોસ્ફિયર', 'એક્ઝોસ્ફિયર'], ans: 1 },
      { q: 'એસિડ વર્ષા માટે કયા વાયુઓ જવાબદાર છે?', opts: ['O2 અને N2', 'SO2 અને NOx', 'CO2 અને મિથેન', 'આર્ગોન અને નિયોન'], ans: 1 },
      { q: 'નીચેનામાંથી કયો કચરો કુદરતી રીતે સડતો નથી (Non-Biodegradable)?', opts: ['કાગળ', 'ફળોની છાલ', 'પ્લાસ્ટિકની બોટલ', 'લાકડું'], ans: 2 },
      { q: 'ટકાઉ વિકાસ (Sustainable Development) એટલે શું?', opts: ['માત્ર વર્તમાનનો વિકાસ', 'ભવિષ્યની જરૂરિયાતોને નુકસાન કર્યા વગરનો વિકાસ', 'ઝડપી ઔદ્યોગિક વિકાસ', 'બધી ફેક્ટરીઓ બંધ કરવી'], ans: 1 },
      { q: 'વિશ્વ પર્યાવરણ દિવસ ક્યારે ઉજવવામાં આવે છે?', opts: ['૨૬ જાન્યુઆરી', '૫ જૂન', '૧૫ ઓગસ્ટ', '૨ ઓક્ટોબર'], ans: 1 },
      { q: 'જંગલો કાપવા (Deforestation) ની મુખ્ય અસર કઈ છે?', opts: ['જમીનનું ધોવાણ', 'વધારે વરસાદ', 'ઓક્સિજનમાં વધારો', 'ઠંડુ વાતાવરણ'], ans: 0 },
      { q: 'સૌર ઉર્જા અને પવન ઉર્જા કેવા પ્રકારના સ્ત્રોત છે?', opts: ['પરંપરાગત', 'બિન-નવીનીકરણીય', 'પુનઃપ્રાપ્ય (Renewable)', 'પ્રદૂષણકારી'], ans: 2 }
    ]
  }
];

// --- Seed Leaderboard ---
const SEED_SCORES = [
  { username: 'Sujal K.', subject: 'Applied Mathematics', score: 10, total: 10 },
  { username: 'Bhavin J.', subject: 'Python Programming', score: 10, total: 10 },
  { username: 'Priya M.', subject: 'Environment and sustainability', score: 8, total: 10 },
  { username: 'Daniel O.', subject: 'Applied Mathematics', score: 7, total: 10 },
  { username: 'Ling C.', subject: 'Environment and sustainability', score: 9, total: 10 },
  { username: 'Sofia R.', subject: 'Engineering Chemistry', score: 10, total: 10 },
  { username: 'Ethan B.', subject: 'Applied Mathematics', score: 8, total: 10 },
  { username: 'Amara N.', subject: 'Environment and sustainability', score: 7, total: 10 },
  { username: 'Lucas P.', subject: 'Engineering Chemistry', score: 6, total: 10 },
];

/* ══════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════ */
let currentUser = null;
let currentSection = 'home';
let currentQuiz = null;
let activeQuizQuestions = []; // Hold randomized subset of active quiz
let currentQuestionI = 0;
let userAnswers = [];
let answeredCurrent = false;

/* ══════════════════════════════════════════════════════
   GLOBAL HELPER FUNCTIONS
══════════════════════════════════════════════════════ */
function getRandomQuizQuestions(questionArray, count = 14) {
  const finalCount = Math.min(count, questionArray.length);
  const shuffled = [...questionArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, finalCount);
}

/* ══════════════════════════════════════════════════════
   AUTH
══════════════════════════════════════════════════════ */
function handleLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const errorEl = document.getElementById('loginError');

  if (!username) {
    errorEl.textContent = 'Please enter a username.';
    errorEl.classList.remove('hidden');
    return;
  }
  if (password !== 'student123') {
    errorEl.textContent = 'Incorrect password. Hint: student123';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  currentUser = username;
  localStorage.setItem('iq_user', username);

  document.getElementById('loginOverlay').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('headerUsername').textContent = '👤 ' + username;

  initApp();
}

function handleLogout() {
  localStorage.removeItem('iq_user');
  currentUser = null;
  document.getElementById('app').classList.add('hidden');
  document.getElementById('loginOverlay').classList.remove('hidden');
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
}

/* ══════════════════════════════════════════════════════
   INIT & EVENT LISTENERS
══════════════════════════════════════════════════════ */
function initApp() {
  const saved = localStorage.getItem('iq_user');
  if (saved) {
    currentUser = saved;
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('headerUsername').textContent = '👤 ' + saved;
  }

  seedLeaderboard();
  renderNotes('all');
  renderQuizSubjects();
  renderLeaderboard('all');
  updateHomeScore();
}

document.getElementById('loginPassword').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});
document.getElementById('loginUsername').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});

/* ══════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════ */
function navTo(sectionId) {
  document.querySelectorAll('.section').forEach(s => {
    s.classList.add('hidden');
    s.classList.remove('active');
  });
  const el = document.getElementById(sectionId);
  if (el) {
    el.classList.remove('hidden');
    el.classList.add('active');
  }
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === sectionId);
  });
  currentSection = sectionId;
  document.getElementById('mobileMenu').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navTo(link.dataset.section);
  });
});

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}

/* ══════════════════════════════════════════════════════
   NOTES
══════════════════════════════════════════════════════ */
function renderNotes(filter = 'all') {
  const grid = document.getElementById('notesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  PDF_FILES.forEach(file => {
    const name = file.replace('.pdf', '');
    const lowercaseFile = file.toLowerCase();

    let match = false;
    if (filter === 'all') {
      match = true;
    } else if (filter === 'applied-maths' && (lowercaseFile.includes('maths') || lowercaseFile.includes('mathematics'))) {
      match = true;
    } else if (filter === 'chemistry' && lowercaseFile.includes('chem')) {
      match = true;
    } else if (filter === 'environment' && lowercaseFile.includes('es-')) {
      match = true;
    } else if (filter === 'python' && (lowercaseFile.includes('py-') || lowercaseFile.includes('python'))) {
      match = true;
    } else if (filter === 'cpd' && lowercaseFile.includes('cpd')) {
      match = true;
    }

    if (!match) return;

    const card = document.createElement('div');
    card.className = 'note-card';
    card.innerHTML = `
      <div class="note-card-top">
        <div class="note-type-icon pdf">📄</div>
        <div>
          <div class="note-title">${name}</div>
          <div class="note-meta">PDF File</div>
        </div>
      </div>
      <div class="note-actions">
        <button class="note-btn view" onclick="viewPDF('${file}')">👁 View</button>
        <button class="note-btn download" onclick="downloadPDF('${file}')">⬇ Download</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterNotes(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderNotes(filter);
}

function viewPDF(file) {
  const modal = document.getElementById('noteModal');
  const body = document.getElementById('modalBody');
  const title = document.getElementById('modalTitle');

  title.textContent = file;
  body.innerHTML = `
    <iframe src="pdfs/${file}" width="100%" height="500px" style="border:none;"></iframe>
  `;
  modal.classList.remove('hidden');
}

function downloadPDF(file) {
  const a = document.createElement('a');
  a.href = 'pdfs/' + file;
  a.download = file;
  a.click();
}

function closeNoteModalBtn() {
  document.getElementById('noteModal').classList.add('hidden');
}

/* ══════════════════════════════════════════════════════
   QUIZ MAIN IMPLEMENTATION
══════════════════════════════════════════════════════ */
function renderQuizSubjects() {
  const grid = document.getElementById('quizSubjectGrid');
  if (!grid) return;
  grid.innerHTML = '';

  QUIZ_DATA.forEach(quiz => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div class="subject-card-icon">${quiz.icon}</div>
      <h3>${quiz.title}</h3>
      <p>${quiz.desc}</p>
      <span class="subject-count">Random 14 Questions Set</span>
    `;
    card.style.setProperty('--accent', quiz.color);
    card.addEventListener('click', () => startQuiz(quiz.id));
    grid.appendChild(card);
  });
}

function startQuiz(quizId) {
  currentQuiz = QUIZ_DATA.find(q => q.id === quizId);

  // Scramble and load dynamic 14 questions set 
  activeQuizQuestions = getRandomQuizQuestions(currentQuiz.questions, 14);

  currentQuestionI = 0;
  userAnswers = [];
  answeredCurrent = false;

  document.getElementById('quizHome').classList.add('hidden');
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizPlayer').classList.remove('hidden');

  document.getElementById('quizSubjectLabel').textContent = currentQuiz.title;
  renderQuestion();
}

function renderQuestion() {
  const q = activeQuizQuestions[currentQuestionI];
  const tot = activeQuizQuestions.length;

  document.getElementById('questionNum').textContent = `Question ${currentQuestionI + 1} of ${tot}`;
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('quizProgressLabel').textContent = `${currentQuestionI + 1} / ${tot}`;
  document.getElementById('quizProgressFill').style.width = `${((currentQuestionI) / tot) * 100}%`;

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = currentQuestionI === tot - 1 ? 'Finish ✓' : 'Next →';
  nextBtn.disabled = true;
  answeredCurrent = false;

  const optsGrid = document.getElementById('optionsGrid');
  optsGrid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span> ${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    optsGrid.appendChild(btn);
  });
}

function selectAnswer(optIdx) {
  if (answeredCurrent) return;
  answeredCurrent = true;

  const q = activeQuizQuestions[currentQuestionI];
  const correct = q.ans;
  userAnswers.push({ selected: optIdx, correct });

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === optIdx && i !== correct) btn.classList.add('wrong');
    else if (i === optIdx) btn.classList.add('selected');
  });

  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  if (!answeredCurrent) return;
  currentQuestionI++;
  if (currentQuestionI >= activeQuizQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  document.getElementById('quizPlayer').classList.add('hidden');
  document.getElementById('quizResults').classList.remove('hidden');

  const score = userAnswers.filter(a => a.selected === a.correct).length;
  const total = activeQuizQuestions.length;
  const pct = Math.round((score / total) * 100);

  let icon, title;
  if (pct >= 90) { icon = '🏆'; title = 'Outstanding!'; }
  else if (pct >= 70) { icon = '🎉'; title = 'Great Job!'; }
  else if (pct >= 50) { icon = '📚'; title = 'Keep Studying!'; }
  else { icon = '💪'; title = 'Don\'t Give Up!'; }

  document.getElementById('resultsIcon').textContent = icon;
  document.getElementById('resultsTitle').textContent = title;
  document.getElementById('scoreBig').textContent = score;
  document.getElementById('scoreDenom').textContent = `/ ${total}`;
  document.getElementById('scorePercent').textContent = `${pct}% Correct`;

  const breakdown = document.getElementById('resultsBreakdown');
  breakdown.innerHTML = '';
  userAnswers.forEach((a, i) => {
    const q = activeQuizQuestions[i];
    const ok = a.selected === a.correct;
    const item = document.createElement('div');
    item.className = `breakdown-item ${ok ? 'correct' : 'wrong'}`;
    item.innerHTML = `
      <span class="breakdown-icon">${ok ? '✓' : '✗'}</span>
      <div>
        <div class="breakdown-q">${q.q}</div>
        <div class="breakdown-a">
          ${ok ? `Correct: ${q.opts[a.correct]}` : `Your answer: ${q.opts[a.selected]} · Correct: ${q.opts[a.correct]}`}
        </div>
      </div>
    `;
    breakdown.appendChild(item);
  });

  saveScore(score, total);
  updateHomeScore();
  renderLeaderboard('all');
}

function retryQuiz() {
  startQuiz(currentQuiz.id);
}

function exitQuiz() {
  document.getElementById('quizPlayer').classList.add('hidden');
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizHome').classList.remove('hidden');
}

/* ══════════════════════════════════════════════════════
   LEADERBOARD & SCORES
══════════════════════════════════════════════════════ */
function seedLeaderboard() {
  const existing = JSON.parse(localStorage.getItem('iq_scores') || '[]');
  if (existing.length === 0) {
    localStorage.setItem('iq_scores', JSON.stringify(SEED_SCORES));
  }
}

function saveScore(score, total) {
  if (!currentUser) return;
  const scores = JSON.parse(localStorage.getItem('iq_scores') || '[]');
  scores.push({
    username: currentUser,
    subject: currentQuiz.title,
    score,
    total,
    date: new Date().toLocaleDateString()
  });
  localStorage.setItem('iq_scores', JSON.stringify(scores));
}

function updateHomeScore() {
  if (!currentUser) return;
  const scores = JSON.parse(localStorage.getItem('iq_scores') || '[]');
  const mine = scores.filter(s => s.username === currentUser);
  if (mine.length === 0) {
    document.getElementById('homeUserScore').textContent = '—';
    return;
  }
  const best = Math.max(...mine.map(s => Math.round((s.score / s.total) * 100)));
  document.getElementById('homeUserScore').textContent = best + '%';
}

function renderLeaderboard(filter, btn) {
  if (btn) {
    document.querySelectorAll('.filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  const scores = JSON.parse(localStorage.getItem('iq_scores') || '[]');
  const bestMap = {};
  scores.forEach(s => {
    const key = s.username + '|' + s.subject;
    if (!bestMap[key] || s.score > bestMap[key].score) bestMap[key] = s;
  });
  let entries = Object.values(bestMap);
  if (filter !== 'all') {
    entries = entries.filter(e => e.subject === filter);
  }
  entries.sort((a, b) => (b.score / b.total) - (a.score / a.total));

  const podiumRow = document.getElementById('podiumRow');
  if (podiumRow) {
    podiumRow.innerHTML = '';
    const medals = ['🥇', '🥈', '🥉'];
    const classes = ['p1', 'p2', 'p3'];
    entries.slice(0, 3).forEach((e, i) => {
      const card = document.createElement('div');
      card.className = `podium-card ${classes[i]}`;
      card.innerHTML = `
        <div class="podium-medal">${medals[i]}</div>
        <div class="podium-name">${e.username}</div>
        <div class="podium-score">${e.score}/${e.total}</div>
        <div class="podium-subject">${e.subject}</div>
      `;
      podiumRow.appendChild(card);
    });
  }

  const tbody = document.getElementById('leaderboardBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (entries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--text-dim);padding:2rem">No scores yet. Take a quiz!</td></tr>`;
    return;
  }

  entries.forEach((e, i) => {
    const pct = Math.round((e.score / e.total) * 100);
    const rank = i + 1;
    const rClass = rank <= 3 ? `r${rank}` : 'rn';
    const row = document.createElement('tr');
    if (currentUser && e.username === currentUser) {
      row.style.background = 'rgba(245,158,11,0.05)';
    }
    row.innerHTML = `
      <td><span class="rank-badge ${rClass}">${rank}</span></td>
      <td>
        ${e.username}
        ${currentUser && e.username === currentUser ? '<span style="font-size:.7rem;color:var(--amber);margin-left:.4rem">(you)</span>' : ''}
      </td>
      <td>${e.subject}</td>
      <td style="font-family:var(--font-mono)">${e.score} / ${e.total}</td>
      <td>
        <div class="score-bar-wrap">
          <div class="score-bar-bg">
            <div class="score-bar-fill" style="width:${pct}%"></div>
          </div>
          <span class="score-pct-text">${pct}%</span>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
}

/* ══════════════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  initApp();
});