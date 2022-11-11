//Checking square in Another array
// arr1=[1,2,3,4], arr2=[1,4,9,16]
//if(array1[i] * array1[i]) === array2[j])
// let square = true


function isSquareCk(array1,array2){
    if(array1.length !== array2.length){
        return console.error("Array is Greater");
    }
    for(let i=0;i<array1.length;i++){
        let isSquare = false;
        for(let j=0;j<array2.length;j++){
            if(array1[i] * array1[i] === array2[j]){
                isSquare = true;
            }
            if(j === array2.length-1){
                if(!isSquare){  // if isSquare = true if not equal to true(!isSquare)return false
                    return false;
                }
            }
        }
    }return true;
}

const result = isSquareCk([1,2,3,4],[1,4,9,16])
console.log(result);