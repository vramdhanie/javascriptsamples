function validParentheses(str){
    let stack = [];
    let err = true;
    str.split('').every((c)=>{
        if(c == '('){
            stack.push(c);
        }else{
            if(stack.length > 0){
                stack.pop();
            }else{
                err = false;
                return false;
            }
        }
        return true;
    })

    return stack.length == 0 && err;
}

console.log(validParentheses( "()" ))
console.log(validParentheses( ")(()))" ))
console.log(validParentheses( "(" ))
console.log(validParentheses( "(())((()())())" ))