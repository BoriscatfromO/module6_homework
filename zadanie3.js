function sumN(n1){

      return function(n2){

          return n1+n2;

    }
}
//const sum = sumN(2)(9);
console.log(sumN(2)(3));
//sumN()