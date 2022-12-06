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
      from-red-50
      to-orange-300
    "
  >
    <h1 class="text-6xl font-bold text-green-500">發生錯誤了 😲</h1>
    <p class="pt-4 text-3xl">
      {{ "錯誤是: " }}
      <span class="text-red-600 text-2xl">{{ error.message }}</span>
    </p>

    <NuxtLink :to="`/error-page/error-from-api/${Math.random()}`">
      {{ "Client端跳轉測試" }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ErrorPage",
  setup(props) {
    const error = useError();
    return {
      error,
    };
  },
});
</script>
