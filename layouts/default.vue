<template>
  <section id="main">
    <Navbar
      v-if="this.$route.name !== 'pdf'"
      :mobileMenuModalShow="mobileMenuModalShow"
    ></Navbar>
    <div :class="this.$route.name == 'pdf' ? '' : 'pt-20'" @click="mobileMenu">
      <Nuxt />
    </div>
  </section>
</template>
<script>
import Navbar from '~/components/Navbar'

export default {
  comments: {
    Navbar,
  },
  data() {
    return {
      mobileMenuModalShow: true,
    }
  },
  methods: {
    mobileMenu() {
      this.mobileMenuModalShow = !this.mobileMenuModalShow
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

*,
p,
h1,
h2,
h3 {
  font-family: 'DM Sans', sans-serif;
  scroll-behavior: smooth;
}

.container {
  width: 85% !important;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 92% !important;
  }
}
.text-grad {
  background-image: -webkit-linear-gradient(#2842ef 0%, #a25ffd 100%);
  border-bottom: 2.5px solid #2842ef;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.icon-grad {
  @apply flex align-middle justify-center px-1 py-2;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(133.33deg, #2842ef 0%, #a25ffd 100%);
  width: fit-content;
}
.icon-grad img {
  width: 80%;
}
</style>
