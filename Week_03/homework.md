- 爬楼梯
https://leetcode-cn.com/problems/climbing-stairs/
```
var climbStairs = function(n) {
    if (n <= 2) return n;
    let prevSecond = 1;
    let prevFirst = 2;
    let result = 0;
    for (let i = 3; i <= n; i++) {
        result = prevFirst + prevSecond;
        prevSecond = prevFirst;
        prevFirst = result;
    }
    return result;
};
```

- 括号生成
https://leetcode-cn.com/problems/generate-parentheses/
```
var generateParenthesis = function(n) {
    const arr = [];
    function helper (left, right, str) {
        if (str.length === 2 * n) {
            arr.push(str);
            return;
        }
        if (left < n) {
            helper(left + 1, right, str + "(");
        }
        if (right < left) {
            helper(left, right + 1, str + ")");
        }
    }
    helper(0, 0, "");
    return arr;
};
```


- 翻转二叉树
https://leetcode-cn.com/problems/invert-binary-tree/description/
```
var invertTree = function(root) {
    if (root === null) return root;
    function resver(rt) {
        if (rt === null) return;
        const temp = rt.left;
        rt.left = rt.right;
        rt.right = temp;
        resver(rt.left);
        resver(rt.right);
    }
    resver(root);
    return root;
};
```

- 验证二叉搜索树
https://leetcode-cn.com/problems/validate-binary-search-tree/
```
var isValidBST = function(root) {
    function helper (rt, min, max) {
        if (rt === null) return true;
        if (rt.val >= max || rt.val <= min) return false;
        return helper(rt.left, min, rt.val) && helper(rt.right, rt.val, max);
    }
    return helper(root, -Infinity, Infinity);
}
```


- 二叉树的最大深度
https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
```
var maxDepth = function(root) {
    var max = 0;
    function help (rt, m) {
        if (rt === null) return;
        m++;
        max = Math.max(max, m);
        if (rt.left) help(rt.left, m);
        if (rt.right) help(rt.right, m);
    }
    help(root, 0);
    return max;
};
```

- 二叉树的最小深度
https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
```
var minDepth = function(root) {
    if(root === null) return 0;
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    return (left == 0 || right == 0) ? left + right + 1: Math.min(left,right) + 1;
};

var minDepth = function(root) {
  if(root == null){
    return 0;
  }
  var result = Number.MAX_SAFE_INTEGER;
  function helper(root,level){
    if(root !== null){
      if (!root.left && !root.right) {
          result = Math.min(result,level)
      };
      if(root.left !== null){
        helper(root.left,level+1);
      }
      if(root.right !== null){
        helper(root.right,level+1);
      }              
    }
  }
  helper(root,1);
  return result;
};
```


- 二叉树的序列化与反序列化
https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

- 二叉树的最近公共祖先
https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
```
var lowestCommonAncestor = function(root, p, q) {
    let result;
    function help (rt) {
        if (rt === null) return;
        const lson = help(rt.left);
        const rson = help(rt.right);
        // 还需要满足父子节点的情况，取父节点
        if ((lson && rson) || ((lson || rson) && (rt.val === p.val || rt.val === q.val))) {
            result = rt;
        }
        return lson || rson || (rt.val === p.val || rt.val === q.val);
    }
    help(root);
    return result;
};
```

- 从前序与中序遍历序列构造二叉树
https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
```
var buildTree = function(preorder, inorder) {
    const map = new Map();
    const len = inorder.length;
    for (let i = 0; i < len; i++) {
        map.set(inorder[i], i);
    }
    function tree (pre, inor, pre_start, pre_end, inor_start, inor_end) {
        if (pre_start > pre_end || inor_start > inor_end) return null;
        const root_val = pre[pre_start];
        const root = new TreeNode(root_val);
        const inor_root_index = map.get(root_val);
        const lsonLen = inor_root_index - inor_start;
        const rsonLen = inor_end - inor_root_index;
        // 左子树构建
        if (lsonLen > 0) {
            root.left = tree(pre, inor, pre_start + 1, pre_start + 1 + lsonLen, inor_start, inor_root_index - 1);
        }
        // 右子树构建
        if (rsonLen > 0) {
            root.right = tree(pre, inor, pre_start + 1 + lsonLen, pre_end, inor_root_index + 1, inor_end);
        }
        return root;
    }
    return tree(preorder, inorder, 0, len-1, 0, len-1);
};
```

- 组合
https://leetcode-cn.com/problems/combinations/
```
var combine = function(n, k) {
    
    var res = [];
    function dfs(start, cur){
        if(cur.length === k){
            res.push(cur);
            return;
        }
        for(var i = start ; i <= n; i++){
            const copy = [...cur];
            copy.push(i);
            dfs(i + 1, copy);
        }
    }
    dfs(1, []);
    return res;
};
```

- 全排列
https://leetcode-cn.com/problems/permutations/
```
var permute = function(nums) {
    const result = [];
    function help (n, r) {
        if (r.length >= nums.length) {
            result.push(r);
            return;
        }
        for (let i = 0 ;i < n.length; i++) {
            var re = r.slice();
            re.push(n[i]);
            var newN = [...n];
            newN.splice(i, 1);
            help(newN, re);
        }
    }
    help([...nums], []);
    return result;
};
```

- 全排列 II
https://leetcode-cn.com/problems/permutations-ii/