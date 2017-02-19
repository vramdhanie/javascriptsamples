function cake(x, y){
    return (y.split('').reduce(
        (p, c, i, a)=>{
            return p + ((i%2==0)?c.charCodeAt(0):c.charCodeAt(0) - 96)
        }, 0))/x >= 0.7?'Fire!':'That was close!';
}

cake(256, 'aaaaaddddr');