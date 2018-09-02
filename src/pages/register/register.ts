import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.viewCtrl.setBackButtonText("");
  }
  async register(user: User){
    try{
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(res =>{
          this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(res =>{
          this.navCtrl.push("CreatePage");})
        });
        console.log(result);
    }catch(e){
      console.log(e);
    }
  }

}
