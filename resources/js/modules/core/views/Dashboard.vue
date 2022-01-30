<template>
    <v-container>
        <h1>Dashboard</h1>
        <h2>Dashboard</h2>
        <h3>Dashboard</h3>
        <h4>Dashboard</h4>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions, mapGetters} from 'vuex'

export default Vue.extend({
    name: 'Dashboard',

    created (): void {
        this.getCurrentUser()
    },

    methods: {
        ...mapActions('core', ['getCurrentUser'])
    },

    computed: {
        ...mapGetters('core', ['user']),
    }
})
</script>

<style scoped>

</style>