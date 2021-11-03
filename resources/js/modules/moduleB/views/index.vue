<template>
    <div>
        <div v-t="'moduleB.title'"></div>

        <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="onSubmit">
                <ValidationProvider rules="required" v-slot="{ errors }">
                    <v-text-field
                        v-model="email"
                        label="E-Mail"
                    ></v-text-field>
                    <span>{{ errors[0] }}</span>
                </ValidationProvider>

                <button type="submit" :disabled="invalid">Submit</button>
            </form>
        </ValidationObserver>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { required } from 'vee-validate/dist/rules'

export default Vue.extend({
    name: 'ModuleB',
    data: () => ({
        email: null
    }),
    methods: {
        onSubmit () {
            alert('Form has been submitted!');
        }
    }
})
</script>
