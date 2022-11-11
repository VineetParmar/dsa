//Divide and conqueror Technique
//find yhe index of given no in a sorted array 7 
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => index 6 -> output
//indexing will not get us confused

//min = 0 element=1
//max = array.length-1, element=15
//midIndex=(min+max)/2 => (0+14) => 7index,element = 8
//if array[midIndex] < number(7)<<--7       if element(8) is less then my number                          <=== when we write like this that means we are accessing the element
//min=midIndex+1;
// array[midIndex] > number
// max=midIndex-1  ,min=0,max=6 {1,2,3,4,5,6,7}
//(min+max)/2 => 3
//index + 1 => 4(min),max = 6 {5,6,7}
//midIndex 
//else midIndex => 6, element = 7


function SearchB(array,number){
    let min = 0;    //min = 5
    let max = array.length - 1; //max=15-1 = 14 //max = 6     (5+6)/2 = 5
    while(min <= max){
        let midIndex = Math.floor((min+max)/2) //2.(0+6)/2 = 3 that is array[3] = 4    3.(4+6)/2 = 5 array[5]=6   min=4+1=5 
        console.log("max="+ max, " min="+ min,"midIndex"+ midIndex)
        if(array[midIndex] < number){   // 8 < 7 not so second condition will run  2. 4 < 7 so min = 3+1= 4 min=4 (min=4,max=6)
            min=midIndex+1;
        }else if(array[midIndex] > number){
            max=midIndex-1;    //max=7-1 , max = 6 
        }else{
            return midIndex;
        }
    }return -1;
}

const result = SearchB([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7)
console.log(result);