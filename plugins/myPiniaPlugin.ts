import { Ref } from "nuxt/dist/app/compat/capi";
import { PiniaPluginContext } from "pinia";

declare module "pinia" {
  export interface PiniaCustomProperties {
    // you can define simpler values too
    sayHi: Ref<string> | string;
    toggleSayHi: Function;
  }
}

function myPiniaPlugin({ store }: PiniaPluginContext) {
  const HELLO_TEXT = "hello :)";
  const hiTxt = useState(() => HELLO_TEXT);
  store.$state.sayHi = hiTxt;
  store.sayHi = toRef(store.$state, "sayHi");

  const NYA_HALLO_TEXT = "NyaHallo~ -w-";
  const toggleSayHi = () => {
    hiTxt.value = hiTxt.value === HELLO_TEXT ? NYA_HALLO_TEXT : HELLO_TEXT;
  };
  store.toggleSayHi = toggleSayHi;

  store.$subscribe((mutation) => {
    console.log(mutation.type, mutation.storeId);
  });

  return {
    sayHi: hiTxt,
  };
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(myPiniaPlugin);
});
