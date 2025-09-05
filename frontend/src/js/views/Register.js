import AbstractView from './AbstractView.js';
import MyRegisterForm from '../components/Registerform.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('SWGSite | Creează un cont nou');
  }
  async getHtml() {
    if (!customElements.get('my-registerform')) {
      customElements.define('my-registerform', MyRegisterForm);
    }
    return '<my-registerform>';
  }
}
