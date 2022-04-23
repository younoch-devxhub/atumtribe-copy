<template>
  <div>
    <div
      class="px-2 pb-6 border-2 rounded-lg lg:px-6"
      :class="slider.gradbg ? 'gradbg' : ''"
    >
      <img
        class="rounded-full avater -mt-7"
        :src="slider.avatar"
        :class="slider.gradbg ? 'h-20 w-20 -mt-10' : 'h-14 w-14 -mt-7'"
      />
      <p
        class="mb-6 text-sm font-medium para"
        :class="slider.gradbg ? 'text-white mt-3' : 'mt-6'"
      >
        {{ slider.paragraph }}
      </p>
      <hr class="mb-4" />
      <div class="flex items-center justify-between">
        <div>
          <p class="font-bold" :class="slider.gradbg ? 'text-white' : ''">
            {{ slider.name }}
          </p>
          <p :class="slider.gradbg ? 'text-white' : ''" class="text-sm title">
            {{ slider.title }}
          </p>
        </div>
        <nuxt-img src="images/rating.svg" class="w-4/12" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slider: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.avater {
  border: #2842ef 1px solid;
}
.title {
  color: #a3a7ad;
}
.gradbg {
  background: linear-gradient(133.33deg, #2842ef 0%, #a25ffd 100%);
  box-shadow: 6px 38px 100px rgba(162, 95, 253, 0.2);
}
</style>
