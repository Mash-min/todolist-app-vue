import { createStore } from 'vuex'
import todos from '@/store/modules/todos'
import users from '@/store/modules/users'

const store = createStore({
  modules: {
    todos,
    users
  }
})

export default store