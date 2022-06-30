export const Content = (content) => {
    const contentDiv = document.querySelector('.content');
    if (!contentDiv) {
        const container = document.createElement('div');
        container.classList.add('content');
        container.appendChild(content);
        return container;
    } else {
        switchContent(content);
    }
}

export const switchContent = (content) => {
    const container = document.querySelector('.content');
    container.replaceChildren(content);
}