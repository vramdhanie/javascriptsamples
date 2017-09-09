
const merge = (sequence, start, middle, end) => {
    let left = sequence.slice(start, middle + 1);
    let right = sequence.slice(middle + 1, end + 1);
    left.push(Number.POSITIVE_INFINITY);
    right.push(Number.POSITIVE_INFINITY);

    let i = 0;
    let j = 0;

    for(let k = start; k <= end; k++){
        if(left[i] <= right[j]){
           sequence[k] = left[i];
           i++;
        }else{
            sequence[k] = right[j];
            j++;
        }
    }
    return sequence;
}

const mergesort = (sequence, start, end) => {
    debugger;
    if(start < end){
        let middle = Math.floor((start + end)/2);
        sequence = mergesort(sequence, start, middle);
        sequence = mergesort(sequence, middle + 1, end);
        merge(sequence, start, middle, end);
    }
    return sequence;
}

mergesort([4, 3, 2, 1], 0, 3);

module.exports = mergesort;


