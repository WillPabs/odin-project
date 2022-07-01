import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

const generateUserContent = (user) => {
    const header = Header(user);
    const main = Main(user);
    return { header, main };
}

const displayUserContent = (user) => {
    const userContent = generateUserContent(user);
    document.querySelector('header').appendChild(userContent.header);
    document.querySelector('main').appendChild(userContent.main);
    
    const footer = Footer();
    document.querySelector('footer').appendChild(footer);
};