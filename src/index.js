module.exports = function towelSort(matrix) {
    const array = [];

    if (matrix == null) return []
    // пройдемся по матрице по змеиному
    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            let index = i % 2 === 0 ? j : (matrix[i].length - 1 - j)
            array.push(matrix[i][index])
        }
    }
    return array;
}
