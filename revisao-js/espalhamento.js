function somaTudo(...nums) {
    let soma = 0;
    for (let n of nums) soma += n;
    return soma;
}

console.log(somaTudo(12, 45, -5));
console.log(somaTudo(2, 76, -2, 41, 19, 11, 22, 30));


function calcular(oper, ...nums) {
    let res;
    switch (oper) {
        case '+':
            res = somaTudo(...nums);
            break;
        case '*':
            res = 1;
            for (let n of nums) res *= n;
    }
    return res;
}

console.log(calcular('*', 12, 45, -5));
console.log(calcular('+', 2, 76, -2, 41, 19, 11, 22, 30));