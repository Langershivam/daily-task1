nterms=5;
function fab(n){
    if(n<2)
    return n;
    else
    return fab(n-1)+fab(n-2);
}


for(var i=0;i<nterms;i++){
   console.log(fab(i));
}
