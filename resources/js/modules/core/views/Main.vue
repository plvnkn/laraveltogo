<template>
    <v-app>
        <template v-if="loading">

        </template>
        <template v-else>
            <template v-if="!loading && !user.email">
                <login></login>
            </template>
            <template v-else>
                <app-header></app-header>
                <v-main>
                    <v-container fluid>
                        <router-view :key="$route.path"/>
                    </v-container>
                </v-main>
                <snackbar />
            </template>
        </template>
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
        loading: false
    }),

    computed: {
        ...mapGetters('core', ['user'])
    },

    methods: {
        ...mapActions('core', ['getCurrentUser', 'messageSuccess'])
    },

    async created () {
        this.loading = true
        try {
            await this.getCurrentUser()
        } catch (error) {

        } finally {
            this.loading = false
        }
        this.messageSuccess({ text: 'Snack is working too'})
    }
})
</script>
