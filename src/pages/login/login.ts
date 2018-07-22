import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController , MenuController, Platform } from 'ionic-angular';
import { User }  from '../../providers/users/user-class'; 
import { AngularFireAuth }  from 'angularfire2/auth'; 
import { FirebaseApp } from 'angularfire2';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  splash = true;
  constructor(
    private afAuth:AngularFireAuth, 
    private toastCtrl:ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // //this.presentLoadingDefault()
     setTimeout(() => this.splash = false, 3000);
  }

  // presentLoadingDefault() {
  //   let loading = this.loadingCtrl.create({
  //     showBackdrop : false,
  //     spinner: 'crescent',
  //     cssClass: "my-loading",
  //     duration: 3000,
  //   });
  
  //   loading.onDidDismiss(() => {
  //     console.log('Dismissed loading');
  //   });
  
  //   loading.present();
  // }
  

  enterFace(){
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider)
      .then(() =>{
        firebase.auth().getRedirectResult()
          .then((result) =>{
            alert(JSON.stringify(result))
            this.navCtrl.setRoot('ProfilePage');
          }).catch(function(error){ 
            // alert(JSON.stringify(error))
          })
      }) 
  }


  async login(user:User){
    debugger
    var toastMessage = this.toastCtrl.create({ duration : 3000, position: 'bottom'}) //Formato da Mensagem
    
    if(user.email == null || user.password == null){
      toastMessage.setMessage('Todos os Campos devem ser preenchidos');
      toastMessage.present();
    }
    else {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      console.log(result);
      
      result.then((result:any)=> {
        // toastMessage.setMessage('Bem Vindo a Coriollis Mobile');
        // toastMessage.present();
        this.navCtrl.setRoot('HomePage'); 
      })
      .catch((error:any)=> {
        //Tratamento de erros do Firebase
        if(error.code =='auth/user-not-found') 
          toastMessage.setMessage('O Usuário não foi encontrado');
        
        else if(error.code =='auth/invalid-email')
          toastMessage.setMessage('O e-mail digitado não é valido');
        
        else if(error.code =='auth/user-disabled')
          toastMessage.setMessage('O Usuário esta desativado');
        
        else if(error.code =='auth/wrong-password')
          toastMessage.setMessage('A senha digitada não é valida');
        
        toastMessage.present();
      })
  }
}
registerPage(){
  this.navCtrl.push('RegisterPage')
}
resetPassword(){
  this.navCtrl.push('ResetPasswordPage')
}
  
}
