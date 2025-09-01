import { postData } from '../helpers/fetch.js';
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('SWGSite | Intra in cont');
  }
  async getHtml() {
    const postBody = {
      username: 'useruietii',
      password: 1234567,
    };
    const data = await postData('http://localhost:3000/auth/login', postBody);
    return data.token;
  }
}
