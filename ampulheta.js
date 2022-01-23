var n = prompt("valor: ");

var blocos = "";

//Parte Superior
for(i = 1; i<=n; i++)
{
    for(j = 1; j<=i;j++)
    {
    if(j==1){
        blocos += "#";
    }
    else{
        blocos += " ";
        }
    }
    for(j=i; j <=n; j++)
    {
        blocos += "#";
    }
    for(j=i; j<=n; j++)
    {
        blocos += "#";
    }
    for(j = 1; j<=i;j++)
    {
    if(j==i){
        blocos += "#";
    }
    else{
        blocos += " ";
        }
    }
    blocos += "\n";
}

// Parte Inferior
for(i = 1; i<=n; i++)
{
    for(j = i; j<=n;j++)
    {
    if(i==n){
        blocos += "#";
    }
    else{
        if(j==i){
            blocos += "#";
        }else{
            blocos += " ";
            }
        }
    }
    for(j=1;j<=i;j++)
    {
        blocos += "#"; 
    }
    for(j=1;j<=i;j++)
    {
        blocos += "#";
    }
    for(j=i; j<=n;j++)
    {
    if(j==n){
        blocos += "#";
    }
    else{
        blocos += " ";
        }
    }
    blocos += "\n";
}
console.log(blocos)