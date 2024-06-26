import apiClient from '@/plugins/axios.js';
import data from '/api/db.json'

const state = () => ({
  all: [],
  filter: 'all'
});

const mutations = {
  filter(state, filter) {
    state.filter = filter
  },
  storeAll(state, payload) {
    state.all = payload
  },
  storeOne(state, payload) {
    state.all.push(payload)
  },
  update(state, payload) {
    const index = state.all.findIndex(todo => todo.id === payload.id)
    if(index >= 0)
    state.all.splice(index, 1, payload)
  },
  delete(state, id){
    const index = state.all.findIndex(todo => todo.id === id) 
    if(index >= 0)
    state.all.splice(index, 1)
  }
};

const actions = {
  all({commit}) {
    apiClient.get('/todos')
      .then(res => commit('storeAll', res.data))
      .catch(() => commit('storeAll', data.todos)) // To run in Github Pages without json-server package
  },
    
  add({commit, rootState}, data) {
    return new Promise((resolve) => {  // Promise only to simulate endpoint response time
      apiClient.post('/todos', data)
        .then((res) => {
          setTimeout(() => {
            commit('storeOne', res.data)
            resolve()
          }, rootState.simulateLoadTime)
        })
        .catch(() => {  // To run in Github Pages without json-server package
          setTimeout(() => {
            commit('storeOne', data)
            resolve()
          }, rootState.simulateLoadTime)
        })
    })
  },
  
  update({commit, rootState}, {id, data}) {
    return new Promise((resolve) => {  // Promise only to simulate endpoint response time
      apiClient.put(`/todos/${id}`, data)
        .then(res => {
          setTimeout(() => {
            commit('update', res.data)
            resolve()
          }, rootState.simulateLoadTime)
        })
        .catch(() => {  // To run in Github Pages without json-server package
          setTimeout(() => {
            commit('update', {...data, id})
            resolve()
          }, rootState.simulateLoadTime)
        })
    }) 
  },

  delete({commit, rootState}, id) {
    return new Promise((resolve) => {  // Promise only to simulate endpoint response time
      apiClient.delete(`/todos/${id}`)
        .then(() => {
          setTimeout(() => { 
            commit('delete', id)
            resolve()
          }, rootState.simulateLoadTime)
        })
        .catch(() => {  // To run in Github Pages without json-server package
          setTimeout(() => {
            commit('delete', id)
            resolve()
          }, rootState.simulateLoadTime)
        })
    }) 
  },

  filter({commit}, val) {
    commit('filter', val)
  }
};

const getters = {
  filtered: (state) => {
    switch (state.filter) {
    case 'done':
      return state.all.filter(todo => todo.completed);
    case 'pending':
      return state.all.filter(todo => !todo.completed);
    case 'all':
      return state.all;
    default:
      return state.all.filter(todo => todo.title.toLowerCase().includes(state.filter.toLowerCase()));
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
