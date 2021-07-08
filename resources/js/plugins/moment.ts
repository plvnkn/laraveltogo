import Vue from 'vue'
import moment from 'moment'

declare global {
    interface Window {
        moment: any
    }
}

Vue.prototype.$moment = window.moment = moment
