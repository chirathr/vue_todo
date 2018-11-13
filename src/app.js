import './css/bootstrap.css';
import './css/style.css';

import Vue from 'vue/dist/vue';
import Todo from './components/todo';
import TodoTemplate from './components/todoTemplate';


var vm = new Vue({
    el: '#app',
    components: {
        'todo': Todo,
        'todo-template': TodoTemplate
    },
    data: {
        todoList: [1],
        count: 1
    },
    methods: {
        addTodo: function () {
            this.todoList.push(++this.count);
        },
        deleteTodo: function (todoId) {
            var index = this.todoList.indexOf(todoId);
            if (index > -1)
                this.todoList.splice(index, 1);
        }
    }
});