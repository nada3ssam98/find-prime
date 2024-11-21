function findPrimesBetweenTwo(n, m) {
    if (n > m) {
        let temp = n;
        n = m;
        m = temp;
    }

    for (let i = n; i <= m; i++) {
        let isPrime = true;
        if (i < 2) continue;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) console.log(i);
    }
}


findPrimesBetweenTwo(10, 20);