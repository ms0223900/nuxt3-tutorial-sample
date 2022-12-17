import useCommonStore, { MakeInitStateFn } from "./useCommonStore";

export interface SingleCommodity {
  name: string;
  price: number;
}

export interface CartStoreState {
  commodityWishList: SingleCommodity[];
}

const makeInitCartStoreState: MakeInitStateFn<CartStoreState> = (
  state
): CartStoreState => ({
  commodityWishList: [],
  ...state,
});

const useCartStore = definePiniaStore("cart", () => {
  // 直接引用就好!
  const { state, setState, resetState } = useCommonStore<CartStoreState>(
    makeInitCartStoreState
  );

  // add new item
  const addNewCommodity = (newCommodity: SingleCommodity) => {
    setState((s) => ({
      commodityWishList: [...s.commodityWishList, newCommodity],
    }));
  };

  // remove old item
  const removeCommodity = (commodityName: SingleCommodity["name"]) => {
    setState((s) => {
      const newWishList = [...s.commodityWishList];
      const idx = newWishList.findIndex(
        (commidity) => commidity.name === commodityName
      );
      if (idx === -1)
        return {
          commodityWishList: newWishList,
        };
      newWishList.splice(idx, 1);
      return {
        commodityWishList: newWishList,
      };
    });
  };

  const whishListTotalPrice = computed(() =>
    state.value.commodityWishList.reduce((p, n) => p + n.price, 0)
  );

  return {
    state,
    whishListTotalPrice,
    setState,
    resetState,
    addNewCommodity,
    removeCommodity,
  };
});

export default useCartStore;
