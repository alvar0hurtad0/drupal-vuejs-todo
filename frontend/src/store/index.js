import Vue from 'vue'
import Vuex from 'vuex';
import Todos from './modules/todos';

const actions = {};
const getters = {};
const mutations = {};
const state = {};

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        Todos,
    },
    mutations,
    state
});
