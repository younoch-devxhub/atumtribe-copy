<template>
  <section>
    <div class="flex items-center">
      <figure class="icon-grad">
        <img :src="icon" />
        <!-- <img src="~/assets/icons/agreement.svg" /> -->
      </figure>
      <p class="ml-3 text-xl font-semibold">
        {{ title1 }} <span class="text-grad"> {{ title2 }} </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      link: `/_nuxt`,
    }
  },
  props: ['icon', 'title1', 'title2'],
}
</script>

<style scoped>
.icon-grad {
  @apply flex align-middle justify-center px-1 py-2;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(133.33deg, #2842ef 0%, #a25ffd 100%);
  width: fit-content;
}
.icon-grad img {
  width: 80%;
}
.text-grad {
  background-image: -webkit-linear-gradient(#2842ef 0%, #a25ffd 100%);
  border-bottom: 2.5px solid #2842ef;
  -webkit-background-clip: text, border;
  -webkit-text-fill-color: transparent;
}
</style>