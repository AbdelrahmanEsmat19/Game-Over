function showLoader() {
  document.getElementById('loader').style.display = '';

}

function hideLoader() {
  document.getElementById('loader').style.display = 'none';
  document.body.style.overflow = 'auto';
}
import { GameList } from "../js/game.list.js";
import { Navigation } from "../js/ui.modules.js";
import { Modal } from "../js/modal.js";



export async function getGames(category) {
  showLoader();
  const apiUrl = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '12463f4e87mshc069a455f906d02p1114d2jsn4f87175cd5f4',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    const gameList = new GameList(data);
    gameList.render();
    hideLoader();
  } catch (error) {
    console.error(error);
    hideLoader();
  }
}

export async function getDetails(id) {
  showLoader();
  if (!id) {
    console.error('Invalid or missing id parameter');
    return;
  }

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '12463f4e87mshc069a455f906d02p1114d2jsn4f87175cd5f4',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const modalTitle = document.getElementById('game-title');
    const modalImage = document.getElementById('game-image');
    const modalDescription = document.getElementById('game-description');
    const modalPlatform = document.getElementById('game-platform');
    const modalGenre = document.getElementById('game-category');
    const modalStatus = document.getElementById('game-status');

    modalTitle.textContent = result.title;
    modalImage.src = result.thumbnail;
    modalDescription.textContent = result.description;
    modalPlatform.textContent = result.platform;
    modalGenre.textContent = result.genre;
    modalStatus.textContent = result.status;
    hideLoader();
  } catch (error) {
    console.error(error);
    hideLoader();
  }
}
const navItems = document.querySelectorAll('.nav-item');
const navigation = new Navigation(navItems);
navigation.addEventListeners();

const modalElement = document.getElementById('exampleModal');
const modal = new Modal(modalElement);
modal.addEventListeners();

getGames('mmorpg');
