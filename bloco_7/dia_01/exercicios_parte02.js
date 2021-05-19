const fatorial = n => {
    let answer = n;
    if (n > 0) {
        for (let index = n - 1; index > 0; index -= 1) {
            answer = answer * index;
        }
    } else {
        return `Não é possível calcular fatorial de ${n}.`
    }
    return answer;
}
console.log(fatorial(4));