import { AngularFireAuth }  from 'angularfire2/auth'; 
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams, ToastController , ModalController, Modal , ActionSheetController, Platform } from 'ionic-angular'; 


import { AlertController } from 'ionic-angular';
import { Profile } from '../../providers/profile/profile';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile = {} as Profile;
  type:string;
  isFAESA:boolean = true;
  isAluno:boolean = true;
  isProfessor:boolean = false;
  isVisitante:boolean = false;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform,public actionsheetCtrl: ActionSheetController,
    public toastCtrl:ToastController,
    private afauth:AngularFireAuth,
    private afDataBase:AngularFireDatabase,) {
    this.type = "Aluno";
    this.isFAESA = true;
    this.isAluno = true;
    this.isProfessor = false;
    this.isVisitante = false;
    }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Tipo do Usuario',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Aluno',
          icon: 'arrow-dropright-circle',
          handler: () => {
            this.type = "Aluno";
            this.isFAESA = true;
            this.isAluno = true;
            this.isProfessor = false;
            this.isVisitante = false;
          }
        },
        {
          text: 'Professor',
          icon: 'arrow-dropright-circle',
          handler: () => {
            this.type = "Professor";
            this.isFAESA = true;
            this.isAluno = false;
            this.isProfessor = true;
            this.isVisitante = false;

          }
        },
        {
          text: 'Visitante',
          icon: 'arrow-dropright-circle', //!this.platform.is('ios') ? 'arrow-dropright-circle-circle' : null,
          handler: () => {
            this.type = "Visitante";
            this.isFAESA = false;
            this.isAluno = false;
            this.isProfessor = false;
            this.isVisitante = true;
          }
        }, 
      ]
    });
    actionSheet.present();
  }

  addProfile(){
    var toastMessage = this.toastCtrl.create({ duration : 3000, position: 'bottom'}) //Formato da Mensagem
    
    if(this.profile.firstName == null)
      toastMessage.setMessage('Nome deve estar preenchido').present();
    else if(this.profile.lastName == null)
      toastMessage.setMessage('Sobrenome deve estar preenchido').present();
    else if(this.profile.nickName == null)
      toastMessage.setMessage('Nome de Usuário deve estar preenchido').present();
    else if(this.profile.tel == null)
      toastMessage.setMessage('Telefone de Contato deve estar preenchido').present();
    // else if(this.profile.curso == null)
    //   toastMessage.setMessage('O Curso deve estar preenchido').present();
    else {
      this.profile.tipoUsuario = this.type ;


      this.afauth.authState.take(1).subscribe(auth => {
          this.afDataBase
            .object(`profile/${auth.uid}`)
            .set(this.profile)
            .then(() => this.navCtrl.setRoot('HomePage'))
      })
    }
  }
}
