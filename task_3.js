function sum_func(num){
    return function (arg){
        return num + arg;
    };
}

const sum = sum_func(4);
console.log(sum(5));
