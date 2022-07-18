import { User } from "../user";

export const saveUser = (user) => {
    console.log(`Saving user ${user}`)
    if (!localStorage.getItem(user.id)) {
        const user_serialized = JSON.stringify(user);
        localStorage.setItem(user.id, user_serialized);
    } else {
        setUser(user);
    }
    
};

export const getUser = (id) => {
    const user_deserialized = JSON.parse(localStorage.getItem(id));
    return user_deserialized;
}

const setUser = (user) => {
    const user_deserialized = User(getUser(user.id));
    user_deserialized.updateUser(user);
}