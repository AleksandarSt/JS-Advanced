/**
 * Created by Aleksandar on 16/07/2017.
 */

function getArgumentInfo() {
    let sorted = [];
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type}: ${obj}`);

        if (!summary[type]) {
            summary[type] = 1
        }
        else {
            summary[type]++;
        }
    }

    for (let currentType in summary) {
        sorted.push([currentType, summary[currentType]])
    }

    sorted.sort((a, b) => b[1] - a[1]);
    for (let obj of sorted) {
        console.log(`${obj[0]} = ${obj[1]}`);
    }
}

getArgumentInfo('cat', 42, function () {
    console.log('Hello world!');
});
