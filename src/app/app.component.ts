import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new Model();
  //title: any;
  isDisplay = false;

  getName(): string {
    return this.model.user;
  }

  getItems(): Array<any> {
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  addItem(value: any) {
    if (value != '') {
      this.model.items.push(new ToDoItem(value, false));
    }
  }
}
