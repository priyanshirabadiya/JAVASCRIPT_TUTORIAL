// let characters = ['S', 'G', 'W'];
// let randomIndex = Math.floor(Math.random() * characters.length);
// let char = characters[randomIndex];
// let val1 = confirm(char);

// let character = ['G', 'W', 'S'];
// let Index = Math.floor(Math.random() * character.length);
// let char2 = character[Index];

// let val2 = confirm(char2);
// // let g = 0, s = 0, w = 0;

// while (char != 0 && char2 !=0) {
//     if ((char == 'G' && char2 == 'G') || (char == 'S' && char2 == 'S') || (char == 'W' && char2 == 'W')) {
//         confirm("Both of values are equal!")
//         let again = prompt("press A to run again:");
//         if (again == 'A') {
//             let characters = ['S', 'G', 'W'];
//             let randomIndex = Math.floor(Math.random() * characters.length);
//             let char = characters[randomIndex];
//             let character = ['G', 'W', 'S'];
//             let Index = Math.floor(Math.random() * character.length);
//             let char2 = character[Index];
//             confirm(char);
//             confirm(char2);
//         }
//     } else if ((char == 'G' && char2 == 'S')) {
//         confirm("gun is win")
//         let again = prompt("press A to run again:");
//         if (again == 'A') {
//             let characters = ['S', 'G', 'W'];
//             let randomIndex = Math.floor(Math.random() * characters.length);
//             let char = characters[randomIndex];
//             let character = ['G', 'W', 'S'];
//             let Index = Math.floor(Math.random() * character.length);
//             let char2 = character[Index];
//             confirm(char);
//             confirm(char2);
//         }
//     }
//     else if ((char == 'S' && char2 == 'W')) {
//         confirm("Snake is win")
//         let again = prompt("press A to run again:");
//         if (again == 'A') {
//             let characters = ['S', 'G', 'W'];
//             let randomIndex = Math.floor(Math.random() * characters.length);
//             let char = characters[randomIndex];
//             let character = ['G', 'W', 'S'];
//             let Index = Math.floor(Math.random() * character.length);
//             let char2 = character[Index];
//             confirm(char);
//             confirm(char2);
//         }
//     }
//     else if (char == 'W' && char2 == 'G') {
//         confirm("Water is win")
//         let again = prompt("press A to run again:");
//         if (again == 'A') {
//             let characters = ['S', 'G', 'W'];
//             let randomIndex = Math.floor(Math.random() * characters.length);
//             let char = characters[randomIndex];
//             let character = ['G', 'W', 'S'];
//             let Index = Math.floor(Math.random() * character.length);
//             let char2 = character[Index];
//             confirm(char);
//             confirm(char2);
//         }
//     }
//     else {
//         confirm("");
//     }
// }


function playGame() {
    let userChoice = prompt("Enter S for Snake, W for Water, or G for Gun:").toUpperCase();
    if (userChoice !== 'S' && userChoice !== 'W' && userChoice !== 'G') {
        alert("Invalid input! Please enter S, W, or G.");
        return;
    }

    let computerChoices = ['S', 'W', 'G'];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((userChoice === 'S' && computerChoice === 'W') ||
               (userChoice === 'W' && computerChoice === 'G') ||
               (userChoice === 'G' && computerChoice === 'S')) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    alert("You chose: " + userChoice + "\nComputer chose: " + computerChoice + "\n" + result);

    let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame();
    } else {
        alert("Thanks for playing!");
    }
}

playGame();
