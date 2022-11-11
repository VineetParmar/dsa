let ARRAY = [8,4,6,9,3,1,2];

 function Srt(array){
    for(let i = 0; i < array.length;i++){
        for(let j = i+1; j < array.length;j++){
            if(array[i] > array[j]){ //8>4 
                console.log(array[i],array[j]);
                 temp = array[i]; //temp=4
                array[i]=array[j];//4=8 value change it will become 8 
                array[j]=temp;//8=4 value change it will become 4
            }
        }
    }
    return array;
 }

console.log(Srt(ARRAY));
 