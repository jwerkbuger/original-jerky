const questionAnswers = {
    "1": "3", // 각 질문에 대한 정답을 매핑합니다.
    "2": "2",
    // 필요한 만큼 질문과 정답을 추가할 수 있습니다.
};

function checkAnswer(questionNumber) {
    const selectedAnswer = document.querySelector(`input[name="answer${questionNumber}"]:checked`);
    if (!selectedAnswer) {
        alert("답을 선택하세요.");
        return;
    }

    const userAnswer = selectedAnswer.value;
    const correctAnswer = questionAnswers[questionNumber];

    const resultMessage = userAnswer === correctAnswer ? "정답입니다!" : "틀렸습니다.";

    document.getElementById('result').textContent = resultMessage;
    nextSlide();
}

function nextSlide() {
    const slides = document.querySelectorAll('.question-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = slides.length - 1; // 마지막 슬라이드에서 더 이상 이동하지 않음
    }
    slides[currentSlide].classList.add('active');
}

let currentSlide = 0;

// Initialize the first slide
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.question-slide')[0].classList.add('active');
});
