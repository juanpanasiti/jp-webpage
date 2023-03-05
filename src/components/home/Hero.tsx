import { Button } from '../common/Button';
import './hero.css';

export const Hero = () => {
    return (
        <div className='hero__container'>
            <h1 className='hero__title'>Juan M. Panasiti</h1>
            <div className='hero__subtitle'>{"<Developer langs=['Python', 'JS', 'TS'] />"}</div>

            <div className='hero__button-container'>
                <Button name='Portafolio' />
                <Button name='Mi GitHub' />
                <Button name='Contáctame' />
            </div>
        </div>
    );
};
