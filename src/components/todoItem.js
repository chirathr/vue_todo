var todoList = {
    props: ['todo', 'index'],
    template: `
        <div class="row list-group-item ">
            <div class="col-10 pl-0">
                <div class="checkbox float-left">
                    <label>
                        <input type="checkbox" v-model="todo.checked">
                    </label>
                </div>

                <div class="float-left pl-2" v-bind:class="{\'strike-through\': todo.checked}">
                    {{ todo.text }}
                </div>
            </div>
                
            <div class="float-right col-2 mr-0">
                <button v-on:click="$emit('remove', index)">X</button>
            </div>
        </div>`
}

export default todoList;