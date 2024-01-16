const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = [];

readline.on('line', function(line){
    input.push(line);
}).on('close', function(){
    const n = BigInt(Number(input[0]));
    const arr = new Array(Number(n) + 1);
    arr[0] = 0n;
    arr[1] = 1n;
    arr[2] = 1n;
    for(let i=3; i<=Number(input[0]); i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    console.log(arr[n].toString());
});
