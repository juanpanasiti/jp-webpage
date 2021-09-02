import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faHome, faSuitcase, faComment, faLanguage } from '@fortawesome/free-solid-svg-icons';

import { RootState } from '../../interfaces/redux-interfaces/rootState';
import { setLangEn, setLangEs } from '../../redux/actions/langActions';
import styled from 'styled-components';

export const Navigation = () => {
    const lang = useSelector((state: RootState) => state.lang);
    const strings = lang.strings.navStrings;
    const dispatch = useDispatch();

    const handleChangeLang = () => {
        if (lang.currentLang === 'es') {
            dispatch(setLangEn());
        } else {
            dispatch(setLangEs());
        }
    };
    return (
        <Nav>
            <FakeBrand>{'<JP/>'}</FakeBrand>
            <FakeMenuLinks>
                <MenuItem>
                    <FontAwesomeIcon icon={faHome} />
                    <Link to="/">{strings.toHomeTxt}</Link>
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon={faSuitcase} />
                    <Link to="/projects">{strings.toProjectsTxt}</Link>
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon={faKeyboard} />
                    <Link to="/blog">{strings.toBlogTxt}</Link>
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon={faComment} />
                    <Link to="/contact">{strings.toContactTxt}</Link>
                </MenuItem>
                <FakeButton onClick={handleChangeLang}><FontAwesomeIcon icon={faLanguage} style={{fontSize:'20px'}} />{lang.currentLang}</FakeButton>
            </FakeMenuLinks>
        </Nav>
    );
};

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.primary};
    color: white;
    padding: 1rem 1rem;
    align-items: center;
    justify-content: space-between;
`;

const FakeBrand = styled.div`
    font-size: 30px;
    font-family: 'Comfortaa', 'Arial';
    font-weight: bolder;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.3rem;
`

const FakeMenuLinks = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1.5rem;
    a {
        text-decoration: none;
        color: white;
        :visited {
            color: white;
        }
    }
`;

const FakeButton = styled.div`
    border-radius: 5px;
    border-color: white;
    border-width: 1px;
    border-style: solid;
    text-transform: uppercase;
    margin-left: 2rem;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 0.3rem;
`;
