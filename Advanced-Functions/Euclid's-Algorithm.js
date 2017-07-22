/**
 * Created by Aleksandar on 18/07/2017.
 */

function gcd(a,b)
{
    if (b === 0)
    {return a}
    else
    {return gcd(b, a % b)}
}

console.log(gcd(175,105));