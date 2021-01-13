
export default class LocalStorage {
  constructor(key) {
    this.data = JSON.parse(window.localStorage.getItem(key));
    this.key = key;
  }

  saveDataToTheLocalStorage(data) {
    window.localStorage.setItem(this.key, JSON.stringify(data));
  }

  getDatafromTheLocalStorage() {
    if (this.data === null || this.data === 'null') {
      return [];
    }
    return this.data;
  }
}