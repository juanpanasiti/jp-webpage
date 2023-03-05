import { getImageURL } from '../../helpers/file_helpers'
import { Logo } from './Logo'
import './logos.css'

interface Props {
    logos: string[]
}
export const LogosList = ({logos}: Props) => {
  return (
    <div className='logos__container'>
        {logos.map(logo => <Logo logo_name={logo} key={logo} />)}
    </div>

  )
}
