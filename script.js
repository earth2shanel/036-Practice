let answerDiv = document.querySelector(".answer");

let sayWeather = document.querySelector(".sayWeather");
sayWeather.onclick = function() {
    //Write the code for Code Along Part 1 below
    answerDiv.innerHTML = "cold";
};

let sayCity = document.querySelector(".sayCity");
sayCity.onclick = function() {
    //Write the code for Code It Solo Part 1 below
    answerDiv.innerHTML = " Chief keef City";
};

let changeSize = document.querySelector(".changeSize");
changeSize.onclick = function() {
    //Write the code for Code Along Part 2 below!
    answerDiv.innerHTML = "Naur";
};

let changeColor = document.querySelector(".changeColor");
changeColor.onclick = function() {
    let body = document.querySelector("body");
    //Write the code for Code It Solo Part 2 below!
    body.style.backgroundColor = "pink ";
};


// Problem 1
let changeText = document.querySelector(".changeText");
changeText.onclick = function() {
    //Write the code for Code It Solo Part 3 Problem 1 below
    answerDiv.style.color = "Red ";
};


//Problem 2
let suggestLunch = document.querySelector(".suggestLunch");
suggestLunch.onclick = function() {
      answerDiv.innerHTML = "BA LOG NA SAN WITCH";


};

//SPICY (Optional): Problem 3
let sayNumber = document.querySelector(".sayNumber");
sayNumber.onclick = function() {
    let secretNumber = document.querySelector("input").value; //this is saving the value of whatever the user types in as their secrete number
    //Write the code for Spicy Problem 3 below

};

//SPICY (Optional): Problem 4
let changePicture = document.querySelector(".changePicture");
changePicture.onclick = function() {
    let image = document.querySelector(".ball");
    //Write the code for Spicy Problem 4 below. Remember to use .src!

};