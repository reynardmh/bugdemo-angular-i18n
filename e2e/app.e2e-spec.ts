import { BugdemoAngularI18nPage } from './app.po';

describe('bugdemo-angular-i18n App', function() {
  let page: BugdemoAngularI18nPage;

  beforeEach(() => {
    page = new BugdemoAngularI18nPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
