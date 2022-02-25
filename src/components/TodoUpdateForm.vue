<template>
  <!-- Modal -->
  <div class="modal fade" id="editTodoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="submitTodo">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit todo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa fa-pencil"></i></span>
              <input type="text" class="form-control" v-model="todo.todo">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TodoUpdateForm',
  computed: {
    ...mapGetters(['todo'])
  },
  methods: {
    ...mapActions(['updateTodo']),

    submitTodo() {
      this.updateTodo(this.todo)
    }
  }
}
</script>