# Rock Paper Scissors - JavaScript

## Overview
This project is part of the curriculum from [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) and focuses on building the classic game of Rock, Paper, Scissors in JavaScript. The game is played in the browser's console, where the user chooses between rock, paper, or scissors, and competes against the computer. The game runs for five rounds, and the final score is displayed at the end.

[Click here to play the game yourself!](https://anique01.github.io/Odin_RPS/)

## What I Did
I created a fully functional Rock Paper Scissors game that includes the following features:
- **Computer Choice:** The computer randomly selects one of rock, paper, or scissors.
- **Human Choice:** The user is prompted to enter their choice via the `prompt()` method.
- **Score Tracking:** The score for both the human and computer players is tracked across five rounds.
- **Round Results:** After each round, the winner is announced with a message detailing which choice beat the other.
- **Final Results:** After five rounds, the game announces whether the human or computer won, or if it was a tie.

## How I Did It
1. **Getting the Computer's Choice:**  
   I used the `Math.random()` method to generate a random number between 0 and 1. Based on this random number, the computer's choice was determined to be either "rock", "paper", or "scissors".

2. **Getting the Human's Choice:**  
   The user was prompted to input their choice using the `prompt()` method. I ensured the input was case-insensitive by converting it to lowercase with the `.toLowerCase()` method.

3. **Playing a Round:**  
   A function named `playRound()` was created to compare the choices of the human and computer players. The function determined the winner based on the rules of the game (e.g., rock beats scissors).

4. **Tracking the Score:**  
   I used two variables, `humanScore` and `computerScore`, initialized to zero, and incremented them based on who won each round.

5. **Looping Through Rounds:**  
   A `for` loop was used to run the game for five rounds, calling the `playRound()` function each time.

6. **Final Results:**  
   After five rounds, I compared the scores of the human and computer players to announce the overall winner.

## Troubleshooting and Challenges
While building the game, I faced several challenges:
- **Logic Errors:** At first, I struggled with defining the correct flow for the game. The main issue was ensuring that the score tracked correctly and the game flowed from round to round.
- **Syntax Errors:** I encountered issues with misspelled keywords like `else if`, or mismatched parentheses or braces. Debugging these required checking and correcting the structure of the code carefully.
- **Function Calls:** I also had issues with calling the `playRound()` function before it was defined. I had to ensure that all functions were in the correct order and scope.
- **Score Display:** I initially had trouble displaying the current score correctly after each round, as I was not updating or logging the score correctly within the loop.

To resolve these issues, I:
- **Used Google:** I searched online for similar issues, which led me to better understand how functions should be structured and called.
- **Consulted Friends:** I reached out to friends with experience in JavaScript who helped me with syntax issues and provided explanations for certain concepts I was struggling with.

## Conclusion
This project helped me solidify key JavaScript concepts such as functions, conditionals, loops, and user input handling. I learned how to break down a problem into smaller, manageable parts and how to test each part to make sure it worked correctly. Overall, it was a great learning experience and an important step in my journey as a developer.
