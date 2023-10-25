import { questions } from './questions.js';
let score = 0;
let currentAnswer;
let currentQuestion = 0;
const displayScore = document.getElementById("score");
const testContent = document.getElementById('test-content');

function createOptions(options) {
    let result = '';
    options.map((option,) => {
        result += `<button type="button" class="btn text-start " onclick="getUserAnswer(this,${option})" >${option}</button>
  
     ` });
    return result;
}

function getQuestion() {
    const data = `
    <div class="text-header bg-primary p-2 rounded-1">
    <h5 class="text-light">Question number ${currentQuestion + 1} </h5>
    <div class="d-flex justify-content-between  ">
      <p class="text-light mt-3 fw-bolder">Score : <span id="score"></span></p>
      <div class="timer  p-1 bg-light fw-bolder  text-primary  mt-1  fs-5 rounded-1 p-2">
        50
      </div>
    </div>
  </div>
 
  <div class="test-info mt-2">
    <p>${questions[currentQuestion].questionTitle}</p>
    <div class="desc overflow-hidden bg-black link-light p-2">
      <span class="text-start fs-5"> ${questions[currentQuestion].questionCode} </span>
    </div>
  </div>
  <div class="answer-buttons mt-3 d-grid gap-2 ">
      ${createOptions(questions[currentQuestion].options)}
 
  </div>
  <div class="check-buttons mt-3">
    <button type="button" class="btn  text-start me-3 text-primary"><i
        class="fa-solid fa-angle-left fs-5 me-1"></i> Back</button>
    <button type="button" class="btn border-5 text-start  text-primary">
      check <i class="fa-solid fa-check fs-5 me-1"></i></button>
  </div>`;

    testContent.innerHTML = data;

}
function getUserAnswer(button, option) {
    currentAnswer = option;
    console.log(" this is .." + currentAnswer);
    button.style.backgroundColor = "#A5CFFC";
}



function checkAnswer() {
    let answer = questions[currentQuestion].answer;
    if (answer == result) {
        score += 10;
        const displayScore = document.getElementById("score");
        displayScore.innerHTML = score;
        displayAnswer('');
        generateRandomEquation();
    } else {
        displayUserNameScreen();
    }
}

function initApp() {
    getQuestion();
}
initApp();

