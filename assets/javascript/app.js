$(document).ready(function() {
    //function that generates a start button on the initial screen
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    //create function, generateHTML(), triggered by the start button
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  
        generateHTML();
    
        timerWrapper();
    
    }); 
    //if/else for win/loss based on response
    $("body").on("click", ".answer", function(event){
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
           
    
            clearInterval(timer);
            generateWin();
        }
        else {
            clearInterval(timer);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        resetGame();
    }); 
    
    }); 
    //time out function
    function generateLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Time's Up!  The correct answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 5000);  
    }
    //win function
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 5000);  
    }
    //loss function
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 5000); 
    }
    //html generator
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    //if/else to differentiate response screens for questions 1-9 vs last question
    function wait() {
        if (questionCounter < 9) {
        questionCounter++;
        generateHTML();
        counter = 20;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    //timer variations. time out vs time left
    function timerWrapper() {
        timer = setInterval(twentySec, 1000);
        function twentySec() {
            if (counter === 0) {
                clearInterval(timer);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    //final screen 
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Here's your trivia score tally!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    //reset function
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 20;
        generateHTML();
        timerWrapper();
    }
    //vars
    var startScreen;
    var gameHTML;
    var counter = 20;
    var questionArray = ["Which is the oldest designated National Park in America?", "Which National Park is home to the world's largest tree by volume?", "Which National Park is home to the longest cave system in the world?", "Which state contains the most National Parks?", "Which is the most visited National Park in America?", "Which one of these men is considered to be the father of the National Parks System?", "Who was the only US President to work as a park ranger?", "Which National Park contains the highest peak in North America?", "Which of these iconic landmarks is NOT part of the National Parks System?", "How many designated National Parks are in the US?"];
    var answerArray = [["Death Valley National Park", "Yosemite National Park", "Acadia National Park", "Yellowstone National Park"], ["Redwood National Park","Sequoia National Park","Everglades National Park","Joshua Tree National Park"], ["Carlsbad Cavern National Park", "Canyonlands National Park", "Mammoth Cave National Park", "Great Basin National Park"], ["California","Utah","Colorado","Alaska"], ["Great Smoky Mountains National Park", "Yosemite National Park", "Acadia National Park", "Yellowstone National Park"], ["Theodore Roosevelt","Joseph Le Conte","Ralph Waldo Emerson","John Muir"], ["Jimmy Carter", "Gerald R. Ford", "Theodore Roosevelt", "Harry S. Truman"], ["Grand Teton National Park","Hawaii Volcanoes National Park","Denali National Park","Mount Rainier National Park"], ["Plymouth Rock","The White House","Mount Rushmore","Alcatraz Island"], ["21","9","40","60"]];
    var imageArray = ["<img class='center-block img-right' src='assets/images/yellowstone.jpg'>", "<img class='center-block img-right' src='assets/images/sequoia.jpg'>", "<img class='center-block img-right' src='assets/images/mammothcave.jpg'>", "<img class='center-block img-right' src='assets/images/california.jpg'>", "<img class='center-block img-right' src='assets/images/greatsmokymountains.jpg'>", "<img class='center-block img-right' src='assets/images/johnmuir.jpg'>", "<img class='center-block img-right' src='assets/images/geraldford.jpg'>", "<img class='center-block img-right' src='assets/images/denali.jpg'>", "<img class='center-block img-right' src='assets/images/plymouthrock.jpg'>", "<img class='center-block img-right' src='assets/images/sixty.png'>"];
    var correctAnswers = ["D. Yellowstone National Park", "B. Sequoia National Park", "C. Mammoth Cave National Park", "A. California", "A. Great Smoky Mountains National Park", "D. John Muir", "B. Gerald R. Ford", "C. Denali National Park", "A. Plymouth Rock", "D. 60"];
    var questionCounter = 0;
    var selecterAnswer;
    var timer;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;