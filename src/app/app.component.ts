import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Julien';
  items :Array<any> = [
    { description : "Petit déjéuner", action : "No"},
    { description : "Cinéma", action : "No"},
    { description : "Sport", action : "No"},
    { description : "Révision", action : "No"}
  ]
}
