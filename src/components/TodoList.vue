<template lang="html">
  <div>
    <li v-for="todo in todos">
      <input v-model='todo.done' v-on:change='editTodo(todo)' type="checkbox">
      {{todo.text}}
      <input v-on:click='removeTodo(todo)' type="button" value="x">
    </li>
  </div>
</template>

<script>
import store from '../stores/TodoStore';
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    todos () {
      return store.state.todos;
    }
  },
  created() {},
  methods: {
    removeTodo (todo) {
      store.dispatch('removeTodo', todo);
    },
    editTodo (todo) {
      store.dispatch('editTodo', todo);
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
