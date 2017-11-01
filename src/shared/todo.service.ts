import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()

export class TodoService {


	constructor(private storage: Storage)
	{ }

	public push(todo) {
		return this.getAll().then((todos) => {
			todos.push(todo);
			this.storage.set('todos', todos);
		});
	}

	public getAll() {
		return this.storage.get('todos').then((todos) => {
			return todos || [];
	});
 }
}