var todoItem = {
    props: ["todo", "index", "edit"],
    data: function () {
        return {
            editText: false
        }
    },
    template: `
        <div class="row list-group-item pr-0 color-complete-transparent" v-bind:class="{disabled: todo.checked}">
            <div class="pl-0">
                <div class="checkbox float-left">
                    <i class="material-icons text-success" v-on:click="todo.checked = !todo.checked" v-if="todo.checked">check_box</i>
                    <i class="material-icons muted" v-on:click="todo.checked = !todo.checked" v-else>check_box_outline_blank</i>
                </div>

                <div class="float-left pl-3" v-bind:class="{'strike-through': todo.checked}">
                    <input v-model="todo.text" v-if="editText" v-on:keyup.enter="saveEditedText">
                    <p v-else v-on:click="editTodo">
                        {{ todo.text }}
                    </p>
                </div>
            </div>
                
            <div class="float-right mr-3">
                <i class="material-icons" v-on:click="$emit('remove', index)">delete</i>
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
        }
    },
    watch: {
        edit: function (newVal, oldVal) {
            if (!newVal) {
                this.editText = false;
            }
        }
    }
};

export default todoItem;