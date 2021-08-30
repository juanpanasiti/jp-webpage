export const getAllProjects = `query MyProjects($lang: SiteLocale) {
    allProjects(locale: $lang) {
      id
      name
      projectKind
      summary
      coverImage {
        url
      }
    }
  }`;
