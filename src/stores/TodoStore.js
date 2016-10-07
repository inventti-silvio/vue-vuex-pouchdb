import Vue from 'vue';
import Vuex from 'vuex';
import PouchDB from 'pouchdb';
const db = new PouchDB('todos');
PouchDB.sync('todos', 'http://104.236.45.201:5984/todos', {live:true});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: ''
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo);
    },
    editTodo (state, editTodo) {
      let todo = state.todos.find(todo => editTodo._id === todo._id);
      let index = state.todos.indexOf(todo);
      state.todos.splice(index, 1, editTodo);
    },
    removeTodo (state, todo) {
      let index = state.todos.indexOf(todo);
      state.todos.splice(index, 1);
    },
    cleanNewTodo (state) {
      state.newTodo = '';
    },
    setTodos (state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    addTodo (ctx) {
      let todo = {
        _id: new Date().toISOString(),
        text: ctx.state.newTodo,
        done: false
      }
      db.put(todo).then((res) => {
          todo._rev = res.rev;
          ctx.commit('addTodo', todo);
          ctx.commit('cleanNewTodo');
        }).catch(() => {
          console.log('error');
        });
    },
    editTodo (ctx, todo) {
      db.put(todo).then((res) => {
        todo._rev = res.rev;
        ctx.commit('editTodo', todo)
      }).catch(() => {
        console.log('oh gosh');
      })
    },
    removeTodo (ctx, todo) {
      db.remove(todo)
        .then((res) => {
          ctx.commit('removeTodo', todo);
        })
        .catch(() => {
          console.log('noooo!');
        });
    },
    removeDones (ctx) {
      let dones = ctx.getters.dones;
      dones.forEach(todo => ctx.dispatch('removeTodo', todo));
    },
    syncAll (ctx) {
      db.allDocs({include_docs: true})
        .then((res) => {
          ctx.commit('setTodos', res.rows.map(row => row.doc));
        })
        .catch(() => {
          console.log('mamma');
        })
    }
  },
  getters: {
    dones (ctx) {
      return ctx.todos.filter(todo => todo.done);
    }
  }
})
