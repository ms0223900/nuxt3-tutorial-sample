<template>
  <div
    class="
      flex
      items-center
      justify-center
      flex-col
      h-[100vh]
      text-center
      bg-gradient-to-b
      from-cyan-50
      to-blue-300
    "
  >
    <h1 class="text-6xl font-bold text-green-500">
      showError() Page Sample | 錯誤頁示範
    </h1>
    <h2>{{ `Throw Error in ${countDownSecs} seconds...` }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

const ERROR_INTERVAL_TIME_SECONDS = 2;

export default defineComponent({
  name: "ErrorPageSample",
  setup(props) {
    useHead({
      title: "ShowError Page Sample | 錯誤頁示範",
    });

    const countDownSecs = ref(ERROR_INTERVAL_TIME_SECONDS);

    const handleThrowError = () => {
      throw showError({
        fatal: true,
        statusCode: 500,
        message: "You got some trouble by `showError()` :(",
      });
    };

    onMounted(() => {
      const countDownTimer = setInterval(() => {
        if (countDownSecs.value <= 0) {
          clearInterval(countDownTimer);
          return;
        }
        countDownSecs.value -= 1;
      }, 1000);

      setTimeout(() => {
        handleThrowError();
        // clearInterval(t);
      }, ERROR_INTERVAL_TIME_SECONDS * 1000);
    });

    return {
      countDownSecs,
    };
  },
});
</script>

<style lang="scss" scoped></style>
