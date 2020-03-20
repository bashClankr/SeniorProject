import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public afAuth: AngularFireAuth) {}

  signOut(){
    this.afAuth.auth.signOut().then(() => {location.reload();});
  }
}
