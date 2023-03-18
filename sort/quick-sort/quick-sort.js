const quickSort = (arr) => {
  // Base case: If the input array has length 0 or 1, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the pivot as the first element of the array
  const pivot = arr[0];

  // Partition the array into elements smaller than the pivot and elements greater than the pivot
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right partitions
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Combine the sorted left partition, the pivot, and the sorted right partition
  return [...sortedLeft, pivot, ...sortedRight];
};
