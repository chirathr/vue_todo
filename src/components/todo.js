import todoList from './todoList';


var Todo = {
    template: `
        <div class="card" style="width: 30rem;" v-on:click.capture="disableEdit">
            
            <div class="card-body">
                <div class="btn-group float-right" role="group" aria-label="Basic example">
                    <button type="button" v-on:click="state = 1" class="btn btn-outline-secondary btn-sm" v-bind:class="{ active: showTodo }">Todo</button>
                    <button type="button" v-on:click="state = 2" class="btn btn-outline-secondary btn-sm" v-bind:class="{ active: showAll }">All</button>
                    <button type="button" v-on:click="state = 3" class="btn btn-outline-secondary btn-sm" v-bind:class="{ active: showFinished }">Finished</button>
                </div>
                <h2 class="card-title">Todo</h2>
                
                <input v-if="editHeading" v-on:keydown.enter="saveHeading" v-model="heading" name="heading" v-focus placeholder="Heading">
                <h6 v-else class="text-muted" v-on:click="showEditHeading">{{ heading }}</h6>

                <todo-list v-bind:todos="todos" v-bind:state="state" v-on:removeTodo="removeTodo" v-on:saveTodoText="saveTodoText" 
                    v-bind:edit="editTodos" class="col-md-12" v-on:enableEditTodos="enableEditTodos"></todo-list>
                
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
            todos: [],
            text: '',
            heading: '',
            editHeading: true,
            editTodos: false,
            state: 2
        };
    },
    computed: {
        showAll: function () {
            return this.state === 2;
        },
        showFinished: function () {
            return this.state === 3;
        },
        showTodo: function () {
            return this.state === 1;
        },
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
        },
        disableEdit: function (event) {
            console.log(event.target.tagName)
            if (this.editHeading && event.target.name != 'heading' && this.heading) {
                this.saveHeading();
            }
            if (event.target.tagName !== 'INPUT')
                this.editTodos = false;
        },
        enableEditTodos: function () {
            this.editTodos = true;
            console.log('enableEditTodos');
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus();
            }
        }
    }
}

export default Todo;