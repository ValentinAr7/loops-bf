function countUnfinishedTasks(tasks, papers) {
    let unfinished = 0;
    let i = 0;
  
    while (i < tasks.length) {
      if (tasks[i] === papers[0]) {
        // Remove the top paper from the stack
        papers.shift();
        // Remove the current task from the queue
        tasks.splice(i, 1);
      } else {
        // Move the current task to the end of the queue
        tasks.push(tasks.splice(i, 1)[0]);
        // Increment the number of unfinished tasks
        unfinished++;
      }
    }
  
    return unfinished;
  }
  
  let arrayOfPaper = [1, 0, 1, 0, 0, 1, 1, 1];
  let arrayOfTasks = [0, 1, 1, 0, 0, 1, 1, 1];
  console.log(countUnfinishedTasks(arrayOfTasks, arrayOfPaper));