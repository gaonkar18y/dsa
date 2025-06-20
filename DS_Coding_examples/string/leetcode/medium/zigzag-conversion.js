/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows ==1){
        return s;
    }

    let pointer = 0;
    const arrOfArrays = [];

    while(pointer<s.length) {

        let count = numRows;
        const arr = [];
        while(count){
            count--;
            arr.push(s[pointer]);
            pointer++;
        }

        arrOfArrays.push(arr);

        if(pointer>=s.length){
            break;
        }

        count = numRows-2;
        const arr2 = [''];
        while(count){
            count--;
            arr2.unshift(s[pointer]);
            pointer++;
        }
        arr2.unshift('')

        arrOfArrays.push(arr2);
    }

    let result = '';

    let rowC = 0;
    while(rowC<numRows){
        for(let i=0;i<arrOfArrays.length;i++) {
            const c = arrOfArrays[i][rowC];
            if(c) result+=c;
        }
        rowC++
    }

    return result;
};

//console.log(convert("PAYPALISHIRING",3))
//Output: "PAHNAPLSIIGYIR"

//console.log(convert("PAYPALISHIRING",4))
//Output: "PINALSIGYAHRPI"


console.log(convert("ABCDE",4))