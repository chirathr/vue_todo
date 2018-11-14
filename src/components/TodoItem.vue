<template>
    <div class="row list-group-item pr-0 color-complete-transparent" v-bind:class="{ 'disabled': todo.checked }">
            <div class="pl-0">
                <div class="checkbox float-left">
                    <i class="material-icons text-success" v-on:click="toogleTodoChecked()" v-if="todo.checked">check_box</i>
                    <i class="material-icons muted" v-on:click="toogleTodoChecked()" v-else>check_box_outline_blank</i>
                </div>

                <div class="float-left pl-3" v-bind:class="{ 'strike-through': todo.checked }">
                    <input v-model="todo.text" v-if="editText" v-on:keyup.enter="saveEditedText">
                    <p v-else v-on:click="editTodo">
                        {{ todo.text }}
                    </p>
                </div>
            </div>
                
            <div class="float-right mr-3">
                <i class="material-icons" v-on:click="deleteTodo()">delete</i>
            </div>
        </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ["todo", "index", "edit"],
  data: function() {
    return {
      editText: false
    };
  },
  methods: {
    saveEditedText: function() {
      this.editText = !this.editText;
      this.$emit("saveTodoText", this.index, this.todo.text);
    },
    editTodo: function() {
      this.editText = !this.editText;
      this.$emit("enableEditTodos");
    },
    toogleTodoChecked: function() {
      this.todo.checked = !this.todo.checked;
    },
    deleteTodo: function() {
      this.$emit("remove", this.index);
    }
  },
  watch: {
    edit: function(newVal, oldVal) {
      if (!newVal) {
        this.editText = false;
      }
    }
  }
});
</script>
