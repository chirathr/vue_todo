import todoItem from './todoItem';

var todoList = {
    props: ['todos'],
    components: {
        'todo-item': todoItem
    },
    template: `
        <div class="col-12">
            <todo-item v-for="(todo, index) in todos" v-bind:key="index" v-bind:index="index" v-bind:todo="todo" v-on:remove="removeTodo">
            </todo-item>
        </div>`,
    methods: {
        removeTodo: function (index) {
            this.$emit('removeTodo', index);
        }
    }
}

export default todoList;