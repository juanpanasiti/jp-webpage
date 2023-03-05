import Carousel from 'nuka-carousel/lib/carousel';
import { easeCircleOut, easeElasticOut } from 'd3-ease';

import { Logo } from './Logo';
import './logos.css';

interface Props {
    logos: string[];
}
export const LogosList = ({ logos }: Props) => {
    return (
        <div className='logos__container'>
            <Carousel style={{zIndex:-1}}
				defaultControlsConfig={{
					nextButtonStyle:{display:'none'},
					prevButtonStyle:{display:'none'},
					pagingDotsStyle:{zIndex: -1},
				}}
                autoplay
				cellSpacing={25}
				cellAlign='center'
                wrapAround={true} slidesToShow={1}
				autoplayInterval={1000}
				animation='zoom'
				speed={1000}
				pauseOnHover
				easing={easeCircleOut} edgeEasing={easeElasticOut}
            >
                {logos.map((logo) => (
                    <Logo logo_name={logo} key={logo} />
                ))}
            </Carousel>
        </div>
    );
};
