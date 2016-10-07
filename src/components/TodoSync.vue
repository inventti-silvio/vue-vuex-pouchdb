<template lang="html">

</template>

<script>
import store from '../stores/TodoStore';
import PouchDB from 'pouchdb';


export default {
  data() {
    return {
    };
  },
  computed: {},
  created() {
    store.dispatch('syncAll');
    
    let db = PouchDB('todos');
    db.changes({since:'now', live:true})
    .on('change', () => {
      store.dispatch('syncAll');
    })
  },
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
