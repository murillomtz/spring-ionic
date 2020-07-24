import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() { //Quando entra na pagina desabilita o meno
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() { //Quando sair dela ou fazer login ela reativa
    this.menu.swipeEnable(true);
  }
  //Se n declarar é Public
  login() { //Push() para emplihar uma pagina em cima da outra
    this.navCtrl.setRoot('CategoriasPage');
  }
}
