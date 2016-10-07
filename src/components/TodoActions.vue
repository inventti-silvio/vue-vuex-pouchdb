<template lang="html">
  <div>
    <input v-on:click='removeDones' type="button" name="name" value="Clear Dones">
  </div>
</template>

<script>
import store from '../stores/TodoStore';

export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    removeDones () {
      store.dispatch('removeDones');
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
