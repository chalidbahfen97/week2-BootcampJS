const rotateArray = function(arr, k) {

    // reverse helper function
    function reverse(nums, start, end) {
      while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
      }
    }
  
    k %= arr.length;
  
    reverse(arr, 0, (arr.length - 1));
    reverse(arr, 0, (k - 1));
    reverse(arr, k, (arr.length - 1));
  
    return arr;
}
console.log(rotateArray([3,8,9,7,6],3));
console.log();