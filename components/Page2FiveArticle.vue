<template>
  <div class="my-6">
    <div class="py-6 font-medium sec4-article">
      <div class="flex items-center">
        <p class="mx-2 text-xl font-semibold lg:ml-6 lg:text-2xl">
          {{ nonGradTitle }} <span class="text-grad"> {{ gradTitle }} </span>
        </p>
      </div>
      <p
        v-html="paragraph"
        class="mx-2 mt-6 text-sm font-normal lg:mx-6 lg:text-base"
      ></p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['nonGradTitle', 'gradTitle', 'paragraph'],
}
</script>
<style scoped>
p {
  color: #121212;
}

.sec4-bg {
  height: 80%;
}
.sec4-article {
  background: #fbf9fe;
  max-width: 100vw;
}
</style>