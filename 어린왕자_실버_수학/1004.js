const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = [];
//testcase
let N = 0;
let count = 0;

readline.on('line', function(line){
    input.push(line);
}).on('close', function(){
    N = input[count++];
    for(let testcase = 0; testcase < N; testcase++){
        let ans = 0;
        let [x_1, y_1, x_2, y_2] = input[count++].split(' ').map(Number);
        let num_of_planet = input[count++];
        for(let check = 0; check < num_of_planet; check++){
            let planet = input[count++].split(' ').map(Number);
            if(Math.pow(planet[0] - x_1, 2) + Math.pow(planet[1] - y_1, 2) > Math.pow(planet[2],2)){
                if(Math.pow(planet[0]-x_2, 2) + Math.pow(planet[1] - y_2, 2) < Math.pow(planet[2],2)){
                    ans++;
                }
            }
            if(Math.pow(planet[0] - x_1, 2) + Math.pow(planet[1] - y_1, 2) < Math.pow(planet[2],2)){
                if(Math.pow(planet[0]-x_2, 2) + Math.pow(planet[1] - y_2, 2) > Math.pow(planet[2],2)){
                    ans++;
                }
            }
        }   
        console.log(ans);
    }
});