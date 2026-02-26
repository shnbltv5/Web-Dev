//import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';



// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: ` Hello Universe `,
//   styles: `
//     :host {
//       color: #a144eb;
//     }
//   `,
// })
// export class App {}


// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     @if (isServerRunning) {
//       <span>Yes, the server is running</span>
//     } @else {
//       <span>No, the server is not running</span>
//     }
//   `,
// })
// export class App {
//   isServerRunning = true;
// }



// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     @for (user of users; track user.id) {
//       <p>{{ user.name }}</p>
//     }
//   `,
// })
// export class App {
//   users = [
//     {id: 0, name: 'Sarah'},
//     {id: 1, name: 'Amy'},
//     {id: 2, name: 'Rachel'},
//     {id: 3, name: 'Jessica'},
//     {id: 4, name: 'Poornima'},
//   ];
// }



// import {Component} from '@angular/core';
// import {User} from './user';

// @Component({
//   selector: 'app-root',
//   template: ` <app-user name="Simran" /> `,
//   imports: [User],
// })
// export class App {}



// import {Component} from '@angular/core';
// import {Child} from './child';

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-child (addItemEvent)="addItem($event)" />
//     <p>🐢 all the way down {{ items.length }}</p>
//   `,
//   imports: [Child],
// })
// export class App {
//   items = new Array();

//   addItem(item: string) {
//     this.items.push(item);
//   }
// }



import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class App {}
