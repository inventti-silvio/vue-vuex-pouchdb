<template lang="html">
  <div>
    <li class='none-style'>
      <input v-on:keyup.enter='addTodo' v-model='newTodo' type="text" placeholder="new todo">
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
    newTodo: {
      get () {
        return store.state.newTodo;
      },
      set (newTodo) {
        store.state.newTodo = newTodo;
      }
    }
  },
  created() {},
  methods: {
    addTodo () {
      store.dispatch('addTodo');
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
