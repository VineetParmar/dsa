//10 - 4 + 1 = 7  loop will  run for consecutive number

// condition  variablen
//num >value
function findLargest(array,num) {
 if(num < array){
    throw new Error("NUmber is greater then array")
 }else{
    let max = 0;
    for(let i = 0; i < array.length-num+1; i++){
        let temp = 0
        for(let j = 0; j <num; j++){
            console.log("i"+array[i],"j"+array[j])
            temp=temp+array[i + j];// j = 0 , i = 0 = [0+0]=0 array[0]=1 stored in temp,next time i = 0 j=1 then = [0+1]=1 array[1]=2 stored in temp, temp =[0]1 + [1]2
            console.log(temp);
            if(temp>max){
                max = temp;
            }
        }// }return temp;
    }return max;
 }
}

const result = findLargest([1,2,3,4,3,5,4,6,7,8],4);
console.log(result);
