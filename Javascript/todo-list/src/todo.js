export const ToDo = (title, description, dueDate, priority) => {
    
    const toggle = () => {
        console.log('toggled');
    }
    
    return {
        title,
        description,
        dueDate,
        priority
    };
};