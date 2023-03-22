import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app ';
  // Name= "seth"
}
//This works-- were essentially creating our own html tag that we then inject into the page dyanmically on build.-sb
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-snoot',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-first-snoot-app ';
// }