import Store from '../helpers/Store.js';
import AbstractView from './AbstractView.js';
import { getData } from '../helpers/fetch.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('SWGSite | Profilul meu');
  }
  async getHtml() {
    const token = Store.getData('session');
    const data = await getData('http://localhost:3000/my-profile', token);
    return data.message;
  }
}
