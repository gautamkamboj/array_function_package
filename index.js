const arrayUtils = {
    // 1. Sum of Array
    sum: function(array) {
        return array.reduce((acc, curr) => acc + curr, 0);
    },

    // 2. Clear Repeated Numbers
    clearRepeated: function(array) {
        return Array.from(new Set(array));
    },

    // 3. Reverse Array
    reverse: function(array) {
        return array.slice().reverse();
    },

    // 4. Filter
    filter: function(array, predicate) {
        return array.filter(predicate);
    },

    // 5. Map
    map: function(array, mapper) {
        return array.map(mapper);
    },

    // 6. Sort
    sort: function(array, ascending = true) {
        return array.slice().sort((a, b) => ascending ? a - b : b - a);
    },

    // 7. Unique Elements
    unique: function(array) {
        return Array.from(new Set(array));
    },

    // 8. Find Maximum
    max: function(array) {
        return Math.max(...array);
    },

    // 9. Find Minimum
    min: function(array) {
        return Math.min(...array);
    },

    // 10. Concatenate Arrays
    concatenate: function(array1, array2) {
        return [...array1, ...array2];
    }
};



export default arrayUtils;