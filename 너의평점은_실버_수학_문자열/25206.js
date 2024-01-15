const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = [];
let avg = 0.0;
let divider = 0;

readline.on('line', function(line){
    input.push(line.split(' '));
}).on('close', function(){
    console.log("start ------------------");
    
    for(let i=0; i<20; i++){
        console.log(typeof(input[i][1]));

        if(input[i][2] == "A+"){
            avg += 4.5 * input[i][1];
            divider += parseFloat(input[i][1]);
        }
        else if(input[i][2] == "A0"){
            avg += 4.0 * input[i][1];
            divider += parseFloat(input[i][1]);
        }
        else if(input[i][2] == "B+"){
            avg += 3.5 * input[i][1];
            divider += parseFloat(input[i][1]);
        }
        else if(input[i][2] == "B0"){
            avg += 3.0 * input[i][1];
            divider += parseFloat(input[i][1]);
        }
        else if(input[i][2] == "C+"){
            avg += 2.5 * input[i][1];
            divider += parseFloat(input[i][1]);
        }
        else if(input[i][2] == "C0"){
            avg += 2.0 * input[i][1];
            divider += parseFloat(input[i][1]);
        }
        else if(input[i][2] == "D+"){
            avg += 1.5 * input[i][1];
            divider += parseFloat(input[i][1]);
        }
        else if(input[i][2] == "D0"){
            avg += 1.0 * input[i][1];
            divider += parseFloat(input[i][1]);
        }
        else if(input[i][2] == "F"){
            avg += 0.0;
            divider += parseFloat(input[i][1]);
        }
        else if(input[i][2] == "P"){
            continue;
        }
    }
    let ans = avg / divider;
    console.log(ans.toFixed(5));
});