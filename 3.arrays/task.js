function compareArrays(arr1, arr2) {
    const compareArraysResult = arr1.length === arr2.length && arr1.every((n,i) => n === arr2[i]);
    return compareArraysResult;
}
    

function getUsersNamesInAgeRange(users, gender) {
   let result = users.filter(element => element.gender === gender).map(element => 
    element.age).reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1){
        return acc / arr.length;
    }
    return acc;
    }, 0);
   return result;
}

