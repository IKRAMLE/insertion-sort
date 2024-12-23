function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        
        let key = arr[i];
        let j = i - 1; 
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        }
        
        
        arr[j + 1] = key;
    }
    return arr; 
}

// Example usage:
let arr = [19, 21, 6, 88, 34];
console.log("Original array:", arr);
let sortedArray = insertionSort(arr);
console.log("Sorted array:", sortedArray);
