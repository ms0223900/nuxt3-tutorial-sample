const useCounter = (initCount = 0) => {
  const count = ref(initCount);

  const handleAddCount = (diff = 1) => {
    count.value += diff;
  };

  return {
    count,
    handleAddCount,
  };
};

export default useCounter;
