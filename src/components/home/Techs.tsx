import { LogosList } from "./LogosList";

export const Techs = () => {
    const languages: string[] = ['python', 'javascript', 'typescript'];
    const frameworks: string[] = ['flask', 'fastapi', 'django', 'express', 'react', 'react-native'];
    const other_tools: string[] = ['linux', 'postman', 'git', 'github'];
    return (
        <div>
            <h2>Lenguajes</h2>
            <LogosList logos={languages} />

            <h2>Frameworks</h2>
            <LogosList logos={frameworks} />

            <h2>Otras Herramientas</h2>
            <LogosList logos={other_tools} />
        </div>
    );
};
