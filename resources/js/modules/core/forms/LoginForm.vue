<template>
    <v-card>
        <v-text-field
            v-model="email"
            label="E-Mail"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            required
            type="password"
        ></v-text-field>
    </v-card>
</template>

<script>
export default {
    name: 'LoginForm',
    data: () => ({
        email: null,
        password: null
    })
}
</script>

<style scoped>

</style>