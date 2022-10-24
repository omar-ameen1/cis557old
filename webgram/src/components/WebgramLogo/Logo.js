import Webgram from '../../assets/Webgram.svg';
import { Image } from './styles';
export const Logo = ({height=40, width=180}) =>{
    return (
        <Image src={Webgram}></Image>
    )
};

export default Logo;