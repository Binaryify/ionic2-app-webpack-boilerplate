import {
  Page,
  NavController,
  NavParams
} from 'ionic-angular';
@Page({
  templateUrl: 'build/pages/detail/detail.html'
})
export class Detail {
  static get parameters() {
    return [
      [NavController],
      [NavParams]
    ];
  }
  constructor(nav, params) {
    this.nav = nav;
    this.params = params;
    console.log(this.params.data);
    console.log(this.params.data.paramsData);
    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
    this.init();
  }
  init() {
    console.log('init...')
  }
  onPageWillEnter() {
    this.tabBarElement.style.display = 'none';
  }
  onPageWillLeave() {
    this.tabBarElement.style.display = 'block';
  }
}
