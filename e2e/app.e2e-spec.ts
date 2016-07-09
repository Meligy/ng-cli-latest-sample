import { From3To4Page } from './app.po';

describe('from3-to4 App', function() {
  let page: From3To4Page;

  beforeEach(() => {
    page = new From3To4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
