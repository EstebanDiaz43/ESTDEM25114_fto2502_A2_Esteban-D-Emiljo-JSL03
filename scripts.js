// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}

const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Function to add tasks
function addTasks(TaskArray, maxNewTasks = 3) {
  let AddedTasks = 0;
  let lastId = TaskArray[TaskArray.length - 1]?.id || 0;

  // Loop to add new tasks
  while (AddedTasks < maxNewTasks) {
    const addAnother = confirm("Add a new task?");
    if (!addAnother) break;

    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    const status = prompt("Enter task status (todo, doing, done):");

    // Validate status
    lastId++;
    const NewTask = {
      id: lastId,
      title,
      description,
      status,
    };

    TaskArray.push(NewTask);
    AddedTasks++;
  }

  // Check if the maximum number of new tasks has been reached
  if (AddedTasks === maxNewTasks) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
  }
}

// Function to filter completed tasks
function filterCompletedTasks(taskArray) {
  return taskArray.filter((task) => task.status === "done");
}

// Function to log all tasks and completed tasks
function logTasks(taskArray) {
  console.log("All Tasks");
  console.log(taskArray);

  const completedTasks = filterCompletedTasks(taskArray);
  console.log("Completed Tasks");
  console.log(completedTasks);
}

// Add tasks and display them
addTasks(initialTasks);
logTasks(initialTasks);
