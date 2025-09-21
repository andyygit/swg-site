import Store from '../helpers/Store.js';
import AbstractView from './AbstractView.js';
import { getData } from '../helpers/fetch.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('SWGSite | Pagina principală');
  }
  async getHtml() {
    const token = Store.getData('session');
    // const data = await getData('http://localhost:3000/', token);
    // return data.message;
    return 'Lala Land';
  }
  // async getHtml() {
  //   const data = await getData('https://jsonplaceholder.typicode.com/users');
  //   return data.reduce((acc, cur, index) => {
  //     return index === 0 ? `<p>${cur.email}</p>` : acc + `<p>${cur.email}</p>`;
  //   }, 0);
  // }
}
