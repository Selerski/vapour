import pong from "../assets/images/pong.JPG";
import dot from "../assets/images/dot.png";
import asteroids from "../assets/images/asteroids.png";
import epi from "../assets/images/going-epi.png";
import snake from "../assets/images/snake.png";
export default [
  {
    id: 1,
    name: "(oneDot).bind(all)",
    image: dot,
    description: "move with the mouse, shoot with a click",
    url: "https://db-game1.herokuapp.com/",
    multiplayer: true
  },
  {
    id: 2,
    name: "Asteroids",
    image: asteroids,
    description:
      "click into the game to enable moving with keys; shoot with the space bar",
    url: `https://whispering-ocean-93586.herokuapp.com/games/asteroids/dist`,
    multiplayer: false
  },
  {
    id: 3,
    name: "Going Epi",
    image: epi,
    description:
      "Use arrow keys to get as many food items as you can, before the virus gets you",
    url: `https://whispering-ocean-93586.herokuapp.com/games/going-epi`,
    multiplayer: false
  },
  {
    id: 4,
    name: "Snake",
    image: snake,
    description:
      'Control the snake with arrow keys to eat as many apples as you can!',
    url: `https://whispering-ocean-93586.herokuapp.com/games/snake/snake.html`,
    multiplayer: false
  },
  {
    id: 5,
    name: "Pong",
    image: pong,
    description:
      'Use up and down arrows to move your paddle',
    url: "https://db-pongv2.herokuapp.com/",
    multiplayer: true
  }
];
