<template>
    <div>
        <v-app-bar>
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
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Main',
    data: () => ({
        user: 'Mr Smith'
    })
})
</script>
