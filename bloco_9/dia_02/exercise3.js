const divPor = (dividendo, arrDivisores) => arrDivisores.map((divisor) => (dividendo / divisor));

const promise = new Promise((resolve, reject) => {
    const arr = [];
        for (let index = 0; index < 10; index += 1) {
            const num = Math.ceil(Math.random() * (50 - 1) + 1)
            arr.push(Math.pow(num, 2));
        }
    const sumArr = arr.reduce((acc, num) => (acc + num))
    console.log(sumArr);
    (sumArr < 8000) ? resolve(sumArr) : reject();
})
.then((num) => {
    console.log('Promise resolvida');
    console.log(divPor(num, [2, 3, 5, 10]));
    return divPor(num, [2, 3, 5, 10]);
})
.catch(() => console.log('Promise rejeitada'));
