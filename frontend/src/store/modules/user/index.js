import actions from './UserActions';
import mutations from './UserMutations';

export default ({
    state: {
      isLoggedIn: false,
      userName: ''
    },
    actions,
    mutations,
});
