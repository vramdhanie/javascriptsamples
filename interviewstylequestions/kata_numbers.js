(function(s){
    function isLetter(character) {
        return character >= 'a' && character <= 'z';
    }

    function moveLetter(prev, current){
        return isLetter(current)?current + prev:prev + current;
    }

    console.log('Test Move Letter');
    console.log('6b5479'.split('').reduce(moveLetter, ''));

    var stable = function(arr, comp) {
        return exec(arr.slice(), comp);
    };

    stable.inplace = function(arr, comp) {
        var result = exec(arr, comp);

        // This simply copies back if the result isn't in the original array,
        // which happens on an odd number of passes.
        if (result !== arr) {
            pass(result, null, arr.length, arr);
        }

        return arr;
    };

// Execute the sort using the input array and a second buffer as work space.
// Returns one of those two, containing the final result.
    function exec(arr, comp) {
        if (typeof(comp) !== 'function') {
            comp = function(a, b) {
                return String(a).localeCompare(b);
            };
        }

        // Short-circuit when there's nothing to sort.
        var len = arr.length;
        if (len <= 1) {
            return arr;
        }

        // Rather than dividing input, simply iterate chunks of 1, 2, 4, 8, etc.
        // Chunks are the size of the left or right hand in merge sort.
        // Stop when the left-hand covers all of the array.
        var buffer = new Array(len);
        for (var chk = 1; chk < len; chk *= 2) {
            pass(arr, comp, chk, buffer);

            var tmp = arr;
            arr = buffer;
            buffer = tmp;
        }

        return arr;
    }

// Run a single pass with the given chunk size.
    var pass = function(arr, comp, chk, result) {
        var len = arr.length;
        var i = 0;
        // Step size / double chunk size.
        var dbl = chk * 2;
        // Bounds of the left and right chunks.
        var l, r, e;
        // Iterators over the left and right chunk.
        var li, ri;

        // Iterate over pairs of chunks.
        for (l = 0; l < len; l += dbl) {
            r = l + chk;
            e = r + chk;
            if (r > len) r = len;
            if (e > len) e = len;

            // Iterate both chunks in parallel.
            li = l;
            ri = r;
            while (true) {
                // Compare the chunks.
                if (li < r && ri < e) {
                    // This works for a regular `sort()` compatible comparator,
                    // but also for a simple comparator like: `a > b`
                    if (comp(arr[li], arr[ri]) <= 0) {
                        result[i++] = arr[li++];
                    }
                    else {
                        result[i++] = arr[ri++];
                    }
                }
                // Nothing to compare, just flush what's left.
                else if (li < r) {
                    result[i++] = arr[li++];
                }
                else if (ri < e) {
                    result[i++] = arr[ri++];
                }
                // Both iterators are at the chunk ends.
                else {
                    break;
                }
            }
        }
    };

        function do_math(s){
            return Math.round(stable(s.split(' ')
                .map((t)=>{
                    return t.split('')
                        .reduce(moveLetter, '');
                }), (a, b)=>{
                    return +(a.charAt(0) > b.charAt(0)) || +(a.charAt(0) === b.charAt(0)) - 1;
                })
                .map((t)=>{
                    return parseInt(t.substring(1));
                })
                .reduce((prev, current, index)=>{
                    let ans = 0;
                    if(index === 0){
                        ans = current;
                    }else{
                        switch(index % 4){
                            case 0: ans = prev / current;break;
                            case 1: ans = prev + current;break;
                            case 2: ans = prev - current;break;
                            case 3: ans = prev * current;break;
                        }
                    }
                    console.log(ans);
                    return ans;
                }));
        }
        console.log(do_math(s));
})('w219 c52939 6b5479 35z7 46d07 x801 z552 d5680 2703d1 72z30 750d75');