<template>
  <div class="shadow-md p-4 bg-white rounded-md">
    <h2>
      {{ commodityItemProps.name }}
    </h2>
    <p>{{ `Price: $${commodityItemProps.price}` }}</p>
    <hr class="my-2" />
    <div>
      <button
        class="add-delete-btn delete"
        @click="handleDeleteCommidityFromWishList"
      >
        {{ "-" }}
      </button>
      <button class="add-delete-btn" @click="handleAddCommidityToWishList">
        {{ "+" }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import useCartStore from "~~/store/useCartStore";
import { commodityItemProps } from "./types";

export default defineComponent({
  name: "commodityItem",
  props: {
    commodityItemProps: {
      type: Object as PropType<commodityItemProps>,
      default: () => ({}),
    },
  },
  setup(props) {
    const { setState } = useCartStore();

    // 新增一筆商品
    const handleAddCommidityToWishList = () => {
      setState((s) => ({
        commodityWishList: [...s.commodityWishList, props.commodityItemProps],
      }));
    };

    // 從列表中移除符合該商品名稱的「第一筆」商品
    const handleDeleteCommidityFromWishList = () => {
      setState((s) => {
        const newCommidityWishList = [...s.commodityWishList];
        const idx = newCommidityWishList.findIndex(
          (val) => val.name === props.commodityItemProps.name
        );
        if (idx === -1)
          return {
            commodityWishList: newCommidityWishList,
          };

        newCommidityWishList.splice(idx, 1);
        return {
          commodityWishList: newCommidityWishList,
        };
      });
    };

    return {
      handleDeleteCommidityFromWishList,
      handleAddCommidityToWishList,
    };
  },
});
</script>

<style lang="css" scoped>
.add-delete-btn {
  @apply p-2 bg-blue-300 rounded-sm mx-2;
  @apply font-bold;
}

.delete {
  @apply bg-blue-200;
}
</style>
