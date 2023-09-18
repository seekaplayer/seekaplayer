<template>
  <div
    v-for="(partner, index) in partnerData"
    :key="index"
    class="bg-slate-50 drop-shadow-lg p-5 flex flex-col justify-between gap-5"
  >
    <header>
      <Nuxt-img class="logo" :src="`${partner.logo}`" alt="Company Name" />
      <h2 class="text-center">{{ partner.name }}</h2>
      <hr class="mt-4" />
    </header>
    <p class="grow text-xl leading-relaxed font-thin m-0">
      {{ partner.details }}
    </p>

    <NuxtLink
      :target="`${linkType}`"
      class="btn block w-full text-center"
      :to="`${partner.url}`"
      >View Deal</NuxtLink
    >
  </div>
</template>
<script setup>
  const partnerData = [
    {
      name: "Akamai/Linode",
      logo: "/images/akamai-logo.svg",
      details:
        "Spin up servers instantly and easily with Linode. When you visit my link you'll get $100 in free credit to use to test out Linode. Please note, this credit will expire in 60 days so use it!",
      linkType: "_blank",
      url: "https://linode.com/seekaplayer",
    },
    {
      name: "Popl",
      logo: "/images/popl.png",
      details:
        "You have got to check out Popl! This platform is amazing! It allows you to share your information and gather information from people you meet. You can use their app or purchase devices and with a tap can get your information out there to anybody with a mobile device. Check it out! Also, if you use my link you get 20% off!",
      linkType: "_blank",
      url: "https://popl.co/?ref=seekaplayer",
    },
    {
      name: "Express VPN",
      logo: "/images/express.svg",
      details:
        "I have worked with Express VPN to give my viewers a great deal. You can get 12 months + 3 Free months (15 months total) of this great VPN Service for only $99!",
      linkType: "_blank",
      url: "https://www.xvgolink.com/?offer=3monthsfree&a_fid=seekaplayer",
    },
    {
      name: "Humble Bundle",
      logo: "/images/humble.png",
      details:
        "Humble Bundle sells games, software, and more. Their mission is to support charity while providing awesome content to customers at great prices.",
      linkType: "_blank",
      url: "https://www.humblebundle.com/monthly?partner=seekaplayer",
    },
    {
      name: "Aimbot Energy",
      logo: "/images/aimbot.webp",
      details:
        "Aimbot Energy is uniquely powerful, consistently delicious, and completely free of sugar and calories. It almost feels too good to be true. Feel the difference for yourself. Step into the future of energy drinks. Use code SEEAKAPLAYER to save 15%!",
      linkType: "_blank",
      url: "https://aimbotenergy.com/discount/SEEKAPLAYER",
    },
  ];
</script>
<style scoped>
  .logo {
    max-width: 50%;
    height: 75px;
    margin: 0 auto 1.125em;
  }
</style>
