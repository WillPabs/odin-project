import pfp1 from './images/DeadGod_5011.png';
import pfp2 from './images/GenMeta_3063.png';

export const addContact = () => {
    
    const createContact = (position, name, number, email, profilePicture) => {
        const outer = document.createElement('div');
        outer.classList.add('outer');

        const contactContainer = document.createElement('div');
        contactContainer.classList.add('contact');
        contactContainer.classList.add('inner');
        
        const nameDiv = document.createElement('div');
        nameDiv.textContent = name;
        nameDiv.classList.add('contact-name');

        const positionDiv = document.createElement('div');
        positionDiv.textContent = position;
        positionDiv.classList.add('contact-position');

        const numberDiv = document.createElement('div');
        numberDiv.textContent = number;
        numberDiv.classList.add('contact-number');
        
        const emailDiv = document.createElement('div');
        emailDiv.textContent = email;
        emailDiv.classList.add('contact-email');
        
        const profilePictureDiv = document.createElement('img');
        profilePictureDiv.src = profilePicture;
        profilePictureDiv.classList.add('contact-pic');

        contactContainer.appendChild(nameDiv);
        contactContainer.appendChild(positionDiv);
        contactContainer.appendChild(numberDiv);
        contactContainer.appendChild(emailDiv);
        contactContainer.appendChild(profilePictureDiv);

        outer.appendChild(contactContainer);
        return outer;
    };

    const container = document.createElement('div');
    container.id = 'contact-container';
    container.classList.add('container');
    
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.classList.add('outer');
    const inner = document.createElement('div');
    inner.classList.add('inner');
    inner.textContent = 'Contact Us';
    headline.appendChild(inner);
    container.appendChild(headline);

    const will = createContact('CEO', 'William Pabitero', '111-111-1111', 'goated@dev.com', pfp1);
    const elon = createContact('Chief Technoking', 'Elon Musk', '123-999-0000', 'elon@musk.com', pfp2);
    container.appendChild(will);
    container.appendChild(elon);

    return container;
}