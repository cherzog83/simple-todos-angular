import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templates from './todosList.html';

class TodosListCtrl {
	constructor() {
		this.tasks = [{
			text: 'This is task 1'
		}, {
			text: 'This is task 2'
		}, {
			text: 'This is task 3'
		}];
	}
}

export default angular.module('todosList', [
	angularMeteor
])
	.component('todosList', {
		templateUrl: 'imports/components/todosList/todoList.html',
		controller: TodosListCtrl
	});
	