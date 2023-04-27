
        let a=371,sum=0,rem;
        temp=a
        while(temp!==0)
        {
           rem=temp%10;
           sum=sum+(rem*rem*rem);
           temp=parseInt(temp/10);
        }
        if(sum==a)
         console.log(a,"Number is armstrong");
        else
         console.log(a,"is not armstrong number");
    

      