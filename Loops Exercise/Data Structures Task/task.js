let arrayOfPaper = [1, 0, 1, 0, 0, 1, 1, 1]
//where 1 == plain paper
// and  0 == glossy paper
let unfinishedTasks = 0

let arrayOfTasks = [0, 1, 1, 0, 0, 1, 1, 1]
let notMatch = false

for(let i = 0; i < arrayOfTasks.length; i++){
    let currentTask = arrayOfTasks[i]
    let currentPaper = arrayOfPaper[0]

    // console.log(currentPaper);

    // console.log('task' + ' ' + currentTask);

    if(currentPaper === currentTask){
        arrayOfPaper.shift()
        arrayOfTasks.shift()


    } else {
        arrayOfTasks.push(arrayOfTasks.shift())
        i--
        unfinishedTasks++
    }

    console.log('Paper' + ' '  + arrayOfPaper);
    console.log('Tasks' + ' '  + arrayOfTasks);
    console.log('---------------------------');
}
