var todoList = {
    props: ['todo', 'index'],
    template: `
        <div class="row">
            <div class="checkbox float-left">
                <label>
                    <input type="checkbox" v-model="todo.checked">
                </label>
            </div>
            <div class="float-left" v-bind:class="{\'strike-through\': todo.checked}">
                {{ todo.text }}
            </div>
            <div>
                <button v-on:click="$emit('remove', index)">X</button>
            </div>
        </div>`
}

export default todoList;