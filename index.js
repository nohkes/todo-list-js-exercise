// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function() {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

newtask1 = newTask("Clean Cat Litter ten times", "ewww"); // task 0
newtask2 = newTask("Do Laundry new", "yay");
const tasks = [newtask1, newtask2]; // task 1

newtask1.logTaskState(); // Clean Cat Litter has not been completed
newtask1.completeTask();
newtask1.logTaskState();
newtask2.logTaskState();
console.log(tasks); // Clean Cat Litter has been completed
