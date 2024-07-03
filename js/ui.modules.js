
import { getGames } from "../js/index.js";
export  class Navigation {
    constructor(navItems) {
      this.navItems = navItems;
    }
  
    addEventListeners() {
      this.navItems.forEach((item) => {
        item.addEventListener('click', (e) => {
          this.navItems.forEach((navItem) => {
            navItem.classList.remove('active');
          });
          item.classList.add('active');
  
          const gameCategory = e.target.getAttribute("data-code");
  
          const gamesContainer = document.getElementById('dataGames');
          gamesContainer.innerHTML = '';
  
          getGames(gameCategory);
        });
      });
    }
  }



  
