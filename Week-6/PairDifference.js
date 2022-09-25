const A = [10, 1, 7, 2, 1, 16, 80];
const B = 78;


let x = B + A[0];

for(let el of A){

  if(A.includes(x)){
    console.log(1);
    return 1;
  }else{
    x = B + el
  }

  if(el == A[A.length - 1]){
    console.log(0);
  }
}