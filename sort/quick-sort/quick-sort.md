The quickSort function takes an array as input and returns a new sorted array. The function uses the QuickSort algorithm, which works as follows:

Choose a pivot element from the array.
Partition the array into two subarrays, one containing elements smaller than the pivot, and one containing elements greater than the pivot.
Recursively sort the two subarrays.
Combine the sorted subarrays and the pivot to form the final sorted array.
In this implementation, we choose the pivot as the first element of the input array. We then loop through the remaining elements of the array and add them to either the left or right subarray, depending on whether they are smaller or greater than the pivot.

We then recursively sort the left and right subarrays using the quickSort function and combine them with the pivot using the spread operator ....

The base case for the recursion is an array with length 0 or 1, which is already sorted. If the input array is already sorted, the function will simply return the input array.

I hope this helps!
