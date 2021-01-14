import LocalStorage from '../localStorage';

describe('LocalStorage class', () => {
  let storage;
  beforeEach(() => {
    storage = new LocalStorage('key');
  });

  it('Save data to the local storage', () => {
    expect(storage.saveDataToTheLocalStorage('data')).toBe('data');
  });

  it('Get data to the local storage', () => {
    expect(storage.getDatafromTheLocalStorage()).toBe('data');
  });
});