(function () {
  const letters = ["A", "B", "C", "D", "E"];
  const bank = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];
  const figures = {
    "ps31-001": ["assets/figures/ps31-figure-1.png", "Problem 3.1 Figure 1 game tree"],
    "ps31-002": ["assets/figures/ps31-figure-1.png", "Problem 3.1 Figure 1 game tree"],
    "ps31-003": ["assets/figures/ps31-figure-1.png", "Problem 3.1 Figure 1 game tree"],
    "ps31-004": ["assets/figures/ps31-figure-2.png", "Problem 3.1 Figure 2 game tree"],
    "ps31-005": ["assets/figures/ps31-figure-2.png", "Problem 3.1 Figure 2 game tree"],
    "ps31-006": ["assets/figures/ps31-figure-3.png", "Problem 3.1 Figure 3 game tree"],
    "ps31-007": ["assets/figures/ps31-figure-3.png", "Problem 3.1 Figure 3 game tree"],
    "ps31-008": ["assets/figures/ps31-figure-3.png", "Problem 3.1 Figure 3 game tree"],
    "ps31-009": ["assets/figures/ps31-figure-3.png", "Problem 3.1 Figure 3 game tree"],
    "ps31-010": ["assets/figures/ps31-figure-4.png", "Problem 3.1 Figure 4 game tree"],
    "ps31-011": ["assets/figures/ps31-figure-4.png", "Problem 3.1 Figure 4 game tree"],
    "ps31-012": ["assets/figures/ps31-figure-4.png", "Problem 3.1 Figure 4 game tree"],
    "ps32-001": ["assets/figures/ps32-game-1.png", "Problem 3.2 Game 1 tree"],
    "ps32-002": ["assets/figures/ps32-game-1.png", "Problem 3.2 Game 1 tree"],
    "ps32-003": ["assets/figures/ps32-game-2.png", "Problem 3.2 Game 2 tree"],
    "ps32-004": ["assets/figures/ps32-game-3.png", "Problem 3.2 Game 3 tree"],
    "ps32-005": ["assets/figures/ps32-game-4b.png", "Problem 3.2 Game 4 equivalent tree"],
    "ps33-001": ["assets/figures/ps33-veto-tree.png", "Problem 3.3 committee veto game tree"],
    "ps33-002": ["assets/figures/ps33-veto-tree.png", "Problem 3.3 committee veto game tree"],
    "ps33-003": ["assets/figures/ps33-veto-tree.png", "Problem 3.3 committee veto game tree"],
    "ps33-004": ["assets/figures/ps33-veto-tree.png", "Problem 3.3 committee veto game tree"],
    "ps34-001": ["assets/figures/ps34-figure-5.png", "Problem 3.4 Figure 5 game tree"],
    "ps34-002": ["assets/figures/ps34-figure-5.png", "Problem 3.4 Figure 5 game tree"],
    "ps34-003": ["assets/figures/ps34-figure-5.png", "Problem 3.4 Figure 5 game tree"],
    "ps35-001": ["assets/figures/ps35-figure-6.png", "Problem 3.5 Figure 6 entrant-monopolist tree"],
    "ps35-002": ["assets/figures/ps35-figure-6.png", "Problem 3.5 Figure 6 entrant-monopolist tree"],
    "ps35-003": ["assets/figures/ps35-figure-6-2.png", "Problem 3.5 Figure 6.2 investment tree"],
    "ps36-001": ["assets/figures/ps36-figure-7.png", "Problem 3.6 Figure 7 game tree"],
    "ps36-002": ["assets/figures/ps36-figure-7.png", "Problem 3.6 Figure 7 game tree"],
    "ps37-001": ["assets/figures/ps37-figures-10-v1-v2.png", "Problem 3.7 sequential game versions"],
    "ps37-002": ["assets/figures/ps37-figures-10-v1-v2.png", "Problem 3.7 sequential game versions"],
    "ps37-003": ["assets/figures/ps37-figures-10-v1-v2.png", "Problem 3.7 sequential game versions"],
    "ps38-001": ["assets/figures/ps38-chip-game.png", "Problem 3.8 chip game tree"],
    "ps38-002": ["assets/figures/ps38-chip-game.png", "Problem 3.8 chip game tree"],
    "ps310-001": ["assets/figures/ps310-figure-11.png", "Problem 3.10 river game tree"],
    "ps310-002": ["assets/figures/ps310-figure-11.png", "Problem 3.10 river game tree"],
    "ps310-003": ["assets/figures/ps310-figure-11.png", "Problem 3.10 river game tree"],
    "ps310-004": ["assets/figures/ps310-figure-11.png", "Problem 3.10 river game tree"],
    "ps311-001": ["assets/figures/ps311-car-game.png", "Problem 3.11 car-buying tree"],
    "ps311-002": ["assets/figures/ps311-car-game.png", "Problem 3.11 car-buying tree"],
    "ps311-003": ["assets/figures/ps311-car-game.png", "Problem 3.11 car-buying tree"],
    "ps312-001": ["assets/figures/ps312-apple-game.png", "Problem 3.12 apple-sharing tree"],
    "ps312-002": ["assets/figures/ps312-apple-game.png", "Problem 3.12 apple-sharing tree"],
    "ps312-003": ["assets/figures/ps312-apple-game.png", "Problem 3.12 apple-sharing tree"],
    "ps312-004": ["assets/figures/ps312-apple-game.png", "Problem 3.12 apple-sharing tree"],
    "ps312-005": ["assets/figures/ps312-apple-game.png", "Problem 3.12 apple-sharing tree"],
    "ps313-001": ["assets/figures/ps313-figure-8.png", "Problem 3.13 Figure 8 game tree"],
    "ps313-002": ["assets/figures/ps313-figure-9.png", "Problem 3.13 Figure 9 game tree"],
    "ps313-003": ["assets/figures/ps313-figure-10.png", "Problem 3.13 Figure 10 game tree"]
  };

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
    questionFigure: document.querySelector("#question-figure"),
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

  function shuffleQuestionOptions(question) {
    const options = question.options.map((text, index) => ({
      text,
      isCorrect: index === question.answer
    }));
    const shuffled = shuffle(options);
    return {
      ...question,
      options: shuffled.map((option) => option.text),
      answer: shuffled.findIndex((option) => option.isCorrect)
    };
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
    state.questions = filtered.slice(0, size).map(shuffleQuestionOptions);
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
    els.questionFigure.hidden = true;
    els.questionFigure.innerHTML = "";

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
    renderFigure(question);

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

  function renderFigure(question) {
    els.questionFigure.hidden = true;
    els.questionFigure.innerHTML = "";
    const figure = figures[question.id] || (question.image ? [question.image, question.imageAlt || "Question figure"] : null);
    if (!figure) return;
    const [src, alt] = figure;
    const link = document.createElement("a");
    link.href = src;
    link.target = "_blank";
    link.rel = "noopener";
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.loading = "lazy";
    link.appendChild(image);
    els.questionFigure.appendChild(link);
    els.questionFigure.hidden = false;
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
