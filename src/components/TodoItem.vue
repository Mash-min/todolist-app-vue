<template>
  <div 
    class="todo card m-1"
    :class="{ 'border-success' : todo.isCompleted == true }"
    v-for="(todo, index) in todos"
    :key="todo.id">
    <div class="dropdown position-absolute top-0 end-0">
      <a 
        class="btn m-1" 
        href="#" role="button" 
        data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa fa-chevron-down text-muted"></i>
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <button 
            class="dropdown-item"
            data-bs-toggle="modal" 
            data-bs-target="#editTodoModal"
            @click="findTodo(todo.id)">
            Edit
          </button>
        </li>
        <li>
          <button 
            class="dropdown-item"
            @click="deleteTodo({ todoId: todo.id, index })">
            Delete
          </button>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <span class="todo-name">
          <i
            @click="markTodo({ todoId: todo.id, isCompleted: false })" 
            v-if="todo.isCompleted == true" class="fa fa-check text-success"></i> 
          <i 
            @click="markTodo({ todoId: todo.id, isCompleted: true })" 
            v-else class="fa fa-circle-o"></i> 
          {{ todo.todo }} <br>
          <small class="text-muted">Posted at {{ todo.created_at }}</small>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoItem',
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions([
      'markTodo',
      'deleteTodo',
      'findTodo'
      ])
  }
}
</script>