const myFunction = (number) =>{
  if(number > 3) return; // 기저 조건
  console.log(number)
  myFunction(number + 1)
}

myFunction(1);

