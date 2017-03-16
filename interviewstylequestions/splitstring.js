Array.prototype.equals = function(array){
    if(!array){
        return false;
    }

    if(this.length != array.length){
        return false;
    }

    for (let i = 0; i < this.length; i++){
        if(this[i] != array[i]){
            return false;
        }
    }
    return true;
}

function split(str){
    if(str.length == 2){
        return [str];
    }else{
        let mid = str.length / 2;
        if(mid % 2 != 0){
            mid -= 1;
        }
        return split(str.slice(0, mid)).concat(split(str.slice(mid)));
    }
}


function solution(str){
    if(str.length % 2 != 0){
        str += '_';
    }
    return split(str);
}

(function(){
    console.log(solution('abc').equals(['ab', 'c_'])?'Odd length string passed':'Odd length string failed');
    console.log(solution('abcd').equals(['ab', 'cd'])?'Even length string passed':'Even length string failed');
    console.log(solution('abcdefghij').equals(['ab', 'cd', 'ef', 'gh', 'ij'])?'Mid is odd passed':'Mid is odd failed');
    console.log(solution('ab').equals(['ab'])?'Length of 2 passed':'Length of 2 failed');
})();