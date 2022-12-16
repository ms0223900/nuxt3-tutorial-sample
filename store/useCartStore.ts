export interface SingleCommodity {
  name: string;
  price: number;
}

export interface CartStoreState {
  commodityWishList: SingleCommodity[];
}

type NewState =
  | Partial<CartStoreState>
  | ((state: CartStoreState) => Partial<CartStoreState>);

const makeInitCartStoreState = (
  state?: Partial<CartStoreState>
): CartStoreState => ({
  commodityWishList: [],
  ...state,
});

const useCartStore = definePiniaStore("cart", () => {
  const state = ref(makeInitCartStoreState());

  const setState = (newState: NewState) => {
    const _newState =
      typeof newState === "function" ? newState(state.value) : newState;
    state.value = {
      ...state.value,
      ..._newState,
    };
    console.log(state.value);
  };

  const resetState = (otherState?: Partial<CartStoreState>) => {
    setState(makeInitCartStoreState(otherState));
  };

  const handleRemoveCommodityItem = (idx: number) => {
    setState((s) => {
      const newCommidityWishList = [...s.commodityWishList];
      newCommidityWishList.splice(idx, 1);
      return {
        commodityWishList: newCommidityWishList,
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
    handleRemoveCommodityItem,
  };
});

export default useCartStore;
