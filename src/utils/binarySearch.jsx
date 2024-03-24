export const binarySearch = (arr, key) => {
    const middleIndex = Math.floor(arr.length / 2)
    const middleValue = arr[middleIndex]
    if (middleValue === key) return true
    if (arr.length <= 1) return false;
    if (middleValue < key) {
        return binarySearch(arr.slice(middleIndex), key)
    } else if (middleValue > key)  {
       return binarySearch(arr.slice(0, middleIndex), key)
    }
    return false
 }