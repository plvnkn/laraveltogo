<template>
    <v-app>
        <v-main>
            <v-container>
                <v-form>
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-card class="pa-2">
                                <div>
                                    <v-text-field
                                        v-model="email"
                                        :label="$t('core.forms.login.email')"
                                        required
                                        @keyup.enter="login"
                                    ></v-text-field>
                                </div>
                                <div>
                                    <v-text-field
                                        v-model="password"
                                        :label="$t('core.forms.login.password')"
                                        required
                                        type="password"
                                        @keyup.enter="login"
                                    ></v-text-field>
                                </div>
                                <div>
                                    <v-btn
                                        :loading="loading"
                                        color="primary"
                                        @click="login"
                                    >{{ $t('core.forms.login.button') }}</v-btn>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Login',
    data: () => ({
        email: null,
        loading: false,
        password: null
    }),
    computed: {
        ...mapGetters('core', ['user'])
    },
    methods: {
        ...mapActions('core', ['getCurrentUser']),

        async login (): Promise<void> {
            this.loading = true
            try {
                await this.$http.get('/sanctum/csrf-cookie')
                await this.$http.post('/login', {
                    email: this.email,
                    password: this.password
                })

                await this.getCurrentUser()

                if (this.$route.query.redirect) {
                    this.$router.push(`/${this.$route.query.redirect}`)
                } else {
                    this.$router.push('/')
                }

            } catch (error) {

            } finally {
                this.loading = false
            }

        }
    },
    created () {
    }
}
</script>

<style scoped>

</style>