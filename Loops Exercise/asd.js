function countUnfinishedTasks(arrayOfTasks, arrayOfPaper) {
    let unfinishedTasks = 0;
  
    for (let i = 0; i < arrayOfTasks.length; i++) {
      let currentTask = arrayOfTasks[i];
      let currentPaper = arrayOfPaper[0];
  
      if (currentPaper === currentTask) {
        arrayOfPaper.shift();
      } else {
        arrayOfTasks.push(arrayOfTasks.shift());
        i--; // decrement i to re-check the current task in the next iteration
        unfinishedTasks++;
      }
    }
  
    return unfinishedTasks;
  }
  
  let arrayOfPaper = [1, 0, 1, 0, 0, 1, 1, 1];
  let arrayOfTasks = [0, 1, 1, 0, 0, 1, 1, 1];
  console.log(countUnfinishedTasks(arrayOfTasks, arrayOfPaper));