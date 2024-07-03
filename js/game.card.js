export  class GameCard {
    constructor(game) {
      this.game = game;
      this.cardHtml = this.createCardHtml();

    }
    createCardHtml() {
      const image = this.game.thumbnail;
      const des = this.game.short_description;
      const platform = this.game.platform;
      const genre = this.game.genre;
      const title = this.game.title;
      const url = this.game.game_url;
  
      return `
        <div class="col-12 col-md-5 col-lg-3">
          <div class="card h-100" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${this.game.id}">
            <img src="${image}" class="card-img-top" alt="" />
            <div class="card-body">
              <div class="d-flex justify-content-between ">
                <h5 class="card-title">${title}</h5>
                <h5 class="card-title"><a target='_blank' href="${url}"><img src="image/771241.png" alt=""></a></h5>
              </div>
              <p class="card-text border-top pt-2">
                ${des}
              </p>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <small class="">${genre}</small>
              <div>
                <small><p>${platform}</p></small>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  
    render() {
      document.getElementById('dataGames').innerHTML += this.cardHtml;
    }
  }