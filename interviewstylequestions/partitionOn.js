// var items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {return n % 2 == 0}
// var i = partitionOn(isEven, items);
// // items should now be [1, 3, 5, 2, 4, 6]
// // i     should now be 3


const merge = (sequence, start, middle, end, pred) => {
    let left = sequence.slice(start, middle + 1);
    let right = sequence.slice(middle + 1, end + 1);

    let i = 0;
    let j = 0;
    k = start;

    while(i < left.length && j < right.length){
        if(pred(left[i]) <= pred(right[j])){
            sequence[k] = left[i];
            i++;
        }else{
            sequence[k] = right[j];
            j++;
        }
        k++;
    }

    if(i < left.length){
        sequence.splice(k, left.length - i, ...left.slice(i));
    }else{
        sequence.splice(k, right.length - j, ...right.slice(j));
    }


    return sequence;
}

const mergesort = (sequence, start, end, pred) => {
    if(start < end){
        let middle = Math.floor((start + end)/2);
        sequence = mergesort(sequence, start, middle, pred);
        sequence = mergesort(sequence, middle + 1, end, pred);
        merge(sequence, start, middle, end, pred);
    }
    console.log(sequence)
    return sequence;
}

const partitionOn = (func, items) => {
    return mergesort(items, 0, items.length - 1, func).findIndex(func);
}

module.exports = partitionOn;