/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [12,3,5,23,7,18,42,9,1];
let target = 24;

//nested for loop is not ideal for performance
 var twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++) {
        for(let j=i+1; j < nums.length; j++) {
            if (target - nums[i] === nums[j]) {
                return ([i, j]);
            }
        }    
    
    }
};

console.log(twoSum(nums, target));