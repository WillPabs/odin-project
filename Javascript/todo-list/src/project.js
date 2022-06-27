export const Project = (title) => {
    const taskList = [];
    const finishedTasks = [];

    const addTask = (task) => {
        taskList.push(task);
    };

    const removeTask = (task) => {
        const index = taskList.findIndex(task);
        taskList.slice(index, 1);
    };

    const finishTask = (task) => {
        if (task in taskList) {
            finishedTasks.push(task);
        };
    };

    const getTaskList = () => {
        return taskList;
    };

    const getFinishedTasks = () => {
        return finishedTasks;
    };

    return {
        addTask,
        removeTask,
        finishTask,
        getTaskList,
        getFinishedTasks
    }
};