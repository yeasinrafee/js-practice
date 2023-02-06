const arr = [ 34, 23, 67, 23, 50, -46, 42, -67, 90, -32];

function checkArray(arr){
    const arr2 = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr2.push(arr[i]);
        }else if(arr[i] < 0){
            break;
        }
    }
    return arr2;
}

const result = checkArray(arr);
console.log(result);