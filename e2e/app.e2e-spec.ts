import { ChessPage } from './app.po';

describe('chess App', function() {
  let page: ChessPage;

  beforeEach(() => {
    page = new ChessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
