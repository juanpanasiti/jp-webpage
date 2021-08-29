import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces/redux-interfaces/rootState';

export const Footer = () => {
    const strings = useSelector((state: RootState) => state.lang.strings.footerStrings);
    return (
        <FakeContainer>
            <FakeSocialsContainer>
                <FakeSocial>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FakeSpan>Facebook</FakeSpan>
                </FakeSocial>
                <FakeSocial>
                    <FontAwesomeIcon icon={faTwitter} />
                    <FakeSpan>Twitter</FakeSpan>
                </FakeSocial>
                <FakeSocial>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FakeSpan>LinkedIn</FakeSpan>
                </FakeSocial>
                <FakeSocial>
                    <FontAwesomeIcon icon={faInstagram} />
                    <FakeSpan>Instagram</FakeSpan>
                </FakeSocial>
                <FakeSocial>
                    <FontAwesomeIcon icon={faGithub} />
                    <FakeSpan>Github</FakeSpan>
                </FakeSocial>
                <FakeSocial>
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
    font-size: 0.8rem;
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
`;
const FakeSpan = styled.span`
font-size: 12px;
`;
