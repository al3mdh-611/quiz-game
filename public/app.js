// أسئلة تجريبية
const questions = [
  { q: "ما عاصمة السعودية؟", choices: ["جدة", "الرياض", "مكة", "الدمام"], answer: 1 },
  { q: "٢ + ٣ = ؟", choices: ["٤", "٥", "٦", "٧"], answer: 1 },
  { q: "لون السماء غالبًا؟", choices: ["أخضر", "أزرق", "أصفر", "أحمر"], answer: 1 }
];

let i = 0;
let score = 0;

const qEl = document.getElementById("q");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");

function render() {
  const item = questions[i];
  qEl.textContent = item.q;
  choicesEl.innerHTML = "";
  item.choices.forEach((c, idx) => {
    const btn = document.createElement("button");
    btn.textContent = c;
    btn.onclick = () => select(idx);
    choicesEl.appendChild(btn);
  });
  resultEl.textContent = "";
  nextBtn.disabled = true;
}

function select(idx) {
  const correct = questions[i].answer;
  if (idx === correct) {
    resultEl.textContent = "إجابة صحيحة ✅";
    score++;
  } else {
    resultEl.textContent = "إجابة خاطئة ❌";
  }
  // منع الضغط المتكرر
  [...choicesEl.children].forEach(b => (b.disabled = true));
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  i++;
  if (i < questions.length) {
    render();
  } else {
    qEl.textContent = "انتهت الأسئلة";
    choicesEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `نتيجتك: ${score} / ${questions.length}`;
  }
};

// بداية التشغيل
render();
