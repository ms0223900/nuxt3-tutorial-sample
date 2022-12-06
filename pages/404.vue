<template>
  <div
    class="
      flex
      items-center
      justify-center
      flex-col
      h-[100vh]
      text-center
      bg-gradient-to-b
      from-cyan-50
      to-blue-300
    "
  >
    <h1 class="text-6xl font-bold text-green-500">自訂404😨</h1>
    <p class="pt-4 text-3xl">找不到路😨</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "NotFoundPage",
  setup() {
    useHead({
      title: "Not Found 404",
    });
  },
});
</script>
