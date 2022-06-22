export const addFooter = () => {

    const renderFooterList = (items) => {
        const ul = document.createElement('ul');
        items.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        return ul;
    };

    const footerList = [
        'Menu images used from unsplash.com',
        'Other icons used from flaticon.com',
        'Contact images used from self'
    ];

    return renderFooterList(footerList);
};