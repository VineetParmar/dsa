function getSumPairZero(array) {
    for(let i = 0; i < array.length;i++){
        console.log(array[i],"out")
        for(let j = 1; j < array.length;j++){
            console.log(array[j],"in")
            if(array[i] - array[j] === 0){
                return [array[i],array[j]];
            }
        }
    }
}
const result = getSumPairZero([5,4,2,0,2,3,4,6,5,8]);
console.log(result);

