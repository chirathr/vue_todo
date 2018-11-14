<template>
    <div class="col-12 list-group list-group-flush pr-0 color-complete-transparent">
            <hr />

            <todo-item v-for="(todo, index) in todos" v-if="showTodo(todo)" v-bind:key="index" 
              v-bind:index="index" v-bind:todo="todo" v-on:remove="removeTodo" 
              v-on:saveTodoText="saveTodoText" v-on:enableEditTodos="enableEditTodos" 
              v-bind:edit="edit">
            </todo-item>

            <hr />
        </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItem from "./TodoItem.vue";
import { ITodoItem } from '../interfaces/todo';

export default Vue.extend({
  props: ["todos", "edit", "state"],
  components: {
    "todo-item": TodoItem
  },
  data: function() {
    return {
      TODO: 1,
      ALL: 2,
      FINISHED: 3
    };
  },
  methods: {
    removeTodo: function(index: number) {
      this.$emit("removeTodo", index);
    },
    saveTodoText: function(index: number, text: string) {
      this.$emit("saveTodoText", index, text);
    },
    enableEditTodos: function() {
      this.$emit("enableEditTodos");
    },
    showTodo: function(todo: ITodoItem) {
      switch (this.state) {
        case this.TODO: // Unchecked items
          return todo.checked === false;
        case this.ALL: // All items
          return true;
        case this.FINISHED: // Checked items
          return todo.checked === true;
      }
    }
  }
});
</script>
