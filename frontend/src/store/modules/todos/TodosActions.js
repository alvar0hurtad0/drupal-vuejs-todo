import {ADD_TODO, REMOVE_TODO, SET_TODOS, TOGGLE_TODO} from "./TodosMutations";
import api from "../../../api"
export default {
    getToken(){
        api.getToken();
    },
    getTodos({commit}, payload) {
        api.getTodos()
            .then((response) => commit(SET_TODOS, response))
            .catch((error) => { console.log('Error: ', error) });
    },
    addTodo({commit}, payload) {
        api.addTodo(payload);
        commit(ADD_TODO, payload)
    },
    removeTodo({commit}, payload) {
        commit(REMOVE_TODO, payload)
    },
    toggleTodo({commit}, payload) {
        commit(TOGGLE_TODO, payload)
    }
}
