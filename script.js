// CLICKING ON RATINGS

var activeBtn = "";

document.getElementById("btn__1").onclick = function(){btnPressed("1")};
document.getElementById("btn__2").onclick = function(){btnPressed("2")};
document.getElementById("btn__3").onclick = function(){btnPressed("3")};
document.getElementById("btn__4").onclick = function(){btnPressed("4")};
document.getElementById("btn__5").onclick = function(){btnPressed("5")};

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