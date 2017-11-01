import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	selectedItem: any;
	icons: string[];
	items: Array<{ title: string, date: string, done: boolean, time: string }>;
	


  constructor
  (
	public navCtrl: NavController, 
	public navParams: NavParams,
	private todoService: TodoService
  ) {
  	this.selectedItem = navParams.get('Item');
  	this.items = todoService.getAll();
  	
  	
  }

}
