let layout = [' ', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

function charToNum(c){
    let C = c.toUpperCase();
    return layout.find((str) => {
        return str.indexOf(C) > - 1;
    }).indexOf(C) + 1;
}

function total(msg){
    return msg.split('').reduce((acc, curr) => {
        return acc + charToNum(curr);
    }, 0);
}
console.log(total('lol hey'));

