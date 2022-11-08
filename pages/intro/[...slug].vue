<template>
  <div class="flex items-center justify-center flex-col h-[100vh] text-center">
    <div class="absolute left-4 top-4">
      <img src="~/assets/images/nuxt3-logo.png" />
      <p
        class="text-left pl-10 text-[36px] leading-[1] opacity-80 text-green-500 font-bold"
      >
        {{ firstCapitalizedDataKey }}
      </p>
    </div>
    <h1 class="text-[160px] font-black text-green-500">{{ title }}</h1>
    <ul
      class="flex flex-col items-center list-disc leading-[2] text-[80px] pt-4 text-slate-600"
      :style="{ lineHeight: 1.8 }"
    >
      <li
        v-for="(c, i) in matched.contentList"
        :key="i"
        class="whitespace-pre-wrap"
      >
        {{ c }}
      </li>
    </ul>
    <div class="flex gap-4 items-center text-3xl opacity-5 hover:opacity-100">
      <NuxtLink :to="prevRoute">
        {{ "<" }}
      </NuxtLink>
      <NuxtLink :to="nextRoute">
        {{ ">" }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import data from "./data";

export default defineComponent({
  name: "IntroPage",
  setup() {
    const route = useRoute();
    const slug = route.params.slug;
    // console.log(slug);

    const dataKey = slug[0] as string;
    const id = Number(slug[1] as string);

    let matched = data[dataKey][id];
    if (!matched) {
      matched = {
        title: "",
        contentList: [],
      };
    }

    const title = computed(() => `${id + 1}. ${matched.title}`);
    const firstCapitalizedDataKey = computed(
      () => `${dataKey[0].toLocaleUpperCase()}${dataKey.slice(1)}介紹`
    );

    const prevRoute = computed(
      () => `/intro/${dataKey}/${id === 0 ? id : id - 1}`
    );
    const nextRoute = computed(() => `/intro/${dataKey}/${id + 1}`);

    return {
      matched,
      dataKey,
      firstCapitalizedDataKey,
      title,
      prevRoute,
      nextRoute,
    };
  },
});
</script>

<style lang="scss" scoped></style>
