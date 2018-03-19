import { Component } from '@angular/core';
import { NavController, IonicPage, Item } from 'ionic-angular';
import { ShoppingListService } from '../../services/shoping-list/shopping-list-service';
import { Observable } from 'rxjs/observable';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private shopping: ShoppingListService) 
  {
  this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges()
   .map(
   changes =>{
     return changes.map(c => ({
       key: c.payload.key, ...c.payload.val()
     }));
   }
 );
  }
  

}
