function Anagram(string1,string2){

    if(string1.length!==string2.length){
        return false;

    }
    let count={}
    for(var i=0;i<string1.length;i++){
        count[string1[i]]=(count[string1[i]] || 0) + 1 ;
        console.log(count)
    }
    for(var j=0;j<string2.length;j++){
        if(!count[string2[j]]){
            return false;
        }
        count[string2[j]] = count[string2[j]] - 1;
        // console.log(count);
    }return true;
}
const check = Anagram("aarav","vaaar");
console.log(check);
