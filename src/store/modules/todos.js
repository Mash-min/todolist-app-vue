import axios from "axios"
import Swal from "sweetalert2"

const state = {
  todo: {
    todo: ''
  },
  todos: [],
  newTodo: {
    todo: '',
  },
  todoLinks: [],
  todoErrors: []
}

const getters = {
  todo: (state) => state.todo,
  todos: (state) => state.todos,
  newTodo: (state) => state.newTodo,
  todoLinks: (state) => state.todoLinks,
  todoErrors: (state) => state.todoErrors 
}

const actions = {
  async addTodo({ commit }, payload) {
    commit('setTodoErrors', [])
    try {
      const response = await axios.post('api/todos', payload)
      commit('addTodo', response.data.todo)
      Swal.fire({ title: "Todo addded", icon: 'success' })
    } catch (error) {
      commit('setTodoErrors', error.response.data.errors)
    }
  },

  async fetchTodos({ commit }, url) {
    try {
      const response = await axios.get(url)
      commit('setTodos', response.data.todos.data)
      commit('setTodoLinks', response.data.todos.links)
      window.scrollTo(0, 0)
    } catch (error) {
      console.error(error.response.data.message)
    }
  },
  
  async markTodo({ commit }, payload) {
    try {
      const response = await axios.put(`api/todos/${payload.todoId}`, { isCompleted: payload.isCompleted })
      commit('updateTodo', response.data.todo)
    } catch (error) {
      console.error(error.response)
    }
  },

  async deleteTodo({ commit }, payload) {
    try {
      const response = await axios.delete(`api/todos/${payload.todoId}`)
      Swal.fire({ title: response.data.message, icon: 'success' })
      commit('removeTodo', payload.index)
    } catch (error) {
      console.error(error.response)
    }
  },
  
  async findTodo({ commit }, id) {
    commit('setTodo', {})
    try {
      const response = await axios.get(`api/todos/${id}`)
      commit('setTodo', response.data.todo)
    } catch (error) {
      console.error(error.response)
    }
  },

  async updateTodo({ commit }, payload) {
    try {
      const response = await axios.put(`api/todos/${payload.id}`, payload)
      commit('updateTodo', response.data.todo)
      Swal.fire({ title: 'Todo updated!', icon: 'success' })
    } catch (error) {
      console.error(error.response)
    }
  }
}

const mutations = {
  addTodo: (state, todo) => (state.todos.unshift(todo), state.newTodo.todo = ''),
  setTodoErrors: (state, errors) => (state.todoErrors = errors),
  setTodos: (state, todos) => (state.todos = todos),
  setTodo: (state, todo) => (state.todo = todo),
  setTodoLinks: (state, links) => (state.todoLinks = links),
  updateTodo: (state, todo) => (state.todos[state.todos.findIndex(data => data.id == todo.id)] = todo),
  removeTodo: (state, index) => (state.todos.splice(index, 1))
}

export default {
  state, 
  getters,
  actions,
  mutations
}