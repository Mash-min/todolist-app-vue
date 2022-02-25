import axios from "axios"
import router from "../../router"

const state = {
  user: {},
  newUser: {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  },
  userErrors: [],
  isAuthenticated: false
}

const getters = {
  user: (state) => state.user,
  newUser: (state) => state.newUser,
  userErrors: (state) => state.userErrors,
  isAuthenticated: (state) => state.isAuthenticated
}

const actions = {
  authenticate({ commit }) {
    if(localStorage.getItem('token') == null) {
      commit('authenticateUser', false)
    } else {
      commit('authenticateUser', true)
    }
  },

  async loginUser(_, payload) {
    try {
      const response = await axios.post('api/users/login', payload)
      localStorage.setItem('token', response.data.token)
      window.location.href = "/todos"
    } catch (error) {
      console.error(error.response)
    }
  },

  async registerUser(_, payload) {
    try {
      const response = await axios.post('api/users/register', payload)
      localStorage.setItem('token', response.data.token)
      window.location.href = "/todos"
    } catch (error) {
      console.error(error.response)
    } 
  },

  async logoutUser() {
    try {
      await axios.post('api/users/logout')
      localStorage.removeItem('token')
      window.location.href = "/"
    } catch (error) {
      console.error(error.response)
    }
  },

  async checkUser({ commit }) {
    try {
      const response = await axios.get('api/users')
      commit('setUser', response.data.user)
    } catch (error) {
      localStorage.removeItem('token')
      router.push({ path: '/' })
      console.clear()
    }
  }

}

const mutations = {
  authenticateUser: (state, payload) => (state.isAuthenticated = payload),
  setUser: (state, user) => (state.user = user)
}

export default {
  state,
  getters,
  actions,
  mutations
}