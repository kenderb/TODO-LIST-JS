import LocalStorage from '../localStorage';

describe('LocalStorage class', () => {
  let storage;
  let emptyStorage;
  beforeEach(() => {
    storage = new LocalStorage('key');
    emptyStorage = new LocalStorage('data');
  });

  it('Save data to the local storage', () => {
    expect(storage.saveDataToTheLocalStorage('data')).toBe('data');
  });

  it('Get data to the local storage', () => {
    expect(storage.getDatafromTheLocalStorage()).toBe('data');
  });
  it('Get not data to the local storage', () => {
    expect(emptyStorage.getDatafromTheLocalStorage()).toStrictEqual([]);
  });
});