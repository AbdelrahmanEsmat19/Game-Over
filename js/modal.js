
import { getDetails } from '../js/index.js';


export  class Modal {
    constructor(modalElement) {
      this.modalElement = modalElement;
    }
  
    addEventListeners() {
      this.modalElement.addEventListener('show.bs.modal', (event) => {
        const id = event.relatedTarget.getAttribute('data-id');
        getDetails(id);
      });
  
      this.modalElement.addEventListener('show.bs.modal', () => {
        const homeDescription = document.getElementById('Home');
        homeDescription.style.display = 'none';
      });
  
      this.modalElement.addEventListener('hidden.bs.modal', () => {
        const homeDescription = document.getElementById('Home');
        homeDescription.style.display = 'block';
      });
    }
  }

