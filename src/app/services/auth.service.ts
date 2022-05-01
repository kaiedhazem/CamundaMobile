import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = new BehaviorSubject(false);
  constructor(public storage:Storage,   
     private router: Router,
     private platform: Platform,
     public toastController: ToastController
    ) { 
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  
  ifLoggedIn() {
   if (localStorage.getItem('nom') != " ") {
    this.authState.next(true);
   }
        
      
  }

    login(nom){
      localStorage.setItem('nom', nom)
        this.router.navigate(['home']);
        this.authState.next(true);
      
    }
    logout(){
      localStorage.setItem('nom'," ");
        this.router.navigate(['login']);
        this.authState.next(false);
    }
     isAuthenticated() {
      return this.authState.value;
     }
  
  }