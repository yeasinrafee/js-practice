
const bestfriend = function(friends){
    leargeFriend = friends[0];
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length > leargeFriend.length){
            leargeFriend = friends[i];
        }
    }
    return leargeFriend;
}

const friends = ["Rafee" , "yeasin", "holaaaaaa", "bolaaaaa", "Nolaaaaaaaaa"];
const result =  bestfriend(friends);

console.log(result);