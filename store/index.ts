import { defineStore } from "pinia";

export interface GlobalConfig {
  username?: string | null;
  notificationList: string[];
  lang: "zh" | "jp" | "en";
}

const initConfig: GlobalConfig = {
  notificationList: [],
  lang: "zh",
};

const useConfigStore = defineStore("config", () => {
  // state
  const config = ref(initConfig);
  const state = {
    config,
  };

  // action
  const setConfig = (newConfig: Partial<GlobalConfig>) => {
    // console.log("pinia: ", pinia);
    // console.log("pinia.state: ", pinia.state);
    config.value = {
      ...config.value,
      ...newConfig,
    };
  };
  // async action
  const asyncGetConfig = async () => {
    const configData = await $fetch("/api/config");
    // console.log("configData: ", configData);
    if (!configData) return false;

    setConfig(configData);
    return true;
  };
  const actions = {
    setConfig,
    asyncGetConfig,
  };

  // getter
  const lang = computed(() => config.value.lang);
  const notificationList = computed(() => config.value.notificationList);

  // getter提供另外一種方法接口，模擬options的寫法
  const getters = {
    lang,
    notificationList,
  };

  return {
    config: readonly(config),
    lang,
    state,
    getters,
    actions,
    setConfig,
    asyncGetConfig,
  };
});

export default useConfigStore;
