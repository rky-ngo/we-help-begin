import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgoDetailPage } from '../ngo-detail/ngo-detail';

@Component({
  selector: 'page-donate-item-list',
  templateUrl: 'donate-item-list.html',
})
export class DonateItemListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateItemListPage');
  }

  goToNgoPage(){
    this.navCtrl.popTo(NgoDetailPage);
  }

  decrementNumber(){

  }
  incrementNumber(){
    
  }

}
