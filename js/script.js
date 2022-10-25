function submitAnswers() {
    var total = 5;
    var score = 0;

    //get user input
    var answer1 = document.forms["quizForm"]["q1"].value;
    var answer2 = document.forms["quizForm"]["q2"].value;
    var answer3 = document.forms["quizForm"]["q3"].value;
    var answer4 = document.forms["quizForm"]["q4"].value;
    var answer5 = document.forms["quizForm"]["q5"].value;

    //validate form
    for(i = 1; i <= total; i++) {
        if(eval('answer' + i) == null || eval('answer' + i) == '') {
            alert('Question ' + i + ' is required' );
            return false;
        }
    }

    // set correct answers
    var correctAnswers = ['a', 'a', 'c', 'a', 'd'];

    // check for correct answers
    for(i = 1; i <= total; i++){
        if(eval('answer' + i) == correctAnswers[i - 1]){
            score++;
        }
        console.log('answer' + i + '=' + eval('answer' + i) + ', correctAnswer i- 1 = ' + correctAnswers[i - 1]);
    }
    //display results on page
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span> . </h3>';

    alert('You scored ' + score + ' out of ' + total + '.  ');

    return false;
}