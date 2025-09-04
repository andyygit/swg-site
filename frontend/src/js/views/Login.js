import AbstractView from './AbstractView.js';
import MyLoginForm from '../components/Loginform.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('SWGSite | Intra in cont');
  }
  async getHtml() {
    if (!customElements.get('my-loginform')) {
      customElements.define('my-loginform', MyLoginForm);
    }
    return '<my-loginform>';
  }
}
