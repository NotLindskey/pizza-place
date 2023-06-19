<script setup>
import { ref } from 'vue'
const showToggleAdmin = ref(true)
</script>

<template>
  <section class="admin_section">
    <header class="admin_section_header">
      <h3>Toggle Admin Privileges</h3>
      <small class="toggleBtn" @click="showToggleAdmin = !showToggleAdmin">{{
        showToggleAdmin ? 'hide' : 'show'
      }}</small>
    </header>
  </section>
</template>
