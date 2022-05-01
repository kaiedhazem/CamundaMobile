import { Component} from '@angular/core';
import {NavController,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  email:string = '';

  password:string = '';


  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage:Storage,
    public auth:AuthService,
  ) {
  }
  
  myLogIn(){
    if( (this.email.trim() == 'etudiant')|| (this.email.trim() == 'agent')  ||(this.email.trim() ==  'enseignant')) {

     // console.log(this.email.trim() + "   " + this.password.trim() )

      if (this.password.trim()  !== 'bpm') {
        this.errorFunc('Wrong password')
      }
      else{
        this.auth.login(this.email.trim())
        this.email = '';
        this.password ='';
      }
   }
   else{
    
      this. errorFunc('Wrong login')
    
    
    }
  
}
ionViewDidLoad() {
  console.log('ionViewDidLoad LoginPage');
}

async errorFunc(message){
  const alert =  await this.alertCtrl.create({
    cssClass: 'basic-alert',
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}

}
