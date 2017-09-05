module.exports = (arr) => {
    let swapped = false;
    let n = arr.length - 1;
    do{

        swapped = false;
        for(let i = 0; i < n; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;

    }while(swapped);

    return arr;

}