import { th } from '@faker-js/faker';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchIcon = this.page.getByLabel('Поиск');
    this.searchFild = this.page.getByPlaceholder('Что вы ищете?');
    this.searchButton = this.page.locator('form').getByLabel('Поиск');
    this.clearButton = this.page.getByText('Очистить');
  };
 
  async clickSearchIcon () {
    await this.searchIcon.click()
  }

  async enterSearch (data) {
    await this.searchFild.fill(data)
    await this.searchButton.click();
  }

  async clickClearButton () {
    await this.clearButton.click()
  }
};
