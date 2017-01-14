import { NewTestPage } from './app.po';

describe('new-test App', function() {
  let page: NewTestPage;

  beforeEach(() => {
    page = new NewTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
