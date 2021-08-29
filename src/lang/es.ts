import { LangState } from '../interfaces/redux-interfaces/langInterfaces';

export const langEs: LangState = {
    currentLang: 'es',
    strings: {
        commons: {},
        navStrings: {
            toHomeTxt: 'Home',
            toProjectsTxt: 'Mis Proyectos',
            toBlogTxt: 'Blog',
            toContactTxt: 'Contacto',
        },
        footerStrings: {
            rightsTxt: 'Página desarrollada por mi utilizando React — Mendoza, Argentina (2021)',
        },
        homePageStrings: {
            toContact: 'Cómo contactarme',
            toGithub: 'Ver mi GitHub',
            toProjects: 'Ver mis proyectos',
            frameworksTitle: 'Frameworks',
            languagesTitle: 'Languajes',
            otherToolsTitle: 'Otras herramientas',
            reactAclarationTxt:'Si, React es en realidad una librería, no un framework, lo sé!'
        },
    },
};