const intervalId = setInterval(function (a, b) {
          // let x=a;
    for (let x = a-1; x < b; x = x + 1) {
        console.log(x + 1);
    }
    clearInterval(intervalId)
}, 1000, 5,  15);

