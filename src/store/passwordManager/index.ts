const state = () => ({});

const getters = {
    getEdges(state: any): JSON {
        return state.edges;
    },
    getSelectedEdge(state: any): JSON {
        return state.selectedEdge;
    }
};

const actions = {
    setEdges: async function ({commit}: any, edges: JSON): Promise<any> {
        return new Promise(
            (success: CallableFunction) => {
                commit('SET_EDGES', edges);
                success();
            }
        )
    }
    , setSelectedEdge: async function ({commit}: any, edge: JSON): Promise<any> {
        return new Promise(
            (success: CallableFunction) => {
                commit('SET_SELECTED_EDGE', edge);
                success();
            }
        )
    }
};

const mutations = {
    SET_EDGES(state: any, edges: JSON) {
        state.edges = edges;
    }
    , SET_SELECTED_EDGE(state: any, edge: JSON) {
        state.selectedEdge = edge;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}