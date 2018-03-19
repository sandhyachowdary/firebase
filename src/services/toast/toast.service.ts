import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastService{
    constructor(private toastctrl: ToastController){}
    show(message: string,duration: number=3000){
        return this.toastctrl.create({
            message,
            duration,
        })
        .present();
    }
}