export const getAllProjects = `query MyProjects($lang: SiteLocale) {
  allProjects(locale: $lang) {
    id
    name
    projectKind
    summary
    coverImage {
      url
    }
    downloadUrl
    githubUrl
    description
    demoUrl
    tags
    updatedAt
    projectStatus
    productionUrl
    createdAt
    screenshots {
      url
    }
  }
}`;
