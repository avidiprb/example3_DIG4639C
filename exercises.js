export function reduce(array,combine,first) {
let current = first;
for (let element of array)
{
current = combine( current, element);
}
return current;
}



