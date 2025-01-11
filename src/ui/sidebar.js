import { createDiv } from '../create-elements-functions/create-div';
import { createH2 } from '../create-elements-functions/create-h-elements';
import { createImg } from '../create-elements-functions/create-img';
import appIconImg from '../images/app-icon.png';

export class Sidebar {
  constructor() {
    this.sideBarSelector = document.querySelector('.side-bar');
    this.appIconAndHeader = this.addAppIconAndHeader();
    this.sidebarItemsWrapper = createDiv('sidebar-items-wrapper', 'wrapper', this.sideBarSelector);
    this.overview = this.overview();
  }

  addAppIconAndHeader() {
    const appIconAndHeader = createDiv(
      'app-icon-and-header-wrapper',
      'wrapper',
      this.sideBarSelector
    );
    createImg(
      'app-icon',
      appIconImg,
      'Image showing the App Icon of the App',
      'img',
      appIconAndHeader
    );
    createH2('Investment Tracker', 'app-header', 'text', appIconAndHeader);
  }

  overview() {
    const overviewWrapper = createDiv(
      'overview-wrapper',
      'sidebar-wrapper',
      this.sidebarItemsWrapper
    );
    createH2('📑', 'overview-emoji', 'img', overviewWrapper);
    createH2('Overview', 'overview-text-sidebar', 'text', overviewWrapper);
  }
}
