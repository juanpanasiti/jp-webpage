export interface LangState {
    currentLang: 'es' | 'en';
    strings: Strings;
}

export interface Strings {
    commons: CommonsStrings;
    navStrings: NavStrings;
}

export interface CommonsStrings {}

export interface NavStrings {
    toHomeTxt: string;
    toProjectsTxt: string;
    toBlogTxt: string;
    toContactTxt: string;
}
