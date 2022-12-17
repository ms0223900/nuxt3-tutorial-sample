import { Ref } from "nuxt/dist/app/compat/capi";

// 型別建構，一開始先寫好抽象的State型別
export type MakeInitStateFn<State extends any> = (
  options?: Partial<State>
) => State;

type NewState<State> = Partial<State> | ((state: State) => Partial<State>);

const useCommonStore = <State>(
  makeInitStateFn: MakeInitStateFn<State>,
  initParams?: Partial<State>
) => {
  // 函式的方式彈性生成初始state
  const initState = makeInitStateFn(initParams);
  const state = ref(initState) as Ref<State>;

  // setState函式
  const setState = (newState: NewState<State>) => {
    const _newState =
      typeof newState === "function" ? newState(state.value) : newState;
    state.value = {
      ...state.value,
      ..._newState,
    };
  };

  const resetState = (partialRenewState?: Partial<State>) => {
    setState(makeInitStateFn(partialRenewState));
  };

  return {
    state,
    setState,
    resetState,
  };
};

export default useCommonStore;
