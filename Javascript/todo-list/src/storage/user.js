export const saveUser = (user) => {
    console.log(`Saving user ${user}`)
    if (!localStorage.getItem(user.id)) {
        const user_serialized = JSON.stringify(user);
        localStorage.setItem(user.id, user_serialized);
    } else {
        const user_deserialized = getUser(user.id);
        user_deserialized.name = user.name;
        user_deserialized.projects = user.projects;
        user_deserialized.finishedProjects = user.finishedProjects;
        user_deserialized.profilePicture = user.profilePicture;
        localStorage.setItem(user.id, JSON.stringify(user_deserialized));
    };   
};

export const getUser = (id) => {
    const user_deserialized = JSON.parse(localStorage.getItem(id));
    return user_deserialized;
};