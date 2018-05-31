import { ExampleappPage } from './app.po';

describe('exampleapp App', () => {
  let page: ExampleappPage;

  beforeEach(() => {
    page = new ExampleappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
