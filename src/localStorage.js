
export default class LocalStorage {
  constructor(key) {
    this.storage = JSON.parse(window.localStorage.getItem(key));
    this.key = key;
  }

  saveDataToTheLocalStorage(value) {
    window.localStorage.setItem(this.key, JSON.stringify(value));
  }

  getDatafromTheLocalStorage() {
    if (this.storage === null || this.storage === 'null') {
      return [];
    }
    return this.storage;
  }
}