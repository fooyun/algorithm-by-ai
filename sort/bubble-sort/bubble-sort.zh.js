const bubbleSort = (arr) => {
  const len = arr.length;

  // 遍历整个数组
  for (let i = 0; i < len; i++) {
    // 遍历未排序部分的数组
    for (let j = 0; j < len - i - 1; j++) {
      // 如果相邻元素的顺序错误，就交换它们
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};
