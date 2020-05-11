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
<<<<<<< HEAD
  selectedSubject:(state) => (path) => {
    if (path) {
      return state.subjects.find(s => {
        return s._path == path
      });
    }
    return null;
  },
  blogsForSelectedSubject:(state) => (path) => {
    if (path) {
      return state.blogPosts.filter(s => {
        return s.subject == path
=======
  getPostsFromSubjectSlug:(state) => (subjectSlug) => {
    if (subjectSlug) {
      return state.blogPosts.filter(s => {
        return s.subject == subjectSlug
>>>>>>> b226f8c8ed30e74039f2b907fc82fec4c98bbce4
      });
    }
    return [];
  },
  lastBlogs:(state) => (num) => {
    return state.blogPosts.slice(0, num)
  },
  getSubjectFromSlug:(state) => (slug) => {
    return state.subjects.find(subject => subject._slug == slug)
  },
  getPostFromSlug:(state) => (slug) => {
    return state.blogPosts.find(post => post._slug == slug)
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