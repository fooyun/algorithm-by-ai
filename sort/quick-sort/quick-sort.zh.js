const quickSort = (arr) => {
  // 基线条件：输入的数组长度为 0 或 1 时，已经有序，直接返回原数组
  if (arr.length <= 1) {
    return arr;
  }

  // 选择数组的第一个元素作为枢轴
  const pivot = arr[0];

  // 将数组分为小于等于枢轴的部分和大于枢轴的部分
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 递归地对左右两个部分进行快速排序
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // 将排好序的左部分、枢轴和排好序的右部分拼接起来，形成最终的有序数组
  return [...sortedLeft, pivot, ...sortedRight];
};
