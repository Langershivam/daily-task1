
        let a=[3,6,8,7,13,98,76],ecount=0,ocount=0
        for(let i in a){
            if(a[i]%2==0){
                ecount++;
            }
            else
            ocount++;
        }
        console.log("count of even numbers are: ",ecount);
        console.log("count of odd numbers are: ",ocount);
   