<template>
    <div id="app" class="container pt-5">
        <div class="row">
            <todo v-for="id in todoList" v-bind:key="id" v-bind:todo-id="id" v-on:delete-todo="deleteTodo"></todo>
            <todo-template v-on:add-todo="addTodo"></todo-template>
        </div>
    </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import TodoTemplate from "./components/NewTodoPlaceholder.vue";

export default {
  components: {
    todo: Todo,
    "todo-template": TodoTemplate
  },
  data: function() {
    return {
      todoList: [1],
      count: 1
    };
  },
  methods: {
    addTodo: function() {
      this.todoList.push(++this.count);
    },
    deleteTodo: function(todoId) {
      var index = this.todoList.indexOf(todoId);
      if (index > -1) this.todoList.splice(index, 1);
    }
  }
};
</script>

<style src="./static/css/style.css"></style>
