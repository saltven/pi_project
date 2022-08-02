let finalPI = 0;
let pi = 4;
let fractionNo = 0;
let history = [];

function PIString(pi) {
    const true_PI = "3.141592653589793";

    let formulaPI = pi.toFixed(6);

    let str = '';
    let arr = [];

    for (let i = 0; i < formulaPI.length; i++) {
        if (formulaPI[i] === true_PI[i]) {
            str += formulaPI[i];
            arr.push(str);
        }
    }

    console.log('arr', arr)

    finalPI = arr[arr.length - 1]
}

function Leibniz() {
    for (let i = 1; i < 1000000; i++, fractionNo++) {
        let den = fractionNo * 2 + 3;
        if (fractionNo % 2 == 0) {
            pi -= 4 / den;
        } else {
            pi += 4 / den;
        }
        
        history.push(pi);
    }
    PIString(pi);
}

Leibniz();

console.log('Final PI in history array', pi);
console.log('Calculated pi by interations', history);

module.exports = { finalPI };