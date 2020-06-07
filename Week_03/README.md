### 递归
- 递归-循环
- 通过函数体来进行的循环
```
// 阶乘
function Factorial (n) {
    if (n < 1) return 1;
    return n * Factorial(n - 1);
}
```
template
```
function recursion(level, param1, param1...) {
    // recursion terminator
    if (level > MAX_LEVEL) {
        // process_result;
        return;
    }
    // process logic in current level
    process(level, data...);
    // drill down
    recursion(level + 1, p1);
    // reverse the current level status if needed
}
```

### 分治
其实就是递归，在递归中拆解子问题，进行各项处理
template
```
function divide_conquer(problem, param1, param2...) {
    // recursion terminator
    if (problem is None) {
        print_result;
        return;
    }
    // prepare data
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)
    // conquer subproblems
    subreslutt1 = divide_conquer(subproblems[0], p1....);
    // process and generate the final result
    result = process_result(subreslutt1, subreslutt2, subreslutt3...);
}
```
### 回溯
回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程中m，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将取消行一步甚至是上几步的计算，再通过其他的可能的分步解答再次尝试寻找问题的答案。
回溯法通常用最简单的递归方法来实现，在反复重复上述的步骤后可能出现两种情况：
- 找到一个可能存在的正确的答案
- 在尝试了所有可能的分步方法后宣告该问题没有答案
在最坏的情况下，回溯法会导致一次复杂度为指数时间计算

