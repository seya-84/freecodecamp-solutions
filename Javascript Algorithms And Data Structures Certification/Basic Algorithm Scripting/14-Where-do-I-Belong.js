function getIndexToIns(arr, num) {
  
  let times = arr.length; // 2
  let count = 0;

  for(let i = 0; i < times; i++) {
    if(num > arr[i]) {
      count++;
    }
  } 
  return count; 
}

getIndexToIns([40, 60], 50);