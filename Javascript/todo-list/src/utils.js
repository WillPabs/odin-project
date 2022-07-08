export const showCreate = (head, toInsert, callback) => {
    if (!toInsert) {
        const createContainer = callback();
        head.parentNode.insertBefore(createContainer, head.nextSibling);
    } else {
        toggleShow(toInsert);
    }
}

const toggleShow = (toInsert) => {
    const createP = toInsert;
    if (createP.style.display === 'none') {
        createP.style.display = 'inline';
    } else {
        createP.style.display = 'none';
    }
}

export const makeFirstLetterCapital = (fieldName) => {
    return (fieldName[0].toUpperCase() + fieldName.substring(1));
} 