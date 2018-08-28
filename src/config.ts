import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire:{
		apiKey: "AIzaSyCQKhY7ymLdPoO-mu4mGMqlYRWjlyIgly8",
		authDomain: "gettingstartup.firebaseapp.com",
		databaseURL: "https://gettingstartup.firebaseio.com",
		projectId: "gettingstartup",
		storageBucket: "gettingstartup.appspot.com",
		messagingSenderId: "869416098660"
	}
}