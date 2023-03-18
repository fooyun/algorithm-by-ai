const bubbleSort = (arr) => {
  const len = arr.length;

  // Iterate through the entire array
  for (let i = 0; i < len; i++) {
    // Iterate through the unsorted part of the array
    for (let j = 0; j < len - i - 1; j++) {
      // Swap adjacent elements if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};
