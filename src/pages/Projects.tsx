import { useQuery } from 'graphql-hooks';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Loading } from '../components/common/Loading';
import { FakePageContainer } from '../components/common/styledComponets';
import { ProjectCard } from '../components/projects/ProjectCard';
import { getAllProjects } from '../graphql/projectQueries';
import { Project } from '../interfaces/dato-cms/projectInterfaces';
import { RootState } from '../interfaces/redux-interfaces/rootState';

export const Projects = () => {
    const { currentLang } = useSelector((state: RootState) => state.lang);
    let projects: Project[] = [];
    const { loading, error, data } = useQuery(getAllProjects, {
        variables: {
            lang: currentLang,
        },
    });
    if (!loading && data?.allProjects) {
        projects = data.allProjects;
    }
    if (loading) {
        return (
            <FakePageContainer>
                <Loading />
            </FakePageContainer>
        );
    }
    return (
        <FakePageContainer>
            {!!error && <div>{error}</div>}

            {!loading && (
                <FakeProjectsContainer>
                    {projects.map((project: Project) => (
                        <ProjectCard project={project} currentLang={currentLang} key={project.id}/>
                    ))}
                </FakeProjectsContainer>
            )}
        </FakePageContainer>
    );
};
const FakeProjectsContainer = styled.div`
    display: flex;
    row-gap: 0.5rem;
    padding: 0.5rem 0;
`;

