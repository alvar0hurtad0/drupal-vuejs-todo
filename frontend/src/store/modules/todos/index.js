import actions from './TodosActions';
import mutations from './TodosMutations';

export default ({
    namespaced: true,
    state: {
        todos: [],
    },
    actions,
    mutations,
});
