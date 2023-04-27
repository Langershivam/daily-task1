arr=[1,6,8,5,10,14,12];
item=5,flag=0;
for(var i in arr){
   if(arr[i]==item){
   flag=1;
   break;
   }
}
if(flag==1)
console.log("item found at location:",i);
else
console.log("item not present in given array");