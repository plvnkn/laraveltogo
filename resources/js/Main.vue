<template>
    <v-app>
        <v-app-bar app>
            <v-app-bar-title v-t="'core.title'"></v-app-bar-title>

            <v-spacer></v-spacer>

            <div v-t="{ path: 'core.welcome', args: { name: user } }"></div>
            <template v-slot:extension>
                <v-tabs>
                    <v-tab :to="{ name: 'ModuleA' }">Module A</v-tab>
                    <v-tab :to="{ name: 'ModuleB' }">Module B</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
      <snackbar />
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import Snackbar from '@/modules/core/components/Snackbar.vue'

export default Vue.extend({
    name: 'Main',
    components: { Snackbar },
    data: () => ({
        user: 'Mr Smith'
    }),

    methods: {
        ...mapActions('core', ['messageSuccess'])
    },

    mounted () {
        this.messageSuccess({ text: 'Snack is working too'})
    }
})
</script>
