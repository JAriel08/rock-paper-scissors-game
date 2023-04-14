// buttons
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let nxtRoundBtn = document.querySelector("#nxtRoundBtn");

// event
rockBtn.addEventListener("click", rockFunction);
paperBtn.addEventListener("click", paperFunction);
scissorsBtn.addEventListener("click", scissorsFunction);

// display
let matchesHistory = document.querySelector("#matchesHistory");
let matchGameplay = document.querySelector("#matchGameplay");

nxtRoundBtn.setAttribute("disabled", "");

let yourScore = 0;
let computerScore = 0;

let i = "";

function getRandomValue() {
    i = Math.floor(Math.random () * 3);
    return i;
}

function rockFunction() {
    getRandomValue();

    if (i == 0) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "✊";
        itemDiv.classList.add("item-div");
        matchGameplay.appendChild(itemDiv);

        if (yourScore == 5) {
        alert(`Congrats, you win! The money is sent to your GCash.

Please refresh the page to play again ☺️ `);
        } else if (computerScore == 5) {
            alert(`You lose! 

Please refresh the page to play again ☺️`);
        }

        let nxtRoundBtn = document.querySelector("#nxtRoundBtn");
        nxtRoundBtn.addEventListener("click", nxtRoundFunction);

        function nxtRoundFunction() {
        nxtRoundBtn.setAttribute("disabled", "")
        rockBtn.removeAttribute("disabled");
        paperBtn.removeAttribute("disabled");
        scissorsBtn.removeAttribute("disabled");

        newPlayer.remove(newPlayer);
        itemDiv.remove(itemDiv);
        }
        nxtRoundBtn.removeAttribute("disabled");
        
    } else if (i == 1) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "✋";
        itemDiv.classList.add("item-div");
        matchGameplay.appendChild(itemDiv);

        computerScore += 1;
        document.querySelector("#computerScore").innerHTML = "Computer Score: " + computerScore;

        if (yourScore == 5) {
        alert(`Congrats, you win! The money is sent to your GCash.

Please refresh the page to play again ☺️ `);
        } else if (computerScore == 5) {
            alert(`You lose! 

Please refresh the page to play again ☺️`);
        }

        let nxtRoundBtn = document.querySelector("#nxtRoundBtn");
        nxtRoundBtn.addEventListener("click", nxtRoundFunction);

        function nxtRoundFunction() {
        nxtRoundBtn.setAttribute("disabled", "")
        rockBtn.removeAttribute("disabled");
        paperBtn.removeAttribute("disabled");
        scissorsBtn.removeAttribute("disabled");

        newPlayer.remove(newPlayer);
        itemDiv.remove(itemDiv);
        }
        nxtRoundBtn.removeAttribute("disabled");
    } else if (i == 2) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "✌️";
        itemDiv.classList.add("item-div");
        matchGameplay.appendChild(itemDiv);
        
        yourScore += 1;
        document.querySelector("#yourScore").innerHTML = "Your Score: " + yourScore;

        if (yourScore == 5) {
        alert(`Congrats, you win! The money is sent to your GCash.

Please refresh the page to play again ☺️ `);
        } else if (computerScore == 5) {
            alert(`You lose! 

Please refresh the page to play again ☺️`);
        }

        let nxtRoundBtn = document.querySelector("#nxtRoundBtn");
        nxtRoundBtn.addEventListener("click", nxtRoundFunction);

        function nxtRoundFunction() {
        nxtRoundBtn.setAttribute("disabled", "")
        rockBtn.removeAttribute("disabled");
        paperBtn.removeAttribute("disabled");
        scissorsBtn.removeAttribute("disabled");

        newPlayer.remove(newPlayer);
        itemDiv.remove(itemDiv);
        }
        nxtRoundBtn.removeAttribute("disabled");
    } else {
        return "error";
    }

    // Attribute
    rockBtn.setAttribute("disabled", "");
    paperBtn.setAttribute("disabled", "");
    scissorsBtn.setAttribute("disabled", "");

    let newPlayer = document.createElement("div");
    newPlayer.innerHTML = "✊";
    newPlayer.classList.add("new-player");
    matchGameplay.appendChild(newPlayer);

    let matchHistory = document.querySelector("#matchHistory");
    let history = document.createElement("span");
        history.innerHTML = "✊ " + i;
        if (i == 0) {
            history.innerHTML = "✊ " + "✊";
        } else if (i == 1) {
            history.innerHTML = "✊🏻 " + "✋";
        } else if (i == 2) {
            history.innerHTML = "✊ " + "✌🏻";
        } else {
            return "error"
        }
        history.classList.add("match-history");
        matchHistory.appendChild(history);
        
    if (yourScore == 5 || computerScore == 5) {
    nxtRoundBtn.setAttribute("disabled", "");
    } else {
        return "error";
    }
}

// Paper Function
function paperFunction() {
    getRandomValue();

    if (i == 0) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "✊";
        itemDiv.classList.add("item-div");
        matchGameplay.appendChild(itemDiv);

        yourScore += 1;
        document.querySelector("#yourScore").innerHTML = "Your Score: " + yourScore;

        if (yourScore == 5) {
        alert(`Congrats, you win! The money is sent to your GCash.

Please refresh the page to play again ☺️ `);
        } else if (computerScore == 5) {
            alert(`You lose! 
            
Please refresh the page to play again ☺️`);
        }

        let nxtRoundBtn = document.querySelector("#nxtRoundBtn");
        nxtRoundBtn.addEventListener("click", nxtRoundFunction);

        function nxtRoundFunction() {
        nxtRoundBtn.setAttribute("disabled", "")    
        rockBtn.removeAttribute("disabled");
        paperBtn.removeAttribute("disabled");
        scissorsBtn.removeAttribute("disabled");

        newPlayer.remove(newPlayer);
        itemDiv.remove(itemDiv);
        }
        nxtRoundBtn.removeAttribute("disabled");

        
    } else if (i == 1) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "✋";
        itemDiv.classList.add("item-div");
        matchGameplay.appendChild(itemDiv);

        if (yourScore == 5) {
        alert(`Congrats, you win! The money is sent to your GCash.

Please refresh the page to play again ☺️ `);
        } else if (computerScore == 5) {
            alert(`You lose! 
            
Please refresh the page to play again ☺️`);
        }

        let nxtRoundBtn = document.querySelector("#nxtRoundBtn");
        nxtRoundBtn.addEventListener("click", nxtRoundFunction);

        function nxtRoundFunction() {
        nxtRoundBtn.setAttribute("disabled", "")
        rockBtn.removeAttribute("disabled");
        paperBtn.removeAttribute("disabled");
        scissorsBtn.removeAttribute("disabled");

        newPlayer.remove(newPlayer);
        itemDiv.remove(itemDiv);
        }
        nxtRoundBtn.removeAttribute("disabled");

    } else if (i == 2) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "✌️";
        itemDiv.classList.add("item-div");
        matchGameplay.appendChild(itemDiv);

        computerScore += 1;
        document.querySelector("#computerScore").innerHTML = "Computer Score: " + computerScore;

        if (yourScore == 5) {
        alert(`Congrats, you win! The money is sent to your GCash.

Please refresh the page to play again ☺️ `);
        } else if (computerScore == 5) {
            alert(`You lose! 
            
Please refresh the page to play again ☺️`);
        }

        let nxtRoundBtn = document.querySelector("#nxtRoundBtn");
        nxtRoundBtn.addEventListener("click", nxtRoundFunction);

        function nxtRoundFunction() {
        nxtRoundBtn.setAttribute("disabled", "")
        rockBtn.removeAttribute("disabled");
        paperBtn.removeAttribute("disabled");
        scissorsBtn.removeAttribute("disabled");

        newPlayer.remove(newPlayer);
        itemDiv.remove(itemDiv);
        }
        nxtRoundBtn.removeAttribute("disabled");

    } else {
        return "error";
    }

    // Attribute
    rockBtn.setAttribute("disabled", "");
    paperBtn.setAttribute("disabled", "");
    scissorsBtn.setAttribute("disabled", "");

    let newPlayer = document.createElement("div");
    newPlayer.innerHTML = "✋";
    newPlayer.classList.add("new-player");
    matchGameplay.appendChild(newPlayer);

    let matchHistory = document.querySelector("#matchHistory");
    let history = document.createElement("span");
        history.innerHTML = "✋ " + i;
        if (i == 0) {
            history.innerHTML = "✋ " + "✊🏻";
        } else if (i == 1) {
            history.innerHTML = "✋ " + "✋";
        } else if (i == 2) {
            history.innerHTML = "✋🏻 " + "✌️";
        } else {
            return "error"
        }
        history.classList.add("match-history");
        matchHistory.appendChild(history);
        
    if (yourScore == 5 || computerScore == 5) {
    nxtRoundBtn.setAttribute("disabled", "");
    } else {
        return "error";
    }
}

// Scissors Function
function scissorsFunction() {
    getRandomValue();

    if (i == 0) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "✊";
        itemDiv.classList.add("item-div");
        matchGameplay.appendChild(itemDiv);

        computerScore += 1;
        document.querySelector("#computerScore").innerHTML = "Computer Score: " + computerScore;

        if (yourScore == 5) {
        alert(`Congrats, you win! The money is sent to your GCash.

Please refresh the page to play again ☺️ `);
        } else if (computerScore == 5) {
            alert(`You lose! 
            
Please refresh the page to play again ☺️`);
        }

        let nxtRoundBtn = document.querySelector("#nxtRoundBtn");
        nxtRoundBtn.addEventListener("click", nxtRoundFunction);

        function nxtRoundFunction() {
        nxtRoundBtn.setAttribute("disabled", "")    
        rockBtn.removeAttribute("disabled");
        paperBtn.removeAttribute("disabled");
        scissorsBtn.removeAttribute("disabled");

        newPlayer.remove(newPlayer);
        itemDiv.remove(itemDiv);
        }
        nxtRoundBtn.removeAttribute("disabled");

        
    } else if (i == 1) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "✋";
        itemDiv.classList.add("item-div");
        matchGameplay.appendChild(itemDiv);

        yourScore += 1;
        document.querySelector("#yourScore").innerHTML = "Your Score: " + yourScore;

        if (yourScore == 5) {
        alert(`Congrats, you win! The money is sent to your GCash.

Please refresh the page to play again ☺️ `);
        } else if (computerScore == 5) {
            alert(`You lose! 
            
Please refresh the page to play again ☺️`);
        }

        let nxtRoundBtn = document.querySelector("#nxtRoundBtn");
        nxtRoundBtn.addEventListener("click", nxtRoundFunction);

        function nxtRoundFunction() {
        nxtRoundBtn.setAttribute("disabled", "")
        rockBtn.removeAttribute("disabled");
        paperBtn.removeAttribute("disabled");
        scissorsBtn.removeAttribute("disabled");

        newPlayer.remove(newPlayer);
        itemDiv.remove(itemDiv);
        }
        nxtRoundBtn.removeAttribute("disabled");

    } else if (i == 2) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "✌️";
        itemDiv.classList.add("item-div");
        matchGameplay.appendChild(itemDiv);

        if (yourScore == 5) {
        alert(`Congrats, you win! The money is sent to your GCash.

Please refresh the page to play again ☺️ `);
        } else if (computerScore == 5) {
            alert(`You lose! 
            
Please refresh the page to play again ☺️`);
        }

        let nxtRoundBtn = document.querySelector("#nxtRoundBtn");
        nxtRoundBtn.addEventListener("click", nxtRoundFunction);

        function nxtRoundFunction() {
        nxtRoundBtn.setAttribute("disabled", "")
        rockBtn.removeAttribute("disabled");
        paperBtn.removeAttribute("disabled");
        scissorsBtn.removeAttribute("disabled");

        newPlayer.remove(newPlayer);
        itemDiv.remove(itemDiv);
        }
        nxtRoundBtn.removeAttribute("disabled");

    } else {
        return "error";
    }

    // Attribute
    rockBtn.setAttribute("disabled", "");
    paperBtn.setAttribute("disabled", "");
    scissorsBtn.setAttribute("disabled", "");

    let newPlayer = document.createElement("div");
    newPlayer.innerHTML = "✌️";
    newPlayer.classList.add("new-player");
    matchGameplay.appendChild(newPlayer);

    let matchHistory = document.querySelector("#matchHistory");
    let history = document.createElement("span");
        history.innerHTML = "✌️ " + i;
        if (i == 0) {
            history.innerHTML = "✌🏻 " + "✊";
        } else if (i == 1) {
            history.innerHTML = "✌️ " + "✋🏻";
        } else if (i == 2) {
            history.innerHTML = "✌️ " + "✌️";
        } else {
            return "error"
        }
        history.classList.add("match-history");
        matchHistory.appendChild(history);
        
    if (yourScore == 5 || computerScore == 5) {
    nxtRoundBtn.setAttribute("disabled", "");
    } else {
        return "error";
    }
}


prompt(`Welcome, Dear Player!

The rule is simple, you just need to get a score of 5 first in order to win. And if you win, you will get double the money of your bet amount. Let's play!

Hou much is your bet ($)?`)