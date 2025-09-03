import AbstractView from './AbstractView.js';
import { getData } from '../helpers/fetch.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('SWGSite | Acasa');
  }
  async getHtml() {
    const data = await getData('http://localhost:3000/profiles');
    return data.message;
  }
  // async getHtml() {
  //   const data = await getData('https://jsonplaceholder.typicode.com/users');
  //   return data.reduce((acc, cur, index) => {
  //     return index === 0 ? `<p>${cur.email}</p>` : acc + `<p>${cur.email}</p>`;
  //   }, 0);
  // }
}
