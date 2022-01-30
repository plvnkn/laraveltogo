<template>
    <v-container>
        <v-card class="pa-5">
            <h1 v-t="'core.profile.title'"></h1>
            <form>
                <v-text-field
                    v-model="user.name"
                    :label="$t('core.profile.name')"
                ></v-text-field>
                <v-text-field
                    v-model="user.email"
                    :label="$t('core.profile.email')"
                ></v-text-field>
                <v-row justify="end" class="mt-2">
                    <v-btn>Cancel</v-btn>
                    <v-btn>Save</v-btn>
                </v-row>
            </form>
        </v-card>
    </v-container>

</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
    name: 'Dashboard',
    computed: {
        ...mapGetters('core', ['user'])
    }
}
</script>

<style scoped>

</style>