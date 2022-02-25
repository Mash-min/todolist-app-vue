<template>
  <Nav />
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4 class="greetings m-1 mb-3">Hello {{ user.username }}!</h4>
      <TodoAddForm />
      <!-- Todo item -->
      <TodoItem />
      <!-- Pagination -->
      <Pagination />
      <!-- Todo Update Form -->
      <TodoUpdateForm />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Nav from '@/components/Nav'
import Pagination from '@/components/Pagination'
import TodoItem from '@/components/TodoItem'
import TodoAddForm from '@/components/TodoAddForm'
import TodoUpdateForm from '@/components/TodoUpdateForm'

export default {
  name: 'Todos',
  data() {
    return {
      url: 'api/todos'
    }
  },
  components: {
    Nav,
    Pagination,
    TodoItem,
    TodoAddForm,
    TodoUpdateForm
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['fetchTodos'])
  },
  created() {
    this.fetchTodos(this.url)
  }
}
</script>