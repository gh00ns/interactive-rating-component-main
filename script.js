// CLICKING ON RATINGS
var activeBtn = "";

const btn1 = document.getElementById("btn__1");
const btn2 = document.getElementById("btn__2");
const btn3 = document.getElementById("btn__3");
const btn4 = document.getElementById("btn__4");
const btn5 = document.getElementById("btn__5");

btn1.onclick = function(){btnPressed("1")};
btn2.onclick = function(){btnPressed("2")};
btn3.onclick = function(){btnPressed("3")};
btn4.onclick = function(){btnPressed("4")};
btn5.onclick = function(){btnPressed("5")};

function btnPressed(num_string) {
    if (activeBtn == "") {
        // set active button
        document.getElementById("btn__" + num_string).style.backgroundColor = "hsl(216, 12%, 54%)";
        document.getElementById("btn__" + num_string).style.color = "hsl(0, 0%, 100%)";
    }

    else if (activeBtn == num_string) {
        // reset
        document.getElementById("btn__" + num_string).style.backgroundColor = "";
        document.getElementById("btn__" + num_string).style.color = "";  
        num_string = "";
    }

    else if (activeBtn != num_string) {
        // reset previous button
        document.getElementById("btn__" + activeBtn).style.backgroundColor = "";
        document.getElementById("btn__" + activeBtn).style.color = "";  
        
        // set new active button
        document.getElementById("btn__" + num_string).style.backgroundColor = "hsl(216, 12%, 54%)";
        document.getElementById("btn__" + num_string).style.color = "hsl(0, 0%, 100%)";
    }

    activeBtn = num_string;
}

// CLICKING SUBMIT
const btnSubmit = document.getElementById("btn__submit");
const container = document.getElementById("container");
const containerSubmitted = document.getElementById("container__submitted");
const selectedRating = document.getElementById("selected__rating");

btnSubmit.onclick = function(){submitted(activeBtn)};

function submitted(rating) {
    if (activeBtn != "") {
        selectedRating.textContent = rating;
        container.style.display = "none";
        containerSubmitted.style.display = "block";
    }
}
