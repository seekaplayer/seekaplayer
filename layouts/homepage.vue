<template>
  <HomeHeader />
  <div>
    <slot />
  </div>
  <Footer />
</template>

<script setup></script>

<style scoped>
  header {
    background: #1c1917;
  }
  .logo {
    height: 75px;
  }
  nav ul li a {
    color: #fff;
    font-size: 1.125rem;
  }
  nav ul li a:hover {
    color: #f8fafc;
    transition: all 0.3s;
    border-bottom: 1px solid rgba(248, 250, 252, 1);
  }
</style>
