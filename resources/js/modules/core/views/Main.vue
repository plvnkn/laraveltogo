<template>
    <v-app>
        <app-header v-if="authenticated"></app-header>
        <v-main>
            <v-container fuild>
                <router-view v-if="(ready && authenticated) || $route.name === 'Login'"></router-view>
            </v-container>
        </v-main>
        <snackbar />
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions, mapGetters, mapState} from 'vuex'
import Snackbar from '@/modules/core/components/Snackbar.vue'
import AppHeader from '@/modules/core/components/Header.vue'
import Login from '@/modules/core/views/Login.vue'

export default Vue.extend({
    name: 'Main',
    components: { Login, Snackbar, AppHeader },

    data: () => ({
        ready: false
    }),

    computed: {
        ...mapGetters('core', ['authenticated'])
    },

    methods: {
        ...mapActions('core', ['messageSuccess', 'getCurrentUser', 'setLocale']),
        initLocale (): void {
            const storedLocale = localStorage.getItem('locale')
            if (storedLocale) {
                this.$lang.loadLanguage(storedLocale)
                return
            }
            const locale = document.querySelector('html').getAttribute('lang').slice(0, 2)
            this.setLocale(locale)
        }

    },

    created () {
        this.$router.onReady(() => {
            this.ready = true
        })
        this.getCurrentUser()
        this.initLocale()
        this.messageSuccess({ text: 'Snack is working too'})
    }
})
</script>
