import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)

export class Users {
  constructor(router) {
	this.router = router;
          this.message = 'Foos';
  }
  logout(){
	  this.router.navigate('home');
  }
}
