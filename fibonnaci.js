function fibonnaci(n) {
    let list = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            list[i] = i;
        } else {
            list[i] = list[i - 1] + list[i - 2];
        }
    }

    return list;
}

function fibonnaciRecur(n, list=[0, 1]) {
    console.log("This was printed recursively");
    if (list.length >= n) return list.slice(0, n);

    list.push(list[list.length - 1] + list[list.length - 2]);

    return fibonnaciRecur(n, list);
}

console.log(fibonnaci(10));
console.log(fibonnaciRecur(10));