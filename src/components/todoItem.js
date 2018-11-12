var todoList = {
    props: ['todo', 'index'],
    template: `
        <div class="row list-group-item pr-0" v-bind:class="{disabled: todo.checked}">
            <div class="pl-0">
                <div class="checkbox float-left">
                    <label>
                        <input type="checkbox" v-model="todo.checked">
                    </label>
                </div>

                <div class="float-left pl-2" v-bind:class="{\'strike-through\': todo.checked}">
                    {{ todo.text }}
                </div>
            </div>
                
            <div class="float-right mr-3">
                <button class="btn btn-sm btn-outline-danger mr-0" v-on:click="$emit('remove', index)">X</button>
            </div>
        </div>`
}

export default todoList;