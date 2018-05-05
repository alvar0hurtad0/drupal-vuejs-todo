import Vue from 'vue';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_TODOS = 'SET_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO;';

export default {
     [ADD_TODO](state, { id, title }) {
        state.todos.push({ id, title, status: false })
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
    [SET_TODOS](state, payload) {
        state.todos = [];
        Object.values(payload).forEach(function(todoNode) {
            state.todos.push({
                id: todoNode.nid[0].value,
                title: todoNode.title[0].value,
                status: todoNode.field_done[0].value
            })
        });
    },
    [TOGGLE_TODO](state, {id, title, status}) {
         state.todos.find(todo => todo.id === id).status = status;
    },
}
