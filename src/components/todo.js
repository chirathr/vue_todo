import todoList from './todoList';


var Todo = {
    template: `
        <div class="card" style="width: 30rem;">
            <div class="card-body">
                <h2 class="card-title">Todo</h2>
                <input v-if="editHeading" v-on:keydown.enter="saveHeading" v-model="heading">
                <h6 v-else class="text-muted" v-on:click="showEditHeading">{{ heading }}</h6>

                
                <todo-list v-bind:todos="todos" v-on:removeTodo="removeTodo" v-on:saveTodoText="saveTodoText" class="col-md-12"></todo-list>
                
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
                checked: true
            }, {
                text: "Buy bread",
                checked: false
            }],
            text: '',
            heading: 'Shopping',
            editHeading: false
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
        },
        removeTodo: function (index) {
            if (index > -1 && index < this.todos.length) {
                this.todos.splice(index, 1);
            }
        },
        saveHeading: function () {
            this.editHeading = false;
        },
        showEditHeading: function () {
            this.editHeading = true;
        },
        saveTodoText: function (index, text) {
            if ((index > -1 && index < this.todos.length)) {
                this.todos[index].text = text;
            }
        }
    }
}

export default Todo;