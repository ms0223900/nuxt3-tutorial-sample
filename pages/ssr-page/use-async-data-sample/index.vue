<template>
  <div
    v-if="data"
    class="flex items-center justify-center flex-col h-[100vh] text-center"
  >
    <h1 class="text-5xl pb-2">{{ `${USER_AMOUNT} user list: ` }}</h1>
    <div v-for="(user, i) in data" :key="i" class="pb-4">
      <div>
        {{ `Username: ${user.name}` }}
      </div>
      <p>{{ `Descp: ${user.description}` }}</p>
    </div>
    <button>{{ "+1" }}</button>
  </div>
  <div v-else>
    {{ "Loading..." }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

const USER_AMOUNT = 10;

export default defineComponent({
  name: "UseAsyncDataSample",
  async setup() {
    const asyncFetchUserList = (userAmount: number) => () => {
      const fetchUser = () => $fetch("/api/user");
      const fetchUserListFns = Array(userAmount).fill(0).map(fetchUser);
      return Promise.all(fetchUserListFns);
    };

    const asynFn = asyncFetchUserList(USER_AMOUNT);

    const { data, pending } = useAsyncData(asynFn, {
      lazy: true,
    });

    return {
      USER_AMOUNT,
      data,
      pending,
    };
  },
});
</script>

<style lang="scss" scoped></style>
