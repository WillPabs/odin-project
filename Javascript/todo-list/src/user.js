export const User = (name) => {
    let user = Object.create(userFunctions);
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
    getFinishedProjects() {
        return this.finishedProjects;
    },
    finishProject(project) {
        project.finishProject();
        this.finishedProjects.push(project);
    },
}