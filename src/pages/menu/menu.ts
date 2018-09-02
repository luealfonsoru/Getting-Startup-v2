import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ExplorePage } from '../explore/explore';
import { MessagesPage } from '../messages/messages';
import { ProjectsPage } from '../projects/projects';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  explorerRoot = ExplorePage;
  messagesRoot = MessagesPage;
  projectsRoot = ProjectsPage;
  profileRoot = ProfilePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
