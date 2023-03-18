/**
 * 归并排序算法的实现，使用ES6语法
 * @param {Array} arr - 待排序的数组
 * @returns {Array} - 排序后的数组
 */
const mergeSort = (arr) => {
  // 基本情况：如果数组长度小于等于1，则它已经排序好了
  if (arr.length <= 1) {
    return arr;
  }

  // 找到数组的中间索引
  const middleIndex = Math.floor(arr.length / 2);

  // 将数组围绕中间索引分成两个子数组
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  // 递归地对左右两个子数组进行排序
  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  // 将排好序的左右两个子数组进行合并
  return merge(sortedLeftArr, sortedRightArr);
};

/**
 * 将两个已排序的数组合并成一个已排序的数组
 * @param {Array} arr1 - 第一个已排序的数组
 * @param {Array} arr2 - 第二个已排序的数组
 * @returns {Array} - 合并后的已排序的数组
 */
const merge = (arr1, arr2) => {
  // 初始化一个新的空数组来存储合并后的数组
  const mergedArr = [];

  // 初始化两个指针，一个用于遍历第一个数组，另一个用于遍历第二个数组
  let i = 0;
  let j = 0;

  // 遍历两个数组，将较小的元素添加到合并后的数组中
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  // 将任何剩余的元素从任何一个数组中添加到合并后的数组中
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  // 返回合并后的已排序的数组
  return mergedArr;
};
