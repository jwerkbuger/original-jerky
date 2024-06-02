const questionMessage = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
];
function randomQuestionMessage(){
    const randomMessage = Math.floor(Math.random() * questionMessage.length);
    return questionMessage[randomMessage];
}
function showQuestionMessage(){
    const Qelement = document.querySelectorAll('.q');

    Qelement.forEach(Qelement => {
        Qelement.textContent = randomQuestionMessage();
    });
}


function nextSlide() {
    const slide = document.querySelectorAll('.question-slide');
    slide[currentSlide].classList.remove('active');
    currentSlide++;
    if(currentSlide >= slide.length) {
        currentSlide = slide.length - 1;
    }
    slide[currentSlide].classList.add('active');
}

function prevSlide() {
    const slide = document.querySelectorAll('.question-slide');
    slide[currentSlide].classList.remove('active');
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = 0;
    }
    slide[currentSlide].classList.add('active');
}

let currentSlide = 0; // 0으로 초기화
// Initialize the first slide
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.question-slide')[0].classList.add('active');
    showQuestionMessage();
});