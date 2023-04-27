let arrayOfPaper = [1, 0, 1, 0, 0, 1, 1, 1]
//where 1 == plain paper
// and  0 == glossy paper

let arrayOfTasks = [0, 1, 1, 0, 0, 1, 1, 1]

for(let i = 0; i < arrayOfTasks.length; i++){
    let currentTask = arrayOfTasks[i]
    let currentPaper = arrayOfPaper[0]

    console.log(currentPaper);

    // console.log('task' + ' ' + currentTask);

    if(currentPaper !== currentTask){
        arrayOfTasks.shift()
    } else {
        arrayOfPaper.shift()
        arrayOfTasks.shift()
    }

    console.log(arrayOfPaper);
    console.log(arrayOfTasks);
}
