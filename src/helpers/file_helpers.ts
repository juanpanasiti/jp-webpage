export const getImageURL = (logo_name: String) => {
    const img_path = 'src/assets/imgs/'
    switch (logo_name) {
        case 'javascript':
            return `${img_path}/js_logo.svg`;
        case 'typescript':
            return `${img_path}/ts_logo.svg`;
        case 'python':
            return `${img_path}/python_logo.svg`;
        case 'flask':
            return `${img_path}/flask_logo.svg`;
        case 'fastapi':
            return `${img_path}/fastapi_logo.svg`;
        case 'django':
            return `${img_path}/django_logo.svg`;
        case 'express':
            return `${img_path}/express_logo.svg`;
        case 'react':
            return `${img_path}/react_logo.svg`;
        case 'react-native':
            return `${img_path}/react_native_logo.svg`;
        case 'linux':
            return `${img_path}/linux_logo.svg`;
        case 'postman':
            return `${img_path}/postman_logo.svg`;
        case 'git':
            return `${img_path}/git_logo.svg`;
        case 'github':
            return `${img_path}/github_logo.svg`;
        case 'terminal':
            return `${img_path}/terminal_logo.svg`;
        default:
            return `${img_path}/logo.png`;
    }
};
