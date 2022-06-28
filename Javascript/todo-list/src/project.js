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

    const getTitle = () => {
        return title;
    }

    const getTaskList = () => {
        return taskList;
    };

    const getTasksByPriority = (priority) => {
        if (priority === 'high') return getHighPriorityTasks();
        else if (priority === 'medium') return getMediumPriorityTasks();
        else if (priority === 'low') return getLowPriorityTasks();
    }

    const getHighPriorityTasks = () => {
        const high = [];
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].priority === 'high') high.push(taskList[i]);
        };
        return high;
    };

    const getMediumPriorityTasks = () => {
        const medium = [];
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].priority === 'medium') medium.push(taskList[i]);
        };
        return medium;
    };

    const getLowPriorityTasks = () => {
        const low = [];
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].priority === 'low') low.push(taskList[i]);
        };
        return low;
    };

    const getFinishedTasks = () => {
        return finishedTasks;
    };

    return {
        addTask,
        removeTask,
        finishTask,
        getTitle,
        getTaskList,
        getTasksByPriority,
        getFinishedTasks
    };
};