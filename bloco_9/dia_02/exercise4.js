const divPor = (dividendo, arrDivisores) => arrDivisores.map((divisor) => (dividendo / divisor));

const promise = () => {
    const arr = [];

        for (let index = 0; index < 10; index += 1) {
            const num = Math.ceil(Math.random() * (50 - 1) + 1)
            arr.push(Math.pow(num, 2));
        }

    const sumArr = arr.reduce((acc, num) => (acc + num));
    // console.log(sumArr);
    
    return new Promise((resolve, reject) => {
        if (sumArr < 8000) {
            console.log('Promise resolvida');
            console.log(divPor(sumArr, [2, 3, 5, 10]));
            resolve();
        } else {
            console.log(sumArr);
            reject('É mais de oito mil! Essa promise deve estar quebrada!')
        }
    })
};

const resolvePromise = async () => {
    try {
        await promise()
    } catch (error) {
        console.log(error);
    }
};

resolvePromise();