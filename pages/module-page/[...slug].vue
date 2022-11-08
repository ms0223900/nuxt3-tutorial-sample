<template>
  <main class="main--wrapper">
    <h1 class="py-8 text-3xl">匹配所有路徑</h1>
    <p>
      路徑slugs:
      <span class="text-blue-500">{{ slug }}</span>
    </p>
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "ModulePage",
  setup() {
    const route = useRoute();
    const slug = route.params.slug;
    return {
      slug,
    };
  },
});
</script>
