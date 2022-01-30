<template>
    <v-app-bar app>
        <router-link :to="{ name: 'Dashboard' }">
            <v-app-bar-title v-t="'core.title'"></v-app-bar-title>
        </router-link>

        <v-spacer></v-spacer>

        <router-link v-if="!authenticated" :to="{ name: 'Login' }">{{ $t('core.forms.login.caption') }}</router-link>

        <avatar v-else></avatar>

        <template v-slot:extension>
            <v-tabs :hide-slider="hideSlider">
                <template v-for="(item, idx) in routes">
                    <v-tab :key="idx"
                           :to="{ name: item.name}"
                    >{{ item.label }}</v-tab>
                </template>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script lang="ts">
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import Avatar from '@/modules/core/components/Avatar.vue'

export default {
    name: 'Header',
    components: { Avatar },

    computed: {
        ...mapState('core', ['user']),
        ...mapGetters('core', ['authenticated']),

        routes () {
            return [
                {
                    "name": "Dashboard",
                    "label": this.$t('core.dashboard')
                },
                {
                    "name": "ModuleA",
                    "label": this.$t('moduleA.title')
                },
                {
                    "name": "ModuleB",
                    "label": this.$t('moduleB.title')
                },
                {
                    "name": "UserManagement",
                    "label": this.$t('userManagement.title')
                }
            ]
        },

        hideSlider (): boolean {
            return !this.routes.some(route => route.name === this.$route.name)
        }
    }
}
</script>

<style scoped>

</style>