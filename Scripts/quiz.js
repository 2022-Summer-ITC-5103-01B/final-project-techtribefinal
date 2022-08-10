const $ = selector => document.querySelector(selector); 

const resetColors = () => {
    //unmark all labels
    let allRadioButtons = document.querySelectorAll('input[type="radio"]');
    allRadioButtons.forEach(ans => {
        ans.nextSibling.nextSibling.style.color = '#000000';
    });
}

const parseAnswers = (data) => {
    resetColors();
    let correctAns = 0;
    let total = 0;
    let color = '#000000';
    //count answers that were marked correctly
    for (let question in data) {
        let answerID = data[question];
        if ($('#'+answerID).checked) {
            correctAns++;
        }
        total++;
    }

    //set color depending on a score
    if (correctAns/total > 0.7){
        color = '#00ff00';
    } else if (correctAns/total > 0.4){
        color = '#ffb300';
    } else {
        color = '#ff0000';
    }
    $('#result').textContent = 'Your score: ' + correctAns + '/' + total;
    $('#result').style.color = color;
}

const displayAnswers = (data) => {
    resetColors();
    //mark selected answers
    let selectedAnsList = document.querySelectorAll('input:checked');
    selectedAnsList.forEach(ans => {
        ans.nextSibling.nextSibling.style.color = '#ff0000';
    });

    //mark correct answers
    for (let question in data) {
        let answerID = data[question];
        let correctLabel = $('#'+answerID).nextSibling.nextSibling;
        correctLabel.style.color = '#00ff00';
    }
}

const checkAnswers = () => {
    //get correct answers from JSON
    fetch('./Scripts/quiz_answers.json')
        .then(response => response.json())
        .then(data => parseAnswers(data));
}

const showAnswers = () => {
    //get correct answers from JSON
    fetch('./Scripts/quiz_answers.json')
        .then(response => response.json())
        .then(data => displayAnswers(data));
}

document.addEventListener('DOMContentLoaded', () => {
    $('#checkAns').addEventListener('click', checkAnswers);
    $('#showAns').addEventListener('click', showAnswers);
});