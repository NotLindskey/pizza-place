<script setup>
import { ref } from 'vue'
import useAuth from '@/composables/useAuth'
const { signUp, errorMessage, toggleModal, signInModalOpen, logIn, logOut, userData } = useAuth()
const formData = ref({
  email: '',
  password: ''
})
</script>

<template>
  <button v-if="!userData" @click="toggleModal" class="sign_in_btn">Sign in</button>
  <button v-else @click="logOut" class="sign_in_btn">Sign out</button>
  <div v-if="signInModalOpen" class="modal">
    <div class="modal_content">
      <span @click="toggleModal" class="close_modal">&#10060;</span>
      <p class="modal_text">Please log in to continue</p>
      <span class="error_message">{{ errorMessage }}</span>
      <form>
        <div class="form_group">
          <label for="email">Email address</label>
          <input type="email" id="email" placeholder="Enter email" v-model="formData.email" />
        </div>
        <div class="form_group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            v-model="formData.password"
          />
        </div>
        <button @click.prevent="logIn(formData.email, formData.password)" type="button">
          Sign in
        </button>
        <button @click.prevent="signUp(formData.email, formData.password)" type="button">
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal_content {
  background: whitesmoke;
  width: 80vw;
  padding: 1rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  color: rgb(76, 76, 76);
  text-shadow: none;
}

.modal_content button:first-of-type {
  margin: 1rem;
  background-color: rgb(163, 203, 163);
}

.modal_content button:hover {
  transform: scale(1.03);
}

.close_modal {
  align-self: flex-end;
  cursor: pointer;
}

.modal_text {
  align-self: center;
}

.error_message {
  margin-left: 1rem;
  color: rgb(255, 104, 104);
}

.sign_in_btn {
  border: none;
  align-self: flex-end;
}

.sign_in_btn:hover {
  color: rbg(161, 132, 132);
}

@media (min-width: 900px) {
  .modal_content {
    width: 40vw;
  }
}
</style>
