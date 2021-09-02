import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import { getVCard } from '../../helpers/getVCard';
import { RootState } from '../../interfaces/redux-interfaces/rootState';
import { lightTheme } from '../../themes/lightTheme';
import { FakeSubtitle, FakeTitle } from '../common/styledComponets';

export const HowToContactMe = (props: any) => {
    const vCard = getVCard();
    const { title, subtitle, scanCodeSubtitle } = useSelector((state: RootState) => state.lang.strings.howToContactStrings);
    return (
        <MainContainer>
            <FakeTitle style={{alignSelf:'flex-start'}}>{title}</FakeTitle>
            <FakeSubtitle>{subtitle}</FakeSubtitle>
            <FakeContactContainer>
                <FakeContact onClick={() => window.open('mailto:juanpanasiti@gmail.com', '_blank')}>
                    <FontAwesomeIcon icon={faAt} />
                    <FakeSpan>E-mail</FakeSpan>
                </FakeContact>
                <FakeContact onClick={() => window.open('https://www.linkedin.com/in/juanmpanasiti/', '_blank')}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FakeSpan>LinkedIn</FakeSpan>
                </FakeContact>
                <FakeContact onClick={() => window.open('https://t.me/juanmpanasiti', '_blank')}>
                    <FontAwesomeIcon icon={faTelegram} />
                    <FakeSpan>Telegram</FakeSpan>
                </FakeContact>
                <FakeContact onClick={() => window.open('https://wa.me/542615320484', '_blank')}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <FakeSpan>Whatsapp</FakeSpan>
                </FakeContact>
            </FakeContactContainer>
            <FakeSubtitle>{scanCodeSubtitle}</FakeSubtitle>
            <FakeQRContainer>
                <QRCode value={vCard.toString()} size={200} fgColor={lightTheme.primary} title='title' />
            </FakeQRContainer>
        </MainContainer>
    );
};
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FakeContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
    color: ${props => props.theme.primary};
    font-size: 50px;
    cursor: pointer;
`;
const FakeQRContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;
const FakeContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :hover {
        filter: brightness(0.5);
    }
`;
const FakeSpan = styled.span`
    font-size: 18px;
`;
