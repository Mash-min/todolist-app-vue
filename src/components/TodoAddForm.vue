<template>
  <div class="input-container m-1">
    <form @submit.prevent="submitTodo">
      <div class="d-flex">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">Add todo</span>
          <input 
            type="text" class="form-control" placeholder="Enter your todo here..." 
            v-model="newTodo.todo"
            :class="{ 'is-invalid' : todoErrors.todo }">
        </div>
        <button class="btn btn-sm btn-outline-secondary ms-1" type="submit">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoAddForm',
  computed: {
    ...mapGetters([
        'newTodo',
        'todoErrors'
        ])
  },
  methods: {
    ...mapActions(['addTodo']),

    submitTodo() {
      this.addTodo(this.newTodo)
    }
  }
}
</script>