var findTargetSumWays = function(nums, target) {

    function dp(nums, target, sum, count){
        if(sum == target) return 1;
        if(count > nums.length) return 0;

        for(let num of nums){
            let negative =  dp(nums,target, sum - num, count+1);
            let positive = dp(nums,target, sum + num, count+1);
            return negative+positive;
        }

        return negative+positive;

    }

    console.log(dp(nums, target, 0, 0));
    
};

findTargetSumWays([1], 1);