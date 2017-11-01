import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { TodoService } from '../../shared/todo.service';
import { TodoItemPage } from '../todo-item/todo-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	selectedItem: any;
	icons: string[];
	items: any;
	


  constructor
  (
	public navCtrl: NavController, 
	public navParams: NavParams,
  private modalCtrl: ModalController,
	private todoService: TodoService
  ) {
  	this.selectedItem = navParams.get('Item');
    
  	todoService.getAll().then((todos) => {
      this.items = todos;
    });

  	
  }

  public showTodoDetails(todo) {
    this.modalCtrl.create(
      TodoItemPage,
      { todo: todo }
    ).present();
  }

}
