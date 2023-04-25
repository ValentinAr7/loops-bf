// let arr = 
//         [[1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12]];

//         for (let i = 0; i < 3; i++) {
//             let s = "";

//             for (let j = 0; j < 4; j++) {
//             s += (arr[i][j] + "|");
//                 }
//             console.log(s);
// }



function sortMat(mat, n)
{
 
    // temporary matrix of size n^2
    let temp = [];
    let k = 0;
     
    // copy the elements of matrix one by one
    // leto temp[]
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            temp[k++] = mat[i][j];
             
    // sort temp[]
    temp.sort(function (a, b) { return b - a });
     
    // copy the elements of temp[] one by one
    // in mat[][]
    k = 0;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            mat[i][j] = temp[k++];
}
 
// function to print the given matrix
function printMat(mat, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++)
            console.log(mat[i][j]);
    }
}
 
// Driver program to test above
let mat = [[5, 4, 7], [1, 3, 8], [2, 9, 6]];
let n = 3;
console.log("Original Matrix:\n");
printMat(mat, n);
sortMat(mat, n);
console.log("\nMatrix After Sorting:\n");
printMat(mat, n);