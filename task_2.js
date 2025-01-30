function simpleNum(num){
    if (typeof num != "number" || isNaN(num)){
        return `Тип данных должен быть "Число"`;
    } else if (num < 0){
        return `Отрицательное число не может являться ни простым ни составным`;
    } else if (num === 0 || num === 1){
        return `Число ${num} не может являться ни простым ни составным`;
    } else if (1 < num && num <= 1000){
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                return `Число ${num} является составным`;
            }
        }
        return `Число ${num} является простым`;
    } else {
        return `Число ${num} больше 1000`;
    }
}

console.log(simpleNum(999));
