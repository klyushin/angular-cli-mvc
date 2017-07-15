import { SampleCliPage } from './app.po';

describe('sample-cli App', function() {
  let page: SampleCliPage;

  beforeEach(() => {
    page = new SampleCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
