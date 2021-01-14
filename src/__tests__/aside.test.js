import Aside from '../components/aside/aside.component';

describe('Aside class', () => {
  let aside;
  beforeEach(() => {
    document.body.innerHTML = '<div type="button" class="d-flex projects" id="aside">'
    + '</div>';
    aside = new Aside('aside', document.getElementById('aside'));
  });

  it('Should activate button', () => {
    expect(aside.activateClose()).toBe('aside');
  });
});