$(document).ready(function(){
	var Todo = Backbone.Model.extend({

		defaults: function() {
			return {
				title: "Empty Todo",
				order: Todos.nextOrder(),
				done: false
			};
		},

		toggle: function(){
			this.save({done: !this.get("done")});
		}
	});

	var TodoList = Backbone.Collection.extend({
		model: Todo,

		localStorage: new Backbone.LocalStorage("todos-backbone"),

		done: function() {
			return this.where({done: true});
		},

		remaining: function() {
			return this.where({done: false});
		},

		nextOrder: function() {
			if (!this.length) return 1;
			return this.last().get('order') + 1
		},

		comparator: 'order'

	});

	var Todos = new TodoList;

	

});