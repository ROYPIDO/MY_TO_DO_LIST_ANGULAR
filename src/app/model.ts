export class Model {
  user;
  items: Array<any>;

  constructor() {
    this.user = 'JULIEN';
    this.items = [
      new ToDoItem('Sport', false),
      new ToDoItem('Révison', false),
      new ToDoItem('Cours', false),
      new ToDoItem('Cinéma', false),
      new ToDoItem('Petit déjeuner', true),
    ];
  }
}

export class ToDoItem {
  description: any;
  action: any;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
