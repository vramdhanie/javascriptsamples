/**
 * Write an algorithm to group a list of words into anagrams.
 * For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
 * the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
 * @type {[*]}
 */
let words = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

function findAnagrams(words){
    let anagrams = {};
    words.forEach((word)=> {
        let ordered = word.split('').sort().join('');
        if(anagrams[ordered]){
            anagrams[ordered].push(word);
        }else{
            anagrams[ordered] = [word];
        }
    });
    let results = [];
    Object.keys(anagrams).forEach((key)=>{
        results.push(anagrams[key]);
    });
    return results;
}

console.log(findAnagrams(words));