import { Component } from '@angular/core';
import { TodoService } from '../../shared/todo.service';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-todo-item',
  templateUrl: 'todo-item.html'
})

export class TodoItemPage {
  todo: any;

 

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
    ) {
    this.todo = this.navParams.get('todo');
  	
    }

    public close(){
      this.navCtrl.pop();
    }

  

}