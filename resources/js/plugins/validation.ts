import Vue from 'vue'

import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json';
import de from 'vee-validate/dist/locale/de.json';

extend('required', required)
extend('email', email)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

localize({
    en,
    de
});