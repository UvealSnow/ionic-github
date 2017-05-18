import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

import { GithubUsersProvider } from '../../providers/github-users/github-users';

@IonicPage()
@Component({
  selector: 'page-user-show',
  templateUrl: 'user-show.html',
})
export class UserShowPage {
	user: User;
	login: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsersProvider) {
  	this.login = navParams.get('login');
  	githubUsers.loadDetails(this.login).subscribe(user => {
  		this.user = user;
  		// console.log(this.user);
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserShowPage');
  }

}
