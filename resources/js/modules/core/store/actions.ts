import Snack from '@/modules/core/models/Snack'

export default {
    getCurrentUser ({ commit, state }) {
        if (state.user.email) {
            return
        }
        window.axios.get('/api/user').then(res => commit('setUser', res.data))
    },

    messageError ({ commit }, { text, error, timeout = 6000 }) {
        commit('setSnack', new Snack({ text, timeout }))
    },
    messageSuccess ({ commit }, { text, timeout = 6000 }) {
        commit('setSnack', new Snack({ btnColor: 'success', text, timeout }))
    }
}
