<template>
  <div class="text-center">
    <h1 class="py-8 text-3xl">
      {{ "Nested Wrapper" }}
    </h1>

    <div class="m-auto p-8 max-w-3xl bg-slate-300">
      <NuxtPage />
    </div>
    <div class="flex gap-2 justify-center py-2">
      <NuxtLink class="nuxt-link-btn" to="/">
        {{ "Go Home" }}
      </NuxtLink>
      <NuxtLink class="nuxt-link-btn" to="/nested/nested-content-1">
        {{ "To nested 1" }}
      </NuxtLink>
      <NuxtLink class="nuxt-link-btn" to="/nested/nested-content-2">
        {{ "To nested 2" }}
      </NuxtLink>
    </div>
  </div>
</template>
