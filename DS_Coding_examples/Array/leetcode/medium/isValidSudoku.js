const hasDuplicate = (arr)=>{
    const map = new Map();

    for(let i=0;i<arr.length;i++){
        const char = arr[i];
        if(map.has(char)){
            return true
        }
        char!=='.' && map.set(char, true);
    }
    return false;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // check rows
    for(let i=0;i<9;i++){
       const row = board[i];
       if(hasDuplicate(row)){
            return false;
       }
    }

     // check columns
     let map = new Map(); 
     for(let i=0;i<9;i++){
       map.clear();
       for(let j=0;j<9;j++){
            const c = board[j][i];
            if(map.has(c)){
                return false;
            }
            c!=='.' && map.set(c, true);
       }
     }


     // check sub boards
     let rowStart = 0
     while(rowStart<7){
        let colStart = 0;
        while(colStart<7){
            let tempMap = new Map();
            for(let i=rowStart;i<rowStart+3;i++){
                for(let j=colStart;j<colStart+3;j++){
                    const c = board[i][j];
                    if(tempMap.has(c)){
                        return false;
                    }
                    c!=='.' && tempMap.set(c, true);
                }
            }
            colStart+=3;
        }
        rowStart+=3;
    }

    return true;
};



console.log(isValidSudoku([[".","3","6",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]));