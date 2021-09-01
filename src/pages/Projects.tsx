import { useQuery } from 'graphql-hooks'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { FakePageContainer, FakeTitle } from '../components/common/styledComponets';
import { getAllProjects } from '../graphql/projectQueries'
import { Project } from '../interfaces/dato-cms/projectInterfaces';
import { RootState } from '../interfaces/redux-interfaces/rootState';

export const Projects = () => {
    const {currentLang} = useSelector((state: RootState) => state.lang);
    let projects: Project[] = []
    const { loading, error, data } = useQuery(getAllProjects, {
        variables:{
            lang: currentLang
        }
    })
    if (!loading && data?.allProjects) {
        projects = data.allProjects 
    }
    return (
        <FakePageContainer>
            {
                !!error && <div>{error}</div>
            }

            { loading ? 
            <div>loading</div> :
            <FakeProjectsContainer>
            {projects.map((project: Project) => (<FakeProjectCard key={project.id}>
                <FakeInfoContainer>
                    
                    <FakeTitleContainer>
                        <FakeKind>{project.projectKind}</FakeKind>
                        <FakeTitle>{project.name}</FakeTitle>
                    </FakeTitleContainer>
                    <FakeSummary>{project.summary}</FakeSummary>
                </FakeInfoContainer>
                    <FakeImage src={project.coverImage.url}></FakeImage>
            </FakeProjectCard>)) }
            </FakeProjectsContainer>
            }
        </FakePageContainer>
    )
}
const FakeProjectsContainer = styled.div`
    display: flex;
    row-gap: 0.5rem;
    padding: 0.5rem 0;
`
const FakeProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.5rem 1rem;
    border: 2px solid lightgray;
    border-radius: 8px;
`
const FakeInfoContainer = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    align-items: flex-start;
    column-gap: 1rem;
`
const FakeTitleContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`

const FakeKind = styled.span`
    font-family: 'Fira Mono';
    background-color: black;
    color: white;
    padding: 0.2rem 0.2rem;
    border-radius: 20px;
    font-size: 10px;

    
`
const FakeSummary = styled.p`
    
`

const FakeImage = styled.img`
    align-self: flex-end;
    width: 300px;
`