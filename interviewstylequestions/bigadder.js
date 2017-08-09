const addDigits = (a, b, c) => {
    let ans = a + b + c;
    return {result:ans % 10, carry:Math.floor(ans / 10)};
}

const trim = (out) => {
    return out.replace(/^0+/, '');
}

module.exports = add = (a, b) => {
    let out = '';
    let x, y;
    if(a.length >= b.length){
        x = a;
        y = b;
    }else{
        x = b;
        y = a;
    }

    y = y.split('').reverse();
    let carry = 0;
    x.split('').reverse().forEach((c, i) => {
        let ans = addDigits(+c, +(y[i]?y[i]:0), carry);
        carry = ans.carry;
        out = ans.result + out;
    });
    return trim((carry?carry:'') + out )
}
