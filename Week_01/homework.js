// 旋转数组O(n)
var rotate = function(nums, k) {
    for (let i = 0; i< k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
};

// 两数字之和
// 1、暴力法，时间复杂度O(n^2)
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};

// 2、时间复杂度O(n^2)，while遍历，加上indexOf
var twoSum = function(nums, target) {
    let i = nums.length;
    while(i > 1) {
        let last = nums.pop();
        const index = nums.indexOf(target - last);
        if (index > -1) {
            return [index, nums.length]
        }
        i--
    }
};

// 3、时间复杂度O(n)
var twoSum = function (nums, target) {
    const map = new Map();
    map.set(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        if (map.get(target - nums[i]) !== undefined) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
}

// 合并两个有序数组
// 1、O(n + log(n+m))
var merge = function(nums1, m, nums2, n) {
    for (var i = 0; i< n; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort((a, b) => a - b);
    return nums1;
};