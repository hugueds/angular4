import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  arrayzao = [
    {a : 123},
    {b : 456},
    {c : 789}
  ];
  keys = Object.keys(this.arrayzao);
}
