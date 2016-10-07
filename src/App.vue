<template lang="html">
  <div class="todo">
    <h1>{{appName}}</h1>
    <ul>
      <todo-list></todo-list>
      <todo-input></todo-input>
      <todo-actions></todo-actions>
      <todo-sync></todo-sync>
    </ul>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoActions from './components/TodoActions';
import TodoSync from './components/TodoSync';

export default {
  props: {},
  data() {
    return {
      appName: 'Todo'
    };
  },
  computed: {
  },
  created() {},
  methods: {

  },
  components: {
    TodoList,
    TodoInput,
    TodoActions,
    TodoSync
  }
};
</script>

<style lang="css">
.todo {
  text-align: center;
}

ul {
  list-style-position: inside;
  list-style-type: none;
}

</style>
