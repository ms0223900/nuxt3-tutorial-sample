<template>
  <div
    class="main--wrapper align-top justify-start pt-10 bg-gradient-to-br from-white to-indigo-100"
  >
    <div>
      <h1>Chooose You Favorite Commodities :)</h1>
    </div>
    <div class="flex gap-2">
      <CommodityItem
        v-for="(com, i) in COMMIDITY_LIST"
        :key="i"
        :commodityItemProps="com"
      />
    </div>
    <div class="pt-4">
      <h2 class="text-3xl">Your WishList:</h2>
      <ul>
        <li
          class="flex gap-2 justify-center items-center py-2"
          v-for="(com, i) in commidityListData"
          :key="i"
        >
          {{ `${com.name}--${com.price}` }}
          <button class="remove-btn" @click="handleRemoveCommodityItem(i)">
            {{ "x" }}
          </button>
        </li>
      </ul>
      <hr />
      <p class="text-blue-700 text-xl">{{ `Total: ${totalPrice}` }}</p>
      <hr />
      <button class="basic-btn" @click="handleClearAll">Clear All</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import CommodityItem from "~~/components/pinia-components/CommodityItem.vue";
import useCartStore, { SingleCommodity } from "~~/store/useCartStore";

const COMMIDITY_LIST: SingleCommodity[] = [
  {
    name: "PC",
    price: 2000,
  },
  {
    name: "switch",
    price: 399,
  },
  {
    name: "iPhone16",
    price: 699,
  },
];

export default defineComponent({
  components: { CommodityItem },
  name: "Cart",
  setup() {
    const cartStore = useCartStore();
    const commidityListData = computed(() => cartStore.state.commodityWishList);

    const handleClearAll = () => {
      const confirmed = window.confirm(
        "Are you sure clear all wish list commodities?"
      );
      if (!confirmed) return;
      cartStore.resetState();
    };

    return {
      COMMIDITY_LIST,
      commidityListData,
      totalPrice: computed(() => cartStore.whishListTotalPrice),
      handleRemoveCommodityItem: cartStore.handleRemoveCommodityItem,
      handleClearAll,
    };
  },
});
</script>

<style lang="css" scoped>
.remove-btn {
  @apply flex items-center justify-center rounded-full p-2 w-8 h-8 bg-red-200 hover:bg-red-300;
}
</style>
