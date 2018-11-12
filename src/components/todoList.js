import todoItem from './todoItem';

var todoList = {
    props: ['todos'],
    components: {
        'todo-item': todoItem
    },
    template: '<div class="row">' +
        '<div class="col-12">' +
        '<todo-item v-for="todo in todos" v-bind:key="todo.text" v-bind:todo="todo"></todo-item>' +
        '</div>' +
        '</div>',
}

export default todoList;