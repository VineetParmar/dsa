// function Counts(arr){
//     let map =  {}

// for(let i=0; i<arr.length; i++){
//     map[arr[i]] = map[arr[i]]?map[arr[i]]+1:1
//     console.log("new one")
// }
// console.log(map)
// }


// Counts([2,3,4,5,5,3,5,4,5,3])

function Counts(arr){
    let map =  {}

arr.forEach(item => {
    console.log(map[item])  //map na andar 2 waigayo {'2'} -> map[2] = 0
    map[item] = map[item]?map[item]+1:1  //1.first item is 2 will come in map[item]
    console.log(map[item])  //key[value] = 1 map[2] = 0
    console.log(map)
});
console.log(map)
}
Counts([2,3,4,5,5,3,5,4,5,3])

//1.first item is 2 will come in map[item] ->map[2] = further c0de
//2.map[2]= map[item] = 0 ?map[item]+1:1 -> so it will become {2:1}

var arr1 = [8,9,0]
var arr2 = [2,3,4]


var res = {}

for(let i=0; i<arr1.length; i++){
    res[arr1[i]] = arr1[i];
    console.log(res)
}
console.log(res)






