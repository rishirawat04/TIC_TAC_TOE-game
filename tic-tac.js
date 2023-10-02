console.log("welcome to the page")
let music = new Audio("Game.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("plasma-gun.mp3");
let win = new Audio("fire.mp3");
let turn = "X"
let winningCombos = false;

// function to change the turn 


const ChangeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to check the win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            winningCombos = true
            win.play();
            document.querySelector('.anime').getElementsByTagName('img')[0].style.width = "250px";

        }
    })

}

// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = ChangeTurn();
            audioTurn.play();

            checkWin();
            if (!winningCombos) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }

    })
})
// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    winningCombos = false
    gameover.play();
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.anime').getElementsByTagName('img')[0].style.width = "0px"
})

