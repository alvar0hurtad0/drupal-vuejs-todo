import Vue from 'vue';

export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_NAME = 'SET_NAME';

export default {
     [SET_LOGGED_IN](state, isLogged) {
        state.isLoggedIn = isLogged;
     },
    [SET_NAME](state, name) {
        state.userName = name;
    },
}
