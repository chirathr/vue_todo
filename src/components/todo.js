import todoList from './todoList';


var Todo = {
    template: `
        <div class="row">
            <h1 class="col-md-12">Todo</h1>
            <todo-list v-bind:todos="todos" v-on:removeTodo="removeTodo" class="col-md-12"></todo-list>
            <div class="col-md-12">
                <input v-model="text" v-on:keyup.enter="addTodo" />
            </div>
            {{ text }}
        </div>
    `,
    data: function () {
        return {
            todos: [{
                text: "Get fruits!",
                checked: false
            }, {
                text: "Buy bread",
                checked: true
            }],
            text: ''
        };
    },
    components: {
        'todo-list': todoList
    },
    methods: {
        addTodo: function () {
            this.todos.push({
                text: this.text,
                checked: false
            });
            this.text = '';
            console.log(this.todos);
        },
        removeTodo: function (index) {
            if (index > -1) {
                this.todos.splice(index, 1);
            }
        }
    }
}

export default Todo;