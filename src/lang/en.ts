import { LangState } from '../interfaces/redux-interfaces/langInterfaces';

export const langEn: LangState = {
    currentLang: 'en',
    strings: {
        commons: {},
        navStrings: {
            toHomeTxt: 'Home',
            toProjectsTxt: 'Projects',
            toBlogTxt: 'Blog',
            toContactTxt: 'Contact',
        },
        footerStrings: {
            rightsTxt: 'Webpage developed by me using React — Mendoza, Argentina (2021)',
        },
        homePageStrings: {
            toContact: 'How to contact me',
            toGithub: 'See my GitHub',
            toProjects: 'See my projects',
            frameworksTitle: 'Frameworks',
            languagesTitle: 'Languages',
            otherToolsTitle: 'Other tools',
            reactAclarationTxt: 'Yes, React is indeed a library, not a framework, I know!',
        },
    },
};
