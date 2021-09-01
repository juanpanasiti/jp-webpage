import { useQuery } from 'graphql-hooks';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { getAboutMe } from '../../graphql/aboutMeQueries';
import { RootState } from '../../interfaces/redux-interfaces/rootState';
import { FakeTitle } from '../common/styledComponets';

export const AboutMe = () => {
    const { mainTitle, paragraphs } = useSelector((state: RootState) => state.lang.strings.contactPageStrings.aboutMeComponent);
    const { currentLang } = useSelector((state: RootState) => state.lang);
    let title = null;
    let body = null;
    const { loading, error, data } = useQuery(getAboutMe, {
        variables: {
            lang: currentLang,
        },
    });
    if (error) {
        console.error(error);
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    if (data) {
        title = data.aboutMe.title;
        body = data.aboutMe.body;
    }
    return (
        <FakeContainer>
            <FakeTitle>{title}</FakeTitle>
            <ReactMarkdown>{body}</ReactMarkdown>
        </FakeContainer>
    );
};

const FakeContainer = styled.div`
    padding: 1.5rem 0;
`;

const FakeParagraphs = styled.div`
    font-size: 16px;
`;
