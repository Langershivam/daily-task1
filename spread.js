const arr=[1,2,3,4]

function test(a,b,...c)
{
    console.log(a,b,c);
}
// test(arr)
test(...arr)

// let x,y,z= [...arr];