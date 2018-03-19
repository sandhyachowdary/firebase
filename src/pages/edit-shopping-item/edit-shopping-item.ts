import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListService } from '../../services/shoping-list/shopping-list-service';
import { Item } from './../../models/item/item.models';
import { ToastService } from '../../services/toast/toast.service';
@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
 item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private shopping: ShoppingListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
  this.item =  this.navParams.get('item');
  }
 saveItem(item: Item){
   this.shopping.editItem(item).then(() => {
     this.toast.show('${item.name} saved!');
    this.navCtrl.setRoot('HomePage');
   });
 }
 removeItem(item: Item){
   this.shopping.removeItem(item)
   .then(() => {
     this.toast.show('${item.name} deleted!');
     this.navCtrl.setRoot('HomePage');
   });
 }
}
