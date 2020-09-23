const readline= require("readline-sync");
function tong(a,b){
   
    return a+b;
    }

function run(){
    let a=readline.question("Nhap a:");
    let b=readline.question("Nhap b:");
    console.log(tong(a,b));
}
run ();