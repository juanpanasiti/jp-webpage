export const getAboutMe = `query AboutMe($lang: SiteLocale) {
    aboutMe(locale: $lang) {
      title
      body
    }
  }`;
