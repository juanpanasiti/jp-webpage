import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHome, faCode, faGlobeAmericas, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ReactMarkdown from 'react-markdown';

import { Project } from '../../interfaces/dato-cms/projectInterfaces';
import { FakeTitle } from '../common/styledComponets';
import { getStatusProject } from '../../helpers/getStatus';

interface Props {
    project: Project;
    currentLang: 'es' | 'en';
}
export const ProjectCard = ({ project, currentLang }: Props) => {
    const tags = project.tags.split(',');
    const { status, color } = getStatusProject({ status: project.projectStatus as any, lang: currentLang });
    const handleClick = (url: any) => {
        console.log('url', url);
        if (url) {
            window.open(url, '_blank');
        }
    };
    return (
        <FakeContainer>
            <FakeInfoContainer>
                <FakeTitleContainer>
                    <FakeKind>{project.projectKind}</FakeKind>
                    <FakeTitle>{project.name}</FakeTitle>
                </FakeTitleContainer>
                <FakeSummary>
                    <ReactMarkdown>{project.summary}</ReactMarkdown>
                </FakeSummary>
                <FakeStatusContaner style={{ color: color }}>
                    <FontAwesomeIcon icon={faCircle} />
                    <FakeStatus>{status}</FakeStatus>
                </FakeStatusContaner>
                <FakeTagsContainer>
                    {tags.map(tag => (
                        <FakeTag>{tag}</FakeTag>
                    ))}
                </FakeTagsContainer>
            </FakeInfoContainer>

            <FakeButtonsContainer>
                {project.demoUrl && (
                    <FakeIconButton onClick={() => handleClick(project.demoUrl)}>
                        <FontAwesomeIcon icon={faCode} />
                        <span>Test</span>
                    </FakeIconButton>
                )}
                {project.productionUrl && (
                    <FakeIconButton onClick={() => handleClick(project.productionUrl)}>
                        <FontAwesomeIcon icon={faGlobeAmericas} />
                        <span>Prod</span>
                    </FakeIconButton>
                )}
                {project.githubUrl && (
                    <FakeIconButton onClick={() => handleClick(project.githubUrl)}>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>GitHub</span>
                    </FakeIconButton>
                )}
                {project.downloadUrl && (
                    <FakeIconButton onClick={() => handleClick(project.downloadUrl)}>
                        <FontAwesomeIcon icon={faDownload} />
                        <span>Download</span>
                    </FakeIconButton>
                )}
            </FakeButtonsContainer>

            <FakeImageContainer>
                <FakeImage src={project.coverImage.url}></FakeImage>
            </FakeImageContainer>
        </FakeContainer>
    );
};

const FakeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.5rem 1rem;
    border: 2px solid lightgray;
    border-radius: 8px;
`;
const FakeInfoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    column-gap: 1rem;
`;

const FakeButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    row-gap: 0.5rem;
    align-self: center;

    span {
        font-size: 0.8rem;
    }
`;
const FakeTitleContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`;

const FakeKind = styled.span`
    font-family: 'Fira Mono';
    background-color: black;
    color: white;
    padding: 0.2rem 0.2rem;
    border-radius: 20px;
    font-size: 10px;
`;

const FakeImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const FakeSummary = styled.p`
    margin: 0;
`;

const FakeImage = styled.img`
    align-self: flex-end;
    width: 300px;
`;

const FakeIconButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.primary};
    :hover {
        filter: brightness(1.5);
        cursor: pointer;
    }
`;
const FakeStatusContaner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    column-gap: 0.3rem;
    font-size: 1rem;
`;
const FakeStatus = styled.p`
    font-size: 1rem;
    margin: 0;
`;

const FakeTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
    padding: 0.5rem 0;
`;

const FakeTag = styled.span`
    background-color: lightblue;
    padding: 0rem 0.5rem;
    border-radius: 10px;
    font-size: 0.7rem;
    font-weight: bold;
`;
