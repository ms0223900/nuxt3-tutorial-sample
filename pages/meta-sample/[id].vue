<template>
  <div class="text-center pt-4">
    <h1 class="text-4xl">{{ "Article" }}</h1>
    <h2 class="text-2xl">{{ data?.title }}</h2>
    <p>{{ data?.brief }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

interface SingleArticle {
  id: string;
  title: string;
  brief: string;
  content: string;
  sns_cover_img_src: string;
}

export default defineComponent({
  name: "MetaSamplePage",
  async setup() {
    const route = useRoute();

    useHead({
      title: computed(() => data.value?.title || "文章頁面"),
      meta: computed(() => [
        {
          name: "description",
          content: data.value?.content,
        },
        {
          name: "og:title",
          content: data.value?.title,
        },
        {
          name: "og:description",
          content: data.value?.brief,
        },
        {
          name: "og:image",
          content: data.value?.sns_cover_img_src,
        },
      ]),
    });

    const { data } = await useFetch<SingleArticle>(
      `/api/article/${route.params.id}`
    );

    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped></style>
