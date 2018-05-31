import { SocketPage } from './app.po';

describe('socket App', () => {
  let page: SocketPage;

  beforeEach(() => {
    page = new SocketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
