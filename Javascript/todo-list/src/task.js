import { format } from "date-fns";

export const Task = (title, description, dueDate, priority, notes) => {
    let task = Object.create(taskFunctions);
    task.title = title;
    task.description = description;
    task.dueDate = format(new Date(dueDate), 'MM/dd/yy');
    task.priority = priority;
    task.notes = notes;
    task.finished = false;
    
    return task;
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
    setDescription(newDescription) {
        this.description = newDescription;
    },
    setDueDate(newDate) {
        this.dueDate = newDate;
    },
    setPriority(newPriority) {
        this.priority = newPriority;
    },
    setNotes(newNotes) {
        this.notes = newNotes;
    },
    finishTask() {
        this.finished = true;
    },
    toggleFinished() {
        this.finished === true ? this.finished = false : this.finished = true;
    }
};