<template>
  <div class="m-1 mt-3 d-flex justify-content-center">
    <nav aria-label="...">
      <ul class="pagination text-dark">
        <li 
          class="page-item"
          :class="{ 'active' : link.active == true, 'disabled' : link.url == null }"
          v-for="link in todoLinks"
          :key="link.id">
          <button 
            class="page-link" 
            @click="fetchTodos(link.url)"
            :class="{ 'disabled' : link.url == null }">
            <span v-if=" link.label == 'Previous' "><i class="fa fa-chevron-left"></i></span>
            <span v-else-if=" link.label == 'Next' "><i class="fa fa-chevron-right"></i></span>
            <span v-else>{{ link.label }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Pagination',
  computed: {
    ...mapGetters(['todoLinks'])
  },
  methods: {
    ...mapActions(['fetchTodos'])
  }
}
</script>