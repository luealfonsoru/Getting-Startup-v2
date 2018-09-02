import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database'

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  profile = {} as Profile;
  categories = ["Artes", "Tecnología", "Videojuegos", "Aplicaciones", "Música", "Cine"];
  studies = ["Artes", "Ingeniería"]
  constructor(private afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  addInterest(categorie){
    var myIndex = -1;
    if(this.profile.interest.indexOf(categorie) <= -1){
      this.profile.interest.push(categorie);
    }else{
      myIndex = this.profile.interest.indexOf(categorie);
      this.profile.interest.splice(myIndex,1);
    }
  }

  addStudy(study){
    var myIndex = -1;
    if(this.profile.studies.indexOf(study) <= -1){
      this.profile.studies.push(study);
    }else{
      myIndex = this.profile.studies.indexOf(study);
      this.profile.studies.splice(myIndex,1);
    }
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(res =>{
      this.afDatabase.object(`profile/${res.uid}`).set(this.profile).then(()=>
      this.navCtrl.setRoot("MenuPage")
    )
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
    this.viewCtrl.setBackButtonText("");
    this.profile.interest = [];
    this.profile.awards = [];
    this.profile.studies = [];

  }

}
