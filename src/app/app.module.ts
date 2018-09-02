import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Config } from '../config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { MyApp } from './app.component';

import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { MessagesPageModule } from '../pages/messages/messages.module';
import { ExplorePageModule } from '../pages/explore/explore.module';
import { ProjectsPageModule } from '../pages/projects/projects.module';
import { CreatePageModule } from '../pages/create/create.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp,
			{
				mode: 'ios',
				backBurronText: ''
			}),
		AgmCoreModule.forRoot(),
		AngularFireModule.initializeApp(firebaseConfig.fire),
		ComponentsModule,
		GoogleMapsModule,
		HomeModule,
		LoginPageModule,
		RegisterPageModule,
		ProfilePageModule,
		MessagesPageModule,
		ExplorePageModule,
		ProjectsPageModule,
		MenuPageModule,
		SlideBoxModule,
		CreatePageModule,
		WordpressModule,
		AngularFireDatabaseModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		Config,
		StatusBar,
		AngularFireAuth
	]
})
export class AppModule {
}
