
const numMap = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}

var intToRoman = function (num) {

    if (numMap[num]) {
        return numMap[num];
    }

    if (num === 0) return '';

    if (num < 5) {
        if (num === 4) return 'IV';
        return 'I'.repeat(num);
    }

    if (num < 10) {
        if (num === 9) return 'IX';
        return 'V' + 'I'.repeat(num - 5);
    }

    if (num < 50) {
        if (num === 40) return 'XL';
        if (num > 40) return 'XL' + intToRoman(num - 40);
        let firstNum = parseInt(num / 10);
        let secondNum = parseInt(num % 10);
        const base = 'X'.repeat(firstNum);
        if (secondNum > 0) {
            return base + intToRoman(secondNum);
        }
        return base;
    }

    if (num < 100) {
        if (num === 90) return 'XC';
        if (num > 90) return 'XC' + intToRoman(num - 90);
        return 'L' + intToRoman(num - 50);
    }

    if (num < 500) {
        if (num === 400) return 'CD';
        if (num > 400) return 'CD' + intToRoman(num - 400);
        let firstNum = parseInt(num / 100);
        let secondNum = parseInt(num % 100);
        const base = 'C'.repeat(firstNum);
        if (secondNum > 0) {
            return base + intToRoman(secondNum);
        }
        return base;
    }

    if (num < 1000) {
        if (num === 900) return 'CM';
        if (num > 900) return 'CM' + intToRoman(num - 900);
        return 'D' + intToRoman(num - 500);
    }

    if (num < 4000) {
        return 'M' + intToRoman(num - 1000);
    }
};