import { AuthService } from './../../services/auth.service';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }

  ionViewWillEnter() { //Quando entra na pagina desabilita o meno
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() { //Quando sair dela ou fazer login ela reativa
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter(){
    this.auth.refreshToken().subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    }, error => { })
  }
  //Se n declarar é Public
  login() { //Push() para emplihar uma pagina em cima da outra

    this.auth.authenticate(this.creds).subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    }, error => { })

    //console.log(this.creds);


  }
}
