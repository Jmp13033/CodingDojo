for(var i = 1; i <= 20; i+= 2)
{
    console.log(i)

}

for(var i = 100; i >= 0; i-- )
{
    if(i % 3 === 0)
    {
        console.log(i)
    }
}


var array = [4, 2.5, 1, -0.5, -2, -3.5]

for(var i = 0; i < array.length; i ++ )
{
    console.log(array[i])

}

var sum = 0
for(var i = 0; i <= 100; i ++) 
{
    sum += i
    

}
console.log(sum)

function factor(num) {
    var result = num;
    if (num === 0 || num === 1) 
    return 1; 
    while (num > 1) { 
    num--;
      result *= num;
    }
    return result;
    }
    console.log(factor(12));