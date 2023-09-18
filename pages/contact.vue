<template>
  <div
    class="container mx-auto px-5 md:px-0 flex flex-col lg:flex-row gap-5 md:gap-10"
  >
    <main class="w-full lg:w-9/12">
      <header class="mb-5">
        <h1>Contact Me!</h1>
        <hr />
      </header>
      <Form />
    </main>
    <aside class="shrink w-full lg:w-1/4">
      <header>
        <h2>Follow Me</h2>
        <hr />
        <p class="text-lg xl:text leading-relaxed font-thin">
          Hey there! If you've clicked your way on over to this corner of the
          website, you're likely looking for a way to connect—and, that's just
          fantastic! I love explorers like you.
        </p>
        <p class="text-lg xl:text leading-relaxed font-thin">
          I've got quite a few options here... If you're interested in
          discussing code, gaming or just want to share your favorite meme, feel
          free to drop me a message. My inbox is always open for a good chat.
        </p>
        <p class="text-lg xl:text-xl leading-relaxed font-thin">
          If you're burning with a question, perhaps about streaming or
          something else, Twitter is your best bet to reach me. Just tag me
          <NuxtLink
            class="text-cyan-600 font-bold"
            to="https://twitter.com/seekaplayer"
            target="_blank"
            >@seekaplayer</NuxtLink
          >
          and for all you coding enthusiasts, meet me on Github.
        </p>
        <p class="text-lg xl:text leading-relaxed font-thin">
          So, don't hesitate to reach out. Looking forward to chatting with
          you!"
        </p>
      </header>
      <header>
        <h2>My Socials</h2>
        <hr />
        <div
          class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-3 gap-y-5 sm:gap-y-10 lg:gap-y-10 mx-auto mt-10 place-items-center"
        >
          <Socials />
        </div>
      </header>
    </aside>
  </div>
</template>

<script setup></script>

<style scoped>
  h1,
  h2 {
    font-size: 2em;
  }
</style>
