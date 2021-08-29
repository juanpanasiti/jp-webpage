export interface LangState {
    currentLang: 'es' | 'en';
    strings: Strings;
}

export interface Strings {
    commons: CommonsStrings;
    navStrings: NavStrings;
    footerStrings: FooterStrings;
    homePageStrings: HomePageStrings;
}

export interface CommonsStrings {}

export interface NavStrings {
    toHomeTxt: string;
    toProjectsTxt: string;
    toBlogTxt: string;
    toContactTxt: string;
}
export interface FooterStrings {
    rightsTxt: string;
}

export interface HomePageStrings {
    toProjects: string;
    toGithub: string;
    toContact: string;
    languagesTitle: string;
    frameworksTitle: string;
    otherToolsTitle: string;
    reactAclarationTxt: string;
}
