import { GameCard } from '../js/game.card.js';

export  class GameList {
  constructor(games) {
    this.games = games;
  }
  render() {
    this.games.forEach((game) => {
      const gameCard = new GameCard(game);
      gameCard.render();
    });
  }
}