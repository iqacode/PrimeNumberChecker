function checkPrime() {
    let n = document.getElementById("number").value;
    let result = document.getElementById("result");
    let isPrime = true;
    if (n <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        result.innerHTML = n + " is a prime number.";
    } else {
        result.innerHTML = n + " is not a prime number.";
    }
}