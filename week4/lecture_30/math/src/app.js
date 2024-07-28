const addNumber=(...args)=>{
    let sum=0;
    args.forEach((arg)=>{
      sum+=arg;
    })
    return sum;
  }
  
  const ans=addNumber(10,82,0,-30,40);
  console.log(ans);