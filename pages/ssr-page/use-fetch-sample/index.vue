<template>
  <div class="flex items-center justify-center flex-col h-[100vh] text-center">
    <h1 class="text-2xl">{{ "User" }}</h1>
    <hr />
    <div>
      {{ `Username: ${data?.name}` }}
    </div>
    <p>{{ `Descp: ${data?.description}` }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "UseFetchSample",
  async setup() {
    const options = {
      query: {
        a: "a",
        b: "b",
      },
      method: "GET",
    };
    const { data, pending } = await useFetch("/api/user", options);
    // /api/user?a=a&b=b

    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped></style>
