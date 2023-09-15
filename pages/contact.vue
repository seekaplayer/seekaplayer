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
        <p>
          Hey there! If you've clicked your way on over to this corner of the
          website, you're likely looking for a way to connect—and, that's just
          fantastic! I love explorers like you.
        </p>
        <p>
          I've got quite a few options here... If you're interested in
          discussing code, gaming or just want to share your favorite meme, feel
          free to drop me a message. My inbox is always open for a good chat.
        </p>
        <p>
          If you're burning with a question, perhaps about streaming or
          something else, Twitter is your best bet to reach me. Just tag me
          @seekaplayer and for all you coding enthusiasts, meet me on Github.
        </p>
        <p>
          So, don't hesitate to reach out. Looking forward to chatting with
          you!"
        </p>
      </header>
      <header>
        <h2>My Socials</h2>
        <hr />
        <Icon
          name="game-icons:ace"
          :style="{ color: 'blue', fontSize: '2em' }"
        />
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
  h2 {
  }
</style>
