//used memoization to avoid unneccesary stacking of calls

function fibo(n,mem){
  mem = mem || {};
  if(mem[n]) return mem[n];
  if(n <= 1){
    return 1;
  }
  return mem[n] = fibo(n-1,mem)+ fibo(n-2,mem);
}

console.log(fibo(50));

//took all the positions a knight can move and added them to a array. Added the x position with x value from the array and checked if > 0 and <= 8. Same done for y side.

function knight(position){
  position = position.toString();
  return [[1,2],[2,1],[2,-1],[-2,1],[-1,-2],[-2,-1],[-2,1],[-1,2]].filter(val =>
    parseInt(position[0]) + val[0] > 0 && parseInt(position[0]) + val[0] <= 8 
    && parseInt(position[1]) + val[1] >0  && parseInt(position[1]) + val[1] <= 8 ).length;
}

console.log(knight(11));