<template>
  <p>
    {{ `LocalStorage data: ${data}` }}
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "ClientOnlySample",
  setup() {
    const data = window.localStorage.getItem("hi");
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped></style>
