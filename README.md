# 🪨📄✂️ Rock Paper Scissors Game

Welcome to the **Rock Paper Scissors Game**! This simple, classic game lets you challenge the computer in a fun and interactive way using HTML and JavaScript. Get ready for some competition!

## 🚀 Getting Started

1. Open the HTML file in your web browser 🌐.
2. Follow the prompts to enter your choices 🗳️.
3. Play five rounds against the computer and see who comes out on top! 🏆

## 📂 Project Structure

- **index.html**: Loads the game 🎮.
- **script.js**: Contains the game logic 🧠.
- **README.md**: Provides project information ℹ️.
- **LICENSE**: Contains the project's licensing information 🔖.

## 📜 Game Rules

1. Choose **Rock**, **Paper**, or **Scissors** ✊📄✂️.
2. The computer makes a random choice 🤖.
3. Determine the winner of each round:
    - **Rock** beats **Scissors** ✊ > ✂️
    - **Paper** beats **Rock** 📄 > ✊
    - **Scissors** beats **Paper** ✂️ > 📄
4. Play 5 rounds. The player with the highest score wins! 🥇

## 📝 Code Overview

### Variables

- `let humanScore = 0;`: Tracks the player's score 🎯.
- `let computerScore = 0;`: Tracks the computer's score 💻.

### Functions

- `getComputerChoice()`: Returns the computer's random choice 🤖.
- `getHumanChoice()`: Prompts and returns the player's choice 🗳️.
- `playRound(humanChoice, computerChoice)`: Determines the round winner and updates scores 🏁.
- `playGame()`: Runs the game for 5 rounds and declares the overall winner 🏆.

### Example Output

```javascript
You: Rock
Computer: Scissors
You win this round!
Rock beats Scissors - Point for you
Current match result: 1 - 0
...
Computer wins this tournament!
```

## 🎨 Styling

Console messages use basic styling for clarity:

- Green for player wins 🟢
- Yellow for draws 🟡
- Red for computer wins 🔴

```javascript
console.log('%c You win this tournament! ', 'background: #222; color: #bada55');
console.log('%c Draw, nobody wins this tournament! ', 'background: #222; color: #ffff00');
console.log('%c Computer wins this tournament! ', 'background: #222; color: #ff4500');
```

## 🤝 Contributing

To contribute, fork the repository and submit a pull request. Your suggestions and improvements are welcomed with open arms! 🤗

## 📄 License

This project is open-source under the MIT License.

---

### Author

Created with ❤️ by T3aC0d3. Have any questions or feedback? Feel free to reach out!

---

Let the games begin! 🚀
