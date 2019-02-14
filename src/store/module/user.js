export default {
    namespaced: true,
    state: {
        username:''
    },
    // getters:{},
    mutations: {
        setUsername(state,name){
            state.username=name
        }
    },
    actions: {
        // 展示编辑单个直播视频
        actionSetUsername({
            commit
        }, name) {
            commit('setUsername', name)
        }
    }
}
