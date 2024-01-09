const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = '';
let find = true;

readline.on('line', function(line){
    input += line;
}).on('close', function(){
    for(let i = 0; i<input.length; i++){
        if(input[i] != input[input.length-i-1]){
            console.log('0');
            find = false;
            break;
        }
    }
    if(find){
        console.log('1');
    }
});