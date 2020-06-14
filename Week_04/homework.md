- 二叉树的层序遍历
https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

```
<!-- 广度遍历 -->
var levelOrder = function(root) {
    if (root === null) return [];
    const queue = [];
    const result = [];
    queue.push(root);
    while (queue.length !== 0) {
        const len = queue.length;
        const ret = [];
        for (let i = 0 ;i < len; i++) {
            const node = queue.shift();
            ret.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(ret);
    }
    return result;
};
```


- 在每个树行中找最大值
https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
```
var largestValues = function(root) {
    if (root === null) return [];
    const result = [];
    const queue = [root];
    while (queue.length !== 0) {
        const len = queue.length;
        let max = -Infinity;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            max = Math.max(max, node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        result.push(max);
    }
    return result;
};
```