// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon"],
  image: {
    dir: "assets/images",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Seekaplayer",

      meta: [
        {
          name: "og:title",
          content: "Seekaplayer",
        },
        {
          name: "og:site_name",
          content: "Seekaplayer",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:description",
          content:
            "Seekaplayer is a Gamer, Live streamer, & and Content Creator",
        },
        { name: "og:url", content: "https://seekaplayer.com" },
        {
          name: "description",
          content:
            "Seekaplayer is a Gamer, Live streamer, & and Content Creator",
        },
        {
          name: "keywords",
          content:
            "Twitch Streamer, Kick Streamer, YouTuber, Content Creator, Streamer, Gamer, Live Gaming, Web Developer, Web Designer, Coder, Live Coding",
        },
      ],
    },
  },
});
