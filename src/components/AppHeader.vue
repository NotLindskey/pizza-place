<template>
  <header>
    <h1 class="site_title">
      <routerLink :to="{ name: 'home' }">~ Pizza Planet ~</routerLink>
    </h1>
    <nav>
      <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink class="Menu" :to="{ name: 'menuLink' }">Menu</RouterLink>
      <RouterLink class="About" :to="{ name: 'aboutLink' }">About</RouterLink>
      <RouterLink class="Admin" :to="{ name: 'adminLink' }">Admin</RouterLink>
    </nav>
    <h2>The #1 Place For Pizza</h2>
  </header>
</template>
