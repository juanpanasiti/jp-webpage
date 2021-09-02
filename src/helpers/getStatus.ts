interface Props {
    status: 'idea' | 'in-planing' | 'in-dev' | 'abandoned' | 'finished' | 'in-demo' | 'in-prod';
    lang: 'es' | 'en';
}
export const getStatusProject = ({ status, lang }: Props) => {
    let color = '#000000';
    switch (status) {
        case 'idea':
            color = '#f8fc03';
            break;
            case 'in-planing':
            color = '#fcba03';
            break;
        case 'in-dev':
            color = '#fc6b03';
            break;
        case 'abandoned':
            color = '#fc0303';
            break;
        case 'finished':
            color = '#0aa837';
            break;
        case 'in-demo':
            color = '#a3ed1a';
            break;
        case 'in-prod':
            color = '#10e66d';
            break;

        default:
            break;
    }
    return {status, color}
};

