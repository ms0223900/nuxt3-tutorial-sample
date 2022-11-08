<template>
  <div
    class="flex flex-col items-center justify-center h-[100vh] bg-gradient-to-b from-cyan-50 to-blue-300"
  >
    <h1 class="text-3xl text-center">
      {{ "New Homepage from" }}
      <span class="text-green-600">{{ "pages/index.vue 😃" }}</span>
    </h1>
    <div class="pt-4 flex gap-1">
      <NuxtLink class="nuxt-link-btn" to="/nested/nested-content-1">
        {{ "To nested 1" }}
      </NuxtLink>
      <NuxtLink class="nuxt-link-btn" to="/nested/nested-content-2">
        {{ "To nested 2" }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "Index",
  setup(props) {
    const { count, handleAddCount } = useCounter();
    onMounted(() => {
      handleAddCount(10);
    });
    return {
      count,
      handleAddCount,
    };
  },
});
</script>

<style lang="scss" scoped></style>
