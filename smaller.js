let array = [8,7,4,9,1,2,6];

function smallest(array){
    let Smallest=array[0]
    for(let i=1; i<array.length; i++){
        if(array[i] < Smallest){
            Smallest=array[i]
        }
    }return Smallest
}


const result1 = smallest([8,7,4,1,2,6])
console.log(result1);

function largest(array){
    let Largest = array[0]
    for(let i=1; i<array.length; i++){
        if(array[i] > Largest){
            Largest=array[i]
        }
    }return Largest
}

const result2 = largest(array);
console.log(result2);