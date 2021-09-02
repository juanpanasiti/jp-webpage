import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces/redux-interfaces/rootState';

export const Footer = () => {
    const strings = useSelector((state: RootState) => state.lang.strings.footerStrings);
    return (
        <FakeContainer>
            <FakeSocialsContainer>
                <FakeSocial onClick={()=> window.open("https://twitter.com/JPanasiti", "_blank")}>
                    <FontAwesomeIcon icon={faTwitter} />
                    <FakeSpan>Twitter</FakeSpan>
                </FakeSocial>
                <FakeSocial onClick={()=> window.open("https://www.linkedin.com/in/juanmpanasiti/", "_blank")} >
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FakeSpan>LinkedIn</FakeSpan>
                </FakeSocial>
                <FakeSocial onClick={()=> window.open("https://www.instagram.com/juanmpanasiti/", "_blank")} >
                    <FontAwesomeIcon icon={faInstagram} />
                    <FakeSpan>Instagram</FakeSpan>
                </FakeSocial>
                <FakeSocial onClick={()=> window.open("https://github.com/juanpanasiti/", "_blank")} >
                    <FontAwesomeIcon icon={faGithub} />
                    <FakeSpan>Github</FakeSpan>
                </FakeSocial>
                <FakeSocial onClick={()=> window.open("https://t.me/juanmpanasiti", "_blank")} >
                    <FontAwesomeIcon icon={faTelegram} />
                    <FakeSpan>Telegram</FakeSpan>
                </FakeSocial>
            </FakeSocialsContainer>
            <FakeRigths>{strings.rightsTxt}</FakeRigths>
        </FakeContainer>
    );
};
const FakeContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.primary};
    color: white;
    padding: 1rem 1rem;
    align-items: center;
    justify-content: center;
`;

const FakeRigths = styled.span`
    align-self: flex-start;
    font-size: 0.6rem;
    padding-top: 0.5rem;
`

const FakeSocialsContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`;
const FakeSocial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    cursor: pointer;
`;
const FakeSpan = styled.span`
font-size: 12px;
`;
