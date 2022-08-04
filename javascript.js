
function getComputerChoice() {

    // Generate random number 0-2
    choice = Math.floor(Math.random()*3);
    console.log(`choice: ${choice}`);

    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }

    for (i = 0; i < 100; i++) {
        console.log(getComputerChoice());

    }
}