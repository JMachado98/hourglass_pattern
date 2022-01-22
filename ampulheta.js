var n = 20;

for(x = 1; x <= n; x++) {
    for(y = 1; y <= n; y++){
        if(
            x == 1 || 
            x == 2 || 
            y == 1 || 
            x == n || 
            y == n ||
            x == y ||
            y == n-x+1 
            
        ){
            process.stdout.write("#"); 
        }
        else
        {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("\n");
}