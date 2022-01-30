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
import { mapGetters, mapMutations } from 'vuex'
import User from '@/modules/core/models/User'

export default {
    name: 'Avatar',
    computed: {
        ...mapGetters('core', ['user']),

        initials () {
            return 'PP'
        }
    },
    methods: {
        ...mapMutations('core', ['setUser', 'logoutUser']),

        async logout (): Promise<void> {
            try {
                await this.$http.post('/logout')
                this.setUser(new User())
                await this.$router.push('/login')
            } catch (error) {
                this.messageError({ text: this.$t('action.signout.failed'), error })
            }
        }
    }
}
</script>

<style scoped>

</style>