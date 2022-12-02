const nums = [-1, 2, 1, -4];
const target = 1;

let result = nums[0]+nums[1]+nums[nums.length-1];
nums.sort();

for(let i = 0; i<nums.length-2; i++){
  let aPointer = i+1;
  let bPointer = nums.length-1;

  while(aPointer < bPointer){
    let currSum = nums[i] + nums[aPointer] + nums[bPointer];

    if(currSum > target){
      bPointer--;
    }else{
      aPointer++;
    }

    if(Math.abs(currSum - target) < Math.abs(result - target)){
      result = currSum;
    }
  }
}

console.log(result);

// TC = O(n^2)
// SC = O(1)