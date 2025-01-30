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

let arr = [1, 4, 'a', 0, 'b', 2, 0, 7, 'c', 5, 0, 9];
evenOdd(arr);
