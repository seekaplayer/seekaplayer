<template>
  <Header />
  <div>
    <slot />
  </div>
  <footer class="text-center p-5 text-sm">
    &copy; Seekaplayer, {{ year }}. All rights reserved.
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear();
</script>

<style scoped></style>
