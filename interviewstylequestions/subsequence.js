const longestIncrSubArray = (seq) => {

    let ans = seq.reduce((a, c)=>{
        //get the current sequence
        let s = a.pop();

        if(s.length === 0){
            s.push(c);
            a.push(s);
        }else{
            if(c > s[s.length - 1]){
                s.push(c);
                a.push(s);
            }else{
                a.push(s);
                a.push([c]);
            }
        }

        return a;

    }, [[]])
        .reduce((a, c) => {

            return a.length >= c.length ? a : c;

        }, []);

    return ans.length >= 2 ? ans : [];

}

module.exports =  longestIncrSubArray;