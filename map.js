let arr = [2,3,4,5,6];

let arr1 = [];

for (let i = 0; i < arr.length; i++){
    arr1[i] = arr[i]*2 //for getting in array format use arr1[i] for only result like 12 dont use [i]
}

console.log(arr1)


let arr3 = [2,3,4,5,6];

let arr2 = arr3.map((item) =>{
    return item * 2;
})
console.log(arr2)
