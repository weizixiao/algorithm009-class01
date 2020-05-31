var topKFrequent = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const curVal = nums[i];
        const getTime = map.get(curVal);
        map.set(curVal, getTime ? getTime + 1 : 1);
    }
    const result = [...map.keys()];
    result.sort((a, b) => map.get(b) - map.get(a));
    return result.slice(0, k);
};



