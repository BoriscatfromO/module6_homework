function analiz(num) {
    if (num <= 1 || num > 1000)
    {
       return "Данные неверные"
    }
else
    {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return "Число составное"
            }
        }
        return "Число простое"
    }
}
console.log(analiz(4))
