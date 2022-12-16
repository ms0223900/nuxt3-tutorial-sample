<template>
  <div class="main--wrapper">
    <h1 class="text-6xl font-bold text-green-500">Pinia Sample Page</h1>
    <hr />
    <div class="mb-2 p-2 border-2 border-cyan-300 border-solid rounded-md">
      <p>{{ `Config: ${strConfig}` }}</p>
      <button class="basic-btn" @click="handleAsyncGetConfig">
        {{ "從API更新config" }}
      </button>
      <p>{{ `現在語系: ${lang}` }}</p>
    </div>
    <div class="mb-2 p-2 border-2 border-cyan-300 border-solid rounded-md">
      <label>
        <span>{{ "選擇語言" }}</span>
        <LangSelector />
      </label>
    </div>
    <hr />
    <SayHiButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import LangSelector from "~~/components/pinia-components/LangSelector.vue";
import SayHiButton from "~~/components/pinia-components/SayHiButton.vue";
import useConfigStore from "~~/store";

export default defineComponent({
  name: "PiniaSamplePage",
  components: { LangSelector, SayHiButton },
  setup() {
    useHead({
      title: "Pinia Sample Page",
    });

    const configStore = useConfigStore();

    const handleAsyncGetConfig = async () => {
      const res = await configStore.asyncGetConfig();
      if (res) return window.alert("更新成功!");
      window.alert("更新失敗");
    };

    const strConfig = computed(() => JSON.stringify(configStore.state.config));
    const lang = computed(() => configStore.lang);

    return {
      lang,
      strConfig,
      handleAsyncGetConfig,
    };
  },
});
</script>

<style lang="scss" scoped></style>
