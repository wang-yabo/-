import { createStore } from "vuex"

const store = createStore({
    state: {
        tabFlag: true,
        userInfo: {
            name: "admin"
        }
    },
    mutations: {
        getUserInfo(state, name) {
            state.userInfo.name = name
        },
        changeTabFlag(state, flag) {
            state.tabFlag = flag
        }
    },
    actions: {
        asyncGetUserInfo({ commit }) {
            setTimeout(() => {
                commit("getUsetInfo", new Date() + "action")
            }, 2000)
        },
        asyncChangeTabFlag({ commit }, flag) {
            commit("changeTabFlag", flag)
        }
    },
    getters: {
        userInfoGetter(state) {
            return state.userInfo.name
        }
    }
})

export default store