import todoList from './todoList';


var Todo = {
    template: `
        <div class="card" style="width: 30rem;">
            <div class="card-body">
                <h2 class="card-title">Todo</h2>
                
                <todo-list v-bind:todos="todos" v-on:removeTodo="removeTodo" class="col-md-12"></todo-list>
                
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="New todo" v-model="text" v-on:keyup.enter="addTodo">
               
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" v-on:click="addTodo">Add</button>
                    </div>
                </div>
                
            </div>
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
            if (!this.text) return;
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