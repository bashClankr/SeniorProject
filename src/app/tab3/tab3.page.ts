import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';






@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public afAuth: AngularFireAuth, public router: Router, public location:Location, private alertCtrl: AlertController) {}

  signOut(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
 async editEmail() {
    const alert = await this.alertCtrl.create({
      header: 'Edit email',
      inputs: [
        {
          name: 'Email',
          placeholder: this.afAuth.auth.currentUser.email
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Submit',
          handler: inputs => {
            if (inputs.Email)
              this.afAuth.auth.currentUser.updateEmail(inputs.Email);
          }
        }
      ]
    });
   await alert.present();
  }

  async editName() {
    const alert = await this.alertCtrl.create({
      header: 'Edit name',
      inputs: [
        {
          name: 'name',
          placeholder: this.afAuth.auth.currentUser.displayName
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Submit',
          handler: inputs => {
            if (inputs.Email)
              this.afAuth.auth.currentUser.updateProfile
          }
        }
      ]
    });
   await alert.present();
  }



}
