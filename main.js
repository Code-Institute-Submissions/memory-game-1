
var alphaButton = document.getElementById('alphaButton');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var div1 = document.getElementById('alphaScore');
var div2 = document.getElementById('alphaTiming');
var arr0 = [btn1, btn2, btn3, btn4];
var arr1 = [];
var arr3 = [];

function randomButtons() {
    var randomNumber1 = Math.floor(Math.random() * 4);
    arr1.push(arr0[randomNumber1]);
    console.log(arr1)
    if(arr1[0]===btn1){
        btn1.classList.add('blue');
        setTimeout(function(){
            btn1.classList.remove('blue')
        },500)
    }
        if(arr1[0]===btn2){
        btn2.classList.add('red');
        setTimeout(function(){
            btn2.classList.remove('red')
        },500)
    }
        if(arr1[0]===btn3){
        btn3.classList.add('green');
        setTimeout(function(){
            btn3.classList.remove('green')
        },500)
    }
        if(arr1[0]===btn4){
        btn4.classList.add('yellow');
        setTimeout(function(){
            btn4.classList.remove('yellow')
        },500)
    }
}
alphaButton.addEventListener("click",function(){
    randomButtons()
})


