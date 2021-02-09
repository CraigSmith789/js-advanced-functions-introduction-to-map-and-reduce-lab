// Your code here
function mapToNegativize(sourceArray){
  let a = []
  for(let i = 0; i < sourceArray.length; i++){
    a.push(sourceArray[i] * -1);
  }
  return a;
}
function mapToNoChange(sourceArray){
  let a = []
  for(let i = 0; i < sourceArray.length; i++){
    a.push(sourceArray[i]);
  }
  return a;
}
function mapToDouble(sourceArray){
  let a = []
  for(let i = 0; i < sourceArray.length; i++){
    a.push(sourceArray[i]  *2 );
  }
  return a;
}

 const mapToSquare = (sourceArray) => {
  let a = []
  for(let i = 0; i < sourceArray.length; i++){
    a.push(sourceArray[i]**2 );
  }
  return a;
}
const reduceToTotal = (sourceArray, startingPoint = 0) =>{
  
  for(let i = 0; i < sourceArray.length; i++){
    startingPoint += sourceArray[i];
}
return startingPoint;
}

const reduceToAllTrue = (sourceArray) => {
  for(let i = 0; i < sourceArray.length; i++){
    if (sourceArray[i] == false){
      return false
    }
  };
  return true
}

const reduceToAnyTrue = (sourceArray) => {
  for(let i = 0; i < sourceArray.length; i++){
    if (sourceArray[i] == true){
      return true
    }
  };
  return false
}