import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  blogPosts: [],
  allPages: [],
  siteInfo: [],
  subjects: [],
  globals: {},
});

export const getters = {
  selectedSubject:(state) => (selectedSubject) => {
    if (selectedSubject) {
      state.globals.selectedSubject = selectedSubject;
      console.log("set selectedSubject: " + state.globals.selectedSubject.name);
    } else {
      console.log("get selectedSubject: " + state.globals.selectedSubject.name);
    }
    return state.globals.selectedSubject;
  },
  blogsForSelectedSubject:(state) => () => {
    if (state.globals.selectedSubject) {
      const res = state.blogPosts.filter(s => {
        // TODO: better compare
        return "/subject/" + s.subject == state.globals.selectedSubject._path
      });
      console.log("# blogsForSelectedSubject: " + res.length);
      return res;
    }
    return [];
  },
};

export const mutations = {
  SET_POSTS(state, data) {
    state.blogPosts = data
  },
  SET_PAGES(state, data) {
    state.allPages = data
  },
  SET_INFO(state, data) {
    state.siteInfo = data
  },
  SET_SUBJECTS(state, data) {
    state.subjects = data
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getSiteInfo')
    await dispatch('getBlogPosts')
    await dispatch('getPages')
    await dispatch('getSubjects')
  },
  async getBlogPosts({ state, commit }) {
    const context = await require.context('~/content/blog/', false, /\.json$/);

    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));

    commit('SET_POSTS', searchposts.reverse())
  },
  async getSubjects({ state, commit }) {
    const context = await require.context('~/content/subject/', false, /\.json$/);

    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/subject/${key.replace('.json', '').replace('./', '')}`
    }));

    commit('SET_SUBJECTS', searchposts.reverse())
  },
  async getPages({ state, commit }) {
    const context = await require.context('~/content/pages/', false, /\.json$/);

    const pages = await context.keys().map(key => ({
      ...context(key),
      _path: `/page/${key.replace('.json', '').replace('./', '')}`
    }));

    commit('SET_PAGES', pages)
  },
  getSiteInfo({ state, commit }) {
    const info = require('~/content/setup/info.json');
    commit('SET_INFO', info)
  },
};
