/*
   filename: complex_code.js

   This code demonstrates a sophisticated and elaborate implementation of a task manager application in JavaScript.
   It includes various features such as creating tasks, setting due dates, assigning labels, adding comments, and more.
   The code is designed to handle a large number of tasks with efficiency and readability in mind.

   Author: [Your Name]
   Date: [Current Date]
*/

// --------------------------- TASK MANAGER ---------------------------

class Task {
  constructor(name, dueDate, creator) {
    this.name = name;
    this.dueDate = dueDate;
    this.creator = creator;
    this.labels = [];
    this.comments = [];
    this.completed = false;
  }

  assignLabel(label) {
    this.labels.push(label);
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  markAsCompleted() {
    this.completed = true;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  createTask(name, dueDate, creator) {
    const task = new Task(name, dueDate, creator);
    this.tasks.push(task);
    return task;
  }

  getTasks(label) {
    if (!label) {
      return this.tasks;
    }
    return this.tasks.filter(task => task.labels.includes(label));
  }

  markTaskAsCompleted(taskName) {
    const task = this.tasks.find(task => task.name === taskName);
    if (task) {
      task.markAsCompleted();
    }
  }
}

// --------------------------- USAGE EXAMPLE ---------------------------

// Create a new task manager
const taskManager = new TaskManager();

// Create some tasks
taskManager.createTask('Implement authentication', '2022-06-30', 'John Doe');
taskManager.createTask('Design UI for dashboard', '2022-07-15', 'Jane Smith');
taskManager.createTask('Optimize database queries', '2022-07-10', 'Alice Johnson');

// Assign labels to tasks
taskManager.getTasks()[0].assignLabel('Backend');
taskManager.getTasks()[1].assignLabel('Frontend');
taskManager.getTasks()[2].assignLabel('Database');

// Add comments to tasks
taskManager.getTasks()[0].addComment('Remember to implement password hashing.');
taskManager.getTasks()[1].addComment('Consider using a modern CSS framework for faster development.');

// Mark a task as completed
taskManager.markTaskAsCompleted('Implement authentication');

// Get all tasks
const allTasks = taskManager.getTasks();
console.log(allTasks);

// Get tasks with specific labels
const frontendTasks = taskManager.getTasks('Frontend');
console.log(frontendTasks);

// Get completed tasks
const completedTasks = allTasks.filter(task => task.completed);
console.log(completedTasks);

// Output task details
allTasks.forEach(task => {
  console.log(`
    Task: ${task.name}
    Due Date: ${task.dueDate}
    Creator: ${task.creator}
    Labels: ${task.labels.join(', ')}
    Comments: ${task.comments.join('\n')}
    Completed: ${task.completed ? 'Yes' : 'No'}
  `);
});
// ...continues...