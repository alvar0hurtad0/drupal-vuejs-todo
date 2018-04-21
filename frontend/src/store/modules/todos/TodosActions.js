import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./TodosMutations";

export default {
    addTodo({commit}, payload) {
        console.log(payload);
        commit(ADD_TODO, payload)
    },
    removeTodo({commit}, payload) {
        commit(REMOVE_TODO, payload)
    },
    toggleTodo({commit}, payload) {
        commit(TOGGLE_TODO, payload)
    }
}
