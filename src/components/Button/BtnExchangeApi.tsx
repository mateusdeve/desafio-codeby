import { useContext } from 'react'
import {BtnOutline, Container} from './styled'
import { GlobalContext } from '../../Context/GlobalContext';

interface PropsButton{
  text: string;
}

const BtnExchangeApi = ({text}:PropsButton) =>{
  const {setIsShippingFree, isShippingFree} = useContext(GlobalContext)
 return(
   <Container>
     <BtnOutline onClick={() => setIsShippingFree(!isShippingFree)}>{text} {isShippingFree ? '- Frete Grátis' : '- Com Frete'}</BtnOutline>
   </Container>
 )
}

export default BtnExchangeApi