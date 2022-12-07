<template>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <h1 class="text-center">
      {{ "Click button to make an ERROR!" }}
    </h1>
    <hr />
    <button
      class="p-2 bg-slate-200 rounded-xl hover:bg-slate-300"
      @click="handleMakeClientSideErr"
    >
      {{ "Create a randome ERROR!" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ErrorInsideComponent",
  setup() {
    const handleMakeClientSideErr = () => {
      throw createError({
        message: `NEW ERROR: ${~~(Math.random() * 100)}`,
      });
    };

    return {
      handleMakeClientSideErr,
    };
  },
});
</script>
