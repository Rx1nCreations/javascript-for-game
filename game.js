const questions = [
	{
		question: "What is the capital of France?",
		choices: ["London", "Paris", "New York", "Tokyo"],
		answer: "Paris"
	},
	{
		question: "What is the largest continent?",
		choices: ["Europe", "Asia", "North America", "Australia"],
		answer: "Asia"
	},
	{
		question: "What is the smallest planet in our solar system?",
		choices: ["Mars", "Venus", "Mercury", "Jupiter"],
		answer: "Mercury"
	},
	{
		question: "What is the world's largest ocean?",
		choices: ["Atlantic", "Arctic", "Indian", "Pacific"],
		answer: "Pacific"
	},
	{
		question: "What is the currency of Japan?",
		choices: ["Yuan", "Yen", "Euro", "Dollar"],
		answer: "Yen"
	}
];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(question) {
	questionElement.innerText = question.question;
	choicesElement.innerHTML = "";
	question.choices.forEach(choice => {
		const li = document.createElement("li");
		li.innerText = choice;
		li.addEventListener("click", () => {
			if (choice === question.answer) {
				score++;
				resultElement.innerText = "Correct!";
			} else {
				resultElement.innerText = "Wrong! You're eliminated.";
				nextButton.disabled = true;
			}
			resultContainer.style.display = "block";
		});
		choicesElement.appendChild(li);
	});
}

function showNextQuestion() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion(questions[currentQuestionIndex]);
		resultContainer.style.display = "none";
		nextButton.disabled = true;
	} else {
		endGame();
	}
}

function endGame() {
	questionContainer.style.display = "none";
	resultContainer.style.display = "block";
	resultElement.innerText = `Your score is ${score}/${questions.length}`;
	nextButton.innerText = "Play Again";
	nextButton.addEventListener("click", () => {
		location.reload();
	});
}

showQuestion(questions[currentQuestionIndex]);

nextButton.addEventListener
