import { Component } from '@angular/core';
import { TodoService } from '../../shared/todo.service';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html'
})

export class AddTodoPage {
  title: string;
  date: string;
  done: boolean;
  time: string;

  constructor(
    private todoService: TodoService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private navParams: NavParams
    ) {
  	
    }

  addTodo() {
    this.todoService.push(
      {
        title: this.title,
        date: this.date,
        time: this.time,
        done: false
      }
    );

    this.showSuccessMessage();
    this.navCtrl.push(HomePage);

  }

  public showSuccessMessage() {
    this.alertController.create({
      title: 'Success',
      subTitle: 'You have created todo',
      buttons: ['Dismiss']
    }).present();
  }

}
