import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../interfaces/redux-interfaces/rootState';
import { setLangEn, setLangEs } from '../../redux/actions/langActions';

export const Navigation = () => {
    const lang = useSelector((state: RootState) => state.lang);
    const strings = lang.strings.navStrings;
    const dispatch = useDispatch();

    const handleChangeLang = () => {
        if (lang.currentLang === 'es') {
            console.log('Change to english');
            dispatch(setLangEn());
        } else {
            console.log('cambiar a español');
            dispatch(setLangEs());
        }
    };
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">{strings.toHomeTxt}</Link>
                </li>
                <li>
                    <Link to="/projects">{strings.toProjectsTxt}</Link>
                </li>
                <li>
                    <Link to="/blog">{strings.toBlogTxt}</Link>
                </li>
                <li>
                    <Link to="/contact">{strings.toContactTxt}</Link>
                </li>
                <li>
                    <button onClick={handleChangeLang}>{lang.currentLang}</button>
                </li>
            </ul>
        </nav>
    );
};
