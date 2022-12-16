<template>
  <div class="text-xl">
    <p>
      {{ `Hello intl key now: ` }}
      <span class="text-red-600">
        {{ sayHi }}
      </span>
    </p>
    <button class="m-4 basic-btn" @click="handleSayHi">
      {{ "Say Hi" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import config from "~~/server/api/config";
import useConfigStore, { GlobalConfig } from "~~/store";

const INTL = {
  zh: {
    "hello :)": "你好 :)",
    "NyaHallo~ -w-": "喵哈囉 -W- y",
  },
  jp: {
    "hello :)": "こんにちは :)",
    "NyaHallo~ -w-": "にゃはっろ -W- y",
  },
  en: {
    "hello :)": "hello :)",
    "NyaHallo~ -w-": "NyaHallo~ -w-",
  },
};

const getIntlMessage =
  (lang: GlobalConfig["lang"]) => (key: keyof typeof INTL["zh"]) =>
    INTL[lang] ? INTL[lang][key] : "";

export default defineComponent({
  name: "SayHiButton",
  setup() {
    const configStore = useConfigStore();

    const handleSayHi = () => {
      // console.log(configStore.sayHi);
      const message = getIntlMessage(configStore.getters.lang)(
        configStore.sayHi as any
      );
      window.alert(message);
      handleToggleHelloContent();
    };

    const handleToggleHelloContent = () => {
      configStore.toggleSayHi();
    };

    return {
      sayHi: computed(() => configStore.sayHi),
      handleSayHi,
      handleToggleHelloContent,
    };
  },
});
</script>

<style lang="scss" scoped></style>
