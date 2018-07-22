import {SET_LOGGED_IN, SET_NAME} from "./UserMutations";
import api from "@/api"

export default {
    getToken({commit},payload){
        api.getToken(payload)
          .then((response) => commit(SET_LOGGED_IN, true))
          .catch((error) => { console.log('Error: ', error) });
    },
    logOut({commit}) {
      localStorage.clear();
      commit(SET_LOGGED_IN, false);
      commit(SET_NAME, '');
    },
    checkUser({commit}) {
        if (localStorage.getItem('username')) {
            commit(SET_LOGGED_IN, true);
            commit(SET_NAME, localStorage.getItem('username'));
        }
        else {
            commit(SET_LOGGED_IN, false);
            commit(SET_NAME, '');
        }
    },
}
