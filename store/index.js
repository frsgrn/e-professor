import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  blogPosts: [],
  allPages: [],
  siteInfo: [],
  subjects: [],
  sessionStorage: {bookmarks: [], history: [], language: "english"},
  globals: {},
});

export const getters = {
  getPostsFromSubjectSlug: (state, getters) => (subjectSlug) => {
    if (subjectSlug) {
      return getters.getBlogPosts().filter(s => {
        if(s.subject) return s.subject.includes(subjectSlug)
        else return false
      });
    }
    return [];
  },
  lastBlogs: (state, getters) => (num) => {
    return getters.getBlogPosts().slice(0, num)
  },
  getSubjectFromSlug: (state) => (slug) => {
    return state.subjects.find(subject => subject._slug == slug)
  },
  getPostFromSlug: (state) => (slug) => {
    return state.blogPosts.find(post => post._slug == slug)
  },
  getBookmarks: (state) => () => {
    return state.sessionStorage.bookmarks
  },
  getBlogPosts: (state) => () => {
    return state.blogPosts.filter(post => {
      if (!post.language) return true
      else if(post.language.includes(state.sessionStorage.language) || post.language == state.sessionStorage.language) return true
      else return false
    })
  }
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
  },
  ADD_BOOKMARK(state, data) {
    state.sessionStorage.bookmarks.push(data)
  },
  REMOVE_BOOKMARK(state, data) {
    state.sessionStorage.bookmarks = state.sessionStorage.bookmarks.filter(b_post => data._slug != b_post._slug)
  },
  PUSH_HISTORY(state, data) {
    if(state.sessionStorage.history)
      state.sessionStorage.history = state.sessionStorage.history.filter(b_post => data._slug != b_post._slug)
    state.sessionStorage.history.unshift(data)
    console.log("Current history length:", state.sessionStorage.history)
  },
  CLEAR_HISTORY(state, data) {
    state.sessionStorage.history = []
  },
  SET_LANGUAGE(state, data) {
    state.sessionStorage.language = data
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
    const context = await require.context('~/content/blog/', true, /\.json$/);
    commit('SET_POSTS', (await populate(context, 'blog')).reverse())
  },
  async getSubjects({ state, commit }) {
    const context = await require.context('~/content/subject/', true, /\.json$/);
    commit('SET_SUBJECTS', await populate(context, 'subject'))
  },
  async getPages({ state, commit }) {
    const context = await require.context('~/content/pages/', true, /\.json$/);
    commit('SET_PAGES', await populate(context, 'page'))
  },
  getSiteInfo({ state, commit }) {
    const info = require('~/content/setup/info.json');
    commit('SET_INFO', info)
  },
};

async function populate(context, collectionFolder) {
  return await context.keys().map(key => ({
    ...context(key),
    _path: `/${collectionFolder}/${key.replace('.json', '').replace('./', '')}`,
    _slug: `${key.replace('.json', '').replace('./', '')}`
  }));
}
