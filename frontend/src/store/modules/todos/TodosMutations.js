import Vue from 'vue';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO;';

export default {
        [ADD_TODO](state, payload) {
            state.todos.push({
                id: payload.id,
                body: payload.body,
                completed: false
            })
        },

        [REMOVE_TODO](state, payload) {
            var index = -1;
            for(var i = 0; i < state.todos.length; i++) {
                if(state.todos[i].id == payload) {
                    index = i;
                }
            }
            if (index != -1) {
                state.todos.splice(index, 1);
            }
        },

        [TOGGLE_TODO](state, payload) {
            payload.completed = !payload.completed
        },
}
