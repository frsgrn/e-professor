// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist'
 
export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
        storage: window.localStorage,
        reducer: (state) => ({sessionStorage: state.sessionStorage})
    }).plugin(store);
  });
}