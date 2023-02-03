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
    




