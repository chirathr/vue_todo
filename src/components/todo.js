import todoList from './todoList';


var Todo = {
    template: `
    <div class="col-md-6">
        <div class="card mt-4" v-bind:class="backgroundColorClass" v-on:click.capture="disableEdit">
            
            <div class="card-body">
                <div class="btn-group float-right" role="group">
                    <button type="button" v-on:click="state = 1" class="btn btn-outline-secondary btn-sm" v-bind:class="{ active: showTodo }">Todo</button>
                    <button type="button" v-on:click="state = 2" class="btn btn-outline-secondary btn-sm" v-bind:class="{ active: showAll }">All</button>
                    <button type="button" v-on:click="state = 3" class="btn btn-outline-secondary btn-sm" v-bind:class="{ active: showFinished }">Finished</button>
                </div>

                <h2 class="card-title">Todo</h2>
                
                <input v-if="editHeading" v-on:keydown.enter="saveHeading" v-model="heading" name="heading" v-focus placeholder="Heading" 
                class="form-control form-control-sm color-transparent form-heading">

                <h6 v-else class="text-muted" v-on:click="showEditHeading">{{ heading }}</h6>

                <todo-list v-bind:todos="todos" v-bind:state="state" v-on:removeTodo="removeTodo" v-on:saveTodoText="saveTodoText" 
                    v-bind:edit="editTodos" class="col-md-12" v-on:enableEditTodos="enableEditTodos" v-bind:class="backgroundColorClass"></todo-list>
                
                <div class="input-group">
                    <input type="text" class="form-control color-transparent" placeholder="New todo" v-model="text" v-on:keyup.enter="addTodo">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" v-on:click="addTodo">Add</button>
                    </div>
                </div>

                <div class="mt-3 float-right" role="group">
                    <button class="btn btn-sm color-selector-red color-selector" v-on:click="changeColor('red')"></button> 
                    <button class="btn btn-sm color-selector-yellow color-selector" v-on:click="changeColor('yellow')"></button> 
                    <button class="btn btn-sm color-selector-green color-selector" v-on:click="changeColor('green')"></button> 
                    <button class="btn btn-sm color-selector-blue color-selector" v-on:click="changeColor('blue')"></button> 
                    <button class="btn btn-sm color-selector-white color-selector mr-3" v-on:click="changeColor('white')"></button> 
                    <button class="btn btn-outline-danger btn-sm" type="button" v-on:click="$emit('delete-todo', todoId)">Delete</button> 
                </div>
                
            </div>
        </div>
    </div>
    `,
    props: ['todoId'],
    data: function () {
        return {
            todos: [],
            text: '',
            heading: '',
            editHeading: true,
            editTodos: false,
            TODO: 1,
            ALL: 2,
            FINISHED: 3,
            state: 2,
            backgroundColorClass: ''
        };
    },
    computed: {
        showAll: function () {
            return this.state === this.ALL;
        },
        showFinished: function () {
            return this.state === this.FINISHED;
        },
        showTodo: function () {
            return this.state === this.TODO;
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
            if (text && (index > -1 && index < this.todos.length)) {
                this.todos[index].text = text;
            }
        },
        disableEdit: function (event) {
            if (this.editHeading && event.target.name != 'heading' && this.heading) {
                this.saveHeading();
            }
            if (event.target.tagName !== 'INPUT')
                this.editTodos = false;
        },
        enableEditTodos: function () {
            this.editTodos = true;
        },
        changeColor: function(color) {
            switch(color) {
                case 'red': 
                    this.backgroundColorClass = 'color-selector-red';
                    break;
                case 'yellow': 
                    this.backgroundColorClass = 'color-selector-yellow';
                    break;
                case 'blue': 
                    this.backgroundColorClass = 'color-selector-blue';
                    break;
                case 'green': 
                    this.backgroundColorClass = 'color-selector-green';
                    break;
                case 'white': 
                    this.backgroundColorClass = '';
                    break;
            }
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