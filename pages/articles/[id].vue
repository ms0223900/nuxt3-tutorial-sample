<template>
  <main
    class="flex items-center justify-center flex-col h-[100vh] text-center bg-gradient-to-r from-cyan-50 to-blue-100"
  >
    <h1 class="text-6xl font-bold text-cyan-500">文章</h1>
    <p class="text-xl py-4">Id: {{ id }}</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArticlePage",
  setup() {
    const route = useRoute();
    const id = computed(() => route.params.id);

    return {
      id,
    };
  },
});
</script>
