export const User = (name) => {
    const user = Object.create(userFunctions);
    user.id = Math.floor(Math.random()*100);
    user.name = name;
    user.projects = [];
    user.finishedProjects = [];
    user.profilePicture;

    return user;
} 

const userFunctions = {
    addProject(project) {
        this.projects.push(project);
    },
    addProfilePicture(url) {
        if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)) {
            this.profilePicture = url;
        } else {
            throw 'This is not a valid image.';
        }
    },
    getInProgressProjects() {
        let projects = [];
        this.projects.forEach(p => {
            if (p.finished === false) projects.push(p);
        });
        return projects;
    },
    getFinishedProjects() {
        let projects = [];
        this.projects.forEach(project => {
            if (project.finished === true && !this.finishedProjects.includes(project)) {
                projects.push(project);
            }
        })
        return projects;
    },
    restoreProject(project) {
        project.restoreProject();
        console.log(this.finishedProjects.indexOf(project));
        this.finishedProjects.splice(this.finishedProjects.indexOf(project), 1);
    },
    finishProject(project) {
        project.finishProject();
        this.finishedProjects.push(project);
    },
    getId() {
        return this.id;
    },
    updateUser(user) {
        this.name = user.name;
        this.projects = user.projects;
        this.finishedProjects = user.finishedProjects;
        this.profilePicture = user.profilePicture;
    }
}