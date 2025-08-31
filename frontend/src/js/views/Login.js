import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('SWGSite | Intra in cont');
  }
  async getHtml() {
    return `<h1>Pagina de log in</h1>`;
  }
}
