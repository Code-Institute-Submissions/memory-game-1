//definitions for game variables

var alphaButton = document.getElementById('alphaButton');
var counter = 0;
var arrBtn1 = [];
var arrClick1 = [];
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var div1 = document.getElementById('alphaScore');
var div2 = document.getElementById('alphaTiming');
var arr0 = [btn1, btn2, btn3, btn4];
var arr1 = [];
var arr3 = [];
var arrStop = [];
var score = 0;
var counterMainButton = 0;
var alphaText = document.getElementById('alphaText')


//Takes a random number and pushes the btn's id's from arr0 into arr1[], 
//assigning a random sequence of btn's.

function randomButtons() {
    var randomNumber1 = Math.floor(Math.random() * 4);
    arr1.push(arr0[randomNumber1]);
}

//One of the main functions - uses 2 random numbers one for the timing of "setInterval" and the other for the
// length of the interval until cleared.
//Then changes the buttons classes with the colour classes using css.
//Then clears any array used, takes the score variable and substracts from randomNumber2 setting a dificulty level.
// I have tweaked the randomNumbers values to get a progression of difficulty


function randomLight() {
    var randomNumber2 = Math.floor(Math.random() * 2 + 1);
    var randomNumber3 = Math.floor(Math.random() * 2 + 1);

    if (score < 1) {
        randomNumber3 = randomNumber3 * 200;
        randomNumber2 = randomNumber2 * 500;
    }
    if (score >= 1 && score <= 2) {
        randomNumber3 = randomNumber3 * 500;
        randomNumber2 = randomNumber2 * 500;
    }
    if (score > 2 && score <= 20) {
        randomNumber3 = randomNumber3 * 1000;
        randomNumber2 = randomNumber2 * 500;
    }
    if (score > 20 && score <= 30) {
        randomNumber3 = randomNumber3 * 1000;
        randomNumber2 = randomNumber2 * 400;
    }
    if (score > 30 && score <= 40) {
        randomNumber3 = randomNumber3 * 1000;
        randomNumber2 = randomNumber2 * 350;
    }
    if (score > 40) {
        randomNumber3 = randomNumber3 * 1500;
        randomNumber2 = randomNumber2 * 350;
    }

    var interval1 = setInterval(function() {
        randomButtons();
        if (arr1[0] === btn1) {
            arr1[0].classList.add('blue');
            setTimeout(function() {
                btn1.classList.remove('blue');
            }, 200);
        }
        if (arr1[0] === btn2) {
            arr1[0].classList.add('red');
            setTimeout(function() {
                btn2.classList.remove('red');
            }, 200);
        }
        if (arr1[0] === btn3) {
            arr1[0].classList.add('green');
            setTimeout(function() {
                btn3.classList.remove('green');
            }, 200);
        }
        if (arr1[0] === btn4) {
            arr1[0].classList.add('yellow');
            setTimeout(function() {
                btn4.classList.remove('yellow');
            }, 200);
        }
        classCheck()
        arr3.push(arr1[0]);
        setTimeout(function() {
            arr3.shift();
            arr1.shift();

        }, 200);

    }, randomNumber2);
    setTimeout(function() {
        clearInterval(interval1);
        timing();
    }, randomNumber2 + randomNumber3);
}

//A simple timer to coundown players's seconds remaining until using a location reload function.
//Player loses all score accumulated.

function timing() {
    var timeTo0 = 20;
    var timerInt = setInterval(timer, 1000);

    function timer() {
        if (timeTo0 === 0) {
            clearTimeout(timerInt);
            div2.innerHTML = timeTo0 + ' seconds remain';
            reload1();
        }
        else {
            div2.innerHTML = timeTo0 + ' seconds remain';
            timeTo0--;
        }
        if (arrStop[0] === "stop") {
            clearTimeout(timerInt);
            timeTo0 = 0;
            div2.innerHTML = timeTo0 + ' seconds remain';
        }
    }
}

function reload1() {
    location.reload();
}

//The click functions adds event listener to buttons and takes the value into arrClick1.Also adds a very short effect
//to buttons to enable the user to see better the clicked button.Calls the Validate function. 

function click1() {
    btn1.addEventListener("click", function() {
        arrClick1.push('btn1');
        btn1.style.backgroundColor = "#000";
        setTimeout(function() {
            btn1.style.backgroundColor = "rgb(8, 8, 75)";
        }, 30);
        validate();
    });
}

function click2() {
    btn2.addEventListener("click", function() {
        arrClick1.push('btn2');
        btn2.style.backgroundColor = "#000";
        setTimeout(function() {
            btn2.style.backgroundColor = "rgb(68, 4, 4)";
        }, 30);
        validate();
    });
}

function click3() {
    btn3.addEventListener("click", function() {
        arrClick1.push('btn3');
        btn3.style.backgroundColor = "#000";
        setTimeout(function() {
            btn3.style.backgroundColor = "rgb(8, 44, 0)";
        }, 30);
        validate();
    });
}

function click4() {
    btn4.addEventListener("click", function() {
        arrClick1.push('btn4');
        btn4.style.backgroundColor = "#000";
        setTimeout(function() {
            btn4.style.backgroundColor = "rgb(87, 81, 7)";
        }, 30);
        validate();
    });
}

//This function verifies the class of the buttons and pushes into arrBtn1 the values
// in the order generated by game as seen in console.log().

function classCheck() {
    if (btn1.className == 'btn1 col-xs-5 col-sm-5 col-md-5 col-lg-5 blue') {
        arrBtn1.push('btn1');
        console.log(`Buttons generated by game ${arrBtn1}`);
    }
    if (btn2.className == 'btn2 col-xs-5 col-sm-5 col-md-5 col-lg-5 red') {
        arrBtn1.push('btn2');
        console.log(`Buttons generated by game ${arrBtn1}`);
    }
    if (btn3.className == 'btn3 col-xs-5 col-sm-5 col-md-5 col-lg-5 green') {
        arrBtn1.push('btn3');
        console.log(`Buttons generated by game ${arrBtn1}`);
    }
    if (btn4.className == 'btn4 col-xs-5 col-sm-5 col-md-5 col-lg-5 yellow') {
        arrBtn1.push('btn4');
        console.log(`Buttons generated by game ${arrBtn1}`);
    }
}

//This function checks the array generated by the random number with the array generated by the player clicks
// and if they are the same , adds a "success" class with a timeout.
//Adds and displays the score into a html span.
//I have left the console.logs just for a better understanding of the flow of the game
// I have used JSON.stringify as i found it the most convenient and precise way to compare the elements of arrays


function validate() {
    if (JSON.stringify(arrBtn1) == JSON.stringify(arrClick1) &&
        arrBtn1.length === arrClick1.length) {
        btn1.classList.add('success');
        btn2.classList.add('success');
        btn3.classList.add('success');
        btn4.classList.add('success');
        arrStop.push('stop');
        setTimeout(function() {
            btn1.classList.remove('success');
            btn2.classList.remove('success');
            btn3.classList.remove('success');
            btn4.classList.remove('success');
            counterMainButton = 0;
            alphaButton.disabled = false;
            arrBtn1 = [];
            arrClick1 = [];
            arrStop = [];
            score++;
            div1.innerHTML = `Your score is ${score}`;
        }, 1000);

    }
    else if (JSON.stringify(arrBtn1) !== JSON.stringify(arrClick1) &&
        arrBtn1.length === arrClick1.length) {
        alphaText.classList.remove('alphaThree');
        alphaText.classList.add('alphaFour');
        alphaText.innerHTML = 'Incorrect! Reset game here.'
        alphaText.addEventListener('click', function() { location.reload() })
    }
    console.log(`Buttons clicked by player ${arrClick1}`);
    console.log(`Buttons generated by game ${arrBtn1}`);
}


//This calls the various functions of the game when clicked.Also clears counter,arrBtn1,arrClick1.

alphaButton.addEventListener("click", function() {
    counterMainButton++;
    setTimeout(function() {
        alphaButton.style.backgroundColor = "#000";
    }, 10);
    setTimeout(function() {
        alphaButton.style.backgroundColor = "";
    }, 20);
    if (counterMainButton > 0) { alphaButton.disabled = true; }

    randomLight();
    counter = 0;
    arrBtn1 = [];
    arrClick1 = [];

});

click1();
click2();
click3();
click4();
