<template>
  <select class="p-2 bg-slate-200 rounded-md" @change="handleSelectLang">
    <option
      v-for="lang in LANG_LIST"
      :key="lang.value"
      :value="lang.value"
      :selected="langValue === lang.value"
    >
      {{ lang.text }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import useConfigStore from "~~/store";

const LANG_LIST: { value: string; text: string }[] = [
  {
    value: "",
    text: "請選擇語言",
  },
  {
    value: "zh",
    text: "中文",
  },
  {
    value: "en",
    text: "英文",
  },
  {
    value: "jp",
    text: "日文",
  },
];

export default defineComponent({
  name: "LangSelector",
  setup() {
    const configStore = useConfigStore();

    const handleSelectLang = (e: any) => {
      // console.log((configStore.$state as any).sayHi);
      const langVal = e.target.value;
      if (!langVal) return;

      configStore.setConfig({ lang: e.target.value });
    };

    return {
      LANG_LIST,
      langValue: computed(() => configStore.getters.lang),
      handleSelectLang,
    };
  },
});
</script>

<style lang="scss" scoped></style>
