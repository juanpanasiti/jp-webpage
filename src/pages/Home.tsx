import { FakeBorderedButton, FakePageContainer } from '../components/common/styledComponets';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../interfaces/redux-interfaces/rootState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import * as logos from '../assets/img';
import { Link } from 'react-router-dom';

export const Home = () => {
    const homeStrings = useSelector((state: RootState) => state.lang.strings.homePageStrings);
    return (
        <FakePageContainer>
            {/* My name and profession */}
            <FakeTitleContainer>
                <FakeMainTitle>Juan M. Panasiti</FakeMainTitle>
                <FakeMainSubtitle>{"<Developer seniority='Jr.' />"}</FakeMainSubtitle>
            </FakeTitleContainer>

            {/* Buttons call-to-action */}
            <FakeButtonsContainer>
                <FakeBorderedButton style={{ fontSize: '20px' }}>
                    <Link to="/projects">
                        <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '0.4rem' }} />
                        <span>{homeStrings.toProjects}</span>
                    </Link>
                </FakeBorderedButton>
                <FakeBorderedButton style={{ fontSize: '20px' }} onClick={() => window.open('https://github.com/juanpanasiti/', '_blank')}>
                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '0.4rem' }} />
                    <span>{homeStrings.toGithub}</span>
                </FakeBorderedButton>
                <FakeBorderedButton style={{ fontSize: '20px' }}>
                    <Link to="/contact">
                        <FontAwesomeIcon icon={faLink} style={{ marginRight: '0.4rem' }} />
                        <span>{homeStrings.toContact}</span>
                    </Link>
                </FakeBorderedButton>
            </FakeButtonsContainer>
            {/* Techs */}
            <FakeTechsContainer>
                {/* Languages */}
                <FakeMainSubtitle>{homeStrings.languagesTitle}</FakeMainSubtitle>
                <FakeLogosContainer>
                    <FakeLogo src={logos.js} />
                    <FakeLogo src={logos.ts} />
                    <FakeLogo src={logos.python} />
                </FakeLogosContainer>
                {/* Frameworks */}
                <FakeMainSubtitle>{homeStrings.frameworksTitle}</FakeMainSubtitle>
                <FakeLogosContainer>
                    <FakeLogo src={logos.react} />
                    <FakeLogo src={logos.reactNative} />
                    <FakeLogo src={logos.express} />
                    <FakeLogo src={logos.flask} />
                    <FakeLogo src={logos.fastapi} />
                </FakeLogosContainer>
                <FakeAclarationText>*{homeStrings.reactAclarationTxt}</FakeAclarationText>
                {/* Other tools */}
                <FakeMainSubtitle>{homeStrings.otherToolsTitle}</FakeMainSubtitle>
                <FakeLogosContainer>
                    <FakeLogo src={logos.git} />
                    <FakeLogo src={logos.github} />
                </FakeLogosContainer>
            </FakeTechsContainer>
        </FakePageContainer>
    );
};

const FakeTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
`;

const FakeMainTitle = styled.div`
    font-family: 'Comfortaa';
    font-size: 80px;
    font-weight: bolder;
    color: #143a91;
    padding: 1rem 0;
`;

const FakeMainSubtitle = styled.div`
    font-family: 'Fira Mono';
    font-size: 30px;
    font-weight: lighter;
    margin-top: 1rem;
`;

const FakeButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem 0;
`;

const FakeTechsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FakeLogosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
    margin: 1rem 0;
`;
const FakeAclarationText = styled.span`
    color: grey;
    font-size: 12px;
    font-weight: lighter;
`;
const FakeLogo = styled.img`
    height: 100px;
`;
