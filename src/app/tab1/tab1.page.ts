import { Component, Inject, forwardRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';











@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public afAuth: AngularFireAuth, public router:Router) {
      // if (afAuth.auth.currentUser == null) {
      //   this.router.navigateByUrl('/login');
      // } else {
    

      // }
    
    }
 }

  // test(){

  //   var user=(<HTMLInputElement>document.getElementById('user')).value
  //   var pass= (<HTMLInputElement>document.getElementById("pass")).value;
    
  //   alert("Your username is " + user + "\nYour password is " + pass)

  // }

