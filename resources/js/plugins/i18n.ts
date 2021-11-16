import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const requireModule = require.context('../modules', true, /\.json$/)
const messages: any = {}

 requireModule.keys().forEach(fileName => {
    const path = fileName.replace(/(\.\/|\.json)/g, '')
    const [moduleName, language] = path.split('/i18n/')

    if (!messages[language]) {
        messages[language] = {}
    }
    messages[language][moduleName] = requireModule(fileName)
}) 

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    preserveDirectiveContent: true,
    messages,
});

export default i18n;