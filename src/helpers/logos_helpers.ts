import { getImageURL } from './file_helpers';

interface LogoInfo {
    title: string;
    img: string;
}
export const getLogoInfo = (logo_name: string): LogoInfo => {
    switch (logo_name) {
        case 'javascript':
            return {
                title: 'JavaScript',
                img: getImageURL(logo_name),
            };
        case 'typescript':
            return {
                title: 'TypeScript',
                img: getImageURL(logo_name),
            };
        case 'python':
            return {
                title: 'Python',
                img: getImageURL(logo_name),
            };
        case 'flask':
            return {
                title: 'Flask',
                img: getImageURL(logo_name),
            };
        case 'fastapi':
            return {
                title: 'FastAPI',
                img: getImageURL(logo_name),
            };
        case 'django':
            return {
                title: 'Django',
                img: getImageURL(logo_name),
            };
        case 'express':
            return {
                title: 'Express',
                img: getImageURL(logo_name),
            };
        case 'react':
            return {
                title: 'React',
                img: getImageURL(logo_name),
            };
        case 'react-native':
            return {
                title: 'React Native',
                img: getImageURL(logo_name),
            };
        case 'linux':
            return {
                title: 'Linux',
                img: getImageURL(logo_name),
            };
        case 'postman':
            return {
                title: 'Postman',
                img: getImageURL(logo_name),
            };
        case 'git':
            return {
                title: 'Git',
                img: getImageURL(logo_name),
            };
        case 'github':
            return {
                title: 'GitHub',
                img: getImageURL(logo_name),
            };
        case 'terminal':
            return {
                title: 'Terminal/Consola',
                img: getImageURL(logo_name),
            };
            

        default:
            return {
                title: 'No Title',
                img: getImageURL('default'),
            };
    }
};
