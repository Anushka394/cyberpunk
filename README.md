# CYBERPUNK SNAKE

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

---

## Play The Game
### [CLICK HERE TO PLAY LIVE](https://cyberpunk-ruby.vercel.app/)

---

## Features

* **🕹️ Classic Gameplay:** The nostalgic Snake mechanics with smooth controls.
* **🎨 Cyberpunk Aesthetic:** Neon glowing graphics and a dark theme.
* **📱 Fully Responsive:** Works on Desktop (Arrow Keys) and Mobile (Touch Buttons).
* **🏆 Global Leaderboard:** Real-time high scores powered by a Node.js/Express backend.
* **🔊 Sound Effects:** Retro synth sounds for eating and game over states.

---

## Tech Stack

### Frontend
* **HTML5 Canvas:** For rendering the game graphics efficiently.
* **CSS3:** For the neon glow effects, scanlines, and responsive UI.
* **JavaScript (ES6+):** Core game logic, collision detection, and API handling.

### Backend
* **Node.js & Express:** Handles the API requests for scores.
* **Database:** JSON/Memory storage for the leaderboard.
* **Hosting:**
    * Frontend: **Vercel**
    * Backend: **Render**

---

## How It Works

1.  **The Engine:** The game runs on a loop (`requestAnimationFrame` or `setInterval`) that updates the snake's position based on velocity.
2.  **State Management:** Tracks score, high scores, and game status (Paused/Running/GameOver).
3.  **API Integration:**
    * `GET /api/scores`: Fetches the top players.
    * `POST /api/scores`: Submits a new high score when the game ends.

---

## Developer

Developed with ❤️ 

---
