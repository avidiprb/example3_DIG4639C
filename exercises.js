export function reduce (array,combine,first) {
let current = first;
for (let element of array)
{
current = combine( current, element);
}
return current;
}

export function loop (value,test,update,body)
{


do {
    if
(test(value))
{
    body(value);
    value = update(value);
    
} 
else
break;
}
while ( test(value) )

}
    
export function everyLoop (array, test) {

var check = false;

for (let element of array)
{
   check = (test (element));
if (check)
{
continue;
}
else
break;
}
return check;
}


export function everySome (array, test) {

    var check = false;
    
    for (let element of array)
    {
       check = (test (element));
    if (check) {
    break;
    }
    }
    return check;
    }


