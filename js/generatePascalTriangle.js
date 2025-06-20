/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0) {
        return [];
    }

    if(numRows == 1) {
        return [[1]];
    }

    let rows = [[1]];
    while(rows.length < numRows) {
        const tempArr = [1];
        const prevArr = rows[rows.length-1];
        for(let i=1;i<prevArr.length;i++) {
            tempArr.push(prevArr[i-1]+prevArr[i]);
        }
        tempArr.push(1);
        rows.push(tempArr);
    }

    return rows;
};

console.log(generate(5));
