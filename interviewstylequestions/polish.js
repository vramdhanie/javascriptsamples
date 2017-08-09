module.exports = polish = (exp) => {
    let stack = [];
    arr = exp.split(' ')
    arr.forEach((c) => {
        console.log(c, stack);
        if(['+', '-', '*', '/'].includes(c)){
            console.log('operator:', c);
            let b = stack.pop();
            let a = stack.pop();
            stack.push(operate(+a, +b, c));
        }else{
            console.log('Operand: ', c);
            stack.push(c);
        }
    });
    return stack.pop();
}

function operate(a, b, c){
    switch(c){
        case '+':return a + b;
        case '-':return a - b;
        case '*':return a * b;
        case '/':return a / b;
    }
}
