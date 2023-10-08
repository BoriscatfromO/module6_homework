let arr = [1,2,3,4,0,"apple",22];
let count=0;
let count1=0;
let czero=0;
function analizelement() {

    for (let i = 0; i < arr.length; i = i + 1) {
        if (typeof arr[i] == 'number' && !isNaN(arr[i])) {
            if (arr[i] !== 0) {
                if (arr[i] % 2 == 0) {
                    count = count + 1;
                } else {
                    count1 = count1 + 1;
                }
            } else {
                czero = czero + 1;
            }
        }
    }
    console.log('Число четных чисел в массиве = ', count);
    console.log('Число нечетных чисел в массиве = ', count1);
    console.log('Число нулей в массиве = ', czero)
}
analizelement();