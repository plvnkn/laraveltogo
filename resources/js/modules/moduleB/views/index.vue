<template>
    <div>
        <div v-t="'moduleB.title'"></div>

        <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="onSubmit">
                <ValidationProvider name="E-Mail" rules="required|email" v-slot="{ errors }">
                    <v-text-field
                        v-model="email"
                        label="E-Mail"
                        :error-messages="errors"
                    ></v-text-field>
                </ValidationProvider>
                <div>
                    <button type="submit" :disabled="invalid">Submit</button>
                </div>
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
