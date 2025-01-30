function evenOdd(arr){
    for (let item of arr){
        let num = +item;
        if (typeof num == "number" && !isNaN(num)){
            if (num === 0){
                console.log('Ноль');
            } else if (num % 2 === 0){
                console.log('Четное число');
            } else {
                console.log('Нечетное число');
            }
        } else {
            console.log('Упс! Что-то пошло не так.');
        }
    }
}

function evenOddCount(arr){
    let even = 0;
    let odd = 0;
    let zero = 0;
    for (let item of arr){
        let num = +item;
        if (typeof num == "number" && !isNaN(num)){
            if (num === 0){
                zero++;
            } else if (num % 2 === 0){
                even++;
            } else {
                odd++;
            }
        }
    }
    console.log(`Четных: ${even}\nнечетных: ${odd}\nнулей: ${zero}`);
}

let arr = [1, 4, 'a', 0, 'b', 2, 0, 7, 'c', 5, 0, 9];
// evenOdd(arr);
evenOddCount(arr);
