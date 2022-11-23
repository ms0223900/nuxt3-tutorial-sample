<template>
  <ClientOnly>
    <client-only-component />
  </ClientOnly>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import ClientOnlyComponent from "./ClientOnlyComponent.vue";

export default defineComponent({
  components: { ClientOnlyComponent },
  name: "ClientOnlySample",
  setup() {},
});
</script>

<style lang="scss" scoped></style>
