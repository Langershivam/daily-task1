let f1=0,f2=1,f,nterms=5;
for(let i=1;i<nterms;i++){
    console.log(f1);
   f=f1+f2;
   f1=f2;
   f2=f;
}
