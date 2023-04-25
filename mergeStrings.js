function mergeStrings(str1, str2){

    for(let i = 0; i < str1.length; i++){

        console.log(str1[i]);

        for(let j = 0; j < str2.length; j++){
            console.log(str2[j]);
            continue;
        }
    }

}

mergeStrings('abc', '123')