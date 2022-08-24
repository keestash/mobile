const state = () => ({});

const getters = {
    getUserData(state: any){
        return state.userData;
    }
};

const actions = {
    setUserData: async function ({commit}: any, userData: JSON): Promise<any> {

        return new Promise(
            (success: CallableFunction) => {
                commit('SET_USER_DATA', userData);
                console.log(userData);
                success();
            }
        )
    }
};

const mutations = {
    SET_USER_DATA(state: any, userData: JSON) {
        state.userData = userData;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}