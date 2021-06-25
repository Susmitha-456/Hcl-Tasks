function countwords(str)
{
let count = 1;

let s=str.split(/(?=[A-Z])/);
 
for (let i = 0; i<s.length; i++) {
    console.log(s[i]);
}
for(let i=0;i<str.length;i++)
{
    if(str[i]>='A' && str[i]<='Z')
    {
     count++;
    }

}
return count;
}
var str="saveChangesInTheEditor";
console.log(countwords(str));
