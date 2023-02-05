const names = ['yeasin', 'rafee', 'shakil', 'alif', 'kawsar', 'mamun', 'yeasin', 'rafee'];

const removeDuplicate = function(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        if(unique.includes(names[i]) === false){
            unique.push(names[i]);
        }
    }
    return unique;
}

console.log(removeDuplicate(names));