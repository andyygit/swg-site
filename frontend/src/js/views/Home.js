import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('SWGSite | Acasa');
  }
  async getHtml() {
    return `
    <h1>Pagina principala</h1>
    <p>Nu ai cont? <a href='/register' class='underline' data-link>Inregistreaza-te!</a></p>
    `;
  }
}
