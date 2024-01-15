// beginning of quuestions

const questions = [
    {
        question: "What gamma energy emission turned Banner into hulk?",
        answers: ["a) X-ray", "b) Radiation", "c) Green light", "d) Helium"],
        correctAnswer: "b) Radiation",
        selectedAnswer: ''

    },
    {
        question: "What villainous robot was created by Tony Stark and Bruce?",
        answers: ["a) Vision", "b) Friday", "c) Ultron", "d) Destroyer"],
        correctAnswer: "c) Ultron",
        selectedAnswer: ''
    },
    {
        question: "How many infinity stones are there?",
        answers: ["a) Six", "b) Three", "c) Five", "d) Seven"],
        correctAnswer: "a) Six",
        selectedAnswer: ''
    },
    {
        question: "who played the role of Thor?",
        answers: ["a) Chris Pratt", "b) Chris Evans", "c) Chris Hemsworth", "d) Chris Shawn"],
        correctAnswer: "c) Chris Hemsworth",
        selectedAnswer: ''
    },
    {
        question: "S.H.I.E.L.D's Enemy?",
        answers: ["a) Hydra", "b) Sam", "c) Black widow", "d) Falcon"],
        correctAnswer: "a) Hydra",
        selectedAnswer: ''
    },
    {
        question: "Captain America's shield is made of what?",
        answers: ["a) Steel", "b) Vibranium", "c) Metal", "d) Iron"],
        correctAnswer: "b) Vibranium",
        selectedAnswer: ''
    },
    {
        question: "Marvel Comic writer, known for movie cameos?",
        answers: ["a) Jet Lee", "b) Stan Lee", "c) Bruce Lee", "d) jackie Lee"],
        correctAnswer: "b) Stan Lee",
        selectedAnswer: ''
    },
    {
        question: "----- of Agamotto was the mystic amulet worn bu Doctor Strange?",
        answers: ["a) Spear", "b) Teeth", "c) Sword", "d) Eye"],
        correctAnswer: "d) Eye",
        selectedAnswer: ''
    },
    {
        question: "What role did samuel L. Jackson play?",
        answers: ["a) Nick Fury", "b) Steve rogers", "c) Captain Marvel", "d) Tony Stark"],
        correctAnswer: "a) Nick Fury",
        selectedAnswer: ''
    },

    {
        question: "What was Thor's brother's name?",
        answers: ["a) Tom", "b) Steve", "c) Loki", "d) Pepper"],
        correctAnswer: "c) Loki",
        selectedAnswer: ''
    },

];

// end of quuestions

// gbobal variables

let i = 0
let disp = document.getElementById('disp')
let btndiv = document.getElementById('btn-div')
let time = document.querySelector('.time')
let timescreen = document.getElementById('time-screen')
let timing;
let score = 0
let checked = true
let tim ;
let Sound = document.getElementById('Sound');
let instrution = document.getElementById('instruction')
// gbobal variables

// beginning of start function

function startquiz() {

    
    timing = 60; 

    display()
    time.style.display = 'block'

         tim = setInterval(function(){
            timing--
            timescreen.innerHTML = `${timing.toString().padStart(2, '0')}`
            if (timing == 0) {
                clearInterval(tim)
                submit()
            }
        }, 1000)

}
// end of start function

// beginning of display function

function display() {
    disp.innerHTML = '';
    instrution.style.display = 'none';
    disp.innerHTML += `<h3 class="ques">${i + 1}. ${questions[i].question} <h3>`;
    
    questions[i].answers.forEach((el, index) => {
        disp.innerHTML += `<p>
                <input ${questions[i].selectedAnswer === questions[i].answers[index] ? 'checked' : ''} 
                type='radio' name="name" onclick="check(${index})">
                <span class='qus'>${el}</span>
            </p>`;
    });

    btndiv.style.display = 'block';
}

// end of display function

// beginning of check function

function check(index) {
    questions[i].selectedAnswer = questions[i].answers[index];
}


// end of check function

// beginning of next function

function next() {

    if (i < questions.length - 1) {
        i++
        display()
    }

}

// end of next function

// beginning of previous function

function previous() {

    if (i > 0) {
        i--
        display()
    }
}

// end of previous function

// beginning of submit function

function submit() {

    document.querySelector('.submit').style.display = 'block'
    score = questions.filter(el=> el.selectedAnswer == el.correctAnswer )
    // console.log(score.length);
    document.getElementById('result').innerHTML = `Your score is: ${score.length} out of ${questions.length}`

    clearInterval(tim)

    if (score.length >= 0 && score.length <= 4) {
        document.getElementById('result-messages').innerHTML = `Failing a quiz doesn’t define your abilities;`;
    } else if (score.length === 5) {
        document.getElementById('result-messages').innerHTML = `You're on the right track! Keep going.`;
    } else if (score.length >= 6 && score.length <= 10) {
        document.getElementById('result-messages').innerHTML = `Well done! Your effort shines through.`;
        Sound.play();
        setTimeout(function() {
            Sound.pause(); 
        }, 7000);

    }
}

// end of submit function


function goback() {
    document.querySelector('.submit').style.display = 'none';
    disp.innerHTML = ''
    btndiv.style.display = 'none'
    instrution.style.display = 'block'
    time.style.display = 'none'
    timing = 60; 
    timescreen.innerHTML = `${timing.toString().padStart(2, '0')}`;
    i = 0
    score = 0
}

