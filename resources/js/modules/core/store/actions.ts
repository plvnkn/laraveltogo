import Snack from '@/modules/core/models/Snack'

export default {
    messageError ({ commit }, { text, error, timeout = 6000 }) {
        commit('setSnack', new Snack({ text, timeout }))
    },
    messageSuccess ({ commit }, { text, timeout = 6000 }) {
        commit('setSnack', new Snack({ btnColor: 'success', text, timeout }))
    }
}
