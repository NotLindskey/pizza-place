<script setup></script>

<template>
  <main class="hot">
    <div class="hot_text">
      <h3>Hot out the Oven!</h3>
      <p class="hot_pizza_name">Vegetarian Hot Pizza</p>
      <p class="hot_pizza_description">Our signature vegetarian, but with a kick...</p>
      <RouterLink :to="{ name: 'menuLink' }">Let's Order</RouterLink>
    </div>
    <img
      class="hot_img"
      src="../assets/pizza-planet-v3-images-main/images/fire.jpg"
      alt="Pizza oven image
      "
    />
  </main>
</template>

<style scoped>
.hot {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hot_img,
.hot_text {
  flex: 1;
  padding: 2rems;
  text-align: center;
}

.hot_text h3 {
  color: #bb2118;
}

.hot_pizza {
  font-size: 1.8rem;
}

.hot_pizza_description {
  font-style: italic;
  font-weight: 300;
}

@media (min-width: 900px) {
  .hot {
    flex-direction: row;
  }
}
</style>
