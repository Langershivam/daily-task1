
        let n = 12345
        let sum=0,rem=0
        while(n!=0)
        {
            rem=n%10;
            sum+=rem;
            n=Math.floor(n/10);
        }
        console.log(sum)
  