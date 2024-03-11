const questions = [
    {
      question: "Which is largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      question: "Who is known as the father of modern computer science?",
      answers: [
        { text: "Alan Turing", correct: true },
        { text: "Charles Babbage", correct: false },
        { text: "Ada Lovelace", correct: false },
        { text: "John von Neumann", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "Wa", correct: false },
        { text: "W", correct: false },
        { text: "H20", correct: true },
        { text: "H2", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "What is the capital city of France?",
      answers: [
        { text: "Madrid", correct: false },
        { text: "Rome", correct: false },
        { text: " Paris", correct: true },
        { text: " Berlin", correct: false },
      ],
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: [
        { text: "Mount Kilimanjaro", correct: false },
        { text: "Mount Everest", correct: true },
        { text: "Mount Fuji", correct: false },
        { text: "Mount McKinley", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "G", correct: false },
        { text: "Go", correct: false },
      ],
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Michelangelo", correct: true },
        { text: "Vincent van Gogh", correct: false },
        { text: "Leonardo da Vinci", correct: false },
        { text: "Pablo Picasso", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
  
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "Block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();