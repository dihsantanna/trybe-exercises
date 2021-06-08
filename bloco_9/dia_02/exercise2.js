const promise = new Promise((resolve, reject) => {
    const arr = [];
        for (let index = 0; index < 10; index += 1) {
            const num = Math.ceil(Math.random() * (50 - 1) + 1)
            arr.push(Math.pow(num, 2));
        }
    const sumArr = arr.reduce((acc, num) => (acc + num))
    // console.log(sumArr);
    (sumArr < 8000) ? resolve() : reject();
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));
