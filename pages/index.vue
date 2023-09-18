<template>
  <header class="hero">
    <div class="flex flex-col px-10 container mx-auto">
      <h1 class="text-white">Hello, My name is Seekaplayer</h1>
      <p>Welcome to my website, enjoy your stay here!</p>
      <div class="flex gap-5 flex-col md:flex-row justify-center">
        <NuxLink class="btn w-full text-center" to="/about">About Me</NuxLink>
        <NuxtLink
          class="btn w-full text-center"
          to="https://linktr.ee/seekaplayer"
          target="_blank"
          >Connect with Me</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script setup>
  definePageMeta({
    layout: "homepage",
  });
</script>

<style scoped>
  .hero {
    background: url("/images/hero.jpg") no-repeat center center;
    background-attachment: fixed;
    background-size: cover;
    color: #fff;
    max-width: 100%;
    padding: 10em 0;
  }
</style>
