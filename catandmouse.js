const images = ["c1r1", "c2r1", "c3r1", "c4r1", "c5r1", "c6r1",
    "c1r2", "c2r2", "c3r2", "c4r2", "c5r2", "c6r2",
    "c1r3", "c2r3", "c3r3", "c4r3", "c5r3", "c6r3",
    "c1r4", "c2r4", "c3r4", "c4r4", "c5r4", "c6r4"];
let checkCount = 0;
let penalty = 0;
let lastCheck = 0;
let mouseLocation = 13;
let catLocation = 21;
let gameOver = false;

function check(position) {
    if (gameOver) {
        return;
    }

    let image = images[position];

    if (position == mouseLocation) {
        document.getElementById(image).src = "Images/mouse.png";
        penalty = penalty - 3;
        gameOver = true;
    } else if (position == catLocation) {
        document.getElementById(image).src = "Images/tiger.jpg";
        penalty = penalty + 4;
        gameOver = true;
    } else {
        document.getElementById(image).src = "Images/grass.jpg";
        penalty++;
    }

    checkCount++;
    document.getElementById("bushes").innerHTML = "Number of bushes checked is " + checkCount;
    document.getElementById("penalty").innerHTML = "Penalty is " + penalty;
    lastCheck = position;
}

function help() {
    let choiceCol = lastCheck % 6;
    let choiceRow = lastCheck / 4;
    let catCol = catLocation % 6;
    let catRow = catLocation / 4;
    let mouseCol = mouseLocation % 6;
    let mouseRow = mouseLocation / 4;

    if ((((catCol - choiceCol) <= 1) && ((catCol - choiceCol) >= -1)) && (((catRow - choiceRow) <= 1.75) && ((catRow - choiceRow) >= -1.75))) {
        document.getElementById("help").innerHTML = "Meow";
    } else if ((((mouseCol - choiceCol) <= 1) && ((mouseCol - choiceCol) >= -1)) && (((mouseRow - choiceRow) <= 1.75) && ((mouseRow - choiceRow) >= -1.75))) {
        document.getElementById("help").innerHTML = "Squeak";
    } else {
        document.getElementById("help").innerHTML = "Sorry, no help available";
    }
    penalty = penalty + 2;
    document.getElementById("penalty").innerHTML = "Penalty is " + penalty;
}