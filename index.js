function getGameTitle(gameElement) {
    return gameElement.querySelector('.game h3').textContent;
  }
  
  const gameElement = document.querySelector('.games-list .game');
const gameTitle = getGameTitle(gameElement);

console.log(gameTitle);
