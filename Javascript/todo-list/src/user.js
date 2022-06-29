export const User = (name) => {
    let self = {};
    self.name = name;
    self.projects = [];

    return Object.assign(self, userFunctions);
} 

const userFunctions = {
    addProject(project) {
        this.projects.push(project);
    }
}