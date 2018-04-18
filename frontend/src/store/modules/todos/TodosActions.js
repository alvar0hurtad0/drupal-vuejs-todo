export default {
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
