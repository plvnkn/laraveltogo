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
                                    ></v-text-field>
                                </div>
                                <div>
                                    <v-text-field
                                        v-model="password"
                                        :label="$t('core.forms.login.password')"
                                        required
                                        type="password"
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
import { mapActions } from 'vuex'

export default {
    name: 'Login',
    data: () => ({
        email: null,
        loading: false,
        password: null
    }),
    methods: {
        ...mapActions('core', ['getCurrentUser']),

        async login (): Promise<void> {
            this.loading = true
            try {
                const token = await this.$http.get('/sanctum/csrf-cookie')
                await this.$http.post('/login', {
                    email: this.email,
                    password: this.password
                })
                this.getCurrentUser()

                if (this.$route.query.redirect) {
                    console.log('redirectdingeling')
                    window.location.href = `/${this.$route.query.redirect}`
                } else{
                    console.log('redirect')
                    this.$router.push({ name: 'Dashboard'})
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