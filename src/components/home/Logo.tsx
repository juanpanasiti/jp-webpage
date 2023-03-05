import { getLogoInfo } from '../../helpers/logos_helpers';
import './logo.css'
interface Props {
    logo_name: string;
}

export const Logo = ({ logo_name }: Props) => {
    const logo_info = getLogoInfo(logo_name)
    return (
        <div className='logo-container'>
            <img className='logo-img' src={logo_info.img} />
            <div className="logo-title">{logo_info.title}</div>
            <div className="logo-foreground"></div>
        </div>
    );
};
