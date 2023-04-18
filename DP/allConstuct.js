function allConstruct(target, wordBank){
    
    let result = [];

    const allConstructRec = (target, wordBank) =>{
        if(target == '') return [];

        for(let word of wordBank){
            if(target.indexOf(word) == 0){
                let suffix = target.slice(word.length+1);
                ways = allConstructRec(suffix, wordBank);
                result.push([word,...ways]);
            }
        }
    };

    allConstructRec(target, wordBank);

    return result;
}


console.log(allConstruct("prurple",["purp","p","ur","le","purpl"]));