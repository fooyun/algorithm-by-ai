这个函数接收一个数组作为输入，返回一个新的有序数组，使用的是快速排序算法。

算法的基本思路如下：

选择数组中的一个元素作为枢轴。
将数组分为小于等于枢轴的部分和大于枢轴的部分。
递归地对左右两个部分进行快速排序。
将排好序的左部分、枢轴和排好序的右部分拼接起来，形成最终的有序数组。
在这个实现中，我们选择数组的第一个元素作为枢轴。然后遍历数组的其他元素，根据元素与枢轴的大小关系将它们分为左右两个部分。

然后我们递归地对左右两个部分进行快速排序，并将它们和枢轴拼接起来，形成最终的有序数组。如果输入的数组已经有序，函数将直接返回输入的数组。

希望这个解答能帮到你！
