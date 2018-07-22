import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User }  from '../../providers/users/user-class'; 
import { AngularFireAuth }  from 'angularfire2/auth'; 
import { FirebaseAuth } from '@firebase/auth-types';
import { auth } from 'firebase';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(
    private afauth:AngularFireAuth,
    public toastCtrl:ToastController,
    public navCtrl: NavController,
    public navParams: NavParams) {  }


    async newRegister(user : User){
      debugger
      var toastMessage = this.toastCtrl.create({ duration : 3000, position: 'bottom'}) //Formato da Mensagem
      
      if(user.email == null || user.password == null){
        toastMessage.setMessage('Todos os Campos devem ser preenchidos');
        toastMessage.present();
      }
      else {
        const result = this.afauth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password)
        console.log(result);
        
        result.then((result:any)=> {
          
          //user.sendEmailVerification(); //Dispara o email para o usuario 
          toastMessage.setMessage('Usuario Cadastrado com Sucesso');
          toastMessage.present();
          this.navCtrl.setRoot('ProfilePage'); //    this.navCtrl.setRoot('HomePage'); 
        })
        .catch((error:any)=> {
          //Tratamento de erros do Firebase
          if(error.code =='auth/email-already-in-use') 
            toastMessage.setMessage('O e-mail digitado já esta em uso');
          
          else if(error.code =='auth/invalid-email')
            toastMessage.setMessage('O e-mail digitado não é valido');
          
          else if(error.code =='auth/operation-not-allowed')
            toastMessage.setMessage('Não esta habilitado criar usuários');
          
          else if(error.code =='auth/weak-password')
            toastMessage.setMessage('A senha digitada é muito fraca');
          
          toastMessage.present();
        })
      }
      
    }

}
