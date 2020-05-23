学习笔记
### 数组、链表、跳表
- 数组实现和特点
    - 初始化一个数据，在内存中开辟连续的空间，访问其中一个元素，时间复杂度都是O(1)
    - 在插入一个数据时，比如在ABCEF中，在CE中插入D，就得将EF往后挪位，然后将D赋值进去，删除同理，所以插入和删除的时间复杂度为O(n/2)
    ```
    prepend O(1)
    append  O(1)
    lookup  O(1)
    insert  O(n)
    delete  O(n)
    ```
- 链表的实现和特点
    - 删除插入操作比较频繁，元素定义好后，有value和next结构类似{ value: 5, next: { value: 10, next: { value: 7, next: null } } }
    - 如果链表中，只有指向下一项，那么就叫单链表，如果还有prev，就是双链表，如果最有一项指向第一项，就是循环链表
    - 链表中插入元素，只需要将上一个的next指向要插入的元素，然后将当前节点的next指向下一个元素（O(1)）
    - 随机访问元素，时间复杂度较高O(n)，而插入删除都是O(1)
    ```
    prepend O(1)
    append  O(1)
    lookup  O(n)
    insert  O(1)
    delete  O(1)
    ```
- 跳表的特点
    - 跳表的使用，只能用于元素有序的情况
    - 跳表对标的是一种平衡树（AVL Tree）和二分查找，是一种插入/删除/搜索都是O(log n)的数据结构，
    - 优势是原理简单，实现容易，方便扩展，效率更高，一些热门项目用来替换平衡树，如Redis、LevelDB
    - 一维的数据结构要加速，就得升级为二维数据结构
    ```
    索引的高度是： lognn，每层索引遍历的节点个数是3
    在跳表中查询任意数据的时间复杂度就是O(log n)
    ```

实战
- 283
```
int j = 0;
for (int i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
        nums[j] = nums[i];
        if (i != j) {
            nums[i] = 0;
        }
        j++;
    }
}
```
- 11
```
<!-- 普通解法 -->
public int maxArea(int[] a) {
    int max = 0;
    for (int i = 0; i < a.length; ++i) {
        for (int j = 1; j < a.length; j++) {
            int area = (j - i) * Math.min(a[i], a[j]);
            max = Math.max(area, max);
        }
    }
    return max;
}
<!-- 复杂度较小解法 -->
public int maxArea(int[] a) {
    int max = 0;
    for (int i = 0， i = a.length - 1; i < j; ) {
        int minHeight = a[i] < a[j] ? a[i++] : a[j--];
        max = Math.max(max, (j - i + 1) * minHeight);
    }
    return max;
}
```
- 70
```
<!-- Fibonacci -->
function climbStairs (n) {
    if (n <= 2) return n;
    var f1 = 1, f2 = 2, f3 = 3;
    for (var i = 0; i < n.length; i++) {
        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;
    }
    return f3;
}
```
- 15
```
<!-- 双指针夹逼的方法 -->
```



### 栈、队列、双端队列
- 栈
    先进后出的容器结构，添加删除操作O(1)，查询是o(n)
- 队列
    先进先出，添加删除操作O(1)，查询是o(n)
- 双端队列（Double-End Queue）
    可以在起始位置和结束位置都插入和删除元素，添加删除操作O(1)，查询是o(n)
- 优先队列 priority-queue
    插入O(1)，取出o(logN)-按优先级取出，底层具体实现的数据结构较为多样和复杂，可以用heap、bst、treap

### 实战
- 20
```
<!-- 如果一个东西具有最近相关性，就用栈解决，像洋葱一样的结构 -->
<!-- 暴力破解O(n^2) -->
<!-- 1、不断的replace括号
2、(){}[]replace替换括号对
3、((({[]})))从内嵌括号开始替换 -->

<!-- 用栈解决 -->
遇到左括号进栈，遇到右括号匹配
```
- 155

- 84
```
暴力破解
<!-- for i -> n - 2
    for j = i + 1 -> n - 1
        i -> j 最小高度 -->

stack
<!-- 不理解，重复看 -->
```

- 239滑动窗口
    ```
    <!-- 用队列解决，双端队列 -->
    ```