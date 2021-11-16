import Snack from '@/modules/core/models/Snack'

export default {
    async getCurrentUser ({ commit, state }) {
        if (window.location.href.includes('login') || state.user.email) {
            return
        }
        const res = await window.axios.get('/api/user')
        commit('setUser', res.data)
    },

    messageError ({ commit }, { text, error, timeout = 6000 }) {
        commit('setSnack', new Snack({ text, timeout }))
    },
    messageSuccess ({ commit }, { text, timeout = 6000 }) {
        commit('setSnack', new Snack({ btnColor: 'success', text, timeout }))
    }
}
