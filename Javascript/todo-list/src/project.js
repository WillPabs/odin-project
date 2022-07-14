export const Project = (title) => {
    let project = Object.create(projectFunctions);
    project.title = title;
    project.taskList = [];
    project.finishedTasks = [];
    project.finished = false;

    return project;
};

const projectFunctions = {
    addTask(task) {
        this.taskList.push(task);
    },
    removeTask(task) {
        const index = this.taskList.findIndex(task);
        taskList.slice(index, 1);
    },
    finishTask(task) {
        if (task in this.taskList) {
            this.finishedTasks.push(task.finishTask());
        };
    },
    getTitle() {
        return this.title;
    },
    getTaskList() {
        return this.taskList;
    },
    getTasksByPriority(priority) {
        if (priority === 'high') return this.getHighPriorityTasks();
        else if (priority === 'medium') return this.getMediumPriorityTasks();
        else if (priority === 'low') return this.getLowPriorityTasks();
    },
    getHighPriorityTasks() {
        const high = [];
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].priority === 'high') high.push(this.taskList[i]);
        };
        return high;
    },
    getMediumPriorityTasks() {
        const medium = [];
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].priority === 'medium') medium.push(this.taskList[i]);
        };
        return medium;
    },
    getLowPriorityTasks() {
        const low = [];
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].priority === 'low') low.push(this.taskList[i]);
        };
        return low;
    },
    getUncompletedTasks() {
        let tasks = [];
        this.taskList.forEach(task => {
            if (!task.finished) tasks.push(task);
        });
        return tasks;
    },
    getFinishedTasks() {
        let tasks = [];
        this.taskList.forEach(task => {
            if (task.finished) tasks.push(task);
        })
        return tasks;
    },
    finishProject() {
        this.finished = true;
    },
    restoreProject() {
        this.finished = false;
    }
};