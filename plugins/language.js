import Vue from 'vue'
import Language from '@/services/language'

export default ({app, store}) => {
    Vue.prototype.$L = (key) => {
        return Language(store.state.sessionStorage.language.lang, key)
    }
}