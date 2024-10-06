# Phaser3 Slots Game

This repository contains a simple slot machine game created using Phaser3 and TypeScript.

## Overview

The game consists of a single scene that simulates a classic slot machine with three reels. It provides basic slot functionality with a spin button to start the action.

### Features

- **Reels (3x3 Grid)**:
    - The game displays 3 vertical reels, each containing 3 rows, forming a grid of 9 symbols in total.
- **Symbols**:
    - Each reel displays one of 5 distinct symbols(fruits) randomly.
- **Spin Button**:
    - A button labeled "Spin" starts the reels spinning when clicked.
- **Reel Spin Mechanism**:
    - All reels spin simultaneously when the button is pressed.
    - Reels spin for a few seconds and then stop, showing random symbols.

### Tools & Technologies Used

- **Phaser3 Framework**: Used for creating the game.
- **TypeScript**: The game logic is implemented using TypeScript to ensure better structure and type safety.

## Getting Started

### Prerequisites

- Node.js and npm should be installed.
- A basic understanding of Phaser3 and TypeScript is recommended.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rast22/phaser3-slots.git
   ```
2. Navigate to the project directory:
   ```sh
   cd phaser3-slots
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Game

To run the game locally:

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:8080` to play the game.

## License

This project is licensed under the MIT License.

