function fizzBuzz(num){

    let res = []

    for(let i = 1; i <= num; i++){

    if(i % 3 === 0 && i % 5 === 0){
        res.push('FizzBuzz')
    } else if (i % 3 === 0){
        res.push('Fizz')
    } else if (i % 5 === 0){
        res.push('Buzz')
    } else {
        res.push(i)
    }
    }
console.log(res);
}

fizzBuzz(16)