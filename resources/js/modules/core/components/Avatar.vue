<template>
    <v-row justify="end">
        <v-menu
            bottom
            min-width="200px"
            rounded
            offset-y
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    icon
                    x-large
                    v-on="on"
                >
                    <v-avatar
                        color="brown"
                        size="48"
                    >
                        <span class="white--text text-h5">{{ initials }}</span>
                    </v-avatar>
                </v-btn>
            </template>
            <v-card>
                <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                        <v-avatar
                            color="brown"
                        >
                            <span class="white--text text-h5">{{ initials }}</span>
                        </v-avatar>
                        <h3>{{ user.name }}</h3>
                        <p class="text-caption mt-1">
                            {{ user.email }}
                        </p>
                        <v-divider class="my-3"></v-divider>
                        <v-btn
                            depressed
                            rounded
                            text
                            v-t="'core.profile.edit.title'"
                            :to="{ name: 'Profile' }"
                        >
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn class="text-capitalize" v-bind="attrs" v-on="on" text>
                                    <v-icon left>mdi-translate</v-icon>
                                    {{ locale(lang) }}
                                    <v-icon small right>mdi-menu-down</v-icon>
                                </v-btn>
                            </template>
                            <v-list dense>
                                <v-list-item v-for="(val, key) in $lang.messages" :key="key" @click.prevent="setLocale(key)">
                                    <v-list-item-title v-text="locale(key)"></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-divider class="my-3"></v-divider>
                        <v-btn
                            depressed
                            rounded
                            text
                            v-t="'core.profile.logout'"
                            @click.prevent="logout()"
                        >
                        </v-btn>
                    </div>
                </v-list-item-content>
            </v-card>
        </v-menu>
    </v-row>
</template>

<script lang="ts">
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import User from '@/modules/core/models/User'

export default {
    name: 'Avatar',

    computed: {
        ...mapGetters('core', ['user']),
        ...mapState('core', ['lang']),

        initials () {
            return 'PP'
        }
    },
    methods: {
        ...mapActions('core', ['logout', 'setLocale']),

        locale(key: string): string {
            return this.$t("core.i18n.locales." + key)
        }
    }
}
</script>

<style scoped>

</style>