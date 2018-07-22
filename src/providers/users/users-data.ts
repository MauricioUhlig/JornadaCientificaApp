import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class UsersDataProvider {
  _favorites: string[] = [];
  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  // private api_url = 'URL DA API'
  
  // constructor(public http: HttpClient) {}


  // login(email:string,password:string){
  //   return new Promise((resolve, reject) => {
  //     var data = { email:email, password:password };
  //     let urlEspecifica = this.api_url + 'login';
  //     this.http.post(urlEspecifica , data)
  //       .subscribe(
  //         (result:any) => { resolve(result.json()) },
  //         (error)      => { reject(error.json())   }
  //       )
  //   });
  // }  
  
  // //pegar todos os usuarios pro rank
  // getAllUsers(page:number){
  //   return new Promise((resolve, reject) => {
  //     let urlEspecifica = this.api_url + 'users?per_page=10&page='+ page;
  //     this.http.get(urlEspecifica)
  //       .subscribe(
  //         (result:any) => { resolve(result.json()) },
  //         (error)      => { reject(error.json())   }
  //       )
  //   });
  // }

  // //Informações do usuario especifico
  // getOneUser(id:number){
  //   return new Promise((resolve, reject) => {
  //     let urlEspecifica = this.api_url + 'users/'+ id;
  //     this.http.get(urlEspecifica)
  //       .subscribe(
  //         (result:any) => { resolve(result.json()) },
  //         (error)      => { reject(error.json())   }
  //       )
  //   });
  // }

  //----------------------CRUD DE USUARIOS-------------------

  
  //  // {"email": "email@email","password": "123456"} => {"token": "QpwL5tke4Pnpja7X"}
  // createAccout(email:string,password:string){
  //   return new Promise((resolve, reject) => {
  //     var data = { email:email, password:password };
  //     let urlEspecifica = this.api_url + 'register';
  //     this.http.post(urlEspecifica, data)
  //       .subscribe(
  //         (result:any) => { resolve(result.json()) },
  //         (error)      => { reject(error.json())   }
  //       )
  //   });
  // } 
  // insertUser(user:any){
  //   return new Promise((resolve, reject) => {
  //     let urlEspecifica = this.api_url + 'users';
  //     this.http.post(urlEspecifica, user)
  //       .subscribe(
  //         (result:any) => { resolve(result.json()) },
  //         (error)      => { reject(error.json())   }
  //       )
  //   });
  // }
  // updateUser(user:any){

  //   return new Promise((resolve, reject) => {
  //     let urlEspecifica = this.api_url + 'users/'+ user.id;
  //     let data= {
  //       "first_name":user.first_name, 
  //       "last_name":user.last_name
  //     }
  //     this.http.put(urlEspecifica, user)
  //       .subscribe(
  //         (result:any) => { resolve(result.json()) },
  //         (error)      => { reject(error.json())   }
  //       )
  //   });
  // }
  // deleteUser(id:number){
  //   return new Promise((resolve, reject) => {
  //     let urlEspecifica = this.api_url + 'users/'+ id;
    
  //     this.http.delete(urlEspecifica)
  //       .subscribe(
  //         (result:any) => { resolve(result.json()) },
  //         (error)      => { reject(error.json())   }
  //       )
  //   });
  // }
  
}
