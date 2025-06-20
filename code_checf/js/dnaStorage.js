function dnaStorage(tests) {
    for (let i = 1; i < tests.length; i += 2) {
        // length of the binary string
        const n = parseInt(tests[i]);
        // binay string
        const s = tests[i + 1];
        
        const lettersMap = {
            "00": "A",
            "01": "T",
            "10": "C",
            "11": "G"
        }
        
        let start = 0;
        let outStr = "";
        while((start+2)<= s.length) {
            const str = s.substr(start,2);
            outStr+=lettersMap[str];
            start+=2;
        }
        console.log(outStr);
    }
}