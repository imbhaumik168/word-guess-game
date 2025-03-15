# Word Guess Game

## Overview

The Word Guess Game is a simple browser-based game where players attempt to guess a hidden word based on a given hint. Players enter letters into input boxes, and correct guesses are locked in place, while incorrect guesses increase the wrong attempt count. The game ends when the player successfully guesses the word or exceeds the allowed number of incorrect attempts.

## Features

- Random word selection from a predefined list.
- Display of a hint to assist in guessing the word.
- Letter-by-letter input with validation.
- Highlighting of incorrect guesses.
- Win or lose conditions based on correct or excessive incorrect guesses.
- Ability to restart the game and try a new word.

## How to Play

1. A random word is selected, and its corresponding hint is displayed.
2. Input boxes are shown, representing each letter in the selected word.
3. The player enters letters into the boxes:
   - Correct letters are locked in place.
   - Incorrect letters are highlighted and removed after a short delay.
   - Each incorrect guess increases the wrong attempt counter.
4. The game ends when:
   - The player correctly fills all the boxes (win condition).
   - The player reaches 6 incorrect attempts (loss condition, word revealed).
5. The player can restart the game at any time.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup and Usage

1. Clone or download the project files.
2. Open `index.html` in a web browser.
3. Start guessing words based on the provided hints!

## Code Breakdown

- **`initializeGame()`**: Selects a random word, resets the game state, and displays input boxes.
- **`displayWordBoxes()`**: Creates input fields for each letter of the word.
- **`checkLetter(inputBox)`**: Validates entered letters and updates the game state.
- **`moveToNextInput(currentInput)`**: Moves focus to the next input box.
- **`checkGameStatus()`**: Checks if the player has won or lost.
- **`disableAllInputs()`**: Disables all input fields when the game ends.
- **`restartGame()`**: Resets the game for a new round.

## Future Enhancements

- Implement difficulty levels with varying word lengths.
- Add a scoring system based on performance.
- Provide a leaderboard to track best scores.
- Expand the word list dynamically.

Enjoy playing the Word Guess Game!
