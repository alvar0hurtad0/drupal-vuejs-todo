import Vue from 'vue'
import Vuex from 'vuex';
import Todos from './modules/todos';
import User from './modules/user';

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
        User
    },
    mutations,
    state
});
