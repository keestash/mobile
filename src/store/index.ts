import login from './login';
import passwordManager from './passwordManager';
import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    modules: {
        login: login
        , passwordManager: passwordManager
    }
    , plugins: [createPersistedState()]
});

export default store;