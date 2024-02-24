
// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirstLetter(array) {
    if(array.length === 1) {
        return [array[0].charAt(0).toUpperCase() + array[0].slice(1)]
    }
    let result = capitalizeFirstLetter(array.slice(0, -1))
    result.push(array.slice(array.length - 1)[0].charAt(0).toUpperCase() + array.slice(array.length - 1)[0].slice(1))
    return result
}

console.log(capitalizeFirstLetter(['akash', 'kumar', 'singh'])) // ['Akash', 'Kumar', 'Singh']
                // 