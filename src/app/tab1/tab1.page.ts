import { Component, Inject, forwardRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {ROUTER_DIRECTIVES, Router, Location} from "angular/router";








@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public afAuth: AngularFireAuth, private router:Router, private location:Location) {
      if (afAuth.auth.currentUser) {
        // Already signed in.
      } else {
        alert("not signed in");
        this.location.replaceState('/'); // clears browser history so they can't navigate with back button
        this.router.navigate(['login']);
      }
    }
 }

  // test(){

  //   var user=(<HTMLInputElement>document.getElementById('user')).value
  //   var pass= (<HTMLInputElement>document.getElementById("pass")).value;
    
  //   alert("Your username is " + user + "\nYour password is " + pass)

  // }

