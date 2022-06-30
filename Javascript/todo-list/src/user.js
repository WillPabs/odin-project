export const User = (name) => {
    let self = {};
    self.name = name;
    self.projects = [];
    self.profilePicture;

    return Object.assign(self, userFunctions);
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
    }
}