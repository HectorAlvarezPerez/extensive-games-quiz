(function () {
  const letters = ["A", "B", "C", "D", "E"];
  const bank = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];

  const state = {
    questions: [],
    current: 0,
    answered: false,
    correct: 0,
    review: []
  };

  const els = {
    topicFilter: document.querySelector("#topic-filter"),
    difficultyFilter: document.querySelector("#difficulty-filter"),
    sessionSize: document.querySelector("#session-size"),
    startBtn: document.querySelector("#start-btn"),
    nextBtn: document.querySelector("#next-btn"),
    restartBtn: document.querySelector("#restart-btn"),
    bankCount: document.querySelector("#bank-count"),
    score: document.querySelector("#score"),
    progress: document.querySelector("#progress"),
    questionCounter: document.querySelector("#question-counter"),
    questionSource: document.querySelector("#question-source"),
    questionText: document.querySelector("#question-text"),
    answers: document.querySelector("#answers"),
    feedback: document.querySelector("#feedback"),
    reviewList: document.querySelector("#review-list")
  };

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function topics() {
    return [...new Set(bank.map((question) => question.topic))].sort();
  }

  function filteredQuestions() {
    const topic = els.topicFilter.value;
    const difficulty = els.difficultyFilter.value;
    return bank.filter((question) => {
      const topicMatch = topic === "all" || question.topic === topic;
      const difficultyMatch = difficulty === "all" || question.difficulty === difficulty;
      return topicMatch && difficultyMatch;
    });
  }

  function startQuiz() {
    const filtered = shuffle(filteredQuestions());
    const size = els.sessionSize.value === "all" ? filtered.length : Number(els.sessionSize.value);
    state.questions = filtered.slice(0, size);
    state.current = 0;
    state.answered = false;
    state.correct = 0;
    state.review = [];
    renderQuestion();
    renderReview();
  }

  function renderQuestion() {
    updateStats();
    els.feedback.hidden = true;
    els.feedback.textContent = "";
    els.nextBtn.disabled = true;
    els.answers.innerHTML = "";

    if (state.questions.length === 0) {
      els.questionCounter.textContent = "Question 0 of 0";
      els.questionSource.textContent = "No matches";
      els.questionText.textContent = "No questions match these filters. Try a broader setup.";
      return;
    }

    const question = state.questions[state.current];
    state.answered = false;
    els.questionCounter.textContent = `Question ${state.current + 1} of ${state.questions.length}`;
    els.questionSource.textContent = `${question.topic} - ${question.source}`;
    els.questionText.textContent = question.question;

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-btn";
      const label = document.createElement("strong");
      label.textContent = letters[index];
      const text = document.createElement("span");
      text.textContent = option;
      button.append(label, text);
      button.addEventListener("click", () => chooseAnswer(index));
      els.answers.appendChild(button);
    });
  }

  function chooseAnswer(index) {
    if (state.answered) return;
    state.answered = true;
    const question = state.questions[state.current];
    const isCorrect = index === question.answer;
    if (isCorrect) state.correct += 1;

    [...els.answers.children].forEach((button, optionIndex) => {
      button.disabled = true;
      if (optionIndex === question.answer) button.classList.add("correct");
      if (optionIndex === index && !isCorrect) button.classList.add("incorrect");
    });

    els.feedback.hidden = false;
    els.feedback.textContent = `${isCorrect ? "Correct." : "Not quite."} ${question.explanation}`;
    els.nextBtn.disabled = false;

    state.review.unshift({
      question: question.question,
      result: isCorrect ? "Correct" : "Missed",
      answer: question.options[question.answer],
      chosen: question.options[index]
    });
    renderReview();
    updateStats();
  }

  function nextQuestion() {
    if (state.current < state.questions.length - 1) {
      state.current += 1;
      renderQuestion();
      return;
    }
    els.nextBtn.disabled = true;
    els.feedback.hidden = false;
    els.feedback.textContent = `Session complete. Final score: ${state.correct}/${state.questions.length}.`;
  }

  function updateStats() {
    els.bankCount.textContent = String(bank.length);
    const totalAnswered = state.review.length;
    els.score.textContent = `${state.correct}/${totalAnswered}`;
    const total = state.questions.length || 0;
    const pct = total === 0 ? 0 : Math.round((totalAnswered / total) * 100);
    els.progress.textContent = `${pct}%`;
  }

  function renderReview() {
    if (state.review.length === 0) {
      els.reviewList.innerHTML = '<p class="empty">Answered questions will appear here.</p>';
      return;
    }
    els.reviewList.innerHTML = "";
    state.review.forEach((item) => {
      const article = document.createElement("article");
      article.className = "review-item";
      const summary = document.createElement("p");
      const result = document.createElement("strong");
      result.textContent = `${item.result}:`;
      summary.append(result, ` ${item.question}`);
      const chosen = document.createElement("span");
      chosen.textContent = `Your answer: ${item.chosen}`;
      const correct = document.createElement("span");
      correct.textContent = `Correct answer: ${item.answer}`;
      article.append(summary, chosen, document.createElement("br"), correct);
      els.reviewList.appendChild(article);
    });
  }

  function init() {
    topics().forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      els.topicFilter.appendChild(option);
    });
    els.startBtn.addEventListener("click", startQuiz);
    els.nextBtn.addEventListener("click", nextQuestion);
    els.restartBtn.addEventListener("click", startQuiz);
    updateStats();
    if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    }
  }

  init();
})();
