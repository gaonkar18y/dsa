function Wordle(tests) {
    let t = parseInt(tests[0]);
    for (let i = 1; i < tests.length; i += 2) {
        const s = tests[i];
        const t = tests[i + 1];
        const outStrArr=[];
        for(let position=0;position<s.length;position++) {
            if(s.charAt(position) === t.charAt(position)) {
                outStrArr.push("G");
            } else {
                outStrArr.push("B");
            }
        }
        console.log(outStrArr.join(""));
    }
}