export default class Store {
  static getData(key) {
    let data;
    if (localStorage.getItem(key) === null) {
      return false;
    } else {
      data = JSON.parse(localStorage.getItem(key));
    }
    return data;
  }
  static addData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static delData() {
    localStorage.clear();
  }
}
