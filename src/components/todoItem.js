var todoList = {
    props: ["todo", "index"],
    data: function () {
        return {
            edit: false
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
                    <input v-model="todo.text" v-if="edit" v-on:keyup.enter="saveEditedText">

                    <p v-else v-on:click="edit = !edit">
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
            this.edit = !this.edit;
            this.$emit('saveTodoText', this.index, this.todo.text);
        }
    }
};

export default todoList;