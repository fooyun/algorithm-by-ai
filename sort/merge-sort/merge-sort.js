/**
 * Merge sort algorithm implementation using ES6 syntax
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
const mergeSort = (arr) => {
  // Base case: If the array has less than or equal to one element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const middleIndex = Math.floor(arr.length / 2);

  // Split the array into two sub-arrays around the middle index
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  // Recursively sort the left and right sub-arrays using mergeSort
  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  // Merge the sorted left and right sub-arrays
  return merge(sortedLeftArr, sortedRightArr);
};

/**
 * Merge two sorted arrays into one sorted array
 * @param {Array} arr1 - The first sorted array
 * @param {Array} arr2 - The second sorted array
 * @returns {Array} - The merged and sorted array
 */
const merge = (arr1, arr2) => {
  // Initialize a new empty array to hold the merged array
  const mergedArr = [];

  // Initialize two pointers, one for each array
  let i = 0;
  let j = 0;

  // Loop through both arrays and add the smaller element to the merged array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  // Add any remaining elements from either array to the merged array
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  // Return the merged and sorted array
  return mergedArr;
};
