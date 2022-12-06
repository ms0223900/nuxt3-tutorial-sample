<template>
  <div>
    <h1 class="text-6xl font-bold text-center">
      {{ "跳窗顯示API錯誤" }}
    </h1>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ErrorFromApiPage",
  async setup(props) {
    const route = useRoute();
    const { data, error } = await useFetch(
      `/api/error-res/${route.params.slug}`
    );
    if (!error.value) return { error };

    // server端跳轉用
    if (!process.client) {
      throw showError({
        statusCode: error.value.status,
        statusMessage: error.value.statusMessage,
      });
    }
    // client端跳轉用
    if (process.client) {
      window.alert(error.value.message);
    }
    return {
      error,
    };
  },
});
</script>

<style lang="scss" scoped></style>
