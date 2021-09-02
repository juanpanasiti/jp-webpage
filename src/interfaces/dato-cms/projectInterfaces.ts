export interface Project {
    id: any;
    name: string;
    projectKind: string;
    summary: string;
    coverImage: {
        url: string;
    };
    downloadUrl: string;
    githubUrl: string;
    description: string;
    demoUrl: string;
    tags: string;
    updatedAt: string;
    projectStatus: string;
    productionUrl: string;
    createdAt: string;
    screenshots:any
}
