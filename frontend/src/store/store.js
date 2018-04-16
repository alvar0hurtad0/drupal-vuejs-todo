import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        todos: [],
    },

    mutations: {
        ADD_TODO(state, payload) {
            state.todos.push({
                body: payload,
                completed: false
            })
        },

        REMOVE_TODO(state, payload) {
            var todos = state.todos
            todos.splice(todos.indexOf(payload), 1)
        },

        TOGGLE_TODO(state, payload) {
            payload.completed = !payload.completed
        },

    },

    actions: {
        addTodo({commit}, payload) {
            console.log(payload);
            commit('ADD_TODO', payload)
        },
        removeTodo({commit}, payload) {
            commit('REMOVE_TODO', payload)
        },
        toggleTodo({commit}, payload) {
            commit('COMPLETE_TODO', payload)
        }
    }
});