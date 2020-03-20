import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public afAuth: AngularFireAuth) {}

  signOut(){
    this.afAuth.auth.signOut().then(() => {location.reload();});
  }

  googleLogin(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Already signed in.
      } else {
        alert("not signed in");
      }
    })
  }
  

}

