import { NgModule } from '@angular/core';
import { IonicPageModule, NavParams } from 'ionic-angular';
import { EditShoppingItemPage } from './edit-shopping-item';

@NgModule({
  declarations: [
    EditShoppingItemPage,
    NavParams
  ],
  imports: [
    IonicPageModule.forChild(EditShoppingItemPage),
  ],
})
export class EditShoppingItemPageModule {}
