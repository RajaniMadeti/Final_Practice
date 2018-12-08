// export class App {
//   constructor() {
//     this.message = 'Hello World! Foos';
//   }
// }

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.map([
      { 
	route: ['', 'home'],
	 moduleId: './modules/home',
	 name: 'Home' 
      },
      {
	 route: 'foos',
	 moduleId: './modules/foos',
	 name: 'Foos' 
     }
    ]);
  }
}
