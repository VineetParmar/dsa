



//    let arr = [2,4,6,8];
//    let count = 0;
//   let arr2 = arr.map((item)=>{
//     return  count = count + item
//   })
//   console.log(arr2)

// let arr = [2,4,6,8];

let add = function(arr){
    let arr2=[]

let total = 0;
for(let i=0;i<arr.length;i++){
           total = total + arr[i]
           arr2[i] = total
        }
        return arr2
}

const result = add([5,4,2,0,2]);
console.log(result);




       




// let add = function(arr){
//     let arr2=[]
//     let total = 0
//     for(let i=0;i<arr.length;i++){
//        total = total + arr[i]
//        arr2.push(total)
//     }
//     return arr2
// }

// const result = add([5,4,2,0,2]);
// console.log(result);
 