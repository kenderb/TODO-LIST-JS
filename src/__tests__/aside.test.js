import Aside from '../components/aside/aside.component';

describe('Aside class', () => {
  let aside;
  beforeEach(() => {
    document.body.innerHTML = '<div type="button" class="d-flex projects" id="aside">'
    + '</div>'
    + '<img  alt="profile image" id="photo"/>'
    + '<div type="button" class="d-flex projects" id="aside-container">';
    const aisdeContainer = document.getElementById('aside-container');
    aside = new Aside('aside', aisdeContainer);
  });

  it('Should activate button', () => {
    expect(aside.activateClose()).toBe('aside-container');
  });

  it('Should put an image', () => {
    const imageTag = document.getElementById('photo');
    expect(aside.putLogo(imageTag)).toBe('aside');
  });

  it('Should close the aside container', () => {
    aside.activateClose();
    const mockCallBack = jest.fn();
    const aisdeContainer = document.getElementById('aside-container');
    aisdeContainer.onclick = mockCallBack;
    aisdeContainer.click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});