
function test(n) {
   
    for (let x = 1; x < Math.floor(Math.sqrt(n)); x++) {
        for(let y=0;y<20;y++){
            if (Math.pow(x, y) == n) {   
                return n;
            } 
        }        
    }
}
function run() {
    let arr = [16, 32, 72, 96];
    for (let i = 0; i < arr.length; i++){
        if (test(arr[i]))
        console.log(arr[i]);
    }
       
}
run();