import {
    throws
} from "assert";

var todoList = {
    props: ["todo", "index", "edit"],
    data: function () {
        return {
            editText: false
        }
    },
    template: `
        <div class="row list-group-item pr-0" v-bind:class="{disabled: todo.checked}">
            <div class="pl-0">
                <div class="checkbox float-left">
                    <label>
                        <input type="checkbox" v-model="todo.checked">
                    </label>
                </div>

                <div class="float-left pl-2" v-bind:class="{\'strike-through\': todo.checked}">
                    <input v-model="todo.text" v-if="editText" v-on:keyup.enter="saveEditedText">

                    <p v-else v-on:click="editTodo">
                        {{ todo.text }}
                    </p>
                    
                
                </div>
            </div>
                
            <div class="float-right mr-3">
                <button class="btn btn-sm btn-outline-danger mr-0" v-on:click="$emit('remove', index)">X</button>
            </div>
        </div>`,
    methods: {
        saveEditedText: function () {
            this.editText = !this.editText;
            this.$emit('saveTodoText', this.index, this.todo.text);
        },
        editTodo: function () {
            this.editText = !this.editText;
            this.$emit('enableEditTodos');
            console.log(this.edit);
        }
    },
    watch: {
        edit: function (newVal, oldVal) {
            if (!newVal) {
                this.editText = false;
            }
            console.log("edit changes", newVal);
        }
    }
};

export default todoList;