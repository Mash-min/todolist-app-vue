<template>
  <Nav />

  <div class="row mt-5">
    <div class="col-md-4 offset-md-4">
      <ul class="list-group">
        <form @submit.prevent="submitUser">
          <li class="list-group-item" style="text-align: center;">
            <h3>Login</h3>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Username:</small>
              <input type="text" class="form-control" placeholder="Enter your username..." v-model="username">
            </div>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Password:</small>
              <input type="password" class="form-control" placeholder="Enter your password..." v-model="password">
            </div>
          </li>
          <li class="list-group-item" style="text-align: center;">
            <div class="d-grid">
              <button class="btn btn-sm btn-primary">
                Login
              </button>
              <small>or</small>
              <router-link to="/register">
                Create account
              </router-link>
            </div>
          </li>
        </form>
      </ul>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    Nav
  },
  methods: {
    ...mapActions(['loginUser']),
    
    submitUser() {
      const payload = {
        username: this.username,
        password: this.password
      }
      this.loginUser(payload)
    }
  }
}
</script>