function solve(x, y, n){
    return (x - 2*y)*(x + 2*y) === n;
    //return x - 2*y === 0;
}

function sol_equa(n){
    let results = [];
    for(let x = n; x > 0; x--){
        for(let y = n; y > 0; y--){
            if(solve(x, y, n)) {
                results.push([x, y]);
            }
        }
    }
    return results;
}

console.log(sol_equa(1000));
console.log(sol_equa(2000));
