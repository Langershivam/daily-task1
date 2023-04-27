let str="How many vowels are present in a given sentence";
let Vcount=0,Ccount=0;
const vowels=["a","e","i","o","u"]
for(let j of str.toLowerCase()){
    if(vowels.includes(j))
    Vcount++;
    else{
        if(j!=" ")
        Ccount++;
    }

}
console.log("count of vowels in given string:",Vcount);
console.log("count of consonants in given string:",Ccount);