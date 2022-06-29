export const Task = (title, description, dueDate, priority, notes) => {
    let self = {};
    self.title = title;
    self.description = description;
    self.dueDate = dueDate;
    self.priority = priority;
    self.notes = notes;
    
    return Object.assign(self, taskFunctions);
};

const taskFunctions = {
    setTitle(newTitle) {
        this.title = newTitle;
    }
};