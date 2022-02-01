import Snack from '@/modules/core/models/Snack'
import User from "@/modules/core/models/User";
import i18n from "@/plugins/i18n";
import { localize } from 'vee-validate';

export default {
    getCurrentUser ({ commit, state }) {
        if (state.user.email) {
            return
        }
        window.axios.get('/api/user').then(res => commit('setUser', res.data))
    },

    async logout ({ commit, state }): Promise<void> {
        try {
            await this.$http.post('/logout')
            commit('setUser', new User())
            await this.$router.push('/login')
        } catch (error) {
            this.messageError({ text: window.lang.t('action.signout.failed'), error })
        }
    },

    async setLocale ({ commit, state }, lang ) {
        await window.axios.put('/lang', { lang })
        i18n.locale = lang
        localize(lang)
        commit('setLang', lang)
    },

    messageError ({ commit }, { text, error, timeout = 6000 }) {
        commit('setSnack', new Snack({ text, timeout }))
    },
    messageSuccess ({ commit }, { text, timeout = 6000 }) {
        commit('setSnack', new Snack({ btnColor: 'success', text, timeout }))
    }
}
