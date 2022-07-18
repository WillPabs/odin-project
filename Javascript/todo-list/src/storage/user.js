export const saveUser = (user) => {
    const user_serialized = JSON.stringify(user);
    if (!localStorage.getItem(user.id)) {
        localStorage.setItem(user.id, user_serialized);
    } else {
        setUser(user_serialized);
    }
    
};

export const getUser = (id) => {
    const user_deserialized = JSON.parse(localStorage.getItem(id));
    return user_deserialized;
}

const setUser = (user) => {
    const user_deserialized = getUser(user.id);
    user_deserialized.setUser(user);
}