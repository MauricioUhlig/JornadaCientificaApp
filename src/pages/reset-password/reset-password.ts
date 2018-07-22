import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User }  from '../../providers/users/user-class'; 
import { FirebaseAuth } from '@firebase/auth-types';
import { auth } from 'firebase';
import { AlertController, MenuController, Platform } from 'ionic-angular';
import { AngularFireAuth }  from 'angularfire2/auth'; 
import { FirebaseApp } from 'angularfire2';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  user = {} as User;
  constructor(      
    private afAuth:AngularFireAuth, 
    private toastCtrl:ToastController,
    public  navCtrl:NavController, 
    public  navParams: NavParams,
    public alertCtrl: AlertController){}


  async resetPassword(user: User){
    var toastMessage = this.toastCtrl.create({ duration : 3000, position: 'bottom'}) //Formato da Mensagem
    if(user.email == null){
      toastMessage.setMessage('O e-mail deve ser preechido');
      toastMessage.present();
    }
    else {
     const result =  this.afAuth.auth.sendPasswordResetEmail(user.email);
     result.then(() =>{
      toastMessage.setMessage('Solicitação foi enviada para o seu email')
      toastMessage.present();
      this.navCtrl.pop();
     })
     .catch((error:any) => {
      if(error.code =='auth/user-not-found')
        toastMessage.setMessage('Usuário não existe');
      
      else if(error.code =='auth/invalid-email')
        toastMessage.setMessage('O e-mail digitado não é valido');
      
      toastMessage.present();
     })
    }
  }

}
