<template>
    <div v-t="'moduleA.title'"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
    name: 'ModuleA'
})
</script>
