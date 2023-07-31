import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      model = new Model();
  title: any;

      getName(): string {
        return this.model.user;
}

getItems(): Array<any> {
  return this.model.items;
}

}
