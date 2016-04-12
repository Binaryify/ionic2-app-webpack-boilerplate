import {Page,Alert,NavController,ActionSheet} from 'ionic-angular';
import {Detail} from '../detail/detail';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  static get parameters() {
    return [[NavController]];
  }
  constructor(nav) {
    this.nav=nav
  }

  test(){
    console.log(2);
    let actionSheet = ActionSheet.create({
    title: 'Modify your album',
    buttons: [
      {
        text: 'Destructive',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
        }
      },{
        text: 'Archive',
        handler: () => {
          console.log('Archive clicked');
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  this.nav.present(actionSheet);
  }
  test2(){
    console.log(1);
    let alert = Alert.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    this.nav.present(alert);
  }
  test3(){
    this.nav.push(Detail,{ paramsData: 'this is params data' });
  }
}
