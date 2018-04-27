import Vue from 'vue';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO;';

export default {
     [ADD_TODO](state, { id, body }) {
        state.todos.push({ id, body, completed: false })
     },
    [REMOVE_TODO](state, id) {
        var index = -1;
        for(var i = 0; i < state.todos.length; i++) {
            if(state.todos[i].id == id) {
                index = i;
            }
        }

        if (index != -1) {
            state.todos.splice(index, 1);
        }
    },
    [TOGGLE_TODO](state, id) {
        let todo = state.todos.find(todo => todo.id === id)
        todo.completed = !todo.completed;
    },
}
