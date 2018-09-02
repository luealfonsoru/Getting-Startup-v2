import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs-compat';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  name;
  nickname;
  interest;
  about;
  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(res =>{
      console.log(res);
      if(res && res.email && res.uid){
        this.afDatabase.list(`profile/${res.uid}`).snapshotChanges().subscribe( datas => {
          this.name = datas.filter(res => res.key === "name")[0].payload.val();
          this.nickname = datas.filter(res => res.key === "username")[0].payload.val();
          this.interest = datas.filter(res => res.key === "interest")[0].payload.val();
          this.about = datas.filter(res => res.key === "about")[0].payload.val();
        })
      }else{
        this.navCtrl.setRoot("HomePage");
      }
    })
  }

}
