<template>
  <header class="py-5 md:py-2 shadow sticky top-0 mb-5 md:mb-10 z-10">
    <nav
      class="flex flex-col md:flex-row justify-between items-center container mx-auto px-5 md:px-0"
    >
      <NuxtLink to="/"
        ><Nuxt-img class="logo" src="/images/logo.png" alt="Seekaplayer Logo"
      /></NuxtLink>
      <ul class="flex gap-5 mt-5 md:mt-0">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/partners">Partners</NuxtLink></li>
        <li>
          <NuxtLink to="https://linktr.ee/seekaplayer" target="_blank"
            >Socials</NuxtLink
          >
        </li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
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
