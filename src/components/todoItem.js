var todoList = {
    props: ['todo'],
    template: '<div class="row">\
            <div class="col-md-1">\
                <div class="checkbox">\
                    <label>\
                        <input type="checkbox" v-model="todo.checked">\
                    </label>\
                    </div>\
            </div>\
            <div class="col-md-11" v-bind:class="{\'strike-through\': todo.checked}">\
                {{ todo.text }}\
            </div>\
        </div>'
}

export default todoList;