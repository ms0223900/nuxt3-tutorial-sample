<template>
  <NuxtErrorBoundary>
    <template #default>
      <ErrorInsideComponent />
    </template>
    <template #error="{ error }">
      <div class="flex flex-col justify-center items-center h-[100vh]">
        <p class="text-3xl">
          {{ `An error occured: ` }}
          <span class="text-red-500 text-xl">
            {{ error.value }}
          </span>
        </p>
        <button class="basic-btn mb-2" @click="handleClearErr">
          Clear ERROR(This does NOT work)
        </button>
        <button class="basic-btn" @click="handleReload">RELOAD</button>
      </div>
    </template>
  </NuxtErrorBoundary>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ErrorBoundarySample",
  setup(props) {
    const handleClearErr = () => {
      clearError();
    };
    const handleReload = () => {
      window.location.reload();
    };
    return {
      handleClearErr,
      handleReload,
    };
  },
});
</script>
