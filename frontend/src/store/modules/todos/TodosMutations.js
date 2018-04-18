import Vue from 'vue';

export default {
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
}
