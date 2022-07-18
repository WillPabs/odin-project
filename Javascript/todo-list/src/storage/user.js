export const saveUser = (user) => {
    const user_serialized = JSON.stringify(user);
    localStorage.setItem(user.id, user_serialized);
};

export const getUser = (id) => {
    const user_deserialized = JSON.parse(localStorage.getItem(id));
    return user_deserialized;
}