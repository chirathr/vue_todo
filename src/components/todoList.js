import todoItem from './todoItem';

var todoList = {
    props: ['todos', 'edit', 'state'],
    components: {
        'todo-item': todoItem
    },
    template: `
        <div class="col-12 list-group list-group-flush pr-0 color-complete-transparent">
            <hr />

            <todo-item v-for="(todo, index) in todos" v-if="showAll || (showFinished === todo.checked)" v-bind:key="index" v-bind:index="index" 
                v-bind:todo="todo" v-on:remove="removeTodo" v-on:saveTodoText="saveTodoText" v-on:enableEditTodos="enableEditTodos" v-bind:edit="edit">
            </todo-item>
            <hr />
        </div>`,
    methods: {
        removeTodo: function (index) {
            this.$emit('removeTodo', index);
        },
        saveTodoText: function (index, text) {
            this.$emit('saveTodoText', index, text);
        },
        enableEditTodos: function () {
            this.$emit('enableEditTodos');
        }
    },
    computed: {
        showAll: function () {
            return this.state === 2;
        },
        showFinished: function () {
            return this.state === 3;
        }
    }
}

export default todoList;