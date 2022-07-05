export const Task = (title, description, dueDate, priority, notes) => {
    let self = {};
    self.title = title;
    self.description = description;
    self.dueDate = dueDate;
    self.priority = priority;
    self.notes = notes;
    self.finished = false;
    
    return Object.assign(self, taskFunctions);
};

const Priority = {
    HIGH: 'High',
    MEDIUM: 'Medium',
    LOW: 'Low'
}

const taskFunctions = {
    setTitle(newTitle) {
        this.title = newTitle;
    },
    toggleFinished() {
        this.finished === true ? this.finished = false : this.finished = true;
    }
};