arr=[1,2,4,13,17,6];
let x =arr.filter(function(item) {
   let flag = 0;
   for(var i=2;i<=item/2;i++)
   {
    if(item%i==0){
        flag=1;
        break;
    }
}
if(flag == 0 && item!==1){
    return item;
}
})

console.log(x)
   
