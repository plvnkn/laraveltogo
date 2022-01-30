<template>
    <v-container fluid>
        <router-view :key="$route.path"/>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'View'
}
</script>

<style scoped>

</style>