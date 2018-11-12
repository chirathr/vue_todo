import todoItem from './todoItem';

var todoList = {
    props: ['todos'],
    components: {
        'todo-item': todoItem
    },
    template: `
        <div class="col-12 list-group list-group-flush pr-0">
            <hr />
            <todo-item v-for="(todo, index) in todos" v-bind:key="index" v-bind:index="index" 
            v-bind:todo="todo" v-on:remove="removeTodo" v-on:saveTodoText="saveTodoText">
            </todo-item>
            <hr />
        </div>`,
    methods: {
        removeTodo: function (index) {
            this.$emit('removeTodo', index);
        },
        saveTodoText: function (index, text) {
            this.$emit('saveTodoText', index, text);
        }
    }
}

export default todoList;