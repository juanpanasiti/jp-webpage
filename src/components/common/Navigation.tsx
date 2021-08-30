import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
                <Link to="/">{strings.toHomeTxt}</Link>
                <Link to="/projects">{strings.toProjectsTxt}</Link>
                <Link to="/blog">{strings.toBlogTxt}</Link>
                <Link to="/contact">{strings.toContactTxt}</Link>
                <FakeButton onClick={handleChangeLang}>{lang.currentLang}</FakeButton>
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

const FakeMenuLinks = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
        text-decoration: none;
        padding: 0.1rem 0.2rem;
        margin-left: 1rem;
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
`
