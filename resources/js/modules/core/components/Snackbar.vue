<template>
    <v-snackbar
        app
        v-model="show"
        multi-line
        bottom
        :color="snack.color"
        :timeout="snack.timeout"
    >
        {{ snack.text }}
        <template v-slot:action="{ attrs }">
            <v-btn
                :color="snack.btnColor"
                dark
                text
                v-bind="attrs"
                @click="show = false"
            >
                {{ $t('core.buttons.close') }}
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Snackbar',
    data: () => ({
        show: false
    }),
    computed: {
        snack: {
            get () {
                return this.$store.state.core.snack
            }
        }
    },
    watch: {
        snack () {
            this.show = true
        }
    }
})
</script>
