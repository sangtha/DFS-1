
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {


    if (mat === null || mat.length === 0)
        return mat;

    let rowLen = mat.length;
    let colLen = mat[0].length;
    let res = new Array(rowLen).fill(null).map(()=>new Array(colLen).fill(null));

    const updateMatrixHelper = (mat, res, row, col) => {
        //base cases
        if (row < 0 || row >= rowLen || col < 0 || col >= colLen)
            return 9999;
        if (mat[row][col] == 0)
            return 0;
        
        if (row > 0 && mat[row - 1][col] == 0) return 1;
        if  (col > 0 && mat[row][col - 1] == 0) return 1;
        if  (row < rowLen - 1 && mat[row + 1][col] == 0) return 1;
        if  (col < colLen - 1 && mat[row][col + 1] == 0)
            return 1;

        let top, left, right, bottom;
        top = 9999;
        left = 9999;

        if (row > 0 && res[row- 1][col] != 0) {
            top = res[row - 1][col];
        }
        if (col > 0 && res[row][col - 1] != 0) {
            left = res[row][col - 1];
        }

        bottom = updateMatrixHelper(mat, res, row + 1, col);
        right = updateMatrixHelper(mat, res, row, col + 1);

        return Math.min(Math.min(left, right), Math.min(top, bottom)) + 1;
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            res[i][j] = updateMatrixHelper(mat, res, i, j);
        }
    }

    return res;

};