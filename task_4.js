function printNumbers(a, b) {
  let timerId = setInterval(function () {
    if (a <= b) {
      console.log(a);
      a++;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

printNumbers(5, 15);
